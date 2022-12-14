<template>
  <div class="exchange-card-request-popup">
    <div class="popup-container">
      <button class="popup-close-button" @click="handleClose">
        <img :src="closeIcon" alt="" />
      </button>
      <div class="popup-container-content">
        <div class="popup-title">
          <div>セミナーの登録が</div>
          <div>完了しました！</div>
        </div>
        <img class="popup-image" :src="mainPicture" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalUpdateCardSuccess',
  props: {
    isEdit: Boolean,
  },
  data() {
    return {
      mainPicture: require('@/assets/png/popup-banner.svg'),
      closeIcon: require('@/assets/png/icon-close.svg'),
    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.exchange-card-request-popup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(37, 37, 37, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.exchange-card-request-popup .popup-container {
  width: 666px;
  max-width: 90%;
  padding: 34px 20px 34px 20px;
  background-color: #ffffff;
  border-radius: 10px;
  position: relative;
}

.exchange-card-request-popup .popup-container .popup-container-content {
  text-align: center;
}

.popup-container-content .popup-title {
  display: block;
  width: 100%;
  color: #0194c0;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
}

.popup-container-content .popup-image {
  width: 164px;
  height: 166px;
  object-fit: contain;
  margin-top: 22px;
}

.exchange-card-request-popup .popup-container .popup-close-button {
  position: absolute;
  top: -50px;
  right: -22px;
  width: 46px;
  height: 47px;
  outline: none;
  background-color: transparent;
  border: none;
}

.exchange-card-request-popup .popup-container .popup-close-button img {
  width: 24px;
  height: 24px;
}
</style>
