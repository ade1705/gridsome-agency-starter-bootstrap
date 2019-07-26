<template>
  <Layout>

    <div class="row">
      <div class="col-md-4">
        <h1 class="display-4 serif-font-face">Super Duper Creative Agency</h1>
        <p class="font-big-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
        <p class="font-big-1">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
        <p class="font-big-1"><a href="#" class="text-dark font-weight-bold"><u>hello@badman.com</u></a></p>
      </div>
      <div class="col-md-8">
        <Carousel />
      </div>
    </div>
    <div class="p-5 bg-light my-3">
      <h1 class="serif-font-face">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</h1>
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