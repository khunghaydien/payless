<template>
  <div class="read-qr">
    <div class="sys-card">
      <img src="@/assets/png/img-qr-result.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push('/qr-reception')
    }, 5000)
  },
}
</script>
<style lang ="scss" scoped>
.sys-card {
  padding: 120px;
}
</style>