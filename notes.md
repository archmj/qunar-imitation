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

