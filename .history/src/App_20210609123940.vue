<template>
  <div id="app">
    <navbar @search="search"></navbar>

    <div class="container pt-4">
      <div class="row">
        <div class="col-sm-9">
          <inventory @newItemAdded="addCartItem" :items="items"></inventory>
        </div>
        <div class="col-sm-3">
          <cart @removeFromCart="removeItem" :items="cart"></cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Inventory from "./components/Inventory";
import data from "./data.json";

export default {
  components: {
    Navbar,
    Cart,
    Inventory,
  },
  data() {
    return {
      items: [],
      cart: [],
    };
  },
  mounted() {
    // console.log(data);
    this.items = data;
  },
  methods: {
    search(keyword) {
      data.filter((item) => {
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    },
    addCartItem(item) {
      this.cart.push(item);
    },
    removeItem(index) {
      this.cart.splice(index, 1);
    },
  },
};
</script>

<style>
</style>
