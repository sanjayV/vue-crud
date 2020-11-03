<template>
  <div class="main">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from './components/shared/Header.vue';
import footer from './components/shared/Footer.vue';

export default {
  components: {
      'app-header': header,
      'app-footer': footer
  },
  data() {
      return {}
  },
  methods: {

  }
}
</script>

<style scoped>
.min-content{
    min-height: 400px;
}
</style>
