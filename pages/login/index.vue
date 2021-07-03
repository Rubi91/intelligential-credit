<template>
  <div class="content">
    <div class="card">
      <img src="/images/bg-circle.svg" alt="Bubbles Img Login">

      <form class="form" v-on:submit.prevent="loginForm">
        <h3 class="form-title">Iniciar Sesión</h3>
        <div class="field">
          <label for="email" class="label">Correo electrónico</label>
          <input id="email" class="input" placeholder="bienvenido@credito.com" type="email" name="email" v-model="email"
                 autocomplete="off" required>
        </div>

        <div class="field">
          <label for="password" class="label">Contraseña</label>
          <input id="password" type="password" placeholder="********" class="input" required name="password">
        </div>

        <p class="my-4">
          ¿Aún no estás registrado?
          <NuxtLink class="link" to="/signup"><b>Regístrate aquí</b></NuxtLink>
        </p>
        <button class="btn btn-primary" type="submit" :disabled="loading">{{
            loading ? 'Enviando...' : 'Login'
          }}
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      email: '',
      loading: false
    };
  },
  methods: {
    ...mapMutations({
      setUser: 'setUser',
      setLoggedIn: 'setLoggedIn'
    }),
    loginForm() {
      this.loading = true

      setTimeout(() => {
        this.setLoggedIn(true)
        this.setUser(this.email)
        this.$router.push('/')
      }, 3000)

    }
  }
}
</script>
<style lang="scss" scoped>
.btn-primary {
  width: 50%;
  padding: 10px;
}
</style>
