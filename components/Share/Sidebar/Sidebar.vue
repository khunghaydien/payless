<template>
  <div class="sidebar">
    <div class="sidebar-header bg-primary">{{ title }}</div>
    <nuxt-link
      v-for="(item, index) in options"
      :key="`sidebar${index}`"
      :to="item.value"
    >
      <div
        class="sidebar-item d-flex justify-content-between"
        :class="{ active: $route.path.replace('/', '') === item.value }"
        @click="changePath(item.text, item.value)"
      >
        <div>
          {{ item.text }}
        </div>
        <img src="@/assets/icon/chev-right.png" alt="" />
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'BaseSidebar',
  props: {
    options: {
      type: Array,
      default() {
        return []
      },
    },
    title: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 1,
    },
  },
  created() {},
  data() {
    return {}
  },
  methods: {
    changePath(text, value) {
      this.$emit('changeTap', text, value)
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  border-radius: 8px;
  border: 1px solid #d1d1d1;
  font-size: 14px;
  &-item {
    padding: 16px;
    border-bottom: 1px solid #d1d1d1;
    cursor: pointer;
    color: #555555;
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      text-decoration: none;
    }
  }
  &-header {
    border-radius: 8px 8px 0 0;
    color: #ffffff;
    padding: 16px;
  }
  & .active {
    color: #0194c0;
    font-weight: bold;
  }
}
a:hover {
  text-decoration: unset !important;
}
</style>
