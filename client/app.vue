<template>
  <NuxtLoadingIndicator throttle="0" />
  <Navbar />
  <NuxtPage />
  <Footer />
</template>

<script setup>
  const base = 'http://localhost:1337' 
  const api = await $fetch(`${base}/api/config?populate=*`)
  const config = api.data

  useHead({
    title: config.title,
    meta: [
      { name: 'description', content: config.desc },
      { name: 'keywords', content: config.keywords },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: base+config.favicon.url },
    ]
  })
</script>

<style>
/* * {
  margin: 0;
} */

html, body, #__nuxt {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
  /* background: linear-gradient(180deg, #00000025 0%, #000000 100%), url("https://i0.wp.com/www.funnyart.club/uploads/posts/2022-01/1641464486_63-www-funnyart-club-p-abstraktnie-sine-golubie-foni-63.jpg?ssl=1");
  background-blend-mode: darken; */
}

main {
  flex: 1 1 auto;
}

</style>