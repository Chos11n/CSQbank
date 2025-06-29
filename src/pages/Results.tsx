import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Award, 
  Clock, 
  Target,
  Calendar,
  BarChart3,
  PieChart,
  AlertCircle,
  CheckCircle,
  Brain,
  BookOpen
} from 'lucide-react';

export function Results() {
  const [timeRange, setTimeRange] = useState('7d');

  const performanceData = {
    overall: {
      totalQuestions: 347,
      correctAnswers: 291,
      accuracy: 84,
      averageTime: '2.3分钟',
      streak: 12,
      improvement: '+8%'
    },
    byTopic: [
      { topic: '编程概念', accuracy: 91, questions: 67, color: 'bg-green-500' },
      { topic: '数据结构与算法', accuracy: 85, questions: 89, color: 'bg-blue-500' },
      { topic: '数据库设计', accuracy: 72, questions: 45, color: 'bg-yellow-500' },
      { topic: '网络与Web技术', accuracy: 68, questions: 52, color: 'bg-orange-500' },
      { topic: '系统软件', accuracy: 56, questions: 34, color: 'bg-red-500' },
      { topic: '信息系统', accuracy: 89, questions: 60, color: 'bg-purple-500' }
    ],
    recentSessions: [
      {
        date: '2024-01-15',
        type: '智能练习',
        topic: '数据库设计',
        score: '15/20',
        accuracy: 75,
        time: '23分钟',
        improvement: '+5%'
      },
      {
        date: '2024-01-14',
        type: '模拟考试',
        topic: 'Paper 1完整',
        score: '38/45',
        accuracy: 84,
        time: '87分钟',
        improvement: '+2%'
      },
      {
        date: '2024-01-13',
        type: '专项练习',
        topic: '算法',
        score: '18/20',
        accuracy: 90,
        time: '25分钟',
        improvement: '+7%'
      }
    ]
  };

  const weakAreas = [
    { topic: '系统软件', accuracy: 56, questions: 34, priority: 'high' },
    { topic: '网络安全', accuracy: 62, questions: 28, priority: 'medium' },
    { topic: '数据库规范化', accuracy: 65, questions: 23, priority: 'medium' }
  ];

  const achievements = [
    { title: '一周战士', description: '连续7天练习', icon: Award, color: 'text-yellow-600' },
    { title: '算法大师', description: '算法题90%+正确率', icon: Brain, color: 'text-purple-600' },
    { title: '速度恶魔', description: '平均用时低于2分钟', icon: Clock, color: 'text-blue-600' },
    { title: '知识探索者', description: '完成300+题目', icon: BookOpen, color: 'text-green-600' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">成绩分析</h1>
          <p className="text-gray-600">追踪你的学习进度，识别需要改进的领域</p>
        </div>
        <div className="mt-4 lg:mt-0">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">最近7天</option>
            <option value="30d">最近30天</option>
            <option value="90d">最近3个月</option>
            <option value="1y">最近一年</option>
          </select>
        </div>
      </div>

      {/* Overall Performance Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
        {[
          { 
            label: '总题数', 
            value: performanceData.overall.totalQuestions.toLocaleString(), 
            icon: BookOpen, 
            color: 'text-blue-600 bg-blue-50' 
          },
          { 
            label: '正确率', 
            value: `${performanceData.overall.accuracy}%`, 
            change: performanceData.overall.improvement,
            icon: Target, 
            color: 'text-green-600 bg-green-50' 
          },
          { 
            label: '平均用时', 
            value: performanceData.overall.averageTime, 
            icon: Clock, 
            color: 'text-purple-600 bg-purple-50' 
          },
          { 
            label: '连续天数', 
            value: `${performanceData.overall.streak}天`, 
            icon: Award, 
            color: 'text-orange-600 bg-orange-50' 
          },
          { 
            label: '正确答案', 
            value: performanceData.overall.correctAnswers.toLocaleString(), 
            icon: CheckCircle, 
            color: 'text-emerald-600 bg-emerald-50' 
          },
          { 
            label: '进步幅度', 
            value: performanceData.overall.improvement, 
            icon: TrendingUp, 
            color: 'text-cyan-600 bg-cyan-50' 
          }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className={`p-2 rounded-xl w-fit mb-4 ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
            {stat.change && (
              <div className="text-xs text-green-600 mt-1">{stat.change}</div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Performance by Topic */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">各主题表现</h2>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {performanceData.byTopic.map((topic, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">{topic.topic}</span>
                  <div className="text-right">
                    <span className="font-semibold text-gray-800">{topic.accuracy}%</span>
                    <span className="text-sm text-gray-600 ml-2">({topic.questions}题)</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${topic.color}`}
                    style={{ width: `${topic.accuracy}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weak Areas */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">重点关注</h2>
          </div>
          
          <div className="space-y-4">
            {weakAreas.map((area, index) => (
              <div key={index} className="p-4 bg-red-50 rounded-xl border border-red-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-red-800">{area.topic}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    area.priority === 'high' 
                      ? 'bg-red-200 text-red-800' 
                      : 'bg-yellow-200 text-yellow-800'
                  }`}>
                    {area.priority === 'high' ? '高' : '中'}优先级
                  </span>
                </div>
                <div className="flex justify-between text-sm text-red-700">
                  <span>{area.accuracy}% 正确率</span>
                  <span>{area.questions}题</span>
                </div>
                <button className="mt-3 w-full px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors duration-200">
                  立即练习
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Sessions */}
      <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">最近练习记录</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 text-sm font-semibold text-gray-600">日期</th>
                <th className="text-left py-3 text-sm font-semibold text-gray-600">类型</th>
                <th className="text-left py-3 text-sm font-semibold text-gray-600">主题</th>
                <th className="text-left py-3 text-sm font-semibold text-gray-600">得分</th>
                <th className="text-left py-3 text-sm font-semibold text-gray-600">正确率</th>
                <th className="text-left py-3 text-sm font-semibold text-gray-600">用时</th>
                <th className="text-left py-3 text-sm font-semibold text-gray-600">变化</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.recentSessions.map((session, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 text-sm text-gray-800">
                    {new Date(session.date).toLocaleDateString('zh-CN')}
                  </td>
                  <td className="py-4 text-sm text-gray-800">{session.type}</td>
                  <td className="py-4 text-sm text-gray-800">{session.topic}</td>
                  <td className="py-4 text-sm font-semibold text-gray-800">{session.score}</td>
                  <td className="py-4 text-sm text-gray-800">{session.accuracy}%</td>
                  <td className="py-4 text-sm text-gray-800">{session.time}</td>
                  <td className="py-4">
                    <span className="inline-flex items-center text-sm text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {session.improvement}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">最近成就</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
              <div className={`p-3 rounded-xl w-fit mx-auto mb-4 ${achievement.color.replace('text-', 'text-').replace('text-', 'bg-').replace('-600', '-50')}`}>
                <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}