<template>
  <div class="index">
    <div class="">
      <img
        class="hybridexhibition-img"
        src="@/assets/png/201028-hybridex.png"
        alt=""
      />

      <div class="text-center exhibition-title">{{ exhibitionName }}</div>
      <div class="text-center exhibition-date">{{ exhibitionDate }}</div>
      <div class="text-center exhibition-place">{{ exhibitionPlace }}</div>
      <div class="text-center exhibition-gate">
        {{ `PaylessGate株式会社主催` }}
      </div>
      <div class="text-center exhibition-news-title">{{ `お知らせ` }}</div>
      <div
        v-for="(item, index) in exhibitionNews"
        :key="`exhibitionNews${index}`"
        class="d-flex exhibition-news-item"
      >
        <div class="col-6 p-0 sys-align-center">
          <div class="col-7 p-0 text-right exhibition-news-date">
            {{ item.date }}
          </div>
          <nuxt-link to="" class="col-5 p-0 exhibition-news-link text-right">{{
            item.name
          }}</nuxt-link>
        </div>
      </div>
      <div class="exhibition-summary_container">
        <div class="text-center exhibition-summary_title">
          {{ exhibitionName + 'とは' }}
        </div>
        <div class="sys-align-center sys-">
          <div class="col-5 p-0 d-flex justify-content-end">
            <div class="exhibition-sumary__card">
              <div class="exhibition-sumary__card--header text-center">
                {{ `来場者` }}
              </div>
              <div
                class="
                  exhibition-sumary__card--content-container
                  d-flex
                  flex-wrap
                "
              >
                <div
                  v-for="(item, index) in sumaryVisitors"
                  :key="`visitors${index}`"
                  class="col-6 p-0 exhibition-sumary__card--item"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-2 p-0 text-center x-style">X</div>
          <div class="col-5 p-0 d-flex">
            <div class="exhibition-sumary__card">
              <div class="exhibition-sumary__card--header text-center">
                {{ `出展社` }}
              </div>
              <div
                class="
                  exhibition-sumary__card--content-container
                  d-flex
                  flex-wrap
                "
              >
                <div
                  v-for="(item, index) in sumaryExhibitors"
                  :key="`visitors${index}`"
                  class="col-6 p-0 exhibition-sumary__card--item"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <div
            v-for="(item, index) in sumaryDescriptions"
            :key="`sumaryDescription${index}`"
            class="mb-2"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="pt-5 pl-5 pr-3">
        <div
          v-for="(item, index) in exhibitionContent"
          :key="`exhibitionContent${index}`"
          class="d-flex exhibition-content"
        >
          <div class="col-6 text-right">
            <img
              :src="require(`@/assets/png/scroll-group${index + 1}.png`)"
              alt=""
            />
          </div>
          <div class="col-6">
            <div class="exhibition-content__title">{{ item.title }}</div>
            <div class="exhibition-content__main">{{ item.content }}</div>
          </div>
        </div>
      </div>
      <div class="d-flex mt-3 mb-5">
        <div class="col-6 p-0 pr-4 d-flex justify-content-end">
          <BaseButton class="exhibition-button">出展お申し込み</BaseButton>
        </div>
        <div class="col-6 p-0 pl-4">
          <BaseButton class="exhibition-button">来場申し込み</BaseButton>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-5 mb-4">
        <div class="exhibition-bottom" >
          <img src="@/assets/png/dms-kns.png" alt="" />
          <div class="exhibition-bottom__modal"></div>
          <div class="exhibition-bottom__text">出展案内</div>
        </div>
        <div class="exhibition-bottom">
          <img src="@/assets/png/dms-kns.png" alt="" />
          <div class="exhibition-bottom__modal"></div>
          <div class="exhibition-bottom__text">来場案内</div>
        </div>
        <div class="exhibition-bottom">
          <img src="@/assets/png/dms-kns.png" alt="" />
          <div class="exhibition-bottom__modal"></div>
          <div class="exhibition-bottom__text">出展者検索</div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="exhibition-bottom">
          <img src="@/assets/png/dms-kns.png" alt="" />
          <div class="exhibition-bottom__modal"></div>
          <div class="exhibition-bottom__text">セミナー</div>
        </div>
        <div class="exhibition-bottom">
          <img src="@/assets/png/dms-kns.png" alt="" />
          <div class="exhibition-bottom__modal"></div>
          <div class="exhibition-bottom__text">アクセス</div>
        </div>
        <div class="exhibition-bottom">
          <img src="@/assets/png/dms-kns.png" alt="" />
          <div class="exhibition-bottom__modal"></div>
          <div class="exhibition-bottom__text">お問い合わせ</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="d-flex mb-50 j-c-sb">
          <div class="d-flex width-50">
            <div class="label">名称</div>
            <div class="content">ものづくりEXPO 2022</div>
          </div>
          <div class="d-flex width-50">
            <div class="label">会期</div>
            <div class="content">
              2022年 10月26日 (水) ・27日 (木) ・28日(金)
            </div>
          </div>
        </div>
        <div class="d-flex mb-50 j-c-sb">
          <div class="d-flex width-50">
            <div class="label">時間</div>
            <div class="content">10:00 ~ 17:00 (展示会開催時間)</div>
          </div>
          <div class="d-flex width-50">
            <div class="label">主催</div>
            <div class="content">PaylessGate株式会社</div>
          </div>
        </div>
        <div class="d-flex">
          <div class="label">後援</div>
          <div class="content">
            <div class="mb-10">経済産業省、中小企業庁</div>
            <div class="mb-10">
              日本金型工業会、日本ベアリング工業会、(一社)
              設計製造ソリューション学会、(一社) 3Dプリンタ振興会
            </div>
            <div>
              (一社)製造業DX推進会、日本切削機械工業会、日本製造業貿易協議会
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="background-blue"></div>
  </div>
</template>

<script>
import BaseButton from '../Share/Button/BaseButton.vue'
export default {
  name: 'GenerationExhibition',
  components: { BaseButton },
  data() {
    return {
      exhibitionName: 'ものづくりEXPO 2022',
      exhibitionDate: '2022年 10月26日（水）・27日（木）・28日（金）',
      exhibitionPlace: '会場：東京国際展示場（東京ビックサイト）　東1-3ホール',
      exhibitionNews: [
        {
          date: '2022 / 08 / 01 ',
          name: '来場者のご登録を開始しました',
        },
        {
          date: '2022 / 07 / 01 ',
          name: '出展社一覧を更新しました',
        },
        {
          date: '2022 / 06 / 01 ',
          name: '出展社一覧ページを公開しました',
        },
      ],
      sumaryVisitors: [
        '生産技術・製造',
        '経営者・経営企画',
        '研究・開発',
        '生産管理・購買',
      ],
      sumaryExhibitors: ['生産性向上', 'VA/VE', '品質向上', 'コストダウン'],
      sumaryDescriptions: [
        `ものづくりEXPO は、CAD、CAE、ERP、生産管理システムなどの製造業向け企業が出展する展示会です。`,
        `毎年、生産技術、製造、研究、開発、生産管理、購買部門などのユーザーが多数来場し、出展企業と活発な商談を行っています。`,
        `東京ビッグサイトにて開催する本展をはじめ、名古屋、大阪でも開催しています。`,
      ],
      exhibitionContent: [
        {
          img: '',
          title: 'ものづくりAI/IoT展',
          content: `製造業向けのAI、IoTソリューションが一堂に出展する展示会です。
                    開発・製造期間の短縮、品質向上、コストダウンなどに貢献する製品が出展し、
                    活発な商談が行われています。
                    また、展示会場に隣接した会場で、セミナーを開催しております。
                    AIやIoTを活用した先端ものづくり事例などのセミナーが行われており、
                    本展は学びの場としても最適です。`,
        },
        {
          img: '',
          title: '機械要素技術展',
          content: `機械部品、加工技術、表面処理などが一堂に出展する展示会です。
                    開発・製造期間の短縮、コストダウン、ＶＡ・ＶＥなどに貢献する
                    製品や技術が出展し、活発な商談が行われています。
                    展示会場に隣接した会場で、セミナーを開催しております。
                    人材育成、製造現場の改善などのテーマで講演が行われておりますので、
                    本展は学びの場としても最適です。`,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.background-blue {
  width: 100%;
  height: 46px;
  background: #0194c0;
}
.exhibition-content__main {
  max-width: 600px;
}
.container {
  width: 1133px;
}
.mb-50 {
  margin-bottom: 50px;
}
.mb-10 {
  margin-bottom: 10px;
}
.width-50 {
  width: 50%;
}
.footer {
  margin-top: 90px;
  border-top: 1px solid #0194c0;
  padding: 70px 0px 30px 0px;
  .label {
    margin-right: 30px;
    color: #0194c0;
  }
}
.exhibition {
  padding-bottom: 90px;
}

.hybridexhibition-img {
  width: 100%;
}

.exhibition-title {
  font-size: 45px;
  margin-top: 35px;
  font-weight: 600;
}

.exhibition-date {
  font-size: 27px;
  margin-top: 16px;
}

.exhibition-place {
  font-size: 34px;
  margin-top: 18px;
}

.exhibition-gate {
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 73px;
}

.exhibition-news-title {
  font-size: 30px;
  margin-bottom: 25px;
}

.exhibition-news-date {
  font-size: 13px;
}

.exhibition-news-link {
  font-size: 15px;
  color: #0194c0;
}

.exhibition-news-item {
  margin-bottom: 25px;
}

.exhibition-summary_container {
  background-color: #def7ff;
  height: 487px;
  padding-top: 54px;
  .exhibition-summary_title {
    margin-bottom: 39px;
    font-size: 39px;
    font-weight: 600;
  }
}

.exhibition-sumary__card {
  width: 452px;
  &--header {
    background-color: #0194c0;
    color: #ffffff;
    padding: 21px 0;
    border-radius: 4px 4px 0 0;
    font-size: 38px;
  }
  &--content-container {
    background-color: #ffffff;
    padding: 24px;
  }
  &--item {
    margin-bottom: 16px;
    font-size: 22px;
  }
}

.x-style {
  font-size: 38px;
  font-weight: bold;
}

.exhibition-content {
  &__title {
    font-size: 26px;
    margin-bottom: 21px;
    margin-top: 35px;
  }

  &__main {
    font-size: 16px;
    line-height: 1.5;
  }
}

.exhibition-button {
  font-size: 21px;
  line-height: 1;
  padding: 18px 78px;
  border-radius: 35px;
  border: none;
  outline: none;
  box-shadow: none;
}

.exhibition-bottom {
  position: relative;
  margin-right: 1.5rem;
  &:last-child {
    margin-right: 0;
  }
  &__modal {
    position: absolute;
    background-color: #ffffff;
    bottom: 0;
    height: 59px;
    width: 100%;
    opacity: 0.5;
  }
  &__text {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 59px;
    text-align: center;
    line-height: 59px;
    font-size: 25px;
    font-weight: bold;
  }
}
</style>
