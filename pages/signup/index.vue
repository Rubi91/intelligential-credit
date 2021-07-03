<template>
  <div class="content">
    <div class="card sign-up">
      <img src="/images/bg-circle.svg" alt="Bubbles Img Login" class="bg">

      <form class="form" v-on:submit.prevent="createAccount">
        <h3 class="form-title">Crear una cuenta</h3>
        <div class="field">
          <label for="email" class="label">Correo electrónico</label>
          <input id="email" class="input" placeholder="bienvenido@credito.com" type="text" name="email"
                 v-model="email"
                 autocomplete="off" required>
        </div>

        <div class="field-group">
          <div class="field">
            <label for="password" class="label">Contraseña</label>
            <input id="password" type="password" placeholder="********" class="input" required name="password">
          </div>

          <div class="field confirm-password">
            <label for="confirm-password" class="label">Confirmar contraseña</label>
            <input name="passwordConfirm" required id="confirm-password" placeholder="********" type="password"
                   class="input">
          </div>
        </div>
        <p class="my-4">
          ¿Ya tienes una cuenta?
          <NuxtLink class="link" to="/login"><b>Inicia sesion aquí</b></NuxtLink>
        </p>
        <button class="btn btn-primary" type="submit" :disabled="loading">
          {{ loading ? 'Enviando...' : 'Registrarme' }}
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
      setEmail: 'setEmail',
      setLoggedIn: 'setLoggedIn'
    }),
    createAccount() {
      this.loading = true

      setTimeout(() => {
        this.setLoggedIn(true)
        this.setEmail(this.email)
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

.field-group {
  display: flex;
  flex-direction: row;
}

.confirm-password {
  margin-left: 15px;
}

@media (max-width: $screen-sm-min) {
  .field-group {
    flex-direction: column;
  }

  .confirm-password {
    margin-left: 0;
  }
}

</style>
