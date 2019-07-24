import React from "react"
import $ from 'jquery';

import "./../../../css/pages/Models.scss"

import backIcon from "./../../../images/back.webp"

class ModelsHeader extends React.Component {

    constructor(props){

        super(props)

        this.state = {}

    }    

    toogleView = (element) => {

        if(element === "text-field-1"){

            if($(".text-field-1").hasClass("clicked")){

                //DO NOTHING

            }
    
            if($(".text-field-2").hasClass("clicked")){

                //CLIKED NEW FIELD

                $(".text-field-2").removeClass("clicked")
                $(".text-field-1").addClass("clicked")   
                
                $(".background").addClass("left").removeClass("right")

                this.props.viewController("overview")
                
            }

        }

        if(element === "text-field-2"){

            if($(".text-field-1").hasClass("clicked")){

                //CLIKED NEW FIELD

                $(".text-field-1").removeClass("clicked")
                $(".text-field-2").addClass("clicked")   

                $(".background").removeClass("left").addClass("right")

                this.props.viewController("category")

            }
    
            if($(".text-field-2").hasClass("clicked")){

                //DO NOTHING
                
            }

        }

    }


    render() { 
        
        let hidden = {
            display: "none"
        }

        let strings = {
            overviewTitle: "Modele - najnowsze",
            overview: "Najnowsze",
            catalogTitle: "Modele - wszystkie",
            catalog: "Wszystkie"
        }

        let title

        let returnButton = <img alt = {""} src = {backIcon}></img>

        if(this.props.type === "overview"){

            if(this.props.mode === "dektop") {

                title = strings.overviewTitle

            }else{

                title  = strings.overview

            }

            return (
                <div className = {"models-header " + this.props.mode}>
    
                    {title}
                    
                    <div style = {hidden} className = {"return-button " + this.props.mode}>{returnButton}</div>
    
                    <div className = {"toogle-button " + this.props.mode}>

                        <div className = {"background left"}></div>

                        <div onClick = {() => this.toogleView("text-field-1")} className = {"text-field text-field-1 clicked"}>{strings.overview}</div>
                        <div onClick = {() => this.toogleView("text-field-2")} className = {"text-field text-field-2"}>{strings.catalog}</div>

                    </div>
    
                </div>
            )

        }

        if(this.props.type === "category"){

            if(this.props.mode === "dektop") {

                title = strings.catalogTitle

            }else{

                title  = strings.catalog

            }

            return (
                <div className = {"models-header " + this.props.mode}>
    
                    {title}
                    
                    <div style = {hidden} className = {"return-button " + this.props.mode}>{returnButton}</div>
    
                    <div className = {"toogle-button " + this.props.mode}>

                        <div className = {"background right"}></div>

                        <div onClick = {() => this.toogleView("text-field-1")} className = {"text-field text-field-1"}>{strings.overview}</div>
                        <div onClick = {() => this.toogleView("text-field-2")} className = {"text-field text-field-2 clicked"}>{strings.catalog}</div>

                    </div>
    
                </div>
            )

        }

        if(this.props.type === "post"){

            return (
                <div className = {"models-header " + this.props.mode}>
    
                    {this.props.model}
                    
                    <div onClick = {() => {this.props.viewController(this.props.prevType)}} className = {"return-button " + this.props.mode}>{returnButton}</div>
    
                    <div className = {"toogle-button"} style = {hidden}></div>
    
                </div>
            )

        }
        

    }

}

export default ModelsHeader