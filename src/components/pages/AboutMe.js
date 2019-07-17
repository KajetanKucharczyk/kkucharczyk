import React from "react"
import $ from 'jquery';

import "./../../css/pages/AboutMe.scss"

import ja2 from "./../../images/ja2_big.webp"

class AboutMe extends React.Component {

    constructor(props) {

        super(props)

        this.state = {}

    }

    resize() {

        console.log("resize")

        if($("img.header-image").hasClass("desktop")){

            $(".field-1").css({
                marginTop: 0
            })
            $(".links").css({
                marginTop: $("img").height()
            })
            $("div.skills").css({
                marginTop: $("img").height()
            })

        }

        if($("img.header-image").hasClass("mobile")){

            $(".field-1").css({
                marginTop: "calc(" + $("img").height() + "px - 5 * 7vh)"
            })
            $("div.skills").css({
                marginTop: 0
            })
            $("div.links").css({
                marginTop: 0
            })

        }

    }

    componentDidMount() {

        $("img.header-image").on('load', () => {

            this.resize()

        })

        window.addEventListener("resize", this.resize);

        //PRZYCISKI
        $("div.github").click(() => window.open("https://github.com/kajcioochu", "_blank"))
        $("div.facebook").click(() => window.open("https://www.facebook.com/kajcioochu", "_blank"))
        $("div.linkedin").click(() => window.open("https://www.linkedin.com/in/kajetan-kucharczyk-7a7728183/", "_blank"))
        $("div.agtom").click(() => window.open("https://agtom.eu/", "_blank"))
        
    }

    componentWillUnmount() {

        window.removeEventListener("resize", this.resizeField);

    }

    render() {

        return (

            <div className="about-me" >

                <img alt = "" className={"header-image " + this.props.mode} src={ja2} />

                <div className={"highlights field-1 " + this.props.mode} > Pixel perfect </div>
                <div className={"highlights field-2 " + this.props.mode} > Problem solving </div>
                <div className={"highlights field-3 " + this.props.mode} > Junior full - stack </div> 
                <div className={"highlights field-4 " + this.props.mode} > Logical thinking </div> 
                <div className={"highlights field-5 " + this.props.mode} > AGH / ZSŁ </div>
                    
            <div className={"skills " + this.props.mode} >

                <div className={"hastags-header " + this.props.mode} > Stack technologiczny: </div>
                        
                    <span className={"hashtag " + this.props.mode} > HTML </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > HTML 5 </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > CSS </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > SASS </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > JavaScript </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > JavaScript ES6 </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > jQuery </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > REACT </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > REACT Redux </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > REACT Router </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > AJAX </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > PHP </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > OOP </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > CPP </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > JAVA / Android </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > SMARTY / Prestashop </span><span> </span >

                <div className={"hastags-header " + this.props.mode} > Umiejętności: </div>
                                                                                            
                    <span className={"hashtag " + this.props.mode} > pixel perfect </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > problem solving </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > English </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > prawo jazdy </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > innowacyjność </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > GIMP </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Photoshop </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Corel Draw </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Office 365 </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > całkowanie </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > klejenie modeli </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > malowanie modeli </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > fotografowanie modeli </span><span> </span >

                <div className={"hastags-header " + this.props.mode} > Wykształcenie: </div>
                                                                                                                                                    
                    <span className={"hashtag " + this.props.mode} > ZSŁ </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Informatyka </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Aplikacje internetowy </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Matura </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > AGH </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Fizyka techniczna </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Fizyka ogólna </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Fizyka współczesna </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Fizyka kwantowa </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Fizyka jądrowa </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Fizyka środowiska </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Modelowanie komputerowe </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Elektronika </span><span> </span >

                <div className={"hastags-header " + this.props.mode} > Zainteresowania: </div>
                                                                                                                                                                                                                
                    <span className={"hashtag " + this.props.mode} > Modelarstwo </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > II Wojna Światowa </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Historia </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Technologie </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Nowe technologie </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Smartphony </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Recencje sprzętów </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Artykuły RSS </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Feedly </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Piłka nożna </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Liga Mistrzów </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > LaLiga </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > FC Barcelona </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Cracovia </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Filmy </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Horrory </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Książki </span><span> </span >
                    <span className={"hashtag " + this.props.mode} > Stephen King </span><span> </span >


                 <div className={"hastags-header " + this.props.mode} > Wady: </div>
                                                                                                                                                                                                                                                                                        
                    <span className={"hashtag " + this.props.mode} > hehe </span><span> </span >

                </div>

                <div className={"links " + this.props.mode} >
                    
                    <div className={"link-item github " + this.props.mode} > Github </div> 
                    <div className={"link-item facebook " + this.props.mode} > Facebook </div>
                    <div className={"link-item linkedin " + this.props.mode} > LinkedIn </div> 
                    <div className={"link-item agtom " + this.props.mode} > agtom.eu </div>
                    
                </div>
            </div>
            
        )
    }
}

export default AboutMe