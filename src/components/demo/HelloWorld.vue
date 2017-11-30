<!--
描述：demo组件
开发人：sunlf
开发日期：2017年11月30日
功能说明：用于演示pug，toml以及stylus
-->
<template lang="pug">
  div.hello
    h1
      | {{ msg }}
    h2
      | Essential Links
    el-button(type="primary") helo
</template>

<script>
  import {HelloMsg} from './hello.toml'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: HelloMsg
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "hello.styl"
</style>
