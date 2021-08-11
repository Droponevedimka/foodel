<template>
  <div class="top" :class="animPrize && 'anim', animPrizeMob && 'anim-mob'">
      
      <a class="top-logo" href="https://www.delivery-club.ru" target="_blank">
        <img class="top-logo-img" src="@/assets/img/logo.svg" />
      </a>

      <div class="top-midl" :class="animPrize && 'anim'">
        <ButtonWhite @click="socP">
            Подробнее о розыгрыше
        </ButtonWhite>
      </div>

      <div class="top-right" :class="animPrize && 'anim', animPrizeMob && 'anim-mob'">
        <a class="top-right-link" href="#four" @click="soc">          
          <p class="top-right-link-last">Призы здесь</p>
        </a>
        <img class="top-right-first" src="@/assets/img/top/prize.svg" />        
      </div>

    </div>
</template>

<script>
import style from './top-style.scss';
import ButtonWhite from "@/ui/buttonWhite/buttonWhite.vue"

export default {
  name: 'Top',
  props: [],
  components: {
    ButtonWhite
  },
  data(){
    return{
      animPrize: false,
      animPrizeMob: false
    }
  },
  methods: {
    updateAngle(){      
      
      let blockH = document.getElementById('baseHeight').scrollHeight;

      if(window.pageYOffset > blockH){
        this.animPrizeMob = true
      } else {
        this.animPrizeMob = false
      }


      if(window.pageYOffset > blockH){
        this.animPrize = true;                    
      } else {
        this.animPrize = false;  
          
      }
    },
    soc(){
      gtag('event', 'gifts_here', {
        'event_category' : 'gifts_here',
        'event_label' : 'gifts_here'
      });
    },
    socP(){
      gtag('event', 'button_rules', {
        'event_category' : 'button_rules',
        'event_label' : 'button_rules'
      });
    }
  },
  mounted(){
    this.updateAngle()
    window.addEventListener("scroll", (e)=>{
      this.updateAngle()
    })
  },
  computed: {
    publicPath(){
      return window.location.origin
    }
  }
}
</script>
