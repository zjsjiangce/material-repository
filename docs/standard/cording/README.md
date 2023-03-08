### 1.基本的JS代码规范
* 变量名、函数名驼峰式写法；如：materialStandard,getName()   
* 变量名用名词；如：materialStandard       
* 函数名以动词开始；如： getName(),isDisabled()
* 常量值大写并以下划线相接；如：MATERIAL_NUMBER      
* 代码缩进用4个空格，不要用tabs；
* 在以下地方都应写注释：函数和方法、大型代码块、复杂的算法；
* 运算符周围留空格；如： 
```Javascript
const x = y + 5;
```
* 单行对象在 {} 内部前后各加一个空格；如：
```Javascript
const { firstName, lastName } = obj;
```
* 变量类型透明化；如：
```Javascript
let flag = false // 布尔值  let name = "" // 字符串
```
* 变量申明使用let、const；如：
```Javascript
const MATERIAL_NUMBER = 1 let materialStandard = 3
```
* 使用解构赋值；如：
```Javascript
const { firstName, lastName } = obj const [arr1, arr2] = arr
```
* 使用模版字符窜拼接变量；如：
```Javascript
let str = `My name is ${name}`
```
* 使用函数声明来命名函数；如：
```Javascript
function fun() {}
```
* 函数申明参数有多个时使用扩展运算符表达参数合集；如：
```Javascript
function fun(...args) {
    return args.join('');
}
```
* 直接给函数的参数指定默认值；如：
```Javascript
function fun (opt = {}) {}
```
* 通过箭头函数简写普通函数；如：[1, 2, 3].map((item, index) => {})
```Javascript
[1, 2, 3].map((item, index) => {})
```
* 通过class替换构造函数；如：
```Javascript
class Fun() {
   constructor(name) {
     this.name = name ;
   }
}
```
* 全局公共函数文件，不建议export一个对象的方式，而是export一个个函数的形式。这样可以实现按需导入的；如：
```Javascript
export function fun() {};import {fun} from ''
```
* 条件判断使用 === 和 !==；如：
```Javascript
if (num === 100) {

}
```
* 通过方法 ToBoolean 强制转换的规则：
  * 引用类型 被计算为 true
  * undefined 和 null 为false
  * 布尔值被计算为布尔值
  * number类型，如果为-0，+0 或 NaN 被计算为 false，其他的为 true
  * string 类型，如果为空字符串，被计算为 false，其他的为 true
```Javascript
// bad
if (name !== '') {
}
// good
if (name) {
}
// bad
if (arr.length > 0) {
}
// good
if (arr.length) {}
```  
* if大括号前必要有一个空格，小括号前放一个空格；如：
```Javascript
if () {}
```
* if后必须带有大括号包裹所有的多行代码块；如：
```Javascript
if (name) {
	return;
}
```
* 一个变量数据不能多次判断；如：
```Javascript
const status = 1;
// bad
if (status === 1 || status === 2 || status === 3) {
}
// good
if ([1, 2, 3].includes(status)) {
}
```
* 对NaN，不能通过 === 或 == 进行判断，而是通过isNaN()方法；如：
```Javascript
const name;
// bad
if (name === NaN) {
}
// good
if (isNaN(name)) {
}
```
* 推荐使用赋值运算符；如：
```Javascript
let text = 'hello';text += 'world'
```
* 单行注释在对象上面另起一行使用单行注释。在注释前插入空行；如：
```Javascript
// is current tab
const active = true;
```
* 使用 FIXME 标注问题; 如：
```Javascript
function fun() {
	// FIXME: shouldn't use a global here
	total = 0;
}
```
* 使用 TODO 标注解决方式; 如：
```Javascript
function fun() {
 	// TODO: total should be configurable by an options param
	let total = 0;
}
```
* 类型检测优先使用 typeof，对象类型检测使用 instanceof，null 或 undefined 的检测使用 == null；如：
```Javascript
// string
typeof variable === 'string'
// number
typeof variable === 'number'
// boolean
typeof variable === 'boolean'
// Function
typeof variable === 'function'
// Object
typeof variable === 'object'
// RegExp
variable instanceof RegExp
// Array
variable instanceof Array
// 对于Array与Object 推荐使用如下
if (Array.isArray(arr)) {}
// null
variable === null
// null or undefined
variable == null
// undefined
typeof variable === 'undefined'
```
* 转换成 string 时，使用 + ‘’；如：
```Javascript
num + '';
```
* 转换成 number 时，使用 + ；如：
```Javascript
+str;
```
* string 转换成 number，要转换的字符串结尾包含非数字并期望忽略时，使用 parseInt；如：
```Javascript
var width = '200px';
parseInt(width, 10);
```
* 转换成 boolean 时，使用 !!；如：
```Javascript
let num = 3.14;
!!num;
```
* number 去除小数点，使用 Math.floor / Math.round / Math.ceil，不使用 parseInt；如：
```Javascript
var num = 3.14;
Math.ceil(num);
```

### 2.基本的sass代码规范
Sass是成熟、强大、稳定的CSS预处理器，而CSS是Sass3版本当中引入的新语法特性，完全兼容css3的同时继承Sass强大的动态功能。
#### 2.1 BEM命名规范
BEM：B（Block）、E（Element）、M（Modifier），是由Yandex团队提出来的前端CSS命名方法。一般是这样命名：B__E-M
```html
<div class="Test">
        <div class="Test__fiflter">
            <div class="Test__fiflter-content">
            </div>
        </div>
        <div class="Test__searchResult"></div>
</div>
 <style scoped lang="scss">
        .Test{
            /* todo */
            &__fiflter{
                /* todo */
                &-content{
                    /* todo */
                }
            }
            &__searchResult{
                /* todo */
            }
        }
 </style>
```
#### 2.2 sass变量规范
变量用来存储需要在css中复用的信息 - 例如颜色和字体 Sass通过$符号去声明一个变量。
```css
$primary-color:#333
body{
    color:$primary-color;  // color:#333
}
```
#### 2.3 sass嵌套规范
Sass允许以嵌套的方式使用css，但是过度的使用嵌套会让产生的css难以维护，并且看起来很复杂混乱。
```css
nav{
    ul{
        margin:0;
        padding:0;
        list-style:none;
    }
    li{
        display:inline-block;
    }
    a{
        display:block;
        padding:6px 12px;
    }
}
// Scss这种写法具有更高的可读性，是编写css的良好方式
// 相当于
nav ul{
    margin:0;
    padding:0;
    list-style:none;
}
nav li{
    display:inline-block;
}
nav a{
    display:block;
    padding:6px 12px;
}
```
#### 2.4 sass混合规范
混合（Mixin）用来分组那些需要在页面中复用的css声明，开发人员可以通过向Mixin传递变量参数来让代码更加灵活，该特性在添加浏览器兼容性前缀的时候十分有用，Sass目前使用@mixin name指令来定义混合操作。
```scss
@mixin border-radius($radius){
    border-radius:$radius
    -ms-border-radius:$radius; // 兼容性
    -moz-border-radius:$radius; // 兼容性
    -webkit-border-radius:$radius; // 兼容性
}
.box{
    @include border-radius(10px) // 通过@include使用Mixin
}
// 编译后相当于
.box{
    border-radius:10px;
    -ms-border-radius:10px;
    -moz-border-radius:10px;
    -webkit-border-radius:10px;
}
```
#### 2.5 sass继承规范
继承是Sass中非常重要的一个特性，可以通过@extend指令在选择器之间复用css属性，并且不会产生冗余的代码。
```css
// 这段代码不会被输出到最终生成的css文件，因为它没有被任何代码所继承
%other-styles{
    display:flex;
    flex-wrap:wrap;
}
// 而下面这段代码会正常的被输出到生成的css文件，因为它被其接下来的代码所继承
%message-common{
    border:1 solid #ccc;
    padding:10px;
    color:#333;
}
.message{
    @extend %message-common; // 继承
}
.success{
    @extend %message-common;  // 继承
    border-color:green;
}
// 编译后相当于
.message,.success{
    border:1px solid #ccc;
    padding:10px;
    color:#333;
}
.success{
    border-color:green;
}
```
#### 2.6 sass操作符规范
Sass提供了标准的算术运算符，例如 +、-、*、/、%
```css
.container{
    width:100%
}
.article[role = 'main']{
    float:left;
    width:600px / 960px * 100%;
}
aside[role = 'complementary']{
    float:right;
    width:300px / 960px * 100%;
}
// 编译后相当于
.container{
    width:100%;
}
.article[role='main']{
    float:left;
    width:62.5%;
}
.aside[role='complementary']{
    float:right;
    width:31.25%;
}
```
#### 2.7 sass嵌套属性规范
css许多属性都是位于相同的命名空间(例如font-family，font-size，font-weight都会位于font命名空间下），Scss当中只需要编写命名空间一次，后续嵌套的子属性都将会位于该命名空间之下。
```css
.demo{
    // 命令空间后带有冒号：
    font：{
        family：fantasy;
        size:30em;
        weight:bold;
    }
}
// 编译后相当于
.demo{
    font-family:fantasy;
    font-size:30em;
    font-weight:bold;
}
```
#### 2.8 sass引入规范
同一个SASS文件中的所有的 @import必须放在同一块，不允许分开，base.scss文件当中引入_reset.scss片段：
```css
// reset.scss
html,body,ul,ol{
    margin:0;
    padding:0;
}
// base.scss
@import 'reset'
body{
    background-color:#333
}
// Sass中引入片段，可以缺省扩展名
// 相当于
html,body,ul,ol{
    margin:0;
    padding:0;
}
body{
    background-color:#efefef;
}
```

### 3.编码惯例
* **不声明全局变量**
  * 一方面，全局变量和全局函数有可能会被覆盖，所以不安全。
  * 另一方面，和JS的垃圾回收机制有关，全局变量是在window下的变量，只要window本身不被干掉，全局变量就不会消失，所以造成了”内存泄漏“。
* **用const、let 代替 var**
  * 也有一部分垃圾回收机制的原因，因为const、let是块级作用域的关系，垃圾回收机制能更早的发现这两个关键字声明的变量并把他们回收（因为大多数情况下块级作用域比函数作用域更早终止）。
  * 先使用const、let次之。不知道大家知不知道静态代码分析，使用const有利于静态代码分析工具来帮助我们分析代码，当我们知道一个值未来会被改变时就用let，这样对于后期代码检查有非常大的帮助。
* **不要连续赋值**
  * 比如 let a = b = c = 1; 这行代码确实将a、b、c都赋值为1了，但是b和c会被声明为全局变量。
* **简化循环语句** 
  * let i；
    let len = arr.length；
    for( i = 0; i < len； i++)；
* **语句最少化**
    ```Javascript
    // bad  new object：
    let arr = new Array(3)
    arr[0] = 12
    arr[1] = 2
    arr[2] = 3
    
    // good 字面量方式：
    let arr = [1, 2, 3] 
    ```
    ```Javascript
    // bad 
    let student = new Object();
    student.name = "xx";
    student.age = 11;
    student.sayHello = function(){ console.log("Hello") };
    // good 
    let student = {
       name:"xx",
       age:11,
       sayHello:function(){
         console.log("Hello")
       }
    };
    ```
    ```Javascript
    // bad
    let name = "xxx";
    let name1 = "zzz";
    let name2 = "ccc";
    //good
    let name  = "xxx", 
    name1 = "zzz",
    name2 = "ccc"; 
    ```