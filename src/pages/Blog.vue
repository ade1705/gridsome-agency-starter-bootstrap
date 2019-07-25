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
        data() {
            return {
                teamMembers: [
                    {
                        index: 0,
                        name: "John Doe",
                        title: "Software Developer",
                        imageSrc: "https://source.unsplash.com/random/300x400/?potrait,happy",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. "
                    },
                    {
                        index: 1,
                        name: "John Doe",
                        title: "Software Developer",
                        imageSrc: "https://source.unsplash.com/random/300x400/?potrait,happy",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. "
                    },
                    {
                        index: 2,
                        name: "John Doe",
                        title: "Software Developer",
                        imageSrc: "https://source.unsplash.com/random/300x400/?potrait,happy",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. "
                    },
                ]
            }
        }
    }
</script>
