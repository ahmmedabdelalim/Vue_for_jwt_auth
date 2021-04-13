<template>
  <div id="nav">
    
  </div>
  <Navebar />
  <router-view />
</template>


<script lang="ts">
import Navebar from '@/components/Navebar.vue';
// @ is an alias to /src
export default {
  name: "App",
  components:
  {
    Navebar,
  },
  
};
</script>
 
