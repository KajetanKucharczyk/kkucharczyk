import React from "react"
import $ from 'jquery';

import "./../../../css/pages/Models.scss"

class Post extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            downloadCompleteFlag: false,
            downloadData: {},
            mode: null
        }

    }  

    downloadData(id) {

        $.ajax({
            url: `http://kkucharczyk.pl/serwer/modele/${id}`,
            async: false,
            beforeSend: function(){
                $('body').append(<div className = "przeslona">Ładowanie</div>)
            },
            complete: function(){
                $("div.przeslona").remove()
            },
            success: function(data){  

                this.setState({
                    downloadCompleteFlag: true,
                    downloadData: JSON.parse(data)
                })
        

            }.bind(this)

        })

    }

    componentDidUpdate() {

        if(this.state.mode !== this.props.mode) {

            this.setState({
                mode: this.props.mode
            });    
        }

    }

    componentDidMount() {

        

    }

    render() {  

        if(this.state.downloadCompleteFlag){

            return(

                <div className = {"post " + this.state.mode}> 
                    <div className = {"description " + this.state.mode} dangerouslySetInnerHTML={{__html: this.state.downloadData[0].description}}></div>
                </div>   
            )

        }else{

            this.downloadData(this.props.model)

            return(

                <div className = "przeslona">Ładowanie</div>
            )

        }

    }

}

export default Post