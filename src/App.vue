<template>
  <div class="container">
    <div class="row"><Header /></div>
    <div class="row"><Input /></div>
    <div class="row">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Header from '@/components/common/Header.vue';
  import Input from './components/Todo/Input.vue';
</script>
<style lang="scss">
  #app {
    padding: 50px 0;

    .row + .row {
      margin-top: 15px;
    }
  }
</style>
