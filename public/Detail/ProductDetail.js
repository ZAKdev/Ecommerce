const React = require("react");

module.exports = React.createClass({

    render(){
        return (
            <article className="singleProduct">
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

})