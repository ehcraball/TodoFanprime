<template>
    <div>
        <!-- Liste des tâches complètes -->
        <ul>
            <!-- Boucle sur les tâches complètes pour les afficher -->
            <li v-for="todo in getCompletedTodos()" :key="todo.date" :class="{ completed: todo.completed }">
                {{ todo.title }}
            </li>
        </ul>
        <!-- Message affiché s'il n'y a pas de tâches complètes -->
        <div v-if="getCompletedTodos().length === 0">Vous n'avez pas de tâche complétée</div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Référence pour la liste des tâches
const todos = ref([]);

// Fonction pour obtenir les tâches complètes
const getCompletedTodos = () => {
    return todos.value.filter(todo => todo.completed);
};

// Fonction appelée au montage du composant pour charger les tâches depuis le localStorage
onMounted(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos.value = JSON.parse(savedTodos);
    }
});
</script>
