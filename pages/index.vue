<template>
  <div>
    <login></login>
  </div>
</template>

<script>
import Login from '../components/Login/Login.vue'
export default {
  name: 'ExhibitionPage',
  components: { Login },
  layout: 'login'
}
</script>
