<template>
  <div :class="$style['container-menu']">
    <div :class="$style['regreso']">
      <a href="/"><img :src="regresoSvg" alt="Back" /></a>
    </div>
    <div :class="$style['title']">
      <h1>Choose Seat</h1>
    </div>
    <div :class="$style['menu']">
      <a><img :src="puntosSvg" alt="Menu" /></a>
    </div>
  </div>
  <div :class="$style['container-seating']">
    <div :class="$style['container-screen']">
      <img :src="screenSvg" alt="Screen" />
    </div>
    <Asientos :cine-id="cineId" @price-update="handlePriceUpdate" @seats-select="handleSeatsSelect"/>
  </div>
  <div :class="$style['container-functions']">
    <Horarios :cine-id="cineId" @horario-select="handleHorarioSelect"/>
  </div>
  <div :class="$style['container-preci']">
    <Comprar :cine-id="cineId" :precio-total="precioTotal" :asientos-seleccionados="asientosSeleccionados" :horario-seleccionado="horarioSeleccionado" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Asientos from './asientos.vue';
import Horarios from './horarios.vue';
import Comprar from './compra.vue';
import regresoSvg from '../../assets/regreso.svg';
import puntosSvg from '../../assets/puntos.svg';
import screenSvg from '../../assets/screen.svg';

export default {
  name: 'tickets',
  setup() {
    const route = useRoute();
    const cineId = ref(route.query.cineId || null);
    const precioTotal = ref(0);
    const asientosSeleccionados = ref([]);
    const horarioSeleccionado = ref(null);

    onMounted(() => {
      if (route.query.cineId) {
        cineId.value = route.query.cineId;
      }
    });

    const handlePriceUpdate = (nuevoPrecio) => {
      precioTotal.value = nuevoPrecio;
    };

    const handleSeatsSelect = (asientos) => {
      asientosSeleccionados.value = asientos;
    };

    const handleHorarioSelect = (horario) => {
      horarioSeleccionado.value = horario;
    };

    return {
      cineId,
      precioTotal,
      asientosSeleccionados,
      horarioSeleccionado,
      handlePriceUpdate,
      handleSeatsSelect,
      handleHorarioSelect,
    };
  },
};
</script>

<style module>
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

.container-seating .container-screen{
    display: flex;
    justify-content: center;
    padding: 10px;
}

.container-seating .container-screen img{
    width: 300px;
}

.container-preci{
    padding: 10px;
}</style>