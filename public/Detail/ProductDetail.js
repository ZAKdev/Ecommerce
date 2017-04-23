import React from "react";

class ProductDetail extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <article className="ProductDetail">
                <figure>
                    <img className="fullWidth" src={this.props.image}/>
                </figure>
                <div className="detail">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.content}</p>
                    <span className="price">{this.props.price}</span>
                    <a className="btn" href={this.props.href}>Add to cart</a>
                </div>
            </article>
        )
    }
}

export default ProductDetail