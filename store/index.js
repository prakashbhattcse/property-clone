export const state = () => ({
  // Your state here
})

export const mutations = {
  // Your mutations here
}

export const actions = {
  // Your actions here
}

export const getters = {
  // Your getters here
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  }
}