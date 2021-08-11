<template>
  <div id="baseHeight" class="base">
    <div class="base__left">
      <div class="base__left--fixed">
      </div>
      <div class="base__left__block">
        <h1 class="base__left__block-title">Мы знаем, <br />что вам делать этим&nbsp;летом</h1>
        <p class="base__left__block-desc main__p">Покупай <br class="br__mob"/>продукты <br class="br__desk" />и участвуй в&nbsp;розыгрыше</p>
      </div>
      <buttonGreen class="base__left__btn" target="_blank" href="https://www.delivery-club.ru/grocery?utm_source=grocery_project_2021&utm_medium=grocery_project_2021_1&utm_campaign=grocery_project_2021">
        Заказать продукты
      </buttonGreen>
    </div>
    <div class="base__right">
      <carousel class="base__right__carousel" :items-to-show="1" :autoplay="5000" :wrapAround="true" >
        <slide class="base__right__carousel--slide" v-for="(slide, index) in mas" :key="slide + index">
          <div class="base__right__carousel--txt" v-html="slide.txt"> </div>
          <img class="base__right__carousel--img" :class="index==4 && 'iphone'" :src="require(`@/assets/img/base/carousel/${slide.img}`)" />
        </slide>   
        <template #addons>
          <div class="base__right__navigation">
            <navigation />        
          </div>  
        </template>     
      </carousel>
        <div class="base__right--other">
          <img src="@/assets/img/base/prize.svg" class="base__right--other-img" />
          <router-link to="/rules" @click="soc()" class="base__right--link">Подробнее о розыгрыше </router-link>          
        </div>
    </div>
  </div>
</template>

<script>
import style from './base-style.scss';
import buttonGreen from "@/ui/button/button.vue";

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'Base',
  props: [],
  data(){
    return{
      mas: [
        {img:'huaweiTv.png', txt: 'Умный экран <br/>HUAWEI Vision S'},
        {img:'del1000.png', txt: 'Промокод Delivery Club'},
        {img:'del2000.png', txt: 'Промокод Delivery Club'},
        {img:'del3000.png', txt: 'Промокод Delivery Club'},
        {img:'iphone.png', txt: 'Яблочный флагман <br/>последнего поколения'},
        {img:'podarServ.png', txt: 'Подарочный набор <br/>Delivery club'},
        {img:'ivix4.png', txt: 'Гарантированный приз'},
        {img:'garand.png', txt: 'Сертификат IVI '}
        ]
    }
  },
  mounted(){
    
  },
  methods: {
    soc(){
      gtag('event', 'details_rules', {
        'event_category' : 'details_rules',
        'event_label' : 'details_rules'
      });

      console.log('1')
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
