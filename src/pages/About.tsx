import { SEOHead } from '@/components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        title="About Us"
        description="Learn about Comic AI and our mission to democratize comic creation through artificial intelligence."
      />
      <Header />
      <main className="pt-20">
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                About Comic AI
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Revolutionizing storytelling through artificial intelligence
              </p>
            </motion.div>

            <div className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  At Comic AI, we believe that everyone has a story to tell. Our mission is to democratize comic creation by making it accessible to anyone, regardless of artistic ability or technical expertise. Through the power of artificial intelligence, we transform simple text descriptions into beautiful, engaging comic strips.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Technology</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our platform leverages cutting-edge AI models including OpenAI's GPT for story interpretation and DALL-E for image generation. We've fine-tuned these models specifically for comic creation, ensuring that the generated panels flow naturally and tell compelling visual stories.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Community</h2>
                <p className="text-gray-600 leading-relaxed">
                  With support for multiple languages including English and Chinese, Comic AI serves creators worldwide. Our community has already generated over 100,000 comics, spanning every genre from slice-of-life stories to epic adventures.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;