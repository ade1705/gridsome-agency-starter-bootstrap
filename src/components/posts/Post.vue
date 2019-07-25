<template>
    <div class="border border-width-5 border-black p-5 my-3">
        <p v-html="post.date"/>
        <h1 class="title serif-font-face display-4" v-html="post.title"/>
        <p class="description" v-html="post.description"/>
        <b>{{post.timeToRead}} min read</b> &nbsp;
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: {
            post: Object,
        },
    }
</script>