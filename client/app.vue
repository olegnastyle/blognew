<template>
  <NuxtLoadingIndicator throttle="0" />
  <Navbar />
  <NuxtPage />
  <Up />
  <Footer />
</template>

<script setup>
  const base = 'http://panel.615f68b9663f.vps.myjino.ru' 
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
    ],
    bodyAttrs: {
      class: 'container mx-auto bg-white dark:bg-gray-900'
    },
    head: {
      script: [
        { src: 'https://yastatic.net/share2/share.js', async: true, defer: true }
      ]
    }
  })
</script>