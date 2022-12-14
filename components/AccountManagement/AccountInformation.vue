<template>
  <div>
    <div v-if="showPage === 'account-information'">
      <div class="header-title">基本情報</div>
      <div class="sys-card">
        <div class="mb-10">会社名</div>
        <div class="mb-40">{{ information.companyName }}</div>
        <div class="mb-10">住所</div>
        <div class="mb-10">{{ information.homeNumber }}</div>
        <div class="mb-40">
          {{ information.address }}
        </div>
        <div class="mb-10">電話</div>
        <div class="mb-40">{{ information.phone }}</div>
        <div class="sys-flex-center">
          <b-button variant="primary" @click="showPage = 'edit-account'"
            >編集する</b-button
          >
        </div>
      </div>
    </div>
    <AccountEdit
      v-if="showPage === 'edit-account'"
      :data="information"
      @editAccount="editAc"
    ></AccountEdit>
    <div class="sys-flex-center footer-main-custom"></div>
  </div>
</template>
<script>
import AccountEdit from './AccountEdit.vue'
export default {
  components: { AccountEdit },
  data() {
    return {
      showPage: 'account-information',
      information: {
        companyName: 'PaylessGate株式会社',
        phone: '06-7777-1875',
        homeNumber: '530-0017',
        address: '大阪府大阪市北区角田町1-12 阪急ファイブ アネックスビル2階',
      },
    }
  },
  methods: {
    editAc(val) {
      this.information = val
      this.showPage = 'account-information'
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
</style>