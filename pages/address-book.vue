<template>
  <div>
    <AddressBook></AddressBook>
  </div>
</template>

<script>
import AddressBook from '@/components/ExhibitorsVisiting/AddressBook.vue'
export default {
  name: 'ExhibitionPage',
  // eslint-disable-next-line vue/no-unused-components
  components: { AddressBook },
  layout: 'defaultWithSelect',
}
</script>
