<template>
  <button v-if="image" class="button" :class="classes.button">
    <slot name="image" />
    <p style="margin-left: 8px;">
      <slot />
    </p>
  </button>
  <div v-else-if="onlyImg">
    <slot name="image" />
  </div>
  <button v-else class="button" :class="classes.button">
    <p>
      <slot />
    </p>
  </button>
</template>

<script>
export default {
  name: "v-button",
  props: {
    theme: {
      type: String,
      default: null
    },
    image: {
      type: Boolean,
      default: false
    },
    onlyImg: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      classes: {
        button: {
          'button-light': this.theme === 'light',
          'button-search': this.theme === 'search'
        }
      },
    }
  },
  watch: {
    theme() {
      this.classes.button['button-light'] = this.theme === 'light'
      this.classes.button['button-search'] = this.theme === 'search'
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    background: #2EB85C;
    border-radius: 4px;
    border: none;
    padding: 6px 24px;
    color: #FEFEFE;
    font-weight: 350;
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &-light {
      border: 1px solid #2EB85C;
      border-radius: 4px;
      color: #2EB85C;
      background: none;
    }

    &-search{
      border: none;
      margin: 0px;
      background: none;
    }

    .image {
      width: 20px;
      height: 20px;
      object-fit: contain;
    }
  }
</style>