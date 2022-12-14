<template>
  <div>
    <div class="header-title">基本情報</div>
    <div class="sys-card">
      <div class="form-group width-100 sys-align-center">
        <div class="mb-10 col-3">氏名</div>
        <div class="col-7">
          <b-form-input v-model="account.companyName"></b-form-input>
        </div>
      </div>

      <div class="form-group width-100 sys-align-center">
        <div class="mb-10 col-3">ふりがな</div>
        <div class="col-3">
          <b-form-input v-model="account.homeNumber"></b-form-input>
        </div>
      </div>

      <div class="form-group width-100 sys-align-center">
        <div class="mb-10 col-3">ふりがな</div>
        <div class="col-7">
          <b-form-input v-model="account.address"></b-form-input>
        </div>
      </div>

      <div class="form-group width-100 sys-align-center mb-40">
        <div class="mb-10 col-3">電話番号</div>
        <div class="sys-align-center col-7">
          <b-form-input
            placeholder="03"
            v-model="account.phone.split('-')[0]"
            class="col-2"
          ></b-form-input>
          <div class="line"></div>
          <b-form-input
            placeholder="1234"
            v-model="account.phone.split('-')[1]"
            class="col-2"
          ></b-form-input>
          <div class="line"></div>
          <b-form-input
            placeholder="5678"
            v-model="account.phone.split('-')[2]"
            class="col-2"
          ></b-form-input>
        </div>
      </div>

      <div class="sys-flex-center">
        <b-button variant="primary" class="mr-20" @click="clear"
          >キャンセル</b-button
        >
        <b-button variant="primary" @click="edit">編集を確定する</b-button>
      </div>
    </div>
    <div class="sys-flex-center footer-main-custom"></div>
  </div>
</template>
<script>
export default {
  props: { data: { type: Object, default: () => {} } },
  data() {
    return {
      showPage: 0,
      account: this.data,
    }
  },
  methods: {
    clear() {
      this.account = {
        companyName: '',
        phone: '',
        homeNumber: '',
        address: '',
      }
    },
    edit() {
      this.$emit('editAccount', this.account)
    },
  },
}
</script>
<style lang="scss" scoped>
.sys-card {
  padding: 60px;
}
.btn-primary {
  width: 183px;
  height: 49px;
  border-radius: 40px;
  line-height: 18px;
}
.mb-40 {
  margin-bottom: 40px;
}
.mr-20 {
  margin-right: 20px;
}
.line {
  width: 10px;
  height: 2px;
  background: #bababa;
  margin: 0px 10px;
}
</style>