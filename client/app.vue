<template>
  <Navbar />
  <NuxtPage />
  <Footer />
</template>

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