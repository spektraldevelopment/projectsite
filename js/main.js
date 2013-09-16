$(document).ready(function () {
    'use strict';

    //Self executing function that stops default url bar behaviour when dealing with hash tags
    (function ($) {
        $('a[href="#"]').click(function (e) {
            e.preventDefault();
        });

        $(window).hashchange(function (e) {
            e.preventDefault();
        });
    }(jQuery));

    //Vars
    var main, listItem, logo, projectsTitle, projectDataArray, itemArray, listTopOffset,
        newProjectList, newListHeight, glowTween, VIEWPORT_WIDTH, VIEWPORT_HEIGHT, DEFAULT_PHONE_WIDTH;

    main = window;

    listItem = window.location.hash;
    logo = document.getElementById('logo');
    projectsTitle = document.getElementById('projectsTitle');

    projectDataArray = [];
    itemArray = [];

    listTopOffset = 140;

    DEFAULT_PHONE_WIDTH = 496;//480 + 16;

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
    ////HIGHLIGHT TEXT
    /////////////////
    function highlightText() {
        glowTween = TweenLite.to(this, 0.2, {
            textShadow: "2px 2px 15px rgba(255, 255, 255, 1)"
        });
    }

    //////////////////
    ////REMOVE TEXT GLOW
    /////////////////
    function removeTextGlow() {
        glowTween.reverse();
    }

    //////////////////
    ////PARSE JSON
    /////////////////
    function parseJSON() {
        $.each(main.jsonFile, function(key, val) {
            projectDataArray = val;
        });

        buildList();

        console.log("Parse JSON");
    }

    //////////////////
    ////CHECK FOR HASH
    //////////////////
    function checkForHash() {
        if(listItem) {
            var projectHash;

            for (var i = 0; i < projectDataArray.length; i++) {
                projectHash = "#" + projectDataArray[i].hash;

                //Check if hashtag is valid
                if(listItem === projectHash) {
                    console.log("Hash Found: " + listItem);
                    scrollToElement(listItem);
                } else { console.log("Hash invalid!"); }
            }
        } else {
            console.log("No Hash Found!");
        }

        var currentHashY = 0;

        try {
            currentHashY = $(listItem).position().top - listTopOffset;
            console.log("CurrentY: " + currentHashY);
        } catch(err) {
            console.log("currentHashY not set yet.");
        }

        //Detects a hash change in order to
        //prevent
        $(window).hashchange(function (e) {
            window.scrollTo(0, currentHashY);//Prevents element from jumping to top

            var hash = window.location.hash.substring(1);
            var newTag = document.getElementById(hash);

            currentHashY = $(newTag).position().top - listTopOffset;

            scrollToElement(newTag);

            console.log("Hash Change: " + location.hash);

            e.preventDefault();
            return false;
        });
    }

    ////////////////////
    ////SET LIST HEIGHT
    ////////////////////
    function setListHeight() {
        var lastItem = $('#projectList li:last-child');

        var currentListHeight = $('#projectList').height();
        var itemHeight = lastItem.outerHeight();
        var itemMargin = parseInt(lastItem.css('margin-bottom'), 10);

        newListHeight = currentListHeight + (VIEWPORT_HEIGHT - (listTopOffset + (itemHeight + itemMargin)));
        newProjectList.setAttribute("style", "height:" + newListHeight + "px");

        //Check if window gets resized
        attachEventListener(window, "resize", onWindowResize);
    }

    ////////////////////
    ////RESET LIST HEIGHT
    ///////////////////
    function resetListHeight() {
        //The item height and item margin don't change so I might make them a global var and set them once
        //To save processor time
        var itemHeight = $('#projectList li:last-child').outerHeight();
        var itemMargin = parseInt($('#projectList li:last-child').css('margin-bottom'), 10);
        VIEWPORT_HEIGHT = getViewportHeight();

        var adjustedListHeight = newListHeight + (VIEWPORT_HEIGHT - (listTopOffset + (itemHeight + itemMargin)));
        newProjectList.setAttribute("style", "height:" + adjustedListHeight + "px");
    }

    //////////////////
    /////ON WINDOW RESIZE
    //////////////////
    function onWindowResize() {
        resetListHeight();
    }

    //////////////////
    ////BUILD LIST
    ////If js is enabled we want to build a dynamic list via JSON data: js/site.json.
    /////////////////
    function buildList() {
        var listSection = document.getElementById('listSection');

        var projectList = document.createElement('ul');//
        projectList.id = 'projectList';
        listSection.appendChild(projectList);

        newProjectList = projectList;

        for(var i = 0; i < projectDataArray.length; i++) {
            buildListItem(i, projectDataArray[i]);
        }

        setWayPoints();
        checkForHash();
        $(window).load(setListHeight());

        console.log("Build List: " + projectDataArray.length);
    }

    //////////////////
    ////BUILD LIST ITEM
    /////////////////
    function buildListItem(id, data) {
        var listItem = document.createElement('li');
        listItem.id = data.hash;
        newProjectList.appendChild(listItem);

        if(VIEWPORT_WIDTH <= DEFAULT_PHONE_WIDTH) {
            attachEventListener(listItem, "click", gotoURL);
            attachEventListener(listItem, "mouseover", showHandCursor);
            attachEventListener(listItem, "mouseout", hideHandCursor);
        }

        var title = document.createElement('h3');
        title.innerHTML = data.title;
        listItem.appendChild(title);

        var image = document.createElement('img');
        image.src = data.thumb;
        image.setAttribute("alt", data.title);
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

        if(id === 0) {
           link.setAttribute("style", "visibility: hidden");
        }

        itemArray.push(listItem);
    }

    ///////////////////
    ////GO TO URL
    ///////////////////
    function gotoURL() {
        for(var i = 0; i < projectDataArray.length; i++) {
            if(projectDataArray[i].hash === this.id) {
                console.log("Navigating to: " + projectDataArray[i].url);
                window.location.href = projectDataArray[i].url;
            }
        }
    }

    ///////////////////
    ////SHOW HAND CURSOR
    ///////////////////
    function showHandCursor() {
        this.setAttribute("style", "cursor: pointer");
    }

    /////////////////////
    ////HIDE HAND CURSOR
    ////////////////////
    function hideHandCursor() {
        this.setAttribute("style", "cursor: default");
    }


    //////////////////
    ////INIT COPYRIGHT
    /////////////////
    function initCopyright() {
       var d = new Date();
       var y = d.getFullYear();

       var currentYear = document.getElementById("copyright");
       var copyString = "Copyright &copy; " + y;
       currentYear.innerHTML = copyString;
    }

    //////////////////
    ////INIT GIT ACTIVITY
    /////////////////
    function initGitActivity() {
        try{
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
    ////SCROLL TO ELEMENT
    /////////////////
    function scrollToElement(target) {
        var docState;

        checkDocReady();

        function checkDocReady() {
            docState = document.readyState;
            console.log("checkDocReady: " + docState);

            if(docState !== 'complete') {
                setTimeout(checkDocReady, 100);
            } else {
                var itemPos = $(target).position().top - listTopOffset;
                TweenLite.to(window, 1.5, {scrollTo:{y:itemPos}, ease: Expo.easeOut});
            }
        }
        return false;
    }

    //////////////////
    ////SCROLL TO TOP
    /////////////////
    function scrollToTop() {
        scrollToElement('#' + projectDataArray[0].hash);
    }

    //////////////////////
    ////HIGHLIGHT LINK
    //////////////////////
    function highlightLink() {
        glowTween = TweenLite.to(this, 0.2, {
            boxShadow: "0px 0px 25px 2px rgba(235, 127, 0, 1)",
            backgroundColor:"#eb7f00"
        });
    }

    /////////////////////
    ////REMOVE HIGHLIGHT
    /////////////////////
    function removeHighlight() {
        glowTween.reverse();
    }

    /////////////////////
    ////SET WAY POINTS
    /////////////////////
    function setWayPoints() {
        for (var i = 0; i < itemArray.length; i++) {
            var item = $(itemArray[i]);
            item.waypoint(checkForItem);
        }
    }

    ///////////////////////////////////
    ////CHECK FOR ITEM
    ///////////////////////////////////
    function checkForItem(e) {
        if(e === "down") {
            TweenLite.to(this, 0.5, { opacity: 0});
        } else {
            TweenLite.to(this, 0.5, { opacity: 1});
        }
        //console.log("Waypoint Hit: " + e + " ID: " + this.id + " TOP: " + $(this).offset().top);
    }

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

    ////////////////////////////
    ////GET VIEWPORT DIMENSIONS
    ////////////////////////////
    function getViewportDimensions() {
        VIEWPORT_WIDTH = getViewportWidth();
        VIEWPORT_HEIGHT = getViewportHeight();

        if(VIEWPORT_WIDTH <= DEFAULT_PHONE_WIDTH) {
            listTopOffset = 120;//Distance from top to bottom of last listItem
        }
        console.log("Viewport: Width: " + VIEWPORT_WIDTH + " Height: " + VIEWPORT_HEIGHT);
    }

    //AddEventListeners
    attachEventListener(logo, 'click', scrollToTop);
    attachEventListener(projectsTitle, 'click', scrollToTop);

    attachEventListener(logo, 'mouseover', highlightText);
    attachEventListener(projectsTitle, 'mouseover', highlightText);

    attachEventListener(logo, 'mouseout', removeTextGlow);
    attachEventListener(projectsTitle, 'mouseout', removeTextGlow);

    //Initialize Functions
    getViewportDimensions();
    parseJSON();
    initCopyright();
    initGitActivity();

    console.log('Init Spektral Projects');
});



