<template>
<header>
  <HeaderLogo/>
  <div class="cta">
    <NuxtLink to="/" class="btn btn-outline">Login</NuxtLink>
    <NuxtLink to="/" class="btn btn-primary ml-3">Sign Up</NuxtLink>

  </div>
</header>
</template>

<script>
</script>
<style lang="scss" scoped>
header {
  display: flex;
  padding: 10px 25px;
  background: $charcoal;
  justify-content: space-between;
}
</style>
