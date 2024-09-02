<template>
  <div>
    <div class="header-section">
      <span class="title">Coming soon</span>
      <a href="#" class="see_all">See all</a>
    </div>
    <div class="container_soon">
      <div class="movie-card">
        <div class="container_imagen">
          <img
            :src="pelicula.bannerUrl"
            :alt="`Banner of ${pelicula.titulo}`"
            @click="handleImageClick(pelicula.titulo)"
          />
        </div>
        <div class="container_info">
          <h1 class="title">{{ pelicula.titulo }}</h1>
          <h2 class="genero">{{ pelicula.genero }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  data() {
    return {
      pelicula: 0,
      peliculas: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/pelicula/v1')
      .then(response => response.json())
      .then(data => (this.peliculas = data))
      .catch(error => console.error('Error fetching movies:', error));

    fetch('http://localhost:3000/pelicula/v0')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const peliculasIds = new Set(this.peliculas.map(pelicula => pelicula.titulo));
          const peliculasFiltradas = data.filter(pelicula => !peliculasIds.has(pelicula.titulo));

          if (peliculasFiltradas.length > 0) {
            const randomIndex = Math.floor(Math.random() * peliculasFiltradas.length);
            this.pelicula = peliculasFiltradas[randomIndex];
          }
        }
      })
      .catch(error => console.error('Error fetching movies:', error));
  },
  methods: {
    handleImageClick(titulo) {
      this.$router.push(`/pelicula/detalle?nombre=${encodeURIComponent(titulo)}`);
    },
  },
};
</script>

<style scoped>
/* Aquí puedes agregar tus estilos CSS */
</style>