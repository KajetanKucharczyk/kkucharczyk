import React from "react"
import $ from 'jquery';

import "./../../css/pages/Contact.scss"

class Contact extends React.Component {

    constructor(props){

        super(props)

        this.state = {}

    }    

    componentDidMount() {

        $("div.email").click(() => {

            let email = 'kucharczyk.kajetan@gmail.com';
            let subject = 'Hello!';
            let emailBody = 'Hi, I want to say hello to you :)';
            window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;

        })
        $("div.messenger").click(() => {
            window.open("https://msng.link/fm/kajcioochu", "_blank")
        })
        $("div.phone").click(() => {
            window.open("tel:+48732022125");
        })
        $("div.address").click(() => {
            window.open("https://goo.gl/maps/1LzMKZPg9CCMvvS67", "_blank")
        })

    }

    render() {  

        return(

            <div className = {"contact " + this.props.mode}>
                <div className = {"contact-item email " + this.props.mode}>
                    <div className = "background">
                        <div className = {"text"}>
                            EMAIL
                        </div>
                    </div>
                    <div className = "data data-first">kucharczyk.kajetan</div>
                </div>
                <div className = {"contact-item messenger " + this.props.mode}>
                    <div className = "background">
                        <div className = {"text-second"}>
                            MESSENGER
                        </div>
                    </div>
                    <div className = "data data-second">Kajetan<br></br>Kajcioochu<br></br>Kucharczyk</div>
                </div>
                <div className = {"contact-item phone " + this.props.mode}>
                   <div className = "background">
                        <div className = {"text"}>
                            TELEFON
                        </div>
                   </div>
                   <div className = "data data-first">732 022 125</div>
                </div>
                <div className = {"contact-item address " + this.props.mode}>
                    <div className = "background">
                        <div className = {"text-second"}>
                            ADRES
                        </div>
                     </div>
                     <div className = "data data-second">Samozwaniec 19 Kraków</div>
                </div>
            </div>           
            
        )

    }

}

export default Contact