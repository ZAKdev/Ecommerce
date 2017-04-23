import React from "react";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

import * as AdminActions from "./../AdminActions";

class LoginContainer extends React.Component{

    constructor(props){
        super(props)

        this.FormHandler = this.FormHandler.bind(this)
    }

    FormHandler(e){
        e.preventDefault();
        const {username:user, password: pass} = this.refs
        if(user.value == ""){
            user.classList.add('error')
            user.focus()
        } else if(pass.value == ""){
            pass.classList.add('error')
            pass.focus()
        } else {
            this.props.actions.UserLogin(this.refs.username.value, this.refs.password.value);
        }
    }

    render(){
        return (
            <form onSubmit={this.FormHandler}>
                {(() => {
                    if(this.props.admin.auth){
                        return <div className="message">{this.props.admin.auth}</div>
                    }
                })()}
                <input type="text" ref="username"/>
                <input type="password" ref="password"/>
                <button>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    admin: state.admin
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AdminActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)