<template>
  <section class="asientos">
    <form id="myform">
      <template v-for="([fila, asientosFila], index) in asientosReducidos" :key="fila">
        <article
          
          :class="`asientos__${fila === 'C' ? 'preferenciales' : 'normal'}`"
        >
          <div :fila="fila">
            <small>{{ fila }}</small>
            <div class="asientos__lista">
              <template v-for="asiento in asientosFila">
                <input
                  type="checkbox"
                  name="seat"
                  :value="asiento.codigo"
                  :id="asiento.codigo"
                  @change="handleSeatChange"
                  :disabled="asientosReservados.includes(asiento._id)"
                  :class="{ reserved: asientosReservados.includes(asiento._id), selected: asientosSeleccionados.has(asiento.codigo) }"
                />
                <label :for="asiento.codigo" :data-place="asiento.codigo.slice(1)"></label>
              </template>
            </div>
          </div>
        </article>
      </template>
      <article class="asientos__menu">
        <div>
          <small class="available"></small> <label>Available</label>
        </div>
        <div>
          <small class="reserved"></small> <label>Reserved</label>
        </div>
        <div>
          <small class="selected"></small> <label>Selected</label>
        </div>
      </article>
    </form>
  </section>
</template>
<script>
import { ref, onMounted, watch, computed } from 'vue';
import axios from 'axios';

export default {
  name: 'asientos',
  props: {
    cineId: {
      type: Number,
      required: true,
    },
    onPriceUpdate: {
      type: Function,
      required: true,
    },
    onSeatsSelect: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const asientos = ref([]);
    const asientosReservados = ref([]);
    const asientosSeleccionados = ref(new Set());

    onMounted(async () => {
      if (props.cineId) {
        try {
          const [funcionesData, reservasData] = await Promise.all([
            axios.get(`http://localhost:3000/funciones/v1?id=${props.cineId}`),
            axios.get(`http://localhost:3000/asientosReserva/v0?id=${props.cineId}`),
          ]);
          const asientosAsignados = funcionesData.data[0].asientosAsignados || [];
          asientos.value = asientosAsignados;
          const reservedSeats = reservasData.data.flatMap(reserva => reserva.asientos_reservados);
          asientosReservados.value = reservedSeats;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    });

    watch(props.cineId, async (newCineId) => {
      if (newCineId) {
        try {
          const [funcionesData, reservasData] = await Promise.all([
            axios.get(`http://localhost:3000/funciones/v1?id=${newCineId}`),
            axios.get(`http://localhost:3000/asientosReserva/v0?id=${newCineId}`),
          ]);
          const asientosAsignados = funcionesData.data[0].asientosAsignados || [];
          asientos.value = asientosAsignados;
          const reservedSeats = reservasData.data.flatMap(reserva => reserva.asientos_reservados);
          asientosReservados.value = reservedSeats;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    });

    const handleSeatChange = (event) => {
      const { value, checked } = event.target;
      const updatedSeleccionados = new Set(asientosSeleccionados.value);
      const asiento = asientos.value.find(asiento => asiento.codigo === value);
      const precioAsiento = asiento ? asiento.precio : 0;

      if (checked) {
        updatedSeleccionados.add(value);
        props.onPriceUpdate(prevTotal => prevTotal + precioAsiento);
      } else {
        updatedSeleccionados.delete(value);
        props.onPriceUpdate(prevTotal => prevTotal - precioAsiento);
      }
      asientosSeleccionados.value = updatedSeleccionados;
      props.onSeatsSelect(Array.from(updatedSeleccionados));
      console.log(`Selected seats: ${Array.from(updatedSeleccionados).join(', ')}`);
    };

    const asientosReducidos = computed(() => {
      return Object.entries(
        asientos.value.reduce((acc, asiento) => {
          const fila = asiento.codigo.slice(0, 1);
          if (!acc[fila]) {
            acc[fila] = [];
          }
          acc[fila].push(asiento);
          return acc;
        }, {})
      );
    });

    return {
      asientosReducidos,
      handleSeatChange,
      asientosReservados,
      asientosSeleccionados,
    };
  },
};
</script>

<style scoped>
.asientos{
    padding: 0 15px;
}
.asientos__normal{
    margin-bottom: 20px !important;
}
.asientos__normal, 
.asientos__preferenciales{
    display: flex;
    gap: 10px;
    margin: 15px 0;
    flex-direction: column;
    align-items: center;
}
.asientos__normal div,
.asientos__preferenciales div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.asientos__lista input[type="checkbox"],
.asientos__preferenciales input[type="checkbox"]{
    display: none;
}
.asientos__lista input[type="checkbox"] + label:before,
.asientos__preferenciales input[type="checkbox"] + label:before {
    content: "";
	float: left;
	margin: 0.5em 0.5em 0 0;
    font-family: "Inter_18pt-Regular";
    outline: none;
    border: none;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    background: #323232;
    border-radius: 5px;
}
.asientos__lista input[type="checkbox"]:checked + label:after,
.asientos__preferenciales input[type="checkbox"]:checked + label:after {
    content: attr(data-place);
    color: #fff;
    display: flex;
    justify-content: center;
    font-family: "Inter_18pt-Regular";
    align-items: center;
    float: left;
    background: #FE0000;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin-left: -2.2em;
}
.asientos__lista input[type="checkbox"] + label:hover::before,
.asientos__preferenciales input[type="checkbox"] + label:hover::before {
    background: #FE0000;
}
.asientos__lista input[type="checkbox"] + label:hover::after,
.asientos__preferenciales input[type="checkbox"] + label:hover::after {
    cursor: pointer;
    content: attr(data-place);
    color: #fff;
    display: flex;
    justify-content: center;
    font-family: "Inter_18pt-Regular";
    align-items: center;
    float: left;
    background: #FE0000;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin-left: -2.2em;
}
.asientos__lista input[type="checkbox"].reserved + label:before,
.asientos__preferenciales input[type="checkbox"].reserved + label:before{
    content: "";
    background: #CECECE ;
}
.asientos__lista input[type="checkbox"].reserved + label:hover::after,
.asientos__preferenciales input[type="checkbox"].reserved + label:hover::after{
    content: attr(data-place);
    background: #CECECE ;
    cursor: default;
}

.asientos__menu{
    display: flex;
    justify-content: space-around;
}

.asientos__menu small {
    display: inline-block; 
    width: 15px; 
    height: 15px;
    border-radius: 50%; 
    margin-right: 5px;
  }
  
  .available {
    background-color: gray; 
  }
  
  .reserved {
    background-color: white; 
  }
  
  .selected {
    background-color: red; 
  }

  </style>