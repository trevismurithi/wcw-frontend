
export const state = () => ({
    authErrorMessage: '',
    showErrorMessage: false,
    rgbColor: '',
    rgbColorLoader: '#FF374F',
    textLoader: 'reset password',
    loading: false
})

export const mutations = {
    toggleErrorMessage(state, payload) {
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

}
