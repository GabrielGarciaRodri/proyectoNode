import { createRouter, createWebHistory } from 'vue-router';
import Tickets from './components/tickets/tickets.vue';
import MovieDetails from './components/movie/movieDetails.vue';
import CompraTickets from './components/tickets/compraTickets.vue';
import layout from './layout.vue';

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: Tickets
  },
  {
    path: '/pelicula/:titulo',
    name: 'movieDetails',
    component: MovieDetails
  },
  {
    path: '/compra-tickets',
    name: 'compraTickets',
    component: CompraTickets
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;