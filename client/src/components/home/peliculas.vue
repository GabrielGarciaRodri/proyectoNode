<template>
  <div>
    <div class="header-section-1">
      <span class="title">Now playing</span>
      <a href="#" class="see_all">See all</a>
    </div>
    <div class="main_container">
      <div class="slider_container">
        <div class="leftArrow" @click="scrollToImage('prev')">&#10092;</div>
        <div class="rightArrow" @click="scrollToImage('next')">&#10093;</div>
        <div class="container_images">
          <ul ref="listRef">
            <li v-for="(item, index) in peliculas" :key="item.id || index">
              <img
                :src="item.bannerUrl"
                :alt="`Banner of ${item.titulo}`"
                @click="handleImageClick(item.titulo)"
              />
            </li>
          </ul>
        </div>
        <div class="dots-container">
          <div
            v-for="(item, idx) in peliculas"
            :key="idx"
            class="dot-container-item"
            :class="{ active: idx === currentIndex }"
            @click="goToSlide(idx)"
          >
            <img :src="circleSvg" />
          </div>
        </div>
        <div class="info_container">
          <div v-if="peliculas.length > 0" class="info">
            <h1 class="titulo">{{ peliculas[currentIndex].titulo }}</h1>
            <h1 class="genero">{{ peliculas[currentIndex].genero }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pelicula",
  data() {
    return {
      peliculas: [],
      currentIndex: 0,
    };
  },
  mounted() {
    fetch("http://localhost:3000/pelicula/v0")
      .then(response => response.json())
      .then(data => (this.peliculas = data))
      .catch(error => console.error("Error fetching movies:", error));
  },
  methods: {
    scrollToImage(direction) {
      if (direction === "prev") {
        this.currentIndex = this.currentIndex === 0 ? 0 : this.currentIndex - 1;
      } else {
        const isLastSlide = this.currentIndex === this.peliculas.length - 1;
        if (!isLastSlide) {
          this.currentIndex++;
        }
      }
    },
    goToSlide(slideIndex) {
      this.currentIndex = slideIndex;
    },
    handleImageClick(titulo) {
      this.$router.push(`/pelicula/detalle?nombre=${encodeURIComponent(titulo)}`);
      console.log("La pelicula es: ", titulo);
    },
  },
};
</script>

<style scoped>
.main_container{
  width: 100%;
  height: 80%;
  padding-left: 30px;
  padding-right: 30px;
}

.slider_container{
  position: relative;
  height: 100%;
}

.container_images{
  border-radius: 20px;
  border: 1px solid #eee;
  overflow: hidden;
}

.container_images ul {
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
  transition: transform 0.5s ease; 
} 

.container_images li {
  min-width: 100%;
  box-sizing: border-box;
}

.container_images img {
  width: 100%;
  display: block;
  object-fit: fill;
}

.leftArrow{
  height: 60px;
  width: 60px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 35px;
  font-weight: 700;
  color: #fff;
  z-index: 1;
  cursor: pointer;
}


.rightArrow{
  height: 60px;
  width: 60px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: -30px;
  font-size: 35px;
  font-weight: 700;
  color: #fff;
  z-index: 1;
  cursor: pointer;
}

.dots-container {
  display: flex;
  height: 35px;
  justify-content: center;
}

.dot-container-item {
  display: flex;
  margin-top: 3px;
  width: 20px;
  cursor: pointer;
  text-align: center;
  align-items: center;
}

.dots-container .dot-container-item img{
  height: 15px;
  width: 15px;
}


.dot-container-item.active img {
  filter: invert(59%) sepia(79%) saturate(394%) hue-rotate(300deg) brightness(95%) contrast(100%);
}

.header-section-1{
  display: flex;
  height: 50px;
  justify-content: space-between;
}

.header-section-1 .title{
  display: flex;
  padding-left: 10px;
  align-items: center;
}

.header-section-1 .see_all{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  color: #FE0000;
  text-decoration: none;
}

.info_container{
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.info_container .info{
  display: flex;
  width: 100%;
  flex-direction: column;
}

.info h1{
  display: flex;
  align-items: center;
  justify-content: center;
}

.titulo{
  font-size: 30px;
}

.genero{
  font-size: 15px;
  color: #888888;
}
</style>