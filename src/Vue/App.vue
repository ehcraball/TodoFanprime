<template>
    <div id="app">
        <nav>
            <ul class="link">
                <!-- Lien vers la vue des tâches -->
                <li>
                    <router-link to="/" style="text-decoration: none; color: #FFF;">
                        Tâches
                    </router-link>
                </li>
                <!-- Lien vers la vue des tâches complètes -->
                <li>
                    <router-link to="/completed" style="text-decoration: none; color: #FFF;">
                        Tâches Complètes
                    </router-link>
                </li>
            </ul>
        </nav>
        <!-- Vue qui changera en fonction de la route -->
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
/*Import des styles SCSS*/
@import '@/assets/styles.scss';
</style>
