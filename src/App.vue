<template>
    <form action="" @submit.prevent="addTodo">
        <fieldset role="group">
            <input v-model="newTodo" type="text" placeholder="Tâche(s) à faire" />
            <button>Ajouter</button>
        </fieldset>
    </form>
    <div v-if="todos.length == 0">Vous n'avez pas de tâche à faire</div>
</template>

<script setup>
import { ref } from "vue";

const newTodo = ref('')
const todos = ref([])
const addTodo = () => {
    todos.value.push({
        title: newTodo.value,
        completed: false,
        date: Date.now(),
    })
}
</script>