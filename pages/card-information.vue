<template>
  <div>
    <CardInformation></CardInformation>
  </div>
</template>

<script>
import CardInformation from '@/components/AccountManagement/CardInformation.vue'
export default {
  name: 'ExhibitionPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { CardInformation },
  layout: 'defaultWithSelect',
}
</script>
