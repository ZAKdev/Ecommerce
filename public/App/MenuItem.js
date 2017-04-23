import React from "react";

class MenuItem extends React.Component{
	
	constructor(props){
		super(props)
	}

	render(){
		return (
            <li><a href="javascript:;">{this.props.menuItem}</a></li>
        )
	}
}

export default MenuItem