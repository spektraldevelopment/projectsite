$(document).ready(function(){

    //Self executing function that stops default url bar behaviour when dealing with hash tags
    ( function( $ ) {
        $( 'a[href="#"]' ).click( function(e) {
            e.preventDefault();
        } );

        $(window).hashchange( function(e) {
            e.preventDefault();
        } );
    } )( jQuery );

    //Vars
    var listItem = window.location.hash;
    var logo = document.getElementById('logo');
    var projectsTitle = document.getElementById('projectsTitle');

    var projectDataArray = [];
    var itemArray = [];

    var newProjectList;

    var newBodyY = 0;

    var listTopOffset = 138;

    var currentHistoryState;

    var glowTween;

    //AddEventListeners
    attachEventListener(logo, 'click', scrollToTop);
    attachEventListener(projectsTitle, 'click', scrollToTop);

    attachEventListener(logo, 'mouseover', highlightText);
    attachEventListener(projectsTitle, 'mouseover', highlightText);

    attachEventListener(logo, 'mouseout', removeTextGlow);
    attachEventListener(projectsTitle, 'mouseout', removeTextGlow);

    //Initialize Functions
    //getHistoryState(true);
    parseJSON();
    initCopyright();
    initGitActivity();

    //////////////////
    ////GET HISTORY STATE
    //////////////////
    function getHistoryState(firstTime)
    {
        firstTime = firstTime || false;

        var currentHistoryState = History.getState();
        if(firstTime)
        {
            History.log('Initial History State:', currentHistoryState.data, currentHistoryState.title, currentHistoryState.url);
        } else {
            History.log('Current History State:', currentHistoryState.data, currentHistoryState.title, currentHistoryState.url);
        }
    }

    //////////////////
    ////PARSE JSON
    /////////////////
    function parseJSON()
    {
        $.each(jsonFile, function(key, val) {
            projectDataArray = val;
        });

        buildList();

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

        var currentHashY = 0;

        try
        {
            currentHashY = $(listItem).position().top - listTopOffset;
            console.log("CurrentY: " + currentHashY);
        } catch(err)
        {
            console.log("currentHashY not set yet.");
        }


        //Detects a hash change in order to
        //prevent
        $(window).hashchange( function(e)
        {
            //This prevents the element from jumping to top by default
            //var newHashY = $(location.hash).position().top - listTopOffset;
           // console.log("NEW HASH Y: " + newHashY);

            window.scrollTo(0, currentHashY);//Do I still need this?

            var hash = window.location.hash.substring(1);
            var newTag = document.getElementById(hash);

            currentHashY = $(newTag).position().top - listTopOffset;

            scrollToElement(newTag);
            console.log("Hash Change: " + location.hash);

            //Not sure if these are needed. Will determine at a later date.
            e.preventDefault();
           //e.returnValue = false;
            return false;
        })
    }

    ////////////////////
    ////SET LIST HEIGHT
    ////////////////////
    function setListHeight()
    {
        //var listHeight = getViewportHeight();
        //console.log("List Height: " + listHeight);
        var currentListHeight = $('#projectList').height();
        var itemY = $('#projectList li:last-child').position().top;
        var itemHeight = $('#projectList li:last-child').height();
        var itemBottomY = itemY + itemHeight;
        var bodyHeight = $('body').height();
        var viewportHeight = getViewportHeight();

//        console.log(
//            "Current List Height: " + currentListHeight
//          + " itemBottomY: " + itemBottomY
//          + " bodyHeight: " + bodyHeight
//          + " viewport Height: " + viewportHeight
//          + " itemY: " + itemY
//          + " itemHeight: " + itemHeight);

        //Calculate the new list height in order to scroll the last item to the proper spot.
        console.log("(viewportHeight - listTopOffset): " + (viewportHeight - listTopOffset));

        var newListHeight = (bodyHeight + viewportHeight) - (320 + listTopOffset);
        projectList.setAttribute("style", "height:" + newListHeight + "px");
    }

    //////////////////
    /////ON WINDOW RESIZE
    //////////////////
    function onWindowResize()
    {
        //console.log("Window resize!!!");
        //setTimeout(setListHeight, 100);//Doesn't work because setListHeight gets current body height - will fix
    }

    //////////////////
    /////UPDATE HISTORY
    /////Updates browser history so if you hit back it scrolls to the previous project
    /////This could be annoying for some users, but I'm going to try it out anyway.
    /////////////////
    function updateHistory(item)
    {
        //getHistoryState();
        item = item || null;

        var stateTitle = "It's Spektral Development!";//item.childNodes[0].innerHTML
        var stateUrl = "#" + item.id;

        console.log("Update History: stateTitle: " + stateTitle + " stateURL: " + stateUrl);
        //pushState(data, title, url)
        History.pushState(null , stateTitle, stateUrl);
        getHistoryState();
    }

    //////////////////
    ////BUILD LIST
    ////If js is enabled we want to build a dynamic list via JSON data: js/site.json.
    /////////////////
    function buildList()
    {
        var listSection = document.getElementById('listSection');

        var projectList = document.createElement('ul');//
        projectList.id = 'projectList';
        listSection.appendChild(projectList);

        newProjectList = projectList;

        for(var i = 0; i < projectDataArray.length; i++)
        {
            buildListItem(i, projectDataArray[i]);
        }

       // setWayPoints();
        checkForHash();
        setListHeight();

        attachEventListener(window, "resize", onWindowResize);

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
        listItem.appendChild(title);

        var image = document.createElement('img');
        image.src = data.thumb;
        listItem.appendChild(image);

        var para = document.createElement('p');
        para.innerHTML = data.desc;
        listItem.appendChild(para);

        var link = document.createElement('a');
        link.href = data.url;
        link.innerHTML = "GO";
        listItem.appendChild(link);

        attachEventListener(link, 'mouseover', highlightLink);
        attachEventListener(link, 'mouseout', removeHighlight);

        if(id === 0)
        {
           link.setAttribute("style", "visibility: hidden");
        }

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
        try
        {
        $('#gitActivity').FeedEk({
            FeedUrl : 'https://github.com/spektraldevelopment.atom?=' + Math.random(),
            MaxCount : 1,
            ShowDesc : false,
            ShowPubDate:false,
            DescCharacterLimit:100
        });
        } catch (e) {}
    }

    //////////////////
    ////SCROLL TO TOP
    /////////////////
    function scrollToTop(e)
    {
        scrollToElement('#' + projectDataArray[0].hash);
    }

    //////////////////
    ////SCROLL TO ELEMENT
    /////////////////
    function scrollToElement( target )
    {
        var docState;

        checkDocReady();

        function checkDocReady()
        {
            docState = document.readyState;
            console.log("checkDocReady: " + docState);

            if(docState !== 'complete')
            {
                setTimeout(checkDocReady, 100)
            } else {
                var itemPos = $(target).position().top - listTopOffset;
                TweenLite.to(window, 1.5, {scrollTo:{y:itemPos}, ease: Expo.easeOut, onComplete: scrollComplete, onCompleteParams:[target]});
            }
        }

        return false;
    }

    function scrollComplete(item)
    {
        //updateHistory(item);
    }

    //////////////////
    ////HIGHLIGHT TEXT
    /////////////////
    function highlightText()
    {
        glowTween = TweenLite.to(this, .2, {
            textShadow:"2px 2px 15px rgba(255, 255, 255, 1)"
        });
    }

    //////////////////
    ////REMOVE TEXT GLOW
    /////////////////
    function removeTextGlow()
    {
        glowTween.reverse();
    }

    //////////////////////
    ////HIGHLIGHT LINK
    //////////////////////
    function highlightLink()
    {
        glowTween = TweenLite.to(this, .2, {
            boxShadow: "0px 0px 25px 2px rgba(235, 127, 0, 1)",
            backgroundColor:"#eb7f00"
        });
    }

    /////////////////////
    ////REMOVE HIGHLIGHT
    /////////////////////
    function removeHighlight()
    {
        glowTween.reverse();
    }

    //////////////////
    ////ATTACH EVENT LISTENER
    /////////////////
    function attachEventListener(eventTarget, eventType, eventHandler)
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

    /////////////////////
    ////SET WAY POINTS
    /////////////////////
    function setWayPoints()
    {
        for (var i = 0; i < itemArray.length; i++)
        {
            //$(itemArray[i]).waypoint(checkForItem, { offset: function() { return -$(this).height() + listTopOffset } });
            $(itemArray[i]).waypoint(checkForItem);
        }
    }

    ///////////////////////////////////
    ////CHECK FOR ITEM
    ///////////////////////////////////
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

    ////////////////////////////
    ////GET VIEWPORT HEIGHT
    ////////////////////////////
    function getViewportHeight()
    {
        if (window.innerHeight)
        {
            return window.innerHeight;
        }
        else if (document.body && document.body.offsetHeight)
        {
            return document.body.offsetHeight;
        }
        else
        {
            return 0;
        }
    }

    console.log('Init Spektral Projects');
});



