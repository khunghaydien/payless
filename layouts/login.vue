<template>
  <div>
    <div class="bg-primary sys-header">
      <img src="@/assets/png/img-header.png" alt="">
    </div>
    <Nuxt class="exhibition-main"></Nuxt>
  </div>
</template>
<script>


export default ({
  name: 'DefaultLayout',
  components: {
  }
})
</script>

<style scoped>
.exhibition-main {
  min-height: calc(100vh - 81px);
  background: #f7f8f9;
}

.sys-header {
  height: 81px;
  padding-left: 18px;
}
</style>
