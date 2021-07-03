<template>
<header>
  <HeaderLogo/>
  <HeaderProfileUser  v-if="isLoggedIn"/>
  <div v-else>
    <NuxtLink to="/login" class="btn btn-outline">Iniciar Sesión</NuxtLink>
    <NuxtLink to="/signup" class="btn btn-primary ml-3">Crear cuenta</NuxtLink>
  </div>
</header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'getLoggedIn'
    })
  }
}
</script>
<style lang="scss" scoped>
header {
  display: flex;
  padding: 10px 25px;
  justify-content: space-between;
}
</style>
