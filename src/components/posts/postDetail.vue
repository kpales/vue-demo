<template>
  <div>
    <section class="hero is-default is-small">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ post.title }}
          </h1>
        </div>
      </div>
    </section>
    <section class="section blog">
      <div class="container">
        <div class="columns is-mobile">
          <div class="column is-8 is-offset-2">
            <div class="box content blog-post">
              {{post.body}}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            Comments <small>({{ comments.length }})</small>
            <a class="button is-primary is-loading" v-if="loading.comments">
              ...
            </a>
          </h1>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="content">
          <comment v-for="comment in comments" :comment="comment"></comment>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  import Comment from './postComment.vue'
  import axios from 'axios'
  export default {
    name: 'post-detail',
    props: ['postId'],
    components: {
      Comment
    },
    data() {
      return {
        post: {},
        comments: [],
        loading: {
          post: false,
          comments: false
        }
      }
    },
    mounted() {
      this.getPostDetails()
    },
    methods: {
      getPostDetails() {
        this.loading.post = true
        const endpoint = "http://jsonplaceholder.typicode.com/posts/" + this.postId
        axios.get(endpoint)
          .then(({
            data
          }) => {
            this.loading.post = false
            this.post = data
            this.getComments()
          })
          .catch(e => {
            this.loading.post = false
            console.log(e)
          })
      },
      getComments() {
        this.loading.comments = true
        const endpoint = "http://jsonplaceholder.typicode.com/posts/" + this.postId + "/comments"
        axios.get(endpoint)
          .then(({
            data
          }) => {
            this.loading.comments = false
            this.comments = data
          })
          .catch(e => {
            this.loading.comments = false
            console.log(e)
          })
      }
    }
  }

</script>
