<template>
    <div class="card shadow border-0 my-4">
        <img class="card-img-top" :src="card.display_url" alt="Card image cap">
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p>{{ card.edge_media_to_caption.edges[0].node.text }}</p>
                <footer class="blockquote-footer"><cite title="Source Title">Source Title</cite></footer>
            </blockquote>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            card: Object,
        },
    }
</script>

<style scoped>

</style>