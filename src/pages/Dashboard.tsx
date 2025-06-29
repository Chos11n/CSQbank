import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Brain, 
  Target, 
  TrendingUp, 
  Clock, 
  Award,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Zap,
  Calendar
} from 'lucide-react';

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">欢迎回来，小明！</h1>
        <p className="text-gray-600">继续你的CS A-Level学习之旅，你的进步很棒！</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: '已刷题数', value: '347', change: '今日+23题', icon: CheckCircle, color: 'text-green-600 bg-green-50' },
          { label: '连续天数', value: '12天', change: '个人最佳！', icon: Zap, color: 'text-orange-600 bg-orange-50' },
          { label: '正确率', value: '84%', change: '本周+3%', icon: Target, color: 'text-blue-600 bg-blue-50' },
          { label: '学习时长', value: '2.5小时', change: '今日', icon: Clock, color: 'text-purple-600 bg-purple-50' },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className={`p-2 rounded-xl w-fit mb-4 ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
            <div className="text-xs text-green-600 mt-1">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Performance Overview */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">学习进度概览</h2>
              <Link to="/results" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                查看详情
              </Link>
            </div>
            
            {/* Subject Progress */}
            <div className="space-y-4">
              {[
                { subject: '数据结构与算法', progress: 85, color: 'bg-blue-500' },
                { subject: '数据库设计', progress: 72, color: 'bg-green-500' },
                { subject: '网络与Web技术', progress: 68, color: 'bg-orange-500' },
                { subject: '编程概念', progress: 91, color: 'bg-purple-500' },
                { subject: '系统软件', progress: 56, color: 'bg-red-500' },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{item.subject}</span>
                    <span className="text-gray-600">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">最近活动</h2>
            <div className="space-y-4">
              {[
                { activity: '完成Paper 1模拟考试', time: '2小时前', score: '23/25', type: 'success' },
                { activity: '练习SQL查询题目', time: '昨天', score: '15/20', type: 'warning' },
                { activity: '算法分析练习', time: '2天前', score: '18/20', type: 'success' },
                { activity: '网络安全题目', time: '3天前', score: '12/18', type: 'warning' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${item.type === 'success' ? 'bg-green-100' : 'bg-orange-100'}`}>
                      {item.type === 'success' ? 
                        <CheckCircle className="h-4 w-4 text-green-600" /> :
                        <AlertCircle className="h-4 w-4 text-orange-600" />
                      }
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{item.activity}</div>
                      <div className="text-sm text-gray-600">{item.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-800">{item.score}</div>
                    <div className="text-xs text-gray-600">得分</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">快速操作</h2>
            <div className="space-y-3">
              {[
                { title: '继续练习', desc: '从上次中断处继续', icon: BookOpen, link: '/practice', color: 'bg-blue-50 text-blue-600' },
                { title: '模拟考试', desc: 'Paper 1完整模拟', icon: Clock, link: '/practice', color: 'bg-green-50 text-green-600' },
                { title: '错题回顾', desc: '12道题待复习', icon: Brain, link: '/results', color: 'bg-orange-50 text-orange-600' },
                { title: '编程练习', desc: 'Paper 4备考', icon: Target, link: '/ide', color: 'bg-purple-50 text-purple-600' },
              ].map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${action.color}`}>
                      <action.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 group-hover:text-blue-600">{action.title}</div>
                      <div className="text-sm text-gray-600">{action.desc}</div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                </Link>
              ))}
            </div>
          </div>

          {/* Weakness Alert */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg border border-red-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-red-800">重点关注</h3>
            </div>
            <p className="text-red-700 mb-4">
              你在<strong>系统软件</strong>方面还需要加强练习。
              建议重点复习相关知识点以提升成绩。
            </p>
            <Link
              to="/practice"
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition-colors duration-200"
            >
              立即练习
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Upcoming Goals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">学习目标</h2>
            <div className="space-y-4">
              {[
                { goal: '再完成50道题', progress: 34, total: 50 },
                { goal: '达到90%正确率', progress: 84, total: 90 },
                { goal: '掌握所有Paper 1知识点', progress: 7, total: 12 },
              ].map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{goal.goal}</span>
                    <span className="text-gray-600">{goal.progress}/{goal.total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      style={{ width: `${(goal.progress / goal.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}