import React from "react"
import $ from 'jquery';
import styled from "styled-components"

import "./../../../css/pages/Models.scss"
import { stat } from "fs";

const ModelTree = styled.div`
    height: auto;
    position: relative;
    box-sizing: border-box;

    &.mobile{
        width: calc(100% - 4vh);
    }

    &.desktop{
        width: calc(65% - 5vh);
    }
`
const ModelFilters = styled.div`
    background-color: white;
    box-sizing: border-box;
    border: 1px solid black;
    overflow-y: scroll;
    overflow-x: hidden;

    &.mobile{
        width: calc(100% - 4vh);
        height: auto;
        margin: 2vh;
        padding: 2vh;
    }

    &.desktop{
        position: absolute;
        top: 12vh;
        right: 2vh;
        width: 35%;
        height: 86vh;
        padding: 2vh;
    }
`

const Model = styled.div`
    width: 100%;
    height: 40vh;
    border: 1px solid black;
    margin: 2vh 2vh 0vh 2vh;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    overflow: hidden;

    & > div.model-image{
        width: 100%;
        height: 100%;
        padding: 2vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${(props) => props.image});
        transition:all 0.3s ease-in-out;
        transform: scale(1.05);
        overflow: hidden;

        :hover{
            transform: scale(1.25);
        }
    }

    &:last-child{
        margin-bottom: 2vh;
    }
    
`
const ModelTitle = styled.div`
    width: 100%;
    height: 10vh;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.75);
    line-height: 6vh;
    text-align:center;
    color:white;
    font-size: 4vh;
    font-family: TW;

    & p{
        line-height: 4vh;
        color:white;
        font-size: 2.5vh; 
        margin: 0px;
        padding: 0px;
    }
`




const ModelFiltersTitle = styled.div`
    width: 100%;
    height: 8vh;
    line-height: 7vh;
    text-align: center;
    font-size: 5vh;
    font-family: Enigmatic;
`
const ExpandFilters = styled.div`
    &.opened{
        display: initial;
    }

    &.closed{
        display: none;
    }
`

const ModelFiltersChosen = styled.div``
const ModelFiltersChosenTitle = styled.div`
    width: auto;
    height: 3vh;
    line-height: 3vh;
    text-align: left;
    font-size: 3.5vh;
    border-bottom: .35vh solid;
    font-family: TW;
    margin-left: 2.5vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
`
const ModelFiltersChosenItems = styled.div``

const ModelFiltersTags = styled.div``
const ModelFiltersTagsTitle = ModelFiltersChosenTitle
const ModelFiltersTagsField = styled.div``
const TagItem = styled.span`
    margin-right: 10px;
    white-space: nowrap;
    font-size: 2vh;
    line-height: 3vh;
    cursor: pointer;
    font-family: Enigmatic;
    text-transform: uppercase;
    color: grey;
    cursor: pointer;

    &:hover{
        color:black;
        border-bottom: 2px dashed black
    }
`
const TagItemClicked = styled(TagItem)`
    color: green;

    &:hover{
        color:red;
        border-bottom: 2px dashed red
    }
`

const ModelFiltersCategory = styled.div``
const ModelFiltersCategoryTitle = ModelFiltersTagsTitle
const ModelFiltersCategoryField = styled.div``
const CategoryItem = TagItem

class Category extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            items: [],
            tags: [],
            categories: [
                "Galeria",
                "Relacja",
                "Inbox"
            ],
            chosenItems: [],
            chosenItemsList: [],
            filtersToDisplay: []
        }

    }

    toogleItem = (item) => {

        let {chosenItems} = this.state
        let chosenItemsList = []
        
        if((chosenItems.find((element) => {

            return element === item

        })) === undefined) {

            chosenItems.push(item)

        } else {

            chosenItems.splice(chosenItems.indexOf(item), 1)

        }

        chosenItems.forEach(tag => {
            
            chosenItemsList.push(<><TagItemClicked onClick = {() => this.toogleItem(tag)}>{tag}</TagItemClicked><span> </span></>)

        });

        this.setState({

            items: this.updateModelList(),
            chosenItems: chosenItems,
            chosenItemsList: chosenItemsList

        })

    }

    updateModelList = () => {

        let models = []

        this.props.data.forEach((model) => {

            if(!this.state.chosenItems.length || this.state.chosenItems.find(chosenItem => {

                if(model.tags.split(";").find(tag => {

                    return tag === chosenItem

                }) === undefined) {

                    return false

                }else {

                    return true

                }

            })) {                

                models.push(
                    <Model onClick = {() => this.handleClick(model.id, model.title, `category`)} image = {model.path + model.image}>
                        <div className = "model-image">
                            
                        </div>
                        <ModelTitle>
                            {model.title}<p>{model.subtitle}</p>
                        </ModelTitle>
                    </Model>    
                )

            }

        })

        return models

    }

    handleClick = (id, title) => {

        this.props.click(id, title, `category`)

    }
    
    componentDidUpdate(prevProps, prevState) {

        if(prevProps.data !== this.props.data){
            
            let tags = []

            this.props.data.forEach((element) => {                

                element.tags.split(";").forEach(tag => {

                    if(tag !== "" && undefined === this.state.categories.find(category => {

                        return category === tag

                    })) {

                        tags.push(tag)

                    }
                    
                });
                
            })
            
            tags = tags.reduce((a, b) => {

                if (a.indexOf(b) === -1) {

                  a.push(b)

                }

                return a;

            }, []);

            tags.sort()

            let tagsToDisplay = []
            let categoriesToDisplay = []

            this.state.categories.map((category) => {

                return categoriesToDisplay.push(<><CategoryItem onClick = {() => this.toogleItem(category)}>{category}</CategoryItem><span> </span></>)
 
            })

            tags.map((tag) => {

                return tagsToDisplay.push(<><TagItem onClick = {() => this.toogleItem(tag)}>{tag}</TagItem><span> </span></>)
 
            })
    
            this.setState({
                items: this.updateModelList(),
                tags: tagsToDisplay,
                categories: categoriesToDisplay
            })

        } 

    }

    expandFilters = () => {

        if($("div.expand-filters").hasClass("opened") && $("div.expand-filters").hasClass("mobile")) {

            $("div.expand-filters").addClass("closed").removeClass("opened")

        } else {

            $("div.expand-filters").removeClass("closed").addClass("opened")

        }

    }


    render() {  

        $("div.models").scrollTop(0)

        let chosenTitle

        if(this.state.chosenItems.length > 0){

            chosenTitle = <ModelFiltersChosenTitle>WYBRANE TAGI:</ModelFiltersChosenTitle>

        }

        return (

            <>

                <ModelFilters className = {`model-filters ${this.props.mode}`}>

                    <ModelFiltersTitle onClick = {this.expandFilters}>Filtruj</ModelFiltersTitle>

                    <ExpandFilters className = {`expand-filters ${this.props.mode === "mobile" ? "closed": ""} ${this.props.mode}`}>

                        <ModelFiltersChosen>
                                {chosenTitle}
                                <ModelFiltersChosenItems>{this.state.chosenItemsList}</ModelFiltersChosenItems>
                        </ModelFiltersChosen>

                        <ModelFiltersTags>
                            <ModelFiltersTagsTitle>TAGI:</ModelFiltersTagsTitle>
                            <ModelFiltersTagsField>{this.state.tags}</ModelFiltersTagsField>
                        </ModelFiltersTags>

                        <ModelFiltersCategory>
                            <ModelFiltersCategoryTitle>KATEGORIE:</ModelFiltersCategoryTitle>
                            <ModelFiltersCategoryField>{this.state.categories}</ModelFiltersCategoryField>
                        </ModelFiltersCategory>

                    </ExpandFilters>

                </ModelFilters>

                <ModelTree className = {`model-tree ${this.props.mode}`}>
                    {this.state.items}
                </ModelTree>

            </>

        )

    }

}

export default Category