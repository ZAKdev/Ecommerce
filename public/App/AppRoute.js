import { connect } from "react-redux";
const
    React = require("react"),
    Header = require("./Header");

const AppRoute = React.createClass({

    render() {
        return (
            <section>
                <Header
                    text="Logo Here"
                    menuItem="Home"
                />
                {this.props.children}
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