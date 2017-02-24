<template>
  <section>
    <div class="columns">
      <section class="column hero is-small is-primary is-bold">
        <div class="hero-body">
          <div class="container is-fluid">
            <h1 class="title">
              Users
            </h1>
            <h2 class="subtitle">
              Listing users from <a href="https://jsonplaceholder.typicode.com/users" target="_blank">https://jsonplaceholder.typicode.com/users</a>
            </h2>
          </div>
        </div>
      </section>
    </div>
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
        <router-view name="userDetail"></router-view>
      </div>
    </div>
  </section>
</template>

<script>
  import User from './user.vue'
  import axios from 'axios'

  export default {
    name: 'user-list',
    data () {
      return {
        search: {
          name: '',
          company: ''
        },
        tableHeads: ['#', 'Name', 'Phone', 'City', 'Company'],
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
      const endpoint = "https://jsonplaceholder.typicode.com/users"

      axios.get(endpoint)
        .then(({data}) => this.users = data)
        .catch(e => console.log(e))
    }
  }
</script>

<style>
  .router-link-active {
    font-weight: bold;
  }
</style>
