<template>
    <div class="ya-share2" data-curtain data-services="messenger,vkontakte,odnoklassniki,telegram,viber,whatsapp"></div>
</template>

<script setup>

import('https://yastatic.net/share2/share.js')

useHead({
    head: {
        script: [
            {
                src: 'https://yastatic.net/share2/share.js',
                async: true,
                defer: true
            }
        ]
    }
})
</script>