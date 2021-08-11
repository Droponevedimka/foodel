<template>
  <div class="second main__margin-top">
    <div class="second__left">
      <div class="second__left__block">
        <h1 class="second__left__block-h">Удели время лету! </h1>
        <p class="main__mid">Заказывай в&nbsp;магазинах через <span>Delivery Club</span> от&nbsp;699₽ и&nbsp;выигрывай!</p>
      </div>
      <buttonGreen class="second__left__btn" href="https://www.delivery-club.ru/grocery?utm_source=grocery_project_2021&utm_medium=grocery_project_2021_2&utm_campaign=grocery_project_2021" target="_blank">
        Заказать продукты
      </buttonGreen>
    </div>
    <div class="second__right">
      <div class="second__right__block">
        <div class="second__right__block--marq">
          <div class="second__right__block--marq-anim">
            <a class="second__right__block--link" href="#" v-for="item in mas.concat(mas)">
              <img class="second__right__block--img" :src="require(`@/assets/img/second/${item}.svg`)" />
            </a>
          </div>
        </div>              
      </div>      

      <buttonGreen class="second__right__btn" href="https://www.delivery-club.ru/grocery?utm_source=grocery_project_2021&utm_medium=grocery_project_2021_2&utm_campaign=grocery_project_2021" target="_blank">
        Заказать продукты
      </buttonGreen>
    </div>
  </div>
</template>

<script>
import style from './second-style.scss';
import buttonGreen from "@/ui/button/button.vue";

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';



export default {
  name: 'Second',
  props: [],
  data(){
    return{
      mas: ['vkusvill', 'vernii', 'samokat', 'magnit']
    }
  },
  mounted(){
    
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
