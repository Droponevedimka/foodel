<template>
  <div class="bottom">
    <div class="bottom-main">
      <div class="bottom-main-left">
        <img class="bottom-main-left__top" src="@/assets/img/delivery.svg" />
        <div class="bottom-main-left__bot">
          <a class="bottom-main-left__bot__link" href="https://www.delivery-club.ru/partners" target="_blank">Для ресторанов</a>
          <a class="bottom-main-left__bot__link" href="https://www.delivery-club.ru/job_courier/" target="_blank">Курьерам</a>
          <a class="bottom-main-left__bot__link" href="https://press.delivery-club.ru/" target="_blank">Пресс-центр</a>
          <a class="bottom-main-left__bot__link" href="https://www.delivery-club.ru/promo_rules/%D0%90%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BA%D0%BE%D0%B4%D1%83%20LETOM.pdf?1627650830" target="_blank">Условия акции</a> 
          <a class="bottom-main-left__bot__link" href="https://www.delivery-club.ru/promo_rules/Promo%20Rules_may%202021_free%20delivery%20OD%20nQSR_July%200.4.pdf?1626104903" target="_blank">Условия бесплатной доставки</a>
          <a class="bottom-main-left__bot__link" href="https://www.delivery-club.ru/contacts" target="_blank">Контакты</a>
        </div>
      </div>
      <div class="bottom-main-center">
        <div class="bottom-main__top"> Присоединяйтесь к нам </div>
        <div class="bottom-main-center__bot">
          <a class="bottom-main-center__bot-link" href="https://vk.com/deliveryclub" target="_blank">
            <img class="bottom-main-center__bot-link-img" src="@/assets/img/soc/vk-bot.svg" />
          </a>
          <a class="bottom-main-center__bot-link" href="https://www.facebook.com/DeliveryClub.ru" target="_blank">
            <img class="bottom-main-center__bot-link-img" src="@/assets/img/soc/fb-bot.svg" />
          </a>
          <a class="bottom-main-center__bot-link" href="https://www.instagram.com/delivery_club/" target="_blank">
            <img class="bottom-main-center__bot-link-img" src="@/assets/img/soc/inst-bot.svg" />
          </a>
          <a class="bottom-main-center__bot-link" href="https://t.me/deliveryclubpr" target="_blank">
            <img class="bottom-main-center__bot-link-img" src="@/assets/img/soc/tg-bot.svg" />
          </a>
        </div>
      </div>
      <div class="bottom-main-right">
        <div class="bottom-main__top"> Заказывайте с телефона </div>
        <div class="bottom-main-right__bot">
          <a class="bottom-main-right__bot-link" href="https://play.google.com/store/apps/details?id=com.deliveryclub" target="_blank">
            <img class="bottom-main-right__bot-link-img" src="@/assets/img/soc/gplay.svg" />
          </a>
          <a class="bottom-main-right__bot-link" href="https://itunes.apple.com/app/id436145623?mt=8" target="_blank">
            <img class="bottom-main-right__bot-link-img" src="@/assets/img/soc/appstore.svg" />
          </a>
          <a class="bottom-main-right__bot-link" href="https://appgallery.huawei.com/#/app/C101189677?locale=ru_RU" target="_blank">
            <img class="bottom-main-right__bot-link-img" src="@/assets/img/soc/appgal.svg" />
          </a>
        </div>
      </div>
      <img class="bottom-3" src="@/assets/img/+3.svg" />
    </div>
  </div>
</template>

<script>
import style from './bottom-style.scss';

export default {
  name: 'Bottom',
  props: [],
  data(){
    return{
     
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
    
  }
}
</script>
