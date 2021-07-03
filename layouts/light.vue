<template>
  <div class="page">
    <HeaderSimple />
    <main class="main">
      <nuxt/>
    </main>
    <Footer/>
  </div>
</template>
<style lang="scss">
.page {
  width: 100%;
  display: flex;
  background: $white;
  flex-direction: column;

  .main {
    min-height: calc(100vh  - 36px);
  }

  .h1 {
    color: $midnight;
    font-size: 3rem;
    margin-top: 3rem;
    flex-basis: 100%;
    margin-bottom: 1rem;
  }

  .subheading {
    color: $raven;
    margin-top: 0;
    font-size: 1.5rem;
  }

  &-btn {
    margin: 4rem;
    font-weight: 500;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
  }
}
</style>
