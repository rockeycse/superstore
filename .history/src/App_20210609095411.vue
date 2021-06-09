<template>
  <div id="app">
    <navbar></navbar>

    <div class="container pt-4">
      <div class="row">
        <div class="col-sm-9">
          <inventory :items="items"></inventory>
        </div>
        <div class="col-sm-3">
          <cart></cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Inventory from "./components/Inventory";
import data from "./data.js";

console.log("Console data "+data);
export default {
  components: {
    Navbar,
    Cart,
    Inventory,
  },
  data() {
    return {
      items: data.data,
    };
  },
  mounted() {
    console.log("Hello");
    console.log("Console data "+data).data;
    this.items = data;
  },
};
</script>

<style>
</style>
