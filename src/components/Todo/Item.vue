<template>
  <div class="input-group">
    <div class="input-group-text">
      <input
        class="form-check-input mt-0"
        type="checkbox"
        :checked="props.status === 'clear'"
        @change="handleChangeStatus" />
    </div>
    <input
      type="text"
      class="form-control"
      :value="props.title"
      disabled />
    <button
      class="btn btn-outline-secondary"
      type="button"
      @click="handleRemoveItem">
      <i class="bi bi-x-lg"></i>
    </button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Item',
  };
</script>
<script lang="ts" setup>
  import { defineProps } from 'vue';
  import { storeTodo } from '@/store/modules/todo';
  import { Item } from '@/store/modules/todo.interface';

  interface Props {
    id: Item['id'];
    title: Item['title'];
    status: Item['status'];
  }

  const store = storeTodo();
  const props = defineProps<Props>();

  const handleRemoveItem = () => {
    store.removeTodoItem(props.id);
  };

  const handleChangeStatus = () => {
    const changeStatus =
      props.status === 'active' ? 'clear' : 'active';
    store.changedStatus({
      id: props.id,
      status: changeStatus,
    });
  };
</script>
<style lang="scss">
  .input-group {
    padding: 0 !important;

    input {
      font-size: 14px;

      &::placeholder {
        font-size: 14px;
      }
    }

    button {
      font-size: 14px;
    }
  }
</style>
