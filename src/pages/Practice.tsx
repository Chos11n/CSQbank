import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Clock, 
  Target, 
  Brain, 
  BookOpen, 
  Settings,
  ChevronRight,
  Filter,
  Zap,
  Trophy,
  AlertCircle
} from 'lucide-react';

export function Practice() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const practiceMode = [
    {
      id: 'adaptive',
      title: '智能练习',
      description: 'AI根据你的薄弱环节智能推荐题目',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      recommended: true,
      duration: '15-30分钟',
      questions: '10-20题'
    },
    {
      id: 'timed',
      title: '限时练习',
      description: '模拟真实考试时间压力',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500',
      duration: '45-90分钟',
      questions: '25-50题'
    },
    {
      id: 'topic',
      title: '专项练习',
      description: '针对特定CS知识点深度练习',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      duration: '20-40分钟',
      questions: '15-30题'
    },
    {
      id: 'mock',
      title: '模拟考试',
      description: '完整真题试卷模拟',
      icon: Trophy,
      color: 'from-orange-500 to-red-500',
      duration: '90分钟',
      questions: '40-50题'
    }
  ];

  const quickFilters = [
    { name: 'CAIE 9608', active: true },
    { name: 'Paper 1', active: true },
    { name: '2023-2024', active: false },
    { name: '中等难度', active: false },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">智能练习</h1>
        <p className="text-gray-600">选择你喜欢的练习模式，开始提升CS技能</p>
      </div>

      {/* Quick Stats & Filters */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">347</div>
              <div className="text-sm text-gray-600">已刷题数</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">84%</div>
              <div className="text-sm text-gray-600">正确率</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-sm text-gray-600">连续天数</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {quickFilters.map((filter, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    filter.active 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer'
                  }`}
                >
                  {filter.name}
                </span>
              ))}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-200"
            >
              <Filter className="h-4 w-4" />
              <span>更多筛选</span>
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">考试局</label>
                <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>CAIE 9608</option>
                  <option>Edexcel</option>
                  <option>AQA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">试卷类型</label>
                <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>所有试卷</option>
                  <option>Paper 1 - 理论</option>
                  <option>Paper 2 - 基础问题解决</option>
                  <option>Paper 3 - 高级理论</option>
                  <option>Paper 4 - 实践</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">难度等级</label>
                <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>所有难度</option>
                  <option>基础</option>
                  <option>中等</option>
                  <option>困难</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Practice Modes */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {practiceMode.map((mode) => (
          <div
            key={mode.id}
            className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 cursor-pointer transition-all duration-300 hover:shadow-xl ${
              selectedMode === mode.id 
                ? 'border-blue-300 ring-4 ring-blue-100' 
                : 'border-gray-100 hover:border-gray-200'
            }`}
            onClick={() => setSelectedMode(mode.id)}
          >
            {mode.recommended && (
              <div className="absolute -top-3 left-6">
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg">
                  推荐
                </span>
              </div>
            )}
            
            <div className="flex items-start justify-between mb-6">
              <div className={`p-4 bg-gradient-to-br ${mode.color} rounded-2xl shadow-lg`}>
                <mode.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">时长</div>
                <div className="font-semibold text-gray-800">{mode.duration}</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-3">{mode.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{mode.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{mode.questions}</span>
                <span>•</span>
                <span>自适应难度</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600 font-medium">
                <span>开始练习</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Sessions */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">最近练习</h2>
          <Link to="/results" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            查看所有结果
          </Link>
        </div>
        
        <div className="space-y-4">
          {[
            { 
              type: '智能练习', 
              topic: '数据库设计', 
              score: '15/20', 
              accuracy: 75, 
              time: '23分钟',
              date: '2小时前',
              status: 'completed'
            },
            { 
              type: '限时练习', 
              topic: '算法与数据结构', 
              score: '18/25', 
              accuracy: 72, 
              time: '35分钟',
              date: '昨天',
              status: 'completed'
            },
            { 
              type: '专项练习', 
              topic: '网络安全', 
              score: '12/15', 
              accuracy: 80, 
              time: '18分钟',
              date: '2天前',
              status: 'completed'
            },
          ].map((session, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-800">{session.type} • {session.topic}</div>
                  <div className="text-sm text-gray-600">{session.date} • {session.time}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-800">{session.score}</div>
                <div className="text-sm text-gray-600">{session.accuracy}% 正确率</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      {selectedMode && (
        <div className="fixed bottom-8 right-8 z-50">
          <button className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
            <Play className="h-5 w-5" />
            <span>开始练习</span>
          </button>
        </div>
      )}

      {/* Quick Tips */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Zap className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-bold text-blue-800">练习小贴士</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
          <div>• 从智能练习开始，找出薄弱环节</div>
          <div>• 考前使用限时练习模式</div>
          <div>• 仔细阅读错题解析</div>
          <div>• 坚持每天练习，保持手感</div>
        </div>
      </div>
    </div>
  );
}