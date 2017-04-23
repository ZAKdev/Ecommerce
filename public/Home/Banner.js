import React from "react";

class Banner extends React.Component{

	constructor(props){
		super(props)
	}

	render(){
		return (
			<div className="banner">
				{this.props.slogan}
			</div>
		)
	}
}

export default Banner