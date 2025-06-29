import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  Brain, 
  Code2, 
  Target, 
  TrendingUp, 
  Users,
  CheckCircle,
  Clock,
  Zap,
  Star,
  Award
} from 'lucide-react';

export function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl">
                <Code2 className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CS A-Level 刷题神器
              </span>
              <br />
              <span className="text-gray-800">智能练习，轻松拿A*</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              专为CAIE、Edexcel CS A-Level考生打造的智能刷题平台。
              真题练习、即时反馈、弱点诊断，让你的备考更高效、更精准。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                立即开始刷题
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/questions"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
              >
                浏览题库
                <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { number: '2,500+', label: '真题数量', icon: BookOpen },
              { number: '95%', label: '通过率', icon: Target },
              { number: '5万+', label: '用户数量', icon: Users },
              { number: '4.9/5', label: '用户评分', icon: Star },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              全方位备考，一站式解决
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们的智能平台涵盖CS A-Level备考的方方面面，让你的学习更高效、更有针对性。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: '智能练习',
                description: 'AI驱动的自适应学习系统，精准识别薄弱环节，个性化推荐练习题目。',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: Target,
                title: '真题题库',
                description: '收录CAIE、Edexcel历年真题，按年份、试卷、知识点精准分类，配备详细解析。',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Code2,
                title: '在线编程',
                description: '内置IDE支持Python、Java、伪代码，Paper 4编程题实战练习，自动测试评分。',
                color: 'from-green-500 to-emerald-500',
              },
              {
                icon: TrendingUp,
                title: '进度追踪',
                description: '可视化学习进度，详细的数据分析和成绩预测，让你随时掌握备考状态。',
                color: 'from-orange-500 to-red-500',
              },
              {
                icon: Clock,
                title: '限时练习',
                description: '模拟真实考试环境，限时练习模式，培养时间管理能力和应试技巧。',
                color: 'from-indigo-500 to-purple-500',
              },
              {
                icon: Zap,
                title: '即时反馈',
                description: '每道题都有详细解析，常见错误分析，帮你快速理解并避免重复犯错。',
                color: 'from-yellow-500 to-orange-500',
              },
            ].map((feature, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`p-3 bg-gradient-to-br ${feature.color} rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              学霸们的成功故事
            </h2>
            <p className="text-xl text-gray-600">
              看看我们的平台如何帮助学生实现A-Level目标
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                grade: 'A*',
                improvement: '提升2个等级',
                quote: "智能练习功能太棒了！精准找到我的薄弱环节，系统性地帮我提升，从C到A*的逆袭！",
                name: '张同学',
                school: '上海国际学校'
              },
              {
                grade: 'A*',
                improvement: '提升1个等级',
                quote: "Paper 4的在线IDE功能救了我！自动测试让我发现了很多编程细节问题，考试时特别有信心。",
                name: '李同学',
                school: '北京某国际部'
              },
              {
                grade: 'A',
                improvement: '提升3个等级',
                quote: "从基础薄弱到拿A，详细的解析和错误分析让我真正理解了每个知识点，不再死记硬背。",
                name: '王同学',
                school: '深圳国际学校'
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">成绩 {story.grade}</div>
                      <div className="text-sm text-gray-600">{story.improvement}</div>
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{story.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">{story.name}</div>
                  <div className="text-sm text-gray-600">{story.school}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            准备好拿下CS A-Level了吗？
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            加入数万名学生的行列，用我们的智能平台提升你的CS成绩。
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            免费开始练习
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}