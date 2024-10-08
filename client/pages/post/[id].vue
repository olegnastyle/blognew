<template>
    <!-- хлебные крошки -->
    <nav>
        <ul>
            <li><NuxtLink to="/blog">Блог</NuxtLink></li>
            <li><NuxtLink :to="'/category/' + post.categories[0].documentId">{{ post.categories[0].title }}</NuxtLink></li>
            <li><strong>{{ post.title }}</strong></li>
        </ul>
    </nav>
    <!-- тело статьи -->
    <main>
        <h1>{{ post.title }}</h1>
        <img :src=base_url+post.img.url :alt=post.img.alternativeText>
        <div v-html="mark"></div>
    </main>
</template>

<style scoped>
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