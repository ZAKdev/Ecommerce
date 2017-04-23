import React from "react";

class ProductTile extends React.Component{

	constructor(props){
		super(props)
	}

	render(){
		return (
			<article className="ProductTile">
				<img src={this.props.image}/>
				<div className="flex-grid">
					<h2>{this.props.name}</h2>
					<span>{this.props.price}</span>
				</div>
				<div className="flex-grid">
					<a className="btn" href={this.props.href}>View detail</a>
					<a className="btn" href={this.props.href}>Add to cart</a>
				</div>
			</article>
		)
	}
}

export default ProductTile