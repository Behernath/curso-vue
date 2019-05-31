<template>
  <div
    class="container"
    :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
  >
    <div class="login">
      <RequestAccount></RequestAccount>
      <img src="@/assets/LNM.svg" style="width: 300px" v-if="!isDarkMode">
      <img src="@/assets/LNM-dark.svg" style="width: 300px" v-if="isDarkMode">
      <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Entrar a Neumomed</h4>
      <input
        type="number"
        maxlength="10"
        placeholder="Cédula"
        :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
      >
      <input
        type="number"
        maxlength="4"
        placeholder="Año de Nacimiento"
        :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
      >
      <button>Acceder</button>
      <router-link
        to="/recover"
        :class="{'light-link': isDarkMode, 'dark-link' : !isDarkMode}"
      >¿Olvidaste tu contraseña?</router-link>
      <ThemeSwitch></ThemeSwitch>
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
export default {
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    }
  },
  components: {
    RequestAccount,
    ThemeSwitch
  }
};
</script>

<style lang="scss" scoped>
.light-background {
  background-color: $light;
}

.dark-background {
  background-color: $dark;
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: #646a6aff;
  border: 2px solid #646a6a;
  &::placeholder {
    color: #999;
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.light-link {
  color: #ccc;

  a {
    color: #33ccff;
  }
}

.dark-link {
  color: #303333;

  a {
    color: #33ccff;
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login {
  width: 400px;
}

.request {
  position: absolute;
  top: 40px;
  right: 40px;
  color: #666;

  a {
    color: #ccc;
  }
}

h4 {
  margin: 24px;
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  color: #666;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 4px;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: #303333;
  margin-bottom: 20px;
  text-align: center;

  &::placeholder {
    color: #99999980;
  }
}

button {
  background: #33ccff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: white;
  margin-bottom: 40px;
}

a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  color: #ccc;
  text-decoration: none;
}
</style>