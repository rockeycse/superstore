<template lang="">
          <div class="row">
            <div v-for="(item, index) in items" :key="index" class="card m-1" style="width: 13rem">
              <img src="item.photo" class="card-img-top" alt="sorry" />
              <div class="card-body">
                <h5 class="card-title"> {{ item.title }} </h5>
                <p class="card-text">
                  {{ item.price }}
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
