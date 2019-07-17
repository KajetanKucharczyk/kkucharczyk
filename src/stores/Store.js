import {connect} from "react-redux"

import MainPage from "../components/MainPage"

import {setMode, openMobileMenu, closeMobileMenu} from "./actions"

const mapStateToProps = (state) => {

    return {
        mode: state.mode,
        openMenuStatus: state.mobileMenu
    }

}

function mapDispatchToProps(dispatch) {

    return{

        setMode: () => {

            dispatch(setMode())

        },
        openMobileMenu: () => {

            dispatch(openMobileMenu())

        },
        closeMobileMenu: () => {

            dispatch(closeMobileMenu())

        }

    }

}

var connectedComponent = connect(

    mapStateToProps,
    mapDispatchToProps

) (MainPage)

export default connectedComponent