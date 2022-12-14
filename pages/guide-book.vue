<template>
  <div>
    <GuideBook></GuideBook>
  </div>
</template>

<script>
import GuideBook from '@/components/ExhibitionOverview/GuideBook.vue'
export default {
  name: 'ExhibitionPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { GuideBook },
  layout: 'defaultWithSelect',
}
</script>
