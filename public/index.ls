require! \React
require! \React-DOM
require! \./App/AppRoute.ls

ReactDOM.render do
	React.create-element AppRoute
	document.get-element-by-id \mount-node