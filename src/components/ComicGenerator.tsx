import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Loader2, Download, Share2, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ComicGenerator = () => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedComics, setGeneratedComics] = useState<string[]>([]);
  const [language, setLanguage] = useState('en');
  const [style, setStyle] = useState('manga');
  const [layout, setLayout] = useState('4panel');

  const generateComic = async () => {
    if (!text.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call with loading states
    try {
      // Mock API delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock generated comic URLs
      const mockComics = [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1609146787159-1c53e5e0e8e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1580134474172-3c0e8e8f5496?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
        "https://images.unsplash.com/photo-1617203443353-06b2e98c9c7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
      ];
      
      setGeneratedComics(mockComics);
    } catch (error) {
      console.error('Error generating comic:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {t('generator.title')}
          </h2>
        </motion.div>

        <Card className="border-2 border-purple-100 shadow-xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Comic Studio
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">{t('generator.language')}</label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="zh">中文</SelectItem>
                    <SelectItem value="ja">日本語</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{t('generator.style')}</label>
                <Select value={style} onValueChange={setStyle}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manga">Manga Style</SelectItem>
                    <SelectItem value="cartoon">Cartoon Style</SelectItem>
                    <SelectItem value="realistic">Realistic Style</SelectItem>
                    <SelectItem value="minimal">Minimal Style</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{t('generator.layout')}</label>
                <Select value={layout} onValueChange={setLayout}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4panel">4-Panel Strip</SelectItem>
                    <SelectItem value="vertical">Vertical Format</SelectItem>
                    <SelectItem value="square">Square Grid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Text Input */}
            <div>
              <Textarea
                placeholder={t('generator.inputPlaceholder')}
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={4}
                className="text-lg border-purple-200 focus:border-purple-500"
              />
            </div>

            {/* Generate Button */}
            <Button
              onClick={generateComic}
              disabled={!text.trim() || isGenerating}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  {t('generator.generatingText')}
                </>
              ) : (
                t('generator.generateButton')
              )}
            </Button>

            {/* Progress Indicator */}
            {isGenerating && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div className="bg-purple-100 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                    <span className="text-purple-800 font-medium">Analyzing your story...</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2">
                    <motion.div
                      className="bg-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Generated Comics */}
            {generatedComics.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Generated Comic</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg">
                  {generatedComics.map((comic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="relative group"
                    >
                      <img
                        src={comic}
                        alt={`Comic panel ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg border-2 border-white shadow-lg group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all"></div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                    <Download className="mr-2 h-4 w-4" />
                    {t('generator.downloadButton')}
                  </Button>
                  
                  <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                    <Share2 className="mr-2 h-4 w-4" />
                    {t('generator.shareButton')}
                  </Button>
                  
                  <Button variant="outline" className="border-green-300 text-green-600 hover:bg-green-50">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    {t('generator.regenerateButton')}
                  </Button>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};