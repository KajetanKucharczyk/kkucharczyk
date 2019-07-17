import React from "react"
import {
    Route,
    HashRouter
} from "react-router-dom"

import "./../css/MainPage.scss"

import HeaderDesktop from "./menu/HeaderDesktop"
import HeaderMobile from "./menu/HeaderMobile"

import Main from "./pages/Main"
import Models from "./pages/Models/Models"
import Physics from "./pages/Physics/Physics"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"

class MainPage extends React.Component {

    constructor(props){

        super(props)

        this.state = {
        }

        this.updateDimensions = this.updateDimensions.bind(this)

    }

    mobileMenu(openMenuStatus) {

        if(openMenuStatus){

            //MENU OPENED

            return "header opened" + this.props.mode

        }else{

            //MENU CLOSED

            return "header closed" + this.props.mode
            
        }

    }

    updateDimensions() {

        this.props.setMode()

    }       
    
    componentDidMount() {

        this.updateDimensions();

        window.addEventListener("resize", this.updateDimensions);

    }

    componentWillUnmount() {

        window.removeEventListener("resize", this.updateDimensions);

    }

    render() {

        var footer = {
            desktop: "Kajetan Kucharczyk 2019",
            mobile: "Kajetan Kucharczyk 2019: React Redux Router"
        }

        var pages = [
            {
                key: Date.now()*Math.random(),
                title: "Strona główna",
                componentName: "Main",
                event: this.event,
                type: "main"
            },
            {
                key: Date.now()*Math.random(),
                title: "Modele",
                componentName: "Models",
                event: this.event,
                type: "main"
            },
            
            {
                key: Date.now()*Math.random(),
                title: "Fizyka",
                componentName: "Physics",
                event: this.event,
                type: "main"
            },
            {
                key: Date.now()*Math.random(),
                title: "O mnie",
                componentName: "AboutMe",
                event: this.event,
                type: "main"
            },            
            {
                key: Date.now()*Math.random(),
                title: "Portfolio",
                componentName: "Portfolio",
                event: this.event,
                type: "main"
            },
            {
                key: Date.now()*Math.random(),
                title: "Kontakt",
                componentName: "Contact",
                event: this.event,
                type: "main"
            }
        ]

        var header

        var classes = this.mobileMenu(this.props.openMenuStatus)

        if(this.props.mode === "desktop"){

            header = <HeaderDesktop {...this.props} pages = {pages} footer = {footer.desktop} />
        }
        if(this.props.mode === "mobile"){

            header = <HeaderMobile {...this.props} pages = {pages} footer = {footer.mobile} classes = {classes} />

        }
        
        return(

            

            <div className = {"container " + this.props.mode}>
                
                <HashRouter>

                    {header}

                    <div className = {"content " + this.props.mode}>

                    <Route exact path = "/" render = {() => <Main {...this.props} isAuthed={true} />} />
                    <Route path = "/contact" render = {() => <Contact {...this.props} isAuthed={true} />} />
                    <Route path = "/models" render = {() => <Models {...this.props} isAuthed={true} />} />
                   
                    <Route path = "/portfolio" render = {() => <Portfolio {...this.props} isAuthed={true} />} />
                    <Route path = "/physics" render = {() => <Physics {...this.props} isAuthed={true} />} />
                    <Route path = "/aboutme" render = {() => <AboutMe {...this.props} isAuthed={true} />} />

                    </div>

                </HashRouter>

            </div>           
            
        )

    }

}

export default MainPage