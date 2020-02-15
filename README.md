# supermall
## Init
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
+ mock-测试

### 2. 初始化CSS样式
> assets -> css -> @normalize.css :规范化样式

### 3. 设置路径别名
```javascript
// 在vue.config.js中配置别名
configureWebpack: {
  resolve: {
    alias:{
      'assets': '@/assets',
      'common': '@/common',
      'components': '@/components',
      'network': '@/network',
      'views': '@/views',
      'mock': '@/mock'
    }
  }
}
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
