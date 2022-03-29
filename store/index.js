export const state = () => ({
  name: '',
  company: '',
  industry: '',
  country: '',
  email: '',
  whatsapp: '',
  dialog: false,
  authErrorMessage: '',
  showErrorMessage: false,
  rgbColor: '',
  rgbColorLoader: '#FF374F',
  textLoader: 'register',
  loading: false
})

export const mutations = {
  updateCompany (state, object) {
    state.name = object.name
    state.company = object.company
    state.industry = object.industry
    state.country = object.country
    state.email = object.email
    state.whatsapp = object.whatsapp
  },

  updateDialog (state, payload) {
    state.dialog = payload
  },
  toggleErrorMessage (state, payload) {
    state.authErrorMessage = payload.message
    state.showErrorMessage = payload.show
    state.rgbColor = payload.color
  },
  toggleButton(state, payload) {
    state.rgbColorLoader = payload.color
    state.textLoader = payload.text
    state.loading = payload.load
  },
}

export const actions = {
  async register ({ commit }, payload) {
    try{
      await this.$axios.post('http://192.168.100.46:4000/register', payload)
      commit('toggleErrorMessage', {
        message: 'Created successfully! Please login',
        show: true,
        color: 'green darken-2',
        load: false
      })
    }catch(error) {
      commit('toggleErrorMessage',{
        message: 'failed to create account! Try again later',
        show: true,
        color: 'red darken-2',
        load: false
      })
    }
    commit('toggleButton', {
      color: '#FF374F',
      text: 'register'
    })
  }
}
