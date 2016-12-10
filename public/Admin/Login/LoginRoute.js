const
    React = require("react"),
    {connect} = require("react-redux"),
    AdminActions = require("./../AdminActions");

const LoginRoute = React.createClass({
    
    FormHandler(e){
        e.preventDefault();
        const user = this.refs.username
        const pass = this.refs.password
        if(user.value == ""){
            user.classList.add('error')
            user.focus()
        } else if(pass.value == ""){
            pass.classList.add('error')
            pass.focus()
        } else {
            this.props.UserLoginAction(this.refs.username.value, this.refs.password.value);
        }
    },

    render(){
        const self = this
        return (
            <form onSubmit={this.FormHandler}>
                {(function(){
                    if(self.props.admin.auth){
                        return <div className="message">{self.props.admin.auth}</div>
                    }
                }())}
                <input type="text" ref="username"/>
                <input type="password" ref="password"/>
                <button>Submit</button>
            </form>
        )
    }
})

const mapStateToProps = (state) => {
    return {
        admin: state.admin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        UserLoginAction: (username, password) => {
            dispatch(AdminActions.UserLogin(username, password))
        }
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(LoginRoute)