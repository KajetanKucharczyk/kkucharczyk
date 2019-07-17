import React from "react"

import "./../../css/menu/HeaderButton.css"

class HeaderButton extends React.Component {

    constructor(props){

        super(props)

        this.state = {}

        this.toogleButton = this.toogleButton.bind(this)

    }

    toogleButton() {

        if(this.props.openMenuStatus){
            
            //MENU OPENED -> CLOSE MENU
            //REDUX

            this.props.closeMobileMenu()

        }else{

            //MENU CLOSED -> OPEN MENU

            //REDUX

            this.props.openMobileMenu()

        }

    }

    createBars(menuOpened) {

        if(menuOpened){

            //MENU OPENED

            return "bar over"

        }else{

            //MENU CLOSED

            return "bar out"

        }

    }

    render() {    

        var classes = this.createBars(this.props.openMenuStatus)

        return(

              <div onClick = {this.toogleButton} className = {"headerButton " + this.props.mode}>

                <div className = {classes}></div>
                <div className = {classes}></div>
                <div className = {classes}></div>

              </div>
            
        )

    }

}

export default HeaderButton