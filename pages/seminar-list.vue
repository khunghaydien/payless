<template>
  <div>
    <SeminarList></SeminarList>
  </div>
</template>

<script>
import SeminarList from '@/components/Seminar/SeminarList.vue'
export default {
  name: 'ExhibitionPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { SeminarList },
  layout: 'defaultWithSelect',
}
</script>
