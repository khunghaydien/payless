<template>
  <div>
    <FormCompanyInfo></FormCompanyInfo>
  </div>
</template>

<script>
import FormCompanyInfo from '../components/ApplicationServiceExhibition/FormCompanyInfo.vue'
export default {
  name: 'ExhibitionPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { FormCompanyInfo },
  layout: 'login',
}
</script>
