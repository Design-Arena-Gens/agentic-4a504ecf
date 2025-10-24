'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Stats {
  [key: string]: number;
}

export default function PomodoroTimer() {
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);
  const [dailyStats, setDailyStats] = useState<Stats>({});

  useEffect(() => {
    // Load stats from localStorage
    const today = new Date().toDateString();
    const savedStats = localStorage.getItem('pomodoroStats');
    if (savedStats) {
      const stats = JSON.parse(savedStats);
      setDailyStats(stats);
      setCyclesCompleted(stats[today] || 0);
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      playNotificationSound();
      if (!isBreak) {
        // Focus period ended, start break
        setIsBreak(true);
        setTimeLeft(breakDuration * 60);
      } else {
        // Break ended, complete cycle
        setIsActive(false);
        setIsBreak(false);
        completeCycle();
      }
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, isBreak, breakDuration]);

  const completeCycle = () => {
    const today = new Date().toDateString();
    const newCycleCount = (dailyStats[today] || 0) + 1;
    const newStats = { ...dailyStats, [today]: newCycleCount };

    setDailyStats(newStats);
    setCyclesCompleted(newCycleCount);
    localStorage.setItem('pomodoroStats', JSON.stringify(newStats));
  };

  const playNotificationSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

    // Play two beeps
    for (let i = 0; i < 2; i++) {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800;
      oscillator.type = 'sine';

      const startTime = audioContext.currentTime + (i * 0.3);
      gainNode.gain.setValueAtTime(0.2, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.2);

      oscillator.start(startTime);
      oscillator.stop(startTime + 0.2);
    }
  };

  const startTimer = () => {
    setTimeLeft(focusDuration * 60);
    setIsActive(true);
    setIsBreak(false);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resumeTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = timeLeft > 0
    ? ((isBreak ? breakDuration * 60 : focusDuration * 60) - timeLeft) / (isBreak ? breakDuration * 60 : focusDuration * 60) * 100
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/60 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="text-2xl font-semibold text-purple-600 hover:text-purple-700 transition">
            ← MindFlow
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-purple-900">
            Pomodoro Timer
          </h1>
          <p className="text-lg text-purple-700 leading-relaxed">
            Boost your productivity with focused work sessions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">{cyclesCompleted}</div>
            <p className="text-gray-700">Cycles Today</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">{cyclesCompleted * focusDuration}</div>
            <p className="text-gray-700">Minutes Focused</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">
              {Object.keys(dailyStats).length}
            </div>
            <p className="text-gray-700">Active Days</p>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-12">
          {!isActive && timeLeft === 0 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="block text-xl font-semibold text-purple-900 mb-2">
                    Focus Duration (minutes)
                  </label>
                  <div className="flex gap-3">
                    {[15, 25, 30, 45].map((min) => (
                      <button
                        key={min}
                        onClick={() => setFocusDuration(min)}
                        className={`px-5 py-2 rounded-full text-lg transition-all duration-300 ${
                          focusDuration === min
                            ? 'bg-purple-600 text-white shadow-lg scale-110'
                            : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                        }`}
                      >
                        {min}
                      </button>
                    ))}
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    value={focusDuration}
                    onChange={(e) => setFocusDuration(Number(e.target.value))}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <p className="text-2xl font-semibold text-purple-900 text-center">{focusDuration} min</p>
                </div>

                <div className="space-y-4">
                  <label className="block text-xl font-semibold text-pink-900 mb-2">
                    Break Duration (minutes)
                  </label>
                  <div className="flex gap-3">
                    {[3, 5, 10, 15].map((min) => (
                      <button
                        key={min}
                        onClick={() => setBreakDuration(min)}
                        className={`px-5 py-2 rounded-full text-lg transition-all duration-300 ${
                          breakDuration === min
                            ? 'bg-pink-600 text-white shadow-lg scale-110'
                            : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                        }`}
                      >
                        {min}
                      </button>
                    ))}
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={breakDuration}
                    onChange={(e) => setBreakDuration(Number(e.target.value))}
                    className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer accent-pink-600"
                  />
                  <p className="text-2xl font-semibold text-pink-900 text-center">{breakDuration} min</p>
                </div>
              </div>

              <div className="text-center pt-6">
                <button
                  onClick={startTimer}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-16 py-5 rounded-full text-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Start Focus Session
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-purple-200">
                <h3 className="text-xl font-semibold text-center mb-4 text-purple-900">
                  How Pomodoro Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <div className="text-3xl mb-2">🎯</div>
                    <p className="text-sm text-purple-700">
                      Focus intensely for {focusDuration} minutes
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl mb-2">☕</div>
                    <p className="text-sm text-purple-700">
                      Take a {breakDuration} minute break
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl mb-2">🔄</div>
                    <p className="text-sm text-purple-700">
                      Repeat and build momentum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isActive && (
            <div className="text-center space-y-8">
              <div className={`inline-block px-6 py-2 rounded-full text-lg font-semibold ${
                isBreak
                  ? 'bg-pink-100 text-pink-700'
                  : 'bg-purple-100 text-purple-700'
              }`}>
                {isBreak ? '☕ Break Time' : '🎯 Focus Time'}
              </div>

              <div className="relative w-72 h-72 mx-auto">
                <svg className="w-72 h-72 transform -rotate-90">
                  <circle
                    cx="144"
                    cy="144"
                    r="136"
                    stroke="#f3e8ff"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="144"
                    cy="144"
                    r="136"
                    stroke={isBreak ? '#ec4899' : '#9333ea'}
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 136}`}
                    strokeDashoffset={`${2 * Math.PI * 136 * (1 - progress / 100)}`}
                    className="transition-all duration-1000 ease-linear"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-6xl font-bold text-purple-900">
                    {formatTime(timeLeft)}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xl text-purple-700">
                  {isBreak
                    ? 'Relax and recharge...'
                    : 'Stay focused on your task...'}
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={pauseTimer}
                    className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg"
                  >
                    Pause
                  </button>
                  <button
                    onClick={resetTimer}
                    className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition-all duration-300"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          )}

          {!isActive && timeLeft > 0 && (
            <div className="text-center space-y-8">
              <div className={`inline-block px-6 py-2 rounded-full text-lg font-semibold ${
                isBreak
                  ? 'bg-pink-100 text-pink-700'
                  : 'bg-purple-100 text-purple-700'
              }`}>
                Paused
              </div>

              <p className="text-5xl font-bold text-purple-900">
                {formatTime(timeLeft)}
              </p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={resumeTimer}
                  className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg"
                >
                  Resume
                </button>
                <button
                  onClick={resetTimer}
                  className="bg-gray-200 text-gray-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg text-purple-700 mb-4">
            Explore more tools to enhance your mental fitness
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/meditation" className="text-purple-600 hover:text-purple-700 underline font-semibold">
              Meditation Timer
            </Link>
            <Link href="/focus-game" className="text-purple-600 hover:text-purple-700 underline font-semibold">
              Focus Game
            </Link>
            <Link href="/reflex-game" className="text-purple-600 hover:text-purple-700 underline font-semibold">
              Reflex Game
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
