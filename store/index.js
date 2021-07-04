export const state=()=>({
  loggedIn: false,
  email: '',
  user: Object.create(null)
})

export const mutations= {
  setLoggedIn(state, logged) {
    state.loggedIn= logged
  },
  setUser(state, params) {
    state.user= params
  },
  setEmail(state, email) {
    state.email= email
  }
}

export const getters= {
  getLoggedIn(state){
    return state.loggedIn
  },
  getUser(state) {
    return state.user
  },
  getEmail(state) {
    return state.email
  }
}
