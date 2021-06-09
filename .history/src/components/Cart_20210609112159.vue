<template>
  <ul class="list-group">
    <li class="list-group-item">
      <span class="item-name">Name</span>
      <span class="item-price float-right">Price</span>
    </li>
    <li v-for="(item, index) in items" :key="index" class="list-group-item">
      <span class="item-name"> {{ item.title }} </span>
      <span class="item-price float-right"> {{ item.price }} </span>
    </li>
    <li class="list-group-item">
      <span class="item-name">Total</span>
      <span class="item-price float-right"> $100 </span>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["items"],
};
</script>
<style>
</style>

