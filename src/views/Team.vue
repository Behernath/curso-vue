<template>
  <div class="container">
    <h2>Team</h2>
    <div class="cards">
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-1" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/bot.png"
            class="card-header"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          >
          <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Doctor Neumo</h3>
          <p :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Tu asistente virtual.</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-2" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/diagnóstico.png"
            class="card-header"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          >
          <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Consulta General</h3>
          <p
            :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
          >Con los mejores neumólogos.</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-3" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/espirometría.png"
            class="card-header"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          >
          <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Espirometrías</h3>
          <p
            :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
          >Con los mejores equipos del mundo.</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-4" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/medicamento.png"
            class="card-header"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          >
          <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Medicamentos</h3>
          <p
            :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
          >Los medicamentos más efectivos.</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-5" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/pulmon.png"
            class="card-header"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          >
          <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">La mejor salud</h3>
          <p
            :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
          >Siempre pensando en el paciente.</p>
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}
.card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
}

.light-card {
  background: $gray;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}

.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}

.card-header {
  width: 50%;
  padding: 0 75px 0 75px;
  border-radius: 10px 10px 0 0;
}

.light-header {
  background: $light-gray;
}

.dark-header {
  background: #283049;
}

h2 {
  @include heading-2;
}

h3 {
  @include heading-3;
  margin-bottom: 16px;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-top: 0;
}
.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}
</style>