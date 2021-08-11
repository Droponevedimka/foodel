<template>
  <div class="modal" @click.self="this.$router.push({path: '/'})">
    <div class="modal--container rul">
        <img src="@/assets/img/modal/close.svg" class="modal--close" @click="this.$router.push({path: '/'})" />
        <div class="modal__rules">

            <h1 class="modal__rules--title">Что нужно сделать для&nbsp;участия?</h1>
            <div class="modal__rules--desc">Все участники акции, не выигравшие призы, получат гарантированный приз — промокод на 45 дней подписки IVI после завершения акции</div>

            <div class="modal__rules__blocks">
                <div class="modal__rules__blocks--item">
                    <div class="modal__rules__blocks--item-title"><p>Как получить <br/>еженедельные призы?</p></div>
                    <img class="modal__rules__blocks--item-img" src="@/assets/img/rules/block-1.svg"/>
                    <ol class="modal__rules__blocks--item-ol">
                        <li class="modal__rules__blocks--item-li">Оформи корзину минимум на&nbsp;699₽ с&nbsp;14&nbsp;июля по 11 августа</li>
                        <li class="modal__rules__blocks--item-li">Введи промокод LETOM и&nbsp;оплати&nbsp;заказ</li>
                        <li class="modal__rules__blocks--item-li">Жди результатов розыгрыша — раз&nbsp;в&nbsp;неделю выбираем победителей: уведомление придёт в SMS</li>
                    </ol>
                </div>
                <div class="modal__rules__blocks--item">
                    <div class="modal__rules__blocks--item-title"><p>А как участвовать в&nbsp;розыгрыше умного экрана HUAWEI Vision S и&nbsp;яблочного флагмана?</p></div>
                    <img class="modal__rules__blocks--item-img two" src="@/assets/img/rules/block-2.svg"/>
                    <ol class="modal__rules__blocks--item-ol two">
                        <li class="modal__rules__blocks--item-li">Оформи и оплати 3 заказа минимум на 699₽ — с 14 июля по 11 августа применив промокод LETOM</li>
                        <li class="modal__rules__blocks--item-li">Жди результатов — определим счастливчиков 12 августа!</li>
                    </ol>
                </div>
            </div>

            <a href="https://www.delivery-club.ru/promo_rules/%D0%90%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BA%D0%BE%D0%B4%D1%83%20LETOM.pdf?1627650830" target="_blank" class="modal__rules--link">Подробнее </a>

            <div class="modal__rules__bottom">
                <div class="modal__rules__bottom-title">Закажи продукты прямо&nbsp;сейчас</div>
                <div class="modal__rules__bottom-container">
                    <buttonGreen :white="true" class="modal__rules__bottom-container-left"  href="https://trk.mail.ru/c/jjqgp1?utm_source=grocery_project_2021&utm_medium=grocery_project_2021_4&utm_campaign=grocery_project_2021" target="_blank">Заказать продукты</buttonGreen>
                    <div class="modal__rules__bottom-imgs">
                        <img class="modal__rules__bottom-imgs-del" src="@/assets/img/rules/delivery-dst.svg"/>
                        <img class="modal__rules__bottom-imgs-bot" src="@/assets/img/rules/bot.svg" />                        
                    </div>
                </div>
            </div>

        </div>      
    </div>
  </div>  
</template>

<script>
import style from './modal-style.scss';

import buttonGreen from "@/ui/button/button.vue";

export default {
  name: 'Rules',
  props: { 
   
  },
  data(){
    return {
      
    }
  },
  computed: {
    
  },
  components: {   
    buttonGreen
  }
}
</script>