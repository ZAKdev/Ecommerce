import React from "react";
import Menu from "./Menu";

class Header extends React.Component{

	constructor(props){
		super(props)
	}

	LogoType(){
		if(this.props.logo != undefined){
			return (
				<h1>
					<img src={this.props.logo}/>
				</h1>
			)
		} else {
			return (
				<h1>{this.props.text}</h1>
			)
		}
	}

	render(){
		return (
			<header>
				{this.LogoType()}
				<Menu menuItems={this.props.menuItems}/>
			</header>
		)
	}
}

export default Header;