const
    React = require("react"),
    Banner = require("./Banner"),
    ProductTile = require("./../components/ProductTile");

module.exports = React.createClass({

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
})