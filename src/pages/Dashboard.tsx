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
  Cpu,
  Play,
  Download,
  ExternalLink,
  Video,
  BookMarked,
  FileCode,
  Users
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

  // 各试卷知识点和学习资源
  const paperKnowledgePoints = [
    {
      paper: 'Paper 1',
      title: '计算机系统理论',
      color: 'border-blue-200 bg-blue-50',
      headerColor: 'bg-blue-600',
      topics: [
        { name: '数据表示', status: 'mastered', progress: 92 },
        { name: '通信与网络', status: 'good', progress: 85 },
        { name: '硬件', status: 'good', progress: 78 },
        { name: '处理器基础', status: 'needs-work', progress: 65 },
        { name: '系统软件', status: 'weak', progress: 56 },
        { name: '安全性', status: 'needs-work', progress: 63 },
        { name: '伦理与法律', status: 'mastered', progress: 88 },
        { name: '数据库', status: 'good', progress: 74 }
      ],
      resources: [
        { type: 'video', title: 'Paper 1 核心概念讲解', duration: '45分钟', icon: Video },
        { type: 'notes', title: '理论知识点总结', pages: '32页', icon: BookMarked },
        { type: 'practice', title: '专项练习题集', questions: '150题', icon: Target },
        { type: 'exam', title: '历年真题解析', papers: '5套', icon: FileText }
      ]
    },
    {
      paper: 'Paper 2',
      title: '基础问题解决',
      color: 'border-green-200 bg-green-50',
      headerColor: 'bg-green-600',
      topics: [
        { name: '算法设计', status: 'good', progress: 82 },
        { name: '数据结构', status: 'good', progress: 79 },
        { name: '编程概念', status: 'mastered', progress: 91 },
        { name: '问题分解', status: 'needs-work', progress: 68 },
        { name: '伪代码', status: 'good', progress: 75 },
        { name: '流程图', status: 'mastered', progress: 89 }
      ],
      resources: [
        { type: 'video', title: '算法思维训练', duration: '60分钟', icon: Video },
        { type: 'code', title: '伪代码模板库', templates: '25个', icon: FileCode },
        { type: 'practice', title: '逻辑推理练习', questions: '80题', icon: Brain },
        { type: 'interactive', title: '在线算法可视化', tools: '12个', icon: Play }
      ]
    },
    {
      paper: 'Paper 3',
      title: '高级理论',
      color: 'border-purple-200 bg-purple-50',
      headerColor: 'bg-purple-600',
      topics: [
        { name: '高级数据结构', status: 'needs-work', progress: 58 },
        { name: '算法复杂度', status: 'weak', progress: 45 },
        { name: '数据库设计', status: 'needs-work', progress: 62 },
        { name: '网络协议', status: 'good', progress: 71 },
        { name: '系统架构', status: 'weak', progress: 48 },
        { name: '软件工程', status: 'needs-work', progress: 66 }
      ],
      resources: [
        { type: 'video', title: '高级概念深度解析', duration: '90分钟', icon: Video },
        { type: 'notes', title: '理论框架图解', diagrams: '45个', icon: BookMarked },
        { type: 'case', title: '实际案例分析', cases: '15个', icon: Users },
        { type: 'exam', title: '高难度真题集', papers: '8套', icon: FileText }
      ]
    },
    {
      paper: 'Paper 4',
      title: '实践编程',
      color: 'border-orange-200 bg-orange-50',
      headerColor: 'bg-orange-600',
      topics: [
        { name: 'Python编程', status: 'good', progress: 76 },
        { name: '算法实现', status: 'needs-work', progress: 64 },
        { name: '数据处理', status: 'good', progress: 72 },
        { name: '文件操作', status: 'needs-work', progress: 58 },
        { name: '调试技巧', status: 'weak', progress: 42 },
        { name: '代码优化', status: 'weak', progress: 39 }
      ],
      resources: [
        { type: 'video', title: 'Python编程实战', duration: '120分钟', icon: Video },
        { type: 'code', title: '代码示例库', examples: '50个', icon: FileCode },
        { type: 'practice', title: 'IDE在线练习', exercises: '30个', icon: Code2 },
        { type: 'download', title: '开发环境配置', guide: '完整指南', icon: Download }
      ]
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

  const getTopicStatusColor = (status: string) => {
    switch (status) {
      case 'mastered': return 'bg-green-100 text-green-700 border-green-200';
      case 'good': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'needs-work': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'weak': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTopicStatusLabel = (status: string) => {
    switch (status) {
      case 'mastered': return '已掌握';
      case 'good': return '良好';
      case 'needs-work': return '需加强';
      case 'weak': return '薄弱';
      default: return '未知';
    }
  };

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

      {/* Paper Progress - 主要显示区域 */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
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

      {/* 新增：各试卷知识点和学习资源 */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {paperKnowledgePoints.map((paperData, index) => (
          <div key={index} className={`rounded-2xl shadow-lg border-2 ${paperData.color} overflow-hidden`}>
            {/* 试卷标题头部 */}
            <div className={`${paperData.headerColor} text-white p-4`}>
              <h3 className="text-lg font-bold">{paperData.paper}</h3>
              <p className="text-sm opacity-90">{paperData.title}</p>
            </div>

            <div className="p-6">
              {/* 知识点列表 */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <Target className="h-4 w-4 mr-2" />
                  知识点掌握情况
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {paperData.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{topic.name}</span>
                          <span className="text-xs font-bold text-gray-800">{topic.progress}%</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                            <div 
                              className={`h-1.5 rounded-full ${
                                topic.status === 'mastered' ? 'bg-green-500' :
                                topic.status === 'good' ? 'bg-blue-500' :
                                topic.status === 'needs-work' ? 'bg-yellow-500' :
                                'bg-red-500'
                              }`}
                              style={{ width: `${topic.progress}%` }}
                            ></div>
                          </div>
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${getTopicStatusColor(topic.status)}`}>
                            {getTopicStatusLabel(topic.status)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 学习资源 */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  学习资源
                </h4>
                <div className="space-y-3">
                  {paperData.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200 cursor-pointer group">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors duration-200">
                          <resource.icon className="h-4 w-4 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                            {resource.title}
                          </div>
                          <div className="text-sm text-gray-600">
                            {resource.duration && `时长: ${resource.duration}`}
                            {resource.pages && `页数: ${resource.pages}`}
                            {resource.questions && `题目: ${resource.questions}`}
                            {resource.papers && `试卷: ${resource.papers}`}
                            {resource.templates && `模板: ${resource.templates}`}
                            {resource.tools && `工具: ${resource.tools}`}
                            {resource.diagrams && `图解: ${resource.diagrams}`}
                            {resource.cases && `案例: ${resource.cases}`}
                            {resource.examples && `示例: ${resource.examples}`}
                            {resource.exercises && `练习: ${resource.exercises}`}
                            {resource.guide && resource.guide}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
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