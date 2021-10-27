<template>
<h1>Rick And Morty Carrousel</h1>
    <!-- Full-width images with number and caption text -->
    <div class="slideshow-container">
        <div v-for="item in characters" :key="item.id" class="mySlides fade" style="text-align:center">
            <div class="numbertext">1 / 3</div>
            <img :src="item.image">
            <div class="text">{{item.name}}</div>
        </div>

        <!-- Next and previous buttons -->
        <a class="prev" v-on:click="plusSlides(-1)">&#10094;</a>
        <a class="next" v-on:click="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    <!-- The dots/circles -->
    <!--<div style="text-align:center">
        <span class="dot" v-on:click="currentSlide(1)"></span>
        <span class="dot" v-on:click="currentSlide(2)"></span>
        <span class="dot" v-on:click="currentSlide(3)"></span>
    </div>-->
</template>
<script>
let slideIndex = 1;

export default {
    name: 'Pagina1',
    data(){
        return {
            characters:[1]
        }
    },
    methods: {
        getCaracter:async function(){
            console.log("cargando información")
            const response=await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json();
            console.log(data.results)
            this.characters=data.results
            this.showSlides(1)
            return data.results
        },
        // Thumbnail image controls
        currentSlide:function(n) {
            this.showSlides(slideIndex = n);
        },
        // Next/previous controls
        plusSlides:function(n) {
            this.showSlides(slideIndex += n);
        },
        showSlides:function(n){
            var i;
            var slides = document.getElementsByClassName("mySlides");
            //var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            /*for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }*/
            if(slides[slideIndex - 1]!==undefined){
                slides[slideIndex-1].style.display = "block";
                //dots[slideIndex-1].className += " active";
            }
        }
    },
    updated(){
        this.showSlides(1)
    },
    mounted() {
        this.getCaracter()
    }
}
</script>

<style>
* {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
    background: #eff2ef;
    max-width: 1000px;
    position: relative;
    margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
</style>