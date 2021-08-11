<template>
  <div class="four main__margin-top" >
    <div class="four__left">
      <div class="four__left__block">
        <h1>Закажи продукты прямо сейчас и&nbsp;участвуй в&nbsp;розыгрыше <br/>призов</h1>
      </div>
      <img class="four__left--delivery"  src="@/assets/img/four/delivery.svg" />
      <buttonGreen  class="four__left__btn" target="_blank" :href="linkDel">
        Заказать продукты
      </buttonGreen>
    </div>
    <div class="four__right" id="four">
      <div class="four__right__block">
        <h1>Выиграй </h1>

        <carousel class="four__right__carousel" :items-to-show="1"  :wrapAround="true">
          <slide class="four__right__carousel--slide" v-for="(slide, index) in mas" :key="slide">
            <div class="four__right__carousel--txt" v-html="slide.title"> </div>
            <img class="four__right__carousel--img" :class="index==4 && 'iphone'" :src="require(`@/assets/img/base/carousel/${slide.img}`)" />
            <div class="four__right__desc" v-html="slide.txt">
              
            </div>
          </slide>   
          <template #addons>
            <div class="four__right__navigation">
              <navigation />        
            </div>  
          </template>     
        </carousel>

        

        <router-link to="/rules" class="four__right__link" @click="socF">Условия розыгрыша</router-link>
        
      </div>

      <buttonGreen class="four__right__btn" target="_blank" :href="linkDel">
        Заказать продукты
      </buttonGreen>
    </div>
  </div>
</template>

<script>
import style from './four-style.scss';
import buttonGreen from "@/ui/button/button.vue";

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';



export default {
  name: 'Four',
  props: [],
  data(){
    return{      
      linkDel: 'https://www.delivery-club.ru/grocery?utm_source=grocery_project_2021&utm_medium=grocery_project_2021_3&utm_campaign=grocery_project_2021',
      mas: [
        {title: 'Умный экран <br/>HUAWEI Vision S', txt:'Видеовызовы в высоком разрешении <br/>Качественное изображение с&nbsp;частотой <br/>обновления 120 Гц <br/>4 динамика HUAWEI Sound', img:'huaweiTv.png'},
        {title: 'Промокод Delivery Club', txt:'Промокод на заказ продуктов от&nbsp;Delivery&nbsp;Club', img:'del1000.png'},
        {title: 'Промокод Delivery Club', txt:'Промокод на заказ продуктов от&nbsp;Delivery&nbsp;Club', img:'del2000.png'},
        {title: 'Промокод Delivery Club', txt:'Промокод на заказ продуктов от&nbsp;Delivery&nbsp;Club', img:'del3000.png'},
        {title: 'Яблочный флагман <br/>последнего поколения', txt:'128 GB', img:'iphone.png'},
        {title: 'Подарочный набор <br/>Delivery club', txt:'Подарочный набор Delivery club <br/>ДОЖДЕВИК <br/>КОЛОНКА <br/>POWER BANK* <br/>БРЕНДОВЫЙ ПЛЕД <br/><span>*переносной блок питания.</span> ', img:'podarServ.png'},
        {title: 'Гарантированный приз', txt:'Более 100 000 фильмов и&nbsp;сериалов без рекламы, в&nbsp;высоком качестве!', img:'ivix4.png'},
        {title: 'Сертификат IVI', txt:'Год эксклюзивных премьер на&nbsp;всех ваших устройствах!', img:'garand.png'}
        ]
    }
  },
  methods: {
    socF(){
      gtag('event', 'conditions_rules', {
        'event_category' : 'conditions_rules',
        'event_label' : 'conditions_rules'
      });
    },
    getMobileOperatingSystem() {
           var userAgent = navigator.userAgent || navigator.vendor || window.opera;
           if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
           {
              return 'iphone';
           }
           else if( userAgent.match( /Android/i ) )
           {
              return 'phone';
           }
           else
           {
              return 'unknown';
           }
        }
  },
  mounted(){
    if(this.getMobileOperatingSystem() !== 'iphone'){
      this.linkDel = 'dclub://pushaction/?data=ewogICAgIm1ldGhvZCI6IDI0LAoicHJvbW9jb2RlIjogeyAgICAgICAgICAKICAgICAgICAiY29kZSI6ICJMRVRPTSIKICAgIH0KfQo=&mt_link_id=n5kv78';
    }

  },
  computed: {
    publicPath(){
      return window.location.origin
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    buttonGreen
  }
}
</script>
