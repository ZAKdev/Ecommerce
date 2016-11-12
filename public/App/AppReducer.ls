module.exports = (state = {
    back: false
    loader: false
    searchOpen: false
    }, action) ->
    switch action.type
       case \BACK
            Object.assign {}, state, do
                back: true
       default
            state