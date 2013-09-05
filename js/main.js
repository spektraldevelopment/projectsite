$(document).ready(function(){

    //Vars
    var listItem = window.location.hash;
    var logo = document.getElementById('logo');
    var projectsTitle = document.getElementById('projectsTitle');

    var projectDataArray = [];
    var itemArray = [];

    var newProjectList;

    var newBodyY = 0;

    var listTopOffset = 138;

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
                projectDataArray = val;
            });

            buildList();

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
//            if(history.pushState)
//            {
//                history.pushState(null, null, listItem);
//            }

            var projectHash;

            for (var i =0; i < projectDataArray.length; i++)
            {
                projectHash = "#" + projectDataArray[i].hash;

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
            console.log("No Hash Found!");
        }
        //Detects a hash change in order to
        //prevent
        $(window).hashchange( function(e)
        {
            //This prevents the element from jumping to top by default
            //window.scrollTo(0, newBodyY);

            var hash = window.location.hash.substring(1);
            var newTag = document.getElementById(hash);

            scrollToElement(newTag);
            console.log("Hash Change: " + location.hash);

            //Not sure if these are needed. Will determine at a later date.
            e.preventDefault();
            e.returnValue = false;
            return false;
        })
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

        for(var i = 0; i < projectDataArray.length; i++)
        {
            buildListItem(i, projectDataArray[i]);
        }

        checkForHash();
        setWayPoints();

        console.log("Build List: " + projectDataArray.length);
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

        itemArray.push(listItem);
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
    function scrollToTop(e)
    {
        scrollToElement('#' + projectDataArray[0].hash);
        e.preventDefault();
    }

    //////////////////
    ////SCROLL TO ELEMENT
    /////////////////
    function scrollToElement( target )
    {
        var itemPos = $(target).position().top - listTopOffset;

        TweenLite.to(window, 1, {scrollTo:{y:itemPos}, ease: Expo.easeOut});

        return false;
    }

    function scrollComplete()
    {
        newBodyY = document.body.scrollTop;
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

    function setWayPoints()
    {
        for (var i = 0; i < itemArray.length; i++)
        {
            //$(itemArray[i]).waypoint(checkForItem, { offset: function() { return -$(this).height() + listTopOffset } });
            $(itemArray[i]).waypoint(checkForItem);
        }
    }

    function checkForItem(e)
    {
        if(e === "down")
        {
            TweenLite.to(this, .5, { opacity: 0});
        }
        else
        {
            TweenLite.to(this, .5, { opacity: 1});
        }
        //console.log("Waypoint Hit: " + e + " ID: " + this.id + " TOP: " + $(this).offset().top);
    }
    console.log('Init Spektral Projects');
});




