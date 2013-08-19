$(document).ready(function(){

    //Vars
    var listItem = window.location.hash;
    var logo = document.getElementById('logo');
    var projectsTitle = document.getElementById('projectsTitle');

    //AddEventListeners
    listenEvent(logo, 'click', scrollToTop);
    listenEvent(projectsTitle, 'click', scrollToTop);

    //Initialize Functions
    initCopyright();

    if(listItem)
    {
        console.log("Hash Found: " + listItem);
        scrollToElement(listItem);
    }
    else
    {
        //takes care of Chrome scroll position feature when
        //user refreshes the page by hitting enter in the url field
        scrollTo(0, 0);
        console.log("No Hash Found!");
    }

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
    ////SCROLL TO TOP
    /////////////////
    function scrollToTop(e)
    {
        $('html:not(:animated), body:not(:animated)').animate( { scrollTop : "0px" }, 800, "easeOutExpo");
        e.preventDefault();
        return false;
        console.log('Scroll To Top');
    }

    //////////////////
    ////SCROLL TO ELEMENT
    /////////////////
    function scrollToElement( target )
    {
        var topoffset = 138;
        var speed = 800;

        var destination = $( target ).offset().top - topoffset;

        jQuery( 'html:not(:animated), body:not(:animated)' ).animate( { scrollTop: destination}, speed, "easeOutExpo", function() {
            window.location.hash = target;
        });
        return false;

        console.log('Scroll To Element');
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

    //Works just need to create itemArray to check all items
//    $('#item3').waypoint(function() {
//        console.log('You are looking at Item3');
//    }, { offset: 138 });

    console.log('Init Spektral Projects');
});




