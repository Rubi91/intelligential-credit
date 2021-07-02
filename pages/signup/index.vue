<template>
  <div class="content">
    <div class="card sign-up">
      <img src="/images/bg-circle.svg" alt="Bubbles Img Login" class="bg">

      <form action="#" class="form">
        <h3 class="form-title">Crear una cuenta</h3>
        <div class="field">
          <label for="sessions_email" class="label">Correo electrónico</label>
          <input id="sessions_email" class="input" placeholder="bienvenido@credito.com" type="text" name="email"
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
        <button class="btn btn-primary">Registrarme</button>
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
