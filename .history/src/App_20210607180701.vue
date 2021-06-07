<template>
  <div id="app">
    <navbar></navbar>

    <div class="container pt-4">
      <div class="row">
        <div class="col-sm-9">
          <inventory></inventory>
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
import data from './data'

export default {
  components: {
    Navbar,
    Cart,
    Inventory
  },
  mounted:{
    console.log()
  }
};
</script>

<style>
</style>
