import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        features: 'Features',
        pricing: 'Pricing',
        about: 'About',
        contact: 'Contact',
        gallery: 'Gallery',
        login: 'Login',
        signup: 'Sign Up',
        dashboard: 'Dashboard'
      },
      // Hero Section
      hero: {
        title: 'Transform Your Stories into Comics',
        subtitle: 'Create amazing 4-panel comics from your text with AI magic',
        description: 'Turn any story, idea, or conversation into beautiful comic strips. Our AI understands your narrative and creates engaging visual stories.',
        cta: 'Create Your Comic',
        tryDemo: 'Try Demo',
        watchVideo: 'Watch Video'
      },
      // Features
      features: {
        title: 'Powerful Features',
        subtitle: 'Everything you need to create amazing comics',
        aiPowered: {
          title: 'AI-Powered Generation',
          description: 'Advanced AI analyzes your text and creates compelling visual narratives'
        },
        multilingual: {
          title: 'Multilingual Support',
          description: 'Create comics in multiple languages with natural character expressions'
        },
        customizable: {
          title: 'Customizable Styles',
          description: 'Choose from various art styles and comic layouts to match your vision'
        },
        fastGeneration: {
          title: 'Lightning Fast',
          description: 'Generate high-quality comics in seconds, not hours'
        },
        highQuality: {
          title: 'High Quality Output',
          description: 'Export your comics in high resolution for print or digital use'
        },
        collaboration: {
          title: 'Easy Sharing',
          description: 'Share your comics instantly or collaborate with others'
        }
      },
      // Generator
      generator: {
        title: 'Create Your Comic',
        inputPlaceholder: 'Enter your story here... (e.g., "A cat discovers a magical portal in its backyard and embarks on an adventure")',
        generateButton: 'Generate Comic',
        generatingText: 'Creating your comic...',
        language: 'Language',
        style: 'Art Style',
        layout: 'Layout',
        downloadButton: 'Download',
        shareButton: 'Share',
        regenerateButton: 'Regenerate'
      },
      // Pricing
      pricing: {
        title: 'Choose Your Plan',
        subtitle: 'Flexible pricing for creators of all sizes',
        free: {
          title: 'Free',
          price: '$0',
          description: 'Perfect for getting started',
          features: [
            '5 comics per month',
            'Basic art styles',
            'Standard resolution',
            'Community support'
          ]
        },
        pro: {
          title: 'Pro',
          price: '$9.99',
          description: 'For regular creators',
          features: [
            'Unlimited comics',
            'Premium art styles',
            'High resolution export',
            'Priority support',
            'Custom characters',
            'Batch generation'
          ]
        },
        enterprise: {
          title: 'Enterprise',
          price: 'Custom',
          description: 'For teams and businesses',
          features: [
            'Everything in Pro',
            'API access',
            'Brand customization',
            'Dedicated support',
            'Analytics dashboard',
            'Team collaboration'
          ]
        }
      },
      // Footer
      footer: {
        description: 'Transform your stories into beautiful comics with AI',
        quickLinks: 'Quick Links',
        support: 'Support',
        legal: 'Legal',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie Policy'
      },
      // Common
      common: {
        loading: 'Loading...',
        error: 'Something went wrong',
        retry: 'Try Again',
        close: 'Close',
        save: 'Save',
        cancel: 'Cancel',
        continue: 'Continue',
        back: 'Back',
        next: 'Next'
      }
    }
  },
  zh: {
    translation: {
      // Navigation
      nav: {
        home: '首页',
        features: '功能',
        pricing: '定价',
        about: '关于',
        contact: '联系',
        gallery: '画廊',
        login: '登录',
        signup: '注册',
        dashboard: '仪表板'
      },
      // Hero Section
      hero: {
        title: '将您的故事变成漫画',
        subtitle: '用AI魔法从文本创建精彩的四格漫画',
        description: '将任何故事、想法或对话转化为美丽的连环画。我们的AI理解您的叙述并创建引人入胜的视觉故事。',
        cta: '创建您的漫画',
        tryDemo: '试用演示',
        watchVideo: '观看视频'
      },
      // Features
      features: {
        title: '强大功能',
        subtitle: '创建精彩漫画所需的一切',
        aiPowered: {
          title: 'AI驱动生成',
          description: '先进的AI分析您的文本并创建引人入胜的视觉叙述'
        },
        multilingual: {
          title: '多语言支持',
          description: '以多种语言创建具有自然角色表达的漫画'
        },
        customizable: {
          title: '可定制样式',
          description: '从各种艺术风格和漫画布局中选择以匹配您的愿景'
        },
        fastGeneration: {
          title: '闪电般快速',
          description: '在几秒钟内生成高质量漫画，而不是几小时'
        },
        highQuality: {
          title: '高质量输出',
          description: '以高分辨率导出您的漫画以供打印或数字使用'
        },
        collaboration: {
          title: '轻松分享',
          description: '即时分享您的漫画或与他人协作'
        }
      },
      // Generator
      generator: {
        title: '创建您的漫画',
        inputPlaceholder: '在此输入您的故事...（例如："一只猫在后院发现了一个魔法传送门并开始了冒险"）',
        generateButton: '生成漫画',
        generatingText: '正在创建您的漫画...',
        language: '语言',
        style: '艺术风格',
        layout: '布局',
        downloadButton: '下载',
        shareButton: '分享',
        regenerateButton: '重新生成'
      },
      // Pricing
      pricing: {
        title: '选择您的计划',
        subtitle: '为各种规模的创作者提供灵活定价',
        free: {
          title: '免费',
          price: '¥0',
          description: '非常适合入门',
          features: [
            '每月5个漫画',
            '基本艺术风格',
            '标准分辨率',
            '社区支持'
          ]
        },
        pro: {
          title: '专业版',
          price: '¥68',
          description: '适合常规创作者',
          features: [
            '无限漫画',
            '高级艺术风格',
            '高分辨率导出',
            '优先支持',
            '自定义角色',
            '批量生成'
          ]
        },
        enterprise: {
          title: '企业版',
          price: '定制',
          description: '适合团队和企业',
          features: [
            '专业版的所有功能',
            'API访问',
            '品牌定制',
            '专属支持',
            '分析仪表板',
            '团队协作'
          ]
        }
      },
      // Footer
      footer: {
        description: '用AI将您的故事转化为美丽的漫画',
        quickLinks: '快速链接',
        support: '支持',
        legal: '法律',
        privacy: '隐私政策',
        terms: '服务条款',
        cookies: 'Cookie政策'
      },
      // Common
      common: {
        loading: '加载中...',
        error: '出现了问题',
        retry: '重试',
        close: '关闭',
        save: '保存',
        cancel: '取消',
        continue: '继续',
        back: '返回',
        next: '下一步'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;