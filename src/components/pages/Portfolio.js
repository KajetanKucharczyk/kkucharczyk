import React from "react"
import $ from 'jquery';
import styled from "styled-components"

import "./../../css/pages/Portfolio.css"

import portfolio_1 from "./../../images/portfolio_1.png"
import portfolio_2 from "./../../images/portfolio_2.png"
import portfolio_3 from "./../../images/portfolio_3.png"
import portfolio_4 from "./../../images/portfolio_4.png"
import portfolio_5 from "./../../images/portfolio_5.png"
import portfolio_6 from "./../../images/portfolio_6.png"

const Header = styled.div`
    font-size: 50px;
    font-family: TW;
    text-align: center;
    background-color: black;
    color: white;
    margin: 10px;
    height: 75px;
    line-height: 75px;
`
const TitleHeader = styled.div`
    font-size: 30px;
    font-family: TW;
    text-align: center;
    background-color: rgba(0,0,0,.65);
    color: white;
    margin: 10px;
    height: 50px;
    line-height: 50px;
`
const PortfolioItem = styled.div`
    border: 1px solid;
    margin: 10px;
    padding: 10px;
    margin-left: 5vw;
    margin-bottom: 0px;
    box-shadow: 0px 1px 5px black;

    & > h1{
        font-family: TW;
        font-size: 40px;
        margin: 0px;
        margin-bottom: 10px;
    }
    & > img {
        width: ${props => props.mode === "desktop" ? "50%;" : "100%;"};
        margin-left: ${props => props.mode === "desktop" ? "25%;" : "0%;"};
        border: 1px solid black;
    }
    & > p {

    }
`
const TechItem = styled.div`     
    text-align: center;
    line-height: 30px;
    font-size: 15px;
    display: inline-block;
    border-radius: 5px;
    margin-bottom: 7px;
    font-weight: bold;
    color: white;
    margin-left: 5px;
    border: 1px solid black;
    box-shadow: 0px 1px 5px black;

    background-color: ${props => props.type === "HTML" ? "#189e62" : ""};
    background-color: ${props => props.type === "CSS" ? "#c92418" : ""};
    background-color: ${props => props.type === "JS" ? "#d99d11" : ""};
    background-color: ${props => props.type === "PHP" ? "#5110ad" : ""};
    background-color: ${props => props.type === "REACT" ? "#316599" : ""};

    width: ${props => props.mode === "desktop" ? "calc(20% - 7px);" : "calc(50% - 7px);"};
`
const Link = styled.div`
    text-align: center;
    line-height: 60px;
    font-size: 25px;
    display: inline-block;
    border-radius: 5px;
    margin-bottom: 7px;
    font-weight: bold;
    color: white;
    margin-left: 5px;
    border: 1px solid black;
    box-shadow: 0px 1px 5px black;
    width: 50%;
    background-color: #6e5494;
    cursor: pointer;
    transition:all 0.3s ease-in-out;

    &:hover{
        width:100%;
    }
`

class Portfolio extends React.Component {

    constructor(props){

        super(props)

        this.state = {}

    } 
    
    githubClick = (box) => {

        if(box === 1) {

            window.open("https://github.com/KajetanKucharczyk/Product-translator-and-description-maker-for-Prestashop-CMS",'_blank');

        }

        if(box === 2) {

            window.open("https://github.com/KajetanKucharczyk/Product-features-manager-for-Prestashop-CMS",'_blank');

        }

        if(box === 3) {

            window.open("https://github.com/KajetanKucharczyk/kkucharczyk",'_blank');

        }

        if(box === 4) {

            window.open("https://github.com/KajetanKucharczyk/ReactStyledComponents",'_blank');

        }

        if(box === 5) {

            window.open("https://github.com/KajetanKucharczyk/React-Files",'_blank');

        }

        if(box === 6) {

            window.open("",'_blank');

        }

    }


    render() {  

        return(

            <>
                <Header>Projekty</Header>

                <TitleHeader>Sklep internetowy agtom</TitleHeader>
                
                <PortfolioItem mode = {this.props.mode}>
                    <h1>Tłumacz produktów</h1>
                    <img src = {portfolio_1} alt = {"Tłumacz produktów"} />
                    <p>Program do automatycznego kreowania opisów produktów na podstawie kategorii oraz przypisanych cech w języku polskim oraz angielskim.</p>
                    <p><br></br></p>
                    <TechItem type = {"HTML"} mode = {this.props.mode}>HTML</TechItem>
                    <TechItem type = {"CSS"} mode = {this.props.mode}>CSS</TechItem>
                    <TechItem type = {"JS"} mode = {this.props.mode}>JS</TechItem>
                    <TechItem type = {"JS"} mode = {this.props.mode}>jQuery</TechItem>
                    <TechItem type = {"PHP"} mode = {this.props.mode}>PHP</TechItem>
                    <TechItem type = {"PHP"} mode = {this.props.mode}>MySQL</TechItem>
                    <p><br></br></p>
                    <Link onClick = {() => this.githubClick(1)}>Github</Link>
                </PortfolioItem>

                <PortfolioItem mode = {this.props.mode}>
                    <h1>Program do uzupełniania cech produktów</h1>
                    <img src = {portfolio_2} alt = {"Program do uzupełniania cech produktów"} />
                    <p>Program do uzupełniania cech produktów na podstawie kategorii.</p>
                    <p><br></br></p>
                    <TechItem type = {"HTML"} mode = {this.props.mode}>HTML</TechItem>
                    <TechItem type = {"CSS"} mode = {this.props.mode}>CSS</TechItem>
                    <TechItem type = {"JS"} mode = {this.props.mode}>JS</TechItem>
                    <TechItem type = {"JS"} mode = {this.props.mode}>jQuery</TechItem>
                    <TechItem type = {"PHP"} mode = {this.props.mode}>PHP</TechItem>
                    <TechItem type = {"PHP"} mode = {this.props.mode}>MySQL</TechItem>
                    <p><br></br></p>
                    <Link onClick = {() => this.githubClick(2)}>Github</Link>
                </PortfolioItem>

                {/* <PortfolioItem>
                    <h1>Kalendarz zapisów</h1>
                    <img src = {""} />
                    <p>asddsafsdafsad</p>
                </PortfolioItem>

                <PortfolioItem>
                    <h1>Klasy PHP</h1>
                    <img src = {""} />
                    <p>asddsafsdafsad</p>
                </PortfolioItem>

                <PortfolioItem>
                    <h1>Skrypty PHP</h1>
                    <img src = {""} />
                    <p>asddsafsdafsad</p>
                </PortfolioItem> */}

                <PortfolioItem mode = {this.props.mode}>
                    <h1>Program do uzupełniania farb</h1>
                    <img src = {portfolio_6} alt = {"Program do uzupełniania farb"} />
                    <p>Program do uzupełniania farb dla danego modelu w oparciu o instrukcję producenta.</p>
                    <p><br></br></p>
                    <TechItem type = {"HTML"} mode = {this.props.mode}>HTML</TechItem>
                    <TechItem type = {"CSS"} mode = {this.props.mode}>CSS</TechItem>
                    <TechItem type = {"JS"} mode = {this.props.mode}>JS</TechItem>
                    <TechItem type = {"JS"} mode = {this.props.mode}>jQuery</TechItem>
                    <TechItem type = {"PHP"} mode = {this.props.mode}>PHP</TechItem>
                    <TechItem type = {"PHP"} mode = {this.props.mode}>MySQL</TechItem>
                    <p><br></br></p>
                    <Link onClick = {() => this.githubClick(6)}>Github</Link>
                </PortfolioItem>

                <TitleHeader>Strona domowa kkucharczyk</TitleHeader>

                <PortfolioItem mode = {this.props.mode}>
                    <h1>Strona domowa</h1>
                    <img src = {portfolio_3} alt = {"Strona domowa"} />
                    <p>Moja strona domowa powstała w celu praktycznej nauki frameworka REACT.</p>
                    <p><br></br></p>
                    <TechItem type = {"HTML"} mode = {this.props.mode}>JSX</TechItem>
                    <TechItem type = {"CSS"} mode = {this.props.mode}>CSS</TechItem>
                    <TechItem type = {"CSS"} mode = {this.props.mode}>SAAS</TechItem>
                    <TechItem type = {"JS"} mode = {this.props.mode}>JS</TechItem>
                    <TechItem type = {"JS"} mode = {this.props.mode}>jQuery</TechItem>
                    <TechItem type = {"JS"} mode = {this.props.mode}>REACT</TechItem>
                    <TechItem type = {"JS"} mode = {this.props.mode}>REACT ROUNTER</TechItem>
                    <TechItem type = {"JS"} mode = {this.props.mode}>STYLED COMP.</TechItem>
                    <TechItem type = {"PHP"} mode = {this.props.mode}>PHP</TechItem>
                    <TechItem type = {"PHP"} mode = {this.props.mode}>MySQL</TechItem>
                    <TechItem type = {"PHP"} mode = {this.props.mode}>REST</TechItem>
                    <p><br></br></p>
                    <Link onClick = {() => this.githubClick(3)}>Github</Link>
                </PortfolioItem>

                <TitleHeader>Pozostałe projekty</TitleHeader>

                <PortfolioItem mode = {this.props.mode}>
                    <h1>REACT STYLED COMPONENTS</h1>
                    <img src = {portfolio_5} alt = {"REACT STYLED COMPONENTS"} />
                    <p>Strona powstała w czasie praktycznej nauki REACT STYLED COMPONENTS.</p>
                    <p><br></br></p>
                    <TechItem type = {"HTML"} mode = {this.props.mode}>JSX</TechItem>
                    <TechItem type = {"CSS"} mode = {this.props.mode}>CSS</TechItem>                    
                    <TechItem type = {"JS"} mode = {this.props.mode}>JS</TechItem>                    
                    <TechItem type = {"JS"} mode = {this.props.mode}>REACT</TechItem>                    
                    <TechItem type = {"JS"} mode = {this.props.mode}>STYLED COMP.</TechItem>
                    <p><br></br></p>
                    <Link onClick = {() => this.githubClick(4)}>Github</Link>
                </PortfolioItem>

                <PortfolioItem mode = {this.props.mode}>
                    <h1>SKRYPTY REACT</h1>
                    <img src = {portfolio_4} alt = {"SKRYPTY REACT"} />
                    <p>Skrypty powstałe w czasie nauki frameworka REACT.</p>
                    <p><br></br></p>
                    <TechItem type = {"HTML"} mode = {this.props.mode}>JSX</TechItem>
                    <TechItem type = {"CSS"} mode = {this.props.mode}>CSS</TechItem>
                    <TechItem type = {"JS"} mode = {this.props.mode}>JS</TechItem>
                    <TechItem type = {"JS"} mode = {this.props.mode}>REACT</TechItem>
                    <TechItem type = {"JS"} mode = {this.props.mode}>REACT ROUNTER</TechItem>
                    <p><br></br></p>
                    <Link onClick = {() => this.githubClick(5)}>Github</Link>
                </PortfolioItem>

            </>           
            
        )

    }

}

export default Portfolio