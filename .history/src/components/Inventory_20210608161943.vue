<template lang="">
          <div class="row">
            <div v-for="(item,index) in items" ::key="index" class="card m-1" style="width: 13rem">
              <img src="item.photo" class="card-img-top" alt="sorry" />
              <div class="card-body">
                <h5 class="card-title"> {{ item. }} </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

          </div>
</template>
<script>
export default {
  props: ['items']
};
</script>
<style lang="">
</style>
