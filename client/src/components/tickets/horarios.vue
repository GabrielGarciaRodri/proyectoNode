<template>
  <div class="horarios-container">
    <div v-if="horarios.length > 0">
      <div
        v-for="(horario, index) in horarios"
        :key="index"
        :class="`horario-card ${selectedHorario === horario ? 'selected' : ''}`"
        @click="handleCardClick(horario)"
      >
        <div class="horario-dia">
          {{ horario.dia }}
        </div>
        <div class="horario-numero">
          {{ horario.dia_numero }}
        </div>
        <div class="horario-hora">
          {{ horario.hora }}
        </div>
      </div>
    </div>
    <div v-else class="no-horarios">No hay horarios disponibles</div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  props: {
    cineId: {
      type: Number,
      required: true,
    },
    onHorarioSelect: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const horarios = ref([]);
    const selectedHorario = ref(null);

    onMounted(async () => {
      if (props.cineId) {
        try {
          const response = await fetch(`http://localhost:3000/funciones/v2?id=${props.cineId}`);
          const data = await response.json();
          if (data.length > 0) {
            horarios.value = data[0].horarios;
          }
        } catch (error) {
          console.error('Error fetching horarios:', error);
        }
      }
    });

    const handleCardClick = (horario) => {
      selectedHorario.value = horario;
      props.onHorarioSelect(horario);
    };

    return {
      horarios,
      selectedHorario,
      handleCardClick,
    };
  },
};
</script>

<style scoped>


.horarios-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    color: black;
    margin: 10px;
  }
  
  .horario-card {
    background-color: #f0f0f0;
    border-radius: 8px;
    margin: 10px;
    height: 100px;
    text-align: center;
    flex-basis: calc(33.333% - 30px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .no-horarios {
    font-size: 16px;
    color: #888;
    text-align: center;
    width: 100%;
  }

  .horario-hora{
    padding-top: 10px;
  }

  .horario-numero{
    padding-top: 10px;
  }

  .horario-card.selected {
    color: #fff;
    border: 2px solid red; 
    background-color: red; 
  }
  </style>