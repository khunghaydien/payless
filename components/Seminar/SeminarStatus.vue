<template>
  <div class="mb-5">
    <div class="header-title">セミナー登録状況</div>
    <div class="d-flex mt-5 justify-content-between">
      <div class="position-relative col-5 p-0">
        <b-form-input
          class="exhibitor-list-input"
          placeholder="名前や概要説明で検索する"
        ></b-form-input>
        <img src="@/assets/icon/search.png" alt="" class="search-icon" />
      </div>
      <div v-if="state === 'list'" class="sys-align-center">
        <div
          class="fake-btn mr-10"
          :class="{ active: isActive === 1 }"
          @click="isActive = 1"
        >
          開催昇順
        </div>
        <div
          class="fake-btn"
          :class="{ active: isActive === 2 }"
          @click="isActive = 2"
        >
          開催降順
        </div>
      </div>
    </div>
    <div v-if="state === 'list'" class="mt-5 pt-4 sys-card sys-flex-center">
      <div>
        <div class="d-flex flex-wrap">
          <div
            v-for="(item, index) in listSeminar"
            :key="index"
            class="
              sys-align-center sys-flex-space-between
              item-seminar
              width-100
            "
            @click="state = 'detail'"
          >
            <div class="col-4">
              <div class="item-title mb-20">セミナータイトル</div>
              <div>{{ item.title }}</div>
            </div>

            <div class="col-2">
              <div class="item-title mb-20">日時</div>
              <div class="mb-10">{{ item.date }}</div>
              <div>{{ item.time }}</div>
            </div>

            <div class="col-2">
              <div class="item-title mb-20">場所</div>
              <div>{{ item.place }}</div>
              <div class="item-title"></div>
            </div>

            <div class="col-4">
              <div class="item-title mb-20"></div>
              <div class="sys-align-center sys-flex-space-between width-100">
                <b-button variant="primary">{{ item.status.value }}</b-button>
                <img src="@/assets/icon/chev-right.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <seminar-detail
      v-if="state === 'detail'"
      @backList="state = 'list'"
    ></seminar-detail>
    <div class="sys-flex-center footer-main-custom"></div>
  </div>
</template>

<script>
import SeminarDetail from './SeminarDetail.vue'

export default {
  name: 'ExhibitorList',
  components: { SeminarDetail },
  data() {
    return {
      currentPage: 1,
      state: 'list',
      isActive: 1,
      listSeminar: [
        {
          id: 1,
          title: 'タイトルタイトルタイトルタイトルタイトルタ',
          date: '2022 / 05 / 16',
          time: '13:00',
          place: 'テキストテキスト',
          status: { type: 1, value: '申し込み済' },
        },
        {
          id: 1,
          title: 'タイトルタイトルタイトルタイトルタイトルタ',
          date: '2022 / 05 / 16',
          time: '13:00',
          place: 'テキストテキスト',
          status: { type: 1, value: '申し込み済' },
        },
        {
          id: 1,
          title: 'タイトルタイトルタイトルタイトルタイトルタ',
          date: '2022 / 05 / 16',
          time: '13:00',
          place: 'テキストテキスト',
          status: { type: 1, value: '申し込み済' },
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.active {
  text-decoration: underline;
}
.item-seminar {
  padding: 26px;
  border-bottom: 1px solid #bababa;
  &:last-child {
    border-bottom: 0;
  }
}
.btn-primary {
  border-radius: 20px;
}
.fake-btn {
  color: #707070;
  cursor: pointer;
}
.sys-card {
  padding: unset;
}

::placeholder {
  color: #d6d6d6;
  font-size: 16px;
}
.ml-3 {
  margin-left: -3px !important;
}
.exhibitor-list-input {
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 40px;
}

.exhibitor-list-text {
  font-size: 16px;
  color: #555555;
}

.exhibitor-text-small {
  font-size: 13px;
  line-height: 1.4;
  color: #555555;
}

.search-icon {
  position: absolute;
  top: 8px;
  right: 10px;
}

.item-img-container {
  background-color: #f2eff0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 121px;
  border-radius: 7px 7px 0 0;
  position: relative;
  box-shadow: 0 1px 1px 1px #f2eff0;
}

.corner {
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 7px 0 0;
  padding: 8px 10px;
}

.corner-primary {
  background-color: #0194c0;
  color: #ffffff;
}

.corner-danger {
  background-color: #ff6464;
  color: #ffffff;
}

.exhibitor-item {
  box-shadow: 0 1px 1px 1px #f2eff0;
  border-radius: 0 0 7px 7px;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
