/*jslint browser: true*/
/*global $, jQuery*/
$(document).ready(function () {
    'use strict';

    //Self executing function that stops default url bar behaviour when dealing with hash tags
    (function ($) {
        $('a[href="#"]').click(function (e) {
            cancelEvent(e);
        });

        $(window).hashchange(function (e) {
            cancelEvent(e);
        });
    }(jQuery));

    //Vars
    var main = window,
        listItem = window.location.hash,
        logo = document.getElementById('logo'),
        projectsTitle = document.getElementById('projectsTitle'),
        projectDataArray = [],
        itemArray = [],
        listTopOffset = 140,
        newProjectList,
        newListHeight,
        glowTween,
        VIEWPORT_WIDTH,
        VIEWPORT_HEIGHT,
        DEFAULT_PHONE_WIDTH = 496,
        currentItem = 0;

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
        $.each(main.jsonFile, function (key, val) {
            projectDataArray = val;
        });

        buildList();

        console.log("Parse JSON");
    }

    //////////////////
    ////CHECK FOR HASH
    //////////////////
    function checkForHash() {
        if (listItem) {
            var projectHash, i;

            for (i = 0; i < projectDataArray.length; i++) {
                projectHash = "#" + projectDataArray[i].hash;

                //Check if hashtag is valid
                if(listItem === projectHash) {
                    console.log("Hash Found: " + listItem);
                    currentItem = $(listItem).index();
                    scrollToElement(listItem);
                    //Check if non-interactive should be set to true or false
                    gaEvent("Project Site", "Hash Used", "First time load, hash tag used: " + listItem, 0, true);
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

            var hash = window.location.hash.substring(1), newTag = document.getElementById(hash);

            currentHashY = $(newTag).position().top - listTopOffset;

            scrollToElement(newTag);

            console.log("Hash Change: " + location.hash);
            gaEvent("Project Site", "Hash Change", "Hash was changed to: " + location.hash, 0, true);

            cancelEvent(e);
            //return false;
        });
    }

    ////////////////////
    ////SET LIST HEIGHT
    ////////////////////
    function setListHeight() {
        var projectList = $('#projectList'),
            lastItem = projectList.find('li:last-child'),
            currentListHeight = projectList.height(),
            itemHeight = lastItem.outerHeight(),
            itemMargin = parseInt(lastItem.css('margin-bottom'), 10);

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
        var lastItem = $('#projectList').find('li:last-child'),
            itemHeight = lastItem.outerHeight(),
            itemMargin = parseInt(lastItem.css('margin-bottom'), 10),
            adjustedListHeight;

        VIEWPORT_HEIGHT = getViewportHeight();

        adjustedListHeight = newListHeight + (VIEWPORT_HEIGHT - (listTopOffset + (itemHeight + itemMargin)));
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
        var listSection = document.getElementById('listSection'),
            projectList = document.createElement('ul'),
            i;

        projectList.id = 'projectList';
        listSection.appendChild(projectList);

        newProjectList = projectList;

        for(i = 0; i < projectDataArray.length; i++) {
            buildListItem(i, projectDataArray[i]);
        }

        setWayPoints();
        checkForHash();
        $(window).load(setListHeight());
        attachEventListener(window, 'orientationchange', onWindowResize);

        console.log("Build List: " + projectDataArray.length);
    }

    //////////////////
    ////BUILD LIST ITEM
    /////////////////
    function buildListItem(id, data) {

        var listItem, title, image, para, tech, link, aTagTech, i;

        listItem = document.createElement('li');
        listItem.id = data.hash;
        newProjectList.appendChild(listItem);

        if (VIEWPORT_WIDTH <= DEFAULT_PHONE_WIDTH) {
            attachEventListener(listItem, "click", gotoURL);
            attachEventListener(listItem, "mouseover", showHandCursor);
            attachEventListener(listItem, "mouseout", hideHandCursor);
        }

        title = document.createElement('h3');
        title.innerHTML = data.title;
        listItem.appendChild(title);

        image = document.createElement('img');
        image.src = data.thumb;

        attachEventListener(image, 'error', onImageError);

        image.setAttribute("alt", data.title);
        listItem.appendChild(image);

        //Will be loading external .txt files
        para = document.createElement('p');
        para.innerHTML = descArray[id];

        listItem.appendChild(para);

        tech = document.createElement('h4');
        tech.innerHTML = "Technology: " + data.tech;
        listItem.appendChild(tech);

        link = document.createElement('a');
        link.setAttribute("class", "gotoSite");
        link.href = data.url;
        link.innerHTML = "GO";
        listItem.appendChild(link);

        attachEventListener(link, 'click', onGoClick);

        attachEventListener(link, 'mouseover', highlightLink);
        attachEventListener(link, 'mouseout', removeHighlight);

        aTagTech = document.getElementsByClassName("techLink");

        for(i =0; i < aTagTech.length; i += 1) {
            attachEventListener(aTagTech[i], 'mouseover', highlightText);
            attachEventListener(aTagTech[i], 'mouseout', removeTextGlow);
            attachEventListener(aTagTech[i], 'click', onTechLinkClick);
        }

        if (id === 0) {
           link.setAttribute("style", "visibility: hidden");
        }

        itemArray.push(listItem);
    }

    ///////////////////
    ////ON IMAGE ERROR
    ///////////////////
    function onImageError(e) {
        var image = e.target;
        image.src = "img/projects/no-image.jpg";
    }

    ///////////////////
    ////GO TO URL
    ///////////////////
    function gotoURL() {
        for(var i = 0; i < projectDataArray.length; i++) {
            if (projectDataArray[i].hash === this.id) {
                console.log("Navigating to: " + projectDataArray[i].url);
                window.location.href = projectDataArray[i].url;
                gaEvent("Project Site", "Mouse Click", "Mobile listItem clicked: url: " + projectDataArray[i].url);
            }
        }
    }

    ////////////////////
    ////ON GO CLICK
    ////////////////////
    function onGoClick(e) {
        var parentID = e.target.parentNode.id, url = e.target.href;
        gaEvent("Project Site", "Mouse Click", "GO Button: " + parentID + " url: " + url);
    }

    ////////////////////
    ////ON TECH LINK CLICK
    ////////////////////
    function onTechLinkClick(e) {
        var ID = e.target.innerHTML, url = e.target.href;
        gaEvent("Project Site", "Mouse Click", "Tech Link clicked: " + ID + " url: " + url);
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

       var d = new Date(),
           y = d.getFullYear(),
           currentYear = document.getElementById("copyright");

       currentYear.innerHTML = "Copyright &copy; " + y;
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

        var docState, itemPos;

        checkDocReady();

        function checkDocReady() {
            docState = document.readyState;
            console.log("checkDocReady: " + docState);

            if (docState !== 'complete') {
                setTimeout(checkDocReady, 100);
            } else {
                itemPos = $(target).position().top - listTopOffset;
                TweenLite.to(window, 1.5, {scrollTo:{y:itemPos}, ease: Expo.easeOut});
            }
        }
        return false;
    }

    //////////////////
    ////SCROLL TO TOP
    /////////////////
    function scrollToTop(e) {
        var hash = "#" + projectDataArray[0].hash, id = e.target.id;
        scrollToElement(hash);
        //Ex. gaEvent("Main Page", "Mouse Click", "Main Page Mouse Click", 5, true);
        gaEvent("Project Site", "Mouse Click", id + " was clicked. scrollToTop");
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

        var i, item;

        for (i = 0; i < itemArray.length; i++) {
            item = $(itemArray[i]);
            item.waypoint(checkForItem);
        }
    }

    ///////////////////////////////////
    ////CHECK FOR ITEM
    ///////////////////////////////////
    function checkForItem(e) {

        var ID = this.id;
        if (e === "down") {
            TweenLite.to(this, 0.5, { opacity: 0});
        } else {
            TweenLite.to(this, 0.5, { opacity: 1});
        }
        gaEvent("Project Site", "Waypoint Event", "Scrolled to: " + ID, null, true);
    }

    ////////////////////////////
    ////GET VIEWPORT DIMENSIONS
    ////////////////////////////
    function getViewportDimensions() {
        VIEWPORT_WIDTH = getViewportWidth();
        VIEWPORT_HEIGHT = getViewportHeight();

        if (VIEWPORT_WIDTH <= DEFAULT_PHONE_WIDTH) {
            listTopOffset = 120;//Distance from top to bottom of last listItem
        }
        console.log("Viewport: Width: " + VIEWPORT_WIDTH + " Height: " + VIEWPORT_HEIGHT);
    }

    //////////////////////////////////////
    ////ON KEYBOARD EVENT
    //////////////////////////////////////
    function onKeyboardEvent(e) {

        var key = e.keyCode;

        //UP
        if (key === 38) {
            currentItem--;
            if (currentItem <= 0)
            {
                currentItem = 0;
            }
            console.log("UP");
        }

        //DOWN
        if (key === 40) {
            currentItem++;
            if (currentItem >= itemArray.length)
            {
                currentItem = itemArray.length - 1;
            }
            console.log("DOWN");
        }

        scrollToElement(itemArray[currentItem]);
        console.log("CurrentItem: " + currentItem);

        cancelEvent(e);
    }

    function onWindowScroll() {

        var vWidth = getViewportWidth();

        if (vWidth <= 480) {
            $('header').css({ top: '0px' });
        }
    }

    function onGhBadgeClick() {
        gaEvent("Project Site", "Mouse Click", "GitHub badge clicked.");
    }

    function onLinkedInClick() {
        gaEvent("Project Site", "Mouse Click", "LinkedIn badge clicked.");
    }

    //AddEventListeners
    attachEventListener(logo, 'click', scrollToTop);
    attachEventListener(projectsTitle, 'click', scrollToTop);

    attachEventListener(logo, 'mouseover', highlightText);
    attachEventListener(projectsTitle, 'mouseover', highlightText);

    attachEventListener(logo, 'mouseout', removeTextGlow);
    attachEventListener(projectsTitle, 'mouseout', removeTextGlow);

    attachEventListener(window, 'keydown', onKeyboardEvent);

    attachEventListener(window, 'scroll', onWindowScroll);

    var ghBadge = document.getElementById("ghBadge");
    attachEventListener(ghBadge, 'click', onGhBadgeClick);

    var linkedIn = document.getElementById("linkedIn");
    attachEventListener(linkedIn, 'click', onLinkedInClick);

    //Initialize Functions
    getViewportDimensions();
    parseJSON();
    initCopyright();
    initGitActivity();

    console.log('Init Spektral Projects');
});



