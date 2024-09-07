import { createRouter, createWebHistory } from "vue-router";
import TodoList from "@/Vue/TodoList.vue";
import CompletedTask from "@/Vue/CompletedTask.vue";

const routes = [
  { path: "/", component: TodoList, name: "Todolist" },
  { path: "/completed", component: CompletedTask, name: "CompletedTask" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
