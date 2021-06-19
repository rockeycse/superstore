<template>
  <ul class="list-group">
    <li class="list-group-item">
      <span class="item-name">Name</span>
      <span class="item-price float-right">Price</span>
    </li>
    <hr />
    <li v-for="(item, index) in items" :key="index" class="list-group-item">
      <div class="row">
        <div class="col-sm-2">
          <button
            type="button"
            class="btn btn-sm btn-danger"
            @click="removeItem(index)"
          >
            -
          </button>
        </div>
        <div class="col-sm-10">
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
    <li class="list-group-item">
      <button class="btn btn-block"></button>
    </li>
  </ul>
</template>
<script>
export default {
  computed: {
    items() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      var total = 0;
      this.items.forEach(item => {
        total += parseFloat(item.price.slice(1));
      });
      return total.toFixed(2);
      return Math.round(total).toFixed(2);
    }
  },
  methods: {
    removeItem(index) {
      this.$store.commit("removeItem", index);
    }
  }
};
</script>
<style></style>
