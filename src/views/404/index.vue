<script setup>
import methods from '@/utils/customMethod';

const goHome = () => {
  methods.$goRouter('', '/');
};
</script>

<template>
  <div class="bg-purple">
    <div class="stars">
      <div class="central-body">
        <img class="image-404"
          src="http://salehriaz.com/404Page/img/404.svg"
          width="300px">
        <a href="javaScript:void(0);"
          class="btn-go-home"
          @click="goHome">回到主页</a>
      </div>
      <div class="objects">
        <img class="object_rocket"
          src="http://salehriaz.com/404Page/img/rocket.svg"
          width="40px">
        <div class="earth-moon">
          <img class="object_earth"
            src="http://salehriaz.com/404Page/img/earth.svg"
            width="100px">
          <img class="object_moon"
            src="http://salehriaz.com/404Page/img/moon.svg"
            width="80px">
        </div>
        <div class="box_astronaut">
          <img class="object_astronaut"
            src="http://salehriaz.com/404Page/img/astronaut.svg"
            width="140px">
        </div>
      </div>
      <div class="glowing_stars">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dosis:300,400,500');

@-moz-keyframes rocket-movement {
  100% {
    -moz-transform: translate(1200px, -600px);
  }
}

@-webkit-keyframes rocket-movement {
  100% {
    -webkit-transform: translate(1200px, -600px);
  }
}

@keyframes rocket-movement {
  100% {
    transform: translate(1200px, -600px);
  }
}

@-moz-keyframes spin-earth {
  100% {
    -moz-transform: rotate(-360deg);
    transition: transform 20s;
  }
}

@-webkit-keyframes spin-earth {
  100% {
    -webkit-transform: rotate(-360deg);
    transition: transform 20s;
  }
}

@keyframes spin-earth {
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
    transition: transform 20s;
  }
}

@-moz-keyframes move-astronaut {
  100% {
    -moz-transform: translate(-160px, -160px);
  }
}

@-webkit-keyframes move-astronaut {
  100% {
    -webkit-transform: translate(-160px, -160px);
  }
}

@keyframes move-astronaut {
  100% {
    -webkit-transform: translate(-160px, -160px);
    transform: translate(-160px, -160px);
  }
}

@-moz-keyframes rotate-astronaut {
  100% {
    -moz-transform: rotate(-720deg);
  }
}

@-webkit-keyframes rotate-astronaut {
  100% {
    -webkit-transform: rotate(-720deg);
  }
}

@keyframes rotate-astronaut {
  100% {
    -webkit-transform: rotate(-720deg);
    transform: rotate(-720deg);
  }
}

@-moz-keyframes glow-star {
  40% {
    -moz-opacity: 0.3;
  }

  90%,
  100% {
    -moz-opacity: 1;
    -moz-transform: scale(1.2);
  }
}

@-webkit-keyframes glow-star {
  40% {
    -webkit-opacity: 0.3;
  }

  90%,
  100% {
    -webkit-opacity: 1;
    -webkit-transform: scale(1.2);
  }
}

@keyframes glow-star {
  40% {
    -webkit-opacity: 0.3;
    opacity: 0.3;
  }

  90%,
  100% {
    -webkit-opacity: 1;
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    border-radius: 999999px;
  }
}

.spin-earth-on-hover {

  transition: ease 200s !important;
  transform: rotate(-3600deg) !important;
}

.bg-purple {
  background: url(http://salehriaz.com/404Page/img/bg_purple.png);
  background-repeat: repeat-x;
  background-size: cover;
  background-position: left top;
  height: 100vh;
  overflow: hidden;

}

.custom-navbar {
  padding-top: 15px;
}

.brand-logo {
  margin-left: 25px;
  margin-top: 5px;
  display: inline-block;
}

.btn-request {
  padding: 10px 25px;
  border: 1px solid #FFCB39;
  border-radius: 100px;
  font-weight: 400;
}

.btn-request:hover {
  background-color: #FFCB39;
  color: #fff;
  transform: scale(1.05);
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
}

.btn-go-home {
  position: relative;
  z-index: 200;
  margin: 15px auto;
  width: 100px;
  padding: 10px 15px;
  border: 1px solid #FFCB39;
  border-radius: 100px;
  font-weight: 400;
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  letter-spacing: 2px;
  font-size: 11px;

  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  -ms-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.btn-go-home:hover {
  background-color: #FFCB39;
  color: #fff;
  transform: scale(1.05);
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
}

.central-body {
  /*    width: 100%;*/
  padding: 17% 5% 10% 5%;
  text-align: center;
}

.objects img {
  z-index: 90;
  pointer-events: none;
}

.object_rocket {
  z-index: 95;
  position: absolute;
  transform: translateX(-50px);
  top: 75%;
  pointer-events: none;
  animation: rocket-movement 200s linear infinite both running;
}

.object_earth {
  position: absolute;
  top: 20%;
  left: 15%;
  z-index: 90;
  /*    animation: spin-earth 100s infinite linear both;*/
}

.object_moon {
  position: absolute;
  top: 12%;
  left: 25%;
}

.object_astronaut {
  animation: rotate-astronaut 200s infinite linear both alternate;
}

.box_astronaut {
  z-index: 110 !important;
  position: absolute;
  top: 60%;
  right: 20%;
  will-change: transform;
  animation: move-astronaut 50s infinite linear both alternate;
}

.image-404 {
  position: relative;
  z-index: 100;
  pointer-events: none;
}

.stars {
  background: url(http://salehriaz.com/404Page/img/overlay_stars.svg);
  background-repeat: repeat;
  background-size: contain;
  background-position: left top;
}

.glowing_stars .star {
  position: absolute;
  border-radius: 100%;
  background-color: #fff;
  width: 3px;
  height: 3px;
  opacity: 0.3;
  will-change: opacity;
}

.glowing_stars .star:nth-child(1) {
  top: 80%;
  left: 25%;
  animation: glow-star 2s infinite ease-in-out alternate 1s;
}

.glowing_stars .star:nth-child(2) {
  top: 20%;
  left: 40%;
  animation: glow-star 2s infinite ease-in-out alternate 3s;
}

.glowing_stars .star:nth-child(3) {
  top: 25%;
  left: 25%;
  animation: glow-star 2s infinite ease-in-out alternate 5s;
}

.glowing_stars .star:nth-child(4) {
  top: 75%;
  left: 80%;
  animation: glow-star 2s infinite ease-in-out alternate 7s;
}

.glowing_stars .star:nth-child(5) {
  top: 90%;
  left: 50%;
  animation: glow-star 2s infinite ease-in-out alternate 9s;
}

@media only screen and (max-width: 768px) {
  /* .custom-navbar {
    text-align: center;
  }

  .brand-logo img {
    width: 120px;
  } */

  /* .box_astronaut {
    top: 70%;
  } */

  .central-body {
    padding-top: 45%;
  }

  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .custom-navbar {
    padding-top: .9375rem;
  }

  .brand-logo {
    margin-left: 1.5625rem;
    margin-top: .3125rem;
  }

  .btn-request {
    padding: .625rem 1.5625rem;
    border: .0625rem solid #FFCB39;
    border-radius: 6.25rem;
  }

  .btn-request:hover {
    box-shadow: 0px 1.25rem 1.25rem rgba(0, 0, 0, 0.1);
  }

  .btn-go-home {
    margin: 1.75rem auto;
    width: 10.25rem;
    padding: 1.25rem .9375rem;
    border: .0625rem solid #FFCB39;
    border-radius: 6.25rem;
    letter-spacing: .125rem;
    font-size: 1.25rem;
  }

  .btn-go-home:hover {
    box-shadow: 0px 1.25rem 1.25rem rgba(0, 0, 0, 0.1);
  }

  .object_rocket {
    transform: translateX(-3.125rem);
  }

  .glowing_stars .star {
    width: .1875rem;
    height: .1875rem;
  }
}
</style>