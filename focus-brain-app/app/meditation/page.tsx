'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function MeditationTimer() {
  const [duration, setDuration] = useState(5);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);
  const [preparationStep, setPreparationStep] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const preparationMessages = [
    "Find a comfortable seated position...",
    "Relax your shoulders and let them drop...",
    "Close your eyes gently...",
    "Take a deep breath in through your nose...",
    "Exhale slowly through your mouth...",
    "Let all tension melt away...",
    "Your meditation begins now..."
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPreparing) {
      if (preparationStep < preparationMessages.length - 1) {
        interval = setTimeout(() => {
          setPreparationStep(prev => prev + 1);
        }, 3000);
      } else {
        setTimeout(() => {
          setIsPreparing(false);
          setIsActive(true);
          setTimeLeft(duration * 60);
        }, 3000);
      }
    }

    return () => clearTimeout(interval);
  }, [isPreparing, preparationStep, duration]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      playCompletionSound();
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const playCompletionSound = () => {
    // Create a gentle bell sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 528; // C note - healing frequency
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 3);
  };

  const startMeditation = () => {
    setPreparationStep(0);
    setIsPreparing(true);
  };

  const pauseMeditation = () => {
    setIsActive(false);
  };

  const resumeMeditation = () => {
    setIsActive(true);
  };

  const resetMeditation = () => {
    setIsActive(false);
    setIsPreparing(false);
    setTimeLeft(0);
    setPreparationStep(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = timeLeft > 0 ? ((duration * 60 - timeLeft) / (duration * 60)) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/60 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="text-2xl font-light text-indigo-600 hover:text-indigo-700 transition">
            ← MindFlow
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light mb-4 text-indigo-900" style={{ fontFamily: 'Georgia, serif' }}>
            Meditation Timer
          </h1>
          <p className="text-lg text-indigo-700 font-light leading-relaxed">
            Find your inner peace and cultivate mindfulness
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-12">
          {!isPreparing && !isActive && timeLeft === 0 && (
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <label className="block text-xl font-light text-indigo-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Duration (minutes)
                </label>
                <div className="flex justify-center gap-4">
                  {[5, 10, 15, 20, 30].map((min) => (
                    <button
                      key={min}
                      onClick={() => setDuration(min)}
                      className={`px-6 py-3 rounded-full text-lg font-light transition-all duration-300 ${
                        duration === min
                          ? 'bg-indigo-600 text-white shadow-lg scale-110'
                          : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                      }`}
                    >
                      {min}
                    </button>
                  ))}
                </div>
                <input
                  type="range"
                  min="1"
                  max="60"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <p className="text-3xl font-light text-indigo-900">{duration} minutes</p>
              </div>

              <button
                onClick={startMeditation}
                className="bg-indigo-600 text-white px-12 py-5 rounded-full text-xl font-light hover:bg-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Begin Your Journey
              </button>
            </div>
          )}

          {isPreparing && (
            <div className="text-center space-y-8 py-12">
              <div className="w-24 h-24 mx-auto">
                <div className="w-24 h-24 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
              </div>
              <p className="text-3xl font-light text-indigo-900 leading-relaxed animate-pulse" style={{ fontFamily: 'Georgia, serif' }}>
                {preparationMessages[preparationStep]}
              </p>
            </div>
          )}

          {isActive && (
            <div className="text-center space-y-8">
              <div className="relative w-64 h-64 mx-auto">
                <svg className="w-64 h-64 transform -rotate-90">
                  <circle
                    cx="128"
                    cy="128"
                    r="120"
                    stroke="#e0e7ff"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="128"
                    cy="128"
                    r="120"
                    stroke="#4f46e5"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 120}`}
                    strokeDashoffset={`${2 * Math.PI * 120 * (1 - progress / 100)}`}
                    className="transition-all duration-1000 ease-linear"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-5xl font-light text-indigo-900" style={{ fontFamily: 'Georgia, serif' }}>
                    {formatTime(timeLeft)}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xl font-light text-indigo-700 animate-pulse" style={{ fontFamily: 'Georgia, serif' }}>
                  Breathe... and let go...
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={pauseMeditation}
                    className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-light hover:bg-indigo-700 transition-all duration-300 shadow-lg"
                  >
                    Pause
                  </button>
                  <button
                    onClick={resetMeditation}
                    className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full text-lg font-light hover:bg-gray-300 transition-all duration-300"
                  >
                    End Session
                  </button>
                </div>
              </div>
            </div>
          )}

          {!isActive && timeLeft > 0 && (
            <div className="text-center space-y-8">
              <p className="text-5xl font-light text-indigo-900" style={{ fontFamily: 'Georgia, serif' }}>
                {formatTime(timeLeft)}
              </p>
              <p className="text-xl font-light text-indigo-700" style={{ fontFamily: 'Georgia, serif' }}>
                Paused - Take your time
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={resumeMeditation}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-light hover:bg-indigo-700 transition-all duration-300 shadow-lg"
                >
                  Resume
                </button>
                <button
                  onClick={resetMeditation}
                  className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full text-lg font-light hover:bg-gray-300 transition-all duration-300"
                >
                  Reset
                </button>
              </div>
            </div>
          )}

          {!isActive && !isPreparing && timeLeft === 0 && duration > 0 && (
            <div className="mt-12 pt-8 border-t border-indigo-200">
              <h3 className="text-2xl font-light text-center mb-6 text-indigo-900" style={{ fontFamily: 'Georgia, serif' }}>
                Meditation Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">🧘</div>
                  <p className="text-sm font-light text-indigo-700 leading-relaxed">
                    Reduces stress and anxiety
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">💭</div>
                  <p className="text-sm font-light text-indigo-700 leading-relaxed">
                    Improves focus and clarity
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">❤️</div>
                  <p className="text-sm font-light text-indigo-700 leading-relaxed">
                    Enhances emotional well-being
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {timeLeft === 0 && !isActive && !isPreparing && (
          <div className="mt-8 text-center">
            <p className="text-lg font-light text-indigo-700 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Explore more tools to enhance your mental fitness
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/pomodoro" className="text-indigo-600 hover:text-indigo-700 underline font-light">
                Pomodoro Timer
              </Link>
              <Link href="/focus-game" className="text-indigo-600 hover:text-indigo-700 underline font-light">
                Focus Game
              </Link>
              <Link href="/reflex-game" className="text-indigo-600 hover:text-indigo-700 underline font-light">
                Reflex Game
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
