<template>
  <nav>
    <v-toolbar app  color="light-blue-lighten-4" dark image="https://www1.rid.go.th/_data/images/top_banner/121RID.png" height="115">
      
        <v-toolbar-side-icon @click="drawer=!drawer" class="ms-3" color="blue"><span class="mdi mdi-menu"></span></v-toolbar-side-icon>
        <v-toolbar-title class="headline text-uppercase text-start">
        <span class="font-weight-light blue--text">กรมชลประทาน</span>
        </v-toolbar-title>  
        <v-spacer></v-spacer>
        <v-btn color="blue" target="_blank" href="#"><span class="mdi mdi-home" color="red"></span>หน้าหลัก</v-btn>
        <v-btn color="red" target="_blank" href="#"><span class="mdi mdi-exit-run"></span>ออกจากระบบ</v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="bg-white" elevation="1">
      <v-img src="../assets/custlogo.png" width="235" ></v-img>

      <v-hover v-for="menu in listmenu" :key="menu.text">
        
        <template v-slot:default="{ isHovering,menutext, props }">
          

          <v-card router :to= 'menu.route'
            v-bind="props"
            :color="isHovering ? 'blue text-white' : 'indigo-lighten-2'"
            :text="menutext = menu.text "
            class="mx-1 my-1 pt-0 text-white"
            :prepend-icon="menu.icon" 
            @click="drawer=!drawer"
            height="85"

          >
          </v-card>
          
        </template>
        
      </v-hover>

      <v-divider></v-divider>
      
    </v-navigation-drawer>

  </nav>
</template> 

<script>


export default {
    name: 'Nav_bar',
    data() {
      return {
        drawer: false,

        listmenu: [
          {icon:"mdi mdi-home-circle",text:" หน้าหลัก",route:"/home"},
          {icon:"mdi mdi-car-estate",text:" รถยนต์",route:"/car"},
          {icon:"mdi mdi-sail-boat",text:" เรือ",route:"/boat"},
          {icon:"mdi mdi-water-pump",text:" เครื่องสูบน้ำ",route:"/pump"},
          {icon:"mdi mdi-bell-ring",text:" สัญญาเตือน",route:"/warning"},
          {icon:"mdi mdi-bookshelf",text:" รายงาน",route:"/report"},

        ]
      }
    }


}
</script>

<style scoped>
 
  .v-card {
    background: rgb(27, 114, 185);
    background: linear-gradient(270deg, rgba(27, 114, 185,1) 0%, rgba(27, 114, 185,1) 10%, rgba(0,212,255,1) 100%);
  }
  .v-card:hover {
    font-size: 1.8em;
    background: rgb(248, 187, 208);
    background: linear-gradient(90deg, rgba(248, 187, 208,1) 0%, rgba(248, 187, 208,1) 10%, rgba(0,212,255,1) 100%);
    text-align:end;
  }
</style>