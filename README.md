# kalix-vue-main

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## update lint
update .eslintrc.js
```xml
  'space-before-function-paren': 0
```
## install pug

> yarn add pug pug-loader -D

modify build/webpack.base.conf.js file
```xml
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
```
## add toml support
```xml
yarn add toml-loader -D
```
modify build/webpack.base.conf.js file
```xml
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.toml$/,
        loader: 'toml-loader'
      }
```

## add stylus
```xml
yarn add stylus-loader stylus -D
```

## add element-ui
yarn add element-ui
```xml
yarn add element-ui
```
refer to http://element-cn.eleme.io/#/zh-CN/component/quickstart
yarn add  babel-plugin-component -D
然后，将 .babelrc 修改为：

```xml
{
  "presets": [
    ["env", {
      "modules": false
    }],
    "stage-2"
  ],
  "plugins": ["transform-runtime",[["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ]]]]
}
```

## add  rimraf  
> yarn add rimraf -D

change package.json
```xml
  "build": "rimraf ./dist && node build/build.js"  
```

## add  axios
yarn add axios
  
