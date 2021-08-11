<template>
  <div class="modal" @click.self="this.$router.push({path: '/'})">
    <div class="modal--container">
      <img src="@/assets/img/modal/close.svg" class="modal--close" @click="this.$router.push({path: '/'})" />
      <div class="modal__top marDop">
        <div class="modal__top--title">Водоёмы: рыбалка <br/>и купание</div>
        <img class="modal__top--img tomat" src="@/assets/img/third/post-6.svg" />
      </div>

      <div class="modal__block">
        <div class="modal--ticket left big mob-big">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Легендарная рыбалка на Байкале</div>
            <div class="modal--ticket--desc">...на самом большом озере в России</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked long">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/geo.svg" />
            <div class="modal__ranked--item-txt">Ближайший город: <b>Иркутск</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/fisher.svg" />
            <div class="modal__ranked--item-txt"><b>Рыбалка, купание</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/eco.svg" />
            <div class="modal__ranked--item-txt">Чистота воды: <b>Кристальная</b></div>
          </div>              
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/fish-1.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Пятая часть пресной воды на планете — в Байкале. В озере обитает трофейная рыба, и даже на глубине можно увидеть дно — настолько чистая здесь вода. Байкал — для кого-то мечта. Но если ты живёшь недалеко — <span>лучше заказывай продукты в Delivery Club и докажи всем, что поездка на Байкал — покруче похода в магазин.</span> Средняя температура воды летом около 9 градусов, поэтому советуем хорошенько подготовиться.</p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">            
            <div class="modal__invert--item-desc long">Самое чистое озеро в России с невероятными видами. Интересный факт: виды Байкала чаще всего намного выразительнее, чем вид на чью-то спину в очереди ;)</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal--ticket right mob-big">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Голубое озеро с кипарисами</div>
            <div class="modal--ticket--desc">...прямо как в Африке, но в Анапе</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked long">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/geo.svg" />
            <div class="modal__ranked--item-txt">Ближайший город: <b>Анапа</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/fisher.svg" />
            <div class="modal__ranked--item-txt"><b>Купание</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/eco.svg" />
            <div class="modal__ranked--item-txt">Чистота воды: <b>Прозрачная</b></div>
          </div>              
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/fish-2.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Озеро Сукко находится всего в паре километров от Анапы. И уже сотни лет там стоят 32 кипариса. <br/>Предположения, откуда <br/>там взялись Северо-Американские деревья — пока весьма смутные. Но&nbsp;что можно сказать точно — полюбоваться ими стоит. Особенно, если ты устал от подкрашенных тополей по дороге в ближайший «24&nbsp;Маркет». <span>Заказывай продукты с бесплатной доставкой от 699₽+ в Delivery Club — поезжай на озеро Сукко и выигрывай, например, яблочный флагман — чтобы запечатлеть все 32 кипариса на одну камеру.</span></p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">            
            <div class="modal__invert--item-desc long">Легенда гласит: бог Громовержец разозлился на языческое племя натухаев, жившее у озера и обрушил бурю на Сукко. Но 32 богатыря из племени встали сплошной стеной и защищали свой народ. Громовержец простил всех, но богатырей почему-то превратил в деревья. Вот&nbsp;так.</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal--ticket left mob-big">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Водоём для рыбалки</div>
            <div class="modal--ticket--desc">...но можно и искупаться</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked long">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/geo.svg" />
            <div class="modal__ranked--item-txt">Ближайший город: <b>Москва, СПб</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/fisher.svg" />
            <div class="modal__ranked--item-txt"><b>Рыбалка, купание</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/eco.svg" />
            <div class="modal__ranked--item-txt">Чистота воды: <b>Чистая</b></div>
          </div>              
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/fish-3.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Озеро Селигер находится на полпути от Москвы до СПб. Для любителей рыбалки — это отличный повод свернуть через сотню километров после Твери. Озеро — рыбное, снасти можно взять в аренду, а лодку — напрокат. Без улова мало, кто остаётся. Вода в Селигере достаточно чистая, а на берегу есть кемпинги и домики, поэтому отдохнут все: от любителей комфорта до матёрых рыбаков. <span>Если в компании нет рыбака, советуем запастись продуктами в Delivery Club, чтобы наслаждаться природой сытыми&nbsp;и&nbsp;довольными.</span></p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">            
            <div class="modal__invert--item-desc long">Это одно из самых контрастных озёр в России. Можно встретить всех: от рыбаков на отечественных Нивах до молодёжи, которая приехала в двухсотметровую виллу. <br/>На Селигере найдётся развлечение для каждого.</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal--ticket right long">
          <img class="modal--ticket--back" src="@/assets/img/modal/ticket-long.svg" />
          <img class="modal--ticket--back mob" src="@/assets/img/modal/ticket.svg" />
          <div class="modal--ticket--txt">
            <div class="modal--ticket--title">Река для рыбаков, байдарочников и моржей</div>
            <div class="modal--ticket--desc">Зилим</div>
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__ranked long">
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/geo.svg" />
            <div class="modal__ranked--item-txt">Ближайший город: <b>Уфа</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/fisher.svg" />
            <div class="modal__ranked--item-txt"><b>Рыбалка, купание, сплав</b></div>
          </div>  
          <div class="modal__ranked--item">
            <img class="modal__ranked--item-img" src="@/assets/img/modal/eco.svg" />
            <div class="modal__ranked--item-txt">Чистота воды: <b>Кристальная</b></div>
          </div>              
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__post">
          <img class="modal__post--img" src="@/assets/img/modal/post/fish-4.jpg" />
          <div class="modal__post--txt">
            <p class="modal__post--txt-black">Зилим — универсальная река со средней скоростью течения. Самая популярная в Башкирии для сплавов. Подойдёт и рыбакам — помимо всеохватывающих щуки и окуня, здесь водится сибирский хариус и налим. Конечно, в ней можно искупаться — но температура реки даже летом не превышает 14 градусов, поэтому она больше подойдёт матёрым моржам. На берегу можно развести костёр, приготовить шашлыки и убрать за собой после этого. Закажи мясо или овощи для шашлыка на <span>699₽+ с бесплатной доставкой в Delivery Club, и выигрывай еженедельно промокоды на заказ продуктов от Delivery Club, сетификат на 12 месяцев подписки IVI, подарочные наборы Delivery Club и, конечно же, главные призы: смарт-экран HUAWEI Vision S с голосовыми ассистентами и яблочный флагман!</span></p>
            
          </div>
        </div>
      </div>

      <div class="modal__block">
        <div class="modal__invert">
          <div class="modal__invert--item">            
            <div class="modal__invert--item-desc long">Река Зилим — видовая река с удобными подъездами. Здесь каждый найдёт себе развлечение: от шашлыков до сплава по реке. Находится в 2-3 часах езды на машине от Уфы.</div>         
          </div>         
        </div>
      </div>


    
    
    </div>

  </div>
</template>

<script>
import style from './modal-style.scss';

export default {
  name: 'Reservoirs',
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

