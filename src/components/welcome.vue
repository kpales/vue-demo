<template>
  <div class="container is-large">
    <div class="heading has-text-centered">
      <h1 class="title">{{messages.title}}</h1>
    </div>
    <div class="container">
      <p>Welcome and enjoy the app</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'welcome',
    data() {
      return {
        messages: { title: 'What is this?' }
      }
    }
  }
</script>
