<template>
  <div class="mb-5">
    <div class="header-title">セミナー新規登録</div>
    <div class="d-flex mt-5 justify-content-between">
      <div class="position-relative col-5 p-0">
        <b-form-input
          class="exhibitor-list-input"
          placeholder="名前や概要説明で検索する"
        ></b-form-input>
        <img src="@/assets/icon/search.png" alt="" class="search-icon" />
      </div>
      <div class="d-flex col-3 p-0 align-items-center">
        <div class="exhibitor-list-text mr-2">更新が新しい順</div>
        <img src="@/assets/icon/swap_vert.png" alt="" class="mr-3" />
        <img src="@/assets/icon/menu.png" alt="" />
      </div>
    </div>
    <div v-if="state === 'list'" class="mt-5 pt-4 sys-card sys-flex-center">
      <div>
        <div class="d-flex flex-wrap">
          <div
            v-for="n in 6"
            :key="`item${n}}`"
            class="col-6 cursor-pointer p-0 mb-4"
            :class="{ 'pr-3': n % 2 === 1, 'pl-3': n % 2 === 0 }"
            @click="state = 'detail'"
          >
            <div class="item-img-container">
              <img src="@/assets/png/speeldy.png" alt="" />
              <div
                class="corner"
                :class="{
                  'corner-primary': n % 2 === 1,
                  'corner-danger': n % 2 === 0,
                }"
              >
                {{ n % 2 === 0 ? '有料' : '無料' }}
              </div>
            </div>
            <div class="py-3 px-3 exhibitor-item text-secondary">
              <div>
                <span class="font-weight-bold">Speeidy </span>
                <span class="">操作説明会</span>
              </div>
              <div class="mt-2 exhibitor-text-small">
                本説明会ではSpeeIDyの基本的な操作方法を中心に、ご説明をさせていただきます。
              </div>
              <div class="mt-2 exhibitor-text-small">
                <img src="@/assets/icon/time.png" alt="" class="mr-1 ml-3" />
                <span>2022年01月01日 13:00~15:00</span>
              </div>
              <div class="mt-2 exhibitor-text-small">
                <img src="@/assets/icon/position.png" alt="" class="mr-1" />
                <span>東京</span>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <b-pagination
            v-model="currentPage"
            :total-rows="30"
            :per-page="6"
            first-number
          ></b-pagination>
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
    }
  },
  methods: {},
}
</script>

<style scoped>
.sys-card {
  padding: 60px 120px;
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
