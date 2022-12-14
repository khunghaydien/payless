<template>
  <div>
    <OrganizersNotice></OrganizersNotice>
  </div>
</template>

<script>
import OrganizersNotice from '@/components/ExhibitionOverview/OrganizersNotice.vue'
export default {
  name: 'ExhibitionPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { OrganizersNotice },
  layout: 'defaultWithSelect',
}
</script>
