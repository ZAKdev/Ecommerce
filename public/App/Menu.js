const
    React = require("react"),
    MenuItem = require("./MenuItem");

module.exports = React.createClass({

    render(){
        return (
            <nav>
                <ul>
                    <MenuItem menuItem={this.props.menuItem}/>
                    <MenuItem menuItem={this.props.menuItem}/>
                    <MenuItem menuItem={this.props.menuItem}/>
                    <MenuItem menuItem={this.props.menuItem}/>
                </ul>
            </nav>
        )
    }

})