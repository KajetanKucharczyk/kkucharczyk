import $ from 'jquery';

function detectMode() {

    var mode;

    if((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || $(window).width() < 1200) {
        
        mode = "mobile"

    }else{

        mode = "desktop"

    }

    return mode
}

const reducer = (state, action) => {

    if(state === undefined){

        return {
            mobileMenu: false,
            mode: null
        }

    }
    
    switch(action.type) {
        case "mode":
            return {
                ...state,
                mode: detectMode()
            }
        case "openMobileMenu":
            return {
                ...state,
                mobileMenu: true
            }
        case "closeMobileMenu":
            return {
                ...state,
                mobileMenu: false
            }
        default:
            return state
    }

}

export default reducer