const
    React = require("react"),
    MenuItem = require("./MenuItem");

module.exports = React.createClass({

    getDefaultProps(){
        return {
            menuItems: []
        }
    },

    render(){
        return (
            <nav>
                <ul>
                    {this.props.menuItems.map((menuItem) => {
                            return <MenuItem
                                menuItem={menuItem}
                            />
                        })
                    }
                </ul>
            </nav>
        )
    }

})