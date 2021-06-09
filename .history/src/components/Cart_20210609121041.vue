<template>
  <ul class="list-group">
    <li class="list-group-item">
      <span class="item-name">Name</span>
      <span class="item-price float-right">Price</span>
    </li>
    <hr />
    <li v-for="(item, index) in items" :key="index" class="list-group-item">
      <div class="row">
        <div class="col-md-2">
          <button type="button" class="btn btn-sm btn-danger btn-fl">-</button>
        </div>
        <div class="col-md-10">
          <span class="item-name"> {{ item.title }} </span>
          <span class="item-price float-right"> {{ item.price }} </span>
        </div>
      </div>
    </li>
    <hr />
    <li class="list-group-item">
      <span class="item-name">Total</span>
      <span class="item-price float-right"> ${{ totalPrice }} </span>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["items"],
  computed: {
    totalPrice() {
      var total = 0;
      this.items.forEach((item) => {
        total += parseFloat(item.price.slice(1));
      });
      return total;
    },
  },
};
</script>
<style>
</style>

