<template>
  <b-button
    v-bind="{ ...$props }"
    :class="textWhite"
    @click="click"
    @mouseover="$emit('mouseover')"
    @mousemove="$emit('mousemove')"
  >
    <b-spinner
      v-if="loading"
      label="Spinning"
      :variant="variantSpinner"
      :small="true"
    ></b-spinner>
    <slot v-else></slot
  ></b-button>
</template>

<script>
export default {
  name: 'SysButton',
  components: {},
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    pill: {
      type: Boolean,
      default: false,
    },
    squared: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit', 'reset'].includes(value),
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) =>
        [
          'primary',
          'secondary',
          'success',
          'warning',
          'danger',
          'info',
          'light',
          'dark',
          'outline-primary',
          'outline-secondary',
          'outline-success',
          'outline-warning',
          'outline-danger',
          'outline-info',
          'outline-light',
          'outline-dark',
        ].includes(value),
    },
    size: {
      type: String,
      default: null,
      validator: (value) =>
        ['', undefined, null, 'xs', 'sm', 'lg', 'xl', 'xxl'].includes(value),
    },
    iconLeft: {
      type: String,
      default: null,
    },
    iconRight: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    variantSpinner: {
      type: String,
      default() {
        if (this.variant === ('light' || 'outline-light')) {
          return 'dark'
        }
        return 'light'
      },
    },
  },
  computed: {
    textWhite() {
      if (this.variant === 'warning') {
        return 'text-white'
      }
      return ''
    },
  },
  methods: {
    click(e) {
      if (!this.loading) {
        this.$emit('click', e)
      }
    },
  },
}
</script>

<style></style>
