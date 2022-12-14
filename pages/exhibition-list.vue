<template>
  <div>
    <ExhibitionList></ExhibitionList>
  </div>
</template>

<script>
import ExhibitionList from '@/components/ApplicationServiceExhibition/ExhibitionList.vue'
export default {
  name: 'ExhibitionPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { ExhibitionList },
  layout: 'defaultWithSelect',
}
</script>