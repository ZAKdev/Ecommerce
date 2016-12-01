const loadAppRoute = () => {
	return (dispatch) => {
		dispatch({
			type: "BACK"
		})
	}
}

module.exports = {
    loadAppRoute
}