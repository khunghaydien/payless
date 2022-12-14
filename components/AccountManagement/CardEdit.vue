<template>
  <div>
    <div class="header-title">基本情報</div>
    <div class="sys-card">
      <div class="form-group width-100 sys-align-center">
        <div class="mb-10 col-3">氏名</div>
        <div class="col-9 sys-align-center sys-flex-space-between">
          <div class="sys-align-center position-rel">
            <div class="position-abs">姓</div>
            <b-form-input v-model="card.fullname.split(' ')[0]"></b-form-input>
          </div>
          <div class="sys-align-center position-rel">
            <div class="position-abs">名</div>
            <b-form-input v-model="card.fullname.split(' ')[1]"></b-form-input>
          </div>
        </div>
      </div>

      <div class="form-group width-100 sys-align-center">
        <div class="mb-10 col-3">会社名</div>
        <div class="col-9">
          <b-form-input v-model="card.companyName"></b-form-input>
        </div>
      </div>

      <div class="form-group width-100 sys-align-center">
        <div class="mb-10 col-3">部署名</div>
        <div class="col-9">
          <b-form-input v-model="card.companyEnglishName"></b-form-input>
        </div>
      </div>

      <div class="form-group width-100 sys-align-center">
        <div class="mb-10 col-3">役職名</div>
        <div class="col-9">
          <b-form-input v-model="card.position"></b-form-input>
        </div>
      </div>

      <div class="form-group width-100 sys-align-center mb-40">
        <div class="mb-10 col-3">電話番号</div>
        <div class="sys-align-center col-9">
          <b-form-input
            v-model="card.mobiPhone.split('-')[0]"
            placeholder="03"
            class="col-3"
          ></b-form-input>
          <div class="line"></div>
          <b-form-input
            v-model="card.mobiPhone.split('-')[1]"
            placeholder="1234"
            class="col-3"
          ></b-form-input>
          <div class="line"></div>
          <b-form-input
            v-model="card.mobiPhone.split('-')[2]"
            placeholder="5698"
            class="col-3"
          ></b-form-input>
        </div>
      </div>
      <div class="form-group width-100 sys-align-center mb-40">
        <div class="mb-10 col-3">携帯電話番号</div>
        <div class="sys-align-center col-9">
          <b-form-input
            v-model="card.tablePhone.split('-')[0]"
            placeholder="080"
            class="col-3"
          ></b-form-input>
          <div class="line"></div>
          <b-form-input
            v-model="card.tablePhone.split('-')[1]"
            placeholder="1234"
            class="col-3"
          ></b-form-input>
          <div class="line"></div>
          <b-form-input
            v-model="card.tablePhone.split('-')[2]"
            placeholder="5698"
            class="col-3"
          ></b-form-input>
        </div>
      </div>

      <div class="form-group width-100 sys-align-center">
        <div class="mb-10 col-3">メールアドレス</div>
        <div class="col-9">
          <b-form-input
            v-model="card.email"
            placeholder="例：info@paylessgate.com"
          ></b-form-input>
        </div>
      </div>
      <div class="form-group width-100 sys-align-center">
        <div class="mb-10 col-3">郵便番号</div>
        <div class="col-9 sys-align-center sys-flex-space-between">
          <div class="sys-align-center position-rel">
            <b-form-input v-model="card.zipCode"></b-form-input>
          </div>
          <div class="sys-align-center position-rel">
            <div class="position-abs left-100">都道府県</div>
            <b-form-input v-model="card.province"></b-form-input>
          </div>
        </div>
      </div>
      <div class="form-group width-100 sys-align-center">
        <div class="mb-10 col-3">市区町村</div>
        <div class="col-9">
          <b-form-input v-model="card.autonomousCity"></b-form-input>
        </div>
      </div>
      <div class="form-group width-100 sys-align-center">
        <div class="mb-10 col-3">番地</div>
        <div class="col-9">
          <b-form-input v-model="card.homeNumber"></b-form-input>
        </div>
      </div>
      <div class="form-group width-100 sys-align-center">
        <div class="mb-10 col-3">ビル・建物名・階数</div>
        <div class="col-9">
          <b-form-input v-model="card.address"></b-form-input>
        </div>
      </div>

      <div class="form-group width-100 sys-align-center">
        <div class="mb-10 col-3">名刺の画像(表)</div>
        <div class="col-9">
          <div class="image-card mb-40 sys-flex-center">
            <img
              v-if="card.file_1 && card.file_1.file"
              :src="card.file_1.file"
              alt=""
            />
          </div>
          <div class="sys-align-center">
            <b-form-input
              v-model="card.file_1.fileName"
              class="input-primary col-9 mr-20"
              placeholder="ファイルを選択"
              @click="chooseFile(1)"
            ></b-form-input>
            <b-button variant="primary">アップロード</b-button>
          </div>
        </div>
      </div>
      <input
        id="inputFile"
        type="file"
        class="display-none"
        accept="image/*"
        @change="chooseImage"
      />
      <div class="form-group width-100 sys-align-center mb-40">
        <div class="mb-10 col-3">名刺の画像(裏)</div>
        <div class="col-9">
          <div class="image-card mb-40 sys-flex-center">
            <img
              v-if="card.file_2 && card.file_2.file"
              :src="card.file_2.file"
              alt=""
            />
          </div>
          <div class="sys-align-center">
            <b-form-input
              v-model="card.file_2.fileName"
              class="input-primary col-7 mr-20"
              placeholder="ファイルを選択"
              @click="chooseFile(2)"
            ></b-form-input>
            <b-button variant="primary">アップロード</b-button>
          </div>
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
      card: this.data,
      currentFile: 0,
    }
  },
  created() {},
  methods: {
    clear() {
      this.card = {
        fullname: '',
        companyName: '',
        companyEnglishName: '',
        position: '',
        mobiPhone: '',
        tablePhone: '',
        email: '',
        homeNumber: '',
        address: '',
        file_1: {
          file: '',
          fileName: '',
        },
        file_2: {
          file: '',
          fileName: '',
        },
      }
    },
    edit() {
      this.$emit('editCard', this.card)
    },
    chooseFile(val) {
      this.currentFile = val
      document.getElementById('inputFile').click()
    },
    chooseImage(e) {
      const file = e.target.files[0]
      this.card[`file_${this.currentFile}`].fileName = file.name
      this.card[`file_${this.currentFile}`].file = URL.createObjectURL(file)
    },
  },
}
</script>
<style lang="scss" scoped>
.sys-card {
  padding: 60px;
  .btn-primary {
    width: 183px;
    height: 49px;
    border-radius: 40px;
    line-height: 18px;
  }
  .form-group {
    .btn-primary {
      width: 150px;
      height: 37px;
      border-radius: 30px;
      line-height: 16px;
    }
  }
}

.mb-40 {
  margin-bottom: 40px;
}
.mr-20 {
  margin-right: 20px;
}
.line {
  margin: 0px 10px;
}
.position-abs {
  left: -50px;
}
.left-100 {
  left: -80px !important;
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
.input-primary {
  border: 1px solid #0194c0;
  color: #0194c0;
}

.input-primary::placeholder {
  color: #0194c0;
}
</style>