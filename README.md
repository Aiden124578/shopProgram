# 小程序

- 标签的书写，严格书写

- 全局配置文件在微信小程序里面配置，页面配置在vscode里面配置，框架与vue差不多

- 不支持通配符选择器

- 还需要注意的是 JSON 文件中无法使用注释，样式文件多行注释才有效

- 没有跨域的，服务器必须用Https

- 小程序中引入less

  - 安装插件，easy less

  - 在设置里面加入配置

    ```json
    "less.compile": {
    	"outExt":".wxss"
    }
    ```

  - 定义变量

    ```css
    @color:yellow;
    color:@color;
    ```

  - less也支持外部导入功能，导入less

    ```less
    import "../../style/reset.less";
    ```

- https://developers.weixin.qq.com/ebook?action=get_post_info&token=935589521&volumn=1&lang=zh_CN&book=miniprogram&docid=0000286f908988db00866b85f5640a


- 渲染层view层（wxml，wxss），逻辑层（js）jscore层，native微信客户端
- 页面.js文件中 存放事件回调函数的时候，存放在data同层级下
- 组件.js文件中存放事件回调函数的时候，必须要存放在methods中
- iPhone的部分手机不识别webp图片格式

![image-20200721160118017.png](https://i.loli.net/2020/11/15/94NfTzqYhIcsX53.png)

![image-20200721160249346.png](https://i.loli.net/2020/11/15/fRndkZlp4zxGaCQ.png)



## MVVM模式

因此就有了 MVVM 的开发模式（例如 React, Vue），提倡把渲染和逻辑分离。简单来说就是不要再让 `JS` 直接操控 `DOM`，`JS` 只需要管理状态即可，然后再通过一种模板语法来描述状态和界面结构的关系即可。



## import

使用`@import`语句可以导入外联样式表，`@import`后跟需要导入的外联样式表的相对路径，用`;`表示语句结束。



## vscode快捷键

https://www.cnblogs.com/hellofangfang/p/10511193.html



## 蓝湖

https://lanhuapp.com/url/OJk9T-IeLnQ



## 土豆图床：

- 图片放入外网，https://images.ac.cn/

- [sm.ms](https://sm.ms/)
- hexo搭博客



## 事件

冒泡事件：子向父元素传递事件

三个阶段：捕获，处理，冒泡

事件委托：防止重复定义事件

bind绑定冒泡事件，catch绑定非冒泡事件



## 轮播图图片大小

轮播图图片 750rpx默认宽度，图片宽520px，高280px

```css
swiper{
    width: 100%;
    height: calc(750rpx * 280 / 520);
}
image{
    width: 100%;
}
```


高度=750rpx * 图片高度 / 图片宽度;



## 图片高的运算

```css
height: calc(750rpx * 280 / 520);
```



## 页面超链接格式

连接navigator，属性url="/pages/demo10/demo10" (块级元素)



## radio单选框

- 需要父元素radio-group一起用
- 绑定事件bindchange=“函数”

```html
<radio-group bindchange="handleChange">
    <radio value="male" color="red" checked="{{true}}">男</radio>
    <radio value="female" color="red">女</radio>    
</radio-group>
<view>选中的是{{gender}}</view>
```

```javascript
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:""
  },
  handleChange(e){
    // console.log(e);
    let gender = e.detail.value;
    this.setData({
      gender
    })
  }
  
})
```



## checkbox复选框

- checkbox需要父元素checkbox-group一起用
- checked或者checked=“{{true}}”属性默认被选中，true可更改为绑定的数据，字符串和花括号之间不加空格

```html
<view>
<checkbox-group bindchange="handleItemChange">
    <checkbox value="{{item.value}}" wx:for="{{list}}" wx:key="id">
        {{item.name}}
    </checkbox>
</checkbox-group>
  <view>
      选中的水果：{{checkedList}}
  </view>
</view>
```

```javascript
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:0,
        name:"苹果",
        value:"apple"
      },
      {
        id:1,
        name:"葡萄",
        value:"grape"
      },
      {
        id:2,
        name:"香蕉",
        value:"bananar"
      }
    ],
    checkedList:[]
  },
  handleItemChange(e){
    const checkedList=e.detail.value;
    this.setData({
      checkedList
    })
  }
})
```



## 轮播图顺序

轮播图swiper->swiper-item->navigatior->image，给swiper-item进行遍历渲染

swiper为图片的高度，image宽度100%加mode=“widthFix”自适应

![image-20200721110155312.png](https://i.loli.net/2020/11/15/R5dOTuNAFKE8wor.png)



## rich-text富文本标签

```html (加入html标签)
<rich-text class="" nodes="{{html}}"></rich-text>
```



## button标签

- open-type属性（需真机调试），预览就行了
  - contact打开客服会话，如果用户在会话中点击消息卡片后返回小程序
  - share触发用户转发到朋友，不能转发到朋友圈中
  - getPhoneNumber获取用户手机号，可以从bindgetphonenumber回调中获取到用户信息，企业的小程序账号才有资格获取
  - getUserInfo获取用户信息，可以从bindgetuserinfo回调中获取到用户信息
  - launchApp打开APP，可以通过app-parameter属性设定向APP传的参数
  - openSetting打开授权设置页面
  - feedback打开“意见反馈”页面，用户可提交反馈内容并上传日志
- size属性，控制大小
  - mini小尺寸
- type控制颜色
  - primary绿色
  - warn红色
- plain控制按钮是否镂空
- loading加载中



## icon标签

- type属性，样式
  - success勾
  - 
- size属性，图标大小
- color属性，图标颜色



## components 自定义组件

自定义组件components 自建文件夹components，子文件夹Tabs，建components文件夹名为Tabs

1. 新建文件夹，微信新增components组件

2. 声明组件，在需要用到的页面的json中放入

   ```json
   "usingComponents": {
       "Tabs":"../../components/Tabs/Tabs"
     }
   ```

   

3. 在页面中直接调用标签，然后直接在Tabs.wxml中编写代码

   ```html
   <Tabs aaa="a123a"></Tabs>
   ```

4. 自定义绑定事件

   ```html
   <view>
       {{aaa}}
   </view>
     
   <view class="tabs">
       <view class="tabs_title">
           <!-- <view class="title_item active">首页</view>
           <view class="title_item">原创</view>
           <view class="title_item">分类</view>
           <view class="title_item">关于</view> -->
       <view 
        wx:for="{{tabs}}"
        wx:key="id" 
        class="title_item {{item.isActive?'active':''}}"
        bindtap="handleItemtap"
        data-index="{{index}}"
        >
           {{item.name}}
       </view>
       </view>
       <view class="tabs_content">内容</view> 
   </view>
   ```

   ```javascript
   methods: {
       handleItemtap(e){
         // console.log(e);
         // 1.绑定点击事件 需要在methods中绑定
         // 2.获取被点击的索引
         // 3.获取原数组
         // 4.对数组循环
         //   1.给每一个循环项选中属性改为false
         //   2.给当前索引的项添加激活选中效果就可以了
         const {index}=e.currentTarget.dataset;
         let {tabs}=this.data;  //或者写成tabs=this.data.tabs,v为循环项,i为索引
         tabs.forEach((v,i) => i===index?v.isActive=true:v.isActive=false);
         this.setData({
           tabs
         })
       }
     }
   ```

   





## view标签

view 相当于div，默认块级元素



## text标签

- text 相当于span，默认行内元素，html中怎么打怎么显示	
- 只能嵌套text
- selectable属性，长按文字可以复制，只有这个标签有这个功能
- decode属性，可以对空格，大于号进行编码



## taber组件

- tarber底部，list至少2个
- color未选中时的颜色
- selectedColor选中时的颜色
- backgroundColor背景颜色
- 仅支持十六进制的输入
- postion-> top顶部显示，但是看不到图标，默认是底部



## window窗口

在微信小程序里面写

- “enablePullDownRefresh”：true实现下拉刷新
- ”backgroundColor“下拉刷新的背景颜色



## wx:for循环

- wx:for="{{数组}}"，wx:for-item="循环项 的名称" wx:for-index="循环项的索引"，只有一层循环时，wx:for-item和wx:for-index属性可省略 ，默认的就为item和index， 需额外加入wx:key属性
- wx:key="唯一的值",用来提高列表性能，**wx:key="*this"**,就表示你的数组是一个普通的数组，*this表示的是循环项，没有属性时用*tihis，即不是对象时
![image-20200721154453477.png](https://i.loli.net/2020/11/15/uKwLGqBX6HyIdzN.png)
- 调用{{index}},{{item.name}},name为key
- item默认为该数组， index默认为索引，子元素{{item.key}}，{{index}}索引
- wx:for="{{对象}}"，wx:for-item="对象的值" wx:for-index="对象的属性"，修改为wx:for-item="value" wx:for-index="key"

```html
<view wx:for="{{list}}" wx:for-item="item" wx:for-index="index"></view>
```

```html
<view>{{msg}}</view>
<view>{{num}}</view>
<view>{{isGirl}}</view>
<view>{{person.age}}</view>
<view>{{person.height}}</view>
<view>{{person.weight}}</view>
<view>{{person.name}}</view>
<view wx:for="{{list}}" 
wx:for-item="item" 
wx:for-index="index">
 索引：{{index}}
 值：{{item.name}}
</view>
```

```javascript
Page({
  data: {
    msg: "hello mina",
    num: 10000,
    isGirl: false,
    person:{
      age:34,
      height:160,
      weight:45,
      name:"富婆"
    },
    list:[
      {
        id:0,
        name:"八戒"
      },
      {
        id:1,
        name:"天蓬元帅"
      },
      {
        id:2,
        name:"悟能"
      }
    ] 
  }
});
```



## wx:if,hidden属性

- wx-if="{{true}}"(key:true) ，开销小，hidden属性两个都是隐藏，hidden用于平凡用户切换的(开销大)
- wx-if=“{{对象.key}}”条件渲染,hidden属性直接加入就隐藏，或者hidden=“{{true}}”
- wx:if直接把标签从页面结构移除掉，当标签不是频繁切换显示有优先使用
- hidden当标签频繁的切换显示的时候使用，通过添加样式的方式来切换显示
- hidden相当于添加了个样式display：none；，不要和display标签一起使用
- wx:if懒渲染，hidden渲染



## wx:if,wx:elif,wx:else

- wx-if="{{}}"  wx-elif="{{}}" wx:else



## overflow属性

overflow：auto;手指滚动



## box-sizing属性

- box-sizing: border-box;自适应，用这个属性就不会再考虑边框和内边距会改变整体所占宽度

- 原：width=content

- width=content+padding+border，height=content+padding+border

- 采用的是**flex布局**的方式，为了自适应，宽度**width**采用的是**百分比%**的形式，**border，padding，margin**采用的是**px尺寸**，所有外层的盒子运用了**box-sizing:border-box;**属性来改变盒子的结构，从而实现需求。



## mysql 

账号密码root root



## nth索引从1开始

```css
div span：nth(1){
order:-1
}      
```

order默认是0，越小排越前，nth索引从1开始



## Date对象

Date对象 月索引从0开始，顺序月，日，年，第一天是星期天，getDay（）是获取星期，getDate（）获取天数



## tap-highlight-color

tap-highlight-color点击高亮透明

```css
tap-highlight-color：transparent；
```

- 点击内容的时候是高亮的改为透明的；

- 这个属性只用于iOS (iPhone和iPad)。当你点击一个链接或者通过Javascript定义的可点击元素的时候，它就会出现一个半透明的灰色背景。要重设这个表现，你可以设置-webkit-tap-highlight-color为任何颜色。



## input清楚历史记录

autocomplete 属性 清除input框输入存留历史值,防止下拉历史值显示



## less预编译css

在vscode设置里面的settings.json里面添加代码

```less
"less.compile": {
        "outExt": ".wxss"
    },
```



## navigator导航栏组件

- url可加绝对路径，也可加相对路径，/根目录，./当前目录，小程序跳转最多只有5级

  ```html
  url="/pages/demo01/demo01"
  url="../detail/detail?={{item.id}}" //点击跳转不同页面
  ```

- 块级元素，导航栏对navigatior导航栏进行渲染

- target跳到当前的小程序还是跳到其他的小程序

- open-type属性

  - navigate默认属性，保留了当前页面，不能跳到taber页面
  - redirect没返回跳转功能，关闭当前页面，也不能跳转到taber页面
  - switchTab跳转到taber页面，关闭其他所有页面，底部的taber可轮流切换
  - reLaunch随便跳
  - navigateBack跳转过去，可在跳回来
  - exit退出其他小程序



## sitemap.json配置

小程序是否被微信索引,即微信搜索功能



## 数据绑定

页面配置中的js文件，page中的部分，vscode安装插件微信小程序助手



## 自定义属性

一般用于多个点击事件中，如导航栏，属性中加入data-num="{{num}}"，用于传参数，点击事件传递给js的数据num



## block标签

一个占位符标签，当页面渲染的时候会自动去掉该标签和属性，效果依然显示



## 事件绑定1

- input事件的双向绑定，关键字bindinput="函数",函数与data同级
- 获取事件源对象e.detail.value
- 把输入框的值赋值给data中，不能直接this.data.name=e.detail.value或this.name=e.detail.value,正确的写法

```javascript
this.setData({
	num:e.detail.value
]})
```



## 事件绑定2

- button点击事件，bindtap=“函数”
- 无法在小程序中直接传参的
- 通过自定义属性的方式传递参数data-operation=“{{1}}”
- 事件源（函数）中获取自定义属性,consolo.log(e)
- const operation=e.currentTarget.dataset.operation
- 获取值用this.data，设置值用this.setData（{}）

```html
<input type="text" bindinput="handle"/>
<button bindtap="handletap" data-operation="{{1}}">+</button>
<button bindtap="handletap" data-operation="{{-1}}">-</button>
```

```javascript
Page({
  data: {
    num:0
  },
  handle(e){
    this.setData({
      num:e.detail.value
    })
  },
  handletap(e){
    // console.log(e);
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num:this.data.num + operation
    })
  }
})
```



## 尺寸单位rpx

- 自适应屏幕大小，小程序的屏幕默认为750rpx
- 1px=2rpx
- calc（750rpx * 100 / 375），750和rpx之间不能有空格

![image-20200711145032991.png](https://i.loli.net/2020/11/15/2mfqj9ebnGrMK8F.png)



## css的外部引入

通过@import引入，@import "相对路径",只能是相对路径



## image标签

- 默认大小为宽320px，高240px

- mode属性
  - scaleToFill默认，自动拉伸
  - aspectFit长边完全显示，用于轮播图（常用）
  - aspectFill短边完全显示
  - widthFix高度按宽度来等比例控制，以前的web写法（常用）
  - 小程序的图片支持懒加载lazy-load判断当图片出现在视口上下三屏高度之内的时候，自己开始加载图片



## swiper标签

- 轮播图外层容器swiper

- 每一个轮播项swiper-item

- 默认宽度100%，高度150px

- swiper的高度=calc（原图的高度*swiper的宽度/原图的宽度）

- （swiper的宽度=100%或者100vw或者750rpx）

![image-20200711154919747.png](https://i.loli.net/2020/11/15/OWXI6QpjmNKzhRo.png)

swiper属性

- autoplay自动轮播
- interval修改轮播时间
- circular衔接轮播
- indicator-dots是否显示面板指示点
- indicator-color未选中时的颜色
- indicator-active-color选中时的颜色



## 箭头函数

箭头函数，只有一个return则直接箭头，多个则用{}括起来

```javascript
let fun = () => {
    console.log('lalalala');
}
```

普通函数

```javascript
function fun() {
    console.log('lalla');
}
```

```javascript
// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;
```



## 父向子传递数据

父组件.wxml

```html
<Tabs aaa="a123a"></Tabs>
```

子组件tabs.js

```javascript
properties: {
    aaa:{
      type:String,
      value:""
    }
```

在把子组件tabs.wxml中的代码拿过去

![image-20200711175239041.png](https://i.loli.net/2020/11/15/J7euACb8zGwyUr9.png)



## vw，vh，100%

height：100vw；让高度等于视口宽度，即1：1(高度等于宽度)

vw==100%;



## 文本行数

![image-20200714101752819.png](https://i.loli.net/2020/11/15/4UymVYsP9juCqJb.png)

![image-20200714144048129.png](https://i.loli.net/2020/11/15/fMj4g2hbJ1a5WdT.png)

![image-20200714144122786.png](https://i.loli.net/2020/11/15/b5R8OPXVC2vwiFq.png)

**限制在一个块元素显示的文本的行数。**

-webkit-line-clamp 是一个 不规范的属性（unsupported WebKit property），它没有出现在 CSS 规范草案中。

为了实现该效果，它需要组合其他外来的WebKit属性。常见结合属性：

- display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
- -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。
- text-overflow，可以用来多行文本的情况下，用省略号“...”隐藏超出范围的文本 。



## 图片和文字对齐

图片上加样式

图片与文字居中vertical-align：middle；

vertical-align：text-top;在上方

vertical-align：text-bottom;在下方



## template模板

- 新建文件夹和wxml，wxss文件，定义：template 属性： name（标识模板）


- 使用：template 属性：is（模板的name），传参：data='{{...item}}'          传对象


- 引入模板的结构：<import src='路径'/>


- 引入模板样式：@import '路径';
- wxml引用时用block来列表渲染，里面放入template标签



## 本地存储

用于收藏

![image-20200725143952924.png](https://i.loli.net/2020/11/15/IF3inR2JWs9MxoY.png)

同步获取

获取一个value

清楚key

清楚全部



## 生命周期

onUnload用于当前页面关闭（wx.navigatorTo）

onHide用于当前页面跳转，页面不关闭(wx.redirectTo)



## 选项卡

js层

![image-20200729213704341.png](https://i.loli.net/2020/11/15/tRDlpx31mJsXfen.png)

wxml

![image-20200729213738795.png](https://i.loli.net/2020/11/15/hC8ijSqauO7yzV5.png)



## 多个信息跳转

对象赋值用null，数组用[]

![image-20200729215026602.png](https://i.loli.net/2020/11/15/ufHFKGn83ySiWNd.png)

接收id

![image-20200729215026602.png](https://i.loli.net/2020/11/15/ufHFKGn83ySiWNd.png)

拿数据

![image-20200729215438461.png](https://i.loli.net/2020/11/15/CbNrJziBvdRtelk.png)

对象中的循环

![image-20200729221107519.png](https://i.loli.net/2020/11/15/XaHF7ofpBN9GVex.png)



## 复选框样式

```html
<checkbox-group>
    <label>
        <checkbox></checkbox>   
    </label>
</checkbox-group>
```

```css
checkbox .wx-checkbox-input {
	width: 34rpx;
	height: 34rpx;
	border-radius: 50%;
}
/*checkbox选中后样式  */
checkbox .wx-checkbox-input.wx-checkbox-input-checked {
  background: #0394F0;
  border-color:#0394F0;
}
/*checkbox选中后图标样式  */
checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
  width: 20rpx;
  height: 20rpx;  
  line-height: 20rpx;
  text-align: center;
  font-size: 22rpx;
  color: #fff;
  background: transparent;
  transform: translate(-50%, -50%) scale(1);
  -webkit-transform: translate(-50%, -50%) scale(1);
}
```

```css
/*radio未选中时样式 */ 
radio .wx-radio-input {
  width: 30rpx;
  height: 30rpx;
}


/* 选中后的 背景样式 */
radio .wx-radio-input.wx-radio-input-checked {
  border-color: #25A96D!important;
  background-color: #fff!important;
  width: 30rpx;
  height: 30rpx;
}

/* 选中后的 对勾样式  */
radio .wx-radio-input.wx-radio-input-checked::before {
  /* 去除对号 */
  content: ''; 
  width: 24rpx;
  height: 24rpx;
  border-radius: 50%;
  background-color: #25A96D;
}
```



## 多个点击事件

html

![image-20200801093324001.png](https://i.loli.net/2020/11/15/kawhT3yH2LpEMOl.png)

![image-20200801093305247.png](https://i.loli.net/2020/11/15/kPYAmSNGwJ4nUr2.png)

js

![image-20200801093349165.png](https://i.loli.net/2020/11/15/POgcDajRrWNL3GF.png)



![image-20200801093402660.png](https://i.loli.net/2020/11/17/7XYEIeF8ASLMcVn.png)



## 本地存储

![image-20200801095612988.png](https://i.loli.net/2020/11/17/cWPwsu6bq4nLT3C.png)

![image-20200801095745302.png](https://i.loli.net/2020/11/17/NuDAPvremUi3pog.png)



## scroll-view

scroll-y 纵向滚动

滚动条距离顶部的距离

scroll-top="{{**scrollTop**}}" 

js中的data数据

![image-20200801101722198.png](https://i.loli.net/2020/11/17/Ar5Nx8buSQvst1q.png)

![image-20200801101740424.png](https://i.loli.net/2020/11/17/CHfv6XP9UG3SO8d.png)

- 定位

![image-20200827102839537.png](https://i.loli.net/2020/11/17/ijKBmlE42cXsF9p.png)

![image-20200827102854092.png](https://i.loli.net/2020/11/17/wyWM82xNBJFetkS.png)

![image-20200827102903944.png](https://i.loli.net/2020/11/17/y1jVlTgzOXUfpQv.png)

![image-20200827102919385.png](https://i.loli.net/2020/11/17/VdnE7BRW1pbI9Am.png)

- 给定位的地方加id

![image-20200827102940422.png](https://i.loli.net/2020/11/17/Ul9fN8FOSbvgRET.png)



## 标题选项卡

效果

![image-20200801112616864.png](https://i.loli.net/2020/11/17/2nt4v9jLBTMidEz.png)

步骤：

- 创建自定义组件Tabs

![image-20200801112654163.png](https://i.loli.net/2020/11/17/b4taTXILfQd5sDS.png)

- 需要的页面引入自定义组件

![image-20200801112820330.png](https://i.loli.net/2020/11/17/KtQs8d645YNxThj.png)

- 在html里面调用自定义组件，并给一个值传递给子组件

![image-20200801112856231.png](https://i.loli.net/2020/11/17/wJAai7OEoctIFx9.png)

- 在页面的js中写好数据

![image-20200801112933794.png](https://i.loli.net/2020/11/17/C5uxQ7LRzU8WOsl.png)

- 子组件Tabs.js中写好对应传来的数据

![image-20200801113013172.png](https://i.loli.net/2020/11/17/3Shp4gLFYD6tQes.png)

- 在子组件Tabs.wxml中渲染数据

![image-20200801113101690.png](https://i.loli.net/2020/11/17/qKrGW5c8YE3vsDn.png)

- 对页面进行添加样式

![image-20200801113131191.png](https://i.loli.net/2020/11/17/yfhswjiaNgI3TE4.png)

- 实现点击时下标active选择

  wxml中

![image-20200801113204959.png](https://i.loli.net/2020/11/17/nKY9yp1oAbNqZfR.png)

​		js中

![image-20200801113230229.png](https://i.loli.net/2020/11/19/PkpdXU9szW8nDOj.png)

- 将传过去触发的事件回给父页面

![image-20200801113307227.png](https://i.loli.net/2020/11/17/Q3jaxo4zAtY81lN.png)

- 给父页面的js实现点击效果

![image-20200801113356120.png](https://i.loli.net/2020/11/19/w2D6VByMYsIG351.png)

- 给Tabs.wxml中内容加入榻槽，用于给父页面传递内容

![image-20200801113448300.png](https://i.loli.net/2020/11/19/qbgmMiuYv9HXCKz.png)

- 父页面接受传递过来的内容

![image-20200801113527286.png](https://i.loli.net/2020/11/19/cXJlmFNVQ2fiGxy.png)



## 一些简写

相当于tabs=this.data.tabs

![image-20200804111206567.png](https://i.loli.net/2020/11/19/gQYxl4snM3FaqXB.png)

相当于tabs:tabs

![image-20200804111247640.png](https://i.loli.net/2020/11/19/ePQ8d3S1Hvl7m4a.png)



## 页面跳转

- 跳转页面传参数

![image-20200804144134350.png](https://i.loli.net/2020/11/19/lSKdp3hHskmJgP7.png)

- 要跳的页面js

获取跳转的参数id

onload里面获取

![image-20200804144249116.png](https://i.loli.net/2020/11/19/m5HKdGCyRlEOnAF.png)

用id发送请求，url地址，和data中要传递的参数

![image-20200804144436922.png](https://i.loli.net/2020/11/19/hWas2NYDXU7F9qd.png)

获取数据

![image-20200804144518493.png](https://i.loli.net/2020/11/19/3b1qEpHKDOTiMYf.png)

![image-20200804144530376.png](https://i.loli.net/2020/11/19/3v975f8WQoJDZEm.png)



## 轮播图点击预览

swiper-item中轮播图点击预览事件，需要bindtap



## 显示弹窗

- 接口接收数据显示正在加载中

```javascript
wx.showLoading({
        title: '加载中',
        mask: true
    })
wx.hideLoading();
```

- 点击加入购物车出弹窗或者加载页面数据
- mask为蒙版，不给页面重复点击

```javascript
wx.showToast({
            title: '加入成功',
            icon: 'success',
            //防止用户 手抖 疯狂的点击按钮
            mask: true
        });
```



## 触底事件

 onReachBottom()

![image-20200804160551097.png](https://i.loli.net/2020/11/19/OYdyegU5ls6n8Af.png)



## 下拉刷新事件

onPullDownRefresh()

![image-20200804160621400.png](https://i.loli.net/2020/11/19/ZpRoQB2eC986OfK.png)



## 停止下拉刷新

wx.stopPullDownRefresh();



## 获取收货地址

button绑定点击事件

获取权限状态

wx.getSetting

wx.chooseAddress获取收货地址

![image-20200804170558506.png](https://i.loli.net/2020/11/19/XuNxqI7LeyRGBQl.png)

![image-20200804171959334.png](https://i.loli.net/2020/11/19/xHnpXvkU7gEAI5C.png)

![image-20200804172501920.png](https://i.loli.net/2020/11/19/mSUrGeLiy7bHxav.png)

用户以前拒绝过授予权限，诱导用户打开 wx.openSetting

![image-20200804173255818.png](https://i.loli.net/2020/11/19/1Cr9iRPgjsd3S5W.png)

es7

![image-20200804175416347.png](https://i.loli.net/2020/11/19/iZpjvReK4alFtTP.png)

![image-20200804175400749.png](https://i.loli.net/2020/11/19/O9GqMsrJc8D6ozC.png)



## 弹窗提示

```javascript
wx.showModal({
  title: '提示',
  content: '这是一个模态弹窗',
  success (res) {
    if (res.confirm) {
      console.log('用户点击确定')
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})
```



## 点击按钮更换颜色

```html
<view class="accumulate_comment_content">
      <view bindtap="handleClickChange" data-index="0" class="comment_all {{index==0?'active':''}}">全部(58)</view>
      <view bindtap="handleClickChange" data-index="1" class="comment_all {{index==1?'active':''}}">有图(58)</view>
      <view bindtap="handleClickChange" data-index="2" class="comment_all {{index==2?'active':''}}">非常满意(58)</view>
      <view bindtap="handleClickChange" data-index="3" class="comment_all {{index==3?'active':''}}">满意(58)</view>
      <view bindtap="handleClickChange" data-index="4" class="comment_all {{index==4?'active':''}}">一般(58)</view>
      <view bindtap="handleClickChange" data-index="5" class="comment_all {{index==5?'active':''}}">不满意(58)</view>
      <view bindtap="handleClickChange" data-index="6" class="comment_all {{index==6?'active':''}}">非常不满意(58)</view>
  </view>
```

```javascript
data: {
    vip:'VIP',
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleClickChange(e){
    var {index}=e.currentTarget.dataset;
    this.setData({
      index
  })
},
```



## 点击单选框按钮和字体更换颜色

```html
<view class="gender_male">
        <view class="gender" data-gender="男性" bindtap="handleChoose">
          <image src="{{gender == '男性' ?'../../images/man2.png' : '../../images/man1.png'}}"></image>
          <radio checked="{{gender=='男性'?true:false}}" class="">男性</radio>
        </view>
        <view class="gender" data-gender="女性" bindtap="handleChoose">
          <image src="{{gender == '女性' ? '../../images/won2.png' : '../../images/won1.png'}}"></image>
          <radio checked="{{gender=='女性'?true:false}}" class="">女性</radio>
        </view>
      </view>
```

```javascript
data: {
    date: time.getFullYear()+'-1-1',
    gender:'男性',
    index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 性别选择
  handleChoose(e){
    const {gender}=e.currentTarget.dataset;
    this.setData({
      gender
    })
  },
```



## 点击文字和图片换颜色

```html
<view class="occupation_type">
      <view class="type" data-index="0" bindtap="handleClickChange">
        <image mode="widthFix" src="{{index==0?'../../images/zhoubian.png':'../../images/zhoubian2.png'}}" />
        <view class="type_name {{index==0?'active':''}}">周边工薪族</view>
      </view>
      <view class="type" data-index="1" bindtap="handleClickChange">
        <image mode="widthFix" src="{{index==1?'../../images/fangzi2.png':'../../images/fangzi3.png'}}" />
        <view class="type_name {{index==1?'active':''}}">街坊邻居</view>
      </view>
      <view class="type" data-index="2" bindtap="handleClickChange">
        <image mode="widthFix" src="{{index==2?'../../images/xuesheng.png':'../../images/xuesheng2.png'}}" />
        <view class="type_name {{index==2?'active':''}}">学生</view>
      </view>
      <view class="type" data-index="3" bindtap="handleClickChange">
        <image mode="widthFix" src="{{index==3?'../../images/jiedailaoren.png':'../../images/jiedailaoren2.png'}}" />
        <view class="type_name {{index==3?'active':''}}">尊贵长辈</view>
      </view>
      <view class="type" data-index="4" bindtap="handleClickChange">
        <image mode="widthFix" src="{{index==4?'../../images/guanyuwomen.png':'../../images/guanyuwomen2.png'}}" />
        <view class="type_name {{index==4?'active':''}}">带娃出行</view>
      </view>
      <view class="type" data-index="5" bindtap="handleClickChange">
        <image mode="widthFix" src="{{index==5?'../../images/qita.png':'../../images/qita2.png'}}" />
        <view class="type_name {{index==5?'active':''}}">其他</view>
      </view>
    </view>
  </view>
```

```javascript
data: {
    date: time.getFullYear()+'-1-1',
    gender:'男性',
    index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 性别选择
  handleChoose(e){
    const {gender}=e.currentTarget.dataset;
    this.setData({
      gender
    })
  },
  // 生日
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 职业选择
  handleClickChange(e){
    const {index}=e.currentTarget.dataset;
    this.setData({
      index
    })
  },
  
```



## 复选框最多选三项

```html
<view class="follow_wrap">
    <view class="follow_title">
      对于潮剪，您更关注:
      <text>（多选，最多能选三项）</text>
    </view>
    <view class="follow_choose">
      <checkbox-group bindchange="handleFollow">
        <label wx:for="{{items}}" wx:key="name">
          <checkbox value="{{item.name}}" checked="{{item.checked}}">{{item.value}}</checkbox>
        </label>
      </checkbox-group>
    </view>
  </view>
```

```css
// 您更关注
  .follow_wrap{
    padding: 50rpx;
    .follow_title{
      font-size: 33rpx;
      color: #343434;
      font-weight: 700;
      text{
        font-size: 24rpx;
        color: #939393;
        font-weight: 400;
      }
    }
    .follow_choose{
      margin-top: 40rpx;
      font-size: 28rpx;
      color:rgba(111,111,111,1);
      checkbox-group{
        display: flex;
        flex-wrap: wrap;
        label{
          width: 33.33%;
          checkbox{
            width: 100%;
            // border: 1rpx solid red;
            margin-top: 20rpx;
          }
        }
      }
    }
  }
```

```javascript
data: {
    date: time.getFullYear()+'-1-1',
    gender:'男性',
    index:0,
    disabled:false,
    items: [
      { name: '1', value: '发型师的形象' },
      { name: '2', value: '店铺的整洁' },
      { name: '3', value: '理发技术' },
      { name: '4', value: '有趣的活动' },
      { name: '5', value: '店铺的整洁' },
      { name: '6', value: '其他' },
    ],

  },
  // 最多能选三项
  handleFollow(e){
    let list=e.detail.value;
    let new_item= [
      { name: '1', value: '发型师的形象' },
      { name: '2', value: '店铺的整洁' },
      { name: '3', value: '理发技术' },
      { name: '4', value: '有趣的活动' },
      { name: '5', value: '店铺的整洁' },
      { name: '6', value: '其他' },
    ];
    if(list.length>3){
      let key1=list[list.length-1];
      let key2=list[list.length-2];
      let key3=list[list.length-3];
      new_item[key1-1]['checked']='true';
      new_item[key2-1]['checked']='true';
      new_item[key3-1]['checked']='true';
      list.splice(0,1);
    }else{
      for(let i=0;i<list.length;i++){
        let key=list[i];
        new_item[key-1]['checked']='true';
      }
    }
    console.log(new_item)
    this.setData({
      items:new_item
    })
  },
```



## 地图

```javascript
onLoad: function(options) {
    wx.getLocation({
      type: 'wgs84',
      altitude: false,
      success: (result) => {
        // 获取经纬度
        console.log(result)
        wx.openLocation({
          latitude: result.latitude,
          longitude: result.longitude,
          scale: 18,
          success: (result) => {
            
          },
          fail: () => {},
          complete: () => {}
        });
          
      },
      fail: () => {},
      complete: () => {}
    });
      
  },
```



## 传code

在登录页面的onload里调用wx-login打印参数，传个code给后台



## 分页功能

```javascript
data: {
    num: 0,
    commentList: {},
    hairList: [],
    allList: [],
    page: 1,
    type: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      id: options.id
    })
    this.getService();
  },
  // 服务评价
  async getService() {
    const { data: res } = await request({ url: '/comment_list_detail', data: { store: this.data.id, page: this.data.page, size: 10, type: this.data.type } });
    console.log(res)
    let list = res.data.newComment
    for (let i = 0; i < list.length; i++) {
      if (list[i].score == 1) list[i].score = '非常不满意'
      if (list[i].score == 2) list[i].score = '不满意'
      if (list[i].score == 3) list[i].score = '一般'
      if (list[i].score == 4) list[i].score = '满意'
      if (list[i].score == 5) list[i].score = '非常满意'
    }
    let list1 = res.data.typeComment.records
    for (let i = 0; i < list1.length; i++) {
      if (list1[i].score == 1) list1[i].score = '非常不满意'
      if (list1[i].score == 2) list1[i].score = '不满意'
      if (list1[i].score == 3) list1[i].score = '一般'
      if (list1[i].score == 4) list1[i].score = '满意'
      if (list1[i].score == 5) list1[i].score = '非常满意'
      if (list1[i].img!=null) list1[i].img = list1[i].img.split(',')
    }
    this.setData({
      commentList: res.data.Census,
      hairList: res.data.newComment,
      allList: [...this.data.allList, ...res.data.typeComment.records],
      pageEnd: this.data.page > 0 && res.data.typeComment.records.length != 0,
    })
  },
  // 分页功能
  onReachBottom() {
    if (this.data.pageEnd) {
      this.data.page += 1
      this.getService()
    }
  },
```



## vant weapp

https://vant-contrib.gitee.io/vant-weapp/#/intro

- 安装

  - 小程序终端npm init -y
  - npm i @vant/weapp -S --production
  - 详情->本地设置->npm模块
  - 工具->构建npm

- 使用

  - app.json中删除"style": "v2"，将 app.json 中的 `"style": "v2"` 去除，小程序的[新版基础组件](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#style)强行加上了许多样式，难以去除，不关闭将造成部分组件样式混乱。
  - app.json中引入组件

  ```json
   "usingComponents": {
      "van-button": "@vant/weapp/button/index"
    },
  ```

  

## 更改图片格式

![image-20200828091056993.png](https://i.loli.net/2020/11/19/126U3VDyfnXobFT.png)



## 获取用户的收货地址

![image-20200828100256358.png](https://i.loli.net/2020/11/19/rItDXJ5GwEgBVWH.png)



## Weui

- `app.json`中配置

```json
{
  "useExtendedLib": {
    "kbone": true,
    "weui": true
  }
}
```

- page.json中配置

```json
{
  "usingComponents": {
    "mp-cells": "/miniprogram_npm/weui-miniprogram/cells/cells",
    "mp-cell": "/miniprogram_npm/weui-miniprogram/cell/cell",
    "mp-badge": "/miniprogram_npm/weui-miniprogram/badge/badge"
  }
}
```



## Vant Weapp

- 安装`npm i @vant/weapp -S --production`
- 工具构建npm
- 详情勾选npm

```json
{
  "usingComponents": {
    "van-icon": "../../miniprogram_npm/@vant/weapp/icon/index"
  }
}
```

