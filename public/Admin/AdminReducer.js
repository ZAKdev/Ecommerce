module.exports = (state = {
    auth: ""
}, action) => {
    switch (action.type){
        case "VALID_USER":
            return Object.assign({}, state, {
                auth: action.content
            })
        case "NOT_REGISTERED":
            return Object.assign({}, state, {
                auth: action.content
            })
        default:
            return state
    }
}