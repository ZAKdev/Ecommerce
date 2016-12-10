const React = require("react");

module.exports = React.createClass({
    
    render(){
        return (
            <form>
                <input type="text"/>
                <input type="password"/>
                <button>Submit</button>
            </form>
        )
    }
})