import Link from 'next/link';

export default function Pricing() {
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
              <Link href="/pricing" className="text-indigo-600 font-semibold">Pricing</Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition">About</Link>
              <Link href="/terms" className="text-gray-700 hover:text-indigo-600 transition">Terms</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 text-gray-800">
            Simple, Transparent Pricing
          </h1>
          <p className="text-2xl text-gray-700 mb-4">
            Everything you need to unlock your mind's potential
          </p>
          <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg">
            100% FREE FOREVER
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-4 border-indigo-500">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 text-center">
              <h2 className="text-4xl font-bold mb-2">Free Forever Plan</h2>
              <p className="text-xl opacity-90">No credit card required. No hidden fees. Ever.</p>
            </div>

            <div className="p-12">
              <div className="text-center mb-12">
                <div className="text-7xl font-bold text-gray-800 mb-4">
                  $0
                  <span className="text-2xl text-gray-600">/month</span>
                </div>
                <p className="text-xl text-gray-600">
                  That's right. Zero. Zilch. Nada. Forever.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">What's Included</h3>
                  <div className="flex items-start gap-3">
                    <div className="text-green-500 text-2xl flex-shrink-0">✓</div>
                    <div>
                      <p className="font-semibold text-gray-800">Unlimited Meditation Sessions</p>
                      <p className="text-sm text-gray-600">Customizable timers with soothing sounds</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-500 text-2xl flex-shrink-0">✓</div>
                    <div>
                      <p className="font-semibold text-gray-800">Pomodoro Timer</p>
                      <p className="text-sm text-gray-600">Track cycles and boost productivity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-500 text-2xl flex-shrink-0">✓</div>
                    <div>
                      <p className="font-semibold text-gray-800">Red Dot Focus Game</p>
                      <p className="text-sm text-gray-600">3 difficulty levels to train concentration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-500 text-2xl flex-shrink-0">✓</div>
                    <div>
                      <p className="font-semibold text-gray-800">Reflex Speed Game</p>
                      <p className="text-sm text-gray-600">Sharpen reaction time and decision-making</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Also Included</h3>
                  <div className="flex items-start gap-3">
                    <div className="text-green-500 text-2xl flex-shrink-0">✓</div>
                    <div>
                      <p className="font-semibold text-gray-800">Progress Tracking</p>
                      <p className="text-sm text-gray-600">Monitor your daily cycles and improvements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-500 text-2xl flex-shrink-0">✓</div>
                    <div>
                      <p className="font-semibold text-gray-800">No Ads</p>
                      <p className="text-sm text-gray-600">Clean, distraction-free experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-500 text-2xl flex-shrink-0">✓</div>
                    <div>
                      <p className="font-semibold text-gray-800">All Future Updates</p>
                      <p className="text-sm text-gray-600">New tools and features as we add them</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-green-500 text-2xl flex-shrink-0">✓</div>
                    <div>
                      <p className="font-semibold text-gray-800">Lifetime Access</p>
                      <p className="text-sm text-gray-600">Use it forever, no strings attached</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/meditation"
                  className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Start Training Your Brain Now
                </Link>
                <p className="text-sm text-gray-600 mt-4">
                  No sign-up required • Start in 30 seconds
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Free Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
              Why Is MindFlow Free Forever?
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-indigo-600">Our Mission:</strong> We believe mental fitness should be accessible to everyone, not just those who can afford expensive subscriptions or apps packed with upsells.
              </p>
              <p>
                <strong className="text-purple-600">No Catch:</strong> We're not collecting your data to sell. We're not going to bait-and-switch you with a "premium" tier. This is genuinely free, forever.
              </p>
              <p>
                <strong className="text-pink-600">Our Philosophy:</strong> A focused, productive world is a better world. By providing these tools freely, we're investing in human potential—including yours.
              </p>
              <p>
                <strong className="text-indigo-600">Future Sustainability:</strong> As we grow, we may explore optional donation features for those who want to support our mission, but the core tools will always remain 100% free.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Compare MindFlow to Alternatives
          </h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">MindFlow</th>
                  <th className="px-6 py-4 text-center">Typical App</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-800">Price</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">$0/month</td>
                  <td className="px-6 py-4 text-center text-red-600 font-bold">$10-30/month</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-800">Meditation Tools</td>
                  <td className="px-6 py-4 text-center text-green-600 text-2xl">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 text-2xl">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-800">Focus Training Games</td>
                  <td className="px-6 py-4 text-center text-green-600 text-2xl">✓</td>
                  <td className="px-6 py-4 text-center text-red-600 text-xl">Premium only</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-800">Productivity Timer</td>
                  <td className="px-6 py-4 text-center text-green-600 text-2xl">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 text-2xl">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-800">No Ads</td>
                  <td className="px-6 py-4 text-center text-green-600 text-2xl">✓</td>
                  <td className="px-6 py-4 text-center text-red-600 text-xl">Premium only</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-800">Progress Tracking</td>
                  <td className="px-6 py-4 text-center text-green-600 text-2xl">✓</td>
                  <td className="px-6 py-4 text-center text-red-600 text-xl">Premium only</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-800">Future Updates</td>
                  <td className="px-6 py-4 text-center text-green-600 text-2xl">✓ Free</td>
                  <td className="px-6 py-4 text-center text-red-600 text-xl">Extra cost</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Is this really free forever?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes! We're committed to keeping all core features free, always. No bait-and-switch, no hidden fees, no premium tiers locking away essential features.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Do I need to create an account?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Nope! Start using any tool immediately. Your progress is saved locally in your browser, so you can pick up where you left off.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Will you add premium features later?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                All existing features will remain free. If we add new tools in the future, they'll also be free. We may add optional donation features for supporters, but nothing will ever be paywalled.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                How do you make money then?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Currently, we don't. This is a passion project built to help people. In the future, we may accept voluntary donations from users who want to support our mission.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                What if I want to support MindFlow?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The best way to support us is to use the tools, share them with friends, and spread the word about the importance of mental fitness!
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Mind?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of people who are already improving their focus, productivity, and mental clarity with MindFlow.
            </p>
            <Link
              href="/meditation"
              className="inline-block bg-white text-indigo-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
            >
              Start Your Journey Now
            </Link>
            <p className="text-sm text-white/75 mt-4">
              Remember: $0 today, $0 tomorrow, $0 forever
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
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
