$(document).ready(function(){

    //Vars
    var listItem = window.location.hash;
    var logo = document.getElementById('logo');
    var projectsTitle = document.getElementById('projectsTitle');

    var projectListArray = [];

    var newProjectList;

    //AddEventListeners
    listenEvent(logo, 'click', scrollToTop);
    listenEvent(projectsTitle, 'click', scrollToTop);

    //Initialize Functions
    parseJSON();
    initCopyright();
    initGitActivity();

    //////////////////
    ////PARSE JSON
    /////////////////
    function parseJSON()
    {
        // Assign handlers immediately after making the request,
        // and remember the jqxhr object for this request

        var jqxhr = $.getJSON( "js/site.json", function(data)
        {

            $.each(data, function(key, val) {
                projectListArray = val;
            });

            buildList();
            checkForHash();

            console.log( "success" );
        })
        .done(function() { 'done' })
        .fail(function( jqxhr, textStatus, error )
        {
            var err = textStatus + ', ' + error;
            console.log( "Request Failed: " + err);
        })
        .always(function() { console.log( "complete" ); });

        // perform other work here ...

        // Set another completion function for the request above
        jqxhr.complete(function() { console.log( "second complete" ); });

        console.log("Parse JSON");
    }

    //////////////////
    ////CHECK FOR HASH
    //////////////////
    function checkForHash()
    {
        if(listItem)
        {
            var projectHash;

            for (i =0; i < projectListArray.length; i++)
            {
                projectHash = "#" + projectListArray[i].hash;

                //Check if hashtag is valid
                if(listItem === projectHash)
                {
                    console.log("Hash Found: " + listItem);
                    scrollToElement(listItem);
                }
                else { console.log("Hash invalid!"); }
            }
        }
        else
        {
            //takes care of Chrome scroll position feature when
            //user refreshes the page by hitting enter in the url field
            //scrollTo(0, 0);
            console.log("No Hash Found!");
        }
    }

    //////////////////
    ////BUILD LIST
    ////If js is enabled we want to build a dynamic list via JSON data: js/site.json.
    /////////////////
    function buildList()
    {
        var listSection = document.getElementById('listSection');

        var projectList = document.createElement('ul');
        projectList.id = 'projectList';
        listSection.appendChild(projectList);

        newProjectList = projectList;

        for(i = 0; i < projectListArray.length; i++)
        {
            buildListItem(i, projectListArray[i]);
        }

        console.log("Build List: " + projectListArray.length);
    }

    //////////////////
    ////BUILD LIST ITEM
    /////////////////
    function buildListItem(id, data)
    {
        var listItem = document.createElement('li');
        listItem.id = data.hash;
        newProjectList.appendChild(listItem);

        var title = document.createElement('h3');
        title.innerHTML = data.title;

        var image = document.createElement('img');
        image.src = data.thumb;

        var para = document.createElement('p');
        para.innerHTML = data.desc;

        var link = document.createElement('a');
        link.href = data.url;
        link.innerHTML = "GO";

        listItem.appendChild(title);
        listItem.appendChild(image);
        listItem.appendChild(para);
        listItem.appendChild(link);
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
    ////INIT GIT ACTIVITY
    /////////////////
    function initGitActivity()
    {
        $('#gitActivity').FeedEk({
            FeedUrl : 'https://github.com/spektraldevelopment.atom?=' + Math.random(),
            MaxCount : 1,
            ShowDesc : false,
            ShowPubDate:false,
            DescCharacterLimit:100
        });
    }

    //////////////////
    ////SCROLL TO TOP
    /////////////////
    function scrollToTop()
    {
        scrollToElement('#' + projectListArray[0].hash);
//        $('html:not(:animated), body:not(:animated)').animate( { scrollTop : "0px" }, 800, "easeOutExpo");
//        e.preventDefault();
//        return false;
        console.log('Scroll To Top');
    }

    //////////////////
    ////SCROLL TO ELEMENT
    /////////////////
    function scrollToElement( target )
    {
        console.log('SCROLL TO ELEMENT: ' + target);

        var topoffset = 138;
        var speed = 800;

        var destination = $( target ).offset().top - topoffset;

        $("html, body").scrollTo( target, speed, { easing:'easeOutExpo', offset:{ top:-(topoffset)} } );

//        jQuery( 'html:not(:animated), body:not(:animated)' ).animate( { scrollTop: destination}, speed, "easeOutExpo", function() {
//            ///window.location.hash = target;
//            console.log("Scroll complete!");
//        });
//        return false;
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




