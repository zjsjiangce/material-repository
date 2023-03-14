// .cz-config.js
module.exports = {
    types: [
      { value: 'feat', name: '✨ feat: 一项新功能' },
      { value: 'fix', name: '🐛 fix: 修复一个Bug' },
      { value: 'docs', name: '📝 docs: 文档变更' },
      { value: 'style', name: '💄 style: 代码风格，格式修复' },
      { value: 'refactor', name: '♻️ refactor: 代码重构，注意和feat、fix区分开' },
      { value: 'perf', name: '⚡️ perf: 代码优化,改善性能' },
      { value: 'test', name: '✅ test: 测试' },
      { value: 'chore', name: '🚀 chore: 变更构建流程或辅助工具' },
      { value: 'revert', name: 'revert: 代码回退' },
      { value: 'init', name: '🎉 init: 项目初始化' },
      { value: 'ci', name: '👷 ci: 对CI配置文件和脚本的更改' },
      { value: 'build', name: '📦️ build: 变更项目构建或外部依赖' },
      { value: 'WIP', name: '🚧 WIP: 进行中的工作' },
      { value: 'publish', name: '🚀 publish: 发布代码' }
    ],
    scopes: [
      { name: 'component' },
      { name: 'config' },
      { name: 'docs' },
      { name: 'src' },
      { name: 'examples' },
      { name: 'play' }
    ],
    messages: {
      type: '请选择提交类型(必填):',
      scope: '请选择一个scope (可选):',
      customScope: '请输入文件修改范围(可选):',
      // used if allowCustomScopes is true
      subject: '请简要描述提交(必填):',
      body: '请输入详细描述，使用"|"换行(可选):\n',
      breaking: '列出任务非兼容性说明 (可选):\n',
      footer: '请输入要关闭的issue，例如：#12, #34(可选):\n',
      confirmCommit: '确定提交此说明吗？'
    },
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    // 限制 subject 长度
    subjectLimit: 72
    // 跳过问题 skip any questions you want
    // skipQuestions: ['body', 'footer'],
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false
  }