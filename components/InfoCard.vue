<template>
  <div class="info-card" px-12>
    {{ title }}
  </div>
</template>

<script setup lang="ts">
const { title } = $defineProps<{
  title: string
}>()
</script>

<style scoped lang="scss">
.info-card {
  width: 300px;
  height: 300px;
  background-color: burlywood;
}
</style>
