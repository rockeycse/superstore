<template>
  <div class="row">
    <div class="col-sm-6">
      <img src="{{ item.photo }}" alt="Photo">
    </div>
    <div class="col-sm-6">
      
    </div>
    <h3>Details {{ item }}</h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      item: null
    };
  },
  mounted() {
    this.fetchItem();
  },
  methods: {
    fetchItem() {
      var self = this;
      axios
        .get(`http://localhost:3000/item/` + this.$route.params.id)
        .then(response => {
          // console.log(response);
          self.item = response.data;
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
};
</script>
<style lang=""></style>
