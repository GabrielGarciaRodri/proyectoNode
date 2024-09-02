<template>
  <div>
    <div class="container-menu">
      <div class="regreso">
        <a href="/"><img src="../../assets/regreso.svg" alt="Back" /></a>
      </div>
      <div class="title">
        <h3>Cinema Selection</h3>
      </div>
      <div class="menu">
        <a><img src="../../assets/puntos.svg" alt="Menu" /></a>
      </div>
    </div>
    <div class="detalle-pelicula">
      <div class="container-img">
        <img :src="pelicula.bannerUrl" :alt="`Banner de ${pelicula.titulo}`" />
      </div>
      <div class="container-trailer">
        <div class="container-title-gen">
          <h4>{{ pelicula.titulo }}</h4>
          <h5>{{ pelicula.genero }}</h5>
        </div>
        <button v-if="pelicula.trailerUrl">
          <img src="../../assets/play.svg" alt="Play" />
          <a :href="pelicula.trailerUrl">Watch Trailer</a>
        </button>
      </div>
      <div class="container-sinopsis">
        <p>{{ pelicula.sinopsis }}</p>
      </div>
      <h2>Cast</h2>
      <div class="container-cast">
        <div class="container-actors">
          <div v-if="pelicula.cast && pelicula.cast.length > 0">
            <div v-for="(actor, index) in pelicula.cast" :key="index" class="container-actor">
              <div class="img-actor">
                <img :src="actor.foto_autor" :alt="actor.nombre_autor" style="width: 50px; height: 75px; margin-right: 10px" />
              </div>
              <div class="info-cast">
                <h4>{{ actor.nombre_autor }}</h4>
                <h5>{{ actor.personaje }}</h5>
              </div>
            </div>
          </div>
          <p v-else>No cast information available.</p>
        </div>
      </div>
      <h2>Cinema</h2>
      <div class="container-cines">
        <div v-if="cines.length > 0">
          <div v-for="cine in cines" :key="cine.cineDetalles._id" class="container-cine" @click="handleSelectCine(cine)">
            <h3><strong>{{ cine.cineDetalles.nombre }}</strong></h3>
            <h4>Precio: ${{ cine.cineDetalles.precio }}</h4>
          </div>
        </div>
        <p v-else>No hay funciones para esa película en este momento.</p>
      </div>
      <div class="container-book">
        <button @click="handleBookNow">Book Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movieDetails',
  data() {
    return {
      pelicula: 0,
      cines: [],
      cineSeleccionado: null,
    };
  },
  mounted() {
    const params = new URLSearchParams(this.$route.query);
    const nombre = params.get('nombre');

    if (nombre) {
      fetch(`http://localhost:3000/pelicula/v2?nombre=${nombre}`)
        .then(response => response.json())
        .then(data => {
          this.pelicula = data;
          fetch(`http://localhost:3000/funciones/v0?id=${data._id}`)
            .then(response => response.json())
            .then(cineData => (this.cines = cineData))
            .catch(error => console.error('Error fetching cine details:', error));
        })
        .catch(error => console.error('Error fetching movie details:', error));
    }
  },
  methods: {
    handleSelectCine(cine) {
      this.cineSeleccionado = cine;
    },
    handleBookNow() {
      if (this.cineSeleccionado) {
        this.$router.push('/tickets', { state: { cineId: this.cineSeleccionado._id } });
      } else {
        alert("Por favor, selecciona un cine.");
      }
    },
  },
};
</script>


<style scoped>
.container-menu {
    display: flex;
    height: 70px;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
}

.container-menu img{
    width: 25px;
    height: 25px;
}

.container-img{
    display: flex;
    justify-content: center;
    margin: 10px;   
    height: 300px;
}

.container-img img{
    height: 300px;
}

.detalle-pelicula h2{
    padding: 10px;
}

.container-trailer{
    display: flex;
    justify-content: space-between;
    margin: 15px 30px;
}

.container-trailer button{
    width: 110px;
    background: red;
    border-radius: 10px;
    border: none;
}

.container-trailer button img{
    padding-right: 5px;
}

.container-trailer button a{
    text-decoration: none;
    color: #fff;
}

.container-sinopsis{
    margin: 10px;
}

.container-cast{
    display: flex;
}

.container-cast img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.container-cast ul{
    display: flex;
    list-style: none;
    width: 200px;
}

.container-cast ul li{
    margin: 10px;
}

.container-actors{
    margin: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.container-actor{
    display: flex;
    align-items: center;
}

.info-cast h5{
    color: gray;
}

.container-cines{
    margin: 10px;
}

.container-cine{
    background: #272727;
    border-radius: 25px;
}

.container-info{
    padding: 10px;
}

.container-info h3{
    padding-left: 10px;
}


.container-info h4{
    padding-left: 10px;
}

.container-book{
    display: flex;
    padding: 10px;
    justify-content: center;
}

.container-book button{
    width: 300px;
    height: 50px;
    background: red;
    border: none;
    border-radius: 10px;
}

.selected {
    border: 2px solid red;
    border-radius: 35px;
  }</style>