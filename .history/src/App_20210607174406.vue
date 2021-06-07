<template>
  <div id="app">
<navbar></navbar>

    <div class="container pt-4">
      <div class="row">
        <div class="col-sm-9">

        </div>
        <div class="col-sm-3">
         <cart></cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import Navbar from './components/Navbar'
 import Cart from './components/Cart'
 import Navbar from './components/Inventory'
export default {
components:{
  Navbar,
  Cart,
  
}
};
</script>

<style>
</style>
