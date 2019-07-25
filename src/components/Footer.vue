<template>
    <div class="py-5 row">
        <div class="col-2">
            <p><b>QUICKLINKS</b></p>
            <ul class="list-unstyled font-big-1-2 font-weight-light">
                <li>Home</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        <div class="col-2">
            <p><b>SOCIAL</b></p>
            <ul class="list-unstyled font-big-1-2 font-weight-light">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Medium</li>
            </ul>
        </div>
        <div class="col-6 offset-md-2">
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
                <h4 class="font-weight-light">hello@badman.com</h4>
            </div>
        </div>
        <div class="container">
            &copy; {{ currentYear }} BADMAN.
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