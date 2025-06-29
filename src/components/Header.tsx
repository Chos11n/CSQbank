import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Code2, 
  Menu, 
  X, 
  Home, 
  BarChart3, 
  BookOpen, 
  HelpCircle, 
  Trophy, 
  User,
  Terminal
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: '学习面板', href: '/dashboard', icon: Home },
    { name: '智能练习', href: '/practice', icon: BookOpen },
    { name: '题库', href: '/questions', icon: HelpCircle },
    { name: '编程实战', href: '/ide', icon: Terminal },
    { name: '成绩分析', href: '/results', icon: Trophy },
    { name: '个人中心', href: '/profile', icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 shadow-lg backdrop-blur-sm sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-200 shadow-lg">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CS A-Level 刷题神器
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-700 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Progress Indicator */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">等级 7</span>
              <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-blue-50 text-blue-700 shadow-sm'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}