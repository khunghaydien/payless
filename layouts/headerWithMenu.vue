<template>
  <div>
    <TheHeader> </TheHeader>
    <Nuxt class="exhibition-main"></Nuxt>
  </div>
</template>
<script>
import TheHeader from '../components/Share/TheHeader.vue'
export default {
  name: 'DefaultLayout',
  components: { TheHeader },
}
</script>

<style scoped>
.exhibition-main {
  min-height: calc(100vh - 119px);
  background: #f7f8f9;
}

.sys-header {
  height: 119px;
  padding-left: 76px;
}
</style>
