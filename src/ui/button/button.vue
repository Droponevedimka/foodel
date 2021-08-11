<template>
  <a class="btn__green" :class="white && 'white'">
    <slot>
    </slot>
    <img class="btn__leto" src="@/assets/img/codeLetom.svg" />
  </a>
</template>

<script>

export default {
  name: 'buttonWhite',
  props: ['white']
}
</script>

<style scoped>

.btn__green{
  position: relative;
  
  align-items: center;
  justify-content: center;
  font-size: 1.406em;
  line-height: 1em;
  background: #0EC645;
  height: 4.135em;
  width: 14.715em;
  font-family: 'Roboto-Bold';
  border: 0.125em solid #2E2E33;
  border-radius: 2.5em;
  
}

.btn__green.white{
  background: #fff;
  color: #2E2E33;
}


.btn__green:hover{
  background: #10E04E;
  color: #fff;
}

.btn__green:hover.white{
    background: #0EC645;
}

.btn__leto{
  position: absolute;
  width: 40%;
  height: auto;
  object-fit: contain;
  top: -44%;
  right: -24%;
}

@media screen and (max-width: 920px) {
  .btn__green{
    width: 78%;
    height: 3.64em;    
    border: 0.125em solid #2E2E33;
    font-size: 2.88em
  }

  .btn__leto{
    top: -63%;
    width: 50%;
    right: -34%;
  }
}

</style>
