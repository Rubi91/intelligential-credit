<template>
  <section class="hero">
    <h1 class="title flex-1">Tu crédito en línea.</h1>
    <p class="subtitle">La forma más fácil, rápida y segura.</p>
    <NuxtLink class="btn btn-primary px-4" to="/credit">Comenzar mi solicitud</NuxtLink>
    <img src="/images/hero.png" class="img" alt="Crédito online">
  </section>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  color: $white;
  text-align: center;

  .title {
    font-weight: 500;
    font-size: 3.5rem;
  }

  .subtitle {
    font-size: 2.5rem;
  }

  .img {
    max-width: 100%;
  }
}
</style>
