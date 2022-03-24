 
export const state = () => ({
    userAuth: 'userAuth',
    authErrorMessage: '',
    showErrorMessage: false,
    rgbColor: '',
    rgbColorLoader: '#FF374F',
    textLoader: 'login',
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
    toggleAuthentication (state, payload) {
        // logic for authentication
        if(payload.auth){
            this.$cookies.set(state.userAuth, payload.token)
        }else {
            this.$cookies.delete(state.userAuth)
        }
    }
}

export const actions = {
    async login({ commit }, payload) {
        try {
            const res = await this.$axios.post('http://192.168.100.46:4000/login', payload)
            commit('toggleAuthentication',{
                auth:true, //setting authentication to true
                token: res.data.token
            })
        } catch (error) {
            console.log(error.message);
            commit('toggleErrorMessage', {
                message: 'incorrect password or email',
                show: true,
                color: 'red darken-2'
            })
        }
        commit('toggleButton', {
            color: '#FF374F',
            text: 'login',
            load: false
        })
    },
}
