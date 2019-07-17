export function setMode(mode) {

    return { 
        type: "mode", 
        mode 
    }

}

export function openMobileMenu(flag) {

    return { 
        type: "openMobileMenu", 
        flag 
    }
    
}

export function closeMobileMenu(flag) {

    return { 
        type: "closeMobileMenu", 
        flag 
    }
    
}