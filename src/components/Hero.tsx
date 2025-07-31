import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="pt-32 pb-16 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            ✨ {t('hero.subtitle')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              {t('hero.watchVideo')}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80"
                alt="Comic Generation Demo"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="absolute -top-6 -right-2 w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-75"></div>
            <div className="absolute -bottom-2 -left-6 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-150"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};