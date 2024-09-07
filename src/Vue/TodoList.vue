<template>
    <div>
        <!-- Formulaire pour ajouter une nouvelle tâche -->
        <form action="" @submit.prevent="addTodo">
            <fieldset role="group">
                <!-- Champ de saisie pour la nouvelle tâche -->
                <input v-model="newTodo" type="text" placeholder="Tâche(s) à faire" />
                <!-- Bouton pour ajouter la tâche, désactivé si le champ est vide -->
                <button :disabled="newTodo.length == 0">Ajouter</button>
            </fieldset>
        </form>

        <!-- Message affiché s'il n'y a pas de tâches -->
        <div v-if="todos.length == 0">Vous n'avez pas de tâche à faire</div>
        <!-- Liste des tâches si il y en a -->
        <div v-else>
            <ul>
                <!-- Liste des tâches avec les options pour chaque tâche -->
                <li v-for="todo in sortedTodos()" :key="todo.date" :class="{ completed: todo.completed }">
                    <!-- Case à cocher pour marquer la tâche comme complétée -->
                    <input type="checkbox" v-model="todo.completed" @change="saveTodos" />{{ todo.title }}
                    <!-- Bouton pour modifier la tâche -->
                    <button @click="editTodo(todo)">Modifier</button>
                    <!-- Bouton pour supprimer la tâche -->
                    <button @click="deleteTodo(todo)">Supprimer</button>
                </li>
            </ul>
            <!-- Case à cocher pour masquer les tâches complètes -->
            <input type="checkbox" v-model="hideCompleted">
            Masquer les taches complétées
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Référence pour le filtre de tâches complètes
const hideCompleted = ref(false);

// Référence pour le champ de saisie de la nouvelle tâche
const newTodo = ref('');
// Référence pour la liste des tâches
const todos = ref([]);

// Fonction pour sauvegarder les tâches dans le localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos.value));
};

// Fonction appelée au montage du composant pour charger les tâches depuis le localStorage
onMounted(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos.value = JSON.parse(savedTodos);
    }
});

// Fonction pour ajouter une nouvelle tâche
const addTodo = () => {
    if (newTodo.value.trim() === '') return;
    todos.value.push({
        title: newTodo.value,
        completed: false,
        date: Date.now(),
    });
    newTodo.value = '';
    saveTodos();
};

// Fonction pour modifier une tâche existante
const editTodo = (todo) => {
    const newTitle = prompt(todo.title);
    if (newTitle !== null && newTitle.trim() !== '') {
        todo.title = newTitle;
        saveTodos();
    } else if (newTitle === '') {
        alert('Titre non valide');
    }
};

// Fonction pour supprimer une tâche
const deleteTodo = (todo) => {
    todos.value = todos.value.filter(task => task != todo);
    saveTodos();
};

// Fonction pour trier et filtrer les tâches
const sortedTodos = () => {
    // Trier les tâches en mettant les tâches non complètes avant les complètes
    const sortedTodos = todos.value.sort((a, b) => a.completed > b.completed ? 1 : -1);

    // Filtrer les tâches en fonction des options de filtre
    if (hideCompleted.value == true) {
        return sortedTodos.filter(task => task.completed == false);
    }
    return sortedTodos;
};
</script>
