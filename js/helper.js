//Different generic helper functions and methods

////////////////////////////
////GET VIEWPORT WIDTH
////////////////////////////
function getViewportWidth() {
    if (window.innerWidth) {
        return window.innerWidth;
    } else if (document.body && document.body.offsetWidth) {
        return document.body.offsetWidth;
    } else {
        return 0;
    }
}

////////////////////////////
////GET VIEWPORT HEIGHT
////////////////////////////
function getViewportHeight() {
    if (window.innerHeight) {
        return window.innerHeight;
    } else if (document.body && document.body.offsetHeight) {
        return document.body.offsetHeight;
    } else {
        return 0;
    }
}

//////////////////
////ATTACH EVENT LISTENER
/////////////////
function attachEventListener(eventTarget, eventType, eventHandler) {
    if (eventTarget.addEventListener) {
        eventTarget.addEventListener(eventType, eventHandler, false);
    } else if (eventTarget.attachEvent) {
        eventType = "on" + eventType;
        eventTarget.attachEvent(eventType, eventHandler);
    } else {
        eventTarget["on" + eventType] = eventHandler;
    }
}

//////////////////
////DETACH EVENT LISTENER
/////////////////
function detachEventListener(eventTarget, eventType, eventHandler) {
    if (eventTarget.removeEventListener) {
        eventTarget.removeEventListener(eventType, eventHandler, false);
    } else if (eventTarget.detachEvent) {
        eventType = "on" + eventType;
        eventTarget.detachEvent(eventType, eventHandler);
    } else {
        eventTarget["on" + eventType] = null;
    }
}

//////////////////
////CANCEL EVENT
//////////////////
function cancelEvent(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else { e.returnValue = false; }

    //return false;
}

///////////////////
///CANCEL PROPOGATION
///////////////////
function cancelPropogation(e) {
    if(e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}

function gaEvent(category, action, label, value, nonInteract) {
    //alert("gaEvent called: " + label);
    //Ex. gaEvent("Main Page", "Mouse Click", "Main Page Mouse Click", 5, true);
    if (category === null) {
        throw new Error("gaEvent: Category is required.");
    }
    if(action === null) {
        throw new Error("gaEvent: Action is required.");
    }
    //Can be more detailed, aka mouseEvent, load event etc.
    label = label || null;
    value = value || null;
    //_trackEvent(category, action, label, value, nonInteraction)
    nonInteract = nonInteract || false;

    if(value === null && nonInteract === false) {
        _gaq.push(['_trackEvent', category, action, label]);
    } else {
        _gaq.push(['_trackEvent', category, action, label, value, nonInteract]);
    }
    console.log("gaEvent: category: " + category +
        " action: " + action +
        " label: " + label +
        " value: " + value +
        " nonInteract: " + nonInteract);
}