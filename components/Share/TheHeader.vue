<template>
  <div class="sys-bg-main sys-align-center sys-header">
    <div class="d-flex justify-content-between w-100">
      <div class="sys-align-center justify-content-between">
        <nuxt-link to="/overview" class="header-link">展示会概要</nuxt-link>
        <img src="@/assets/icon/chev-down.png" alt="">
      </div>
      <div class="sys-align-center justify-content-between">
        <nuxt-link to="guide" class="header-link">出展案内</nuxt-link>
        <img src="@/assets/icon/chev-down.png" alt="">
      </div>
      <div class="sys-align-center justify-content-between">
        <nuxt-link to="" class="header-link">来場案内</nuxt-link>
        <img src="@/assets/icon/chev-down.png" alt="">
      </div>
      <div class="sys-align-center justify-content-between">
        <nuxt-link to="" class="header-link">出展者検索</nuxt-link>
        <img src="@/assets/icon/chev-down.png" alt="">
      </div>
      <div class="sys-align-center justify-content-between">
        <nuxt-link to="" class="header-link">セミナー</nuxt-link>
        <img src="@/assets/icon/chev-down.png" alt="">
      </div>
      <div class="sys-align-center justify-content-between">
        <nuxt-link to="" class="header-link">お問い合わせ</nuxt-link>
        <img src="@/assets/icon/chev-down.png" alt="">
      </div>
      <div class="">
        <div class="sys-align-center mb-1">
          <BaseButton class="sys-button-outline mr-1">出展資料請求</BaseButton>
          <BaseButton class="sys-button-outline">来場登録 </BaseButton>
        </div>
        <div class="sys-align-center">
          <BaseButton class="sys-button-outline mr-1">出展者マイページ</BaseButton>
          <BaseButton class="sys-button-outline">来場者マイページ </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from './Button/BaseButton.vue'
export default {
  name: 'TheHeader',
  components: { BaseButton },
}
</script>

<style lang="scss" scoped>
.sys-header {
  height: 120px;
  padding-left: 76px;
  padding-right: 40px;
  .header-link {
    color: #ffffff !important;
    font-size: 16px;
    text-decoration: none;
  }
}

.sys-button-outline {
  background-color: #ffffff;
  border: 1px solid transparent;
  color: #0194c0;
  border-radius: 30px;
  width: 182px;
  font-size: 14px;
}

.sys-button-outline:active {
  background-color: #0194c0;
}
</style>
