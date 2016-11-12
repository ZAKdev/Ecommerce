{DOM:{nav, ul}}:React = require \React
MenuItem = React.create-factory require \./MenuItem.ls

module.exports = React.create-class do

    render: ->
        nav null,
            ul null,
                MenuItem do
                    menuItem: @props.menuItem