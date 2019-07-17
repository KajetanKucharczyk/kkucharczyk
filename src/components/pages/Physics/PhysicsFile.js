import React from "react"

import "./../../../css/pages/Physics.css"

class PhysicsFiles extends React.Component {

    download = () => {

        window.open(this.props.path.replace("home/u963929931/public_html/", ""),'_blank');

    }

    render() { 

        return(

            <div onClick = {this.download} className = {"physics-file hidden " + this.props.parent.replace(/\s/g, "") + " " + this.props.mode}>
                {this.props.children}
            </div>         
            
        )

    }

}

export default PhysicsFiles