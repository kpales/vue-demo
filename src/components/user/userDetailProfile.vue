<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ user.name }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p>{{user.address.suite}}, {{user.address.street}} {{user.address.zipcode}} {{user.address.city}}</p>
        <ul>
          <li><a :href="'mailto:'+user.email">{{ user.email}}</a></li>
          <li><a :href="'http://'+user.website" target="_blank">{{ user.website }}</a></li>
          <li>{{ user.phone }}</li>
        </ul>
      </div>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
  export default {
    name: 'user-details-profile',
    props: ['user'],
    data() {
      return {

      }
    }
  }

</script>
