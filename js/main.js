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

    //AddEventListeners
    listenEvent(logo, 'click', scrollToTop);
    listenEvent(projectsTitle, 'click', scrollToTop);

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

    //////////////////
    /////UPDATE HISTORY
    /////Updates browser history so if you hit back it scrolls to the previous project
    /////This could be annoying for some users, but I'm going to try it out anyway.
    /////////////////
    function updateHistory(item)
    {
        //getHistoryState();
        item = item || null;

        var stateTitle = item.childNodes[0].innerHTML;
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

        var projectList = document.createElement('ul');
        projectList.id = 'projectList';
        listSection.appendChild(projectList);

        newProjectList = projectList;

        for(var i = 0; i < projectDataArray.length; i++)
        {
            buildListItem(i, projectDataArray[i]);
        }

        setWayPoints();
        checkForHash();

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
        updateHistory(item);
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




