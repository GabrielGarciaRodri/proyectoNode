<script>
  import { defineComponent } from "vue";
  import FrameComponent1 from "./FrameComponent1.vue";
  import MovieDetails from "./MovieDetails.vue";
  import UpcomingMovieItem from "./UpcomingMovieItem.vue";
  import GroupComponent1 from "./GroupComponent1.vue";

  export default defineComponent({

    data(){
      return {
        peliculas: [],
        currentIndex: 0,
      }
    },
    mounted() {
      fetch('http://localhost:3000/pelicula/v0')
       .then(response => response.json())
       .then(data => {
          this.peliculas = data;
        });
    },
    methods: {
      handleImageClick(pelicula) {
        this.$router.push({ name: 'cinema', params: { titulo: pelicula.titulo} });
      },
      goToSlide(index) {
        this.currentIndex = index;
        const carousel = this.$refs.carousel;
        carousel.scrollLeft = index * carousel.offsetWidth;
      },
    },
    name: "Home",
    components: {
      FrameComponent1,
      MovieDetails,
      UpcomingMovieItem,
      GroupComponent1,
    },
  });
</script>


<template>
  <div class="home">
    <img class="notch-icon3" alt="" src="/notch@2x.png" />
    <img
      class="recording-indicator-icon3"
      alt=""
      src="/recording-indicator.svg"
    /><FrameComponent1 />
    <div class="movie-list">
      <div class="now-playing-parent">
        <h2 class="now-playing">Now playing</h2>
        <div class="see-all-button">
          <a class="see-all">See all</a>
        </div>
      </div>
    </div>
    <section class="movie-posters">
      <div class="movie-carousel">

        <div class="carousel-inner" ref="carousel">
          <ul v-for="(pelicula, index) in peliculas" :key="pelicula._id" > 
            <li>
              <router-link :to="{ name: 'cinema', params: { titulo: pelicula.titulo } }"
              >
                <img 
                  :src="pelicula.bannerUrl" 
                  :alt="pelicula.titulo" 
                  :style="{ maxWidth: '220px', height: '300px'}"
                  @click="handleImageClick(pelicula.titulo)"
                  >
              </router-link> 
            </li>
            

            <div class="movie-title-wrapper">
              <p class="movie-title">{{ pelicula.titulo }}</p>
            </div>
            <div class="movie-genre">
              <p class="genre1">{{ pelicula.genero }}</p>
            </div>
          </ul>
        </div>
        <div class="carousel-nav">
          <div v-for="(movie, index) in peliculas" 
          :key="index" class="dot" 
          :class="{ active: currentIndex === index }" @click="goToSlide(index)"></div>
        </div>
      </div>

  </section>
    <MovieDetails />

    <section class="upcoming-movies">
      <UpcomingMovieItem /><GroupComponent1 />
    </section>
  </div>
</template>

<style scoped>
  
  .notch-icon3 {
    width: 219px;
    height: 30px;
    position: relative;
    object-fit: cover;
    display: none;
  }
  .recording-indicator-icon3 {
    width: 6px;
    height: 6px;
    position: relative;
    display: none;
  }
  .now-playing {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
    display: inline-block;
    min-width: 108px;
  }
  .see-all {
    text-decoration: none;
    position: relative;
    font-weight: 600;
    color: inherit;
    display: inline-block;
    min-width: 45px;
  }
  .see-all-button {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) 0px 0px;
    font-size: var(--body-medium-regular-size);
    color: var(--color-red-100);
  }
  .now-playing-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
  }
  .movie-list {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-11xl) var(--padding-xl);
    box-sizing: border-box;
  }
  .poster-items-icon {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: 94px;
    border-radius: var(--br-xl);
    max-height: 100%;
    object-fit: cover;
  }
  .poster-items-icon1 {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -130px;
    border-radius: var(--br-xl);
    max-height: 100%;
    width: 204px;
    object-fit: cover;
  }
  .poster-items-icon2 {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: 318px;
    border-radius: var(--br-xl);
    max-height: 100%;
    width: 204px;
    object-fit: cover;
  }

 .movie-posters {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
  }
  .carousel-nav {
    display: flex;
    justify-content: center;
  }

  .movie-carousel {
    background-color: var(--color-gray-500);
    border-radius: 10px;
    padding: 20px;
    margin: 0 auto;
    overflow-x: auto;
    max-width: 100%;
  }


  li{
    list-style: none;
  }
  
  .movie-title-wrapper{
    display: flex;
    justify-content: center;
    font-size: var(--font-size-lg);
    color: var(--color-white);
    font-family: var(--body-medium-regular);
  }

  .movie-genre{
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .genre1{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-transform: capitalize;
    font-weight: 400;
    font-size: var(--font-size-smi);
    min-width: 60px;
    color: var(--color-gray-700);
    margin-top: -10px;
  }
  .carousel-inner {
     display: flex;
     overflow-x: auto;
     overflow-y: hidden;
     transition: transform 0.3s ease;
     margin-left: -20px;
     margin-right: -10px;
     margin-top: -20px;
  }

  .carousel-inner img{
    border-radius: 15px;
    margin:-10px;

  }

  .upcoming-movies {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .home {
    width: 393px;
    background-color: var(--color-gray-500);
    max-width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-6xs) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-3xs);
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-lg);
    color: var(--color-white);
    font-family: var(--body-medium-regular);
  }
</style>
