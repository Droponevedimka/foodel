<template>
  <div class="modal" @click.self="this.$router.push({path: '/'})">
    <div class="modal--container">
      <img src="@/assets/img/modal/close.svg" class="modal--close" @click="this.$router.push({path: '/'})" />
      <div class="modal__top heiS marDop">
        <div class="modal__top--title">Веломаршруты</div>
        <img class="modal__top--img velo" src="@/assets/img/third/post-4.svg" />
      </div>

      <div class="modal__block">
        <div class="modal--ticket left vel mob-big">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Веломаршрут ВДНХ — Останкино</div>
            <div class="modal--ticket--desc">По паркам, но без пешеходов</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/geo.svg" />
            <div class="modal__ranked--item-txt">Город: <b>Москва</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/path.svg" />
            <div class="modal__ranked--item-txt">Длина маршрута: <b>12,5 км</b></div>
          </div> 
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/green.svg" />
            <div class="modal__ranked--item-txt">Уровень: <b>лёгкий</b></div>
          </div>       
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/vel-1.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">540 гектаров, каждый из которых был недавно реконструирован и облагорожен. Веломаршрут проходит через несколько садов и парков. Чтобы избегать пешеходов — не выезжай на Центральную Аллею и слишком широкие дороги. Советуем сделать остановку на половине маршрута — в Саду Будущего: это новый парк, в котором можно поколесить по ухоженным аллеям и устроить перекус на берегу пруда. Конечно, с уточками. <span>Закажи продукты из Delivery Club, курьер подойдёт прямо ко входу в парк.</span><br/><br/> Закладывай два часа — на прогулку в среднем темпе.</p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">
            <div class="modal__invert--item-name">Полный маршрут:</div>
            <div class="modal__invert--item-desc">ВВЦ <img src="@/assets/img/modal/arrow-right.svg" /> Ботанический Сад РАН <img src="@/assets/img/modal/arrow-right.svg" /> Сад Камней <img src="@/assets/img/modal/arrow-right.svg" /> Парк «Останкино» <img src="@/assets/img/modal/arrow-right.svg" /> «Усадьба Останкино» </div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal--ticket right long">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket-long.svg" />
          <img class="modal--ticket--back mob" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Веломаршрут Южно-Приморский Парк — Петергоф</div>
            <div class="modal--ticket--desc">По набережной Финского</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/geo.svg" />
            <div class="modal__ranked--item-txt">Город: <b>Санкт-Петербург</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/path.svg" />
            <div class="modal__ranked--item-txt">Длина маршрута: <b>18 км</b></div>
          </div> 
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/yellow.svg" />
            <div class="modal__ranked--item-txt">Уровень: <b>средний</b></div>
          </div>       
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/vel-2.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Прекрасный маршрут для тех, кто не любит уворачиваться от самокатеров и бабушек с авоськами. На маршруте спокойное автомобильное движение и широкие тротуары (простите, поребрики). Дорога пролегает через прекрасные садово-парковые ансамбли и Стрельну — где можно развернуться и остановиться на отдых. <br/><br/>Закладывай 5-6 часов на маршрут туда-обратно. 3 часа — если решишь развернуться в Стрельне.</p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">
            <div class="modal__invert--item-name">Полный маршрут:</div>
            <div class="modal__invert--item-desc">Южно-Приморский Парк <img src="@/assets/img/modal/arrow-right.svg" /> Стрельна <img src="@/assets/img/modal/arrow-right.svg" /> Парк Зверинец <img src="@/assets/img/modal/arrow-right.svg" /> Парк&nbsp;Александрия <img src="@/assets/img/modal/arrow-right.svg" /> Нижний Парк <img src="@/assets/img/modal/arrow-right.svg" /> Петергоф </div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal--ticket left long">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket-long.svg" />
          <img class="modal--ticket--back mob" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Маршрут для профи: с подробным описанием</div>
            <div class="modal--ticket--desc">Искупаетесь, прокатитесь по лесу и насладитесь первородной Сибирью</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked long">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/geo.svg" />
            <div class="modal__ranked--item-txt">Город: <b>Новосибирская область</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/path.svg" />
            <div class="modal__ranked--item-txt">Длина маршрута: <b>12 км</b></div>
          </div> 
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/red.svg" />
            <div class="modal__ranked--item-txt">Уровень: <b>сложный</b></div>
          </div>       
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/vel-3.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Маршрут начинается на станции «Новосибирск-Главный». Отсюда доезжаешь до станции Льниха.  Нужно будет перейти реку Иня по мосту, и спуститься до Оры. Вода в реке чистая, течение слабое — летом можно искупаться и устроить пикник. <span>В этой местности Delivery Club не доставляет, поэтому, пока строишь этот маршрут, закажи продукты для пикника заранее.</span> Теперь дальше — по тропке вдоль реки доезжаешь до Мельничного ручья: вокруг будет сплошной лес, но тропинка обязательно приведёт к нему. Ручей придётся брать вброд, но сразу после него увидишь дорогу, которая приведёт к селу Мошнино.<br/><br/> На дорогу и маршрут стоит заложить день.</p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">
            <div class="modal__invert--item-name">Полный маршрут:</div>
            <div class="modal__invert--item-desc">Новосибирск-Главный <img src="@/assets/img/modal/arrow-right.svg" /> Станция&nbsp;Льниха <img src="@/assets/img/modal/arrow-right.svg" /> Река&nbsp;Иня <img src="@/assets/img/modal/arrow-right.svg" /> Мельничный&nbsp;ручей <img src="@/assets/img/modal/arrow-right.svg" /> Мошнино <img src="@/assets/img/modal/arrow-right.svg" /> Станция&nbsp;Кошево </div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal--ticket right vel mob-big">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Красная Воля — Галицыно</div>
            <div class="modal--ticket--desc">Для любителей красивых видов и комфорта</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked long">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/geo.svg" />
            <div class="modal__ranked--item-txt">Город: <b>Краснодарский край — Сочи</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/path.svg" />
            <div class="modal__ranked--item-txt">Длина маршрута: <b>13 км</b></div>
          </div> 
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/yellow.svg" />
            <div class="modal__ranked--item-txt">Уровень: <b>средний</b></div>
          </div>       
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/vel-4.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">На маршруте: Сухой и Мокрый каньоны Псахо, смотровые, снежные вершины гор и зелёные луга. <span>Не впечатляет? Тогда закажи продукты домой и попробуй выиграть HUAWEI Vision S, чтобы смотреть экстрим на широком смарт-экране в YouTube.</span> Но если любишь проводить время вне дома, рассказываем: это один из самых живописных маршрутов, доступных новичку. На пути будут некрутые подъемы, спуски и один брод — его можно преодолеть даже на велосипеде. Места для привала — на всём маршруте. Не забудь всё убрать, как только доешь! <br/><br/>Заложи на маршрут 3-4 часа.</p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">
            <div class="modal__invert--item-name">Полный маршрут:</div>
            <div class="modal__invert--item-desc">Красная&nbsp;Воля <img src="@/assets/img/modal/arrow-right.svg" /> Брод&nbsp;через&nbsp;ручей <img src="@/assets/img/modal/arrow-right.svg" /> Две&nbsp;смотровые <img src="@/assets/img/modal/arrow-right.svg" /> Сухой&nbsp;Каньон&nbsp;Псахо <img src="@/assets/img/modal/arrow-right.svg" /> Мокрый&nbsp;Каньон&nbsp;Псахо <img src="@/assets/img/modal/arrow-right.svg" /> <br/>Лесное <img src="@/assets/img/modal/arrow-right.svg" /> Галицыно </div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal--ticket left vel mob-big">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">МРВ — Новодвинская крепость</div>
            <div class="modal--ticket--desc">Для любителей красивых видов и комфорта</div>
          </div>
        </div>
      </div>
  
      <div class="modal__block">
        <div class="modal__ranked long">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/geo.svg" />
            <div class="modal__ranked--item-txt">Город: <b>Архангельск</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/path.svg" />
            <div class="modal__ranked--item-txt">Длина маршрута: <b>26 км</b></div>
          </div> 
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/red.svg" />
            <div class="modal__ranked--item-txt">Уровень: <b>сложный</b></div>
          </div>       
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/vel-5.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Невероятный маршрут, который завершается первой каменной приморской бастионной крепостью в России — Новодвинской. Часть маршрута проходит по асфальту, а часть — по грунтовке, поэтому маршрут не столько сложный, сколько изматывающий. Если слишком устанешь — разбавь маршрут прогулкой на теплоходе и перекуси чего-нибудь лёгкого. <span>Мы&nbsp;в&nbsp;этом поможем: перед тем, как спланировать маршрут закажи на 699₽+ в Delivery Club и&nbsp;выигрывай&nbsp;крутые призы!</span> <br/><br/>Заложи на маршрут 4 часа.</p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">
            <div class="modal__invert--item-name">Полный маршрут:</div>
            <div class="modal__invert--item-desc">МРВ <img src="@/assets/img/modal/arrow-right.svg" /> Набережная <img src="@/assets/img/modal/arrow-right.svg" /> Маймаксанское <img src="@/assets/img/modal/arrow-right.svg" /> Шоссе <img src="@/assets/img/modal/arrow-right.svg" /> Переправа&nbsp;на&nbsp;о.&nbsp;Бревенник <img src="@/assets/img/modal/arrow-right.svg" /> Новодвинская&nbsp;крепость  </div>
          </div>
        </div>
      </div>
      
    
    </div>

  </div>
</template>

<script>
import style from './modal-style.scss';

export default {
  name: 'Velpath',
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

