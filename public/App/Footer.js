const
    React = require("react");

module.exports = React.createClass({
	render(){
        return (
            <footer>
                <div className="footerBox">
                	<h2>{this.props.footerHeading}</h2>
                	<p>{this.props.footerParagraph}</p>
                </div>
                <div className="footerBox">
                	<h2>{this.props.footerHeading}</h2>
                	<ul>
                		<li>{this.props.footerLinks}</li>
                		<li>{this.props.footerLinks}</li>
                		<li>{this.props.footerLinks}</li>
                		<li>{this.props.footerLinks}</li>
                		<li>{this.props.footerLinks}</li>
                	</ul>
                </div>
                <div className="footerBox">
                	<h2>{this.props.footerHeading}</h2>
                	<p>{this.props.footerParagraph}</p>
                </div>
            </footer>
        )
    }
})	