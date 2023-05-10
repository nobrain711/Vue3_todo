import { defineStore } from 'pinia';
import { Item } from './todo.interface';

export const storeTodo = defineStore('todo', {
  state: () => ({
    List: [
      {
        id: 0,
        title: '청소하기',
        status: 'active',
      },
      {
        id: 1,
        title: '공과금 내기',
        status: 'active',
      },
      {
        id: 2,
        title: '운동 30분하기',
        status: 'clear',
      },
    ] as Item[],
  }),
  getters: {},
  actions: {
    addTodoItem(item: Item) {
      this.List.push(item);
    },
    removeTodoItem(id: number) {
      this.List.splice(id, 1);
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
