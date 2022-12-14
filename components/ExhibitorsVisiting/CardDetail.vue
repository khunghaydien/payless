<template>
  <div>
    <div class="header-title">アドレス帳</div>
    <div class="sys-card">
      <div class="sys-align-center" @click="back">
        <img class="mr-20" src="@/assets/icon/chev-left.png" alt="" />
        <div>一覧に戻る</div>
      </div>
      <div class="card-body sys-flex-center width-100">
        <div class="sys-card col-5 mr-20">
          <div class="mb-30">
            <div class="mb-4 text-secondary">会社名</div>
            <div class="sys-align-center">
              <div class="mr-20">{{ card.companyName }}</div>
              <img src="@/assets/icon/copy.png" alt="" />
            </div>
          </div>
          <div class="mb-30">
            <div class="mb-4 text-secondary">部署・役職名</div>
            <div class="sys-align-center">
              <div class="mr-20">{{ card.position }}</div>
              <img src="@/assets/icon/copy.png" alt="" />
            </div>
          </div>
          <div class="mb-30">
            <div class="mb-4 text-secondary">電話番号</div>
            <div class="sys-align-center">
              <div class="mr-20">{{ card.phone }}</div>
              <img src="@/assets/icon/phone.png" alt="" />
            </div>
          </div>

          <div class="mb-30">
            <div class="mb-4 text-secondary">携帯電話番号</div>
            <div class="sys-align-center">
              <div class="mr-20">{{ card.tablePhone }}</div>
              <img src="@/assets/icon/phone.png" alt="" />
            </div>
          </div>
          <div class="mb-30">
            <div class="mb-4 text-secondary">メールアドレス</div>
            <div class="sys-align-center">
              <div class="mr-20">{{ card.email }}</div>
              <img src="@/assets/icon/copy.png" alt="" />
            </div>
          </div>
          <div>
            <div class="mb-4 text-secondary">住所</div>
            <div class="sys-align-center">
              <div class="mr-20">{{ card.address }}</div>
              <img src="@/assets/icon/undefine.png" alt="" />
            </div>
          </div>
        </div>
        <div class="sys-card col-5">
          <div class="mb-30">
            <div class="mb-4 text-secondary">社員数</div>
            <div class="sys-align-center">
              <div class="mr-20">{{ card.employeeNumber }}</div>
            </div>
          </div>
          <div class="mb-30">
            <div class="mb-4 text-secondary">業務内容</div>
            <div class="sys-align-center">
              <div class="mr-20">{{ card.bussinessContent }}</div>
            </div>
          </div>
          <div class="mb-30">
            <div class="mb-4 text-secondary">売上高</div>
            <div class="sys-align-center">
              <div class="mr-20">{{ card.numberSale }}</div>
            </div>
          </div>

          <div class="mb-30">
            <div class="mb-4 text-secondary">業種</div>
            <div class="sys-align-center">
              <div class="mr-20">{{ card.bussinessType }}</div>
            </div>
          </div>
          <div class="mb-30">
            <div class="mb-4 text-secondary">売上高</div>
            <div class="sys-align-center">
              <div class="mr-20">{{ card.numberSaler }}</div>
            </div>
          </div>
          <div>
            <div class="mb-4 text-secondary">決済関与</div>
            <div class="sys-align-center">
              <div class="mr-20">{{ card.participate }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="sys-flex-center width-100 mb-20">
        <div class="sys-card col-6">
          <div class="note">メモ</div>
        </div>
      </div>
      <div class="sys-flex-center width-100">
        <div class="col-6 mr-20 sys-flex-center">
          <img class="card-img" src="@/assets/png/card.png" alt="" />
        </div>
        <div class="col-6 sys-flex-center">
          <img class="card-img" src="@/assets/png/card.png" alt="" />
        </div>
      </div>
    </div>
    <div class="sys-flex-center footer-main-custom"></div>
  </div>
</template>
<script>
export default {
  props: {
    cardId: { type: Number, default: 1 },
  },
  data() {
    return {
      card: {
        phone: '000-0000-0000',
        tablePhone: '000-0000-0000',
        companyName: 'あんず株式会社',
        position: '○✕事業部 部長',
        email: 't.taro@example.com',
        address: '東京都千代田区千代田1-111',
        employeeNumber: '5,000人',
        numberSale: '1,000万円',
        participate: '自身で決済可能',
        bussinessContent: '',
        bussinessType: '',
        numberSaler: '',
      },
    }
  },
  methods: {
    back() {
      this.$emit('back')
    },
  },
}
</script>
<style lang="scss" scoped>
.mb-30 {
  margin-bottom: 25px;
}
.mb-4 {
  margin-bottom: 4px !important;
}
.card-body {
  .sys-card {
    min-height: 430px;
  }
}
.note {
  height: 100px;
}
.card-img {
  border-right: 2px solid;
}
.text-secondary {
  color: #bababa;
}
</style>