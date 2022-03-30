export const state = () => ({
    stage: 1,
    studentForm: {}
})

export const mutations = {
    updateStage (state, payload) {
        state.stage = payload
    },
    updateFormOne (state, payload) {
        state.studentForm.firstName = payload.firstName
        state.studentForm.lastName = payload.lastName
        state.studentForm.email = payload.email
        state.studentForm.phone = payload.phone
        state.studentForm.company = payload.company
        state.studentForm.street = payload.street
    },
    updateFormTwo (state, payload) {
        state.studentForm.room = payload.room
        state.studentForm.city = payload.city
        state.studentForm.state = payload.state
        state.studentForm.code = payload.code
    }
}