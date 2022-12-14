<template>
  <div>
    <div class="header-title sys-align-center sys-flex-space-between width-100">
      <div>主催者からのお知らせ一覧</div>
      <div class="sys-align-center cursor-pointer" @click="nextTo">
        <div class="text-primary mr-10">もっとみる</div>
        <div><img src="@/assets/icon/chev-right.png" alt="" /></div>
      </div>
    </div>
    <div class="sys-card card-message mb-20">
      <div v-if="listMessage.length !== 0" class="list-message">
        <div class="message">
          <div
            v-for="(item, index) in listMessage"
            :key="index"
            class="item-message sys-align-center"
          >
            <div class="col-2 p-0">
              <b-button variant="primary">{{ item.status.message }}</b-button>
            </div>
            <div class="col-3">{{ item.date }}</div>
            <div class="col-7">{{ item.title }}</div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="text-primary sys-align-center">
          <div class="dot sys-flex-center">!</div>
          <div class="">展示会に関するお知らせがコチラに表示されます。</div>
        </div>
      </div>
    </div>
    <AddressBook :is-show="isShow"></AddressBook>
  </div>
</template>
<script>
import AddressBook from '@/components/ExhibitorsVisiting/AddressBook.vue'
export default {
  components: { AddressBook },
  data() {
    return {
      isShow: false,
      listMessage: [
        {
          id: 1,
          status: { value: 1, message: 'メッセージ' },
          date: '2022年10月25日',
          title: 'ものづくりEXPO 2022  いよいよ明日から開催です！',
        },
        {
          id: 2,
          status: { value: 1, message: 'メッセージ' },
          date: '2022年10月01日',
          title: 'アプリダウンロードのお願い',
        },
        {
          id: 3,
          status: { value: 1, message: 'メッセージ' },
          date: '2022年09月25日',
          title: 'セミナー登録のお願い',
        },
        {
          id: 4,
          status: { value: 1, message: 'メッセージ' },
          date: '2022年08月04日',
          title: '出展企業が確定しました',
        },
        {
          id: 5,
          status: { value: 1, message: 'メッセージ' },
          date: '2022年07月01日',
          title: '来場登録いただき、ありがとうございます',
        },
      ],
    }
  },
  created() {},
  methods: {
    nextTo() {
      this.$router.push('address-book')
    },
  },
}
</script>
<style lang="scss" scoped>
.card-message {
  padding-right: 60px;
}
.item-message {
  width: 100%;
  padding: 13px 0px;
  border-bottom: 1px solid #bababa;
  &:last-child {
    border-bottom: 0;
  }
  .btn-primary {
    height: 20px;
    line-height: 10px;
    border-radius: 15px;
    font-size: 10px;
  }
}
.dot {
  width: 20px;
  height: 20px;
  border: 1px solid #0194c0;
  border-radius: 100%;
  margin-right: 10px;
}
</style>