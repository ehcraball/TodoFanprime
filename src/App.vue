<template>
    <form action="" @submit.prevent="addTodo">
        <fieldset role="group">
            <input v-model="newTodo" type="text" placeholder="Tâche(s) à faire" />
            <button :disabled="newTodo.length == 0">Ajouter</button>
        </fieldset>
    </form>
    <div v-if="todos.length == 0">Vous n'avez pas de tâche à faire</div>
    <div v-else>
        <ul>
            <li v-for="todo in sortedTodos()" :key="todo.date" :class="{ completed: todo.completed }">
                <input type="checkbox" v-model="todo.completed" @change="saveTodos" />{{ todo.title }}
                <button @click="editTodo(todo)">Modifier</button>
                <button @click="deleteTodo(todo)">Supprimer</button>
            </li>
        </ul>
        <input type="checkbox" v-model="hideCompleted">
        Masquer les taches complétées
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const hideCompleted = ref(false)


const newTodo = ref('')
const todos = ref([{
    title: 'Task 1',
    completed: false,
    date: 1,
},
{
    title: 'Task 2',
    completed: false,
    date: 2,
},
{
    title: 'Task 3',
    completed: false,
    date: 3,
}])


const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos.value));
}


onMounted(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos.value = JSON.parse(savedTodos);
    }
});


const addTodo = () => {
    if (newTodo.value.trim() === '') return;
    todos.value.push({
        title: newTodo.value,
        completed: false,
        date: Date.now(),
    })
    newTodo.value = ''
    saveTodos();
}

const editTodo = (todo) => {
    const newTitle = prompt(todo.title);
    if (newTitle !== null && newTitle.trim() !== '') {
        todo.title = newTitle;
        saveTodos();
    } else if (newTitle === '') {
        alert("Titre non valide")
    }
}

const deleteTodo = (todo) => {
    todos.value = todos.value.filter(task => task != todo)
    saveTodos();
}

const sortedTodos = () => {
    const sortedTodos = todos.value.toSorted((a, b) => a.completed > b.completed ? 1 : -1)
    if (hideCompleted.value == true) {
        return sortedTodos.filter(task => task.completed == false)
    }
    return sortedTodos
}


</script>

<style>
.completed {
    opacity: 0.5;
    text-decoration: line-through;
}
</style>