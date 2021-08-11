<template>
  <div class="modal" @click.self="this.$router.push({path: '/'})">
    <div class="modal--container">

      <img src="@/assets/img/modal/close.svg" class="modal--close" @click="this.$router.push({path: '/'})" />
      <div class="modal__top tre heiS">
        <div class="modal__top--title">Огород на балконе</div>
        <img class="modal__top--img two" src="@/assets/img/third/post-2.svg" />
      </div>

      <div class="modal__block">
        <div class="modal--ticket left big">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Зелёный подоконник</div>
            <div class="modal--ticket--desc">Для тех, кто хочет своё, но не хочет заморачиваться</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked mel" >
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/green.svg" />
            <div class="modal__ranked--item-txt">Уровень: <b>садовод</b></div>
          </div>      
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/time.svg" />
            <div class="modal__ranked--item-txt">Сколько ждать: <b>минимум 3 недели (руккола)</b></div>
          </div>     
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/tra-1.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Если ты не потомственный огородник — предлагаем начать с малого: для той зелени, что мы подобрали — даже не нужен балкон, расти её прямо на подоконнике. Собери друзей дома и презентуй им блюдо с собственной зеленью! <br/><a href="https://www.delivery-club.ru/grocery?utm_source=grocery_project_2021&utm_medium=grocery_project_2021_7&utm_campaign=grocery_project_2021" target="_blank">Ну, а если ты не прирожденный ботаник, то ты знаешь, где можно заказать всегда свежую зеленушку и сдобрить её отменными овощами, да еще и выиграть смарт-экран HUAWEI Vision S с диагональю 55 дюймов, яблочный флагман 2020 года и десятки других призов!</a></p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">
            <div class="modal__invert--item-name">Что вырастить:</div>
            <div class="modal__invert--item-desc">Укроп, руккола, зелёный лук, мелисса, мята, кориандр, петрушка, базилик, шпинат</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal--ticket right long">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket-long.svg" />
          <img class="modal--ticket--back mob" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Садолоджия</div>
            <div class="modal--ticket--desc">Если ты — потомственный садовод</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked shot">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/green.svg" />
            <div class="modal__ranked--item-txt">Уровень: <b>новичок</b></div>
          </div>      
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/time.svg" />
            <div class="modal__ranked--item-txt">Сколько ждать: <b>3-4 месяца</b></div>
          </div>       
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/tra-2.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Ты из тех, чьи родственники растили по 20 наименований овощей, фруктов и высаживали по 10 соток картошки? Тогда попробуй устроить теплицу на балконе! Выращивать можно разное — от фасоли до тыквы. Но, в отличие от зелени — овощам нужно больше пространства. Выращивай, заказывай и совмещай — сделай рагу из собственных овощей, <a href="https://www.delivery-club.ru/grocery?utm_source=grocery_project_2021&utm_medium=grocery_project_2021_8&utm_campaign=grocery_project_2021" target="_blank">закажи рыбы, мяса из Delivery Club с бесплатной доставкой и участвуй в розыгрыше призов.</a></p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">
            <div class="modal__invert--item-name">Что вырастить:</div>
            <div class="modal__invert--item-desc">Огурцы, кабачки, баклажаны, помидоры, тыква, зелёный горошек, фасоль</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal--ticket left long">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket-long.svg" />
          <img class="modal--ticket--back mob" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Лимонное дерево</div>
            <div class="modal--ticket--desc">Стильный и витаминный элемент интерьера</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked shot">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/green.svg" />
            <div class="modal__ranked--item-txt">Уровень: <b>новичок</b></div>
          </div>      
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/time.svg" />
            <div class="modal__ranked--item-txt">Сколько ждать: <b>до 230 дней</b></div>
          </div>           
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/tra-3.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Лимонное дерево — одно из самых неприхотливых растений, которое можно вырастить дома. Оно требует своевременного, регулярного полива. Конечно, плодоносит дерево не так обильно как, например, яблоки, но, в отличие от других фруктов и плодов — лимонное дерево выглядит очень привлекательно и вписывается в большинство интерьеров. <a href="https://www.delivery-club.ru/grocery?utm_source=grocery_project_2021&utm_medium=grocery_project_2021_9&utm_campaign=grocery_project_2021" target="_blank">Ну, а если ты хочешь еще больше витаминов, сочной черешни аппетитных бананов, то лучше заказывай продукты в Delivery Club и участвуй в розыгрыше. <br/>Доставка за наш счет!</a></p>
            
          </div>
        </div>
      </div>
    </div>

  </div>  
</template>

<script>
import style from './modal-style.scss';

export default {
  name: 'Garden',
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
