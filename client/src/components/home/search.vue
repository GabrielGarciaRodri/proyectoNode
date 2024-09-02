<template>
  <div class="search-container">
    <img :src="searchSvg" alt="Lupa" class="search-icon" />
    <input type="text" class="search-input" placeholder="Search movie, cinema, genre..." />
  </div>
</template>

<script>
import searchSvg from '../../assets/search.svg';

export default {
  name: 'Search',
  data() {
    return {
      searchSvg,
    };
  },
};
</script>

<style scoped>
.search-container {
    position: relative; 
    width: 100%; 
    padding: 10px;
}

.search-icon {
    position: absolute;
    left: 15px; 
    top: 50%; 
    transform: translateY(-50%); 
    width: 20px; 
    height: 20px;
    pointer-events: none; 
}

.search-input {
    width: 100%;
    padding: 10px 10px 10px 40px; 
    box-sizing: border-box;
}
</style>