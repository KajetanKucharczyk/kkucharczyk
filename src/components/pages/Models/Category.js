import React from "react"
import $ from 'jquery';

import "./../../../css/pages/Models.scss"

class Category extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            items: []
        }

    }  
    
    componentDidMount() {

        this.props.data.forEach((key, obj) => {

            let {type, title, subtitle, data, path, image} = obj

            this.setState({
                items: this.state.items.concat(<div key = {data}>{title}</div>)
            })

        })

    }


    render() {  

        $("div.models").scrollTop(0)

        return (

            <div>
                
                <div>

                    {this.state.items}

                </div>
                <div></div>

            </div>

        )

    }

}

export default Category