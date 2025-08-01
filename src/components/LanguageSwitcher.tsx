'use client';

import {useState} from 'react';
import {useRouter, usePathname} from 'next/navigation';
import {Globe, ChevronDown} from 'lucide-react';

const languages = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1] || 'tr';
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${langCode}`);
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 transition-all duration-300 border-2 border-slate-500/50 hover:border-primary-400/50 shadow-lg shadow-slate-500/30 backdrop-blur-sm transform hover:scale-105"
      >
        <Globe className="w-5 h-5 text-primary-400 animate-pulse" />
        <span className="text-sm font-bold text-white">
          {currentLanguage.flag} {currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDown className={`w-4 h-4 text-primary-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-52 bg-gradient-to-br from-dark-800 to-dark-900 border-2 border-primary-500/30 rounded-xl shadow-2xl shadow-primary-500/20 z-50 backdrop-blur-lg">
          <div className="py-3 px-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full px-3 py-3 text-left hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-purple-500/20 transition-all duration-300 flex items-center space-x-3 rounded-lg ${
                  currentLocale === language.code ? 'bg-gradient-to-r from-primary-500/30 to-purple-500/30 text-primary-400 shadow-lg shadow-primary-500/30' : 'text-white hover:scale-105'
                }`}
              >
                <span className="text-xl">{language.flag}</span>
                <span className="text-sm font-semibold">{language.name}</span>
              </button>
            ))}
            
            {/* Auto-detection info */}
            <div className="mt-2 pt-2 border-t border-slate-600/50">
              <div className="px-3 py-2 flex items-center space-x-2 text-xs text-gray-400">
                <span>ℹ️</span>
                <span>Dil tarayıcıdan otomatik algılanıyor</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}