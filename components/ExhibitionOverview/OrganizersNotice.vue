<template>
  <div>
    <div class="header-title">主催者からのお知らせ一覧</div>
    <div v-if="showPage === 'list'" class="sys-card">
      <div class="d-flex sys-flex-end">
        <div class="search col-4 mb-40">
          <b-form-input
            placeholder="フリーワード検索"
            class="search-input"
          ></b-form-input>
          <div class="position-abs search">
            <img src="@/assets/icon/search.png" alt="" />
          </div>
        </div>
      </div>
      <div class="mb-40">
        <div
          v-for="(item, index) in listNew"
          :key="index"
          class="item-new sys-align-center py-8"
          @click="showDetail(item.id)"
        >
          <div class="col-3">{{ item.name }}</div>
          <div class="col-9">
            <div>
              {{ item.cont }}
              <div v-if="item.isIcon" class="position-abs is-file">
                <img src="@/assets/icon/file-icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sys-flex-center">
        <div
          v-for="(item, index) in pageNumber"
          :key="index"
          class="item-page sys-flex-center"
          :class="{ active: currentIndex == index }"
        >
          {{ item }}
        </div>
        <div><img src="@/assets/icon/chev-right.png" alt="" /></div>
      </div>
    </div>
    <NewDetailComponent
      v-if="showPage === 'detail'"
      @closeDetail="showPage = 'list'"
    ></NewDetailComponent>
    <div class="sys-flex-center footer-main-custom"></div>
  </div>
</template>
<script>
import NewDetailComponent from './NewDetailComponent.vue'
export default {
  components: { NewDetailComponent },
  data() {
    return {
      currentIndex: 0,
      pageNumber: 2,
      listNew: [
        {
          id: 1,
          name: '2022年08月04日',
          cont: '出展社参加説明会のご案内',
          isIcon: true,
        },
        {
          id: 2,
          name: '2022年08月04日',
          cont: '出展社参加説明会のご案内',
          isIcon: false,
        },

        {
          id: 3,
          name: '2022年08月04日',
          cont: '出展社参加説明会のご案内',
          isIcon: true,
        },
        {
          id: 4,
          name: '2022年08月04日',
          cont: '出展社参加説明会のご案内',
          isIcon: false,
        },
        {
          id: 5,
          name: '2022年08月04日',
          cont: '出展社参加説明会のご案内',
          isIcon: false,
        },

        {
          id: 6,
          name: '2022年08月04日',
          cont: '出展社参加説明会のご案内',
          isIcon: true,
        },
        {
          id: 7,
          name: '2022年08月04日',
          cont: '出展社参加説明会のご案内',
          isIcon: false,
        },
        {
          id: 8,
          name: '2022年08月04日',
          cont: '出展社参加説明会のご案内',
          isIcon: false,
        },
      ],
      showPage: 'list',
    }
  },
  methods: {
    showDetail(id) {
      this.showPage = 'detail'
    },
  },
}
</script>
<style lang="scss" scoped>
.item-new {
  height: 48px;
  border-bottom: 1px solid #bababa;
}
.search {
  top: 7px;
  right: 25px;
}
.item-page {
  width: 23px;
  height: 23px;
  border: 1px solid;
  margin-right: 10px;
}
.active {
  background: #0194c0;
  border: 1px solid #0194c0;
  color: #fff;
}
.is-file {
  top: -8px;
  right: 0;
}
.search-input {
  border-radius: 20px;
}
</style>