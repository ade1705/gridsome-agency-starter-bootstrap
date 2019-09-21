<template>
  <Layout>

    <div class="">
      <h1 class="display-2 serif-font-face">Blog</h1>
        <div>
            <section class="posts">
                <Post v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
            </section>
        </div>
    </div>
  </Layout>
</template>

<page-query>
    query {
        allPost {
            totalCount
            edges {
                node {
                    id
                    title
                    timeToRead
                    description
                    date (format: "D MMMM YYYY")
                    path
                }
            }
        }
    }
</page-query>
<script>
    import Post from "../components/posts/Post";
    export default {
        components: {Post},
        metaInfo: {
            title: 'Blog'
        }
    }
</script>
