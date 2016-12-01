const
    React = require("react"),
    ProductDetail = require("./ProductDetail");

module.exports = React.createClass({

    render(){
        return (
            <div className="DetailRoute">
                <ProductDetail
                    image="https://facebook.github.io/react/img/logo.svg"
                    name="My First Product"
                    price="$95"
                    href="/#/product/1"
                />
            </div>
        )
    }

})