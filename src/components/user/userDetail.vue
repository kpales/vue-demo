<template>
  <div class="panel">
      <div class="panel-heading is-clearfix">
          {{user.company.name}} <a class="button is-pulled-right" v-if="loading" :class="loading ? 'is-loading' : ''">Loading</a>
      </div>
      <div class="panel-block">
          <h2>{{ user.name }}</h2>
          <p>
            {{user.address.suite}}, {{user.address.street}} {{user.address.zipcode}} {{user.address.city}}
          </p>
      </div>
          
      <div class="panel-block">
          <gmap id="map" :center="center" :zoom="3">
            <gmarker :position="center"></gmarker>
          </gmap> 
      </div>
      <div class="panel-block">

      <div id="IdFooter">
            <a href="#" class="remove-decoration"><i class="glyphicon glyphicon-envelope"></i> {{user.email}}</a> <br>
            <a :href="'http://'+user.website" target="_blank" class="remove-decoration"><i class="glyphicon glyphicon-globe"></i> {{user.website}} </a><br>
            <a href="#" class="remove-decoration"> <i class="glyphicon glyphicon-phone"></i> {{ user.phone }}</a>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {load, Map, Marker} from 'vue-google-maps'

  export default {
    name: 'user-detail',
    components: {
      'gmap': Map,
      'gmarker': Marker
    },
    computed: {
      center() {
        return {
          lat: parseFloat(this.user.address.geo.lat) || 0,
          lng: parseFloat(this.user.address.geo.lng) || 0
        }
      }
    },
    data () {
      return {
        loading: false,
        user: {
          name: '',
          phone: '',
          mail: '',
          website: '',
          address: {
            geo: {
              lat: 0,
              lng: 0
            }
          },
          company: {
            name: ''
          }
        }
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
        if (!this.$route.params.userId) {
          return
        }
        this.loading = true;
        const endpoint = "https://jsonplaceholder.typicode.com/users"
      
        axios.get(endpoint+'?id='+this.$route.params.userId)
          .then(response => {
            this.user = response.data[0]; 
            this.loading = false;
          })
          .catch(e => this.loading = false);
        }
    }
  }
</script>

<style>
  #map {
    width:100%;
    height: 200px;
    display: block;
  }
</style>
