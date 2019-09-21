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
        <Carousel :slides="slides" />
      </div>
    </div>
    <div class="p-5 bg-light my-3">
      <h1 class="serif-font-face">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</h1>
    </div>

  </Layout>
</template>

<script>
    import Carousel from "../components/home/Carousel";
    export default {
        components: {Carousel},
        metaInfo: {
            title: 'Home'
        },
        data() {
            return {
                slides: [
                    {
                        type: 'Development',
                        title: 'New Dev Work',
                        src: "https://source.unsplash.com/random/800x900/?HTML",
                        description: "Sometime we can feel a bit dull in the morning and we need to produce our own sunshine energy."
                    },
                    {
                        type: 'Design',
                        title: 'New UI Design',
                        src: "https://source.unsplash.com/random/800x900/?interface",
                        description: "So here are 17 wonderful, short positive quotes that my amazing colleague Hayley has collected for you."
                    },
                    {
                        type: 'Development',
                        title: 'Update on New Feature',
                        src: "https://source.unsplash.com/random/800x900/?code",
                        description: "Either way, I think we can all do with a bit more spark to help us perform miracles and live in joy."
                    },
                    {
                        type: 'Development',
                        title: 'Bug Fix',
                        src: "https://source.unsplash.com/random/800x900/?javascript",
                        description: "We also have a powerful and proven Law of Attraction gift which you can access by clicking the link below"
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