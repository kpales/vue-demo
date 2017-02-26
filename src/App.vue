<template>
  <div>
    <section class="hero is-primary is-bold is-small">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Vue powered
          </h1>
          <h2 class="subtitle">
            A demo app using
            <em><a class="" title="jsonplaceholder" :href="links.jsonplaceholder" target="_blank">jsonplaceholder</a></em>            to show the power of
            <em><a class="" :href="links.vue" title="Vue" target="_blank">Vue</a></em>!
          </h2>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <router-link to="/" tag="li" exact><a>Home</a></router-link>
              <router-link to="/users" tag="li"><a>Users</a></router-link>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section class="section is-small columns is-marginless">
      <div class="column">
        <transition mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <router-view></router-view>
        </transition>
      </div>
    </section>
    <section class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            Built by <strong>Tiago Dias</strong> - <a :href="links.githubRepo" target="_blank">{{links.githubRepo}}</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {
    load
  } from 'vue-google-maps'

  load({
    'key': 'AIzaSyAkMm-OZuHfFAJQhEuETvsOhiNtizJHRzo'
  });

  export default {
    name: 'app',
    data() {
      return {
        links: {
          jsonplaceholder: "https://jsonplaceholder.typicode.com/",
          vue: 'https://vuejs.org',
          githubRepo: 'https://github.com/tiagojpdias/vue-demo'
        }
      }
    }
  }

</script>
