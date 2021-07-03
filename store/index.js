export const state=()=>({
  loggedIn: false,
  user: ''
})

export const mutations= {
  setLoggedIn(state, logged) {
    state.loggedIn= logged
  },
  setUser(state, params) {
    state.user= params
  }
}

export const getters= {
  getLoggedIn(state){
    return state.loggedIn
  },
  getUser(state) {
    return state.user
  }
}
