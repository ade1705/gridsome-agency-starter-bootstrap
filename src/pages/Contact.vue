<template>
  <Layout>

    <div class="min-vh-40 d-flex flex-column justify-content-end">
      <div class="row">
        <div class="col-md-6">
          <h1 class="display-2 serif-font-face">Want to talk about a project?</h1>
        </div>
        <div class="col-md-5 offset-md-1">
          <div class="form-group">
            <label class="font-weight-bold">Get in touch</label>
            <h4 class="font-weight-light"><a href="mailto:hello@badman.com">hello@badman.com</a></h4>
            <h2 class="font-weight-light">+1 234 567d 888</h2>
              <h1 class="font-weight-light">
                  <span class="mr-2"><font-awesome :icon="['fab', 'facebook-square']"/></span>
                  <span class="mr-2"><font-awesome :icon="['fab', 'twitter-square']"/></span>
                  <span class="mr-2"><font-awesome :icon="['fab', 'instagram']"/></span>
              </h1>
          </div>
        </div>
      </div>
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