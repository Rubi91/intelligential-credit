<template>
  <div class="user">
    <img src="/icons/user.png" alt="Account User" width="30px" height="30px">
    <div class="ml-3">
      <span>{{ user }}</span>
      <div @click="logout" class="btn-logout">Salir</div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    ...mapMutations({
      setLoggedIn: 'setLoggedIn'
    }),
    logout() {
      this.setLoggedIn(false)
    }
  }
}
</script>
<style lang="scss" scoped>
.user {
  color: $white;
  display: flex;
  text-align: left;
  align-items: center;
}
.btn-logout {
  margin-top: 5px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: underline;
}
</style>
