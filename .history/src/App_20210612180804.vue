<template>
  <div id="app">
    <router-link :to="{path:''}">Home Route</router-link>
    <router-link :to="{path:'/test'}">Test Route</router-link>
    <router-view></router-view>
    <!-- <navbar @search="search"></navbar>

    <div class="container pt-4">
      <div class="row">
        <div class="col-sm-9">
          <inventory @newItemAdded="addCartItem" :items="items"></inventory>
        </div>
        <div class="col-sm-3">
          <cart @removeFromCart="removeItem" :items="cart"></cart>
        </div>
      </div>
    </div> -->
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
     this.items = data.filter(item => {
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
