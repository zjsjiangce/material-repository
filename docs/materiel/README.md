### 介绍
前端物料库建设是为了更好地服务业务开发工作流程，提升沟通效率，降低各环节成本。
物料库中物料以颗粒度大小分为组件、区块和页面三种级别。
### 工作原理
物料库是采用monorepo(多包单代码仓库)的管理方式，所有相关module都放到一个repo里，每个module独立发布，（例如Babel、React和jest等），issue和PR都集中到该repo中。

不需要手动去维护每个包的依赖关系，当发布时，会自动更新相关包的版本号，并自动发布。

我们采用Lerna去维护这种模式的物料仓库，Lerna项目文件结构：
```Javascript
├── lerna.json
├── package.json
└── packages
    ├── package-a
    │   ├── index.js
    │   └── package.json
    └── package-b
        ├── index.js
        └── package.json
```

### 快速上手
如果你想要参与到物料库建设的话，那就按照下面的介绍操作，加入我们吧！
#### 全局安装
全局安装lerna
```
 npm install --global lerna
```
全局安装hygen，
hygen为物料组件工程自动化模版生成工具
```
 npm install --global hygen
```
全局安装commitizen
```
npm install -global commitizen
```
#### 初始化（已有项目可跳过）
lerna 初始化项目
```
mkdir demo 
cd demo
lerna init  
```
配置lerna.json文件
```Javascript
{
  "$schema": "node_modules/lerna/schemas/lerna-schema.json",
  "packages": [
    "packages/*"
  ],
  "useWorkspaces": true,//启用yarn workspaces
  "version": "independent",
  "npmClient":"yarn",
}
```
配置package.json文件
```Javascript
{
  "private": true,//工作区本身不应当被发布出去
  "workspaces": ["packages/*"]//指定工作区
}
```
#### 安装依赖
安装项目依赖
```
npm i 
```
项目依赖清单package.json
```Javascript
"devDependencies": {
    "@babel/core": "^7.21.0",
    "@babel/eslint-parser": "^7.19.1",
    "@babel/preset-env": "^7.20.2",
    "@commitlint/cli": "^17.4.4",
    "@commitlint/config-conventional": "^17.4.4",
    "@ls-lint/ls-lint": "^1.11.2",
    "@vue/vue2-jest": "^29.2.2",
    "babel-jest": "^29.4.3",
    "babel-loader": "^8.0.1",
    "babel-preset-latest": "^6.24.1",
    "clean-webpack-plugin": "^4.0.0",
    "commitlint-config-cz": "^0.13.3",
    "commitlint-config-gitmoji": "^2.3.1",
    "css-loader": "^6.7.3",
    "cz-conventional-changelog": "^3.3.0",
    "cz-customizable": "^7.0.0",
    "eslint": "^8.35.0",
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-vue": "^9.9.0",
    "husky": "^7.0.4",
    "jest": "^29.4.3",
    "jsdom": "^21.1.0",
    "jsdom-global": "^3.0.2",
    "lerna": "^6.4.1",
    "lint-staged": "^13.1.2",
    "postcss": "^8.4.21",
    "postcss-html": "^1.5.0",
    "postcss-scss": "^4.0.6",
    "prettier": "^2.8.4",
    "sass": "^1.58.3",
    "sass-loader": "^10.0.1",
    "style-loader": "^3.3.1",
    "stylelint": "^15.2.0",
    "stylelint-config-prettier": "^9.0.5",
    "stylelint-config-rational-order": "^0.1.2",
    "stylelint-config-standard": "^30.0.1",
    "stylelint-config-standard-scss": "^7.0.1",
    "stylelint-order": "^6.0.2",
    "typescript": "^4.9.5",
    "vue-eslint-parser": "^9.1.0",
    "vue-loader": "^15.10.1",
    "vue-template-compiler": "^2.7.14"
  },
  "dependencies": {
    "async-validator": "^1.11.5",
    "core-js": "^2.6.12",
    "element-ui": "^2.15.13",
    "vue": "2.7.14",
    "vuepress": "^1.9.8",
    "vuepress-plugin-demo-container": "^0.2.0"
  }
```
#### 创建一个物料组件
命令带参数形式：
```
hygen pkg-tp with-prompt --folder 物料文件夹名称 --business 业务线名称 --name 物料名称 --description 工程描述 --author 作者名称
```
命令交互填写形式：
```
hygen pkg-tp with-prompt
```
#### 物料组件打包
全部打包:
```
yarn build
```
指定打包:
```
yarn build -p 物料组件工程名
```
#### 物料组件添加依赖
```
lerna add 依赖名称 --scope=物料组件名
```
#### 物料组件测试
执行全部测试
```
yarn hyt
```
执行某个包测试
```
yarn hyt -p 物料组件工程名
```
#### 物料组件代码提交
常规提交方式：
```
git commmit -m '[type]:[subject]'
```
工具提交方式（推荐）：
```
npm run commit
```
### 物料发布
```
lerna publish
```