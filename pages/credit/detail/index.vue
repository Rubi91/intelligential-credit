<template>
  <div class="detail">
    <img src="/images/success.png" alt="Success" height="150px">
    <h1 class="h1">Hemos recibido tu solicitud</h1>
    <p class="subheading">Felicidades {{ user.name }} tu crédito casi está listo.</p>
    <div class="user-info">
      <h3>Tus datos:</h3>
      <div class="my-2"><span class="label">Nombre:</span> {{ user.name }} {{ user.last_name }}</div>
      <div class="my-2">
        <span class="label">Dirección</span>
        {{ user.street }}, {{ user.state_address }} #{{ user.exterior_number ? user.exterior_number : 's/n' }}
        Int.{{ user.interior_number ? user.interior_number : 'n/a' }}
      </div>

      <div class="my-2">
        <span class="label">Ingresos:</span>
        &#36;{{ Number(user.amounts).toLocaleString() }}
      </div>

    </div>
    <p class="subheading">En breve un asesor te contactará para dar seguimiento a tu solicitud y darte a conocer los
      próximos pasos.</p>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  layout: 'light',
  computed: {
    ...mapGetters({
      user: 'getUser'
    }),
  }
}
</script>
<style lang="scss" scoped>
.detail {
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.user-info {
  text-align: left;
  margin-bottom: 4rem;
}
</style>
