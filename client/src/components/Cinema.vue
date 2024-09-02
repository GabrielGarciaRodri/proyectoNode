

<script>
  import { defineComponent, ref } from "vue";
  

  export default defineComponent({
    
    name: 'Cinema',
    data() {
      return {
        pelicula: null,
        cines: [],
        cineSeleccionado: null,
        cargando: true,
        error: null,
      };
    },
    props:{
      titulo: String
    },
    mounted() {
      const titulo = this.$route.params.titulo;

      if (titulo) {
        fetch(`http://localhost:3000/pelicula/v2?nombre=${titulo}`)
          .then(response => response.json())
          .then(data => {
            this.pelicula = data;
            fetch(`http://localhost:3000/funciones/v0?id=${data._id}`)
              .then(response => response.json())
              .then(cineData => {
                this.cines = cineData;
                this.cargando = false;
              })
              .catch(error => {
                this.error = 'Error fetching cine details';
                this.cargando = false;
              });
          })
          .catch(error => {
            this.error = 'Error fetching movie details';
            this.cargando = false;
          });
      }
    },
    methods: {
      handleSelectCine(cine) {
        this.cineSeleccionado = cine;
      },
      handleBookNow() {
        if (this.cineSeleccionado) {
          this.$router.push({
            path: '/tickets',
            query: { cineId: this.cineSeleccionado._id }
          });
        } else {
          alert("Por favor, selecciona un cine.");
        }
      }
    }
  });
</script>


<template>
  <div class="Cinema">
    <section class="frame-group">
      <div class="frame-div">
        <div class="arrow-right-parent">
          <img
            class="arrow-right-icon"
            loading="lazy"
            alt=""
            src="/arrowright@2x.png"
          />
          <a class="cinema-selection">Cinema Selection</a>
          <div class="more-vertical-wrapper">
            <img
              class="more-vertical-icon"
              loading="lazy"
              alt=""
              src="/morevertical.svg"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="movie-details">
      <div v-if="cargando">
        Cargando detalles de la película...
      </div>
      <div v-else-if="error">
        {{ error }}
      </div>
      <div v-else-if="pelicula">
        <img :src="pelicula.bannerUrl" :alt="pelicula.titulo" />
        <h1>{{pelicula.titulo}}</h1>
        <p>{{pelicula.genero}}</p>
        <p>{{pelicula.sinopsis }}</p>
        
      </div>
    </section>

    <div v-if="cines.length">
          <label>Selecciona un cine:</label>
          <select v-model="cineSeleccionado">
            <option v-for="cine in cines" :key="cine._id" :value="cine">
              {{ cine.nombre }}
            </option>
          </select>
    </div>

    <button @click="handleBookNow">Book Now</button>

      
    <section class="frame-section">
      <div class="book-now-wrapper">
        <button class="book-now">
          <div class="book-now-child" />
          <b class="book-now1">Book Now</b>
        </button>
      </div>
      <div class="home-indicator2">
        <div class="home-indicator3" />
      </div>
    </section>
  </div>
</template>

<style scoped>
  .notch-icon1 {
    position: absolute;
    top: -7px;
    left: 91px;
    width: 219px;
    height: 30px;
    object-fit: cover;
    display: none;
  }
  .recording-indicator-icon1 {
    position: absolute;
    top: 3px;
    left: 311px;
    width: 6px;
    height: 6px;
    display: none;
  }
  .perro {
    position: absolute;
    top: 511px;
    left: 442px;
    font-weight: 300;
    z-index: 1;
  }
  .perro1 {
    position: absolute;
    top: 511px;
    left: 561px;
    font-weight: 300;
    z-index: 1;
  }
  .left-side-icon {
    height: 21px;
    width: 54px;
    position: relative;
  }
  .mobile-signal-icon {
    height: 10.7px;
    width: 17px;
    position: relative;
  }
  .wifi-icon {
    height: 11px;
    width: 15.3px;
    position: relative;
  }
  .battery-icon {
    align-self: stretch;
    width: 24.3px;
    position: relative;
    max-height: 100%;
    min-height: 11px;
  }
  .mobile-signal-parent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-8xs);
  }
  .frame-container {
    width: 66.6px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-8xs-4);
    box-sizing: border-box;
  }
  .left-side-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .frame-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) var(--padding-xs) var(--padding-2xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .arrow-right-icon {
    height: 24px;
    width: 24px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: contain;
  }
  .cinema-selection {
    text-decoration: none;
    width: 153px;
    position: relative;
    font-weight: 600;
    color: inherit;
    display: inline-block;
  }
  .more-vertical-icon {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .more-vertical-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) 0px 0px;
  }
  .arrow-right-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .frame-div {
    width: 367px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .frame-group {
    position: absolute;
    top: 7px;
    left: 13px;
    width: 380px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lgi);
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-lg);
    color: var(--color-white);
    font-family: var(--body-medium-regular);
  }
  .book-now-child {
    height: 48px;
    width: 333px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-red-100);
    display: none;
    max-width: 100%;
  }
  .book-now1 {
    position: relative;
    font-size: var(--font-size-base);
    display: inline-block;
    font-family: var(--body-medium-regular);
    color: var(--color-white);
    text-align: left;
    min-width: 79px;
    z-index: 1;
  }
  .book-now {
    cursor: pointer;
    border: none;
    padding: var(--padding-mini) var(--padding-xl) var(--padding-sm);
    background-color: var(--color-red-100);
    flex: 1;
    border-radius: var(--br-3xs);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    white-space: nowrap;
    max-width: 100%;
  }
  .book-now-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .home-indicator3 {
    height: 5px;
    width: 134px;
    position: relative;
    border-radius: var(--br-81xl);
    background-color: var(--color-white);
  }
  .home-indicator2 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-mid) var(--padding-xl) var(--padding-5xs)
      var(--padding-2xl);
  }
  .frame-section {
    position: absolute;
    top: 764px;
    left: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
    max-width: 100%;
  }
  .Cinema {
    width: 393px;
    height: 852px;
    background-color: var(--color-gray-500);
    max-width: 100%;
    overflow: hidden;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-5xs);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>

