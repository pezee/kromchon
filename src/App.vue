<template>
  
  <v-app elevation="1">
    <v-container  class="pt-0  mt-0 ">
      <span v-if=" $route.name != 'login'">
      <NavbarH></NavbarH>
    </span>
      <router-view class="my-0 mx-0 px-0 py-0" ></router-view>
    </v-container>
    
    
  </v-app>

</template>

<script>
 /* eslint-disable */ 
//import Nav_bar from "./views/Navbar"


import NavbarH from "./views/NavbarH"



export default { 

  data() {
    return {
      imgs: "@/assets/logohor.jpg",
    }
  },

  components: {
    NavbarH
  }

}
</script>

<style>

</style>