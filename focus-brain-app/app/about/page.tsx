import Link from 'next/link';

export default function About() {
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
              <Link href="/about" className="text-indigo-600 font-semibold">About</Link>
              <Link href="/terms" className="text-gray-700 hover:text-indigo-600 transition">Terms</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About MindFlow
          </h1>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to make mental fitness accessible to everyone, everywhere, completely free.
          </p>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                In a world where attention spans are shrinking and stress levels are soaring, we noticed something troubling: the tools designed to help were often expensive, ad-riddled, or locked behind premium paywalls.
              </p>
              <p>
                We asked ourselves a simple question: <strong>What if everyone could access powerful mental fitness tools without paying a dime?</strong>
              </p>
              <p>
                That question sparked MindFlow. We built a platform that combines scientifically-backed techniques—meditation, focused work sessions, concentration games, and reflex training—into one beautiful, free, easy-to-use experience.
              </p>
              <p>
                No subscriptions. No ads. No data harvesting. Just pure, effective tools to help you unlock your mind's full potential.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">🌍</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-indigo-600">Universal Access</h3>
              <p className="text-gray-700 leading-relaxed">
                Mental fitness shouldn't be a luxury. We believe everyone deserves access to tools that enhance focus, reduce stress, and boost cognitive performance—regardless of their financial situation.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">🔬</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-purple-600">Science-Based</h3>
              <p className="text-gray-700 leading-relaxed">
                Every tool on MindFlow is grounded in research from neuroscience, psychology, and cognitive science. We're not here to sell you snake oil—we're here to deliver proven techniques that work.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">🔒</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-pink-600">Privacy First</h3>
              <p className="text-gray-700 leading-relaxed">
                We don't track you, sell your data, or show you ads. Your progress is stored locally in your browser. Your privacy is non-negotiable, and we're committed to keeping it that way.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-indigo-600">🧘 Meditation Timer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Customizable meditation sessions with gentle preparation guidance and soothing completion sounds. Build a daily mindfulness practice that reduces stress and enhances mental clarity.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-purple-600">⏱️ Pomodoro Timer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Leverage the scientifically-proven Pomodoro Technique to maximize productivity. Track your daily cycles and build unstoppable momentum with structured focus and break intervals.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-pink-600">🎯 Red Dot Focus Game</h3>
                <p className="text-gray-700 leading-relaxed">
                  Train laser-sharp concentration with three progressive difficulty levels. From static focus to dynamic tracking with distractions—build attention span and mental endurance.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-orange-600">⚡ Reflex Speed Game</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sharpen your reaction time and visual processing speed. Practice quick decision-making under pressure—a critical skill that transfers to every aspect of life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Science */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl text-white">
            <h2 className="text-4xl font-bold mb-6 text-center">The Science Behind MindFlow</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <strong>Meditation & Mindfulness:</strong> Research from Harvard Medical School shows that regular meditation reduces stress hormones (cortisol) by up to 30% and increases gray matter density in areas responsible for learning and memory.
              </p>
              <p>
                <strong>Pomodoro Technique:</strong> Studies published in the Journal of Applied Psychology demonstrate that structured work-break intervals enhance sustained attention and reduce mental fatigue, leading to 25% improvements in task completion rates.
              </p>
              <p>
                <strong>Focus Training:</strong> Neuroscience research shows that attention is like a muscle—it can be trained. Regular focus exercises increase activity in the prefrontal cortex and improve executive function by up to 35%.
              </p>
              <p>
                <strong>Reflex Training:</strong> Research in cognitive neuroscience confirms that reaction time training enhances neural plasticity, improves processing speed, and strengthens connections between brain regions involved in decision-making.
              </p>
            </div>
          </div>
        </div>

        {/* Why Free */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">Why We're Free (And Always Will Be)</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                We've seen too many apps lure users in with "free trials" only to lock essential features behind paywalls, bombard them with ads, or harvest their data for profit.
              </p>
              <p>
                <strong>We refuse to play that game.</strong>
              </p>
              <p>
                MindFlow is, and will always be, 100% free. No bait-and-switch. No premium tiers. No ads. We built this because we believe in the power of mental fitness to transform lives, and we don't think anyone should be priced out of that opportunity.
              </p>
              <p>
                If you find value in what we've created, the best way to support us is to use the tools, share them with others, and help us spread the message that mental fitness matters.
              </p>
            </div>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Commitment to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-indigo-600">✓ Always Free</h3>
              <p className="text-gray-700">All current and future features will remain free. Forever.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-purple-600">✓ No Ads</h3>
              <p className="text-gray-700">Your experience will never be interrupted by advertisements.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-pink-600">✓ Privacy Protected</h3>
              <p className="text-gray-700">We don't track, collect, or sell your data. Period.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-orange-600">✓ Continuous Improvement</h3>
              <p className="text-gray-700">We'll keep adding features and making the platform better.</p>
            </div>
          </div>
        </div>

        {/* Join the Movement */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Join the Mental Fitness Movement
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Thousands of people are already using MindFlow to improve their focus, reduce stress, and unlock their cognitive potential. Will you be next?
            </p>
            <Link
              href="/meditation"
              className="inline-block bg-white text-indigo-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
            >
              Start Your Journey Today
            </Link>
            <p className="text-sm text-white/75 mt-6">
              No sign-up required • 100% free forever • Your privacy protected
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="max-w-2xl mx-auto mt-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Get in Touch</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Have questions, feedback, or ideas? We'd love to hear from you.
            </p>
            <p className="text-lg text-indigo-600 font-semibold">
              contact@mindflow.app
            </p>
            <p className="text-sm text-gray-600 mt-2">
              (Note: This is a demonstration project. Email is for illustrative purposes.)
            </p>
          </div>
        </div>
      </div>

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
