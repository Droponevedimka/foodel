<template>
  <div class="third main__margin-top">
    <div class="third__title">     
        <h1>Оставь заботы о&nbsp;походе в&nbsp;магазин <span>Delivery Club</span></h1>
        <p class="main__p">...и выбери отдых на свой вкус:</p>      
    </div>
    <div class="third__posts">
       <div class="third__posts__item" v-for="item in (activeNeKar ? masTwo : mas)" :key="item.id" @click="openModal(item.url, item.id)">
        <div class="third__posts__item--title" v-html="item.title"></div>
        <img class="third__posts__item--img" :class="item.id == 4 && 'velo', item.id == 5 && 'banan', item.id == 6 && 'potate'" :src="require(`@/assets/img/third/post-${item.id}.svg`)" />
        <div class="third__posts__item--likes" @click.stop="changeLike(item.id)">
          <svg class="third__posts__item--likes-img" :class="item.likeTumb && 'like'" width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.3988 5.5817L39.4008 5.5837C43.902 10.1942 43.8947 17.3606 39.4085 21.9344L39.4082 21.9347L24.6708 36.966C23.4946 38.1656 21.5627 38.1656 20.3865 36.966L5.64912 21.9347L5.64882 21.9344C1.16173 17.3597 1.15613 10.1933 5.64762 5.5928L5.6505 5.58984C6.69733 4.51315 7.94043 3.66042 9.30718 3.07873C10.6735 2.49721 12.1376 2.19751 13.6157 2.1958C16.4039 2.19618 19.0971 3.26426 21.1605 5.19942L22.5285 6.48237L23.8966 5.1996C25.9604 3.2646 28.6537 2.1965 31.4421 2.1958C32.9183 2.19708 34.3806 2.49584 35.7455 3.07595C37.1107 3.65623 38.3526 4.50712 39.3988 5.5817Z"  stroke="#2E2E33" stroke-width="4"/>
          </svg>
          <p class="third__posts__item--likes-nmr">{{item.likes}} </p>
        </div>
       </div>
    </div>

    <carousel class="third__carousel" :items-to-show="1" :wrapAround="true">
      <slide class="third__posts__item" v-for="item in (activeNeKar ? masTwo : mas)" :key="item.id" @click.prevent="openModal(item.url)">
        <div class="third__posts__item--title" v-html="item.title"></div>
        <img class="third__posts__item--img" :class="item.id == 4 && 'velo', item.id == 5 && 'banan', item.id == 6 && 'potate'" :src="require(`@/assets/img/third/post-${item.id}.svg`)" />
        <div class="third__posts__item--likes" @click.stop="changeLike(item.id)">
          <svg class="third__posts__item--likes-img" :class="item.likeTumb && 'like'" width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.3988 5.5817L39.4008 5.5837C43.902 10.1942 43.8947 17.3606 39.4085 21.9344L39.4082 21.9347L24.6708 36.966C23.4946 38.1656 21.5627 38.1656 20.3865 36.966L5.64912 21.9347L5.64882 21.9344C1.16173 17.3597 1.15613 10.1933 5.64762 5.5928L5.6505 5.58984C6.69733 4.51315 7.94043 3.66042 9.30718 3.07873C10.6735 2.49721 12.1376 2.19751 13.6157 2.1958C16.4039 2.19618 19.0971 3.26426 21.1605 5.19942L22.5285 6.48237L23.8966 5.1996C25.9604 3.2646 28.6537 2.1965 31.4421 2.1958C32.9183 2.19708 34.3806 2.49584 35.7455 3.07595C37.1107 3.65623 38.3526 4.50712 39.3988 5.5817Z"  stroke="#2E2E33" stroke-width="4"/>
          </svg>
          <p class="third__posts__item--likes-nmr">{{item.likes}} </p>
        </div>
      </slide>
        
      <template #addons>
        <div class="third__navigation">
          <navigation />        
        </div>  
      </template>     
    </carousel>
    
    <router-view> </router-view>

  </div>
</template>

<script>
import style from './third-style.scss';

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';


export default {
  name: 'Third',
  props: [],
  data(){
    return{
      activeModal: 3,
      activeNeKar: false,
      mas: [{
        id: 1,
        title: 'Приготовить тематический ужин',
        likes: 267,
        likeTumb: false,
        url: 'Dinner'
      },
      {
        id: 2,
        title: 'Развернуть огород на балконе',
        likes: 321,
        likeTumb: false,
        url: 'Garden'
      },
      {
        id: 3,
        title: 'Устроить марафон сериалов',
        likes: 403,
        likeTumb: false,
        url: 'Serial'
      }],
      masTwo: [{
        id: 4,
        title: 'Веломаршруты',
        likes: 267,
        likeTumb: false,
        url: 'Velpath'
      },
      {
        id: 5,
        title: 'Маленькие города',
        likes: 321,
        likeTumb: false,
        url: 'Smallcity'
      },
      {
        id: 6,
        title: 'Водоёмы: рыбалка <br/>и купание',
        likes: 403,
        likeTumb: false,
        url: 'Reservoirs'
      }],
    }
  },
  mounted(){
    
  },
  methods: {
    openModal(e, id){      
      this.$router.push({path: `/${e}`});
      let name = '';

      switch(id){
        case 1:
          name = 'dinner';
        break;
        case 2:
          name = 'maraphon';
        break;
        case 3:
          name = 'ogorod';
        break;
      }

      gtag('event', name, {
        'event_category' : name,
        'event_label' : name
      });
    },
    changeLike(e){      
      if(this.activeNeKar){
        if(!this.masTwo[e-4].likeTumb){
          this.masTwo[e-4].likes++
        } else {
          this.masTwo[e-4].likes--
        }
        this.masTwo[e-4].likeTumb = !this.masTwo[e-4].likeTumb
      } else {
        if(!this.mas[e-1].likeTumb){
          this.mas[e-1].likes++
        } else {
          this.mas[e-1].likes--
        }
        this.mas[e-1].likeTumb = !this.mas[e-1].likeTumb
      }
      
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
  }
}
</script>
