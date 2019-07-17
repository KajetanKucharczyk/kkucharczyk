import React from "react"
import $ from 'jquery';

import "./../../../css/pages/Physics.css"

class PhysicsCatalog extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            clicked: false,
            fileName: null
        }

        this.toogleContent = this.toogleContent.bind(this)

    } 

    toogleContent = () => {

        this.setState({
            clicked: !this.state.clicked
        })

        if(!this.state.clicked) {

            $("div.physics-file." + this.props.children.replace(/\s/g, ""))
            .removeClass("hidden")
            .addClass("opened")

        }else{

            $("div.physics-file." + this.props.children.replace(/\s/g, ""))
            .removeClass("opened")
            .addClass("hidden")

        }
        
    }

    render() { 

        return(

            <div onClick = {this.toogleContent} className = {"physics-label " + this.props.mode}>
                {this.props.children}
            </div>  
            
        )

    }

}

export default PhysicsCatalog