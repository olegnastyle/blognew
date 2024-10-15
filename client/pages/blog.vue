<template>
  <h2>Блог</h2>

  <main>
    <article v-for="(post, index) in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <div class="link">
        <div class="img">
          <img :src="base_url + post.img.url" :alt=post.img.alternativeText>
        </div>
        <NuxtLink :style="'background:'+post.categories[0].bg" :to="'/post/' + post.documentId">↗</NuxtLink>
      </div>
      <p>{{ post.desc }}</p>
      <ul class="tag">
        <li v-for="(category, index) in post.categories" :key="category.id">
          <NuxtLink :style="'background:'+post.categories[index].bg" :to="'/category/' + post.categories[0].documentId">{{ category.title }}</NuxtLink>
        </li>
      </ul>
    </article>
  </main>

</template>

<script setup>
const api = await $fetch('http://localhost:1337/api/posts?populate=*')
const posts = api.data

const base_url = "http://localhost:1337"
</script>

<style scoped>

main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-template-rows: repeat(4, 1fr);
  gap: 40px;
  padding: 40px;


}

@media (max-width: 1024px) {
  main {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  main {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}

@media (max-width: 640px) {
  main {
    grid-template-columns: 1fr;
  }
}

article {
  cursor: default;
  padding: 10px;
  border-radius: 10px;
  height: max-content;
  transition: all .1s linear;
  overflow: hidden;
}



article h3 {
  height: 70px;
}

article p {
  height: 56px;
}

article p,
article h3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-wrap: wrap;
}

article:hover {
  background-color: #f1f1f1;
}



article:hover .link::after {
  background-color: #f1f1f1;
  transition-duration: 0;
}

article:hover a {
  filter: brightness(1.2);
}

.link {
  position: relative;
}

.img {
  overflow: hidden;
  border-radius: 10px;
  height: 150px;
}

.link img {
  border-radius: 10px;
  width: 100%;
  height: 150px;
  object-fit: cover;
  transition: transform .1s linear;
}

article:hover img {
  transform: scale(1.2)
  
}

.link a {
  border-radius: 50%;
  color: black;
  background-color: brown;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  text-decoration: none;
  position: absolute;
  bottom: 0;
  right: 0; 
  z-index: 10;
}

.link::after {
   content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  height: 60px;
  width: 60px;
  background-color: white;
  display: block;
  border-radius: 30px 0 0 0;
}


.tag {
  list-style: none;
  padding: 0;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tag a {
  display: inline-block;
  width: max-content;
  padding: 5px 10px;
  text-decoration: none;
  color: black;
  border-radius: 3px
}

.tag a:hover {
  filter: brightness(1.2);
  text-decoration: underline;
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