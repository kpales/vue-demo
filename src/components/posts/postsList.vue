<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            All posts <small>({{ posts.length }})</small>
            <a class="button is-primary is-loading" v-if="loading">
              ...
            </a>
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <post v-for="post in posts" :post="post"></post>
      </div>
    </section>
  </div>
</template>

<script>
  import Post from './post.vue'
  import axios from 'axios'

  export default {
    name: 'posts-list',
    data() {
      return {
        search: {
          endpoint: 'https://jsonplaceholder.typicode.com/posts'
        },
        loading: false,
        posts: []
      }
    },
    components: {
      Post
    },
    mounted() {
      this.loading = true;
      axios.get(this.search.endpoint)
        .then(({
          data
        }) => {
          this.posts = data
          this.loading = false
        })
        .catch(e => {
          console.log(e)
          this.loading = false
        })
    }
  }

</script>

<style>


</style>
