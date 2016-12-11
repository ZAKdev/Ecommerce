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
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    price="$95"
                    href="/#/product/1"
                />
            </div>
        )
    }

})