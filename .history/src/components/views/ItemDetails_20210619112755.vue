<template>
  <div v-if="item" class="row">
    <div class="col-sm-6">
      <img :src="item.photo" alt="Photo" />
    </div>
    <div class="col-sm-6">
      <h4>{{ item.title }}</h4>
      <p>{{ item.description }}</p>
      <div class="card-footer">
        <span>${{ item.price }}</span>
        <button
          @click="addToCart(item)"
          class="btn btn-sm btn-primary float-right"
        >
          + add
        </button>
      </div>
      <!-- <p>{{ item.price }}</p> -->
    </div>
    <!-- <h3>Details {{ item }}</h3> -->
  </div>
  <h1 v-else>Loading...</h1>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      item: null
      // loading: false
    };
  },
  mounted() {
    this.fetchItem();
  },
  methods: {
    fetchItem() {
      var self = this;
      // self.loading = true;
      axios
        .get(`http://localhost:3000/item/` + this.$route.params.id)
        .then(response => {
          // console.log(response);
          self.item = response.data;
          // self.loading = true;

          // setTimeout(() => {
          //   self.items = response.data;
          //   self.loading = false;
          // }, 3000);
        });
    },
    addToCart(item){
      this.$sto
    }
  }
};
</script>
<style lang=""></style>
