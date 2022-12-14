<template>
  <div class="sys-flex-center">
    <div class="sys-card color-707070">
      <div class="container-body">
        <div class="table-body mb-50">
          <div class="form-group company-name-group">
            <div class="form-label company-name">
              <div><span class="imperative">会社名/団体名</span></div>
              <div><span class="imperative">ふりがな</span></div>
            </div>
            <div class="form-input d-flex">
              <b-form-select
                v-model="userInfor.selectData_1"
                :options="authorityOptions"
                class="mr-20 select-square"
              />
              <div class="width-80">
                <b-form-input
                  v-model="userInfor.value_1"
                  placeholder="例：PaylessGate"
                  class="mb-20"
                ></b-form-input>
                <b-form-input placeholder="例：ぺいれすげーと"></b-form-input>
              </div>
              <b-form-select
                v-model="userInfor.selectData_2"
                :options="authorityOptions"
                class="ml-20 select-square"
              />
            </div>
          </div>

          <div class="form-group room-group">
            <div class="form-label room">Company Name in English</div>
            <div class="form-input j-c-sb d-flex align-items-center">
              <b-form-input
                v-model="userInfor.companyEnglishName"
                placeholder="PaylessGate Co., Ltd."
              ></b-form-input>
            </div>
          </div>
          <div class="form-group room-group">
            <div class="form-label room"></div>
            <div class="form-input j-c-sb d-flex align-items-center">
              <b-form-checkbox size="lg"></b-form-checkbox>
              <div>英語名の表記は不明</div>
            </div>
          </div>

          <div class="form-group room-group">
            <div class="form-label room">
              <span class="imperative">部署</span>
            </div>
            <div class="form-input j-c-sb d-flex align-items-center">
              <div class="mr-50">
                <div>
                  <b-form-input
                    v-model="userInfor.value_3"
                    placeholder="営業部"
                  ></b-form-input>
                </div>
              </div>
              <div class="width-38 d-flex align-items-center">
                <div class="width-50"><span class="imperative">役職</span></div>
                <div>
                  <b-form-input
                    v-model="userInfor.value_4"
                    placeholder="部長"
                  ></b-form-input>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group persion-name-group">
            <div class="form-label">
              <span class="imperative">氏名</span>
            </div>
            <div class="form-input d-flex j-c-sb align-items-center">
              <div class="d-flex align-items-center mr-50">
                <div class="ml-am-50 width-50">姓</div>
                <div>
                  <b-form-input
                    v-model="userInfor.value_5"
                    placeholder="例：山田"
                  ></b-form-input>
                </div>
              </div>
              <div class="width-38 d-flex align-items-center">
                <div class="width-50">名</div>
                <div>
                  <b-form-input
                    v-model="userInfor.alue_6"
                    placeholder="例：太郎"
                  >
                  </b-form-input>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group furigana-group">
            <div class="form-label Furigana">
              <span class="imperative">Furigana</span>
            </div>
            <div class="form-input d-flex j-c-sb align-items-center">
              <div class="d-flex align-items-center mr-50">
                <div class="ml-am-50 width-50">せい</div>
                <div class="">
                  <b-form-input
                    v-model="userInfor.value_7"
                    placeholder="例：やまだ"
                  ></b-form-input>
                </div>
              </div>
              <div class="width-38 d-flex align-items-center">
                <div class="width-50">めい</div>
                <div>
                  <b-form-input
                    v-model="userInfor.value_8"
                    placeholder="例：たろう"
                  ></b-form-input>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group furigana-group">
            <div class="form-label Furigana">Name</div>
            <div class="form-input d-flex j-c-sb align-items-center">
              <div class="d-flex align-items-center mr-50">
                <div class="ml-am-100 width-100">Family Name</div>
                <div class="">
                  <b-form-input
                    v-model="userInfor.familyName"
                    placeholder=""
                  ></b-form-input>
                </div>
              </div>
              <div class="width-60 d-flex align-items-center">
                <div class="width-104">Given Name</div>
                <div>
                  <b-form-input
                    v-model="userInfor.givenName"
                    placeholder=""
                  ></b-form-input>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group align-items-center">
            <div class="form-label">
              <span class="imperative">郵便番号</span>
            </div>
            <div class="form-input j-c-sb d-flex">
              <b-form-input
                v-model="userInfor.value_11"
                placeholder="例; 100-0000"
                class="zip-code"
              ></b-form-input>
              <div class="province d-flex align-items-center">
                <div class="form-label">
                  <span class="imperative">都道府県</span>
                </div>
                <div class="form-input">
                  <b-form-select
                    v-model="userInfor.selectData_3"
                    :options="provinceList"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="form-group autonomous-city">
            <div class="form-label">
              <span class="imperative">市区町村</span>
            </div>
            <div class="form-input">
              <b-form-input
                v-model="userInfor.value_12"
                placeholder="例：新宿区新宿"
              ></b-form-input>
            </div>
          </div>

          <div class="form-group address">
            <div class="form-label">
              <span class="imperative">番地</span>
            </div>
            <div class="form-input">
              <b-form-input
                v-model="userInfor.value_13"
                placeholder="例：１番１号"
              ></b-form-input>
            </div>
          </div>

          <div class="form-group building">
            <div class="form-label">ビル・建物名・階数</div>
            <div class="form-input">
              <b-form-input
                v-model="userInfor.address"
                placeholder="例: PaylessGateビル2階"
              ></b-form-input>
            </div>
          </div>

          <div class="form-group">
            <div class="form-label phone">
              <span class="imperative">電話番号</span>
            </div>
            <div class="form-input d-flex align-items-center">
              <b-form-input
                v-model="userInfor.value_15"
                placeholder="03"
                class="width-104"
              ></b-form-input>
              <span class="line"></span>
              <b-form-input
                v-model="userInfor.value_16"
                placeholder="1234"
                class="width-104"
              ></b-form-input>
              <span class="line"></span>
              <b-form-input
                v-model="userInfor.value_17"
                placeholder="5678"
                class="width-104"
              ></b-form-input>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label phone-table">携帯電話番号</div>
            <div class="form-input d-flex align-items-center">
              <b-form-input
                v-model="userInfor.phone_1"
                placeholder="080"
                class="width-104"
              ></b-form-input>
              <span class="line"></span>
              <b-form-input
                v-model="userInfor.phone_2"
                placeholder="1234"
                class="width-104"
              ></b-form-input>
              <span class="line"></span>
              <b-form-input
                v-model="userInfor.phone_3"
                placeholder="5678"
                class="width-104"
              ></b-form-input>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label fax">
              <span class="">FAX</span>
            </div>
            <div class="form-input d-flex align-items-center">
              <b-form-input
                v-model="userInfor.fax_1"
                placeholder="03"
                class="width-104 mr-40"
              ></b-form-input>
              <b-form-input
                v-model="userInfor.fax_2"
                placeholder="1234"
                class="width-104 mr-40"
              ></b-form-input>
              <b-form-input
                v-model="userInfor.fax_3"
                placeholder="5678"
                class="width-104"
              ></b-form-input>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label fax">
              <span class="imperative">メールアドレス</span>
            </div>
            <div class="form-input">
              <b-form-input
                v-model="userInfor.value_24"
                placeholder="例：info@paylessgate.com"
              ></b-form-input>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <b-button variant="primary" @click="next">次へ</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import listProvince from '@/enum/province'
export default {
  name: 'ConfirmVisitorInformation',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      userInfor: {
        value_1: '',
        companyEnglishName: '',
        value_3: '',
        value_4: '',
        value_5: '',
        value_7: '',
        value_8: '',
        familyName: '',
        givenName: '',
        value_11: '',
        value_12: '',
        value_13: '',
        address: '',
        value_15: '',
        value_16: '',
        value_17: '',
        phone_1: '',
        phone_2: '',
        phone_3: '',
        fax_1: '',
        fax_2: '',
        fax_3: '',
        value_24: '',
        selectData_1: '1',
        selectData_2: '1',
        selectData_3: '1',
      },
      authorityOptions: [
        { value: '1', text: '株式会社' },
        { value: '2', text: '有限会社' },
        { value: '3', text: '合同会社' },
        { value: '4', text: '合名会社' },
        { value: '5', text: '合資会社' },
      ],
      provinceList: listProvince,
    }
  },
  created() {
    if (this.data) {
      this.userInfor = this.data
    }
  },
  methods: {
    makeToast(variant = null, message = 'Success') {
      this.$bvToast.toast(message, {
        title: 'Message',
        variant,
        solid: true,
      })
    },
    next() {
      if (
        this.userInfor.value_1 &&
        this.userInfor.value_3 &&
        this.userInfor.value_4 &&
        this.userInfor.value_5 &&
        this.userInfor.value_7 &&
        this.userInfor.value_8 &&
        this.userInfor.value_11 &&
        this.userInfor.value_12 &&
        this.userInfor.value_13 &&
        this.userInfor.value_15 &&
        this.userInfor.value_16 &&
        this.userInfor.value_17 &&
        this.userInfor.value_24
      )
        this.$emit('showPage', 2, this.userInfor)
      else {
        const message = '必須項目に入力してください。'
        this.makeToast(null, message)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.sys-card {
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mb-20 {
  margin-bottom: 20px;
}
.width-50 {
  width: 50px;
}
.width-38 {
  width: 38%;
}
.width-162 {
  width: 162px;
}
.width-104 {
  width: 104px;
}
.mb-25 {
  margin-bottom: 25px;
}
.mb-10 {
  margin-bottom: 10px;
}
.width-90 {
  width: 130px;
}
.mr-20 {
  margin-right: 20px;
}
.mb-50 {
  margin-bottom: 50px;
}
.mr-35 {
  margin-right: 35px;
  width: 200px;
}
.mr-40 {
  margin-right: 40px;
}
.mt-53 {
  margin-top: 53px;
}
.my-20 {
  margin: 20px 0px;
}
.ml-20 {
  margin-left: 20px;
}
.ml-am-50 {
  margin-left: -50px;
}
.title {
  color: #000;
}

.line {
  width: 19px;
  height: 2px;
  background: #bababb;
  margin: 0px 10px;
}
.container-body {
  width: 1133px;
  .btn-primary {
    width: 183px;
    height: 49px;
    border-radius: 30px;
  }
  .table-body {
    padding: 0px 69px;
    .form-group {
      display: flex;
      .btn-outline-secondary {
        width: 133px;
        height: 27px;
        line-height: 14px;
        border-radius: 5px;
        font-size: 13px;
      }

      .form-label {
        width: 20%;
        margin-right: 30px;
      }
      .form-input {
        width: 80%;
      }
      .company-name {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;
      }
      .zip-code {
        max-width: 221px;
        margin-right: 50px;
      }
      .province {
        width: 38%;
        .form-label {
          width: 100%;
        }
        select {
          width: 195px;
          height: 38px;
          border-radius: 5px;
          border: 1px solid #bababb;
        }
      }
      .select-square {
        height: 96px;
        width: 117px;
        border: 1px solid #bababb;
        border-radius: 5px;
      }
    }
  }
}
.ml-am-100 {
  margin-left: -100px;
}
.width-100px {
  width: 100px;
}
</style>