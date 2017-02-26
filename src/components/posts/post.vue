<template>
  <article class="message is-dark">
    <div class="message-header">
      <router-link :to="{ name: 'post-details', params: { postId: post.id}}" tag="p">
          <a>{{ post.title }}</a>
        </router-link>
    </div>
    <div class="message-body">
      {{ post.body }}
    </div>
  </article>
</template>
<script>
  export default {
    name: 'post',
    data() {
        return {}
    },
    props: ['post']
  }

</script>
