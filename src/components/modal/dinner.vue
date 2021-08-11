<template>
  <div class="modal" @click.self="this.$router.push({path: '/'})">
    <div class="modal--container">
      <img src="@/assets/img/modal/close.svg" class="modal--close" @click="this.$router.push({path: '/'})" />
      <div class="modal__top">
        <div class="modal__top--title">Тематический ужин для&nbsp;всей семьи</div>
        <img class="modal__top--img" src="@/assets/img/third/post-1.svg" />
      </div>

      <div class="modal__block">
        <div class="modal--ticket left">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Итальянское белиссимо</div>
            <div class="modal--ticket--desc">Пицца, лазанья и Вито Карлеоне</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/skov.svg" />
            <div class="modal__ranked--item-txt">Сложность приготовления: <b>5/10</b></div>
          </div>        
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/spagetti.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Ты покупаешь продукты в магазине, но делаешь это без уважения…К своему времени. Delivery Club быстро доставит на дом свежие и аппетитные ингредиенты для пиццы, пасты, тирамису и любых других итальянских блюд. <span>Проведи время с семьёй и устрой тематический ужин с настоящим итальянским шармом за просмотром онлайн-кинотеатра IVI! Мы уже подготовили для тебя ингредиенты.</span></p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">
            <div class="modal__invert--item-name">Карбонары:</div>
            <div class="modal__invert--item-desc">Cпагетти, оливковое масло, чеснок, ветчина, яичный желток, тёртый пармезан, сливки 10%, соль, молотый чёрный перец</div>
          </div>

          <div class="modal__invert--item">
            <div class="modal__invert--item-name">Брускетта с&nbsp;помидорами:</div>
            <div class="modal__invert--item-desc">Чиабатта, помидоры, оливковое масло, базилик, чеснок, бальзамический крем, соль, зелень, чёрный молотый перец</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal--ticket right long">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket-long.svg" />
          <img class="modal--ticket--back mob" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Американский рок-н-ролл</div>
            <div class="modal--ticket--desc">С клаб-сэндвичем в руках и кроссовках на автозастёжке</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/skov.svg" />
            <div class="modal__ranked--item-txt">Сложность приготовления: <b>3/10</b></div>
          </div>        
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/sandvich.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Американская кухня завораживает своей простотой и сытностью: гамбургеры, сэндвичи, бифштексы на гриле и маффины утолят голод даже самого голодного в семье. Мы выбрали ингредиенты для пары простых, но очень вкусных и сытных блюд, которые помогут погрузиться в атмосферу США и поймать одну волну с Марти Макфлаем. <span>Закажи продукты с&nbsp;бесплатной доставкой в Delivery Club на 699₽+ и введи промокод LETOM!</span> <br/><br/>Будь внимателен! Если закажешь 3&nbsp;раза — можешь выиграть <br/>смарт&ndash;экран HUAWEI Vision S с&nbsp;диагональю 55 дюймов.</p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">
            <div class="modal__invert--item-name">Клаб-сэндвич:</div>
            <div class="modal__invert--item-desc">Хлеб для тостов, помидор, лук красный, майонез, горчица, листья салата, ветчина, сыр, куриное филе</div>
          </div>

          <div class="modal__invert--item">
            <div class="modal__invert--item-name">Шоколадный маффин:</div>
            <div class="modal__invert--item-desc">Сахар, какао, шоколад, молоко, пшеничная мука, разрыхлитель, куриное яйцо, сливочное масло</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal--ticket left long">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket-long.svg" />
          <img class="modal--ticket--back mob" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">По-настоящему русский вечер</div>
            <div class="modal--ticket--desc">С блинами, соленьями и отечественным кинематографом</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/skov.svg" />
            <div class="modal__ranked--item-txt">Сложность приготовления: <b>5/10</b></div>
          </div>        
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/blin.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Русская кухня — это не всегда сложный борщ и пельмени: устрой блинную прямо дома! Напеки румяных и закажи тонну всякой всячины, чтобы стол ломился не только на экране. Пеки, мажь, добавляй и смотри русское кино на IVI — мы подарим тебе гарантированный приз — промокод на 45 дней подписки IVI! А ещё — еженедельно мы разыгрываем 12 месяцев подписки IVI, чтобы тематические вечера длились целый год! <span>Просто закажи на 699₽+ и введи промокод «LETOM».</span></p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">
            <div class="modal__invert--item-name">Самые прикольные начинки для блинов:</div>
            <div class="modal__invert--item-desc">Тыквенная, крабовые палочки и яйцо, глазунья и ветчина, сырно-шпинатная, сливочный сыр и хрен, творожно-изюменная, карамельно-клубнично-ореховая, с арахисовой пастой и бананом</div>
          </div>
        </div>
      </div>

    
    </div>

  </div>
</template>

<script>
import style from './modal-style.scss';

export default {
  name: 'Dinner',
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

