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

## 图片占位
非常重要，避免先加载文字，然后图片出来出现的抖动感觉
举例：
可以通过设置溢出部分不显示，高度为0，宽高比为25%来占位
```css
.img-wrap {
overflow:hidden;
height:0;
padding-bottom:25%
}
```

# static是对外公开的
其除了static下的资源可以通过url直接访问到，其他目录都是不可以直接访问的。
在做本地接口模拟测试的时候，可以设置目录转发。 
在config下index,js中体格的prxyTable功能设置目录代理转发
```
  proxyTable: {
      '/api': {
        teaget: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    },
```
> 修改配置文件时需要重启服务生效


# ajax接收swiper
默认时是空数组，导致接收到数据时，默认显示的是最后一个轮播图。

1. 可以通过在模板里面添加`v-if=“list.length"`来判断。但是这样会在模板里面做逻辑判断并不推荐。
2. 把逻辑判断放在computed中，
```vue
computed: {
showSwipe () {
  return this.list.length
}
}
```
然后在v-if里引用showSwipe方法即可。


# swipe轮播图
可以通过autoplay属性设置是非自动轮播.
```
        autoplay: false  //不自动轮播
        autoplay: 1000  //每秒自动轮播
```
        
# 产商前缀
```
-webkit-border-radius: .06rem
      -moz-border-radius: .06rem
      border-radius: .06rem
```
也可以直接写border-radius: .06rem ,Vue-cl在编译时会自动加上。不过IDEA也会智能的给我们加上的。

# 搜索框设置文字间距时
设置padding时，需要加一个box-sizing: border-box,不然会超出范围。
border-box 告诉浏览器去理解你设置的边框和内边距的值是包含在width内的


# 在地址选项时子元素设置了float
在页面被父级div遮住不显示了
解决，在父类div上overflow:hidden

# 城市选项设置了overflow-hidder
多出的区域无法选择了，用better-scroll实现城市列表的选择
安装
```npm
npm install better-scroll --save
```


# 对象也可以循环输出
```vue
 v-for="(item,key) of cities" :key="key"
```
 
# 这里有坑
 
 ```vue
 watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
```
element结果是undefined   
原因得到的letter后面有换行，解决方法是获取letter的值时加trim().
 ```vue
 watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter.trim()][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
```

## 性能改进
设置一个属性出始值，然后通过updated更新,方法中的值从属性中获取，这样不用每次在方法中计算
updated会在获取ajax数运行,设置
 ```vue
 updated () {
    this.startY = this.$refs['A'][0].offsetTop
  }
```
通过行数截流
这里有个问题，延迟单位是毫秒，上10以上就会有卡顿感
对应设置属性timerhe和重置timer
```vue
    const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
            console.log(index)
          }
        }, 5)
```
# bscroll
使用bscroll获取页面dom元素时，ref不需要加冒号。

## vuex
```vue
npm install vuex --save
```

```vue
 methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
    }
  }
```
配合使用
```vue
actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
```
或者不经过actions直接commit
 ```vue
 methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
    }
  }
```
配合 
```vue
mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
```

在vuex中将inex.js文件中的模块拆分出去便
`mutation.js`
`state.js`


#    城市多文字导致header撑大
将固定支持width修改成`min-width`
min-width: 1.04rem
# 简化vuex的数据传递
 ```vue
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['city'])
  }
}

```
然后可以将`{{this.$store.state.city}}`简写成`{{this.city}}`

引入
```vue
import {mapState, mapMutations} from 'vuex'
```
和在方法中引入
```vue
...mapMutations(['changeCity'])
```
就可以将` this.$store.commit('changeCity', city)`简写成`this.changeCity(city)`
```vue
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
```

# 页面的缓存
在Vue的入口文件app.vue路由上加上`    <keep-alive>`
```vue
    <keep-alive>
      <router-view/>
    </keep-alive>
```

# banner图通过点击事件时轮播图错误
通过下面两个参数解决。检测自己和父类有更新时，自动刷新

   ```
  observer: true,
        observeParents: true
   ```
   ```vue
data: function () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true

      }
    }
  }
```

# 小心全局绑定
使用activated生命周期全局绑定后一定要解绑，deactivated会在切换页面时解除绑定
   ```vue

 activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
```
   
 # 错误排查
 ```vue
Property or method "item" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

found in
```
属性或方法未定义。  
在父组件向子组件传值时，用v-for取值是，v-for 所在的div没有包裹取值的参数。导致上述错误。
