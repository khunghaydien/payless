<template>
  <div>
    <SeminarStatus></SeminarStatus>
  </div>
</template>

<script>
import SeminarStatus from '@/components/Seminar/SeminarStatus.vue'
export default {
  name: 'ExhibitionPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { SeminarStatus },
  layout: 'defaultWithSelect',
}
</script>