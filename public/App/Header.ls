{DOM:{div, header, h1, img}}:React = require \React

module.exports = React.create-class do

    LogoType: ->
        if @props.logo != undefined
            h1 null,
            img {src: @props.logo}
        else
            h1 null,
            @props.text

    render: ->
        header null,
        @LogoType ->