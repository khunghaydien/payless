<template>
  <div>
    <div class="header-title">受付用QRコード</div>
    <div class="sys-card sys-flex-center width-100">
      <div class="card-container width-100">
        <div class="sub-container-solid">
          <div class="sys-flex-center width-100">
            <div class="item-step sys-flex-center sys-flex-column col-4">
              <div class="mb-20">
                <b-button variant="primary" class="btn-step">Step 1</b-button>
              </div>
              <div class="mb-20">
                <img src="@/assets/png/step-1.png" alt="" />
              </div>
              <div class="sys-flex-center sys-flex-column text-secondary">
                <div class="mb-4">ホルダーのQRをかざして</div>
                <div>受付をしてください</div>
              </div>
            </div>
            <div class="arrow-right"></div>
            <div class="item-step sys-flex-center sys-flex-column col-4">
              <div class="mb-20">
                <b-button variant="primary" class="btn-step">Step 2</b-button>
              </div>
              <div class="mb-20">
                <img src="@/assets/png/step-2.png" alt="" />
              </div>
              <div class="sys-flex-center sys-flex-column text-secondary">
                <div class="mb-4">興味がある出展社の方に</div>
                <div>QRを読み取ってもらってください</div>
              </div>
            </div>
            <div class="arrow-right"></div>
            <div class="item-step sys-flex-center sys-flex-column col-4">
              <div class="mb-20">
                <b-button variant="primary" class="btn-step">Step 3</b-button>
              </div>
              <div class="mb-20 position-rel">
                <img src="@/assets/png/step-3.png" alt="" />
                <div class="position-abs top-18">
                  <img src="@/assets/png/sub-step-1.png" alt="" />
                </div>
              </div>
              <div class="sys-flex-center sys-flex-column text-secondary">
                <div class="mb-4">パソコン上のマイページで出展社の担当者や</div>
                <div>パンフレットを閲覧できます</div>
              </div>
            </div>
          </div>
        </div>
        <div class="sub-container-dashed">
          <div class="sys-flex-center width-100">
            <div class="item-step sys-flex-center sys-flex-column col-4">
              <div class="mb-20 pb-50">
                <b-button variant="primary" class="btn-step">Step 1</b-button>
              </div>
              <div class="mb-20">
                <div class="position-rel sys-flex-center">
                  <div class="position-abs big-rectangle-3 sys-flex-center">
                    <div class="border-dashed-right">
                      <div class="sys-flex-center sys-flex-column">
                        <div class="font-size-3 font-weight-bold">展示会名</div>
                        <div class="font-size-3 font-weight-bold">業種</div>
                        <img src="@/assets/png/fake-qr.png" alt="" />
                        <div class="font-size-3">会社名</div>
                        <div class="font-size-3">氏名</div>
                      </div>
                    </div>
                    <div class="">
                      <img src="@/assets/png/full-fake-qr.png" alt="" />
                    </div>
                  </div>
                  <div class="position-abs big-rectangle-1"></div>
                  <div class="position-abs big-rectangle-2"></div>
                </div>
              </div>
              <div class="sys-flex-center sys-flex-column text-secondary pt-65">
                <div>上下半分に折り曲げてください。</div>
              </div>
            </div>
            <div class="arrow-right"></div>
            <div class="item-step sys-flex-center sys-flex-column col-4">
              <div class="mb-20 pb-50">
                <b-button variant="primary" class="btn-step">Step 2</b-button>
              </div>
              <div class="mb-20">
                <div class="position-rel sys-flex-center">
                  <div class="position-abs big-rectangle-3 sys-flex-center">
                    <img src="@/assets/png/full-fake-qr.png" alt="" />
                  </div>
                  <div class="position-abs small-rectangle-1"></div>
                  <div class="position-abs small-rectangle-2"></div>
                </div>
              </div>
              <div class="sys-flex-center sys-flex-column text-secondary pt-65">
                <div>左右半分に折り曲げてください。</div>
              </div>
            </div>
            <div class="arrow-right"></div>
            <div class="item-step sys-flex-center sys-flex-column col-4">
              <div class="mb-20">
                <b-button variant="primary" class="btn-step">Step 3</b-button>
              </div>
              <div class="mb-20 small-rectangle sys-flex-center">
                <img src="@/assets/png/full-fake-qr.png" alt="" />
              </div>
              <div class="text-secondary">
                <div class="mb-4">折り曲げた用紙を名札ホルダーに入れて</div>
                <div>会場にご入場ください。</div>
              </div>
            </div>
          </div>
        </div>
        <div class="sys-flex-center">
          <div class="circle sys-flex-center mr-1">2</div>
          <div class="chev-1 mr-1">
            <img src="@/assets/icon/chev-right.png" alt="" />
          </div>
          <div class="border-dashed mr-1"></div>
          <div class="chev-1 mr-1">
            <img src="@/assets/icon/chev-left.png" alt="" />
          </div>
          <div class="circle sys-flex-center">2</div>
        </div>

        <div class="sub-container-qr">
          <div class="sys-align-center sys-flex-space-between width-100">
            <div class="sys-flex-center sys-flex-column col-5">
              <div class="font-size-16 mb-4">ものづくりEXPO 2022</div>
              <div class="font-size-26">営業</div>
              <div><img src="@/assets/png/qr.png" alt="" /></div>
              <div class="mb-4">PaylessGate株式会社</div>
              <div>田中太郎</div>
            </div>
            <div class="sys-flex-center col-2">
              <div class="sys-flex-center sys-flex-column">
                <div class="circle sys-flex-center">2</div>
                <div class="chev">
                  <img src="@/assets/icon/icon-chev-down.png" alt="" />
                </div>
                <div class="first-qr"></div>
                <div class="chev">
                  <img src="@/assets/icon/icon-chev-up.png" alt="" />
                </div>
                <div class="circle sys-flex-center">2</div>
              </div>
            </div>
            <div class="sys-flex-center sys-flex-column col-5">
              <div class="font-size-16 mb-4">ものづくりEXPO 2022</div>
              <div class="font-size-26">営業</div>
              <div><img src="@/assets/png/qr.png" alt="" /></div>
              <div class="mb-4">PaylessGate株式会社</div>
              <div>田中太郎</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sys-flex-center footer-main-custom"></div>
  </div>
</template>
<style lang="scss" scoped>
.font-size-16 {
  font-size: 16px;
  font-weight: bold;
}
.font-size-26 {
  font-size: 26px;
  font-weight: bold;
}
.sub-container-qr {
  padding: 60px;
}
.first-qr {
  width: 1px;
  height: 400px;
  border-left: 1px dashed #707070;
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #bababa;
  color: #bababa;
}
.chev-1 {
  img {
    width: 10px;
    height: 15px;
  }
}
.chev {
  img {
    width: 15px;
    height: 10px;
  }
}
.border-dashed {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #707070;
}
.arrow-right {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid black;
}
.sys-card {
  padding: 60px;
  .card-container {
    border: 1px solid #bababa;
    padding: 60px;
    max-width: 1300px;
    .sub-container-solid {
      padding-bottom: 40px;
      border-bottom: 1px solid #707070;
    }
    .sub-container-dashed {
      padding: 40px 0px;
    }
  }
}
.border-dashed-right {
  border-right: 2px dashed #bababa;
}
.small-rectangle {
  width: 76px;
  height: 95px;
  border: 2px solid black;
}
.big-rectangle {
  &-1 {
    width: 134px;
    height: 95px;
    border: 2px solid black;
    position: absolute;
    z-index: 1;
    background: white;
  }
  &-2 {
    width: 130px;
    height: 112px;
    transform: skew(16deg);
    position: absolute;
    top: -48px;
    left: -47px;
    z-index: 0;
    border: 2px solid black;
  }
  &-3 {
    z-index: 2;
  }
}
.small-rectangle {
  &-1 {
    width: 76px;
    height: 95px;
    border: 2px solid black;
    position: absolute;
    z-index: 1;
    background: white;
  }
  &-2 {
    width: 65px;
    height: 96px;
    position: absolute;
    top: -36px;
    left: -27px;
    z-index: 0;
    -ms-transform: skewY(20deg);
    border: 2px solid black;
    transform: skewY(-20deg);
  }
}

.top-18 {
  top: 18px;
  left: 20px;
}
.text-secondary {
  color: #555;
}
.mb-4 {
  margin-bottom: 4px !important;
}
.font-size-3 {
  font-size: 3px;
}
.font-weight-bold {
  font-weight: bold;
}
.btn-step {
  width: 100px;
  border-radius: 30px;
}
.pb-50 {
  padding-bottom: 50px;
}
.pt-65 {
  padding-top: 65px;
}
</style>