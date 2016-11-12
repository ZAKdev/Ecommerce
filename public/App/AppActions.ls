loadAppRoute = -> (dispatch) ->
    dispatch do
        type: \BACK

module.exports = {
    loadAppRoute
}