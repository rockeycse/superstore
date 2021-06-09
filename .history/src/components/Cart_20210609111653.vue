<template>
  <ul class="list-group">
    <li v-for="(item, index) in items" :key="index" class="list-group-item">Item - price</li>
  </ul>
</template>
<script>
export default {
  props: ['items'],
};
</script>
<style>
</style>

