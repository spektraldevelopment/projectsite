// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];

    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--)
    {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method])
        {
            console[method] = noop;
        }
    }

    /*##########################################################################################*/
    /*! jQuery UI - v1.10.3 - 2013-08-19
     * http://jqueryui.com
     * Includes: jquery.ui.effect.js
     * Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

    //This version only contains ui-effects!
    (function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[c[l].cache]=o[c[l].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,o,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,h],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),a=c[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],l=s[a],c=u[n.type]||{};null!==l&&(null===o?h[a]=l:(c.mod&&(l-o>c.mod/2?o+=c.mod:o-l>c.mod/2&&(o-=c.mod)),h[a]=i((l-o)*e+o,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[o]=d,n):l(d)},f(a,function(e,i){l.fn[e]||(l.fn[e]=function(n){var a,o=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=l(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var h=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,a,o,r){return"boolean"==typeof n||n===e?a?t.effects.animateClass.call(this,n?{add:s}:{remove:s},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.3",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,a;for(a=0;s.length>a;a++)null!==s[a]&&(n=t.data(i+s[a]),n===e&&(n=""),t.css(s[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):o.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery);

    /*##########################################################################################*/
    // Generated by CoffeeScript 1.6.2
    /*
     jQuery Waypoints - v2.0.3
     Copyright (c) 2011-2013 Caleb Troughton
     Dual licensed under the MIT license and GPL license.
     https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
     */
    (function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);

    /*##########################################################################################*/
    /* FeedEk jQuery RSS/ATOM Feed Plugin v1.1.2
     *  http://jquery-plugins.net/FeedEk/FeedEk.html
     *  Author : Engin KIZIL http://www.enginkizil.com
     *  http://opensource.org/licenses/mit-license.php
     */

    (function ($) {
        $.fn.FeedEk = function (opt) {
            var def = $.extend({
                FeedUrl: "http://rss.cnn.com/rss/edition.rss",
                MaxCount: 5,
                ShowDesc: true,
                ShowPubDate: true,
                CharacterLimit: 0,
                TitleLinkTarget: "_blank"
            }, opt);

            var id = $(this).attr("id");
            var i;
//            $("#" + id).empty().append('<img src="img/loader.gif" />');
            $.ajax({
                url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + def.MaxCount + "&output=json&q=" + encodeURIComponent(def.FeedUrl) + "&hl=en&callback=?",
                dataType: "json",
                success: function (data)
                {

                    $("#" + id).empty();
                    var s = "";
                    $.each(data.responseData.feed.entries, function (e, item)
                    {
                        s += item.title + " @ " + item.publishedDate;
//                        console.log(JSON.stringify(item));

                          //I was trying to display the commit message but decided to move on to some more important.

//                        console.log(item.content);
//
//                        var content = $.parseHTML(item.content);
//
//                        var blockOfInterest = $.parseHTML(content[7].innerHTML);
//
//                        for(i = 0; i < blockOfInterest.length; i++)
//                        {
//                            console.log("blockOfInterest: " + i + ": " + blockOfInterest[i].innerHTML);
//
//                        }

//                        console.log("AHAHAHAHHA: " + content.length);

//                        var element = document.getElementById("div1");
//                        element.appendChild(para);

                          //This is part of the origninal plugin, but I'm not using it at the moment.
//                        if (def.ShowPubDate)
//                        {
//                            i = new Date(item.publishedDate);
//                            s += '<div class="itemDate">' + i.toLocaleDateString() + "</div>";
//                        }
//                        if (def.ShowDesc)
//                        {
//                            if (def.DescCharacterLimit > 0 && item.content.length > def.DescCharacterLimit)
//                            {
//                                s += '<div class="itemContent">' + item.content.substr(0, def.DescCharacterLimit) + "...</div>";
//                            }
//                            else
//                            {
//                                s += '<div class="itemContent">' + item.content + "</div>";
//                            }
//                        }con
                    });
                    $("#" + id).append('GitHub Activity: ' + s);
                ////////////////////////////////////////////////
                }
            });
        };
    })(jQuery);

    /*##########################################################################################*/
    /*!
     * jQuery.ScrollTo
     * Copyright (c) 2007-2013 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
     * Dual licensed under MIT and GPL.
     *
     * @projectDescription Easy element scrolling using jQuery.
     * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
     * @author Ariel Flesler
     * @version 1.4.6
     *
     * @id jQuery.scrollTo
     * @id jQuery.fn.scrollTo
     * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
     *	  The different options for target are:
     *		- A number position (will be applied to all axes).
     *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
     *		- A jQuery/DOM element ( logically, child of the element to scroll )
     *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
     *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
     *		- A percentage of the container's dimension/s, for example: 50% to go to the middle.
     *		- The string 'max' for go-to-end.
     * @param {Number, Function} duration The OVERALL length of the animation, this argument can be the settings object instead.
     * @param {Object,Function} settings Optional set of settings or the onAfter callback.
     *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
     *	 @option {Number, Function} duration The OVERALL length of the animation.
     *	 @option {String} easing The easing method for the animation.
     *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
     *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
     *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
     *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
     *	 @option {Function} onAfter Function to be called after the scrolling ends.
     *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
     * @return {jQuery} Returns the same jQuery object, for chaining.
     *
     * @desc Scroll to a fixed position
     * @example $('div').scrollTo( 340 );
     *
     * @desc Scroll relatively to the actual position
     * @example $('div').scrollTo( '+=340px', { axis:'y' } );
     *
     * @desc Scroll using a selector (relative to the scrolled element)
     * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
     *
     * @desc Scroll to a DOM element (same for jQuery object)
     * @example var second_child = document.getElementById('container').firstChild.nextSibling;
     *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
     *				alert('scrolled!!');
     *			}});
     *
     * @desc Scroll on both axes, to different values
     * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
     */

    ;(function( $ ){

        var $scrollTo = $.scrollTo = function( target, duration, settings ){
            $(window).scrollTo( target, duration, settings );
        };

        $scrollTo.defaults = {
            axis:'xy',
            duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
            limit:true
        };

        // Returns the element that needs to be animated to scroll the window.
        // Kept for backwards compatibility (specially for localScroll & serialScroll)
        $scrollTo.window = function( scope ){
            return $(window)._scrollable();
        };

        // Hack, hack, hack :)
        // Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
        $.fn._scrollable = function(){
            return this.map(function(){
                var elem = this,
                    isWin = !elem.nodeName || $.inArray( elem.nodeName.toLowerCase(), ['iframe','#document','html','body'] ) != -1;

                if( !isWin )
                    return elem;

                var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;

                return /webkit/i.test(navigator.userAgent) || doc.compatMode == 'BackCompat' ?
                    doc.body :
                    doc.documentElement;
            });
        };

        $.fn.scrollTo = function( target, duration, settings ){
            if( typeof duration == 'object' ){
                settings = duration;
                duration = 0;
            }
            if( typeof settings == 'function' )
                settings = { onAfter:settings };

            if( target == 'max' )
                target = 9e9;

            settings = $.extend( {}, $scrollTo.defaults, settings );
            // Speed is still recognized for backwards compatibility
            duration = duration || settings.duration;
            // Make sure the settings are given right
            settings.queue = settings.queue && settings.axis.length > 1;

            if( settings.queue )
            // Let's keep the overall duration
                duration /= 2;
            settings.offset = both( settings.offset );
            settings.over = both( settings.over );

            return this._scrollable().each(function(){
                // Null target yields nothing, just like jQuery does
                if (target == null) return;

                var elem = this,
                    $elem = $(elem),
                    targ = target, toff, attr = {},
                    win = $elem.is('html,body');

                switch( typeof targ ){
                    // A number will pass the regex
                    case 'number':
                    case 'string':
                        if( /^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ) ){
                            targ = both( targ );
                            // We are done
                            break;
                        }
                        // Relative selector, no break!
                        targ = $(targ,this);
                        if (!targ.length) return;
                    case 'object':
                        // DOMElement / jQuery
                        if( targ.is || targ.style )
                        // Get the real position of the target
                            toff = (targ = $(targ)).offset();
                }
                $.each( settings.axis.split(''), function( i, axis ){
                    var Pos	= axis == 'x' ? 'Left' : 'Top',
                        pos = Pos.toLowerCase(),
                        key = 'scroll' + Pos,
                        old = elem[key],
                        max = $scrollTo.max(elem, axis);

                    if( toff ){// jQuery / DOMElement
                        attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

                        // If it's a dom element, reduce the margin
                        if( settings.margin ){
                            attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
                            attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
                        }

                        attr[key] += settings.offset[pos] || 0;

                        if( settings.over[pos] )
                        // Scroll to a fraction of its width/height
                            attr[key] += targ[axis=='x'?'width':'height']() * settings.over[pos];
                    }else{
                        var val = targ[pos];
                        // Handle percentage values
                        attr[key] = val.slice && val.slice(-1) == '%' ?
                            parseFloat(val) / 100 * max
                            : val;
                    }

                    // Number or 'number'
                    if( settings.limit && /^\d+$/.test(attr[key]) )
                    // Check the limits
                        attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max );

                    // Queueing axes
                    if( !i && settings.queue ){
                        // Don't waste time animating, if there's no need.
                        if( old != attr[key] )
                        // Intermediate animation
                            animate( settings.onAfterFirst );
                        // Don't animate this axis again in the next iteration.
                        delete attr[key];
                    }
                });

                animate( settings.onAfter );

                function animate( callback ){
                    $elem.animate( attr, duration, settings.easing, callback && function(){
                        callback.call(this, targ, settings);
                    });
                };

            }).end();
        };

        // Max scrolling position, works on quirks mode
        // It only fails (not too badly) on IE, quirks mode.
        $scrollTo.max = function( elem, axis ){
            var Dim = axis == 'x' ? 'Width' : 'Height',
                scroll = 'scroll'+Dim;

            if( !$(elem).is('html,body') )
                return elem[scroll] - $(elem)[Dim.toLowerCase()]();

            var size = 'client' + Dim,
                html = elem.ownerDocument.documentElement,
                body = elem.ownerDocument.body;

            return Math.max( html[scroll], body[scroll] )
                - Math.min( html[size]  , body[size]   );
        };

        function both( val ){
            return typeof val == 'object' ? val : { top:val, left:val };
        };

    })( jQuery );



    /*##########################################################################################*/
    /*!
     * jQuery hashchange event - v1.3 - 7/21/2010
     * http://benalman.com/projects/jquery-hashchange-plugin/
     *
     * Copyright (c) 2010 "Cowboy" Ben Alman
     * Dual licensed under the MIT and GPL licenses.
     * http://benalman.com/about/license/
     */

// Script: jQuery hashchange event
//
// *Version: 1.3, Last updated: 7/21/2010*
//
// Project Home - http://benalman.com/projects/jquery-hashchange-plugin/
// GitHub       - http://github.com/cowboy/jquery-hashchange/
// Source       - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.js
// (Minified)   - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.min.js (0.8kb gzipped)
//
// About: License
//
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
//
// About: Examples
//
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
//
// hashchange event - http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/
// document.domain - http://benalman.com/code/projects/jquery-hashchange/examples/document_domain/
//
// About: Support and Testing
//
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
//
// jQuery Versions - 1.2.6, 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-4, Chrome 5-6, Safari 3.2-5,
//                   Opera 9.6-10.60, iPhone 3.1, Android 1.6-2.2, BlackBerry 4.6-5.
// Unit Tests      - http://benalman.com/code/projects/jquery-hashchange/unit/
//
// About: Known issues
//
// While this jQuery hashchange event implementation is quite stable and
// robust, there are a few unfortunate browser bugs surrounding expected
// hashchange event-based behaviors, independent of any JavaScript
// window.onhashchange abstraction. See the following examples for more
// information:
//
// Chrome: Back Button - http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/
// Firefox: Remote XMLHttpRequest - http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/
// WebKit: Back Button in an Iframe - http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/
// Safari: Back Button from a different domain - http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/
//
// Also note that should a browser natively support the window.onhashchange
// event, but not report that it does, the fallback polling loop will be used.
//
// About: Release History
//
// 1.3   - (7/21/2010) Reorganized IE6/7 Iframe code to make it more
//         "removable" for mobile-only development. Added IE6/7 document.title
//         support. Attempted to make Iframe as hidden as possible by using
//         techniques from http://www.paciellogroup.com/blog/?p=604. Added
//         support for the "shortcut" format $(window).hashchange( fn ) and
//         $(window).hashchange() like jQuery provides for built-in events.
//         Renamed jQuery.hashchangeDelay to <jQuery.fn.hashchange.delay> and
//         lowered its default value to 50. Added <jQuery.fn.hashchange.domain>
//         and <jQuery.fn.hashchange.src> properties plus document-domain.html
//         file to address access denied issues when setting document.domain in
//         IE6/7.
// 1.2   - (2/11/2010) Fixed a bug where coming back to a page using this plugin
//         from a page on another domain would cause an error in Safari 4. Also,
//         IE6/7 Iframe is now inserted after the body (this actually works),
//         which prevents the page from scrolling when the event is first bound.
//         Event can also now be bound before DOM ready, but it won't be usable
//         before then in IE6/7.
// 1.1   - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug
//         where browser version is incorrectly reported as 8.0, despite
//         inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.
// 1.0   - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special
//         window.onhashchange functionality into a separate plugin for users
//         who want just the basic event & back button support, without all the
//         extra awesomeness that BBQ provides. This plugin will be included as
//         part of jQuery BBQ, but also be available separately.

    (function($,window,undefined){
        '$:nomunge'; // Used by YUI compressor.

        // Reused string.
        var str_hashchange = 'hashchange',

        // Method / object references.
            doc = document,
            fake_onhashchange,
            special = $.event.special,

        // Does the browser support window.onhashchange? Note that IE8 running in
        // IE7 compatibility mode reports true for 'onhashchange' in window, even
        // though the event isn't supported, so also test document.documentMode.
            doc_mode = doc.documentMode,
            supports_onhashchange = 'on' + str_hashchange in window && ( doc_mode === undefined || doc_mode > 7 );

        // Get location.hash (or what you'd expect location.hash to be) sans any
        // leading #. Thanks for making this necessary, Firefox!
        function get_fragment( url ) {
            url = url || location.href;
            return '#' + url.replace( /^[^#]*#?(.*)$/, '$1' );
        };

        // Method: jQuery.fn.hashchange
        //
        // Bind a handler to the window.onhashchange event or trigger all bound
        // window.onhashchange event handlers. This behavior is consistent with
        // jQuery's built-in event handlers.
        //
        // Usage:
        //
        // > jQuery(window).hashchange( [ handler ] );
        //
        // Arguments:
        //
        //  handler - (Function) Optional handler to be bound to the hashchange
        //    event. This is a "shortcut" for the more verbose form:
        //    jQuery(window).bind( 'hashchange', handler ). If handler is omitted,
        //    all bound window.onhashchange event handlers will be triggered. This
        //    is a shortcut for the more verbose
        //    jQuery(window).trigger( 'hashchange' ). These forms are described in
        //    the <hashchange event> section.
        //
        // Returns:
        //
        //  (jQuery) The initial jQuery collection of elements.

        // Allow the "shortcut" format $(elem).hashchange( fn ) for binding and
        // $(elem).hashchange() for triggering, like jQuery does for built-in events.
        $.fn[ str_hashchange ] = function( fn ) {
            return fn ? this.bind( str_hashchange, fn ) : this.trigger( str_hashchange );
        };

        // Property: jQuery.fn.hashchange.delay
        //
        // The numeric interval (in milliseconds) at which the <hashchange event>
        // polling loop executes. Defaults to 50.

        // Property: jQuery.fn.hashchange.domain
        //
        // If you're setting document.domain in your JavaScript, and you want hash
        // history to work in IE6/7, not only must this property be set, but you must
        // also set document.domain BEFORE jQuery is loaded into the page. This
        // property is only applicable if you are supporting IE6/7 (or IE8 operating
        // in "IE7 compatibility" mode).
        //
        // In addition, the <jQuery.fn.hashchange.src> property must be set to the
        // path of the included "document-domain.html" file, which can be renamed or
        // modified if necessary (note that the document.domain specified must be the
        // same in both your main JavaScript as well as in this file).
        //
        // Usage:
        //
        // jQuery.fn.hashchange.domain = document.domain;

        // Property: jQuery.fn.hashchange.src
        //
        // If, for some reason, you need to specify an Iframe src file (for example,
        // when setting document.domain as in <jQuery.fn.hashchange.domain>), you can
        // do so using this property. Note that when using this property, history
        // won't be recorded in IE6/7 until the Iframe src file loads. This property
        // is only applicable if you are supporting IE6/7 (or IE8 operating in "IE7
        // compatibility" mode).
        //
        // Usage:
        //
        // jQuery.fn.hashchange.src = 'path/to/file.html';

        $.fn[ str_hashchange ].delay = 50;
        /*
         $.fn[ str_hashchange ].domain = null;
         $.fn[ str_hashchange ].src = null;
         */

        // Event: hashchange event
        //
        // Fired when location.hash changes. In browsers that support it, the native
        // HTML5 window.onhashchange event is used, otherwise a polling loop is
        // initialized, running every <jQuery.fn.hashchange.delay> milliseconds to
        // see if the hash has changed. In IE6/7 (and IE8 operating in "IE7
        // compatibility" mode), a hidden Iframe is created to allow the back button
        // and hash-based history to work.
        //
        // Usage as described in <jQuery.fn.hashchange>:
        //
        // > // Bind an event handler.
        // > jQuery(window).hashchange( function(e) {
        // >   var hash = location.hash;
        // >   ...
        // > });
        // >
        // > // Manually trigger the event handler.
        // > jQuery(window).hashchange();
        //
        // A more verbose usage that allows for event namespacing:
        //
        // > // Bind an event handler.
        // > jQuery(window).bind( 'hashchange', function(e) {
        // >   var hash = location.hash;
        // >   ...
        // > });
        // >
        // > // Manually trigger the event handler.
        // > jQuery(window).trigger( 'hashchange' );
        //
        // Additional Notes:
        //
        // * The polling loop and Iframe are not created until at least one handler
        //   is actually bound to the 'hashchange' event.
        // * If you need the bound handler(s) to execute immediately, in cases where
        //   a location.hash exists on page load, via bookmark or page refresh for
        //   example, use jQuery(window).hashchange() or the more verbose
        //   jQuery(window).trigger( 'hashchange' ).
        // * The event can be bound before DOM ready, but since it won't be usable
        //   before then in IE6/7 (due to the necessary Iframe), recommended usage is
        //   to bind it inside a DOM ready handler.

        // Override existing $.event.special.hashchange methods (allowing this plugin
        // to be defined after jQuery BBQ in BBQ's source code).
        special[ str_hashchange ] = $.extend( special[ str_hashchange ], {

            // Called only when the first 'hashchange' event is bound to window.
            setup: function() {
                // If window.onhashchange is supported natively, there's nothing to do..
                if ( supports_onhashchange ) { return false; }

                // Otherwise, we need to create our own. And we don't want to call this
                // until the user binds to the event, just in case they never do, since it
                // will create a polling loop and possibly even a hidden Iframe.
                $( fake_onhashchange.start );
            },

            // Called only when the last 'hashchange' event is unbound from window.
            teardown: function() {
                // If window.onhashchange is supported natively, there's nothing to do..
                if ( supports_onhashchange ) { return false; }

                // Otherwise, we need to stop ours (if possible).
                $( fake_onhashchange.stop );
            }

        });

        // fake_onhashchange does all the work of triggering the window.onhashchange
        // event for browsers that don't natively support it, including creating a
        // polling loop to watch for hash changes and in IE 6/7 creating a hidden
        // Iframe to enable back and forward.
        fake_onhashchange = (function(){
            var self = {},
                timeout_id,

            // Remember the initial hash so it doesn't get triggered immediately.
                last_hash = get_fragment(),

                fn_retval = function(val){ return val; },
                history_set = fn_retval,
                history_get = fn_retval;

            // Start the polling loop.
            self.start = function() {
                timeout_id || poll();
            };

            // Stop the polling loop.
            self.stop = function() {
                timeout_id && clearTimeout( timeout_id );
                timeout_id = undefined;
            };

            // This polling loop checks every $.fn.hashchange.delay milliseconds to see
            // if location.hash has changed, and triggers the 'hashchange' event on
            // window when necessary.
            function poll() {
                var hash = get_fragment(),
                    history_hash = history_get( last_hash );

                if ( hash !== last_hash ) {
                    history_set( last_hash = hash, history_hash );

                    $(window).trigger( str_hashchange );

                } else if ( history_hash !== last_hash ) {
                    location.href = location.href.replace( /#.*/, '' ) + history_hash;
                }

                timeout_id = setTimeout( poll, $.fn[ str_hashchange ].delay );
            };

            return self;
        })();

    })(jQuery,this);

    /*##########################################################################################*/
}());

// Place any jQuery/helper plugins in here.
