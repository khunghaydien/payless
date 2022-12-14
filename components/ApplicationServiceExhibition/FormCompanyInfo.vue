<template>
  <div class="form-compayny-info">
    <div class="header">
      <div class="title">ITサービス展示会へのお申込み (内容確認)</div>
      <div class="time-line d-flex">
        <div class="step step-one">
          <div
            class="circle"
            :class="{ primary: step >= 1 }"
            @click="currentStep(1)"
          >
            1
          </div>
          <div class="text" :class="{ 'text-primary': step >= 1 }">
            来場者情報確認
          </div>
        </div>
        <div class="line line-1" :class="{ primary: step >= 2 }"></div>
        <div class="step step-two">
          <div
            class="circle"
            :class="{ primary: step >= 2 }"
            @click="currentStep(2)"
          >
            2
          </div>
          <div class="text" :class="{ 'text-primary': step >= 2 }">QR読込</div>
        </div>
        <div class="line line-2" :class="{ primary: step >= 3 }"></div>
        <div class="step step-three">
          <div
            class="circle"
            :class="{ primary: step >= 3 }"
            @click="currentStep(3)"
          >
            3
          </div>
          <div class="text" :class="{ 'text-primary': step >= 3 }">
            アプリインストール
          </div>
        </div>
      </div>
    </div>
    <body>
      <ConfirmVisitorInformation
        v-if="step == 1 && pageNumber == 1"
        @showPage="showPageNumber"
      ></ConfirmVisitorInformation>
      <ApplicationSettingTwo
        v-if="step == 1 && pageNumber == 2"
        @showPage="showPageNumber"
      ></ApplicationSettingTwo>
      <QrCode v-if="step == 2"></QrCode
      ><ApplicationSetting
        v-if="step == 1 && pageNumber == 3"
        @showPage="showPageNumber"
      ></ApplicationSetting>
    </body>
    <footer class="sys-flex-center">
      <div>
        <div class="d-flex color-707070 mt-40 mb-50">
          ご利用者ヘルプデスク9:30〜18:00(土日・祝日を除く) E-mail: helpdesk@? ?
          ? TEL: 03-XXXX-XXXX
        </div>
        <div class="d-flex color-707070 mt-40 mb-50">
          事業概要. ご利用方法. ご利用にあたって. 利用規約.
          個人情報保護ポリシー. 連絡先. 関連リンク. サイトマップ
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import ConfirmVisitorInformation from './ConfirmVisitorInformation.vue'
import ApplicationSettingTwo from './ApplicationSettingTwo.vue'
import ApplicationSetting from './ApplicationSetting.vue'
import QrCode from './QrCode.vue'

export default {
  name: 'FormCompanyInfo',
  components: {
    ConfirmVisitorInformation,
    ApplicationSettingTwo,
    ApplicationSetting,
    QrCode,
  },
  data() {
    return {
      step: 1,
      pageNumber: 1,
      dataForm_1: {},
      dataForm_2: {},
    }
  },
  created() {},

  methods: {
    currentStep(val) {
      this.step = val
    },
    showPageNumber(showPage, data) {
      this[`dataForm_${showPage}`] = data
      console.log(this[`dataForm_${showPage}`])
      this.pageNumber = showPage
      this.step = 1
    },
  },
}
</script>
<style lang="scss" scoped>
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
  padding: 50px 0px;
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
body {
  background: #f7f8f9;
}
</style>