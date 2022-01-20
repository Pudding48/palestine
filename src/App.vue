<template>
  <div id="app">
    <transition name="menu" mode="out-in">
        <router-view />
    </transition>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e1e1e1;
  background-color: #3a3a3a;
  margin: 0;
}
.menu-enter-active,
.menu-leave-active{
    transition: all .5s ease-in-out;
}
.menu-enter{
    transform: translateX(100%);
    opacity: 0;
}
.menu-leave-to{
    transform: translateX(-100%);
}
</style>

