import React, { useState } from 'react';
import { 
  Play, 
  Square, 
  RotateCcw, 
  Save, 
  Download,
  Code2,
  Terminal,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Lightbulb
} from 'lucide-react';

export function IDE() {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState(`# Paper 4 练习 - 二分查找实现
def binary_search(arr, target):
    """
    实现二分查找算法
    如果找到目标返回索引，否则返回-1
    """
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# 测试你的实现
test_array = [1, 3, 5, 7, 9, 11, 13, 15]
target_value = 7

result = binary_search(test_array, target_value)
print(f"目标值 {target_value} 在索引: {result}")
`);

  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState([
    { input: '[1,3,5,7,9], target=7', expected: '3', actual: '3', passed: true },
    { input: '[1,3,5,7,9], target=2', expected: '-1', actual: '-1', passed: true },
    { input: '[1,3,5,7,9], target=1', expected: '0', actual: '0', passed: true },
    { input: '[1,3,5,7,9], target=9', expected: '4', actual: '4', passed: true },
  ]);

  const currentQuestion = {
    title: "二分查找实现",
    paper: "Paper 4",
    marks: 8,
    timeLimit: 15,
    description: "实现一个二分查找算法，接受一个已排序的数组和目标值，如果找到目标则返回索引，否则返回-1。",
    requirements: [
      "函数必须命名为 'binary_search'",
      "优雅地处理空数组",
      "使用迭代方法（非递归）",
      "返回正确的索引或-1"
    ],
    hints: [
      "记住二分查找只适用于已排序的数组",
      "使用左右指针来跟踪搜索边界",
      "计算中点为 (left + right) // 2",
      "根据比较结果更新边界"
    ]
  };

  const languages = [
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'java', name: 'Java', icon: '☕' },
    { id: 'pseudocode', name: '伪代码', icon: '📝' },
  ];

  const runCode = () => {
    setIsRunning(true);
    // 模拟代码执行
    setTimeout(() => {
      setOutput(`目标值 7 在索引: 3
所有测试用例通过! ✅
时间复杂度: O(log n)
空间复杂度: O(1)`);
      setIsRunning(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">编程实战</h1>
            <p className="text-gray-600">Paper 4 备考，实时代码执行和测试</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              <span>剩余时间: 12:34</span>
            </div>
            <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              {currentQuestion.marks} 分
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Question Panel */}
        <div className="lg:col-span-1 space-y-6">
          {/* Question Details */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">{currentQuestion.title}</h2>
                <p className="text-sm text-gray-600">{currentQuestion.paper} • {currentQuestion.timeLimit} 分钟</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">{currentQuestion.description}</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">要求:</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {currentQuestion.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Hints */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
              </div>
              <h3 className="font-bold text-yellow-800">提示</h3>
            </div>
            <div className="space-y-2 text-sm text-yellow-700">
              {currentQuestion.hints.map((hint, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-yellow-600 mt-1">💡</span>
                  <span>{hint}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Test Results */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-4">测试结果</h3>
            <div className="space-y-3">
              {testResults.map((test, index) => (
                <div key={index} className={`p-3 rounded-xl border ${test.passed ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-800">测试 {index + 1}</span>
                    {test.passed ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                  <div className="text-xs text-gray-600">
                    <div>输入: {test.input}</div>
                    <div>期望: {test.expected}</div>
                    <div>实际: {test.actual}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Code Editor Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Editor Controls */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <Code2 className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-gray-800">代码编辑器</span>
                </div>
                <div className="flex items-center space-x-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setSelectedLanguage(lang.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        selectedLanguage === lang.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <span className="mr-2">{lang.icon}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 disabled:opacity-50 transition-colors duration-200"
                >
                  {isRunning ? (
                    <>
                      <Square className="h-4 w-4" />
                      <span>运行中...</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      <span>运行代码</span>
                    </>
                  )}
                </button>
                <button className="p-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors duration-200">
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button className="p-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors duration-200">
                  <Save className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Code Editor */}
            <div className="relative">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-96 p-4 font-mono text-sm bg-gray-900 text-green-400 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="在这里编写你的代码..."
                spellCheck={false}
              />
              <div className="absolute top-4 right-4 text-xs text-gray-500">
                行数: {code.split('\n').length} | 字符: {code.length}
              </div>
            </div>
          </div>

          {/* Output Panel */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Terminal className="h-5 w-5 text-green-600" />
              <h3 className="font-bold text-gray-800">输出</h3>
              {isRunning && (
                <div className="flex items-center space-x-2 text-sm text-blue-600">
                  <div className="animate-spin h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                  <span>执行中...</span>
                </div>
              )}
            </div>
            
            <div className="bg-gray-900 rounded-xl p-4 min-h-[200px]">
              <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                {output || (isRunning ? '正在运行你的代码...' : '运行代码后输出将显示在这里')}
              </pre>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200">
                <CheckCircle className="h-4 w-4" />
                <span>提交答案</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors duration-200">
                <Download className="h-4 w-4" />
                <span>下载代码</span>
              </button>
            </div>
            
            <div className="text-sm text-gray-600">
              自动保存已启用 • 上次保存: 2分钟前
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}