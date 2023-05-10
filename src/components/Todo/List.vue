<template>
  <div>
    <Item
      v-for="item in renderTodoList"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :status="item.status" />
  </div>
</template>

<script lang="ts">
  import Item from '@/components/Todo/Item.vue';
  import { storeTodo } from '@/store/modules/todo';
  import { ref, watchEffect } from 'vue';
  import { useRoute } from 'vue-router';
  import { Item as TodoItem } from '@/store/modules/todo.interface';

  export default {
    name: 'TodoList',
    components: {
      Item,
    },
    setup() {
      const route = useRoute();
      const store = storeTodo();
      const renderTodoList = ref<TodoItem[]>([]);

      watchEffect(() => {
        const status = route.params.status;
        if (!status) {
          renderTodoList.value = store.List;
        } else if (
          status === 'active' ||
          status === 'completed'
        ) {
          renderTodoList.value = store.List.filter(
            (item: any) => item.status === status,
          );
        }
      });

      return {
        renderTodoList,
      };
    },
  };
</script>

<style lang="scss"></style>
