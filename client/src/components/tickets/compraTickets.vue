<template>
  <div class="compra-tickets">
    <div class="container-menu">
      <div class="regreso">
        <a href="/"><img :src="regresoSvg" alt="Back" /></a>
      </div>
      <div class="title">
        <h1>Order Summary</h1>
      </div>
      <div class="menu">
        <a><img :src="puntosSvg" alt="Menu" /></a>
      </div>
    </div>
    <div v-if="pelicula && funcion" class="order-summary">
      <div class="movie-details">
        <img :src="pelicula.bannerUrl" :alt="`${pelicula.titulo} banner`" class="movie-banner" />
        <div class="movie-info">
          <h2 class="movie-title">{{ pelicula.titulo }}</h2>
          <p class="movie-genre">{{ pelicula.genero }}</p>
          <p class="movie-synopsis">{{ pelicula.sinopsis }}</p>
        </div>
      </div>
      <div class="order-details">
        <div class="orderNumber">
          <h3>Order Number: {{ orderNumber }}</h3>
        </div>
        <div class="TICKET">
          <p>{{ asientosSeleccionados.length }} Ticket(s)</p>
          <p>Seats: {{ asientosSeleccionados.join(', ') }}</p>
        </div>
        <div class="regular-seat">
          <p>Regular Seat:</p>
          <p> ${{ precioTotal.toFixed(2) }}</p>
        </div>
        <div class="service-fee">
          <p>Service Fee: $120</p>
          <p>{{ asientosSeleccionados.length }}</p>
        </div>
        <button class="buy-ticket-button" @click="handleBuyTicket">Buy Ticket</button>
      </div>
    </div>
    <p v-else>Loading movie details...</p>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: 'compraTickets',
  props: {
    precioTotal: {
      type: Number,
      required: true,
    },
    asientosSeleccionados: {
      type: Array,
      required: true,
    },
    horarioSeleccionado: {
      type: String,
      required: true,
    },
    cineId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const pelicula = ref(null);
    const funcion = ref(null);
    const asientosDetalles = ref([]);
    const orderNumber = ref(generateRandomOrderNumber());

    onMounted(async () => {
      try {
        const response = await axios.get(`http://localhost:3000/funciones/v2?id=${props.cineId}`);
        const data = await response.data;
        if (data.length > 0) {
          funcion.value = data[0];
          fetchPelicula(data[0].id_pelicula);
        }
      } catch (error) {
        console.error('Error al obtener la función:', error);
      }
    });

    const fetchPelicula = async (idPelicula) => {
      try {
        const response = await axios.get(`http://localhost:3000/pelicula/v3?id=${idPelicula}`);
        const data = await response.data;
        pelicula.value = data[0] || {};
      } catch (error) {
        console.error('Error al obtener la película:', error);
      }
    };

    const fetchAsientos = async () => {
      try {
        const codes = JSON.stringify(props.asientosSeleccionados);
        const response = await axios.get(`http://localhost:3000/asientos/v1?codes=${encodeURIComponent(codes)}`);
        const data = await response.data;
        asientosDetalles.value = data;
        const ids = data.map(asiento => asiento._id);
        console.log('IDs de asientos:', ids);
      } catch (error) {
        console.error('Error al obtener los asientos:', error);
      }
    };

    if (props.cineId) {
      fetchPelicula();
    }

    if (props.asientosSeleccionados && props.asientosSeleccionados.length > 0) {
      fetchAsientos();
    }

    const handleBuyTicket = async () => {
      try {
        const idMovimiento = "66c65384e3e8281d85bd18d1";
        const fechaAdquisicion = new Date().toISOString();
        const idsAsientos = asientosDetalles.value.map(asiento => asiento._id);
        const response = await axios.post('http://localhost:3000/boletas/v0', {
          asientos: idsAsientos,
          fecha_adquisicion: fechaAdquisicion,
          id_movimiento: idMovimiento
        });

        if (response.data) {
          const result = response.data;
          console.log('Compra realizada con éxito:', result);
          router.push('/confirmacion', { state: { orderNumber: orderNumber.value } });
        } else {
          console.error('Error al realizar la compra:', response.data);
        }
      } catch (error) {
        console.error('Error al enviar la solicitud de compra:', error);
      }
    };

    return {
      pelicula,
      funcion,
      asientosDetalles,
      orderNumber,
      handleBuyTicket,
    };
  },
};
</script>

<style scoped>
.compra-tickets {
    background-color: #1a1a1a;
    color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    height: 100vh;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
  }
  
  .order-summary {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .movie-details {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  
  .movie-banner {
    width: 100px;
    border-radius: 8px;
  }
  
  .movie-info {
    flex: 1;
  }
  
  .movie-title {
    color: #ff0000;
    font-size: 1.2em;
    margin-bottom: 0.2em;
  }
  
  .movie-genre {
    color: #cccccc;
    margin-bottom: 0.5em;
  }
  
  .movie-synopsis {
    color: #aaaaaa;
    font-size: 0.9em;
  }
  
  .order-details {
    background-color: #121212;
    padding: 15px;
    border-radius: 8px;
    height: 50vh;
  }

  .order-details div{
    margin: 10px;
    color: gray;
    border-bottom: gray 1px solid;
    padding-bottom: 10px;
  }

  .orderNumber, 
  .TICKET, 
  .regular-seat, 
  .service-fee{
    font-size: 15px;
    display: flex;
    justify-content: space-between;
  }
  
  
  .buy-ticket-button {
    background-color: #ff0000;
    color: #ffffff;
    padding: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1em;
    width: 100%;
    margin-top: 20px;
  }
  
  .buy-ticket-button:hover {
    background-color: #e60000;
  }
  
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

.compra-tickets .container-menu .title{
    font-size: 13px;
}</style>