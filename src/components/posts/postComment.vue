<template>
  <article class="message">
    <div class="message-header">
      <p>{{ comment.email }} said...</p>
    </div>
    <div class="message-body">
      {{ comment.body }}
    </div>
  </article>
</template>
<script>
  export default {
      name: 'post-comment',
      props: ['comment'],
      data() {
          return {}
      }
  }

</script>
