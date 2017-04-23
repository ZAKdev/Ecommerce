const AppReducer = (state = {
    back: false,
    loader: false,
    searchOpen: false
}, action) => {
    switch (action.type){
        case "BACK":
            return Object.assign({}, state, {
                back: true
            })
        default:
            return state
    }
}

export default AppReducer;