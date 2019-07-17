import React from "react"
import $ from 'jquery';

import "./../../../css/pages/Models.scss"


class Models extends React.Component {

    constructor(props){

        super(props)

        this.state = {
        }

    } 

    handleClick = (id, title) => {

        this.props.click(id, title)

    }
    
    mouseAction = (id, type) => {

        if(type === "on"){

            $(`div.block-background-${id}`).addClass("over").removeClass("out")
            $(`div.block-title-${id}`).addClass("over").removeClass("out")

        }

        if(type === "out"){

            $(`div.block-background-${id}`).addClass("out").removeClass("over")
            $(`div.block-title-${id}`).addClass("out").removeClass("over")

        }

    }

    render() {  

        let {id, type, title, subtitle, path, image} = this.props.data

        let styledBackground = {
            backgroundImage: `url(${path}${image})`
        }
    
        return(

            <div onClick = {() => this.handleClick(id, title)} onMouseOver = {(event) => this.mouseAction(id, "on")} onMouseOut = {(event) => this.mouseAction(id, "out")} className = {`block ${this.props.mode} model-${id}`}>
                <div style = {styledBackground} className = {`block-background block-background-${id}`}></div>
                <div className = {`block-title block-title-${id} ${this.props.mode}`}>

                    <div className = {`title`}>{title}</div>
                    <div className = {`subtitle`}>{type}: {subtitle}</div>

                </div>
            </div>    
            
        )

    }

}

export default Models