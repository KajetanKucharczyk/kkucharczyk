import React from "react"
import $ from 'jquery';

import "./../../../css/pages/Models.scss"

import Post from "./Post"
import Overview from "./Overview"
import ModelsHeader from "./ModelsHeader"

class Models extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            download: false,
            downloadData: {},
            mode: null,
            type: "overview",
            clickedBoxId: null,
            clickedBoxName: null
        }

        this.processClicking = this.processClicking.bind(this)
        this.changingView = this.changingView.bind(this)

    }    

    componentDidUpdate() {

        if(this.state.mode !== this.props.mode) {

            this.setState({
                mode: this.props.mode
            });

        }

    }

    downloadData() {

        $.ajax({
            url: "http://kkucharczyk.pl/serwer/modele/recent",
            async: false,
            beforeSend: function(){
                $('body').append(<div className = "przeslona">Ładowanie</div>)
            },
            complete: function(){
                $("div.przeslona").remove()
            },
            success: function(data){  

                this.setState({
                    download: true,
                    downloadData: JSON.parse(data)
                })
        

            }.bind(this)

        })

    }

    processClicking = (id, name) => {

        this.setState({
            type: "post",
            clickedBoxId: id,
            clickedBoxName: name
        })

    }

    changingView = (type) => {

        console.log("Type from header -> ", type)

        this.setState({
            download: false,
            downloadData: {},
            type: type,
            clickedBoxId: null,
            clickedBoxName: null
        })

    }


    render() {  

        $("div.models").scrollTop(0)

        if(!this.state.download){

            this.downloadData()

        }

        let overflow = {
            overflow: "scroll"
        }

        if(this.state.type === "overview"){

            return(
                
                <div className = {"models " + this.props.mode}>

                    <ModelsHeader viewController = {this.changingView} mode = {this.props.mode} type = {this.state.type} />
                    <Overview click = {this.processClicking} mode = {this.props.mode} data = {this.state.downloadData} />

                </div>
                
            )

        }else if(this.state.type === "category"){

            return(
                
                <div className = {"models " + this.props.mode} style = {overflow}>

                    <ModelsHeader viewController = {this.changingView} mode = {this.props.mode} type = {this.state.type} />

                </div>           
                
            )

        }else if(this.state.type === "post"){

            return(

                <div className = {"models " + this.props.mode} style = {overflow}>

                    <ModelsHeader viewController = {this.changingView} mode = {this.props.mode} type = {this.state.type} model = {this.state.clickedBoxName} />
                    <Post mode = {this.props.mode} model = {this.state.clickedBoxId} />

                </div>

            )

        }else{

            return (

                <div className = "przeslona">Ładowanie</div>

            )
        }

    }

}

export default Models