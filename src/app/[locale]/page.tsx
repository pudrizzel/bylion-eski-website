'use client';

import {useTranslations} from 'next-intl';
import {useState, useEffect} from 'react';
import {
  Bot,
  BarChart3,
  Settings,
  Zap,
  Shield,
  Users,
  Globe,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Heart,
  Star
} from 'lucide-react';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-dark-900 to-indigo-900 relative overflow-hidden">
      {/* Kawaii Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-bounce">🎉</div>
        <div className="absolute top-40 right-20 text-4xl animate-pulse">🌈</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-bounce delay-300">🎊</div>
        <div className="absolute top-60 left-1/3 text-3xl animate-pulse delay-500">🎯</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-bounce delay-700">🚀</div>
        <div className="absolute top-32 right-1/3 text-3xl animate-pulse delay-1000">🎪</div>
        <div className="absolute bottom-60 left-1/2 text-4xl animate-bounce delay-1200">🎭</div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 backdrop-blur-sm bg-dark-900/50 border-b border-primary-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src="/ByLion-Logo.png"
                alt="ByLion Logo"
                width={40}
                height={40}
                className="rounded-lg drop-shadow-2xl shadow-2xl shadow-primary-500/80"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
              ByLion
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-primary-400 transition-all duration-500 hover:scale-110"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('navigation.dashboard')}
            </a>
            <a
              href="#analytics"
              className="text-gray-300 hover:text-primary-400 transition-all duration-500 hover:scale-110"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('analytics')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('navigation.analytics')}
            </a>
            <a
              href="#settings"
              className="text-gray-300 hover:text-primary-400 transition-all duration-500 hover:scale-110"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('settings')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('navigation.settings')}
            </a>
            <LanguageSwitcher />
            <button className="bg-gradient-to-r from-primary-400 via-yellow-400 to-primary-600 hover:from-primary-500 hover:via-yellow-500 hover:to-primary-700 text-dark-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-primary-500/30 text-lg flex items-center space-x-2 border-2 border-primary-300/50 relative overflow-hidden group">
              <Settings className="w-5 h-5 animate-pulse" />
              <span>{t('home.getStarted')}</span>
              <Star className="w-5 h-5 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-dark-800 border-t border-dark-700 px-6 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-primary-400 transition-colors">
                {t('navigation.dashboard')}
              </a>
              <a href="#analytics" className="text-gray-300 hover:text-primary-400 transition-colors">
                {t('navigation.analytics')}
              </a>
              <a href="#settings" className="text-gray-300 hover:text-primary-400 transition-colors">
                {t('navigation.settings')}
              </a>
              <button className="btn-primary w-full">
                {t('home.getStarted')}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fadeIn">
            {/* Title with RGB effect */}
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
                <span className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                  {t('home.title')}
                </span>
              </h1>
            </div>
            
            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                {t('home.subtitle')}
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                {t('home.description')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-dark-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg flex items-center space-x-2">
                <span>{t('home.getStarted')}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-slate-500/50 hover:border-primary-400/50 text-lg hover:scale-105 shadow-lg shadow-slate-500/30 backdrop-blur-sm flex items-center space-x-2">
                <span>📚</span>
                <span>{t('home.learnMore')}</span>
                <span>💡</span>
              </button>
            </div>
            
            {/* Add Bot Button */}
            <div className="mt-8 flex justify-center">
              <button className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl shadow-emerald-500/40 text-lg flex items-center space-x-2 border-2 border-emerald-300/30 backdrop-blur-sm">
                <span>🌟</span>
                <span>{t('home.addBot')}</span>
                <ChevronRight className="w-5 h-5 animate-pulse" />
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20 animate-fadeIn relative">
            <div className="relative">
              <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border-2 border-primary-400/30 shadow-2xl shadow-primary-500/20">
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl p-6 border border-primary-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white">
                      {t('home.dashboardPreview')}
                    </h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-400"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-lg p-4 border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300 hover:scale-105 group">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors">
                          <Users className="w-5 h-5 text-primary-400" />
                        </div>
                        <span className="text-white font-medium">
                          {t('home.activeUsers')}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-primary-400">
                        1,234
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-lg p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 group">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                          <BarChart3 className="w-5 h-5 text-purple-400" />
                        </div>
                        <span className="text-white font-medium">
                          {t('home.commands')}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-purple-400">
                        5,678
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-lg p-4 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 hover:scale-105 group">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-pink-500/20 rounded-lg group-hover:bg-pink-500/30 transition-colors">
                          <Globe className="w-5 h-5 text-pink-400" />
                        </div>
                        <span className="text-white font-medium">
                          {t('home.servers')}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-pink-400">
                        42
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-primary-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                {t('home.features.title')}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 border-2 border-primary-500/30 hover:border-primary-400/50 group relative overflow-hidden backdrop-blur-lg">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-yellow-500/10 rounded-2xl"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-400/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full blur-xl"></div>
              
              <div className="absolute top-4 right-4 text-2xl animate-pulse">🎯</div>
              <div className="w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                <Image
                  src="/ByLion-Logo.png"
                  alt="ByLion Logo"
                  width={64}
                  height={64}
                  className="rounded-lg drop-shadow-2xl shadow-2xl shadow-primary-500/80"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2 relative z-10">
                <span>🤖</span>
                <span>{t('home.features.management.title')}</span>
              </h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                {t('home.features.management.description')} 🚀
              </p>
              <div className="absolute bottom-4 right-4 text-lg animate-bounce delay-300">✨</div>
            </div>

            {/* Feature 2 */}
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 border-2 border-purple-500/30 hover:border-purple-400/50 group relative overflow-hidden backdrop-blur-lg">
              <div className="absolute top-4 right-4 text-2xl animate-pulse">📊</div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-2xl shadow-purple-500/50 border border-purple-300/30">
                <BarChart3 className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <span>📈</span>
                <span>{t('home.features.analytics.title')}</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('home.features.analytics.description')} 📊
              </p>
              <div className="absolute bottom-4 right-4 text-lg animate-bounce delay-500">🌟</div>
            </div>

            {/* Feature 3 */}
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 border-2 border-pink-500/30 hover:border-pink-400/50 group relative overflow-hidden backdrop-blur-lg">
              <div className="absolute top-4 right-4 text-2xl animate-pulse">⚡</div>
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-2xl shadow-pink-500/50 border border-pink-300/30">
                <Zap className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <span>⚡</span>
                <span>{t('home.features.commands.title')}</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('home.features.commands.description')} 🎮
              </p>
              <div className="absolute bottom-4 right-4 text-lg animate-bounce delay-700">🎯</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-primary-500/20 bg-gradient-to-r from-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image
                src="/ByLion-Logo.png"
                alt="ByLion Logo"
                width={32}
                height={32}
                className="rounded-lg drop-shadow-2xl shadow-2xl shadow-primary-500/80"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
              ByLion
            </span>
          </div>
          <p className="text-gray-400">
            © 2024 ByLion. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}