<template>
    <div>
        <span class="py-1 px-2 font-italic font-weight-bold bg-light">{{ teamMember.title }}</span>
        <h1 class="serif-font-face mb-0">{{ teamMember.name }}</h1>
        <p class="font-italic mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. </p>
        <h2 class="pb-2">
            <span class="mr-2"><font-awesome :icon="['fab', 'facebook-square']"/></span>
            <span class="mr-2"><font-awesome :icon="['fab', 'twitter-square']"/></span>
            <span class="mr-2"><font-awesome :icon="['fab', 'instagram']"/></span>
        </h2>
        <img :src="getImage()" class="img-fluid" />
    </div>
</template>

<script>
    export default {
        name: "Team-Member",
        props: {
            teamMember: Object,
        },
        data: function() {
            return {
                imageArray: [
                    "https://source.unsplash.com/random/300x400/?potrait,happy",
                    "https://source.unsplash.com/random/300x400/?potrait,smile",
                    "https://source.unsplash.com/random/300x400/?potrait,laugh",
                ]
            }
        },
        methods: {
            getImage: function () {
                return this.imageArray[this.teamMember.index];
            }
        }
    }
</script>

<style scoped>

</style>