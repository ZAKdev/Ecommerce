const React = require("react");

module.exports = React.createClass({

    render(){
        return (
            <div className="banner">
                {this.props.slogan}
            </div>
        )
    }

})