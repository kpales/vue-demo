<template>
  <div>
    <div class="container">
      <user-list></user-list>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            Tutorial by <strong>Tiago Dias</strong> to demonstrate the power of <strong><a href="http://vuejs.org">Vue</a></strong>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import UserList from './components/user/userList.vue'
  import {load} from 'vue-google-maps'

  load({
      'key': 'AIzaSyAkMm-OZuHfFAJQhEuETvsOhiNtizJHRzo'
  });

  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      UserList
    }
  }
</script>

<style>

</style>
