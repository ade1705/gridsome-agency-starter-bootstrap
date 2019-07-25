<template>
  <Layout>

    <div class="">
      <h1 class="display-2 serif-font-face">Blog</h1>
    </div>
  </Layout>
</template>

<script>
    import TeamMember from "../components/team/Team-Member";
    import Carousel from "../components/home/Carousel";
    export default {
        components: {Carousel, TeamMember},
        metaInfo: {
            title: 'Hello, world!'
        },
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

<style>
  .home-links a {
    margin-right: 1rem;
  }
</style>