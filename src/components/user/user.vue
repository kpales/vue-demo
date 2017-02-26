<template>
  <tr>
    <td>
      {{user.id}}
    </td>
    <td>
      <router-link v-if="user" :to="{ name: 'quickPeek', params: { userId: user.id, user: user }}">
        {{user.name}}
      </router-link>
    </td>
    <td>{{user.phone}}</td>
    <td>{{user.address.city}}</td>
    <td>{{user.company.name}}</td>
  </tr>
</template>

<script>

export default {
  name: 'user',
  props: ['user'],
  data () {
    return {}
  }
}
</script>

<style>

</style>
