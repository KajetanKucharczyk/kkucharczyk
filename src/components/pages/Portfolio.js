import React from "react"
import $ from 'jquery';
import styled from "styled-components"

import "./../../css/pages/Portfolio.css"

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
    }
    & > img {

    }
    & > p {

    }
`

let data = [
    {
        company: "AGTOM",
        products: [

        ],
    },
    {
        company: "KKUCHARCZYK",
        products: [

        ],
    }
]

class Portfolio extends React.Component {

    constructor(props){

        super(props)

        this.state = {}

    }    


    render() {  

        return(

            <>
                <Header>Ukończone projekty</Header>

                <TitleHeader>Sklep internetowy agtom</TitleHeader>
                
                <PortfolioItem>
                    <h1>Tłumacz produktów</h1>
                    <img src = {""} />
                    <p>asddsafsdafsad</p>
                </PortfolioItem>


                <TitleHeader>Strona domowa kkucharczyk</TitleHeader>
            </>           
            
        )

    }

}

export default Portfolio