<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "v-container"
}
</script>

<style scoped>
.container {
  margin: 0px 20px;
}
</style>