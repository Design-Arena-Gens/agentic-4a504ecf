import Link from 'next/link';

export default function Terms() {
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
              <Link href="/terms" className="text-indigo-600 font-semibold">Terms</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-lg">
          <h1 className="text-5xl font-bold mb-8 text-gray-800 text-center">
            Terms and Conditions
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Last Updated: October 24, 2024
          </p>

          <div className="space-y-8 text-gray-700">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to MindFlow ("we," "our," or "us"). By accessing or using our website and services (collectively, the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the Service.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">2. Acceptance of Terms</h2>
              <p className="leading-relaxed mb-4">
                By accessing or using MindFlow, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
              <p className="leading-relaxed">
                We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Service after any changes constitutes acceptance of the new Terms.
              </p>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">3. Description of Service</h2>
              <p className="leading-relaxed mb-4">
                MindFlow provides a collection of free mental fitness tools, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Meditation Timer: Customizable meditation sessions with guided preparation</li>
                <li>Pomodoro Timer: Productivity tool with focus and break tracking</li>
                <li>Red Dot Focus Game: Concentration training with multiple difficulty levels</li>
                <li>Reflex Speed Game: Reaction time and decision-making training</li>
              </ul>
              <p className="leading-relaxed mt-4">
                The Service is provided free of charge and is accessible via web browser.
              </p>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">4. User Responsibilities</h2>
              <p className="leading-relaxed mb-4">
                By using MindFlow, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the Service in a manner consistent with all applicable laws and regulations</li>
                <li>Not attempt to interfere with, compromise, or disrupt the Service or servers</li>
                <li>Not use automated systems or software to extract data from the Service</li>
                <li>Not impersonate any person or entity or misrepresent your affiliation</li>
                <li>Not use the Service for any unlawful or prohibited purpose</li>
              </ul>
            </section>

            {/* Health Disclaimer */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">5. Health and Medical Disclaimer</h2>
              <p className="leading-relaxed mb-4">
                <strong>IMPORTANT:</strong> MindFlow is designed for general wellness and mental fitness purposes only. It is NOT a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Always consult with a qualified healthcare provider before starting any new mental health or wellness program</li>
                <li>If you are experiencing severe stress, anxiety, depression, or other mental health concerns, please seek professional help immediately</li>
                <li>The tools provided are for educational and self-improvement purposes and should not be used as medical treatment</li>
                <li>Individual results may vary, and we make no guarantees regarding outcomes</li>
                <li>If you experience any adverse effects while using the Service, discontinue use immediately and consult a healthcare professional</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">6. Intellectual Property Rights</h2>
              <p className="leading-relaxed mb-4">
                The Service and its original content, features, and functionality are owned by MindFlow and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="leading-relaxed">
                You may not copy, modify, distribute, sell, or lease any part of our Service without our express written permission.
              </p>
            </section>

            {/* Privacy and Data */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">7. Privacy and Data Storage</h2>
              <p className="leading-relaxed mb-4">
                <strong>Your Privacy Matters:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We do not collect, store, or process personal data on our servers</li>
                <li>All progress and preferences are stored locally in your browser using localStorage</li>
                <li>We do not use cookies, tracking pixels, or analytics tools that identify individual users</li>
                <li>We do not sell, share, or distribute any user data to third parties</li>
                <li>You can clear your local data at any time through your browser settings</li>
              </ul>
            </section>

            {/* Free Service */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">8. Free Service and Future Changes</h2>
              <p className="leading-relaxed mb-4">
                MindFlow is provided completely free of charge, with no subscriptions, fees, or hidden costs. We are committed to keeping the Service free forever.
              </p>
              <p className="leading-relaxed">
                However, we reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">9. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, MINDFLOW AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Loss of profits, data, use, or goodwill</li>
                <li>Service interruptions or security breaches</li>
                <li>Any damages arising from your use or inability to use the Service</li>
                <li>Any physical or mental health issues that may arise from using the Service</li>
              </ul>
              <p className="leading-relaxed mt-4">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
            </section>

            {/* Disclaimer of Warranties */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">10. Disclaimer of Warranties</h2>
              <p className="leading-relaxed mb-4">
                MindFlow makes no representations or warranties about:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The accuracy, reliability, or completeness of the Service</li>
                <li>The Service being uninterrupted, timely, secure, or error-free</li>
                <li>Any results or outcomes from using the Service</li>
                <li>The correction of any defects or errors in the Service</li>
              </ul>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">11. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to defend, indemnify, and hold harmless MindFlow, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of the Service, your violation of these Terms, or your violation of any third-party rights.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">12. Third-Party Links and Content</h2>
              <p className="leading-relaxed">
                The Service may contain links to third-party websites or services that are not owned or controlled by MindFlow. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that MindFlow shall not be responsible or liable for any damage or loss caused by your use of any third-party content or services.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">13. Termination</h2>
              <p className="leading-relaxed">
                We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">14. Governing Law and Jurisdiction</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which MindFlow operates, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Service shall be resolved in the courts of that jurisdiction.
              </p>
            </section>

            {/* Severability */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">15. Severability</h2>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>
            </section>

            {/* Entire Agreement */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">16. Entire Agreement</h2>
              <p className="leading-relaxed">
                These Terms constitute the entire agreement between you and MindFlow regarding the Service and supersede all prior agreements and understandings, whether written or oral.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">17. Changes to These Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. If we make material changes, we will update the "Last Updated" date at the top of this page. Your continued use of the Service after changes are posted constitutes your acceptance of the modified Terms.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">18. Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="leading-relaxed mt-4 font-semibold">
                Email: contact@mindflow.app
              </p>
              <p className="text-sm text-gray-600 mt-2">
                (Note: This is a demonstration project. Contact information is for illustrative purposes.)
              </p>
            </section>
          </div>

          {/* Acceptance Button */}
          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p className="text-lg text-gray-700 mb-6">
              By using MindFlow, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
            </p>
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              I Understand and Agree
            </Link>
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
