import React from "react"
import $ from 'jquery';

import "./../../../css/pages/Physics.css"

import PhysicsCatalog from "./PhysicsCatalog"
import PhysicsFile from "./PhysicsFile"
import Loader from "./../Loader"

import AGH from "./../../../images/AGH.jpg"

class Physics extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            items: [],
            download: "not",
            catalogs: {},
            pdfs: [],
            mode: null
        }

        this.processData = this.processData.bind(this)
        this.downloadData = this.downloadData.bind(this)

    }   
    
    componentDidMount() {

        console.log("sdfds")

        this.setState({
            mode: this.props.mode
        });

    }

    componentDidUpdate(prevProps, prevState) {

        if(this.state.mode !== this.props.mode) {

            this.setState({
                mode: this.props.mode
            });

        }

        if(this.state.mode === "mobile" || this.state.mode === "desktop") {
        
            if(this.state.download === "not") {

                setTimeout(() => {
                        
                    this.downloadData()
                    
                }, 100)

            }

            if(this.state.download === "downloaded"){

                if(!($.isEmptyObject(this.state.catalogs)) && this.state.pdfs.length > 0) {

                    this.processData(this.state.mode)

                }

            }

        }

        if((this.state.mode === "mobile" || this.state.mode === "desktop") && prevState.mode !== this.state.mode && this.state.download === "rendered") {

            this.processData(this.state.mode)

        }

    }

    downloadData = () => {

        this.setState({
            download: "downloading"
        })

        $.ajax({
            url: "http://kkucharczyk.pl/serwer/fizyka/catalogs",
            async: false,
            beforeSend: function(){
                $('body').append(<div className = "przeslona">Ładowanie</div>)
            },
            complete: function(){
                $("div.przeslona").remove()
            },
            success: function(data){  

                this.setState({
                    catalogs: JSON.parse(data)
                })

                JSON.parse(data).Catalogs.forEach((element, key, array) => {

                    $.ajax({
                        url: "http://kkucharczyk.pl/serwer/fizyka/pdf/" + element.fileName,
                        async: false,
                        beforeSend: function(){
                            
                        },
                        complete: function(){
                            $("div.przeslona").remove()
                        },
                        success: function(data){  

                            let obj = {
                                fileName: element.fileName,
                                pdfs: JSON.parse(data).Pdfs
                            }  
                            
                            this.setState(prevState => ({
                                pdfs: [...prevState.pdfs, obj]
                            }))


                        }.bind(this)

                    })

                    if(key === (array.length - 1)) {

                        this.setState({
                            download: "downloaded"
                        })                
                        
                    }

                })
        

            }.bind(this)

        })

    }

    processData = (mode) => {

        let items = []
        
        console.log()

        this.state.catalogs.Catalogs.forEach((element, key) => {

            items = [...items, <PhysicsCatalog mode = {mode} key = {"label_" + key}>{element.fileName}</PhysicsCatalog>]

            let fileParent = element.fileName
            
            this.state.pdfs.forEach((element, key) => {

                let {fileName} = element
                
                if(fileName === fileParent){

                    element.pdfs.forEach((element, key) => {

                        let {fileName, filePath} = element

                        items = [...items, <PhysicsFile parent = {fileParent} mode = {mode} key = {"label_pdf_" + key + "-" + fileName} path = {filePath}>{fileName}</PhysicsFile>]

                    })

                }

            })

        })



        this.setState({
            items : items,
            download: "rendered"
        })


    }


    render() {

        var style = {
            position: "relative"
        }

        if(this.state.download === "rendered") {

            return(

                <div className = {"field physics " + this.props.mode}>

                    <div style = {style}>
                        <img  alt = "" className = {"AGH-image " + this.props.mode} src = {AGH}></img>
                        <p className = {"AGH-wydzial " + this.props.mode}>Wydział Fizyki i Informatyki<br></br>Stosowanej</p>
                        <p className = {"AGH-profil " + this.props.mode}>Fizyka Techniczna</p>
                    </div>

                    {this.state.items}
                </div>           
                
            )
        
        } else {

            return(

                <div>
                    <Loader {...this.props} />
                </div>

            )

        }

    }

}

export default Physics