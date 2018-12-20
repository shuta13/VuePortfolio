<template>
  <div id="home" style="color: #80C0C0;">
    <radial-menu
        style="margin: auto; margin-top: 300px; background-color: white"
        :itemSize="55"
        :radius="145"
        :angle-restriction="180">
      <radial-menu-item 
          v-for="(item, index) in items" 
          :key="index" 
          style="background-color: white; font-family: 'Thasadith'; 
          font-size: 18px;"
          @click="() => handleClick(item)">
        <span style="color: rgba(0,0,0,0.6);">{{item}}</span>
      </radial-menu-item>
    </radial-menu>
    <div style="color: rgba(0,0,0,1); margin-top: 16px; text-align: center; 
        font-family: 'Thasadith'; font-size: 25px;">{{ lastClicked }}</div>
  </div>
</template>

<script>
import { RadialMenu,  RadialMenuItem } from 'vue-radial-menu'

export default {
  name: 'home',
  components: {
    RadialMenu,
    RadialMenuItem
  },
  data () {
    return {
      items: ['about', 'app', 'graphics', 'paint', 'music', 'others'],
      lastClicked: 'click!',

      customizedClass: 'hoge'
    
    }
  },
  methods: {
    handleClick (item) {
      this.lastClicked = item;
    }
  }
}
</script>
