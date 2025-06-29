import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Clock, 
  Star,
  ChevronDown,
  Tag,
  Calendar,
  Award,
  Eye
} from 'lucide-react';

export function Questions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    examBoard: 'all',
    paper: 'all',
    year: 'all',
    difficulty: 'all',
    topic: 'all'
  });

  const questions = [
    {
      id: 1,
      title: "解释栈和队列数据结构的区别",
      paper: "Paper 1",
      year: "2023",
      examBoard: "CAIE 9608",
      topic: "数据结构",
      difficulty: "中等",
      marks: 4,
      timeEstimate: "3-4分钟",
      attempts: 1247,
      accuracy: 72,
      tags: ["栈", "队列", "数据结构"],
      preview: "比较和对比栈和队列的操作，包括它们的LIFO和FIFO特性..."
    },
    {
      id: 2,
      title: "编写递归算法计算数字的阶乘",
      paper: "Paper 2",
      year: "2023",
      examBoard: "CAIE 9608",
      topic: "算法",
      difficulty: "简单",
      marks: 6,
      timeEstimate: "5-7分钟",
      attempts: 2156,
      accuracy: 85,
      tags: ["递归", "算法", "数学"],
      preview: "实现一个递归函数来计算n!并解释基本情况和递归情况..."
    },
    {
      id: 3,
      title: "为图书管理系统设计规范化数据库模式",
      paper: "Paper 3",
      year: "2024",
      examBoard: "CAIE 9608",
      topic: "数据库设计",
      difficulty: "困难",
      marks: 12,
      timeEstimate: "15-20分钟",
      attempts: 856,
      accuracy: 58,
      tags: ["数据库", "规范化", "ERD", "SQL"],
      preview: "为图书、会员、借阅创建具有适当关系的表，并实现3NF..."
    },
    {
      id: 4,
      title: "解释OSI模型及其七层结构",
      paper: "Paper 1",
      year: "2022",
      examBoard: "CAIE 9608",
      topic: "网络",
      difficulty: "中等",
      marks: 8,
      timeEstimate: "8-10分钟",
      attempts: 1893,
      accuracy: 67,
      tags: ["OSI模型", "网络", "协议"],
      preview: "描述OSI模型的每一层，包括协议示例及其功能..."
    },
    {
      id: 5,
      title: "用伪代码实现二分查找算法",
      paper: "Paper 4",
      year: "2024",
      examBoard: "CAIE 9608",
      topic: "算法",
      difficulty: "中等",
      marks: 8,
      timeEstimate: "10-12分钟",
      attempts: 1654,
      accuracy: 71,
      tags: ["二分查找", "算法", "伪代码"],
      preview: "编写高效的二分查找伪代码，包含正确的数组索引和循环条件..."
    },
    {
      id: 6,
      title: "描述不同类型的网络安全威胁",
      paper: "Paper 1",
      year: "2023",
      examBoard: "CAIE 9608",
      topic: "安全",
      difficulty: "简单",
      marks: 6,
      timeEstimate: "6-8分钟",
      attempts: 2234,
      accuracy: 79,
      tags: ["网络安全", "威胁", "恶意软件"],
      preview: "识别并解释各种安全威胁，包括恶意软件、钓鱼和社会工程..."
    }
  ];

  const filterOptions = {
    examBoard: ['CAIE 9608', 'Edexcel', 'AQA'],
    paper: ['Paper 1', 'Paper 2', 'Paper 3', 'Paper 4'],
    year: ['2024', '2023', '2022', '2021', '2020'],
    difficulty: ['简单', '中等', '困难'],
    topic: ['数据结构', '算法', '数据库设计', '网络', '安全', '编程']
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '简单': return 'bg-green-100 text-green-700';
      case '中等': return 'bg-yellow-100 text-yellow-700';
      case '困难': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 80) return 'text-green-600';
    if (accuracy >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">题库</h1>
        <p className="text-gray-600">浏览和练习真实的CS A-Level历年真题</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="按主题、关键词或内容搜索题目..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500"
          />
        </div>

        {/* Filter Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(filterOptions).map(([key, options]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {key === 'examBoard' ? '考试局' : 
                 key === 'paper' ? '试卷' :
                 key === 'year' ? '年份' :
                 key === 'difficulty' ? '难度' :
                 key === 'topic' ? '主题' : key}
              </label>
              <select
                value={selectedFilters[key as keyof typeof selectedFilters]}
                onChange={(e) => setSelectedFilters(prev => ({ ...prev, [key]: e.target.value }))}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
              >
                <option value="all">
                  全部{key === 'examBoard' ? '考试局' : 
                       key === 'paper' ? '试卷' :
                       key === 'year' ? '年份' :
                       key === 'difficulty' ? '难度' :
                       key === 'topic' ? '主题' : ''}
                </option>
                {options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Active Filters */}
        <div className="mt-4 flex flex-wrap gap-2">
          {Object.entries(selectedFilters).map(([key, value]) => 
            value !== 'all' && (
              <span
                key={key}
                className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {value}
                <button
                  onClick={() => setSelectedFilters(prev => ({ ...prev, [key]: 'all' }))}
                  className="ml-2 text-blue-500 hover:text-blue-700"
                >
                  ×
                </button>
              </span>
            )
          )}
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-gray-600">
          显示 <span className="font-semibold text-gray-800">{questions.length}</span> 道题目
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">排序方式:</span>
          <select className="p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
            <option>最受欢迎</option>
            <option>最新优先</option>
            <option>难度: 简单到困难</option>
            <option>难度: 困难到简单</option>
            <option>正确率最高</option>
          </select>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((question) => (
          <div key={question.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
            {/* Question Header */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(question.difficulty)}`}>
                    {question.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {question.paper}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                    {question.year}
                  </span>
                  <span className="text-sm text-gray-600">{question.examBoard}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{question.title}</h3>
                <p className="text-gray-600 mb-4">{question.preview}</p>
              </div>
              
              <div className="lg:ml-6 lg:text-right space-y-2">
                <div className="flex lg:flex-col items-center lg:items-end space-x-4 lg:space-x-0 lg:space-y-1">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Award className="h-4 w-4" />
                    <span>{question.marks}分</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{question.timeEstimate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Question Stats */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>{question.attempts.toLocaleString()} 次练习</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className={`h-4 w-4 ${getAccuracyColor(question.accuracy)}`} />
                  <span className={getAccuracyColor(question.accuracy)}>
                    {question.accuracy}% 正确率
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4 text-gray-400" />
                <div className="flex flex-wrap gap-1">
                  {question.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {question.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                      +{question.tags.length - 3} 更多
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-200">
                  <BookOpen className="h-4 w-4" />
                  <span>开始练习</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors duration-200">
                  <Eye className="h-4 w-4" />
                  <span>预览</span>
                </button>
              </div>
              
              <div className="text-sm text-gray-500">
                主题: <span className="font-medium text-gray-700">{question.topic}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors duration-200">
          加载更多题目
        </button>
      </div>
    </div>
  );
}