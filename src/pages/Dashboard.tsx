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
  Calendar,
  FileText,
  Code2,
  Database,
  Globe,
  Shield,
  Cpu
} from 'lucide-react';

export function Dashboard() {
  // 试卷进度数据
  const paperProgress = [
    { 
      paper: 'Paper 1', 
      title: '计算机系统理论', 
      progress: 78, 
      totalQuestions: 120, 
      completedQuestions: 94,
      averageScore: 85,
      color: 'bg-blue-500',
      icon: FileText,
      description: '理论基础与概念'
    },
    { 
      paper: 'Paper 2', 
      title: '基础问题解决', 
      progress: 65, 
      totalQuestions: 80, 
      completedQuestions: 52,
      averageScore: 72,
      color: 'bg-green-500',
      icon: Brain,
      description: '算法与编程逻辑'
    },
    { 
      paper: 'Paper 3', 
      title: '高级理论', 
      progress: 45, 
      totalQuestions: 100, 
      completedQuestions: 45,
      averageScore: 68,
      color: 'bg-purple-500',
      icon: Target,
      description: '深度理论分析'
    },
    { 
      paper: 'Paper 4', 
      title: '实践编程', 
      progress: 32, 
      totalQuestions: 60, 
      completedQuestions: 19,
      averageScore: 76,
      color: 'bg-orange-500',
      icon: Code2,
      description: '编程实现与调试'
    }
  ];

  // 知识单元进度数据
  const topicProgress = [
    { 
      topic: '数据表示', 
      progress: 92, 
      icon: Database, 
      color: 'text-blue-600 bg-blue-50',
      papers: ['Paper 1'],
      difficulty: 'basic'
    },
    { 
      topic: '通信与网络', 
      progress: 85, 
      icon: Globe, 
      color: 'text-green-600 bg-green-50',
      papers: ['Paper 1', 'Paper 3'],
      difficulty: 'intermediate'
    },
    { 
      topic: '硬件', 
      progress: 78, 
      icon: Cpu, 
      color: 'text-purple-600 bg-purple-50',
      papers: ['Paper 1'],
      difficulty: 'basic'
    },
    { 
      topic: '处理器基础', 
      progress: 71, 
      icon: Cpu, 
      color: 'text-orange-600 bg-orange-50',
      papers: ['Paper 1', 'Paper 3'],
      difficulty: 'intermediate'
    },
    { 
      topic: '系统软件', 
      progress: 56, 
      icon: Shield, 
      color: 'text-red-600 bg-red-50',
      papers: ['Paper 1', 'Paper 3'],
      difficulty: 'advanced'
    },
    { 
      topic: '安全性', 
      progress: 63, 
      icon: Shield, 
      color: 'text-indigo-600 bg-indigo-50',
      papers: ['Paper 1', 'Paper 3'],
      difficulty: 'intermediate'
    },
    { 
      topic: '伦理与法律', 
      progress: 88, 
      icon: BookOpen, 
      color: 'text-emerald-600 bg-emerald-50',
      papers: ['Paper 1'],
      difficulty: 'basic'
    },
    { 
      topic: '数据库', 
      progress: 74, 
      icon: Database, 
      color: 'text-cyan-600 bg-cyan-50',
      papers: ['Paper 1', 'Paper 3'],
      difficulty: 'intermediate'
    }
  ];

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'basic': return '基础';
      case 'intermediate': return '中等';
      case 'advanced': return '高级';
      default: return '未知';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'basic': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

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
          { label: '总体进度', value: '65%', change: '本周+5%', icon: Target, color: 'text-blue-600 bg-blue-50' },
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
          {/* Paper Progress - 主要显示区域 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">试卷进度概览</h2>
              <Link to="/practice" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                开始练习
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {paperProgress.map((paper, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${paper.color.replace('bg-', 'bg-').replace('-500', '-100')}`}>
                        <paper.icon className={`h-5 w-5 ${paper.color.replace('bg-', 'text-')}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{paper.paper}</h3>
                        <p className="text-sm text-gray-600">{paper.title}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-800">{paper.progress}%</div>
                      <div className="text-xs text-gray-600">完成度</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{paper.description}</p>
                  
                  <div className="space-y-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${paper.color}`}
                        style={{ width: `${paper.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{paper.completedQuestions}/{paper.totalQuestions} 题</span>
                      <span>平均分: {paper.averageScore}%</span>
                    </div>
                  </div>
                  
                  <Link
                    to="/practice"
                    className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
                  >
                    继续练习
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Topic Progress - 次要显示区域 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">知识单元掌握度</h2>
              <Link to="/questions" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                查看题库
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {topicProgress.map((topic, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${topic.color}`}>
                        <topic.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{topic.topic}</h4>
                        <div className="flex items-center space-x-2">
                          {topic.papers.map((paper, paperIndex) => (
                            <span key={paperIndex} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                              {paper}
                            </span>
                          ))}
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(topic.difficulty)}`}>
                            {getDifficultyLabel(topic.difficulty)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-800">{topic.progress}%</div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${topic.color.includes('blue') ? 'bg-blue-500' :
                                                     topic.color.includes('green') ? 'bg-green-500' :
                                                     topic.color.includes('purple') ? 'bg-purple-500' :
                                                     topic.color.includes('orange') ? 'bg-orange-500' :
                                                     topic.color.includes('red') ? 'bg-red-500' :
                                                     topic.color.includes('indigo') ? 'bg-indigo-500' :
                                                     topic.color.includes('emerald') ? 'bg-emerald-500' :
                                                     topic.color.includes('cyan') ? 'bg-cyan-500' : 'bg-gray-500'}`}
                      style={{ width: `${topic.progress}%` }}
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
                { activity: '完成Paper 1模拟考试', time: '2小时前', score: '23/25', type: 'success', paper: 'Paper 1' },
                { activity: '练习数据库设计题目', time: '昨天', score: '15/20', type: 'warning', paper: 'Paper 3' },
                { activity: '算法分析练习', time: '2天前', score: '18/20', type: 'success', paper: 'Paper 2' },
                { activity: '网络安全题目', time: '3天前', score: '12/18', type: 'warning', paper: 'Paper 1' },
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
                      <div className="text-sm text-gray-600 flex items-center space-x-2">
                        <span>{item.time}</span>
                        <span>•</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                          {item.paper}
                        </span>
                      </div>
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
                { title: '继续Paper 1', desc: '理论基础练习', icon: FileText, link: '/practice', color: 'bg-blue-50 text-blue-600' },
                { title: '模拟考试', desc: 'Paper 1完整模拟', icon: Clock, link: '/practice', color: 'bg-green-50 text-green-600' },
                { title: '薄弱环节', desc: '系统软件专项', icon: Brain, link: '/practice', color: 'bg-orange-50 text-orange-600' },
                { title: '编程实战', desc: 'Paper 4备考', icon: Code2, link: '/ide', color: 'bg-purple-50 text-purple-600' },
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
              你在<strong>系统软件</strong>和<strong>Paper 4编程</strong>方面还需要加强练习。
              建议重点复习相关知识点以提升成绩。
            </p>
            <div className="space-y-2">
              <Link
                to="/practice"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition-colors duration-200 mr-3"
              >
                系统软件练习
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              <Link
                to="/ide"
                className="inline-flex items-center px-4 py-2 bg-orange-600 text-white font-medium rounded-xl hover:bg-orange-700 transition-colors duration-200"
              >
                编程实战
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Paper-based Goals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">试卷目标</h2>
            <div className="space-y-4">
              {[
                { goal: 'Paper 1 达到85%', progress: 78, target: 85, paper: 'Paper 1' },
                { goal: 'Paper 2 完成80题', progress: 52, target: 80, paper: 'Paper 2' },
                { goal: 'Paper 3 达到70%', progress: 45, target: 70, paper: 'Paper 3' },
                { goal: 'Paper 4 完成40题', progress: 19, target: 40, paper: 'Paper 4' },
              ].map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{goal.goal}</span>
                    <span className="text-gray-600">{goal.progress}/{goal.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      style={{ width: `${Math.min((goal.progress / goal.target) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>{Math.round((goal.progress / goal.target) * 100)}% 完成</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {goal.paper}
                    </span>
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