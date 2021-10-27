<template>
    <nav class="topnav">
        <router-link to='/pagina1'>Rick And Morty</router-link>
        <router-link to='/pagina2'>Episodios</router-link>
        <!--<router-link to='/pagina3'>Página 3</router-link>-->
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
  /* Add a black background color to the top navigation */
  .topnav {
    background-color: #00a59d;
    overflow: hidden;
  }

  /* Style the links inside the navigation bar */
  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  /* Change the color of links on hover */
  .topnav a:hover {
    background-color: #16847f;
    color: #fff;
  }

  /* Add a color to the active/current link */
  .topnav a.active {
    background-color: #16847f;
    color: #fff;
  }
</style>