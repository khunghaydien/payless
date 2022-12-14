<template>
  <div>
    <div class="sys-card">
      <div class="sys-align-center mb-45 cursor-pointer" @click="close">
        <div class="icon-back">
          <img src="@/assets/icon/chev-left.png" alt="" />
        </div>
        <div>一覧に戻る</div>
      </div>
      <div class="mb-20">
        <b-button variant="primary">メッセージ</b-button>
      </div>
      <div class="sys-align-center mb-45">
        <div class="mr-45">2022年08月04日</div>
        <div>出展社参加説明会のご案内</div>
      </div>
      <div class="mb-45">出展社の皆様</div>
      <div class="mb-10">
        2022年8月31日（水）13:00-14:30に出展社向け参加説明会を実施します。
      </div>
      <div class="mb-10">
        当日は出展に向けたスケジュールの説明、各種申請における注意点、出展効果最大化のための施策について
      </div>
      <div class="mb-45">
        ものづくりEXPO 2022事務局よりご説明いたしますので必ずご参加ください。
      </div>
      <div v-for="(item, index) in list" :key="index" class="d-flex mb-20">
        <div class="sys-align-center width-100">
          <div class="d-flex mr-45">
            <div class="file mr-45">
              <div class="title mb-10">ファイル名</div>
              <div class="content">{{ item.name }}</div>
            </div>
            <div class="file">
              <div class="title mb-10">種類</div>
              <div class="content">{{ item.type }}</div>
            </div>
          </div>
          <b-button
            class="download col-2"
            variant="outline-primary"
            @click="downLoad(item.name)"
            >ダウンロード</b-button
          >
        </div>
      </div>
    </div>
    <div class="sys-flex-center footer-main-custom"></div>
  </div>
</template>
<script>
export default {
  props: { idNew: { type: Number, default: 0 } },
  data() {
    return {
      id: this.idNew,
      list: [
        { id: 1, name: '出展社参加説明会のご案内', type: 'PDF', file: '' },
      ],
    }
  },
  methods: {
    downLoad(name, url, id) {
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.download = name
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    },
    close() {
      this.$emit('closeDetail')
    },
  },
}
</script>
<style lang="scss" scoped>
.mb-45 {
  margin-bottom: 45px;
}
.mr-45 {
  margin-right: 45px;
}
.icon-back {
  margin-right: 10px;
  img {
    width: 10px;
    height: 15px;
  }
}
.btn-primary {
  height: 25px;
  font-size: 10px;
  border-radius: 5px;
  line-height: 14px;
}
.btn-outline-primary {
  height: 30px;
  border-radius: 7px;
  line-height: 16px;
}
</style>