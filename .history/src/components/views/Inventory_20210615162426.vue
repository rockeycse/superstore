<template lang="">
          <div v-if="!loading" class="row">
            <div v-for="(item, index) in items" :key="index" class="card m-1" style="width: 13rem">
              <img :src="item.photo" class="card-img-top" alt="sorry" />
              <div class="card-body">
                <h5 class="card-title"> {{ item.title }} </h5>
                <p class="card-text">
                  {{ item.price }}
                </p>
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
      items: [],
    };
  },
  mounted() {
    this.fetchInventory();
  },
  methods: {
    addToCart(item) {
      this.$emit("newItemAdded", item);
    },
    fetchInventory() {
      var self = this;
      axios.get(`http://localhost:3000/items`).then((response) => {
        // console.log(response);
        setTimeout(function(){

        }, 3000)

      });
    },
  },
  // filters:{
  //   priceRound: function (value) {
  //   if (!value) return ''
  //   return Math.round(value);
  // }
  // }
};
</script>
<style lang="">
</style>
