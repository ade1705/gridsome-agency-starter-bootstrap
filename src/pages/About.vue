<template>
  <Layout>
    
    <div class="row">
        <div class="col-md-4 d-flex flex-column justify-content-end">
          <h1 class="display-4 serif-font-face">About Super Duper Team</h1>
          <p class="font-big-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
          <p class="font-big-1">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
            <p class="font-big-1"><g-link to="/portfolio" class="text-dark font-weight-bold"><u>View Portfolio</u></g-link></p>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-4" v-for="teamMember in teamMembers"><TeamMember :team-member="teamMember" /></div>
          </div>
        </div>
    </div>

  </Layout>
</template>

<script>
import TeamMember from "../components/team/Team-Member";
export default {
    components: {TeamMember},
    metaInfo: {
    title: 'About'
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
                    imageSrc: "https://source.unsplash.com/random/300x400/?potrait,smile",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. "
                },
                {
                    index: 2,
                    name: "John Doe",
                    title: "Software Developer",
                    imageSrc: "https://source.unsplash.com/random/300x400/?potrait,laugh",
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
