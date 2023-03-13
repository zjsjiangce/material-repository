module.exports = {
    // ignores: [(commit) => commit.includes('init')],
    extends: ['@commitlint/config-conventional', 'cz'],
    // extends: ['gitmoji'],
    rules: {
      // 'body-leading-blank': [2, 'always'],
      // 'footer-leading-blank': [1, 'always'],
      // 'header-max-length': [2, 'always', 108],
      // 'subject-empty': [2, 'never'],
      // 'type-empty': [ 2, 'never' ],
      // 'subject-case': [0],
      // 'type-enum': [
      //   2,
      //   'always',
      //   [
      //     'feat',
      //     'fix',
      //     'perf',
      //     'style',
      //     'docs',
      //     'test',
      //     'refactor',
      //     'build',
      //     'ci',
      //     'chore',
      //     'revert',
      //     'wip',
      //     'workflow',
      //     'types',
      //     'release'
          
      //   ]
      // ]
      'type-enum': [
        2,
        'always',
        [
          'feat', // 新功能（feature）
          'fix', // 修复bug
          'docs', // 修改文档
          'style', // 修改代码格式，不影响代码逻辑
          'refactor', // 代码重构，理论上不影响功能逻辑
          'test', // 修改测试用例
          'build', // 构建或其他工具的变动(如webpack)
          'revert', // 还原以前的提交
          'merge', // 分支代码合并
        ],
      ]
    }
  }