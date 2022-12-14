<template>
  <div class="read-qr sys-flex-center">
    <div class="sys-card">
      <div class="container d-flex align-items-center justify-content-center">
        <div class="title d-flex align-items-center justify-content-center">
          <div>スマートフォンでQRコードをスキャンし</div>
          <div>アプリをインストールして</div>
          <div>来場登録を完了させてください</div>
        </div>
        <div class="img-qr">
          <img src="@/assets/png/qr.png" alt="" />
          <div class="cont">https://www.exhibition.com/</div>
        </div>
        <div class="content cursor-pointer" @click="readQR">
          ご来場までの流れ
        </div>
        <div class="container-img d-flex align-items-center">
          <div class="img d-flex align-items-center">
            <div class="image">
              <img src="@/assets/png/phone_step_1.png" alt="" />
            </div>
            <div class="cont">スマホにアプリを 事前インストール</div>
          </div>
          <img class="next next-1" src="@/assets/png/arrow.png" alt="" />
          <div class="img d-flex align-items-center">
            <div class="image"><img src="@/assets/png/house.png" alt="" /></div>
            <div class="cont">スマホを持って 当日来場</div>
          </div>
          <img class="next next-2" src="@/assets/png/arrow.png" alt="" />
          <div class="img d-flex align-items-center">
            <div class="image">
              <img src="@/assets/png/phone_step_2.png" alt="" />
            </div>
            <div class="cont">スマホタッチで らくらく入場</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    readQR() {
      this.$router.push('/read-qr')
    },
  },
}
</script>
<style lang="scss" scoped>
.sys-card {
  max-width: 700px;
}
.container {
  flex-direction: column;
  padding: 65px;
  .title {
    color: #f60616;
    font-size: 24px;
    flex-direction: column;
  }
  .content {
    color: #0194c0;
    margin-bottom: 27px;
    margin-top: 42px;
  }
  .container-img {
    position: relative;
    .img {
      flex-direction: column;
      width: 130px;
      margin-right: 40px;
      .image {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 4px solid #0194c0;
        border-radius: 100%;
        width: 74px;
        height: 74px;
      }
      .cont {
        text-align: center;
        color: #0194c0;
        margin-top: 20px;
      }
    }
    .img:last-child {
      margin-right: unset;
    }
    .next {
      position: absolute;
      top: 30px;
    }
    .next-2 {
      left: 145px;
    }
    .next-1 {
      right: 145px;
    }
  }
}
</style>