import React from "react"
import $ from 'jquery';

class Loader extends React.Component {

    constructor(props){

        super(props)

        this.state = {}

    } 

    render() {  

    
        return(

            <div className = {"loading-page " + this.props.mode}>

                <div>

                    Ładowanie

                </div>

            </div>
            
        )

    }

}

export default Loader