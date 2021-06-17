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
  fetchItem()
},
}
</script>
<style lang="">

</style>
