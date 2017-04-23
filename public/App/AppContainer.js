import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import Header from "./Header";
import Footer from "./Footer";
import * as AppActions from "./AppActions";

class AppContainer extends React.Component{

	constructor(props){
		super(props)
	}

	render(){
		return (
			<section>
				<Header
					text="Logo Here"
					menuItems={["Home", "About", "Contact"]}
				/>
				{this.props.children}
				<Footer
				   footerHeading="lorem ipsum"
				   footerParagraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				   footerLinks="Lorem Ipsum is simply dummy"
				/>
			</section>
		)
	}

	componentDidMount() {
		return this.props.actions.loadAppAction
	}
}

const mapStateToProps = state => ({
		app: state.app
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(AppActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);