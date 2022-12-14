<template>
  <div class="sys-flex-center">
    <div class="sys-card color-707070">
      <div class="container-body">
        <div class="table-body mb-50">
          <div class="form-group company-name-group">
            <div class="form-label company-name">
              <div>会社名/団体名</div>
            </div>
            <div class="form-input d-flex">
              {{ companyInfo.companyName }}
            </div>
          </div>

          <div class="form-group company-name-group">
            <div class="form-label company-name">
              <div>ふりがな</div>
            </div>
            <div class="form-input d-flex">
              {{ companyInfo.companyName_1 }}
            </div>
          </div>
          <div class="form-group company-name-group">
            <div class="form-label company-name">
              <div>Company Name in English</div>
            </div>
            <div class="form-input d-flex">
              {{ companyInfo.companyEnglishName }}
            </div>
          </div>

          <div class="form-group room-group">
            <div class="form-label room color-707">部署</div>
            <div class="form-input j-c-sb d-flex align-items-center">
              <div class="mr-100">
                <div>{{ companyInfo.room }}</div>
              </div>
              <div class="width-60 d-flex align-items-center">
                <div class="width-104 color-707">役職</div>
                <div>{{ companyInfo.room_1 }}</div>
              </div>
            </div>
          </div>

          <div class="form-group persion-name-group">
            <div class="form-label">氏名</div>
            <div class="form-input d-flex j-c-sb align-items-center">
              <div class="d-flex align-items-center mr-100">
                <div class="ml-am-50 width-50 color-707">姓</div>
                <div>{{ companyInfo.persionName }}</div>
              </div>
              <div class="width-60 d-flex align-items-center">
                <div class="width-104 color-707">名</div>
                <div>{{ companyInfo.persionName_1 }}</div>
              </div>
            </div>
          </div>

          <div class="form-group furigana-group">
            <div class="form-label Furigana">ふりがな</div>
            <div class="form-input d-flex j-c-sb align-items-center">
              <div class="d-flex align-items-center mr-100">
                <div class="ml-am-50 width-50 color-707">せい</div>
                <div class="">
                  <div>{{ companyInfo.furigana }}</div>
                </div>
              </div>
              <div class="width-60 d-flex align-items-center">
                <div class="width-104 color-707">めい</div>
                <div>
                  <div>{{ companyInfo.furigana_1 }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group align-items-center">
            <div class="form-label">郵便番号</div>
            <div class="form-input j-c-sb d-flex">
              <div class="mr-100">{{ companyInfo.zipCode }}</div>
              <div class="width-60 d-flex align-items-center">
                <div class="width-104 color-707">都道府県</div>
                <div>
                  <div>{{ companyInfo.zipCode_1 }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group autonomous-city">
            <div class="form-label">市区町村</div>
            <div class="form-input">
              <div>{{ companyInfo.autonomousCity }}</div>
            </div>
          </div>

          <div class="form-group address">
            <div class="form-label">番地</div>
            <div class="form-input">
              <div>{{ companyInfo.address }}</div>
            </div>
          </div>

          <div class="form-group building">
            <div class="form-label">ビル・建物名・階数</div>
            <div class="form-input">
              <div>{{ companyInfo.building }}</div>
            </div>
          </div>

          <div class="form-group">
            <div class="form-label phone">電話番号</div>
            <div class="form-input">
              <div>{{ companyInfo.phone }}</div>
            </div>
          </div>

          <div class="form-group">
            <div class="form-label phone-table">携帯電話番号</div>
            <div class="form-input">
              <div>{{ companyInfo.phone_1 }}</div>
            </div>
          </div>

          <div class="form-group">
            <div class="form-label fax">FAX</div>
            <div class="form-input d-flex align-items-center">
              <div>{{ companyInfo.fax }}</div>
            </div>
          </div>

          <div class="form-group">
            <div class="form-label fax">メールアドレス</div>
            <div class="form-input">
              <div>{{ companyInfo.email }}</div>
            </div>
          </div>

          <div class="form-group industry-classification-group">
            <div class="form-label">
              <div>業種分類</div>
            </div>
            <div class="form-input d-flex">
              <div>{{ companyInfo.industryClassification }}</div>
            </div>
          </div>

          <div class="form-group industry-details-group">
            <div class="form-label">
              <div>業種詳細</div>
            </div>
            <div class="form-input d-flex">
              <div>{{ companyInfo.industryDetails }}</div>
            </div>
          </div>

          <div class="form-group occupation-classification-group">
            <div class="form-label">
              <div>職種分類</div>
            </div>
            <div class="form-input d-flex">
              <div>{{ companyInfo.occupationClassification }}</div>
            </div>
          </div>

          <div class="form-group job-details-group">
            <div class="form-label">
              <div>職種詳細</div>
            </div>
            <div class="form-input d-flex">
              <div>{{ companyInfo.jobDetails }}</div>
            </div>
          </div>

          <div class="form-group split-list">
            <div class="form-label">上場区分</div>
            <div class="form-input">
              <div>{{ companyInfo.splitList }}</div>
            </div>
          </div>

          <div class="form-group capital">
            <div class="form-label">売上高</div>
            <div class="form-input">
              <div>{{ companyInfo.numberSaler }}</div>
            </div>
          </div>

          <div class="form-group job-class">
            <div class="form-label">
              <div>社員数</div>
            </div>
            <div class="form-input">
              <div>{{ companyInfo.numberEmployees }}</div>
            </div>
          </div>

          <div class="form-group job-class">
            <div class="form-label">
              <div>決裁関与度合</div>
            </div>
            <div class="form-input">
              <div>{{ companyInfo.undefine_1 }}</div>
            </div>
          </div>

          <div class="form-group purpose-of-the-visit">
            <div class="form-label">
              <div>来場目的</div>
            </div>
            <div class="form-input d-flex">
              <div>{{ companyInfo.purposeOfTheVisit }}</div>
            </div>
          </div>
          <div class="form-group smartphone-ownership">
            <div class="form-label">スマートフォン保有状況</div>
            <div class="form-input">
              <div>{{ companyInfo.smartphoneOwnership }}</div>
            </div>
          </div>
          <div class="form-group ask-for-instructions">
            <div class="form-label">案内希望</div>
            <div class="form-input d-flex">
              <div>{{ companyInfo.askForInstructions }}</div>
            </div>
          </div>

          <div class="form-group ask-for-instructions">
            <div class="form-label">来場者規定</div>
            <div class="form-input d-flex">
              <div>{{ companyInfo.undefine_2 }}</div>
            </div>
          </div>

          <div class="form-group ask-for-instructions">
            <div class="form-label">プライバシーポリシー</div>
            <div class="form-input d-flex">
              <div>{{ companyInfo.undefine_3 }}</div>
            </div>
          </div>

          <div class="d-flex justify-content-center align-items-center">
            <b-form-checkbox
              size="lg"
              v-model="isCheck"
              type="checkbox"
              class="checkbox-24 mr-20"
            />
            <div>
              <span class="text-primary">利用規約</span><span>と</span
              ><span class="text-primary">個人情報の取扱</span
              ><span>いに同意する</span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <b-button variant="outline-primary" class="mr-20" @click="back"
            >戻る</b-button
          >
          <b-button variant="primary" @click="submit">送信する</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ApplicationSetting',
  data() {
    return {
      isCheck: false,
      companyInfo: {
        companyName: 'PaylessGate株式会社',
        companyName_1: 'ぺいれすげーとかぶしきがいしゃ',
        companyEnglishName: 'PaylessGate Co., Ltd.',
        room: '営業部',
        room_1: '部長',
        persionName: '山田',
        persionName_1: '太郎',
        furigana: 'やまだ',
        furigana_1: 'たろう',
        zipCode: '530-0017',
        zipCode_1: '大阪府',
        autonomousCity: '大阪市北区角田町',
        address: '1-12',
        building: '阪急ファイブアネックスビル２階',
        phone: '06 - 1234 - 5678',
        phone_1: '080 - 1234 - 5678',
        fax: '06 - 9876 - 5432',
        email: 'test@example.com',
        industryClassification: '情報通信業',
        industryDetails: '情報処理・提供サービス業',
        occupationClassification: '管理的職業従事者',
        jobDetails: '法人・団体役員',
        splitList: '非上場',
        capital: '１億円未満',
        job: '部長クラス',
        numberEmployees: '21 - 100人',
        payingParticipationLevel:
          '該当商品サービスの仕入・購買に際して、自分で決定する',
        purposeOfTheVisit: '情報収集のため',
        smartphoneOwnership: '今回は代理人としての申込である',
        askForInstructions: '今後のDMや電子メールの配信を希望しない',
        numberSaler: '3-20億円未満',
        undefine_1:
          '該当商品サービスの仕入・購買に際して、自身が決裁判断を行う',
        undefine_2: '同意する',
        undefine_3: '同意する',
      },
    }
  },
  methods: {
    back() {
      this.$emit('showPage', 2, this.companyInfo)
    },
    submit() {
      if (this.isCheck) {
        this.$router.push('/exhibition-list')
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
.form-group {
  margin-bottom: 30px;
}
.mb-20 {
  margin-bottom: 20px;
}
.width-50 {
  width: 50px;
}
.width-60 {
  width: 60%;
}
.width-162 {
  width: 162px;
}
.width-104 {
  width: 100px;
}
.color-707 {
  color: #707070 !important;
}
.mr-100 {
  width: 200px;
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
      .form-label {
        width: 30%;
        margin-right: 30px;
      }
      .form-input {
        width: 70%;
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
        width: 60%;
        .form-label {
          width: 100%;
        }
        select {
          width: 195px;
          height: 60px;
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
.form-input {
  color: #000;
}
</style>