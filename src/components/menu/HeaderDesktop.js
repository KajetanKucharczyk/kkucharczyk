import React from "react"

import "./../../css/menu/HeaderDesktop.css"

import Menu from "./Menu";
import Title from "./Title"
import Footer from "./Footer"

class HeaderDesktop extends React.Component {

    constructor(props){

        super(props)

        this.state = {}

    }
    render() {       

        return(

            <div>

                <div className = {"header " + this.props.mode}>

                    <div>

                        <Title {...this.props}>KAJCIOOCHU MODELLING</Title>

                        <Menu {...this.props} />                           

                        <Footer {...this.props}>{this.props.footer}</Footer>

                    </div>

                </div>

            </div>
            
        )

    }

}

export default HeaderDesktop