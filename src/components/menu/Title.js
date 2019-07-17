import React, {Component} from "react"

import "./../../css/menu/Title.css"

class Title extends Component {
    
    render() {   

        var pageTitle = this.props.children
        
        var pageTitleItems = pageTitle.split(" ")

        pageTitle = [
            pageTitleItems[0],
            <br key = {Date.now()*Math.random()}></br>,
            pageTitleItems[1]
        ]

        
        return(

            <div className = {"pageTitle " + this.props.mode}>
                {pageTitle}
            </div>           
            
        )

    }

}

export default Title