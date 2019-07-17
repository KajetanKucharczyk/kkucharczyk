import React, {Component} from "react"

import "./../../css/menu/Footer.css"

class Footer extends Component {
    
    render() {   
        
        return(

            <div>

                <div className = {"footer " + this.props.mode}>{this.props.children}</div>

            </div>           
            
        )

    }

}

export default Footer