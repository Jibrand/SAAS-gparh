(self.webpackChunkhope_ui_react=self.webpackChunkhope_ui_react||[]).push([[5921],{28454:function(e){var t={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};e.exports=function(e,n){return"number"!==typeof n||t[e]?n:n+"px"}},46356:function(e,t,n){var o=n(95165),r=n(32832),i={float:"cssFloat"},a=n(28454);function l(e,t,n){var l=i[t];if("undefined"===typeof l&&(l=function(e){var t=r(e),n=o(t);return i[t]=i[e]=i[n]=n,n}(t)),l){if(void 0===n)return e.style[l];e.style[l]=a(l,n)}}function u(e,t){for(var n in t)t.hasOwnProperty(n)&&l(e,n,t[n])}function c(){2===arguments.length?"string"===typeof arguments[1]?arguments[0].style.cssText=arguments[1]:u(arguments[0],arguments[1]):l(arguments[0],arguments[1],arguments[2])}e.exports=c,e.exports.set=c,e.exports.get=function(e,t){return Array.isArray(t)?t.reduce((function(t,n){return t[n]=l(e,n||""),t}),{}):l(e,t||"")}},48872:function(e){(function(){var t,n,o,r,i,a;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-i)/1e6},n=process.hrtime,r=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),a=1e9*process.uptime(),i=r-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)},95165:function(e){var t=null,n=["Webkit","Moz","O","ms"];e.exports=function(e){t||(t=document.createElement("div"));var o=t.style;if(e in o)return e;for(var r=e.charAt(0).toUpperCase()+e.slice(1),i=n.length;i>=0;i--){var a=n[i]+r;if(a in o)return a}return!1}},55475:function(e,t,n){for(var o=n(48872),r="undefined"===typeof window?n.g:window,i=["moz","webkit"],a="AnimationFrame",l=r["request"+a],u=r["cancel"+a]||r["cancelRequest"+a],c=0;!l&&c<i.length;c++)l=r[i[c]+"Request"+a],u=r[i[c]+"Cancel"+a]||r[i[c]+"CancelRequest"+a];if(!l||!u){var s=0,d=0,f=[];l=function(e){if(0===f.length){var t=o(),n=Math.max(0,16.666666666666668-(t-s));s=n+t,setTimeout((function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(s)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return f.push({handle:++d,callback:e,cancelled:!1}),d},u=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return l.call(r,e)},e.exports.cancel=function(){u.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=l,e.cancelAnimationFrame=u}},52732:function(e,t,n){var o;window,e.exports=(o=n(72791),function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(e,t){e.exports=o},function(e,t,n){(function(n){var o,r,i;r=[],void 0===(i="function"==typeof(o=function(){"use strict";function t(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){l(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(e,n,a){var l=i.URL||i.webkitURL,u=document.createElement("a");n=n||e.name||"download",u.download=n,u.rel="noopener","string"==typeof e?(u.href=e,u.origin===location.origin?r(u):o(u.href)?t(e,n,a):r(u,u.target="_blank")):(u.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(u.href)}),4e4),setTimeout((function(){r(u)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,i),n);else if(o(e))t(e,n,i);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout((function(){r(a)}))}}:function(e,n,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,o);var l="application/octet-stream"===e.type,u=/constructor/i.test(i.HTMLElement)||i.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||l&&u||a)&&"undefined"!=typeof FileReader){var s=new FileReader;s.onloadend=function(){var e=s.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},s.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,f=d.createObjectURL(e);r?r.location=f:location.href=f,r=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});i.saveAs=l.saveAs=l,e.exports=l})?o.apply(t,r):o)||(e.exports=i)}).call(this,n(7))},function(e,t,n){var o,r,i;r=[],void 0===(i="function"==typeof(o=function(){"use strict";return function(e,t,n){t=t||"",n=n||512;for(var o=atob(e),r=[],i=0;i<o.length;i+=n){for(var a=o.slice(i,i+n),l=new Array(a.length),u=0;u<a.length;u++)l[u]=a.charCodeAt(u);var c=new Uint8Array(l);r.push(c)}return new Blob(r,{type:t})}})?o.apply(t,r):o)||(e.exports=i)},function(e,t,n){"use strict";n.r(t),n.d(t,"defaultDownloadName",(function(){return f})),n.d(t,"triggerBase64Download",(function(){return v})),n.d(t,"getExtFromBase64",(function(){return p}));var o=n(1),r=n.n(o),i=n(0),a=n.n(i),l=n(2),u=n(3);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg"},d={png:"data:".concat(s.png,";base64"),jpeg:"data:".concat(s.jpeg,";base64"),jpg:"data:".concat(s.jpg,";base64")},f="download",h=function(e){var t=e.base64,n=e.children,o=e.downloadName,i=e.onDownloadSuccess,a=e.onDownloadError,l=e.Tag,u=e.className,s=e.style,d=e.extraAttributes;return r.a.createElement(l,c({},d,{onClick:function(){try{v(t,o),i&&i({base64:t})}catch(e){console.error(e),a&&a(e)}},className:u,style:s}),n)};function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f,n=p(e),o=d[n],r=s[n],i=e.replace("".concat(o,","),""),a=u(i,r),c=new File([a],"".concat(t,".").concat(n),{type:o});l.saveAs(c)}function p(e){var t;if("string"==typeof e&&(t=Object.keys(d).find((function(t){return 0===e.indexOf(d[t])}))),t)return t;throw new Error("props.base64 on <Base64Downloader/> has invalid or undefined extension. expected ".concat(Object.keys(s).join(", ")))}h.defaultProps={className:"",style:{},downloadName:f,Tag:"button",extraAttributes:{}},h.propTypes={base64:a.a.string.isRequired,children:a.a.oneOfType([a.a.node,a.a.string]).isRequired,downloadName:a.a.string,onDownloadSuccess:a.a.func,onDownloadError:a.a.func,Tag:a.a.string,className:a.a.string,style:a.a.object,extraAttributes:a.a.object},t.default=h},function(e,t,n){"use strict";var o=n(6);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]))},9501:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.renderViewDefault=function(e){return a.default.createElement("div",e)},t.renderTrackHorizontalDefault=function(e){var t=e.style,n=l(e,["style"]),r=o({},t,{right:2,bottom:2,left:2,borderRadius:3});return a.default.createElement("div",o({style:r},n))},t.renderTrackVerticalDefault=function(e){var t=e.style,n=l(e,["style"]),r=o({},t,{right:2,bottom:2,top:2,borderRadius:3});return a.default.createElement("div",o({style:r},n))},t.renderThumbHorizontalDefault=function(e){var t=e.style,n=l(e,["style"]),r=o({},t,{cursor:"pointer",borderRadius:"inherit",backgroundColor:"rgba(0,0,0,.2)"});return a.default.createElement("div",o({style:r},n))},t.renderThumbVerticalDefault=function(e){var t=e.style,n=l(e,["style"]),r=o({},t,{cursor:"pointer",borderRadius:"inherit",backgroundColor:"rgba(0,0,0,.2)"});return a.default.createElement("div",o({style:r},n))};var r,i=n(72791),a=(r=i)&&r.__esModule?r:{default:r};function l(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}},42839:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(55475),a=m(i),l=m(n(46356)),u=n(72791),c=m(n(52007)),s=m(n(35737)),d=m(n(68441)),f=m(n(57087)),h=m(n(55562)),v=m(n(86417)),p=n(52801),g=n(9501);function m(e){return e&&e.__esModule?e:{default:e}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var w=function(e){function t(e){var n;y(this,t);for(var o=arguments.length,r=Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=b(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,e].concat(r)));return a.getScrollLeft=a.getScrollLeft.bind(a),a.getScrollTop=a.getScrollTop.bind(a),a.getScrollWidth=a.getScrollWidth.bind(a),a.getScrollHeight=a.getScrollHeight.bind(a),a.getClientWidth=a.getClientWidth.bind(a),a.getClientHeight=a.getClientHeight.bind(a),a.getValues=a.getValues.bind(a),a.getThumbHorizontalWidth=a.getThumbHorizontalWidth.bind(a),a.getThumbVerticalHeight=a.getThumbVerticalHeight.bind(a),a.getScrollLeftForOffset=a.getScrollLeftForOffset.bind(a),a.getScrollTopForOffset=a.getScrollTopForOffset.bind(a),a.scrollLeft=a.scrollLeft.bind(a),a.scrollTop=a.scrollTop.bind(a),a.scrollToLeft=a.scrollToLeft.bind(a),a.scrollToTop=a.scrollToTop.bind(a),a.scrollToRight=a.scrollToRight.bind(a),a.scrollToBottom=a.scrollToBottom.bind(a),a.handleTrackMouseEnter=a.handleTrackMouseEnter.bind(a),a.handleTrackMouseLeave=a.handleTrackMouseLeave.bind(a),a.handleHorizontalTrackMouseDown=a.handleHorizontalTrackMouseDown.bind(a),a.handleVerticalTrackMouseDown=a.handleVerticalTrackMouseDown.bind(a),a.handleHorizontalThumbMouseDown=a.handleHorizontalThumbMouseDown.bind(a),a.handleVerticalThumbMouseDown=a.handleVerticalThumbMouseDown.bind(a),a.handleWindowResize=a.handleWindowResize.bind(a),a.handleScroll=a.handleScroll.bind(a),a.handleDrag=a.handleDrag.bind(a),a.handleDragEnd=a.handleDragEnd.bind(a),a.state={didMountUniversal:!1},a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.addListeners(),this.update(),this.componentDidMountUniversal()}},{key:"componentDidMountUniversal",value:function(){this.props.universal&&this.setState({didMountUniversal:!0})}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"componentWillUnmount",value:function(){this.removeListeners(),(0,i.cancel)(this.requestFrame),clearTimeout(this.hideTracksTimeout),clearInterval(this.detectScrollingInterval)}},{key:"getScrollLeft",value:function(){return this.view?this.view.scrollLeft:0}},{key:"getScrollTop",value:function(){return this.view?this.view.scrollTop:0}},{key:"getScrollWidth",value:function(){return this.view?this.view.scrollWidth:0}},{key:"getScrollHeight",value:function(){return this.view?this.view.scrollHeight:0}},{key:"getClientWidth",value:function(){return this.view?this.view.clientWidth:0}},{key:"getClientHeight",value:function(){return this.view?this.view.clientHeight:0}},{key:"getValues",value:function(){var e=this.view||{},t=e.scrollLeft,n=void 0===t?0:t,o=e.scrollTop,r=void 0===o?0:o,i=e.scrollWidth,a=void 0===i?0:i,l=e.scrollHeight,u=void 0===l?0:l,c=e.clientWidth,s=void 0===c?0:c,d=e.clientHeight,f=void 0===d?0:d;return{left:n/(a-s)||0,top:r/(u-f)||0,scrollLeft:n,scrollTop:r,scrollWidth:a,scrollHeight:u,clientWidth:s,clientHeight:f}}},{key:"getThumbHorizontalWidth",value:function(){var e=this.props,t=e.thumbSize,n=e.thumbMinSize,o=this.view,r=o.scrollWidth,i=o.clientWidth,a=(0,h.default)(this.trackHorizontal),l=Math.ceil(i/r*a);return a<=l?0:t||Math.max(l,n)}},{key:"getThumbVerticalHeight",value:function(){var e=this.props,t=e.thumbSize,n=e.thumbMinSize,o=this.view,r=o.scrollHeight,i=o.clientHeight,a=(0,v.default)(this.trackVertical),l=Math.ceil(i/r*a);return a<=l?0:t||Math.max(l,n)}},{key:"getScrollLeftForOffset",value:function(e){var t=this.view,n=t.scrollWidth,o=t.clientWidth;return e/((0,h.default)(this.trackHorizontal)-this.getThumbHorizontalWidth())*(n-o)}},{key:"getScrollTopForOffset",value:function(e){var t=this.view,n=t.scrollHeight,o=t.clientHeight;return e/((0,v.default)(this.trackVertical)-this.getThumbVerticalHeight())*(n-o)}},{key:"scrollLeft",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.view&&(this.view.scrollLeft=e)}},{key:"scrollTop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.view&&(this.view.scrollTop=e)}},{key:"scrollToLeft",value:function(){this.view&&(this.view.scrollLeft=0)}},{key:"scrollToTop",value:function(){this.view&&(this.view.scrollTop=0)}},{key:"scrollToRight",value:function(){this.view&&(this.view.scrollLeft=this.view.scrollWidth)}},{key:"scrollToBottom",value:function(){this.view&&(this.view.scrollTop=this.view.scrollHeight)}},{key:"addListeners",value:function(){if("undefined"!==typeof document&&this.view){var e=this.view,t=this.trackHorizontal,n=this.trackVertical,o=this.thumbHorizontal,r=this.thumbVertical;e.addEventListener("scroll",this.handleScroll),(0,d.default)()&&(t.addEventListener("mouseenter",this.handleTrackMouseEnter),t.addEventListener("mouseleave",this.handleTrackMouseLeave),t.addEventListener("mousedown",this.handleHorizontalTrackMouseDown),n.addEventListener("mouseenter",this.handleTrackMouseEnter),n.addEventListener("mouseleave",this.handleTrackMouseLeave),n.addEventListener("mousedown",this.handleVerticalTrackMouseDown),o.addEventListener("mousedown",this.handleHorizontalThumbMouseDown),r.addEventListener("mousedown",this.handleVerticalThumbMouseDown),window.addEventListener("resize",this.handleWindowResize))}}},{key:"removeListeners",value:function(){if("undefined"!==typeof document&&this.view){var e=this.view,t=this.trackHorizontal,n=this.trackVertical,o=this.thumbHorizontal,r=this.thumbVertical;e.removeEventListener("scroll",this.handleScroll),(0,d.default)()&&(t.removeEventListener("mouseenter",this.handleTrackMouseEnter),t.removeEventListener("mouseleave",this.handleTrackMouseLeave),t.removeEventListener("mousedown",this.handleHorizontalTrackMouseDown),n.removeEventListener("mouseenter",this.handleTrackMouseEnter),n.removeEventListener("mouseleave",this.handleTrackMouseLeave),n.removeEventListener("mousedown",this.handleVerticalTrackMouseDown),o.removeEventListener("mousedown",this.handleHorizontalThumbMouseDown),r.removeEventListener("mousedown",this.handleVerticalThumbMouseDown),window.removeEventListener("resize",this.handleWindowResize),this.teardownDragging())}}},{key:"handleScroll",value:function(e){var t=this,n=this.props,o=n.onScroll,r=n.onScrollFrame;o&&o(e),this.update((function(e){var n=e.scrollLeft,o=e.scrollTop;t.viewScrollLeft=n,t.viewScrollTop=o,r&&r(e)})),this.detectScrolling()}},{key:"handleScrollStart",value:function(){var e=this.props.onScrollStart;e&&e(),this.handleScrollStartAutoHide()}},{key:"handleScrollStartAutoHide",value:function(){this.props.autoHide&&this.showTracks()}},{key:"handleScrollStop",value:function(){var e=this.props.onScrollStop;e&&e(),this.handleScrollStopAutoHide()}},{key:"handleScrollStopAutoHide",value:function(){this.props.autoHide&&this.hideTracks()}},{key:"handleWindowResize",value:function(){(0,d.default)(!1),this.forceUpdate()}},{key:"handleHorizontalTrackMouseDown",value:function(e){e.preventDefault();var t=e.target,n=e.clientX,o=t.getBoundingClientRect().left,r=this.getThumbHorizontalWidth(),i=Math.abs(o-n)-r/2;this.view.scrollLeft=this.getScrollLeftForOffset(i)}},{key:"handleVerticalTrackMouseDown",value:function(e){e.preventDefault();var t=e.target,n=e.clientY,o=t.getBoundingClientRect().top,r=this.getThumbVerticalHeight(),i=Math.abs(o-n)-r/2;this.view.scrollTop=this.getScrollTopForOffset(i)}},{key:"handleHorizontalThumbMouseDown",value:function(e){e.preventDefault(),this.handleDragStart(e);var t=e.target,n=e.clientX,o=t.offsetWidth,r=t.getBoundingClientRect().left;this.prevPageX=o-(n-r)}},{key:"handleVerticalThumbMouseDown",value:function(e){e.preventDefault(),this.handleDragStart(e);var t=e.target,n=e.clientY,o=t.offsetHeight,r=t.getBoundingClientRect().top;this.prevPageY=o-(n-r)}},{key:"setupDragging",value:function(){(0,l.default)(document.body,p.disableSelectStyle),document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragEnd),document.onselectstart=f.default}},{key:"teardownDragging",value:function(){(0,l.default)(document.body,p.disableSelectStyleReset),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragEnd),document.onselectstart=void 0}},{key:"handleDragStart",value:function(e){this.dragging=!0,e.stopImmediatePropagation(),this.setupDragging()}},{key:"handleDrag",value:function(e){if(this.prevPageX){var t=e.clientX,n=-this.trackHorizontal.getBoundingClientRect().left+t-(this.getThumbHorizontalWidth()-this.prevPageX);this.view.scrollLeft=this.getScrollLeftForOffset(n)}if(this.prevPageY){var o=e.clientY,r=-this.trackVertical.getBoundingClientRect().top+o-(this.getThumbVerticalHeight()-this.prevPageY);this.view.scrollTop=this.getScrollTopForOffset(r)}return!1}},{key:"handleDragEnd",value:function(){this.dragging=!1,this.prevPageX=this.prevPageY=0,this.teardownDragging(),this.handleDragEndAutoHide()}},{key:"handleDragEndAutoHide",value:function(){this.props.autoHide&&this.hideTracks()}},{key:"handleTrackMouseEnter",value:function(){this.trackMouseOver=!0,this.handleTrackMouseEnterAutoHide()}},{key:"handleTrackMouseEnterAutoHide",value:function(){this.props.autoHide&&this.showTracks()}},{key:"handleTrackMouseLeave",value:function(){this.trackMouseOver=!1,this.handleTrackMouseLeaveAutoHide()}},{key:"handleTrackMouseLeaveAutoHide",value:function(){this.props.autoHide&&this.hideTracks()}},{key:"showTracks",value:function(){clearTimeout(this.hideTracksTimeout),(0,l.default)(this.trackHorizontal,{opacity:1}),(0,l.default)(this.trackVertical,{opacity:1})}},{key:"hideTracks",value:function(){var e=this;if(!this.dragging&&!this.scrolling&&!this.trackMouseOver){var t=this.props.autoHideTimeout;clearTimeout(this.hideTracksTimeout),this.hideTracksTimeout=setTimeout((function(){(0,l.default)(e.trackHorizontal,{opacity:0}),(0,l.default)(e.trackVertical,{opacity:0})}),t)}}},{key:"detectScrolling",value:function(){var e=this;this.scrolling||(this.scrolling=!0,this.handleScrollStart(),this.detectScrollingInterval=setInterval((function(){e.lastViewScrollLeft===e.viewScrollLeft&&e.lastViewScrollTop===e.viewScrollTop&&(clearInterval(e.detectScrollingInterval),e.scrolling=!1,e.handleScrollStop()),e.lastViewScrollLeft=e.viewScrollLeft,e.lastViewScrollTop=e.viewScrollTop}),100))}},{key:"raf",value:function(e){var t=this;this.requestFrame&&a.default.cancel(this.requestFrame),this.requestFrame=(0,a.default)((function(){t.requestFrame=void 0,e()}))}},{key:"update",value:function(e){var t=this;this.raf((function(){return t._update(e)}))}},{key:"_update",value:function(e){var t=this.props,n=t.onUpdate,o=t.hideTracksWhenNotNeeded,r=this.getValues();if((0,d.default)()){var i=r.scrollLeft,a=r.clientWidth,u=r.scrollWidth,c=(0,h.default)(this.trackHorizontal),s=this.getThumbHorizontalWidth(),f={width:s,transform:"translateX("+i/(u-a)*(c-s)+"px)"},p=r.scrollTop,g=r.clientHeight,m=r.scrollHeight,y=(0,v.default)(this.trackVertical),b=this.getThumbVerticalHeight(),w={height:b,transform:"translateY("+p/(m-g)*(y-b)+"px)"};if(o){var T={visibility:u>a?"visible":"hidden"},k={visibility:m>g?"visible":"hidden"};(0,l.default)(this.trackHorizontal,T),(0,l.default)(this.trackVertical,k)}(0,l.default)(this.thumbHorizontal,f),(0,l.default)(this.thumbVertical,w)}n&&n(r),"function"===typeof e&&e(r)}},{key:"render",value:function(){var e=this,t=(0,d.default)(),n=this.props,r=(n.onScroll,n.onScrollFrame,n.onScrollStart,n.onScrollStop,n.onUpdate,n.renderView),i=n.renderTrackHorizontal,a=n.renderTrackVertical,l=n.renderThumbHorizontal,c=n.renderThumbVertical,f=n.tagName,h=(n.hideTracksWhenNotNeeded,n.autoHide),v=(n.autoHideTimeout,n.autoHideDuration),g=(n.thumbSize,n.thumbMinSize,n.universal),m=n.autoHeight,y=n.autoHeightMin,b=n.autoHeightMax,w=n.style,T=n.children,k=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(n,["onScroll","onScrollFrame","onScrollStart","onScrollStop","onUpdate","renderView","renderTrackHorizontal","renderTrackVertical","renderThumbHorizontal","renderThumbVertical","tagName","hideTracksWhenNotNeeded","autoHide","autoHideTimeout","autoHideDuration","thumbSize","thumbMinSize","universal","autoHeight","autoHeightMin","autoHeightMax","style","children"]),S=this.state.didMountUniversal,H=o({},p.containerStyleDefault,m&&o({},p.containerStyleAutoHeight,{minHeight:y,maxHeight:b}),w),M=o({},p.viewStyleDefault,{marginRight:t?-t:0,marginBottom:t?-t:0},m&&o({},p.viewStyleAutoHeight,{minHeight:(0,s.default)(y)?"calc("+y+" + "+t+"px)":y+t,maxHeight:(0,s.default)(b)?"calc("+b+" + "+t+"px)":b+t}),m&&g&&!S&&{minHeight:y,maxHeight:b},g&&!S&&p.viewStyleUniversalInitial),D={transition:"opacity "+v+"ms",opacity:0},L=o({},p.trackHorizontalStyleDefault,h&&D,(!t||g&&!S)&&{display:"none"}),O=o({},p.trackVerticalStyleDefault,h&&D,(!t||g&&!S)&&{display:"none"});return(0,u.createElement)(f,o({},k,{style:H,ref:function(t){e.container=t}}),[(0,u.cloneElement)(r({style:M}),{key:"view",ref:function(t){e.view=t}},T),(0,u.cloneElement)(i({style:L}),{key:"trackHorizontal",ref:function(t){e.trackHorizontal=t}},(0,u.cloneElement)(l({style:p.thumbHorizontalStyleDefault}),{ref:function(t){e.thumbHorizontal=t}})),(0,u.cloneElement)(a({style:O}),{key:"trackVertical",ref:function(t){e.trackVertical=t}},(0,u.cloneElement)(c({style:p.thumbVerticalStyleDefault}),{ref:function(t){e.thumbVertical=t}}))])}}]),t}(u.Component);t.default=w,w.propTypes={onScroll:c.default.func,onScrollFrame:c.default.func,onScrollStart:c.default.func,onScrollStop:c.default.func,onUpdate:c.default.func,renderView:c.default.func,renderTrackHorizontal:c.default.func,renderTrackVertical:c.default.func,renderThumbHorizontal:c.default.func,renderThumbVertical:c.default.func,tagName:c.default.string,thumbSize:c.default.number,thumbMinSize:c.default.number,hideTracksWhenNotNeeded:c.default.bool,autoHide:c.default.bool,autoHideTimeout:c.default.number,autoHideDuration:c.default.number,autoHeight:c.default.bool,autoHeightMin:c.default.oneOfType([c.default.number,c.default.string]),autoHeightMax:c.default.oneOfType([c.default.number,c.default.string]),universal:c.default.bool,style:c.default.object,children:c.default.node},w.defaultProps={renderView:g.renderViewDefault,renderTrackHorizontal:g.renderTrackHorizontalDefault,renderTrackVertical:g.renderTrackVerticalDefault,renderThumbHorizontal:g.renderThumbHorizontalDefault,renderThumbVertical:g.renderThumbVerticalDefault,tagName:"div",thumbMinSize:30,hideTracksWhenNotNeeded:!1,autoHide:!1,autoHideTimeout:1e3,autoHideDuration:200,autoHeight:!1,autoHeightMin:0,autoHeightMax:200,universal:!1}},52801:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.containerStyleDefault={position:"relative",overflow:"hidden",width:"100%",height:"100%"},t.containerStyleAutoHeight={height:"auto"},t.viewStyleDefault={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"scroll",WebkitOverflowScrolling:"touch"},t.viewStyleAutoHeight={position:"relative",top:void 0,left:void 0,right:void 0,bottom:void 0},t.viewStyleUniversalInitial={overflow:"hidden",marginRight:0,marginBottom:0},t.trackHorizontalStyleDefault={position:"absolute",height:6},t.trackVerticalStyleDefault={position:"absolute",width:6},t.thumbHorizontalStyleDefault={position:"relative",display:"block",height:"100%"},t.thumbVerticalStyleDefault={position:"relative",display:"block",width:"100%"},t.disableSelectStyle={userSelect:"none"},t.disableSelectStyleReset={userSelect:""}},13889:function(e,t,n){"use strict";var o,r=n(42839),i=(o=r)&&o.__esModule?o:{default:o};i.default,i.default},86417:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.clientHeight,n=getComputedStyle(e),o=n.paddingTop,r=n.paddingBottom;return t-parseFloat(o)-parseFloat(r)}},55562:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.clientWidth,n=getComputedStyle(e),o=n.paddingLeft,r=n.paddingRight;return t-parseFloat(o)-parseFloat(r)}},68441:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(e&&!1!==a)return a;if("undefined"!==typeof document){var t=document.createElement("div");(0,i.default)(t,{width:100,height:100,position:"absolute",top:-9999,overflow:"scroll",MsOverflowStyle:"scrollbar"}),document.body.appendChild(t),a=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}else a=0;return a||0};var o,r=n(46356),i=(o=r)&&o.__esModule?o:{default:o};var a=!1},35737:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"string"===typeof e}},57087:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return!1}},32832:function(e,t,n){var o=n(63416);e.exports=function(e){return o(e).replace(/\s(\w)/g,(function(e,t){return t.toUpperCase()}))}},52726:function(e){e.exports=function(e){return t.test(e)?e.toLowerCase():n.test(e)?(function(e){return e.replace(r,(function(e,t){return t?" "+t:""}))}(e)||e).toLowerCase():o.test(e)?function(e){return e.replace(i,(function(e,t,n){return t+" "+n.toLowerCase().split("").join(" ")}))}(e).toLowerCase():e.toLowerCase()};var t=/\s/,n=/(_|-|\.|:)/,o=/([a-z][A-Z]|[A-Z][a-z])/;var r=/[\W_]+(.|$)/g;var i=/(.)([A-Z]+)/g},63416:function(e,t,n){var o=n(52726);e.exports=function(e){return o(e).replace(/[\W_]+(.|$)/g,(function(e,t){return t?" "+t:""})).trim()}}}]);
//# sourceMappingURL=5921.403143e4.chunk.js.map