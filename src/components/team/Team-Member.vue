<template>
    <div class="my-4 my-md-1">
        <span class="text-muted">{{ teamMember.title }}</span>
        <h1 class="serif-font-face mb-0">{{ teamMember.name }}</h1>
        <p class="font-italic mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. </p>
        <h2 class="pb-2">
            <span class="mr-2"><font-awesome :icon="['fab', 'facebook-square']"/></span>
            <span class="mr-2"><font-awesome :icon="['fab', 'twitter-square']"/></span>
            <span class="mr-2"><font-awesome :icon="['fab', 'instagram']"/></span>
        </h2>
        <img :src="teamMember.imageSrc" class="img-fluid" />
    </div>
</template>

<script>
    export default {
        name: "Team-Member",
        props: {
            teamMember: Object,
        }
    }
</script>

<style scoped>

</style>