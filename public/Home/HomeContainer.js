import React from "react";
import Banner from "./Banner";
import ProductTile from "./../components/ProductTile";

class HomeContainer extends React.Component{

	constructor(props){
		super(props)
	}

	render(){
		return (
			<div className="HomeRoute">
				<Banner
					slogan="My Slogan Here"
					align="center"
					color="#000"
				/>
				<div className="productList">
					<ProductTile
						image="https://facebook.github.io/react/img/logo.svg"
						name="My First Product"
						price="$95"
						href="/#/product/1"
					/>
				</div>
			</div>
		)
	}
}

export default HomeContainer