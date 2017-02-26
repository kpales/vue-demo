<template>
  <div>
    <div class="level">
      <router-link :to="{ path : '/users/'+userId}" tag="a" class="button is-primary" exact>Back</router-link>
    </div>
    <div class="columns">
      <div class="column is-two-thirds-desktop">
        <div class="tabs is-fullwidth">
          <ul>
            <router-link :to="{ name: 'user-details-profile'}" tag="li"><a>Personal</a></router-link>
            <router-link :to="{ name: 'user-details-company'}" tag="li"><a>Company</a></router-link>
          </ul>
        </div>
        <router-view :user="user"></router-view>
      </div>
      <div class="column is-one-third-desktop">
        <gmap id="map" :center="center" :zoom="3">
          <gmarker :position="center"></gmarker>
        </gmap>
      </div>
    </div>
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            User posts <small>({{ posts.length }})</small>
            <a class="button is-primary is-loading" v-if="loading.posts">
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
  import Post from '../posts/post.vue'
  import axios from 'axios'
  import {
    load,
    Map,
    Marker
  } from 'vue-google-maps'

  export default {
    name: 'user-detail',
    props: ['userId'],
    components: {
      'gmap': Map,
      'gmarker': Marker,
      Post
    },
    computed: {
      center() {
        return {
          lat: parseFloat(this.user.address.geo.lat) || 0,
          lng: parseFloat(this.user.address.geo.lng) || 0
        }
      }
    },
    data() {
      return {
        loading: {
          user: false,
          posts: false
        },
        user: {
          address: {
            geo: {}
          },
          company: {}
        },
        posts: []
      }
    },
    watch: {
      // call again the method if the route changes
      //'$route': 'getUser'
    },
    created() {
      this.getUser()
    },
    methods: {
      getUser() {
        if (!this.userId) {
          return
        }
        this.loading.user = true;
        const endpoint = "https://jsonplaceholder.typicode.com/users?id=" + this.userId;

        axios.get(endpoint)
          .then(({
            data
          }) => {
            this.user = data[0];
            this.loading.user = false;
            this.getUserPosts();
          })
          .catch(e => this.loading.user = false);
      },
      getUserPosts() {
        this.loading.posts = true;
        const endpoint = "https://jsonplaceholder.typicode.com/users/" + this.userId + "/posts"

        axios.get(endpoint)
          .then(({
            data
          }) => {
            this.posts = data;
            this.loading.posts = false;
          })
          .catch(e => this.loading.posts = false);
      }
    }
  }

</script>

<style scoped>
  #map {
    width: 100%;
    height: 200px;
    display: block;
  }

</style>
