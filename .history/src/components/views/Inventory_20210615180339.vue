<template lang="">
  <div v-if="!loading" class="row">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="card m-1"
      style="width: 13rem"
    >
      <router-link tag="div" :to="{ path: '/item/' + item.id }">
        <img :src="item.photo" class="card-img-top" alt="sorry" />
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
        </div>
      </router-link>
      <div class="card-footer">
        <span class="card-text">
          {{ item.price }}
        </span>
        <a @click="addToCart(item)" class="btn btn-primary">+ add</a>
      </div>
    </div>
  </div>
  <h1 v-else>Loading...</h1>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: true,
      items: []
    };
  },
  mounted() {
    this.fetchInventory();
  },
  methods: {
    addToCart(item) {
      this.$("newItemAdded", item);
      // this.$emit("newItemAdded", item);
    },
    fetchInventory() {
      var self = this;
      axios.get(`http://localhost:3000/items`).then(response => {
        // console.log(response);
        self.items = response.data;
        self.loading = false;
        // setTimeout(function () {
        //   self.items = response.data;
        //   self.loading = false;
        // }, 3000);
        // setTimeout(() => {
        //   self.items = response.data;
        //   self.loading = false;
        // }, 3000);
      });
    }
  }
  // filters:{
  //   priceRound: function (value) {
  //   if (!value) return ''
  //   return Math.round(value);
  // }
  // }
};
</script>
<style lang=""></style>
