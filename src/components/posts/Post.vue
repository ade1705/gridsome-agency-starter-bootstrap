<template>
    <div class="shadow p-5 my-3">
        <p class="text-muted" v-html="post.date"/>
        <g-link :to="post.path" class="read">
            <h1 class="title serif-font-face display-4" v-html="post.title"/>
        </g-link>
        <p class="description" v-html="post.description"/>
        <b>{{post.timeToRead}} min read</b> &nbsp;
        <g-link :to="post.path" class="read">Read More...</g-link>
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