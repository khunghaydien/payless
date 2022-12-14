<template>
  <div class="sys-flex-center">
    <div class="sys-card">
      <div class="sys-flex-center sys-flex-column">
        <div class="font-size-27 mb-30">アプリ上で認証操作</div>
        <div class="sys-flex-center sys-flex-column">
          <div class="mb-10">
            ご登録のスマートフォン宛にPUSH通知を送信しました。
          </div>
          <div>アプリを立上げて通知画面より、ログイン承認をお願いします。</div>
        </div>
        <div class="text-decoration-under mt-103">認証コードを再送する</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
        this.$router.push('accuracy-code')
    }, 5000)
  },
}
</script>
<style scoped>
.sys-card {
  width: 700px;
  padding: 80px 0px 50px 0px;
  margin: 200px auto;
}
.mt-103 {
  margin-top: 103px;
}
.font-size-27 {
  font-size: 27px;
}
.mb-30 {
  margin-bottom: 30px;
}
</style>