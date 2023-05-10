<template>
  <Item
    v-for="item in renderTodoList"
    :key="item.id"
    :id="item.id"
    :title="item.title"
    :status="item.status" />
</template>

<script lang="ts">
  export default {
    name: 'Item',
  };
</script>

<script lang="ts" setup>
  import Item from '@/components/Todo/Item.vue';
  import { storeTodo } from '@/store/modules/todo';
  import { ref } from 'vue';

  const store = storeTodo();
  const renderTodoList = ref(store.List);
</script>

<style lang="scss"></style>
