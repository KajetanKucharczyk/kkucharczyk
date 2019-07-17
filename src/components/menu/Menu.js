import React from "react"

import "./../../css/menu/Menu.css"

import MenuOption from "./MenuOption"

class Menu extends React.Component {

    constructor(props){

        super(props)

        this.state = {
        }

        this.menuTitles = this.menuTitles.bind(this)

    }

    menuTitles(item) {

        var {key, componentName, title, type, subpath} = item

        return <MenuOption {...this.props} key = {key} componentName = {componentName} type = {type} subpath = {subpath}>{title}</MenuOption>

    }

    render() {
        

        return(

            <div className = {"menuContainer " + this.props.mode}>

                <ul className = {"menu-list " + this.props.mode}>

                    {this.props.pages.map(this.menuTitles)}

                </ul>

            </div>           
            
        )

    }

}

export default Menu