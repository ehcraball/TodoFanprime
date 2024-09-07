import { createRouter, createWebHistory } from "vue-router";
// Importation des composants pour les différentes vues
import TodoList from "@/Vue/TodoList.vue";
import CompletedTask from "@/Vue/CompletedTask.vue";

// Définition des routes de l'application
const routes = [
  // Route pour la liste des tâches
  { path: "/", component: TodoList, name: "Todolist" },
  // Route pour les tâches complètes
  { path: "/completed", component: CompletedTask, name: "CompletedTask" },
];

// Création du routeur avec historique de type "web"
const router = createRouter({
  history: createWebHistory(),
  routes, // Liste des routes définies précédemment
});

export default router; // Exportation du routeur pour l'utiliser dans l'application
