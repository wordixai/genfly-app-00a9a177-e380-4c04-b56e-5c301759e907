import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Languages, 
  Palette, 
  Zap, 
  Download, 
  Share2 
} from 'lucide-react';

export const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Brain,
      key: 'aiPowered',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Languages,
      key: 'multilingual',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      key: 'customizable',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Zap,
      key: 'fastGeneration',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Download,
      key: 'highQuality',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Share2,
      key: 'collaboration',
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {t(`features.${feature.key}.title`)}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {t(`features.${feature.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};