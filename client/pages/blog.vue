<template>
  <h2>Блог</h2>

  <main>
    <div class="posts">
      <article v-for="(post, index) in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <img :src="base_url + post.img.url" :alt=post.img.alternativeText>
        <p>{{ post.desc }}</p>
        <NuxtLink :to="'/post/' + index">Подробнее</NuxtLink>
      </article>
    </div>
  </main>

</template>

<script setup>
const api = await $fetch('http://localhost:1337/api/posts?populate=*')
const posts = api.data

const base_url = "http://localhost:1337"
</script>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

@media screen and (max-width: 1024px) {
  .posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
}

article {
  background-color: #f5f5f5;
  padding: 10px;

  display: flex;
        flex-direction: column;
        justify-content: space-between;
}

article img {
  width: 100%;
}

article p {
  height: 100px;
}

article a {
  display: block;
}
</style>


























<!-- 
<template>
    <header>
      <h2>Статьи</h2>
    </header>
    <main>
      <article class="post" v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <ul>
          <li v-for="tag  in post.tags" :key="tag.id">{{ tag }}</li>
        </ul>
        <a href="#">Читать подробнее</a>
      </article>
    </main>
  </template>
  
  <script setup lang="ts">
    const dataTwice = await $fetch('https://dummyjson.com/posts')
    const posts = dataTwice.posts;
  
  </script>
  
  <style scoped>
  main {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  li:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .post {
    background-color: brown;
    color: aliceblue;
    padding: 10px;
    width: 280px;
  }
  .post  a{
    font-size: 18px;
    color: wheat;
  }
  </style> -->