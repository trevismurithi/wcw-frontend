export const state = () => ({
    stage: 1
})

export const mutations = {
    updateStage (state, payload) {
        state.stage = payload
    }
}