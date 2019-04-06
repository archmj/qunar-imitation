# notes 
路由默认首页是http://127.0.0.1:8080/#/  
如果是其他页面要加在后面，不然就不对。
```
http://127.0.0.1:8080/#/list
```
> 之前写成这样就不对http://127.0.0.1:8080/list

# 修改index.hmtl
添加以下
```
minimum-scale=1.0,maximum-scale=1.0,er-scalable=no"
```
让移动端页面始终1：1显示，不能通过手指缩放


# 引入样式重置和移动端1像素边框的问题

不同手机间的样式重置
`reset.css`


多倍屏幕之间的一像素边框显示不同的问题
引入`border.css`

# 移动端点击300毫秒延迟
引入fastclick
```npm
npm install fastclick --sav
```

在main.js中引入包
```java
import fastClick from 'fastclick'
```
并配置
```
fastClick.attach(document.body)
```

## 使用stylus进行css开发
安装依赖
```npm
node install stylus --save
node install staylus-loader --save
```

## ES6语法
ES6语法可以键值都相同时，可以简写
```vue
 components: {
    HomeHeader
  }
```
ES5中
```vue
 components: {
    HomeHeader:HomeHeader
  }
```

#使用字体图标iconfont
添加到购物车，保留 `iconfont.css`引用的字体，其其他都可以删除。同时修改引用目录的路径，因为css和font文件开发项目中是不放在同一个文件夹的。
把`iconfont.css`中的一些别名引用删除，我们不需要，直接去网站复制`16进制`的代码引用即可。

# 全局使用字体库
在入口文件`main.js`中引入，iconfont字体。

# 在csss中提取属性变量到文件中
```vue
  @import "../../../assets/styles/varibles.styl"
  或者
  @import "~@/assets/styles/varibles.styl"
```
> 注意在样式中不能直接Import要加上`@`,同时引入配置文件用@做src目录时，前面需要添加一个波浪线。样式中引入样式都要这么做。

@是在webpack.base.conf.js文件中修改别名的
```vue
 resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
```
可以自己添加需要的别名。


## 使用swiper
https://github.com/surmon-china/vue-awesome-swiper
```npm
npm install vue-awesome-swiper --save
```
根据npm安装，如果有版本指定版本,比如
```npm
npm install vue-awesome-swiper@2.6.7 --save
```

根据官方demo在template中引入

```vue
<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

```

ES5中
```vue
name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {}
    }
  }
```
ES6简写
```vue
name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {}
    }
  }
```

添加到Home.Vue中，运行报错
```vue
 Error compiling template:
  
  <home-header></home-header>
  <home-swiper></home-swiper>
  
  - Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.

```
template中只能有一个跟元素，所以把组件用div套起来就ok了。

设置图片完全显示`width: 100%`

防止页面抖动，提前设置图片占位。
```css
  .swipe-wrap
    overflow: hidden
    width:100%
    height:0
    padding-bottom :26.66%
```
> 其中的`padding-bottom`是图片的宽高比
同理可以用下面实现
```css
  .swipe-wrap
    width:100%
    height:26.66vw
```
> 下面这种写法对浏览器的兼容性不是很好

## 样式穿透
```vue
  .swipe-wrap >>> .swiper-pagination-bullet
     background:#fff
```
样式受scoped元素影响，只作用当前的组件样式，如果加载了外部插件的组件，需要修改样式就不起作用了，这个时候就需要通过`>>>`进行样式穿透显示。

# 设置宽高比
如果宽度是
```css
.hello{
height:0;
padding-bottom:25%
}
```
表示高度是宽度的25%  
再者

```css
.hello{
width:25%;
height:0;
padding-bottom:25%
}
```
则宽高比为1:1


# box-sizing
这个是css3的新特性，
```css
.hello {
box-sizing:border-box;
padding: .1rem
}
```
这个表示内缩1rem

# swiper-container
swiper-container自带css样式`overflow：hidden`


# 条目切换时，第二页没有显示
在使用swiper做第二页时，条目大于当前页面显示需要到第二页时没有正确切换，而是跟随后面并且被overflow了，这时候可以通过vue的计算属性，建立踹个组数，设置好每页显示的条目，通过数组索引来做分页。
并通过v-for循环输出内容

# 文件过长显示。。。
通过设置text-overflow为ellipsis来达到文字过长时舍去尾部显示用...代替
通过
```css
. ellipsis{
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis
}
```
