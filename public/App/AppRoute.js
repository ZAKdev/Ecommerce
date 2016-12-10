import { connect } from "react-redux";
const
    React = require("react"),
    Header = require("./Header"),
    Footer = require("./Footer");

const AppRoute = React.createClass({

    render() {
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
    },

    componentDidMount() {
        return this.props.loadAppAction
    }
})

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadAppAction: () => {
            dispatch(loadAppRoute())
        }
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(AppRoute);