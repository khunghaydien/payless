<template>
  <div>
    <div class="sys-card">
      <div class="sys-align-center" @click="back">
        <img class="mr-20" src="@/assets/icon/chev-left.png" alt="" />
        <div>一覧に戻る</div>
      </div>
      <div class="card-body width-100">
        <div>
          <div class="mb-30">
            <div class="mb-4 text-secondary">会社名</div>
            <div class="sys-align-center">
              <div class="mr-20">{{ document.companyName }}</div>
            </div>
          </div>
          <div class="mb-30">
            <div class="mb-4 text-secondary">住所</div>
            <div class="sys-align-center">
              <div class="mr-20">{{ document.address }}</div>
            </div>
          </div>
          <div class="mb-30">
            <div class="mb-4 text-secondary">リンク</div>
            <div class="sys-align-center">
              <div class="mr-20">{{ document.link }}</div>
            </div>
          </div>
          <div
            v-for="(item, index) in document.listFile"
            :key="index"
            class="width-100 mb-20"
          >
            <div class="sys-align-center width-100">
              <div class="col-3">
                <div class="text-secondary mb-4">ファイル名</div>
                <div>{{ item.fileName }}</div>
              </div>
              <div class="col-2">
                <div class="text-secondary mb-4">種類</div>
                <div>{{ item.fileType }}</div>
              </div>
              <div>
                <b-button
                  variant="outline-primary"
                  @click="downLoad(item.fileName, item.fileUrl, item.id)"
                  >ダウンロード</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sys-flex-center footer-main-custom"></div>
  </div>
</template>
<script>
export default {
  props: {
    documentId: { type: Number, default: 1 },
  },
  data() {
    return {
      document: {
        companyName: 'あんず株式会社',
        address: '東京都千代田区千代田1-111',
        link: 'www.anzuanzuanzu.com',
        listFile: [
          {
            id: 1,
            fileName: '○○○○○○○○○○○○○○',
            fileUrl: '',
            fileType: 'PDF',
          },
          {
            id: 2,
            fileName: '○○○○○○○○○○○○○○',
            fileUrl: '',
            fileType: 'PDF',
          },
          {
            id: 3,
            fileName: '○○○○○○○○○○○○○○',
            fileUrl: '',
            fileType: 'PDF',
          },
        ],
      },
    }
  },
  methods: {
    back() {
      this.$emit('back')
    },
    downLoad(name, url, id) {
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.download = name
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    },
  },
}
</script>
<style lang="scss" scoped>
.btn-outline-primary {
  border-radius: 10px;
  width: 124px;
  height: 30px;
  line-height: 14px;
}
.mb-30 {
  margin-bottom: 25px;
}
.mb-4 {
  margin-bottom: 4px !important;
}
.card-body {
  .sys-card {
    min-height: 430px;
  }
}
.text-secondary {
  color: #bababa;
}
.note {
  height: 100px;
}
.card-img {
  border-right: 2px solid;
}
</style>