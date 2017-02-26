<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            All users <small>({{ users.length }})</small>
            <a class="button is-primary is-loading" v-if="loading">
            ...
          </a>
          </h1>
        </div>
      </div>
    </section>
    <section>
      <div class="columns is-desktop">
        <div class="column is-two-thirds-desktop">
          <div class="columns">
            <div class="column">
              <p class="control">
                <input type="text" class="input" id="searchName" placeholder="Search for a name" v-model="search.name">
              </p>
            </div>
            <div class="column">
              <p class="control">
                <input type="text" class="input" id="searchCompany" placeholder="Search for a company" v-model="search.company">
              </p>
            </div>
          </div>
          <table class="table is-striped">
            <thead>
              <tr>
                <th v-for="th in tableHeads">{{th}}</th>
              </tr>
            </thead>
            <tbody>
              <user :user="user" v-for="user in filteredUsers"></user>
            </tbody>
          </table>
        </div>
        <div class="column is-one-third-desktop">
          <router-view></router-view>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import User from './user.vue'
  import axios from 'axios'

  export default {
    name: 'user-list',
    data() {
      return {
        search: {
          name: '',
          company: '',
          endpoint: 'https://jsonplaceholder.typicode.com/users'
        },
        tableHeads: ['#', 'Name', 'Phone', 'City', 'Company'],
        loading: false,
        users: []
      }
    },
    components: {
      User
    },
    computed: {
      filteredUsers() {
        if (!this.search.name && !this.search.company) {
          return this.users;
        }

        const that = this;

        return this.users.filter(user =>
          user.name.toLowerCase().includes(that.search.name.toLowerCase()) &&
          user.company.name.toLowerCase().includes(that.search.company.toLowerCase())
        );

      }
    },
    mounted() {
      this.loading = true
      axios.get(this.search.endpoint)
        .then(({
          data
        }) => {
          this.users = data
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
  .is-active {
    font-weight: bold;
  }

</style>
