'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

type Difficulty = 'easy' | 'medium' | 'hard';

interface Dot {
  id: number;
  x: number;
  y: number;
  vx?: number;
  vy?: number;
  color: string;
}

export default function FocusGame() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [focusQuality, setFocusQuality] = useState(100);
  const [dots, setDots] = useState<Dot[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);

  const difficultySettings = {
    easy: { duration: 180, movingDot: false, distractions: false },
    medium: { duration: 300, movingDot: true, distractions: false },
    hard: { duration: 420, movingDot: true, distractions: true },
  };

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false);
      setIsComplete(true);
    }
  }, [isPlaying, timeLeft]);

  useEffect(() => {
    if (isPlaying && difficulty) {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const settings = difficultySettings[difficulty];

      // Initialize dots
      const newDots: Dot[] = [
        {
          id: 0,
          x: canvas.width / 2,
          y: canvas.height / 2,
          vx: settings.movingDot ? (Math.random() - 0.5) * 2 : 0,
          vy: settings.movingDot ? (Math.random() - 0.5) * 2 : 0,
          color: '#ef4444', // red
        },
      ];

      // Add distraction dots for hard mode
      if (settings.distractions) {
        const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
        for (let i = 0; i < 8; i++) {
          newDots.push({
            id: i + 1,
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3,
            color: colors[i % colors.length],
          });
        }
      }

      setDots(newDots);

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw dots
        setDots(prevDots => {
          const updatedDots = prevDots.map(dot => {
            let newX = dot.x + (dot.vx || 0);
            let newY = dot.y + (dot.vy || 0);
            let newVx = dot.vx;
            let newVy = dot.vy;

            // Bounce off walls
            if (newX <= 15 || newX >= canvas.width - 15) {
              newVx = -(dot.vx || 0);
              newX = newX <= 15 ? 15 : canvas.width - 15;
            }
            if (newY <= 15 || newY >= canvas.height - 15) {
              newVy = -(dot.vy || 0);
              newY = newY <= 15 ? 15 : canvas.height - 15;
            }

            return { ...dot, x: newX, y: newY, vx: newVx, vy: newVy };
          });

          // Draw dots
          updatedDots.forEach(dot => {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 15, 0, 2 * Math.PI);
            ctx.fillStyle = dot.color;
            ctx.fill();

            // Add glow to red dot
            if (dot.id === 0) {
              ctx.shadowBlur = 20;
              ctx.shadowColor = dot.color;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          });

          // Check focus quality based on mouse distance to red dot
          const redDot = updatedDots[0];
          const distance = Math.sqrt(
            Math.pow(mousePositionRef.current.x - redDot.x, 2) +
            Math.pow(mousePositionRef.current.y - redDot.y, 2)
          );

          if (distance > 100) {
            setFocusQuality(prev => Math.max(0, prev - 0.05));
          } else {
            setFocusQuality(prev => Math.min(100, prev + 0.02));
          }

          return updatedDots;
        });

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [isPlaying, difficulty]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mousePositionRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startGame = (diff: Difficulty) => {
    setDifficulty(diff);
    setTimeLeft(difficultySettings[diff].duration);
    setIsPlaying(true);
    setIsComplete(false);
    setFocusQuality(100);
  };

  const resetGame = () => {
    setDifficulty(null);
    setIsPlaying(false);
    setTimeLeft(0);
    setIsComplete(false);
    setFocusQuality(100);
    setDots([]);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white/60 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="text-2xl font-semibold text-pink-600 hover:text-pink-700 transition">
            ← MindFlow
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-pink-900">
            Red Dot Focus Game
          </h1>
          <p className="text-lg text-pink-700 leading-relaxed">
            Train your concentration by keeping your cursor on the red dot
          </p>
        </div>

        {!difficulty && !isComplete && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Easy */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-300">
                <div className="text-center">
                  <div className="text-5xl mb-4">🟢</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Easy</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Focus on a stationary red dot for 3 minutes. Perfect for beginners building concentration.
                  </p>
                  <button
                    onClick={() => startGame('easy')}
                    className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg w-full"
                  >
                    Start Easy
                  </button>
                </div>
              </div>

              {/* Medium */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-yellow-300">
                <div className="text-center">
                  <div className="text-5xl mb-4">🟡</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Medium</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Track a slowly moving red dot for 5 minutes. Challenge your sustained attention.
                  </p>
                  <button
                    onClick={() => startGame('medium')}
                    className="bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition-all duration-300 shadow-lg w-full"
                  >
                    Start Medium
                  </button>
                </div>
              </div>

              {/* Hard */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-300">
                <div className="text-center">
                  <div className="text-5xl mb-4">🔴</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Hard</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Stay focused on the red dot for 7 minutes while colorful distractions move around it.
                  </p>
                  <button
                    onClick={() => startGame('hard')}
                    className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg w-full"
                  >
                    Start Hard
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-pink-900">
                Why Focus Training Matters
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <p className="text-sm text-pink-700 leading-relaxed">
                    Improves attention span by training your brain to ignore distractions
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🧠</div>
                  <p className="text-sm text-pink-700 leading-relaxed">
                    Strengthens neural pathways associated with concentration
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💪</div>
                  <p className="text-sm text-pink-700 leading-relaxed">
                    Builds mental endurance for sustained focus on complex tasks
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {isPlaying && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="text-center flex-1">
                  <p className="text-sm text-gray-600 mb-1">Time Remaining</p>
                  <p className="text-3xl font-bold text-pink-900">{formatTime(timeLeft)}</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-sm text-gray-600 mb-1">Focus Quality</p>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className={`h-4 rounded-full transition-all duration-300 ${
                          focusQuality > 70 ? 'bg-green-600' :
                          focusQuality > 40 ? 'bg-yellow-600' :
                          'bg-red-600'
                        }`}
                        style={{ width: `${focusQuality}%` }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold mt-1">{Math.round(focusQuality)}%</p>
                  </div>
                </div>
              </div>

              <div className="relative bg-gray-900 rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <canvas
                  ref={canvasRef}
                  width={800}
                  height={450}
                  className="w-full h-full cursor-none"
                  onMouseMove={handleMouseMove}
                />
              </div>

              <div className="mt-6 text-center">
                <p className="text-lg text-pink-700 mb-4">
                  Keep your cursor on the red dot. Don't look away!
                </p>
                <button
                  onClick={resetGame}
                  className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  End Session
                </button>
              </div>
            </div>
          </div>
        )}

        {isComplete && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-4xl font-bold mb-4 text-pink-900">
                Congratulations!
              </h2>
              <p className="text-xl text-pink-700 mb-6">
                You've completed the {difficulty} level focus training
              </p>

              <div className="bg-pink-50 rounded-2xl p-6 mb-8">
                <p className="text-lg font-semibold text-pink-900 mb-2">
                  Final Focus Quality
                </p>
                <p className="text-5xl font-bold text-pink-600">
                  {Math.round(focusQuality)}%
                </p>
                <p className="text-sm text-pink-700 mt-2">
                  {focusQuality > 80 ? 'Outstanding! Your focus is exceptional.' :
                   focusQuality > 60 ? 'Great job! Keep practicing to improve further.' :
                   'Good effort! Regular practice will enhance your focus.'}
                </p>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={resetGame}
                  className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition-all duration-300 shadow-lg"
                >
                  Try Another Level
                </button>
                <Link
                  href="/"
                  className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
