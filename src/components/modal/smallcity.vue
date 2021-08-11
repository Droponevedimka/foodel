<template>
  <div class="modal" @click.self="this.$router.push({path: '/'})">
    <div class="modal--container">
      <img src="@/assets/img/modal/close.svg" class="modal--close" @click="this.$router.push({path: '/'})" />
      <div class="modal__top heiS marDop">
        <div class="modal__top--title">Маленькие города</div>
        <img class="modal__top--img velo" src="@/assets/img/third/post-5.svg" />
      </div>

      <div class="modal__block">
        <div class="modal--ticket left normali mob-big">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Самый маленький город Подмосковья</div>
            <div class="modal--ticket--desc">Верея</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked shot">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/geo.svg" />
            <div class="modal__ranked--item-txt">Ближайший город: <b>Москва, 90 км</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/date.svg" />
            <div class="modal__ranked--item-txt">Год основания: <b>1371г.</b></div>
          </div>                
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/city-1.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Верея богата маленькими церквушками, часовнями. Это город, в который стоит приехать буквально на день: прогуляться по древним торговым рядам, посмотреть пару достопримечательностей, а потом встать на холме, вдохнуть полной грудью и выдохнуть все мирские заботы. Прямо на холме советуем присесть на перекус — с сухарями, чаем, милкшейком и панкейками. Как Иван Дорохов в 1812-ом перед тем как громить Наполеоновские войска. <span>Уверены, если бы тогда существовал Delivery Club, милкшейки и панкейки — он бы так и сделал. Зато теперь это можешь сделать ты — просто открой приложение, закажи на 699₽+ и выигрывай призы!</span></p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">            
            <div class="modal__invert--item-desc long">Верея — город воинской доблести с богатой историей. Понравится всем, кто любит перезагрузиться на выходных, не отъезжая далеко от Москвы. Город милый и спокойный, подойдёт для прогулок наедине с собой и медитаций.</div>
          </div>
        </div>
      </div>


      <div class="modal__block">
        <div class="modal--ticket right normali mob-big">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Горный рудник, который охраняют змеи</div>
            <div class="modal--ticket--desc">Змеиногорск</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked mel">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/geo.svg" />
            <div class="modal__ranked--item-txt">Ближайший город: <b>Барнаул, 320 км</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/date.svg" />
            <div class="modal__ranked--item-txt">Год основания: <b>1744г.</b></div>
          </div>                
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/city-2.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Змеиногорск — город рудников, который называют «Алтайской Швейцарией». Ещё до 1744 года здесь жил народ «чудь»: он умел добывать полезные ископаемые, которые обнаружили рудознатцы в 18 веке. Больше 100 лет этот рудник был главным поставщиком серебра для&nbsp;царской семьи. Название город получил от&nbsp;горы Змеёвой, а&nbsp;та, в&nbsp;свою очередь, благодаря обилию змей. Откуда их здесь столько — неизвестно, но столетия назад у&nbsp;жителей была обязанность — ловить змей.</p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">            
            <div class="modal__invert--item-desc long">В Змеиногорске сохранились остатки горных выработок, рудника и каменные здания 18-19 вв. Также, есть музей Истории развития горного производства. Ехать — на машине.</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal--ticket left long">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket-long.svg" />
          <img class="modal--ticket--back mob" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Село ещё севернее Мурманска. Да, такие есть</div>
            <div class="modal--ticket--desc">Териберка</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked mel">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/geo.svg" />
            <div class="modal__ranked--item-txt">Ближайший город: <b>Мурманск, 130 км</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/date.svg" />
            <div class="modal__ranked--item-txt">Год основания: <b>Село с 1991г.</b></div>
          </div>  
                        
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/city-3.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Знаменитое село, в&nbsp;котором снимали «Левиафан». В&nbsp;селе проживает около 1 000 человек и&nbsp;почти все из&nbsp;них работают на&nbsp;туристов. Здесь можно снять домик, покататься на&nbsp;снегоходе и&nbsp;выйти в&nbsp;Баренцево море с&nbsp;местными. Из бесплатного — посмотреть на&nbsp;северное сияние, посетить кладбище кораблей и&nbsp;заброшенную школу, где до сих пор лежат школьные учебники. В&nbsp;селе есть пара ресторанов для туристов, но мы советуем взять перекус с&nbsp;собой, чтобы не&nbsp;оставить всю зарплату на&nbsp;крабов и&nbsp;оленину. <span>Возможно, там будет холодно, но ты можешь выиграть брендовый набор с пледом от Delivery Club. Просто делай заказы на 699₽+ и участвуй в розыгрыше крутых призов!</span></p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">            
            <div class="modal__invert--item-desc long">National Geographic включил Териберку в топ-20 мест для путешествий. До села ходят автобусы и такси, но мы советуем добираться на автомобиле, чтобы было больше свободы для передвижений.</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal--ticket right long">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket-long.svg" />
          <img class="modal--ticket--back mob" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Город Чехова, Раневской и наследственных рыбаков</div>
            <div class="modal--ticket--desc">Таганрог</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked mel">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/geo.svg" />
            <div class="modal__ranked--item-txt">Ближайший город: <b>Ростов-на-дону</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/date.svg" />
            <div class="modal__ranked--item-txt">Год основания: <b>1698г.</b></div>
          </div>  
                        
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/city-4.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Таганрог — город, в который стоит заскочить буквально на день — посетить домик Чехова, лавку Чехова, художественный музей и сувенирную лавку. Город достаточно чистый и уютный, а морской воздух позитивно влияет не только на здоровье, но и на настроение: север — вреден, а юг — полезен. Хоть мы сами доставляем еду, но не можем не посоветовать посетить кафе «Фрекен Бок»: место атмосферное, общая концепция и детали посвящены Фаине Раневской, а цены не кусаются. <span>Но чтобы за день посетить не только одно кафе — советуем запастись перекусом с собой: закажи на 699₽+ и участвуй в розыгрыше крутых призов!</span></p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">            
            <div class="modal__invert--item-desc long">«Для меня, как уроженца Таганрога, было бы лучше всего жить в Таганроге, ибо дым отечества нам сладок и приятен...»</div>         
          </div>
          <div class="modal__invert--pos">А.П. Чехов </div>
        </div>
      </div>


    
    
    </div>

  </div>
</template>

<script>
import style from './modal-style.scss';

export default {
  name: 'Smallcity',
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

