<template>
  <img alt="Vue logo" src="./assets/logo.png">
</template>

<script>

const electron = window.require("electron")

export default {
  name: 'App',
  mounted: function(){
    electron.ipcRenderer.on('goToHome', ()=>{
      this.$router.push('/');
    });
    electron.ipcRenderer.on('goToAbout', ()=>{
      this.$router.push('/about');
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
