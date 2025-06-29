import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  Award, 
  Calendar, 
  Target,
  BookOpen,
  Clock,
  Star,
  Edit,
  Save,
  Camera,
  Bell,
  Shield,
  Download
} from 'lucide-react';

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '小明',
    email: 'xiaoming@email.com',
    school: '上海国际学校',
    examBoard: 'CAIE 9608',
    targetGrade: 'A*',
    examDate: '2024-05-15'
  });

  const stats = [
    { label: '活跃天数', value: 45, icon: Calendar },
    { label: '已刷题数', value: 347, icon: BookOpen },
    { label: '学习时长', value: 23, icon: Clock },
    { label: '连续天数', value: 12, icon: Star }
  ];

  const badges = [
    { name: '初出茅庐', description: '完成第一次练习', earned: true, color: 'bg-green-500' },
    { name: '一周战士', description: '连续7天练习', earned: true, color: 'bg-blue-500' },
    { name: '算法大师', description: '算法题90%+正确率', earned: true, color: 'bg-purple-500' },
    { name: '速度恶魔', description: '平均用时低于2分钟', earned: true, color: 'bg-orange-500' },
    { name: '数据库专家', description: '掌握所有数据库主题', earned: false, color: 'bg-gray-300' },
    { name: '满分达人', description: '练习测试获得100%', earned: false, color: 'bg-gray-300' }
  ];

  const studyGoals = [
    { goal: '每日练习30分钟', progress: 23, target: 30, color: 'bg-blue-500' },
    { goal: '完成500道题目', progress: 347, target: 500, color: 'bg-green-500' },
    { goal: '达到90%总体正确率', progress: 84, target: 90, color: 'bg-purple-500' },
    { goal: '掌握所有Paper 1主题', progress: 8, target: 12, color: 'bg-orange-500' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">个人中心</h1>
        <p className="text-gray-600">管理你的账户信息，追踪学习历程</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-8">
          {/* Basic Info */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">个人信息</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                <span>{isEditing ? '保存更改' : '编辑资料'}</span>
              </button>
            </div>

            <div className="flex items-center space-x-6 mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <User className="h-12 w-12 text-white" />
                </div>
                <button className="absolute -bottom-2 -right-2 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                  <Camera className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{profileData.name}</h3>
                <p className="text-gray-600">{profileData.school}</p>
                <p className="text-sm text-gray-500">{profileData.examBoard} 考生</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(profileData).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {key === 'name' ? '姓名' :
                     key === 'email' ? '邮箱' :
                     key === 'school' ? '学校' :
                     key === 'examBoard' ? '考试局' :
                     key === 'targetGrade' ? '目标成绩' :
                     key === 'examDate' ? '考试日期' : key}
                  </label>
                  {isEditing ? (
                    <input
                      type={key === 'email' ? 'email' : key === 'examDate' ? 'date' : 'text'}
                      value={value}
                      onChange={(e) => setProfileData(prev => ({ ...prev, [key]: e.target.value }))}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-xl text-gray-800">
                      {key === 'examDate' ? new Date(value).toLocaleDateString('zh-CN') : value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Study Goals */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">学习目标</h2>
              <Target className="h-5 w-5 text-gray-400" />
            </div>

            <div className="space-y-6">
              {studyGoals.map((goal, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{goal.goal}</span>
                    <span className="text-sm text-gray-600">
                      {goal.progress}/{goal.target}
                      {typeof goal.progress === 'number' && goal.progress < 100 && goal.target < 100 ? '%' : ''}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${goal.color}`}
                      style={{ width: `${Math.min((goal.progress / goal.target) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {Math.round((goal.progress / goal.target) * 100)}% 完成
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Settings className="h-5 w-5 text-gray-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">设置</h2>
            </div>

            <div className="space-y-6">
              {/* Notifications */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Bell className="h-4 w-4 mr-2" />
                  通知设置
                </h3>
                <div className="space-y-3">
                  {[
                    { label: '每日练习提醒', enabled: true },
                    { label: '每周进度报告', enabled: true },
                    { label: '新题目提醒', enabled: false },
                    { label: '成就通知', enabled: true }
                  ].map((setting, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="text-gray-700">{setting.label}</span>
                      <button
                        className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                          setting.enabled ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
                            setting.enabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        ></div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Privacy */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  隐私设置
                </h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <div className="font-medium text-gray-800">数据导出</div>
                    <div className="text-sm text-gray-600">下载你的练习数据</div>
                  </button>
                  <button className="w-full text-left p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <div className="font-medium text-gray-800">删除账户</div>
                    <div className="text-sm text-gray-600">永久删除你的账户</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          {/* Stats */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">学习统计</h2>
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <stat.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-700">{stat.label}</span>
                  </div>
                  <span className="text-xl font-bold text-gray-800">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Award className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">成就徽章</h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    badge.earned 
                      ? 'border-gray-200 bg-white hover:shadow-md' 
                      : 'border-dashed border-gray-300 bg-gray-50'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg ${badge.color} flex items-center justify-center mb-3`}>
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div className="font-semibold text-gray-800 text-sm mb-1">{badge.name}</div>
                  <div className="text-xs text-gray-600">{badge.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">快速操作</h2>
            <div className="space-y-3">
              {[
                { label: '导出进度报告', icon: Download, action: 'export' },
                { label: '重置统计数据', icon: Target, action: 'reset' },
                { label: '联系客服', icon: User, action: 'support' }
              ].map((action, index) => (
                <button
                  key={index}
                  className="w-full flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <action.icon className="h-4 w-4 text-gray-600" />
                  <span className="font-medium text-gray-700">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}