module.exports = {
    title: '华云前端文档',
    description: '华云前端文档',
    plugins: ['vuepress-plugin-demo-container'],
    themeConfig: {
        search: false,
        nav: [
          // 一级导航
          {
            text: '主页', link: '/' 
          },
          {
            text: '物料库', link: '/materiel/'
          },
          {
            text: '前端规范', link: '/standard/'
          },
          // { 
          //   text: '指南',
          //   items: [
          //     {
          //       text:'组件',link: '/components/'
          //     },
          //     {
          //       text:'区块',link:'/block/'
          //     },
          //     {
          //       text:'页面',link:'/page/'
          //     },
          //   ], 
          // },
          // 下拉列表导航
          // {
          //   text: '了解更多',
          //   items: [
          //     { text: 'github', link: 'https://github.com/ShuQingX/vue-comp-test', target: '_blank' },
          //     { text: 'preview', link: 'https://shuqingx.github.io/vue-comp-test/', target: '_blank' }
          //   ]
          // }
        ],
        sidebar: {
          '/materiel/':[
            ['','简介'],
            {
              title: '组件',
              collapsable: true,
              children: [
                ['/materiel/components/Select.md', 'Select'],
                ['/materiel/components/Slider.md', 'Slider'],
              ]
            },
            {
              title: '区块',
              collapsable: true,
              children: [
                ['/materiel/block/NavMenu.md', 'NavMenu'],
              ]
            },
            {
              title: '页面',
              collapsable: true,
              children: [
                ['/materiel/page/Layout.md', 'Layout'],
              ]
            }
          ],
          '/standard/':[
            ['','前端规范'],
            {
              // '/standard/cording/':{
              //   title: '代码规范',
              //   collapsable: false,
              // },
              title: '',
              collapsable: false,
              children: [
                ['/standard/cording/', '代码规范'], 
              ]
            },
            {
              title: '',
              collapsable: false,
              children: [
                ['/standard/document/', '文档规范'],
                
              ]
            },
            {
              title: '',
              collapsable: false,
              children: [
                ['/standard/git/', 'git规范'],
                
              ]
            },
            {
              title: '',
              collapsable: false,
              children: [
                ['/standard/engineering/', '工程规范'],  
              ]
            },
            {
              title: '',
              collapsable: false,
              children: [
                ['/standard/material/', '物料规范'],  
              ]
            },{
              title: '',
              collapsable: false,
              children: [
                ['/standard/publishing/', '发布规范'],  
              ]
            }
          ],  
          '/': [
            ['', '介绍'], // '' 等价于 /guide/
            // {
            //   title: '组件',
            //   collapsable: true,
            //   children: [
            //     ['/materiel/components/Select.md', 'Select'],
            //   ]
            // },
            // {
            //   title: '区块',
            //   collapsable: true,
            //   children: [
            //     ['/materiel/block/NavMenu.md', 'NavMenu'],
            //   ]
            // },
            // {
            //   title: '页面',
            //   collapsable: true,
            //   children: [
            //     ['/materiel/page/Layout.md', 'Layout'],
            //   ]
            // }
          ],
      
        },
        // 禁用导航，与上面的配置是互斥行为。
        // navbar: false
      }
    
}