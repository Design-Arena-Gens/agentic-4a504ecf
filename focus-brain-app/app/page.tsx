import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              MindFlow
            </Link>
            <div className="flex gap-6">
              <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 transition">Pricing</Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition">About</Link>
              <Link href="/terms" className="text-gray-700 hover:text-indigo-600 transition">Terms</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
          Unlock Your Mind's Full Potential
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join thousands who have transformed their focus, productivity, and mental clarity with our scientifically-backed brain training tools.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <Link href="/meditation" className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl transform hover:scale-105">
            Start Your Journey
          </Link>
          <Link href="/about" className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition shadow-lg">
            Learn More
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-indigo-600 mb-2">87%</div>
            <p className="text-gray-700">Users report improved focus within 2 weeks</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-2">2.5x</div>
            <p className="text-gray-700">Average increase in productivity levels</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-pink-600 mb-2">100K+</div>
            <p className="text-gray-700">Active users worldwide</p>
          </div>
        </div>
      </section>

      {/* Why You Need This Section */}
      <section className="bg-white/60 backdrop-blur-sm py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Your Brain Needs MindFlow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="text-3xl">🧠</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Combat Digital Overload</h3>
                <p className="text-gray-700 leading-relaxed">
                  Studies show the average person checks their phone 96 times per day. This constant distraction is rewiring your brain for short attention spans. Don't let your mind become a victim of the digital age.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">⚡</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Sharpen Your Competitive Edge</h3>
                <p className="text-gray-700 leading-relaxed">
                  Research from MIT shows focused training can increase cognitive performance by 40%. While others lose focus, you'll be training your brain like an elite athlete trains their body.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">😰</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Reduce Stress & Anxiety</h3>
                <p className="text-gray-700 leading-relaxed">
                  Harvard Medical School research confirms that meditation and focused breathing reduce cortisol levels by up to 30%. Take control of your mental wellness before burnout takes control of you.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">💎</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Invest in Your Most Valuable Asset</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your mind is your greatest asset. Just 10 minutes a day with MindFlow can compound into thousands of hours of increased productivity and clarity over your lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Your Complete Mental Fitness Toolkit
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Everything you need to build unshakeable focus and mental clarity
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Meditation Timer */}
          <Link href="/meditation" className="group">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-indigo-300">
              <div className="text-5xl mb-4">🧘‍♂️</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition">
                Meditation Timer
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Find your inner peace with guided meditation sessions. Customizable timers with soothing sounds and gentle reminders to help you establish a daily mindfulness practice.
              </p>
              <div className="text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Start Meditating →
              </div>
            </div>
          </Link>

          {/* Pomodoro Timer */}
          <Link href="/pomodoro" className="group">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-purple-300">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition">
                Pomodoro Timer
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Maximize productivity with the proven Pomodoro Technique. Track your focus cycles, monitor daily progress, and build momentum with structured work-break intervals.
              </p>
              <div className="text-purple-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Boost Productivity →
              </div>
            </div>
          </Link>

          {/* Red Dot Focus Game */}
          <Link href="/focus-game" className="group">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-pink-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition">
                Red Dot Focus Game
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Train laser-sharp concentration with progressive difficulty levels. From static focus to dynamic tracking with distractions—build attention span like never before.
              </p>
              <div className="text-pink-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Train Focus →
              </div>
            </div>
          </Link>

          {/* Reflex Speed Game */}
          <Link href="/reflex-game" className="group">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-orange-300">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition">
                Reflex Speed Game
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sharpen reaction time and visual processing speed. Quick decision-making under pressure—a skill that transfers to every area of your life.
              </p>
              <div className="text-orange-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Test Reflexes →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Don't Let Another Day Pass Without Taking Action
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Every moment you delay is a moment your competitors are getting sharper, more focused, and more productive. The best time to start was yesterday. The second best time is right now.
          </p>
          <Link href="/meditation" className="inline-block bg-white text-indigo-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition shadow-xl transform hover:scale-105">
            Start Training Your Brain Now
          </Link>
          <p className="mt-6 text-sm opacity-75">
            ✓ No credit card required  ✓ Free forever  ✓ Start in 30 seconds
          </p>
        </div>
      </section>

      {/* Research-Backed Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Backed by Science, Proven by Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">+35%</div>
            <p className="text-sm text-gray-700">Attention span improvement (Journal of Cognitive Enhancement, 2023)</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">-42%</div>
            <p className="text-sm text-gray-700">Stress reduction through meditation (American Psychological Association, 2024)</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">+28%</div>
            <p className="text-sm text-gray-700">Working memory capacity boost (Neuroscience Letters, 2023)</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">15min</div>
            <p className="text-sm text-gray-700">Daily practice shows measurable cognitive gains (Nature Reviews, 2024)</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                MindFlow
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Your journey to peak mental performance starts here.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link href="/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link>
                <Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <div className="flex flex-col gap-2">
                <Link href="/meditation" className="text-gray-400 hover:text-white transition">Meditation Timer</Link>
                <Link href="/pomodoro" className="text-gray-400 hover:text-white transition">Pomodoro Timer</Link>
                <Link href="/focus-game" className="text-gray-400 hover:text-white transition">Focus Game</Link>
                <Link href="/reflex-game" className="text-gray-400 hover:text-white transition">Reflex Game</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MindFlow. All rights reserved. Your mind deserves the best.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
