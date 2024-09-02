<template>
  <footer class="container-footer">
    <ul class="items">
      <li><a href="/"><img :src="homeSvg" /></a></li>
      <li><a href="/"><img :src="searchSvg" /></a></li>
      <li><a href="/tickets"><img :src="ticketsSvg" /></a></li>
      <li><a href="/"><img :src="userSvg" /></a></li>
    </ul>
  </footer>
</template>

<script>
import homeSvg from '../../assets/home.svg';
import searchSvg from '../../assets/search.svg';
import userSvg from '../../assets/user.svg';
import ticketsSvg from '../../assets/tickets.svg';

export default {
  data() {
    return {
      homeSvg,
      searchSvg,
      userSvg,
      ticketsSvg,
    };
  },
};
</script>

<style scoped>
.container-footer{
    display: flex;
    width: 100%;
    height: 70px;
    background: #232323;
    border-radius: 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    align-items: center;
    justify-content: center;
}

.items{
    display: flex;
    width: 100%;
    list-style: none;
    justify-content: space-around;
}

.items a{
    display: flex;
    align-items: center;
    justify-content: center;
}

.items img{
    width: 30px;
    height: 30px;
}

</style>