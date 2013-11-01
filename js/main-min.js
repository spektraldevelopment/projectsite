/*jslint browser: true*//*global $, jQuery*/$(document).ready(function(){"use strict";function g(e){m===!0&&console.log(e)}function y(){f=TweenLite.to(this,.2,{textShadow:"2px 2px 15px rgba(255, 255, 255, 1)"})}function b(){f.reverse()}function w(){$.each(e.jsonFile,function(e,t){i=t});N();g("Parse JSON")}function E(){if(t){var e,n;for(n=0;n<i.length;n++){e="#"+i[n].hash;if(t===e){g("Hash Found: "+t);p=$(t).index();H(t);gaEvent("Project Site","Hash Used","First time load, hash tag used: "+t,0,!0)}else g("Hash invalid!")}}else g("No Hash Found!");var r=0;try{r=$(t).position().top-o;g("CurrentY: "+r)}catch(s){g("currentHashY not set yet.")}$(window).hashchange(function(e){window.scrollTo(0,r);var t=window.location.hash.substring(1),n=document.getElementById(t);r=$(n).position().top-o;H(n);g("Hash Change: "+location.hash);gaEvent("Project Site","Hash Change","Hash was changed to: "+location.hash,0,!0);cancelEvent(e)})}function S(){var e=$("#projectList"),t=e.find("li:last-child"),n=e.height(),r=t.outerHeight(),i=parseInt(t.css("margin-bottom"),10);a=n+(c-(o+(r+i)));u.setAttribute("style","height:"+a+"px");attachEventListener(window,"resize",T)}function x(){var e=$("#projectList").find("li:last-child"),t=e.outerHeight(),n=parseInt(e.css("margin-bottom"),10),r;c=getViewportHeight();r=a+(c-(o+(t+n)));u.setAttribute("style","height:"+r+"px")}function T(){x()}function N(){var e=document.getElementById("listSection"),t=document.createElement("ul"),n;t.id="projectList";e.appendChild(t);u=t;for(n=0;n<i.length;n++)C(n,i[n]);I();E();$(window).load(S());attachEventListener(window,"orientationchange",T);g("Build List: "+i.length)}function C(e,t){var n,r,i,o,a,f,c,p;n=document.createElement("li");n.id=t.hash;u.appendChild(n);if(l<=h){attachEventListener(n,"click",L);attachEventListener(n,"mouseover",M);attachEventListener(n,"mouseout",_)}r=document.createElement("h3");r.innerHTML=t.title;n.appendChild(r);i=document.createElement("img");i.src=t.thumb;attachEventListener(i,"error",k);i.setAttribute("alt",t.title);n.appendChild(i);o=document.createElement("p");o.innerHTML=descArray[e];n.appendChild(o);a=document.createElement("h4");a.innerHTML="Technology: "+t.tech;n.appendChild(a);f=document.createElement("a");f.setAttribute("class","gotoSite");f.href=t.url;f.innerHTML="GO";n.appendChild(f);attachEventListener(f,"click",A);attachEventListener(f,"mouseover",j);attachEventListener(f,"mouseout",F);c=document.getElementsByClassName("techLink");for(p=0;p<c.length;p+=1){attachEventListener(c[p],"mouseover",y);attachEventListener(c[p],"mouseout",b);attachEventListener(c[p],"click",O)}e===0&&f.setAttribute("style","visibility: hidden");s.push(n)}function k(e){var t=e.target;t.src="img/projects/no-image.jpg"}function L(){for(var e=0;e<i.length;e++)if(i[e].hash===this.id){g("Navigating to: "+i[e].url);window.location.href=i[e].url;gaEvent("Project Site","Mouse Click","Mobile listItem clicked: url: "+i[e].url)}}function A(e){g("GO");var t=e.target.parentNode.id,n=e.target.href;gaEvent("Project Site","Mouse Click","GO Button: "+t+" url: "+n);cancelEvent(e)}function O(e){var t=e.target.innerHTML,n=e.target.href;gaEvent("Project Site","Mouse Click","Tech Link clicked: "+t+" url: "+n)}function M(){this.setAttribute("style","cursor: pointer")}function _(){this.setAttribute("style","cursor: default")}function D(){var e=new Date,t=e.getFullYear(),n=document.getElementById("copyright");n.innerHTML="Copyright &copy; "+t}function P(){try{$("#gitActivity").FeedEk({FeedUrl:"https://github.com/spektraldevelopment.atom?="+Math.random(),MaxCount:1,ShowDesc:!1,ShowPubDate:!1,DescCharacterLimit:100})}catch(e){}}function H(e){function r(){t=document.readyState;g("checkDocReady: "+t);if(t!=="complete")setTimeout(r,100);else{n=$(e).position().top-o;TweenLite.to(window,1.5,{scrollTo:{y:n},ease:Expo.easeOut})}}var t,n;r();return!1}function B(e){var t="#"+i[0].hash,n=e.target.id;H(t);gaEvent("Project Site","Mouse Click",n+" was clicked. scrollToTop")}function j(){f=TweenLite.to(this,.2,{boxShadow:"0px 0px 25px 2px rgba(235, 127, 0, 1)",backgroundColor:"#eb7f00"})}function F(){f.reverse()}function I(){var e,t;for(e=0;e<s.length;e++){t=$(s[e]);t.waypoint(q)}}function q(e){var t=this.id;e==="down"?TweenLite.to(this,.5,{opacity:0}):TweenLite.to(this,.5,{opacity:1});gaEvent("Project Site","Waypoint Event","Scrolled to: "+t,null,!0)}function R(){l=getViewportWidth();c=getViewportHeight();l<=h&&(o=120);g("Viewport: Width: "+l+" Height: "+c)}function U(e){var t=e.keyCode;if(t===38){p--;p<=0&&(p=0);g("UP")}if(t===40){p++;p>=s.length&&(p=s.length-1);g("DOWN")}H(s[p]);g("CurrentItem: "+p);cancelEvent(e)}function z(){var e=getViewportWidth();e<=480&&$("header").css({top:"0px"})}function W(){gaEvent("Project Site","Mouse Click","GitHub badge clicked.")}function X(){gaEvent("Project Site","Mouse Click","LinkedIn badge clicked.")}(function(e){e('a[href="#"]').click(function(e){cancelEvent(e)});e(window).hashchange(function(e){cancelEvent(e)})})(jQuery);var e=window,t=window.location.hash,n=document.getElementById("logo"),r=document.getElementById("projectsTitle"),i=[],s=[],o=140,u,a,f,l,c,h=496,p=0,d=document.getElementById("ghBadge"),v=document.getElementById("linkedIn"),m=!1;attachEventListener(n,"click",B);attachEventListener(r,"click",B);attachEventListener(n,"mouseover",y);attachEventListener(r,"mouseover",y);attachEventListener(n,"mouseout",b);attachEventListener(r,"mouseout",b);attachEventListener(window,"keydown",U);attachEventListener(window,"scroll",z);attachEventListener(d,"click",W);attachEventListener(v,"click",X);R();w();D();P();g("Init Spektral Projects")});