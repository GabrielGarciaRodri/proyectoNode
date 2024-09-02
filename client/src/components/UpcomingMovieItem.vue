<template>
  <div class="upcoming-movie-item">
    <div class="cart">
      <div class="cart-child" />
      <img class="cart-icon" alt="" src="/cart-icon@2x.png" />
      <div class="movie-name1">
        <div class="furious-10-2023-parent">
          <div class="furious-10-2023">Furious 10 (2023)</div>
          <div class="action-adventure1">Action, Adventure</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UpcomingMovieItem",
  });
</script>
<style scoped>
  .cart-child {
    height: 98px;
    width: 333px;
    position: relative;
    border-radius: var(--br-xl);
    background: linear-gradient(90deg, #272727, #272727);
    display: none;
    max-width: 100%;
  }
  .cart-icon {
    height: 80px;
    width: 80px;
    position: relative;
    border-radius: var(--br-xl);
    object-fit: cover;
    z-index: 1;
  }
  .furious-10-2023 {
    position: relative;
    line-height: 120%;
    font-weight: 500;
    z-index: 1;
  }
  .action-adventure1 {
    position: relative;
    font-size: var(--font-size-xs);
    line-height: 18px;
    font-weight: 500;
    font-family: var(--font-roboto);
    display: inline-block;
    min-width: 99px;
    z-index: 1;
  }
  .furious-10-2023-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-11xs);
  }
  .movie-name1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) 0px 0px;
  }
  .cart {
    flex: 1;
    border-radius: var(--br-xl);
    background: linear-gradient(90deg, #272727, #272727);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-4xs) var(--padding-3xs);
    box-sizing: border-box;
    gap: var(--gap-lg);
    max-width: 100%;
  }
  .upcoming-movie-item {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
</style>
