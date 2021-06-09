<template>
  <div id="app">
    <navbar></navbar>

    <div class="container pt-4">
      <div class="row">
        <div class="col-sm-9">
          <inventory :items="items"></inventory>
        </div>
        <div class="col-sm-3">
          <cart :items="cart"></cart>
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
      cart: [
        {
          id: 96,
          title: "GMC",
          photo: "http://dummyimage.com/250x250.png/ff4444/ffffff",
          email: "lpossell2n@fema.gov",
          price: "$76524.94",
        },
      ],
    };
  },
  mounted() {
    // console.log(data);
    this.items = data;
  },
  methods: {
    addCartItem(item){
thi
    }
  },
};
</script>

<style>
</style>
