<template>
  <input
    class="form-control"
    type="text"
    placeholder="할일을 입력하여 주세요"
    :value="inputValue"
    @keyup.enter="handleAddItem" />
</template>
<script lang="ts">
  export default {
    name: 'Input',
  };
</script>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { storeTodo } from '@/store/modules/todo';

  const store = storeTodo();
  const inputValue = ref('');

  const handleAddItem = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;

    if (!value) return;

    inputValue.value = value;
    store.addTodoItem({
      id: 1,
      title: value,
      status: 'active',
    });
    inputValue.value = '';
  };
</script>

<style lang="scss">
  .Input {
    font-size: 14px;
    &::placeholder {
      font-size: 14px;
    }
  }
</style>
