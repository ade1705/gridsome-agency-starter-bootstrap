<template>
    <div class="py-5 row">
        <div class="col-md-2 col-6">
            <p><b>QUICKLINKS</b></p>
            <ul class="list-unstyled font-big-1-2 font-weight-light">
                <li><g-link to="/">HOME</g-link></li>
                <li><g-link to="/about">ABOUT</g-link></li>
                <li><g-link to="/portfolio">PORTFOLIO</g-link></li>
                <li><g-link to="/blog">BLOG</g-link></li>
                <li><g-link to="/contact">CONTACT</g-link></li>
            </ul>
        </div>
        <div class="col-md-2 col-6">
            <p><b>SOCIAL</b></p>
            <ul class="list-unstyled font-big-1-2 font-weight-light">
                <li><g-link to="/">Twitter</g-link></li>
                <li><g-link to="/">Instagram</g-link></li>
                <li><g-link to="/">Facebook</g-link></li>
                <li><g-link to="/">Medium</g-link></li>
            </ul>
        </div>
        <div class="col-md-6 offset-md-2 col-12 mt-3 mt-md-0">
            <div class="form-group mb-5">
                <label class="font-weight-bold">NEWSLETTER</label>
                <div class="input-group mb-3 border-bottom">
                    <input type="text" class="form-control border-0" placeholder="Recipient's username" aria-label="Enter your email address" aria-describedby="button-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary border-0" type="button" id="button-addon2">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label class="font-weight-bold">GENERAL ENQUIRIES</label>
                <h4 class="font-weight-light"><a href="mailto:hello@badman.com">hello@badman.com</a></h4>
            </div>
        </div>
        <div class="container pt-5 text-muted small">
            <p class="mb-0">&copy; {{ currentYear }} Badman Co. Gridsome Agency Starter by <a href="https://twitter.com/TrussDamola">@TrussDamola</a></p>
            <p>Powered by <a href="https://gridsome.org/">Gridsome</a> and <a href="https://getbootstrap.com/">Bootstrap 4</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                currentYear: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>

</style>