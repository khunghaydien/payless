<template>
  <div>
    <QrCode></QrCode>
  </div>
</template>

<script>
import QrCode from '../components/ApplicationServiceExhibition/QrCode2.vue'
export default {
  name: 'ExhibitionPage',
  components: { QrCode },
  layout: 'login',
}
</script>
