<template>
    <!-- хлебные крошки -->
    <nav>
        <ul>
            <li><NuxtLink to="/blog">Блог</NuxtLink></li>
            <li><NuxtLink :style="'background:'+post.categories[0].bg" :to="'/category/' + post.categories[0].documentId">{{ post.categories[0].title }}</NuxtLink></li>
            <li><strong>{{ post.title }}</strong></li>
        </ul>
    </nav>
    <!-- тело статьи -->
    <main>
        <h1>{{ post.title }}</h1>
        <p class="date">Дата публикации: <span>{{ post.publishedAt }}</span></p>
        <img :src=base_url+post.img.url :alt=post.img.alternativeText>
        <div v-html="mark"></div>
    </main>
</template>

<style scoped>
    nav {
        margin: 25px 0;
    }

    nav ul li:nth-child(2) a {
        padding: 10px;
        text-decoration: none;
        color: black;

    }
    .date {
        display: flex;
        align-items: start;
        gap: 20px;  
    }

    .date span {
        display: inline-block;
        text-wrap: nowrap;
        width: 112px;
        overflow: hidden;
    }
    main {
        padding: 40px;
        font-size: 24px;
    }

    main img {
        width: 100%;
        height: 320px;
        object-fit: cover;
    }
    
    li::before {
        content: ">>";
        margin-right: 10px;
    }
    li:first-child::before {
        display: none;
    }

    img {
        width: 765px;
    }
    nav ul{
        list-style: none;
        display: flex;
        gap: 10px;
    }
</style>

<script setup>
import MarkdownIt from "markdown-it";
const markdown = new MarkdownIt();

const { id } = useRoute().params

const api = await $fetch(`http://localhost:1337/api/posts/${id}?populate=*`);
const post = api.data;
const mark = markdown.render(post.body);

const base_url = 'http://localhost:1337'

const apiConfig = await $fetch(`${base_url}/api/config?populate=*`)
const config = apiConfig.data
useHead({
    title: `${post.title} - ${config.title}`
})
</script>