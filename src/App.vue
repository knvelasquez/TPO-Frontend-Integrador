<template>
    <nav>
        <router-link to='/pagina1'>Página 1</router-link>
        <router-link to='/pagina2'>Página 2</router-link>
        <router-link to='/pagina3'>Página 3</router-link>
        <router-link to='formulario'>Formulario</router-link>
    </nav>
    <router-view />
</template>

<script>
  export default {
    name: 'App',
    components: {}
  }
</script>

<style>
  @import './assets/fontawesome-free-5.15.4-web/css/all.css';
  /*#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }*/
</style>