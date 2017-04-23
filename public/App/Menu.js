import React from "react";
import MenuItem from "./MenuItem";

class Menu extends React.Component{

	constructor(props){
		super(props)
	}

	defaultProps(){
		return {
			menuItems: []
		}
	}

	render(){
		return (
			<nav>
				<ul>
					{this.props.menuItems.map((menuItem, key) => {
							return <MenuItem
								key={key}
								menuItem={menuItem}
							/>
						})
					}
				</ul>
			</nav>
		)
	}
}

export default Menu