<template>
  <div class="min-width-1366">
    <div
      class="
        bg-primary
        sys-header
        d-flex
        justify-content-end
        align-items-center
      "
    >
      <b-form-select
        v-if="select"
        v-model="exhibition"
        class="col-3 sys-custom-select"
        :options="options"
      ></b-form-select>
    </div>
    <div class="body-container">
      <div class="mb-20">
        <div v-if="currentValPage == 'exhibition-list'" class="mt-20">
          {{ 'トップページ' }}
        </div>
        <div v-else class="mt-20">
          <div class="sys-align-center">
            <div class="sys-align-center mr-20 cursor-pointer" @click="back">
              <div class="mr-10 img-chev">
                <img src="@/assets/icon/chev-left.png" alt="" />
              </div>
              <div class="text-primary">戻る</div>
            </div>
            <div class="mr-10">トップページ</div>
            <div class="img-chev mr-20">
              <img src="@/assets/icon/chev-right.png" alt="" />
            </div>
            <div class="text-primary">{{ currentPage }}</div>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="sidebar-container">
          <Sidebar
            v-for="(sidebar, index) in sidebarOptions"
            :key="`sidebar${index}`"
            :title="sidebar.sidebarTitle"
            :options="sidebar.sidebarOptions"
            :value="sidebarValue"
            class="mb-3"
            @changeTap="changePage"
          ></Sidebar>
        </div>
        <div class="col p-0">
          <Nuxt class="col p-0"></Nuxt>
          <div class="sys-flex-center footer-main">
            事業概要. ご利用方法. ご利用にあたって. 利用規約.
            個人情報保護ポリシー. 連絡先. 関連リンク. サイトマップ
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar/Sidebar.vue'
export default {
  name: 'DefaultLayoutComponent',
  components: { Sidebar },
  props: {
    select: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentPage: '登録情報の変更',
      currentValPage: 'exhibition-list',
      exhibition: 'ものづくりEXPO 2022',
      options: ['ものづくりEXPO 2022'],
      sidebarValue: 1,
      sidebarOptions: [
        {
          sidebarTitle: 'アカウント管理',
          sidebarOptions: [
            { text: '登録情報の変更', value: 'account-information' },
            { text: '名刺情報の変更', value: 'card-information' },
          ],
        },
        {
          sidebarTitle: 'セミナー',
          sidebarOptions: [
            { text: 'セミナー新規登録', value: 'seminar-list' },
            { text: 'セミナー登録状況', value: 'seminar-status' },
          ],
        },
        {
          sidebarTitle: '展示会で訪問した出展社',
          sidebarOptions: [
            { text: 'アドレス帳', value: 'address-book' },
            {
              text: '出展社からの配布物',
              value: 'document-exhibition',
            },
          ],
        },
        {
          sidebarTitle: '展示会概要',
          sidebarOptions: [
            { text: '主催者からのお知らせ', value: 'organizers-notice' },
            { text: '展示会ガイドブック', value: 'guide-book' },
            { text: '受付用QRコード', value: 'qr-reception' },
          ],
        },
      ],
    }
  },
  created() {},
  methods: {
    changePage(text, value) {
      this.currentPage = text
      this.currentValPage = value
    },
    back() {
      this.currentValPage = 'exhibition-list'
      this.$router.push('/exhibition-list')
    },
  },
}
</script>

<style lang="scss" scoped>
.sys-header {
  height: 81px;
  padding-right: 20px;
}
.mr-20 {
  margin-right: 20px;
}
.img-chev {
  img {
    width: 10px;
    height: 15px;
  }
}
.body-container {
  background-color: #f7f8f9;
  min-height: calc(100vh - 81px);
  padding-left: 50px;
  padding-right: 50px;
}

.sidebar-container {
  width: 208px;
  margin-right: 50px;
}
.mt-20 {
  padding-top: 20px;
}
</style>
