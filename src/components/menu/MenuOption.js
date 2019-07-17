import React from "react"
import {
    NavLink
} from "react-router-dom"
import "./../../css/menu/MenuOption.css"

class MenuOption extends React.Component {

    constructor(props){

        super(props)

        this.state = {
        }

        this.clicked = this.clicked.bind(this)

    }

    clicked() {

        this.props.closeMobileMenu()

    }

    render() {  
        
        var path
        var link

        if(this.props.componentName !== "Main"){

            if(this.props.type === "main"){

                path = "/" + this.props.componentName.toLowerCase()
                link = <NavLink to = {path} ><li onClick = {this.clicked} className = {"menu-item " + this.props.mode}><div>{this.props.children}</div></li></NavLink>
            
            }

            if(this.props.type === "sub"){

                path = `/${this.props.componentName.toLowerCase()}/${this.props.subpath}` 
                link = <NavLink to = {path} ><li onClick = {this.clicked} className = {"menu-item " + this.props.mode}><div>{this.props.children}</div></li></NavLink>
            
            }

        }else{

            path = "/"
            link = <NavLink exact to = {path} ><li onClick = {this.clicked} className = {"menu-item " + this.props.mode}><div>{this.props.children}</div></li></NavLink>

        }        

        return(

              <div>{link}</div>
            
        )

    }

}

export default MenuOption