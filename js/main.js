$(document).ready(function(){

    //Vars
    var logo = document.getElementById('logo');

    //AddEventListeners
    listenEvent(logo, 'click', onLogoClick);

    //Initialize Functions
    initCopyright();

    //////////////////
    ////INIT COPYRIGHT
    /////////////////
    function initCopyright()
    {
       var d = new Date();
       var y = d.getFullYear();

       var currentYear = document.getElementById("copyright");
       var copyString = "Copyright &copy; " + y;
       currentYear.innerHTML = copyString;
    }

    //////////////////
    ////ON LOGO CLICK
    /////////////////
    function onLogoClick(e)
    {
        $('html:not(:animated), body:not(:animated)').animate( { scrollTop : "0px" }, 800, "easeOutExpo");
        e.preventDefault();
        return false;
        console.log('logo Clicked!: ');
    }

    //////////////////
    ////SCROLL TO ELEMENT
    /////////////////
    function scrollToElement( target )
    {
        var topoffset = 30;
        var speed = 800;
        var destination = jQuery( target ).offset().top - topoffset;
        jQuery( 'html:not(:animated), body:not(:animated)' ).animate( { scrollTop: destination}, speed, function() {
            window.location.hash = target;
        });
        return false;
    }

    //////////////////
    ////LISTEN EVENT
    /////////////////
        function listenEvent(eventTarget, eventType, eventHandler)
        {
            if(eventTarget.addEventListener)
            {
                eventTarget.addEventListener(eventType, eventHandler, false)
            }
            else if(eventTarget.attachEvent)
            {
                eventType = "on" + eventType;
                eventTarget.attachEvent(eventType, eventHandler)
            }
            else
            {
                eventTarget["on" + eventType] = eventHandler;
            }
        }

        console.log('Init Spektral Projects');
});




