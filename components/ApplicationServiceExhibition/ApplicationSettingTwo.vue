<template>
  <div class="sys-flex-center">
    <div class="sys-card color-707070">
      <div class="container-body">
        <div class="table-body mb-50">
          <div class="form-group industry-classification-group">
            <div class="form-label">
              <div><span class="imperative">業種分類</span></div>
            </div>
            <div class="form-input d-flex">
              <select
                class="mr-20 select-input"
                placeholder="選択してください"
                name=""
              ></select>
            </div>
          </div>

          <div class="form-group industry-details-group">
            <div class="form-label">
              <div><span class="imperative">業種詳細</span></div>
            </div>
            <div class="form-input d-flex">
              <select
                class="mr-20 select-input"
                placeholder="選択してください"
                name=""
              ></select>
            </div>
          </div>

          <div class="form-group occupation-classification-group">
            <div class="form-label">
              <div><span class="imperative">職種分類</span></div>
            </div>
            <div class="form-input d-flex">
              <select
                class="mr-20 select-input"
                placeholder="選択してください"
                name=""
              ></select>
            </div>
          </div>

          <div class="form-group job-details-group">
            <div class="form-label">
              <div><span class="imperative">職種詳細</span></div>
            </div>
            <div class="form-input d-flex">
              <select
                class="mr-20 select-input"
                placeholder="選択してください"
                name=""
              ></select>
            </div>
          </div>

          <div class="form-group job-details-group">
            <div class="form-label">
              <div><span class="imperative">役職クラス</span></div>
            </div>
            <div class="form-input d-flex">
              <select
                class="mr-20 select-input"
                placeholder="選択してください"
                name=""
              ></select>
            </div>
          </div>

          <div class="form-group split-list">
            <div class="form-label">
              <span class="imperative">上場区分</span>
            </div>
            <div class="form-input">
              <div class="d-flex">
                <div class="mr-35">
                  <input
                    id="radio1"
                    type="radio"
                    name="split_list"
                    v-model="formData.value_1"
                    size="lg"
                    value="上場"
                  />
                  <label for="radio1">上場</label>
                </div>
                <div>
                  <input
                    id="radio2"
                    type="radio"
                    size="lg"
                    v-model="formData.value_1"
                    name="split_list"
                    value="未上場"
                  />
                  <label for="radio2">未上場</label>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group capital">
            <div class="form-label"><span class="imperative">資本金</span></div>
            <div class="form-input">
              <div class="d-flex">
                <div class="width-120">
                  <input
                    v-model="formData.value_2"
                    id="radio3"
                    type="radio"
                    size="lg"
                    name="capital"
                    value="1000万円未満"
                  />
                  <label for="radio3">1000万円未満</label>
                </div>
                <div class="width-120">
                  <input
                    id="radio4"
                    v-model="formData.value_2"
                    type="radio"
                    size="lg"
                    name="capital"
                    value="3000万円未満"
                  />
                  <label for="radio4">3000万円未満</label>
                </div>
                <div class="width-120">
                  <input
                    id="radio5"
                    type="radio"
                    v-model="formData.value_2"
                    size="lg"
                    name="capital"
                    value="1億円未満"
                  />
                  <label for="radio5">1億円未満</label>
                </div>
                <div class="width-120">
                  <input
                    id="radio6"
                    type="radio"
                    size="lg"
                    name="capital"
                    value="10億円未満"
                  />
                  <label for="radio6">10億円未満</label>
                </div>
              </div>
              <div class="d-flex">
                <div class="width-120">
                  <input
                    id="radio7"
                    size="lg"
                    type="radio"
                    v-model="formData.value_2"
                    name="capital"
                    value="50億円未満"
                  />
                  <label for="radio7">50億円未満</label>
                </div>
                <div class="width-120">
                  <input
                    id="radio8"
                    size="lg"
                    type="radio"
                    name="capital"
                    v-model="formData.value_2"
                    value="50億円以上"
                  />
                  <label for="radio8">50億円以上</label>
                </div>
                <div class="width-120">
                  <input
                    id="radio9"
                    size="lg"
                    type="radio"
                    v-model="formData.value_2"
                    name="capital"
                    value="不明"
                  />
                  <label for="radio9">不明</label>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group number-employees">
            <div class="form-label">
              <span class="imperative">従業員数</span>
            </div>
            <div class="form-input">
              <div class="d-flex">
                <div class="width-120">
                  <input
                    id="radio16"
                    v-model="formData.value_3"
                    size="lg"
                    type="radio"
                    name="number_employees"
                    value="1-20人"
                  />
                  <label for="radio16">1-20人</label>
                </div>
                <div class="width-120">
                  <input
                    id="radio10"
                    size="lg"
                    v-model="formData.value_3"
                    type="radio"
                    name="number_employees"
                    value="21-50人"
                  />
                  <label for="radio10">21-50人</label>
                </div>

                <div class="width-120">
                  <input
                    id="radio11"
                    type="radio"
                    v-model="formData.value_3"
                    size="lg"
                    name="number_employees"
                    value="51-100人"
                  />
                  <label for="radio11">51-100人</label>
                </div>

                <div>
                  <input
                    id="radio12"
                    type="radio"
                    v-model="formData.value_3"
                    size="lg"
                    name="number_employees"
                    value="101-3000人"
                  />
                  <label for="radio12">101-3000人</label>
                </div>
              </div>
              <div class="d-flex">
                <div class="width-120">
                  <input
                    id="radio13"
                    v-model="formData.value_3"
                    size="lg"
                    type="radio"
                    name="number_employees"
                    value="301-1000人"
                  />
                  <label for="radio13">301-1000人</label>
                </div>

                <div class="width-120">
                  <input
                    id="radio14"
                    type="radio"
                    v-model="formData.value_3"
                    size="lg"
                    name="number_employees"
                    value="1001人以上"
                  />
                  <label for="radio14">1001人以上</label>
                </div>

                <div class="width-120">
                  <input
                    id="radio15"
                    type="radio"
                    v-model="formData.value_3"
                    size="lg"
                    name="number_employees"
                    value="不明"
                  />
                  <label for="radio15">不明</label>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group paying-participation-level">
            <div class="form-label">
              <span class="imperative">決済関与度合</span>
            </div>
            <div class="form-input">
              <div class="mb-20">
                あなたは該当商品サービスの仕入・購買に際して、どのように関与されますか？
              </div>
              <div class="d-flex mb-10">
                <div class="width-295">
                  <input
                    id="radio17"
                    v-model="formData.value_4"
                    size="lg"
                    type="radio"
                    name="paying_participation_level"
                    value="自分で決定する"
                  />
                  <label for="radio17">自分で決定する</label>
                </div>
                <div class="width-295">
                  <input
                    id="radio18"
                    type="radio"
                    v-model="formData.value_4"
                    size="lg"
                    name="paying_participation_level"
                    value="決定する際に中心的な役割を果たす"
                  />
                  <label for="radio18">決定する際に中心的な役割を果たす</label>
                </div>
              </div>
              <div class="d-flex">
                <div class="width-295">
                  <input
                    id="radio19"
                    size="lg"
                    v-model="formData.value_4"
                    type="radio"
                    name="paying_participation_level"
                    value="決定する際に検討メンバーになる"
                  />
                  <label for="radio19">決定する際に検討メンバーになる</label>
                </div>
                <div class="width-295">
                  <input
                    id="radio20"
                    type="radio"
                    v-model="formData.value_4"
                    size="lg"
                    name="paying_participation_level"
                    value="関与していない"
                  />
                  <label for="radio20">関与していない</label>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group purpose-of-the-visit">
            <div class="form-label">
              <div><span class="imperative">来場目的</span></div>
            </div>
            <div class="form-input d-flex">
              <select class="mr-20 select-input" name=""></select>
            </div>
          </div>

          <div class="form-group smartphone-ownership">
            <div class="form-label">
              <span class="imperative">スマートフォン保有状況</span>
            </div>
            <div class="form-input">
              <div class="d-flex mb-10">
                <div class="width-295">
                  <input
                    id="radio21"
                    size="lg"
                    v-model="formData.value_5"
                    type="radio"
                    name="smartphone_ownership"
                    value="スマートフォンを保有している"
                  />
                  <label for="radio21">スマートフォンを保有している</label>
                </div>
                <div class="width-295">
                  <input
                    id="radio22"
                    size="lg"
                    v-model="formData.value_5"
                    type="radio"
                    name="smartphone_ownership"
                    value="スマートフォンを保有していない"
                  />
                  <label for="radio22">スマートフォンを保有していない</label>
                </div>
              </div>
              <div class="d-flex">
                <div class="width-295">
                  <input
                    id="radio23"
                    size="lg"
                    type="radio"
                    v-model="formData.value_5"
                    name="smartphone_ownership"
                    value="今回は代理としての申込である"
                  />
                  <label for="radio23">今回は代理としての申込である</label>
                </div>
                <div>※展示会受付をスマートフォンで行うためお聞きしています</div>
              </div>
            </div>
          </div>

          <div class="form-group ask-for-instructions">
            <div class="form-label">
              <span class="imperative">案内希望</span>
            </div>
            <div class="form-input d-flex">
              <input type="checkbox" class="checkbox-24 mr-20" />
              <div>
                <div class="mb-10">
                  今後、DMや電子メールなどにより、弊社の展示会の案内をさせていただきます。
                </div>

                <div>案内を希望されない場合は、チェックをお願いします。</div>
              </div>
            </div>
          </div>
        </div>

        <div class="sys-flex-center mb-20">
          <div class="mr-50">
            <b-form-input placeholder="http://www" class="mb-20"></b-form-input>
            <div class="sys-align-center">
              <b-form-checkbox size="lg"></b-form-checkbox>
              <div>来場者規定に同意いたします</div>
            </div>
          </div>
          <div>
            <b-form-input placeholder="http://www" class="mb-20"></b-form-input>
            <div class="sys-align-center">
              <b-form-checkbox size="lg"></b-form-checkbox>
              <div>プライバシーポリシーに同意いたします</div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <b-button variant="outline-primary" class="mr-20" @click="back"
            >戻る</b-button
          >
          <b-button variant="primary" @click="toAnwser">回答する</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ApplicationSettingTwo',
  props: {
    data: { type: Object, default: () => {} },
  },
  data() {
    return {
      formData: {
        value_1: '',
        value_2: '',
        value_3: '',
        value_4: '',
        value_5: '',
      },
    }
  },
  created() {
    if (this.data) {
      this.formData = this.data
    }
  },
  methods: {
    back() {
      this.$emit('showPage', 1, this.formData)
    },
    makeToast(variant = null, message = 'Success') {
      this.$bvToast.toast(message, {
        title: 'Message',
        variant,
        solid: true,
      })
    },
    toAnwser() {
      if (
        this.formData.value_1 &&
        this.formData.value_2 &&
        this.formData.value_3 &&
        this.formData.value_4 &&
        this.formData.value_5
      ) {
        this.$emit('showPage', 3, this.formData)
      } else {
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
.width-120 {
  width: 135px;
}
.width-50 {
  width: 50px;
}
.mr-35 {
  margin-right: 35px;
}
.width-50p {
  width: 50%;
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
.mb-20 {
  margin-bottom: 20px;
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
.width-295 {
  width: 295px;
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
  .btn-primary,
  .btn-outline-primary {
    width: 183px;
    height: 49px;
    border-radius: 30px;
  }

  .table-body {
    padding: 0px 69px;
    .form-group {
      display: flex;
      .select-input {
        width: 100%;
        height: 43px;
        border-radius: 5px;
        border: 1px solid #bababb;
      }
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
        max-width: 242px;
        margin-right: 40px;
      }
      .province {
        width: 50%;
        select {
          width: 192px;
          height: 38px;
          border-radius: 5px;
          border: 1px solid #bababb;
        }
      }
      .select-square {
        width: 30%;
        width: 117px;
        border: 1px solid #bababb;
        border-radius: 5px;
      }
    }
  }
}
</style>