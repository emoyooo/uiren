import { createStore } from 'vuex';

export default createStore({
  state: {
    userProfile: null,
  },
  mutations: {
    setUserProfile(state, profile) {
      state.userProfile = profile;
    },
  },
  actions: {
    // ...existing actions...
  },
  modules: {
    // ...existing modules...
  },
});
