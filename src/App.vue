<template>
    <nav class="topnav">
        <router-link to='/pagina1'>
          <i class="fas fa-rocket"></i>
          Rick And Morty
        </router-link>
        <router-link to='/pagina2'>
          <i class="fas fa-tv"></i>
           Episodios
        </router-link>
        <!--<router-link to='/pagina3'>Página 3</router-link>-->
        <router-link to='formulario'>
          <i class="fas fa-clipboard-check"></i>
           Formulario
          </router-link>
      </nav>
      <div class="nav-autor">
          <a href="https://github.com/knvelasquez/TPO-Frontend-Integrador" target="_blank" class="nav-enlace">
            <i class="fab fa-github"></i>
            Kevin Velásquez
          </a>
      </div>
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
    /* Add a black background color to the top navigation */
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto', sans-serif;
        background: #fff;
    }
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
    .nav-autor{
      text-align: right;font-size: .8em;
  }
    .nav-enlace{
      text-decoration:none;
      color:#00a59d;
      font-weight: bold;
      padding: 3px;
  }

  @media screen
    and (min-width:320px)
    and (max-width:374px)
    and (orientation: portrait) {
      .topnav {
        display: grid;
      }
  }

  @media screen
    and (min-width:375px)
    and (max-width:424px)
    and (orientation: portrait) {
      .topnav {
        display: grid;
      }
  }

  @media screen
    and (min-width:425px)
    and (max-width:767px)
    and (orientation: portrait) {
      .topnav {
        display: grid;
      }
  }

  @media screen
    and (min-width:768px)
    and (max-width:1023px){

  }

  @media screen
    and (min-width:1024px)
    and (max-width:1440px){

  }
</style>