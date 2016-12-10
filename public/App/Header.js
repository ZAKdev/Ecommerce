const
    React = require("react"),
    Menu = require("./Menu");

module.exports = React.createClass({

    LogoType(){
        if(this.props.logo != undefined){
            return (
                <h1>
                    <img src={this.props.logo}/>
                </h1>
            )
        } else {
            return (
                <h1>{this.props.text}</h1>
            )
        }
    },

    render(){
        return (
            <header>
                {this.LogoType()}
                <Menu menuItems={this.props.menuItems}/>
            </header>
        )
    }

})