<template>
  <div id="app">
	<ButtonTest></ButtonTest>
	<router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ButtonTest from './components/Button.vue'


export default {
  name: 'app',
  components: {
    ButtonTest
  }
}
</script>

<style>
</style>
