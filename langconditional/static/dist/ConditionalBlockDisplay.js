(()=>{var e={324:function(){(function(e){"use strict";this.Collapsible={setCollapsibles:function(e){e.find(".longform").hide(),e.find(".shortform").append('<a href="#" class="full full-top">See full output</a>','<a href="#" class="full full-bottom">See full output</a>'),e.find(".shortform-custom").each((function(e,t){var l,n;n=$(t).data("open-text"),l=$(t).data("close-text"),edx.HtmlUtils.append($(t),edx.HtmlUtils.joinHtml(edx.HtmlUtils.HTML("<a href='#' class='full-custom'>"),gettext(n),edx.HtmlUtils.HTML("</a>"))),$(t).find(".full-custom").click((function(e){Collapsible.toggleFull(e,n,l)}))})),e.find(".collapsible header + section").hide(),e.find(".full").click((function(e){Collapsible.toggleFull(e,"See full output","Hide output")})),e.find(".collapsible header a").click(Collapsible.toggleHint)},toggleFull:function(e,t,l){var n,o;e.preventDefault(),(o=$(e.target).parent()).siblings().slideToggle(),o.parent().toggleClass("open"),n=$(e.target).text()===t?l:t,($(e.target).hasClass("full")?o.find(".full"):$(e.target)).text(n)},toggleHint:function(e){e.preventDefault(),$(e.target).parent().siblings().slideToggle(),$(e.target).parent().parent().toggleClass("open")}}}).call(this)},286:function(){(function(){"use strict";this.JavascriptLoader=function(){function e(){}return e.executeModuleScripts=function(e,t){var l,n,o,r,i;return t||(t=null),0===(i=e.find(".script_placeholder")).length?(null!==t&&t(),[]):(n=function(){var e,t,l;for(l=[],e=1,t=i.length;t>=1?e<=t:e>=t;t>=1?++e:--e)l.push(!1);return l}(),l=!1,o=function(e){return function(){var o,r,i;for(o=!0,n[e]=!0,r=0,i=n.length;r<i;r++)if(!n[r]){o=!1;break}if(o&&!l&&(l=!0,null!==t))return t()}},r={},i.each((function(e,t){var l,n;return(n=$(t).attr("data-src"))in r?o(e)():(r[n]=!0,(l=document.createElement("script")).setAttribute("src",n),l.setAttribute("type","text/javascript"),l.onload=o(e),$("head")[0].appendChild(l)),$(t).remove()})))},e}()}).call(this)},242:function(){(function(){"use strict";var e,t={};t.Descriptor=((e=function(e){this.element=e,this.update=_.bind(this.update,this)}).prototype.onUpdate=function(e){this.callbacks||(this.callbacks=[]),this.callbacks.push(e)},e.prototype.update=function(){var e,t;e=this.save(),(t=this.callbacks).length,$.each(t,(function(t,l){l(e)}))},e.prototype.save=function(){return{}},e),this.XBlockToXModuleShim=function(e,t,l){var n,o;if(console.log("This is it"),l&&(n=l["xmodule-type"]),n||(n=$(t).data("type")),"None"!==n)try{return o=new window[n](t,e),$(t).hasClass("xmodule_edit")&&$(document).trigger("XModule.loaded.edit",[t,o]),$(t).hasClass("xmodule_display")&&$(document).trigger("XModule.loaded.display",[t,o]),o}catch(e){console.error("Unable to load "+n+": "+e.message)}},this.XModule=t}).call(this)},729:()=>{(function(){(function(){this.Conditional=function(){function e(e,t,l){var n;this.el=$(e).find(".conditional-wrapper"),this.callerElId=l,void 0!==l&&"string"==typeof(n=this.el.data("depends"))&&n.length>0&&-1===n.indexOf(l)||(this.url=this.el.data("url"),this.url&&this.render(e))}return e.prototype.render=function(e){return $.postWithPrefix(this.url+"/conditional_get",(t=this,function(l){var n,o,r,i=[];for(t.el.html(""),fragments=l.fragments,n=0,o=fragments.length;n<o;n++)i.push(t.renderXBlockFragment(fragments[n])),console.log("Started fragment loading",fragments[n]);(r=$(e).parent()).attr("id"),!1===l.message?r.hasClass("vert")?r.hide():$(e).hide():r.hasClass("vert")?r.show():$(e).show(),$.when.apply(null,i).done((function(){console.log("All fragments loaded, initializing blocks"),XBlock.initializeBlocks(t.el)}))}));var t},e.prototype.renderXBlockFragment=function(e){var t=e.content,l=e.resources||[],n=this.el;try{return this.addXBlockFragmentResources(l).done((function(){console.log("Fragment resources loaded, appending HTML"),n.append(t)}))}catch(e){return console.error(e,e.stack),$.Deferred().resolve()}},e.prototype.addXBlockFragmentResources=function(e){var t,l=this,n=e.length,o=$.Deferred();return(t=function(r){var i,s;r>=n?o.resolve():(i=e[r],window.loadedXBlockResources=window.loadedXBlockResources||[],_.indexOf(loadedXBlockResources,i)<0?(s=l.loadResource(i),loadedXBlockResources.push(i),s.done((function(){t(r+1)})).fail((function(){o.reject()}))):t(r+1))})(0),o.promise()},e.prototype.loadResource=function(e){var t,l=$("head"),n=e.mimetype,o=e.kind,r=e.placement,i=e.data;if("text/css"===n)"text"===o?l.append("<style type='text/css'>"+i+"</style>"):"url"===o&&l.append("<link rel='stylesheet' href='"+i+"' type='text/css'>");else if("application/javascript"===n){if("text"===o)l.append("<script>"+i+"<\/script>");else if("url"===o)return t=$.Deferred(),$script(i,i,(function(){t.resolve()})),t.promise()}else"text/html"===n&&"head"===r&&l.append(i);return $.Deferred().resolve().promise()},e}()}).call(this)}).call(window)}};e[729](),e[242](),e[286](),e[324]()})();