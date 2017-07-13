<template>
    <article class="container single-post">
        <h1 class="large-heading">{{ post[0].title.rendered }}</h1>
        <img class="post-img" v-bind:src="post[0].full">
        <div class="post-content" v-html="post[0].content.rendered"></div>
    </article>
</template>

<script>
// export default {
//     name: 'SinglePost',
//     route: {
//         data: function () {
//             this.$http.get('http://rest-api-vue-cli-backend.dev/wp-json/wp/v2/posts/?filter[name]=' + this.$route.params.postSlug.then(response => {
//                 console.log("this.$route.params.postSlug", this.$route.params.postSlug);
//                 this.posts = response.body
//             }, response => {
//                 // error callback
//             })
//     }
//     }

// }
</script>

<style>

</style>
