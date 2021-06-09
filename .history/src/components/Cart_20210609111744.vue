<template>
  <ul class="list-group">
    <li v-for="(item, index) in items" :key="index" class="list-group-item">

<span class="item-name"></span>
    </li>
  </ul>
</template>
<script>
export default {
  props: ['items'],
};
</script>
<style>
</style>

