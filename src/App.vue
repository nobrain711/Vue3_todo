<template>
  <div class="container">
    <div class="row"><Header :stickyHeaders="true" /></div>
    <div class="row"><Input /></div>
    <div class="row">
      <router-view />
    </div>
    <div class="row"><Footer /></div>
  </div>
</template>

<script setup lang="ts">
  import Header from '@/views/Header.vue';
  import Input from '@/components/Todo/Input.vue';
  import Footer from './views/Footer.vue';
</script>
<style lang="scss">
  #app {
    padding: 50px 0;

    .row + .row {
      margin-top: 15px;
    }
  }
</style>
