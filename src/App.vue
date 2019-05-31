<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "App",
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.boackground = isDarkMode ? "#e8ecf0" : "#2e3131";
  }
};
</script>


<style lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $black;
    &.router-link-exact-active {
      color: $black;
    }
  }
}
body {
  background: $light;
}
h1 {
  @include heading-1;
}
p {
  @include large-text-bold($blue);
}

* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
</style>
