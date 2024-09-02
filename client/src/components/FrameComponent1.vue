<template>
  <section class="home-inner">
    <div class="frame-parent14">
      <div class="frame-wrapper12">
        <div class="frame-parent15">
          <div class="frame-wrapper13">
          </div>
          <div class="image-parent">
            <img class="image-icon" loading="lazy" alt="" src="/image@2x.png" />
            <div class="user-info">
              <div class="user-name">
                <h3 class="hi-ferrucio-tuccine">Hi, Ferrucio Tuccine!</h3>
                <h3 class="lets-watch-movie">Let’s watch movie together!</h3>
              </div>
            </div>
            <div class="search-bar-wrapper">
              <div class="search-bar">
                <img
                  class="search-input-icon"
                  loading="lazy"
                  alt=""
                  src="/frame-33.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="search">
        <div class="search-child" />
        <div class="search-icon">
          <div class="search-input-icon1">
            <img class="search-input-icon-child" alt="" src="/line-7.svg" />
            <img class="search-input-icon-item" alt="" src="/ellipse-42.svg" />
          </div>
        </div>
        <input
          class="search-movie-cinema"
          placeholder="Search movie, cinema, genre..."
          type="text"
        />
      </div>
    </div>
  </section>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent1",
  });
</script>
<style scoped>

  .image-icon {
    height: 48px;
    width: 48px;
    position: relative;
    border-radius: var(--br-81xl);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
  }
  .hi-ferrucio-tuccine {
    margin: 0;
    position: relative;
    font-size: inherit;
    line-height: 150%;
    font-weight: 400;
    font-family: inherit;
    white-space: nowrap;
  }
  .lets-watch-movie {
    margin: 0;
    position: relative;
    font-size: var(--font-size-mini);
    line-height: 23px;
    font-weight: 600;
    font-family: inherit;
    white-space: nowrap;
  }
  .user-name {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .user-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-sm) var(--padding-12xs) 0px;
  }
  .search-input-icon {
    height: 40px;
    width: 40px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .search-bar {
    border-radius: var(--br-5xs);
    border: 1px solid var(--color-darkgray-300);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .search-bar-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-9xs);
  }
  .image-parent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px var(--padding-smi) 0px 0px;
    gap: var(--gap-xs);
  }
  .frame-parent15 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-12xl);
    max-width: 100%;
  }
  .frame-wrapper12 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-10xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .search-child {
    height: 51px;
    width: 333px;
    position: relative;
    border-radius: var(--br-3xs);
    background: linear-gradient(90deg, #232323, #161616);
    border: 1px solid var(--color-white);
    box-sizing: border-box;
    display: none;
    max-width: 100%;
  }
  .search-input-icon-child {
    position: absolute;
    top: 10.4px;
    left: 10.7px;
    width: 3.7px;
    height: 3.1px;
    z-index: 1;
  }
  .search-input-icon-item {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 12.7px;
    height: 12px;
    z-index: 2;
  }
  .search-input-icon1 {
    width: 14.4px;
    height: 13.5px;
    position: relative;
  }
  .search-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) 0px 0px;
  }
  .search-movie-cinema {
    width: 218px;
    border: none;
    outline: none;
    font-family: var(--font-montserrat);
    font-size: var(--body-medium-regular-size);
    background-color: transparent;
    height: 17px;
    position: relative;
    color: var(--color-gray-600);
    text-align: left;
    display: inline-block;
    padding: 0;
    z-index: 1;
  }
  .search {
    width: 333px;
    border-radius: var(--br-3xs);
    background: linear-gradient(90deg, #232323, #161616);
    border: 1px solid var(--color-white);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-mini) var(--padding-lgi);
    gap: var(--gap-sm-5);
    max-width: 100%;
  }
  .frame-parent14 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-12xs);
    box-sizing: border-box;
    gap: var(--gap-mid);
    max-width: 100%;
  }
  .home-inner {
    width: 382px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-lgi) var(--padding-3xs);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--body-medium-regular-size);
    color: var(--color-white);
    font-family: var(--body-medium-regular);
  }
</style>
