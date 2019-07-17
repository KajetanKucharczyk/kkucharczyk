import React from "react"

import "./../../css/menu/HeaderMobile.css"

import Menu from "./Menu";
import Title from "./Title"
import HeaderButton from "./HeaderButton"
import Footer from "./Footer"

class HeaderMobile extends React.Component {

    constructor(props){

        super(props)

        this.state = {}

        this.mobileMenu = this.mobileMenu.bind(this)

    }

    
    mobileMenu(openMenuStatus) {

        if(openMenuStatus){

            //MENU OPENED

            return "header opened " + this.props.mode

        }else{

            //MENU CLOSED

            return "header closed " + this.props.mode
            
        }

    }

    render() { 

        return(

              <div>

                    <div className = {this.mobileMenu(this.props.openMenuStatus)}>

                        <div>

                            <Title {...this.props}>KAJCIOOCHU MODELLING</Title>

                            <HeaderButton {...this.props} />

                            <Menu {...this.props} />                           

                            <Footer {...this.props}>{this.props.footer}</Footer>

                        </div>

                    </div>
              </div>
            
        )

    }

}

export default HeaderMobile