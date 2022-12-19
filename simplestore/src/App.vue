<template>
    <div>
      <Information/>
      <router-view/>
    </div>
</template>
<script>
import Information from '@/components/information.vue'


export default {
  components: {
    Information,
  
   
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

</style>
