<template>
  <div>
    <div class="notification is-small" :class="requestNotificationStatus">
      The request took <em v-text="requestTime"></em> milliseconds!
    </div>
    <profile :user="user">
      <footer class="card-footer" slot="footer">
        <router-link :to="{name: 'user-details-profile', params: {userId: user.id}}" class="card-footer-item">View full details</router-link>
      </footer>
    </profile>
  </div>
</template>

<script>
  import Profile from './userDetailProfile.vue'
  import axios from 'axios'

  export default {
    name: 'user-detail-quick-peek',
    props: ['userId'],
    components: {
      Profile
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
        loading: false,
        search: {
          endpoint: "https://jsonplaceholder.typicode.com/users"
        },
        user: {
          address: {
            geo: {}
          },
          company: {}
        },
        requestTime: ''
      }
    },
    computed: {

      requestNotificationStatus() {
        let status = "is-info";

        if (!this.requestTime) {
          return status;
        }

        this.requestTime = Math.floor(this.requestTime);

        if (this.requestTime < 40) {
          status = "is-success";
        } else if (this.requestTime >= 100 < 500) {
          status = "is-warning"
        } else if (this.requestTime >= 500) {
          status = "is-danger"
        }

        return status;
      }
    },
    watch: {
      // call again the method if the route changes
      '$route': 'getUser'
    },
    created() {
      this.getUser()
    },
    methods: {
      getUser() {
        if (!this.userId) {
          return
        }

        this.loading = true;

        const that = this;
        const start = performance.now();

        axios.get(this.search.endpoint + '?id=' + this.userId)
          .then((response) => {
            that.requestTime = performance.now() - start;
            this.user = response.data[0];
            this.loading = false;
          })
          .catch(e => {
            that.requestTime = performance.now() - start;
            this.loading = false;
          });
      }
    }
  }

</script>
