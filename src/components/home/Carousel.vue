<template>
    <div class="row">
        <div class="col-md-10">
            <b-carousel
                    id="carousel-fade"
                    v-model="slide"
                    :interval="4000"
                    indicators
                    controls
                    fade
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    style="text-shadow: 1px 1px 2px #333;">
                <b-carousel-slide v-for="slide in slides" v-bind:img-src="slide.src"></b-carousel-slide>
            </b-carousel>
        </div>
        <div class="col-md-2 text-right d-flex flex-column justify-content-end align-content-end">
            <p><span class="bg-dark text-white small px-2 py-1 mb-3">{{ getCurrentSlide().type }}</span></p>
            <h1 class="serif-font-face">{{ getCurrentSlide().title }}</h1>
            <div>
                <div class="w-25 border-bottom"></div>
            </div>
            <p class="font-italic">{{ getCurrentSlide().description }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        data() {
            return {
                slide: 1,
                slides: [
                    {
                        type: 'Design',
                        title: 'XYZ Mockup',
                        src: "https://source.unsplash.com/random/800x800/?city",
                        description: "Sometime we can feel a bit dull in the morning and we need to produce our own sunshine energy."
                    },
                    {
                        type: 'Design',
                        title: 'PupGee Presentatuib',
                        src: "https://source.unsplash.com/random/800x800/?dancing",
                        description: "So here are 17 wonderful, short positive quotes that my amazing colleague Hayley has collected for you."
                    },
                    {
                        type: 'Design',
                        title: 'United Becoming',
                        src: "https://source.unsplash.com/random/800x800/?people",
                        description: "Either way, I think we can all do with a bit more spark to help us perform miracles and live in joy."
                    },
                    {
                        type: 'Design',
                        title: 'Grandest Creation',
                        src: "https://source.unsplash.com/random/800x800/?silouhette",
                        description: "We also have a powerful and proven Law of Attraction gift which you can access by clicking the link below"
                    },
                ]
            }
        },
        methods: {
            getCurrentSlide: function () {
                return this.slides[this.slide - 1];
            }
        }
    }
</script>