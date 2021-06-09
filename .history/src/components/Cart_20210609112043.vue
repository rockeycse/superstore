<template>
  <ul class="list-group">
    <li>
      <span class="item-name">Name</span>
      <span class="item-name">Price</span>
    </li>
    <li v-for="(item, index) in items" :key="index" class="list-group-item">

<span class="item-name"> {{ item.title }} </span>
<span class="item-price float-right"> {{ item.price }} </span>
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

