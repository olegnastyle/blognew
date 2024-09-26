<template>
    <nav>
        <ul>
            <li><NuxtLink to="/">Главная</NuxtLink></li>
            <li><NuxtLink to="/blog">Блог</NuxtLink></li>
            <li><NuxtLink to="/contact">Контакты</NuxtLink></li>
        </ul>
        
    </nav>
</template>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        gap: 10px;
        padding: 0;
    }
</style>