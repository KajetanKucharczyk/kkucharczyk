import React from "react"
import $ from 'jquery';

import "./../../css/pages/Main.scss"

import ja1 from "./../../images/ja1.webp"
import ja2 from "./../../images/ja2.webp"
import ja3 from "./../../images/ja3.webp"

class Main extends React.Component {

    constructor(props) {

        super(props)

        this.state = {}

        this.resizeField = this.resizeField.bind(this)

    }

    resizeField() {

        if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || $(window).width() < 1200) {

            $("img.myImage").eq(0).css({
                height: "60vw",
                position: "absolute",
                top: "1vh",
                right: "10vw"
            })
            $("img.myImage").eq(1).css({
                height: "60vw",
                position: "absolute",
                top: "1vh",
                right: "20vw"
            })
            $("img.myImage").eq(2).css({
                height: "60vw",
                position: "absolute",
                top: "1vh",
                right: "30vw"
            })

            $("img.myImage-hidden").eq(0).css({
                height: "60vw",
                position: "absolute",
                top: "1vh",
                right: "10vw"
            })
            $("img.myImage-hidden").eq(1).css({
                height: "60vw",
                position: "absolute",
                top: "1vh",
                right: "20vw"
            })
            $("img.myImage-hidden").eq(2).css({
                height: "60vw",
                position: "absolute",
                top: "1vh",
                right: "30vw"
            })


            $("div.myName").css({
                top: "calc(60vw + 4vh)",
                right: "0",
                textAlign: "center"
            })

        } else {

            $("img.myImage").eq(0).css({
                height: "40vh",
                position: "absolute",
                top: "5vh",
                right: "2vh"
            })
            $("img.myImage").eq(1).css({
                height: "40vh",
                position: "absolute",
                top: "5vh",
                right: "calc(7.5vw + 2vh)"
            })
            $("img.myImage").eq(2).css({
                height: "40vh",
                position: "absolute",
                top: "5vh",
                right: "calc(15vw + 2vh)"
            })

            $("img.myImage-hidden").eq(0).css({
                height: "40vh",
                position: "absolute",
                top: "5vh",
                right: "2vh"
            })
            $("img.myImage-hidden").eq(1).css({
                height: "40vh",
                position: "absolute",
                top: "5vh",
                right: "calc(7.5vw + 2vh)"
            })
            $("img.myImage-hidden").eq(2).css({
                height: "40vh",
                position: "absolute",
                top: "5vh",
                right: "calc(15vw + 2vh)"
            })


            $("div.myName").css({
                top: "50vh",
                right: "5vh",
                textAlign: "right"
            })

        }

    }

    componentDidMount() {

        $("img.myImage").on('load', () => {

            this.resizeField()

        })

        window.addEventListener("resize", this.resizeField);

    }

    componentWillUnmount() {

        window.removeEventListener("resize", this.resizeField);

    }

    render() {

        return (

            <div>

                <div className = { "boards " + this.props.mode } >


                    <div className = { "board " + this.props.mode } > 
                        <div>
                            <span >
                            AKTUALNIE:
                            </span><span> </span >
                            <p> Specjalista ds obsługi sklepu internetowego </p>
                        </div>
                    </div >

                    <div className = { "board " + this.props.mode } >
                        <div >
                            <span>
                            W PRZYSZŁOŚCI:
                            </span>
                            <span> </span >
                            <p> Front - End dev </p> 
                        </div>
                    </div>

            </div>

            <div className = { "panel " + this.props.mode } >

            <img  alt = "" className = { "myImage " + this.props.mode } src = { ja3 } /> 
            <img  alt = "" className = { "myImage " + this.props.mode } src = { ja2 } /> 
            <img  alt = "" className = { "myImage " + this.props.mode } src = { ja1 } />

            <img  alt = ""className = { "myImage-hidden " + this.props.mode } src = { ja3 } />
            <img  alt = "" className = { "myImage-hidden " + this.props.mode } src = { ja2 } />
            <img  alt = "" className = { "myImage-hidden " + this.props.mode } src = { ja1 } />

            <div className = { "myName " + this.props.mode } >
                <p className = { "_title " + this.props.mode } > Jeszcze nie inżynier </p> 
                <p className = { "name " + this.props.mode } > Kajetan Kucharczyk </p> 
                <p className = { "email " + this.props.mode } > < a href = "mailto:kucharczyk.kajetan@gmail.com" > kucharczyk.kajetan @gmail.com </a></p>
            </div>

            </div>

            <div className = { "quick-buttons " + this.props.mode } >

                <div>
                Modelarz - artysta
                </div>

                <div>
                Fan piłki kopanej
                </div>

                <div>
                Koder pasjonat 
                </div>

                </div>

            </div>

        )
    }

}

export default Main