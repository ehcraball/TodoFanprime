<template>
    <div>
        <ul>
            <li v-for="todo in getCompletedTodos()" :key="todo.date" :class="{ completed: todo.completed }">
                {{ todo.title }}
            </li>
        </ul>
        <div v-if="getCompletedTodos().length === 0">Vous n'avez pas de tâche complétée</div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const todos = ref([]);

const getCompletedTodos = () => {
    return todos.value.filter(todo => todo.completed);
};

onMounted(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos.value = JSON.parse(savedTodos);
    }
});
</script>
