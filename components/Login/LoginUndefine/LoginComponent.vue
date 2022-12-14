<template>
  <div class="sys-flex-center">
    <div class="login-container width-100">
      <div class="sys-flex-center">
        <div class="login-header sys-flex-center sys-flex-column">
          <div class="text-primary font-size-30 mb-20">ものづくりEXPO 2022</div>
          <div class="mb-10">2022年 10月26日（水）・27日（木）・28日（金）</div>
          <div class="mb-10">
            会場：東京国際展示場（東京ビックサイト）東1-3ホール
          </div>
          <div class="mb-10">「ものづくりEXPO 2022展示会」は</div>
          <div class="sys-flex-center">
            <div class="login-img">
              <img src="@/assets/png/exhibition-png.png" alt="" />
            </div>
            <div class="mb-6">
              を使用しお客様の展示会参加をサポートしています
            </div>
          </div>
        </div>
      </div>
      <div class="sys-flex-center">
        <div class="sys-flex-center">
          <div class="form-container">
            <div class="sys-flex-center height-100">
              <div>
                <div class="sys-flex-center">
                  <img src="@/assets/png/exhibition-png.png" alt="" />
                </div>
                <form class="mb-50" @submit.prevent="setLogin">
                  <b-form-input
                    v-model="userName"
                    :class="{ 'error-input': error }"
                    class="pl-4 login-input email-input"
                    placeholder="ご登録の電話番号をご入力ください"
                  ></b-form-input>
                  <div v-if="error" class="error login-input mt-20">
                    エラー文言エラー文言エラー文言エラー文言エラー文言エラー文言
                    エラー文言エラー文言エラー文言エラー文言
                  </div>
                  <div class="d-flex justify-content-center">
                    <b-button
                      type="submit"
                      variant="primary"
                      class="mt-4 login-button"
                      >ログイン</b-button
                    >
                  </div>
                </form>
                <div class="text-decoration-under sys-flex-center">
                  新規登録はこちら
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      userName: '',
      error: false,
    }
  },
  created() {},
  methods: {
    setLogin() {
      if (isNaN(this.userName)) {
        this.$router.push('login-accuracy')
      } else {
        this.error = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.error {
  color: #f60616;
}
.mt-20 {
  margin-top: 20px !important;
}
.error-input {
  border: 1px solid #f60616;
}
.login-container {
  min-height: calc(100vh - 80px);
}
.mr-30 {
  margin-right: 30px;
}
.login-header {
  margin: 40px 0px;
}
.mb-6 {
  margin-bottom: 6px;
}
.login-button {
  width: 241px;
  height: 50px;
}
.font-size-18 {
  font-size: 18px;
}
.form-container {
  width: 680px;
  height: 418px;
  box-shadow: 0 0 5px 1px #f2eff0;
  border-radius: 10px;
}
.font-size-30 {
  font-size: 30px;
}
.login-input {
  width: 358px;
  height: 50px;
  margin: auto;
}

::placeholder {
  color: #bababa;
  font-size: 14px;
}

.login-text {
  font-size: 15px;
}
</style>
