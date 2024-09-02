<template>
  <!-- <div :class="styles.body">
    <div :class="styles.container">
      <div :class="styles.user"> -->
        <User />
      <!-- </div>
      <div :class="styles.Search_movie"> -->
        <Search />
      <!-- </div>
      <div :class="styles.movies"> -->
        <Peliculas />
      <!-- </div>
      <div :class="styles.coming_soon"> -->
        <ComingSoon />
      <!-- </div>
      <footer :class="styles.footer"> -->
        <Footer />
      <!-- </footer>
    </div>
  </div> -->
</template>

<script>
import User from './components/home/user.vue';
import Search from './components/home/search.vue';
import Peliculas from './components/home/peliculas.vue';
import ComingSoon from './components/home/comingSoon.vue';
import Footer from './components/home/footer.vue';
import styles from './style/index.module.css';

export default {
  name: 'layout',
  components: {
    User,
    Search, 
    Peliculas,
    ComingSoon,
    Footer,
  },


}
</script>

<style scoped></style>