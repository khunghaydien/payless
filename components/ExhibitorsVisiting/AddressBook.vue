<template>
  <div>
    <div v-if="showPage === 'list'" class="sys-card">
      <div v-if="isShow" class="position-relative col-5 p-0">
        <b-form-input
          class="exhibitor-list-input"
          placeholder="名前や概要説明で検索する"
        ></b-form-input>
        <img src="@/assets/icon/search.png" alt="" class="search-icon" />
      </div>
      <div class="mt-3">
        <div class="container-table">
          <div class="header-table">
            <div
              class="
                sys-flex-space-between sys-align-center
                width-100
                height-38
              "
            >
              <div class="line">名刺交換先一覧</div>
              <div v-if="isShow">
                <b-button variant="primary">一括ダウンロード</b-button>
              </div>
            </div>
          </div>
          <div class="table sys-flex-column mt-4">
            <div class="header d-flex">
              <div
                v-for="(item, index) in header"
                :key="index"
                class="item-header sys-align-center"
                :style="{
                  width: ratio[index],
                  flex: `0 0 ` + ratio[index],
                }"
              >
                <div
                  v-if="index === 0"
                  class="sys-flex-center item-checkbox-header w-100"
                >
                  <b-form-checkbox
                    v-model="checkAll"
                    @change="setCheckAll($event)"
                  />
                </div>
                <div v-else class="col-6 text-nowrap">
                  <span class="sys-font-size-13 color-white mr-3">{{
                    item
                  }}</span>
                  <img src="@/assets/icon/arrow-up-down.png" alt="" />
                </div>
              </div>
            </div>
            <div v-for="(item, index) in body" :key="index" class="d-flex">
              <div
                class="sys-flex-center item-body"
                :style="{
                  width: ratio[0],
                  flex: `0 0 ` + ratio[0],
                }"
              >
                <b-form-checkbox
                  v-model="item.checkbox"
                  @change="changeItemCheckbox"
                />
              </div>
              <div
                class="item-body sys-align-center"
                :style="{
                  width: ratio[1],
                  flex: `0 0 ` + ratio[1],
                }"
              >
                <span class="sys-font-size-13">{{ item.date }}</span>
              </div>
              <div
                class="item-body sys-align-center"
                :style="{
                  width: ratio[2],
                  flex: `0 0 ` + ratio[2],
                }"
              >
                <span class="sys-font-size-14">{{ item.companyName }}</span>
              </div>
              <div
                class="item-body sys-align-center"
                :style="{
                  width: ratio[3],
                  flex: `0 0 ` + ratio[3],
                }"
              >
                <span class="sys-font-size-14">{{ item.room }}</span>
              </div>
              <div
                class="item-body sys-align-center sys-flex-space-between px-10"
                :style="{
                  width: ratio[4],
                  flex: `0 0 ` + ratio[4],
                }"
                @click="showDetail(item.id)"
              >
                <div class="sys-align-center">
                  <span class="sys-font-size-14">{{ item.firstName }}</span>
                  <span class="sys-font-size-14">{{ item.lastName }}</span>
                </div>
                <div>
                  <img src="@/assets/icon/chev-right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CardDetail
      v-if="showPage === 'detail'"
      :card-id="cardId"
      @back="showPage = 'list'"
    ></CardDetail>
    <div class="sys-flex-center footer-main-custom"></div>
  </div>
</template>

<script>
import CardDetail from './CardDetail.vue'
export default {
  name: 'Page1Components',
  components: { CardDetail },
  props: { isShow: { type: Boolean, default: true } },
  data() {
    return {
      showPage: 'list',
      isShowSetting: false,
      checkAll: false,
      email: '',
      authorityOptions: [
        { text: '権限を選択', value: null },
        { text: '管理者', value: null },
        { text: 'ユーザー', value: null },
      ],
      selectData: null,
      header: ['', '名刺交換日', '会社名', '部署', '名前'],
      ratio: ['7%', '15%', '27%', '21%', '27%'],
      body: [
        {
          id: 1,
          checkbox: false,
          date: '2022/09/11',
          companyName: 'PaylessGate株式会社',
          room: '営業部',
          firstName: '山田',
          lastName: '太郎',
        },
        {
          id: 2,
          checkbox: false,
          date: '2022/09/11',
          companyName: 'PaylessGate株式会社',
          room: '営業部',
          firstName: '山田',
          lastName: '太郎',
        },

        {
          id: 3,
          checkbox: false,
          date: '2022/09/11',
          companyName: 'PaylessGate株式会社',
          room: '営業統括部',
          firstName: '山田',
          lastName: '太郎',
        },
        {
          id: 4,
          checkbox: false,
          date: '2022/09/11',
          companyName: 'PaylessGate株式会社',
          room: '営業統括部',
          firstName: '山田',
          lastName: '太郎',
        },
        {
          id: 5,
          checkbox: false,
          date: '2022/09/11',
          companyName: 'PaylessGate株式会社',
          room: '営業統括部',
          firstName: '山田',
          lastName: '太郎',
        },
        {
          id: 6,
          checkbox: false,
          date: '2022/09/11',
          companyName: 'PaylessGate株式会社',
          room: '営業一課',
          firstName: '山田',
          lastName: '太郎',
        },
        {
          id: 7,
          checkbox: false,
          date: '2022/09/11',
          companyName: 'PaylessGate株式会社',
          room: '営業一課',
          firstName: '山田',
          lastName: '太郎',
        },
        {
          id: 8,
          checkbox: false,
          date: '2022/09/11',
          companyName: 'PaylessGate株式会社',
          room: 'マーケティング部',
          firstName: '山田',
          lastName: '太郎',
        },
        {
          id: 9,
          checkbox: false,
          date: '2022/09/11',
          companyName: 'PaylessGate株式会社',
          room: 'マーケティング部',
          firstName: '山田',
          lastName: '太郎',
        },
      ],
    }
  },
  async created() {},
  methods: {
    showDetail(val) {
      this.showPage = 'detail'
      this.cardId = val
    },
    setCheckAll(value) {
      this.body = this.body.map((item) => {
        item.checkbox = value
        return item
      })
    },
    changeItemCheckbox() {
      let state = true
      this.body.forEach((item) => {
        if (!item.checkbox) {
          state = false
        }
      })
      if (state) {
        this.checkAll = true
      } else {
        this.checkAll = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.line {
  position: relative;
  &::after {
    position: absolute;
    content: '';
    height: 1px;
    width: 115px;
    top: 37px;
    background: black;
    left: 0;
  }
}
.container-table {
  overflow: auto;
  width: 100%;
}
.btn-outline-secondary {
  background-color: white;
  border-color: #e8e8e8;
  color: #707070;
}
.px-10 {
  padding: 0px 10px;
}
.text-small {
  font-size: 12px;
  color: #bbbbbb;
}
.button-top-header {
  min-width: 150px;
}
.sys-rounded {
  border-radius: 30px !important;
}
.sys-font-size-14 {
  font-size: 14px;
}
.sys-font-size-13 {
  font-size: 13px;
}

.item-header {
  background-color: #55a9c3;
  height: 46px;
  margin-right: 3px;
}
.item-checkbox-header {
  padding-left: 6px;
}
.color-blue {
  color: #55a9c3;
}
.header-table {
  border-bottom: 1px solid #bababa;
  padding-bottom: 10px;
}
.item-body {
  background-color: #fafafa;
  height: 46px;
  margin-right: 3px;
  padding-left: 6px;
  margin-top: 3px;
}
.color-white {
  color: white;
}
.sys-flex-end {
  display: flex;
  justify-content: flex-end;
}
.color-black {
  color: #070707;
}
.btn-primary {
  border-radius: 20px;
}
.color-black-r {
  color: #555555;
}
.border-gray {
  border-color: #e0e0e0 !important;
}
.search-icon {
  position: absolute;
  top: 8px;
  right: 25px;
}
.exhibitor-list-input {
  border-radius: 20px;
}
.height-38 {
  height: 38px;
}
</style>
