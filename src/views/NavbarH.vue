<template>
    
    <LogoH></LogoH>
    <nav>
      <v-toolbar app  color="white" dark  height="85" class="mt-0 pt-0" width="1200" elevation="2">
        <span v-for="menu in listmenu" :key="menu.text" >
          <v-btn variant="flat" :to="menu.route">{{ menu.text }}</v-btn>
        </span>
      </v-toolbar>
    </nav>
  </template> 
  
  <script>
  import LogoH from "../views/LogoHView"
  
  export default {
      name: 'NavbarH',
      data() {
        return {
          drawer: false,
          
          listmenu: [
            {text:" หน้าหลัก",route:"/home"},
            {text:" มอนิเตอร์",route:"/monitor"},
            {text:"ข้อมูลอุปกรณ์",route:"/accessory"},
            {text:"สัญญาณแจ้งเตือน",route:"/alarm"},
            {text:"รายงาน",route:"/report"},
            {text:"การจัดการระบบ",route:"/setup"},
            {text:"ช่วยเหลือ",route:"/help"},
          ]
        }
      },

      components: {
          LogoH
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

    span:first-child {
        margin-left: 15px !important;
    }
    .v-btn{
        border: 1px solid cyan;
        border-radius: 10px;
        height: 70px !important;
        
        margin-right: 2px;
    }
    .v-btn:hover {
        background: rgb(59, 121, 254);
        color:white;
    }
  </style>