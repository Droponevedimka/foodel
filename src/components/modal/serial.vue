<template>
  <div class="modal" @click.self="this.$router.push({path: '/'})">
    <div class="modal--container">

      <img src="@/assets/img/modal/close.svg" class="modal--close" @click="this.$router.push({path: '/'})" />
      <div class="modal__top tre">
        <div class="modal__top--title">Марафоны <br/>сериалов </div>
        <img class="modal__top--img tre" src="@/assets/img/third/post-3.svg" />
      </div>

      <div class="modal__block">
        <div class="modal--ticket left big">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Марафон сериалов 90-ых</div>
            <div class="modal--ticket--desc">VHS*, вишнёвый пирог Купера и чипсы из ларька</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/pers.svg" />
            <div class="modal__ranked--item-txt">Для кого: <b>дети 80-ых, зумеры</b></div>
          </div>        
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/pers-1.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Сериалы 90-ых, отдающие VHS* и&nbsp;запахом чипсовых крошек на диване — самые родные для тех, кто помнит, и&nbsp;самые актуальные для тех, кто не смотрел. <a href="https://www.delivery-club.ru/grocery?utm_source=grocery_project_2021&utm_medium=grocery_project_2021_5&utm_campaign=grocery_project_2021" target="_blank">Поностальгируй, если уже видел, или окунись в трендовую атмосферу, стиль которой упорно копируют зумеры.</a> <br/><br/><br/> <p class="small">*VHS — Video Home System. Кассетный аналоговый формат наклонно-строчной видеозаписи.</p></p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__box">
          Подборка сериалов 90-ых
        </div>
      </div>

      <div class="modal__block" style="margin-bottom:0;">
        <div class="modal--ticket right long">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket-long.svg" />
          <img class="modal--ticket--back mob" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Марафон сериалов 00-ых</div>
            <div class="modal--ticket--desc">Для тех, кто либо говорил по телефону, либо сидел в аське</div>
          </div>
        </div>
      </div>

      <div class="modal__block" style="margin-top:0;">
        <div class="modal__ranked" style="margin-top:5%;">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/pers.svg" />
            <div class="modal__ranked--item-txt">Для кого: <b>миллениалы</b></div>
          </div>        
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/pers-2.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Сериалы, в которых уже начали появляться смартфоны смотрели на пиратских сайтах в качестве «480р». А теперь ты можешь посмотреть большинство из них в FULL HD прямо на сайте IVI — устрой себе марафон крутого качества, без рекламы и в максимальном разрешении. <a href="https://www.delivery-club.ru/grocery?utm_source=grocery_project_2021&utm_medium=grocery_project_2021_6&utm_campaign=grocery_project_2021" target="_blank">Закажи вкусняшек в Delivery Club и получи гарантированный приз – промокод на 45 дней или выиграй 12 месяцев подписки IVI.</a> <br/><br/>А чтобы побороться за смарт-экран HUAWEI Vision S с диагональю 55 дюймов и яблочный флагман — закажи трижды в период акции!</p>
            
          </div>
        </div>
      </div>


      <div class="modal__block">
        <div class="modal__box">
          Подборка сериалов 00-ых
        </div>
      </div>
    
    </div>

  </div>
</template>

<script>
import style from './modal-style.scss';

export default {
  name: 'Serial',
  props: { 
   
  },
  data(){
    return {
      
    }
  },
  computed: {
    
  }
}
</script>
