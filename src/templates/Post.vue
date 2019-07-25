<template>
    <Layout>
        <br>
        <g-link to="/blog" class="link">  &larr; Go Back</g-link>
        <div class="post-title">
            <h1 class="serif-font-face display-3">{{$page.post.title}}</h1>
            <p class="post-date"> {{ $page.post.date}} | {{$page.post.timeToRead}} min read
            </p>
        </div>
        <div class="post-content">
            <p v-html="$page.post.content" />
        </div>
    </Layout>
</template>
<page-query>
    query Post ($path: String!) {
        post: post (path: $path) {
            id
            title
            content
            date (format: "D MMMM YYYY")
            timeToRead
        }
    }
</page-query>
<script>
    export default {
        name: "Post"
    }
</script>

<style scoped>

</style>