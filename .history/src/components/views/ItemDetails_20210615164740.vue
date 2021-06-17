<template>
    <div>
        <h3>Details {{ $route.params.id }} </h3>
    </div>
</template>

<script>
import axios from 'axios'

export default {
data() {
  return {
    item: null
  }
},
methods: {
  fetchItem(){
    axios.get(`http://localhost:3000/item` + $route.params.id).then(response => {
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
},
}
</script>
<style lang="">

</style>
