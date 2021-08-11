<template>
  <router-link to="/rules" class="btn" >
    <slot>
    </slot>
  </router-link>
</template>

<script>

export default {
  name: 'buttonWhite',
  props: []
}
</script>

<style scoped>

.btn{
  font-size: 1em;
  background: #fff;
  padding: 0.67em 1.4em;
  border: 0.125em solid #2E2E33;
  border-radius: 2.5em;
  font-family: Roboto-Bold;
  color: #000;
  text-decoration: none;

}

.btn:hover{
  background: #2E2E33;
  color: #fff;
}

</style>
