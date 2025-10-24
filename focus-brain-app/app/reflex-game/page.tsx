'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

type Difficulty = 'easy' | 'medium' | 'hard';

interface Ball {
  id: number;
  color: string;
  x: number;
  y: number;
  timestamp: number;
}

export default function ReflexGame() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [currentBall, setCurrentBall] = useState<Ball | null>(null);
  const [feedback, setFeedback] = useState<string>('');
  const [isComplete, setIsComplete] = useState(false);
  const [stats, setStats] = useState({ hits: 0, misses: 0, wrongClicks: 0 });
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const nextBallTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const difficultySettings = {
    easy: { duration: 60, ballInterval: 2000, ballDisplay: 1500, wrongPenalty: 5, missPenalty: 10 },
    medium: { duration: 60, ballInterval: 1500, ballDisplay: 1000, wrongPenalty: 10, missPenalty: 15 },
    hard: { duration: 60, ballInterval: 1000, ballDisplay: 700, wrongPenalty: 15, missPenalty: 20 },
  };

  useEffect(() => {
    const saved = localStorage.getItem('reflexHighScore');
    if (saved) setHighScore(parseInt(saved));
  }, []);

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && isPlaying) {
      endGame();
    }
  }, [isPlaying, timeLeft]);

  useEffect(() => {
    if (isPlaying && difficulty) {
      spawnBall();
    }

    return () => {
      if (nextBallTimeoutRef.current) {
        clearTimeout(nextBallTimeoutRef.current);
      }
    };
  }, [isPlaying, difficulty]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' && isPlaying) {
        e.preventDefault();
        handleSpacePress();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, currentBall]);

  const spawnBall = () => {
    if (!isPlaying || !difficulty || !gameAreaRef.current) return;

    const settings = difficultySettings[difficulty];
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#ef4444'];
    const isRedBall = Math.random() < 0.4; // 40% chance of red ball
    const color = isRedBall ? '#ef4444' : colors[Math.floor(Math.random() * (colors.length - 1))];

    const maxX = gameAreaRef.current.clientWidth - 60;
    const maxY = gameAreaRef.current.clientHeight - 60;

    const newBall: Ball = {
      id: Date.now(),
      color,
      x: Math.random() * maxX,
      y: Math.random() * maxY,
      timestamp: Date.now(),
    };

    setCurrentBall(newBall);

    // Remove ball after display time
    setTimeout(() => {
      setCurrentBall(prev => {
        if (prev?.id === newBall.id) {
          // Ball disappeared without being clicked
          if (newBall.color === '#ef4444') {
            setStats(s => ({ ...s, misses: s.misses + 1 }));
            setScore(s => Math.max(0, s - settings.missPenalty));
            setStreak(0);
            showFeedback(`-${settings.missPenalty} Missed!`, 'bad');
          }
          return null;
        }
        return prev;
      });
    }, settings.ballDisplay);

    // Schedule next ball
    nextBallTimeoutRef.current = setTimeout(() => {
      spawnBall();
    }, settings.ballInterval);
  };

  const handleSpacePress = () => {
    if (!currentBall || !difficulty) return;

    const settings = difficultySettings[difficulty];

    if (currentBall.color === '#ef4444') {
      // Correct hit
      const reactionTime = Date.now() - currentBall.timestamp;
      const points = reactionTime < 300 ? 20 : reactionTime < 500 ? 15 : 10;
      setScore(s => s + points);
      setStreak(s => s + 1);
      setStats(s => ({ ...s, hits: s.hits + 1 }));
      showFeedback(`+${points} Perfect!`, 'good');
    } else {
      // Wrong click
      setScore(s => Math.max(0, s - settings.wrongPenalty));
      setStreak(0);
      setStats(s => ({ ...s, wrongClicks: s.wrongClicks + 1 }));
      showFeedback(`-${settings.wrongPenalty} Wrong!`, 'bad');
    }

    setCurrentBall(null);
  };

  const showFeedback = (message: string, type: 'good' | 'bad') => {
    setFeedback(message);
    setTimeout(() => setFeedback(''), 800);
  };

  const startGame = (diff: Difficulty) => {
    setDifficulty(diff);
    setTimeLeft(difficultySettings[diff].duration);
    setIsPlaying(true);
    setIsComplete(false);
    setScore(0);
    setStreak(0);
    setStats({ hits: 0, misses: 0, wrongClicks: 0 });
    setCurrentBall(null);
    setFeedback('');
  };

  const endGame = () => {
    setIsPlaying(false);
    setIsComplete(true);
    setCurrentBall(null);

    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('reflexHighScore', score.toString());
    }

    if (nextBallTimeoutRef.current) {
      clearTimeout(nextBallTimeoutRef.current);
    }
  };

  const resetGame = () => {
    setDifficulty(null);
    setIsPlaying(false);
    setIsComplete(false);
    setScore(0);
    setStreak(0);
    setTimeLeft(0);
    setCurrentBall(null);
    setFeedback('');
    setStats({ hits: 0, misses: 0, wrongClicks: 0 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white/60 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="text-2xl font-semibold text-orange-600 hover:text-orange-700 transition">
            ← MindFlow
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-orange-900">
            Reflex Speed Game
          </h1>
          <p className="text-lg text-orange-700 leading-relaxed">
            Press <kbd className="px-2 py-1 bg-white rounded shadow">SPACE</kbd> when you see a red ball
          </p>
        </div>

        {!difficulty && !isComplete && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{highScore}</div>
                <p className="text-gray-700">Your High Score</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Easy */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-300">
                <div className="text-center">
                  <div className="text-5xl mb-4">🟢</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Easy</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    Balls appear every 2 seconds and stay for 1.5 seconds. Perfect for beginners.
                  </p>
                  <ul className="text-sm text-gray-600 mb-6 space-y-1">
                    <li>✅ Hit red ball: +10-20 points</li>
                    <li>❌ Wrong click: -5 points</li>
                    <li>⏰ Miss red ball: -10 points</li>
                  </ul>
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
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    Faster pace with balls every 1.5 seconds, staying for 1 second.
                  </p>
                  <ul className="text-sm text-gray-600 mb-6 space-y-1">
                    <li>✅ Hit red ball: +10-20 points</li>
                    <li>❌ Wrong click: -10 points</li>
                    <li>⏰ Miss red ball: -15 points</li>
                  </ul>
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
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    Lightning fast! Balls appear every second and stay for 0.7 seconds.
                  </p>
                  <ul className="text-sm text-gray-600 mb-6 space-y-1">
                    <li>✅ Hit red ball: +10-20 points</li>
                    <li>❌ Wrong click: -15 points</li>
                    <li>⏰ Miss red ball: -20 points</li>
                  </ul>
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
              <h3 className="text-2xl font-bold text-center mb-6 text-orange-900">
                Benefits of Reflex Training
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="text-sm text-orange-700 leading-relaxed">
                    Improves reaction time and visual processing speed
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎮</div>
                  <p className="text-sm text-orange-700 leading-relaxed">
                    Enhances hand-eye coordination and motor skills
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🧠</div>
                  <p className="text-sm text-orange-700 leading-relaxed">
                    Trains quick decision-making under pressure
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {isPlaying && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Score</p>
                  <p className="text-3xl font-bold text-orange-900">{score}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Streak</p>
                  <p className="text-3xl font-bold text-green-600">{streak}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Time</p>
                  <p className="text-3xl font-bold text-blue-600">{timeLeft}s</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">High Score</p>
                  <p className="text-3xl font-bold text-purple-600">{highScore}</p>
                </div>
              </div>

              <div
                ref={gameAreaRef}
                className="relative bg-gray-900 rounded-2xl overflow-hidden"
                style={{ height: '450px' }}
              >
                {currentBall && (
                  <div
                    className="absolute rounded-full shadow-2xl transition-all duration-200 animate-pulse"
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: currentBall.color,
                      left: `${currentBall.x}px`,
                      top: `${currentBall.y}px`,
                      boxShadow: `0 0 30px ${currentBall.color}`,
                    }}
                  />
                )}

                {feedback && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className={`text-4xl font-bold px-8 py-4 rounded-full ${
                        feedback.includes('+')
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                      } animate-bounce`}
                    >
                      {feedback}
                    </div>
                  </div>
                )}

                {!currentBall && !feedback && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-xl opacity-50">
                      Press SPACE when you see red!
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 text-center">
                <p className="text-lg text-orange-700 mb-4">
                  Press <kbd className="px-3 py-1 bg-white rounded shadow font-mono">SPACE</kbd> to hit the red ball
                </p>
                <button
                  onClick={endGame}
                  className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  End Game
                </button>
              </div>
            </div>
          </div>
        )}

        {isComplete && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h2 className="text-4xl font-bold mb-4 text-orange-900">
                Game Over!
              </h2>

              <div className="bg-orange-50 rounded-2xl p-6 mb-6">
                <p className="text-lg font-semibold text-orange-900 mb-2">
                  Final Score
                </p>
                <p className="text-6xl font-bold text-orange-600 mb-4">{score}</p>
                {score === highScore && score > 0 && (
                  <p className="text-lg text-orange-700 font-semibold">
                    🏆 New High Score!
                  </p>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-2xl font-bold text-green-600">{stats.hits}</p>
                  <p className="text-sm text-green-700">Hits</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="text-2xl font-bold text-red-600">{stats.misses}</p>
                  <p className="text-sm text-red-700">Misses</p>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4">
                  <p className="text-2xl font-bold text-yellow-600">{stats.wrongClicks}</p>
                  <p className="text-sm text-yellow-700">Wrong</p>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={resetGame}
                  className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg"
                >
                  Play Again
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
