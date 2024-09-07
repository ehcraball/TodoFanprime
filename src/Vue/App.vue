<template>
    <div id="app">
        <nav>
            <ul class="link">
                <li><router-link to="/" style="text-decoration: none; color: #FFF;">Tâches</router-link></li>
                <li><router-link to="/completed" style="text-decoration: none; color: #FFF;">Tâches
                        Complètes</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
@import '@/assets/styles.scss';
</style>