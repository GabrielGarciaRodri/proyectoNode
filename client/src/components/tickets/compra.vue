<template>
  <div class="comprar">
    <div class="total-price">
      <h3>Precio</h3>
      <h2>${{ precioTotal.toFixed(2) }}</h2>
    </div>
    <div class="buy-ticket">
      <button @click="handleBuyTickets">
        <h2>Comprar boleto</h2>
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  props: {
    cineId: {
      type: Number,
      required: true,
    },
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
  },
  setup(props) {
    const router = useRouter();

    const handleBuyTickets = () => {
      if (!props.horarioSeleccionado) {
        alert('Por favor, selecciona un horario antes de continuar.');
        return;
      }

      console.log('Datos de compra:', {
        precioTotal: props.precioTotal,
        asientosSeleccionados: props.asientosSeleccionados,
        horarioSeleccionado: props.horarioSeleccionado,
        cineId: props.cineId,
      });

      router.push({
        name: '/compra-tickets',
        params: {
          precioTotal: props.precioTotal,
          asientosSeleccionados: props.asientosSeleccionados,
          horarioSeleccionado: props.horarioSeleccionado,
          cineId: props.cineId,
        },
      });
    };

    return {
      handleBuyTickets,
    };
  },
};
</script>

<style scoped>
.comprar{
    display: flex;
    height: 50px;
    justify-content: space-around;
    align-items: center;
}

.total-price h3{
    margin-bottom: 3px;
}

.Buy-ticket button{
    width:200px;
    height: 50px;
    background: red;
    border-radius: 10px;
    border: none;
}</style>