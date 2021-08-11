<template>    
  <div class="main">
    <div class="main-background">
      <img class="main-background-img" src="@/assets/img/background.png" />
    </div>    
    <Top />
    <Base />
    <Second />

    <Third />

    <Four />

    <Winers />
    
  </div>
  <Bottom />
</template>

<script>
import Bottom from "@/components/Bottom/bottom.vue"
import Top from "@/components/Top/top.vue"
import Base from "@/components/Base/base.vue"
import Second from "@/components/Second/second.vue"
import Third from "@/components/Third/third.vue"
import Four from "@/components/Four/four.vue"
import Winers from "@/components/Winers/winers.vue"

import style from "./main-style.scss";


export default {
  name: 'Main',
  props: [],
  data(){
    return{
        
    }
  },
  components: {
    Bottom, Top, Base, Second, Third, Four, Winers
  },  
  methods: {
    
  },
  mounted(){
    
  },
  computed: {
    
  }
}
</script>
