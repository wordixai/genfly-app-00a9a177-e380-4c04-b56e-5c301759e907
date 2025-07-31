import { SEOHead } from '@/components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy"
        description="Learn how Comic AI protects and handles your personal data and generated content."
      />
      <Header />
      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-lg max-w-none"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, generate comics, or contact us for support. This includes your name, email address, and the content you submit for comic generation.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>To provide and improve our comic generation services</li>
                    <li>To personalize your experience and recommendations</li>
                    <li>To communicate with you about your account and our services</li>
                    <li>To analyze usage patterns and improve our AI models</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your generated comics are stored securely and are only accessible to you unless you choose to share them publicly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Ownership</h2>
                  <p className="text-gray-600 leading-relaxed">
                    You retain full ownership of the content you create using Comic AI. We do not claim any rights to your generated comics, and you are free to use them for any purpose, including commercial use.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at privacy@comicai.com.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;