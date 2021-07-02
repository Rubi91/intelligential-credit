<template>
  <div class="content">
    <div class="card">
      <img src="/images/bg-circle.svg" alt="Bubbles Img Login">

      <form action="#" class="form">
        <h3 class="form-title">Iniciar Sesión</h3>
        <div class="field">
          <label for="sessions_email" class="label">Correo electrónico</label>
          <input id="sessions_email" class="input" placeholder="bienvenido@credito.com" type="text" name="email"
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
        <button class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
  computed: {
    // ...
  },
  methods: {
    ...mapMutations({
      // ...
    })
  }
}
</script>
<style lang="scss" scoped>
.btn-primary {
  width: 50%;
  padding: 10px;
}
</style>
