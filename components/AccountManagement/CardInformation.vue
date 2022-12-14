<template>
  <div>
    <div v-if="showPage === 'card-information'">
      <div class="header-title">基本情報</div>
      <div class="sys-card">
        <div class="mb-10">氏名</div>
        <div class="mb-40">{{ card.fullname }}</div>
        <div class="mb-10">会社名</div>
        <div class="mb-40">{{ card.companyName }}</div>
        <div class="mb-10">部署名</div>
        <div class="mb-40">{{ card.companyEnglishName }}</div>
        <div class="mb-10">役職名</div>
        <div class="mb-40">{{ card.position }}</div>
        <div class="mb-10">電話番号</div>
        <div class="mb-40">{{ card.mobiPhone }}</div>
        <div class="mb-10">携帯電話番号</div>
        <div class="mb-40">{{ card.tablePhone }}</div>
        <div class="mb-10">メールアドレス</div>
        <div class="mb-40">{{ card.email }}</div>
        <div class="mb-10">住所</div>
        <div class="mb-10">{{ card.homeNumber }}</div>
        <div class="mb-40">
          {{ card.address }}
        </div>
        <div class="mb-10">名刺の画像(表)</div>
        <div class="mb-40 image-card sys-flex-center">
          <img
            v-if="card.file_1 && card.file_1.file"
            :src="card.file_1.file"
            alt=""
          />
        </div>

        <div class="mb-10">名刺の画像(裏)</div>
        <div class="mb-40 image-card sys-flex-center">
          <img
            v-if="card.file_2 && card.file_2.file"
            :src="card.file_2.file"
            alt=""
          />
        </div>

        <div class="sys-flex-center">
          <b-button variant="primary" @click="showPage = 'edit-card'"
            >編集する</b-button
          >
        </div>
      </div>
    </div>
    <CardEdit
      v-if="showPage === 'edit-card'"
      :data="card"
      @editCard="editCard"
    ></CardEdit>
    <div class="sys-flex-center footer-main-custom"></div>
  </div>
</template>
<script>
import CardEdit from './CardEdit.vue'
export default {
  components: { CardEdit },
  data() {
    return {
      showPage: 'card-information',
      card: {
        fullname: '山田 太郎',
        companyName: '株式会社SpeeIDy',
        companyEnglishName: 'PaylessGate事業部',
        position: '部長',
        mobiPhone: '06-7777-1875',
        tablePhone: '080-1234-5678',
        email: 'test@paylessgate.com',
        homeNumber: '530-0017',
        address: '大阪府大阪市北区角田町1-12 阪急ファイブ アネックスビル2階',
        zipCode: '530-0017',
        autonomousCity: '大阪府',
        province: '大阪市北区角田町',
        file_1: { file: '', fileName: '' },
        file_2: { file: '', fileName: '' },
      },
    }
  },
  methods: {
    editCard(val) {
      this.card = val
      this.showPage = 'card-information'
    },
  },
}
</script>
<style lang="scss" scoped>
.sys-card {
  padding: 60px;
}
.image-card {
  width: 160px;
  height: 90px;
  background: #bbbbbb;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: scale-down;
  }
}
.btn-primary {
  width: 183px;
  height: 49px;
  border-radius: 40px;
  line-height: 18px;
}
</style>