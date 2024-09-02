<template>
  <div class="container_user">
    <div class="img_user">
      <img :src="userSvg" class="user_svg" />
    </div>
    <div class="message_user">
      <h4>Hi, Ferrucio Tuccine!</h4>
      <strong><h4>Let’s watch movie together!</h4></strong>
    </div>
    <div class="noti">
      <img :src="bellSvg" class="bell_svg" />
    </div>
  </div>
</template>

<script>
import userSvg from '../../assets/user.svg';
import bellSvg from '../../assets/bell.svg';

export default {
  name: 'User',
  data() {
    return {
      userSvg,
      bellSvg,
    };
  },
};
</script>

<style scoped>
.container_user{
    display: grid;
    grid-template-columns: 20% 60% 20%;
    grid-template-rows: 1fr;
    grid-template-areas: 
    "imgUser message noti";
}

.img_user{
    grid-area: imgUser;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img_user img{
    width: 50px;
    height: 50px;
}

.message_user{
    grid-area: message;
    display: flex;
    flex-direction: column;
    justify-content: center;
}


.noti{
    grid-area: noti;
    display: flex;
    justify-content: center;
    align-items: center;
}

.noti img{
    width: 30px;
    height: 30px;
}</style>