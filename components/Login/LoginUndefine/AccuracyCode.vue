<template>
  <div class="sys-flex-center">
    <div class="sys-card">
      <div class="sys-flex-center sys-flex-column">
        <div class="font-size-27 mb-30">認証コードを入力</div>
        <div class="sys-flex-center sys-flex-column mb-20">
          <div class="mb-10">08012345678宛にSMSを送信しました。</div>
          <div>メッセージに記載された6桁の数字を入力ください。</div>
        </div>
        <div class="sys-flex-center mb-20">
          <b-form-input
            v-for="(item, index) in listAccuracyCode"
            :key="index"
            ref="items"
            v-model="item.value"
            maxlength="1"
            class="accuracy-code"
          ></b-form-input>
        </div>
        <div class="mb-30">
          <b-button variant="secondary" @click="setLogin">送信</b-button>
        </div>
        <div class="text-decoration-under">認証コードを再送する</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listAccuracyCode: [
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
      ],
      validate: false,
    }
  },

  watch: {
    listAccuracyCode: {
      deep: true,
      immediate: true,
      handler(newVal) {
        this.validate = true
        newVal.forEach((item) => {
          if (item.value === '' || item.value === null) {
            this.validate = false
          }
        })
      },
    },
  },

  mounted() {
    this.$refs.items[0].focus()
  },

  updated() {
    const listAccuracyCode = this.$refs.items
    for (let i = 0; i < listAccuracyCode.length - 1; i++) {
      if (listAccuracyCode[i].value) {
        listAccuracyCode[i + 1].focus()
      }
    }
  },

  methods: {
    setLogin() {
      if (this.validate) {
        this.$router.push('exhibition-list')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.sys-card {
  width: 700px;
  padding: 80px 0px 50px 0px;
  margin: 200px auto;
}

.accuracy-code {
  width: 46px;
  height: 49px;
  margin-right: 20px;
  &:last-child {
    margin-right: unset;
  }
}
.btn-secondary {
  width: 193px;
  height: 50px;
  line-height: 16px;
  background: #707070 !important;
  color: #000 !important;
}
.font-size-27 {
  font-size: 27px;
}
.mb-30 {
  margin-bottom: 30px;
}
</style>