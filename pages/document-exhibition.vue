<template>
  <div>
    <DocumentExhibition></DocumentExhibition>
  </div>
</template>

<script>
import DocumentExhibition from '@/components/ExhibitorsVisiting/DocumentExhibition.vue'
export default {
  name: 'ExhibitionPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { DocumentExhibition },
  layout: 'defaultWithSelect',
}
</script>
