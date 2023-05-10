import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { Item } from './todo.interface';

export const storeTodo = defineStore('todo', {
  state: () => ({
    List: useStorage('todoList', [] as Item[]),
  }),
  getters: {},
  actions: {
    addTodoItem(item: Item) {
      this.List.push(item);
    },
    removeTodoItem(id: number) {
      let index = null;

      for (let i = 0; i < this.List.length; i++) {
        const item = this.List[i];

        if (item.id === id) {
          console.log(item);
          index = i;
          break;
        }
      }

      if (index !== null) {
        this.List.splice(index, 1);
      }
    },
    changedStatus({
      id,
      status,
    }: {
      id: Item['id'];
      status: Item['status'];
    }) {
      this.List[id].status = status;
    },
  },
});
