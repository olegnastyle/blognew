<template>
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
* {
  margin: 0;
}

html, body, #__nuxt {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 1 auto;
}

</style>