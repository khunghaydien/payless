<template>
  <div class="mt-5 pt-4 pb-4 d-flex mb-5 sys-card sys-flex-center">
    <div class="col-8 p-0 text-secondary">
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <img src="@/assets/icon/chev-left.png" height="24" alt="" />
          <div class="cursor-pointer pl-2" @click="backList">一覧に戻る</div>
        </div>
        <BaseButton
          v-if="registed"
          class="seminar-button"
          @click="showPopupComponent"
          >セミナーに登録する</BaseButton
        >
        <div v-else class="btn btn-register" @click="showPopupComponentV2">
          登録済
        </div>
      </div>
      <PopupSuccess
        v-if="showPopup"
        @close="closePopupComponent"
      ></PopupSuccess>
      <div class="mt-4 exhibitor-bg-top"></div>
      <div class="mt-4">
        <span class="font-weight-bold">Speeldy </span>
        <span>操作説明会</span>
      </div>
      <div class="d-flex exhibitor-text-small mt-3">
        <img src="@/assets/icon/time.png" alt="" />
        <span class="ml-1 mr-3">2022年01月01日 13:00~15:00</span>
        <img src="@/assets/icon/position.png" alt="" />
        <span class="ml-1">東京</span>
      </div>
      <div class="exhibitor-text-small mt-3">
        本説明会ではSpeeIDyの基本的な操作方法を中心に、ご説明をさせていただきます。本説明会ではSpeeIDyの基本的な操作方法を中心に、ご説明をさせていただきます。
      </div>
      <div class="mt-4">参加講師</div>
      <div v-for="n in 3" :key="`item${n}`" class="mt-4">
        <div class="mt-3 d-flex">
          <div class="exhibitor-bg-item mr-2"></div>
          <div class="d-flex flex-column justify-content-end col">
            <div>参加講師</div>
            <div class="mt-2 exhibitor-text-small">
              本説明会ではSpeeidyの基本的な操作方法を中心に、ご説明をさせていただきます。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sys-flex-center footer-main-custom"></div>
  </div>
</template>

<script>
import PopupSuccess from './PopupSuccess.vue'
import BaseButton from '~/components/Share/Button/BaseButton.vue'
export default {
  name: 'SeminarDetail',
  components: { BaseButton, PopupSuccess },
  data() {
    return {
      showPopup: false,
      registed: true,
    }
  },
  created() {},
  methods: {
    closePopupComponent() {
      this.showPopup = false
      this.registed = false
    },
    showPopupComponent() {
      this.showPopup = true
    },
    showPopupComponentV2() {
      this.showPopup = true
      this.registed = true
    },
    backList() {
      this.$emit('backList')
    },
  },
}
</script>


<style scoped>
.btn-register {
  background: #f2eff0;
  border: 1px solid #555555;
  width: 114px;
  height: 38px;
  line-height: 25px;
  border-radius: 20px;
}
.sys-card {
  padding: 60px 0px;
}
.seminar-button {
  border-radius: 30px;
  padding-left: 20px;
  padding-right: 20px;
}

.exhibitor-bg-top {
  height: 188px;
  background-color: #f2eff0;
}

.exhibitor-text-small {
  font-size: 13px;
  line-height: 1.4;
  color: #555555;
}

.exhibitor-bg-item {
  background-color: #f2eff0;
  height: 120px;
  width: 113px;
}
</style>
