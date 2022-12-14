<template>
  <div class="read-qr sys-flex-center pt-5">
    <div v-if="showPage === 'print'">
      <div class="header">
        <div class="text-primary">ものづくりEXPO 2022へのお申込み</div>
        <div class="time-line d-flex">
          <div class="step step-one">
            <div
              class="circle primary"
              @click="currentStep(1)"
            >
              1
            </div>
            <div class="text text-primary" >
              来場者情報確認
            </div>
          </div>
          <div class="line line-1 primary"></div>
          <div class="step step-two">
            <div
              class="circle primary"
              @click="currentStep(2)"
            >
              2
            </div>
            <div class="text text-primary">
              QR読込
            </div>
          </div>
        </div>
      </div>
      <div class="sys-card">
        <div class="container d-flex align-items-center justify-content-center">
          <div class="img mb-23">
            <img src="@/assets/icon/tick-blue.png" alt="" />
          </div>
          <div class="title mb-23">ご登録いただきありがとうございます</div>
          <div
            class="cont mb-23 d-flex align-items-center justify-content-center"
          >
            <div class="mb-10">スマートフォンをお持ちで無い方は</div>
            <div>こちらの資料をダウンロードし会場にお持ちください</div>
          </div>
          <div class="button">
            <b-button
              class="d-flex align-items-center justify-content-center"
              variant="primary"
              @click="showPage = 'result'"
            >
              <div class="mr-10">ダウンロード</div>
              <img class="print" src="@/assets/icon/print.png" alt="" />
            </b-button>
          </div>
        </div>
      </div>
      <div class="sys-flex-center font-size-24 color-70 mt-4 p-40">
        アプリをインストールして来場するお客さまはコチラ
      </div>
    </div>
    <QrCode3 v-if="showPage === 'result'"></QrCode3>
  </div>
</template>
<script>
import QrCode3 from './QrCode3.vue'
export default {
  components: { QrCode3 },
  data() {
    return {
      showPage: 'print',
    }
  },
  methods:{
    currentStep(val){
      if(val=== 1){
        this.$router.push('/form-company-info')
      }else{
        this.$router.push('/read-qr')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.font-size-24 {
  font-size: 24px;
}
.p-40 {
  padding: 0px 40px;
}
.color-70 {
  color: #707070;
}
.container {
  flex-direction: column;
  padding: 60px;

  .mb-23 {
    margin-bottom: 23px;
  }
  .mb-10 {
    margin-bottom: 10px;
  }
  .mr-10 {
    margin-right: 10px;
  }
  .title {
    color: #0194c0;
  }
  .btn-primary {
    width: 196px;
    height: 49px;
    border-radius: 40px;
    line-height: 20px;
  }
  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid #0194c0;
    border-radius: 100%;
    width: 74px;
    height: 74px;
  }
  .cont {
    flex-direction: column;
  }
}

.pl-150 {
  padding-left: 150px;
}
.step {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 150px;
  .text {
    margin-top: 20px;
  }
}
.time-line {
  margin-top: 30px;
  position: relative;
}

.text-primary {
  color: #0194c0;
}
.header {
  padding: 100px 0px 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.circle {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #bbb;
  color: #707070;
  cursor: pointer;
}
.primary {
  background: #0194c0;
  color: #fff;
  border: 1px solid #0194c0;
}
.line {
  background: #bbb;
  width: 119px;
  height: 2px;
  top: 14px;
  right: 90px;
  position: absolute;
}
.line-1 {
  left: 90px;
}
.line-2 {
  right: 90px;
}
</style>