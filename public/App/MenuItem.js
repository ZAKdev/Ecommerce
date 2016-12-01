const React = require("react");

module.exports = React.createClass({
    
    render(){
        return (
            <li><a href="javascript:;">{this.props.menuItem}</a></li>
        )
    }
})