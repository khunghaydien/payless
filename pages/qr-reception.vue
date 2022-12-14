<template>
  <div>
    <QRReception></QRReception>
  </div>
</template>

<script>
import QRReception from '@/components/ExhibitionOverview/QRReception.vue'
export default {
  name: 'ExhibitionPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { QRReception },
  layout: 'defaultWithSelect',
}
</script>
