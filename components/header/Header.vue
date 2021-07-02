<template>
<header>
  <HeaderLogo/>
  <div class="cta">
    <NuxtLink to="/login" class="btn btn-outline">Iniciar Sesión</NuxtLink>
    <NuxtLink to="/" class="btn btn-primary ml-3">Crear cuenta</NuxtLink>
  </div>
</header>
</template>

<script>
</script>
<style lang="scss" scoped>
header {
  display: flex;
  padding: 10px 25px;
  justify-content: space-between;
}
</style>
