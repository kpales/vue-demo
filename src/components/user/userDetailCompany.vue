<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ company.name }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p>
          {{ company.bs }}
        </p>
      </div>
    </div>
    <footer class="card-footer">
        <div class="card-footer-item">
          <strong>{{ company.catchPhrase }}</strong>
        </div>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'user-details-company',
    props: ['user'],
    data() {
      return {

      }
    },
    computed: {
      company() {
        return this.user.company;
      }
    }
  }

</script>
