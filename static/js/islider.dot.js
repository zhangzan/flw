!function(e,t){"function"==typeof require&&"object"==typeof module&&module&&"object"==typeof exports&&exports?t(require("./iSlider")):"function"==typeof define&&define.amd?define(["./iSlider"],function(e){t(e)}):t(e.iSlider)}(window?window:this,function(e){"use strict";e&&e.regPlugin("dot",function(e){function t(){var e=document.createDocumentFragment();a.forEach(function(e,t){e.removeEventListener(r,d[t],!1)}),a=[],d=[],l.innerHTML="";for(var t=0;t<o.length;t++)a[t]=document.createElement("li"),a[t].className="islider-dot",a[t].setAttribute("index",t),t===i.slideIndex&&(a[t].className+=" active"),d[t]=function(){i.slideTo(parseInt(this.getAttribute("index"),10))},a[t].addEventListener(r,d[t],!1),e.appendChild(a[t]);l.appendChild(e)}function n(e){return"relative"===e?i.wrap:Boolean(e.nodeName)&&Boolean(e.nodeType)?e:i.wrap.parentNode}var i=this,o=i.data,a=[],d=[],r=i.deviceEvents.endEvt,l=document.createElement("ul");l.className="islider-dot-wrap",t(),n(!(!e||null==e.locate)&&e.locate).appendChild(l),i.on("slideChange",function(){for(var e=0;e<o.length;e++)a[e].className="islider-dot",e===this.slideIndex&&(a[e].className+=" active")}),i.on("loadData",function(){o=this.data,t()},1)})});