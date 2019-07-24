import React from "react"
import $ from 'jquery';

import "./../../../css/pages/Models.scss"

import Box from "./Box"

class Overview extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            downloadCompleteFlag: false,
            downloadData: {},
            boxes: [],
            mode: null
        }

    }  

    componentDidUpdate() {

        if(this.state.downloadData !== this.props.data && !this.state.downloadCompleteFlag) {

            this.setState({
                downloadCompleteFlag: true,
                downloadData: this.props.data
            })

        }

        if(this.state.downloadCompleteFlag && this.state.mode !== this.props.mode) {

            this.setState({
                mode: this.props.mode,
                boxes: []
            });

            for (let index = 0; index < 9; index++) {

                this.processData(this.state.downloadData[index], this.props.mode)
                
            }

        }

    }
    
    processData = (object, mode) => {

        let element = <Box click = {this.props.click} key = {object.id} mode = {mode} data = {object} />

        this.setState((prevState) => ({

            boxes: prevState.boxes.concat(element)

        }));

    }

    render() {  

        return(

            <div>
                {this.state.boxes}
            </div>           
            
        )


    }

}

export default Overview