{DOM:{li, a}}:React = require \React

module.exports = React.create-class do

    render: ->
        li null,
            a {href: \javascript:;},
                @props.menuItem