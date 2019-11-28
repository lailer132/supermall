# RECORD
## INIT
### 1. 设计目录结构
+ componets
    + common-公共的组件
    + content-业务相关的组件
+ views
    + category
    + home
+ network
+ router-路由
+ store-Vuex
+ common-公共类
+ assets-资源文件

### 2. 初始化CSS样式
> assets -> css -> @normalize.css :规范化样式

### 3. 设置路径别名
```javascript
// 在vue.config.js中配置别名
configureWebpack: {
    resolve: {
        alias:{
            'assets':'@/assets',
            'common':'@/common',
            'components':'@/components',
            'network':'@/network',
            'views':'@/views'
        }
    }
}
```
### 4.统一代码风格
安装EditorConfig，并在根目录创建文件并命名为：.editorconfig
```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

## 组件
### TabBar
use the TabBar
```javascript
import TabBar from 'tabbar/TabBar.vue';
import TabBarItem from 'tabbar/TabBarItem.vue';
```
```html
<tab-bar>
  <tab-bar-item path="/路由" activeColor="选中颜色">
    <img slot="item-icon" src="图标" alt="">
    <img slot="item-icon-active" src="选中图标" alt="">
    <div slot="item-text">类目</div>
  </tab-bar-item>
</tab-bar>
```
