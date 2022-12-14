<template>
  <div>
    <AccountInformation></AccountInformation>
  </div>
</template>

<script>
import AccountInformation from '@/components/AccountManagement/AccountInformation.vue'
export default {
  name: 'ExhibitionPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { AccountInformation },
  layout: 'defaultWithSelect',
}
</script>