export const state = () => ({
  name: '',
  company: '',
  industry: '',
  country: '',
  email: '',
  whatsapp: '',
  image: '',
  dialog: false
})

export const mutations = {
  updateCompany (state, object) {
    state.name = object.name
    state.company = object.company
    state.industry = object.industry
    state.country = object.country
    state.email = object.email
    state.whatsapp = object.whatsapp
    state.image = object.image
  },

  updateDialog (state, payload) {
    state.dialog = payload
  }
}
