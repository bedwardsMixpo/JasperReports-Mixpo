var dialogs={};dialogs.systemConfirm={container:null,message:null,show:function(e,o,s){if(window.isEmbeddedDesigner)s&&(e='<span class="warning">'+e+"</span>"),jQuery(document).trigger("adhocDesigner:notification",[e,o]);else{if(this.container=this.container||jQuery("#systemMessageConsole").on("mouseup touchend",function(){dialogs.systemConfirm.container.slideUp()}),this.message=this.message||document.getElementById("systemMessage"),!this.message)return void console.warn(e);this.closeText||(this.closeText=this.message.innerHTML.toLowerCase()),e=xssUtil.escape(e)+' <span>| <a href="#">'+xssUtil.escape(this.closeText)+"</a></span>",s?this.message.innerHTML='<span class="warning">'+e+"</span>":this.message.innerHTML=e,dialogs.systemConfirm.container.slideDown(),setTimeout("dialogs.systemConfirm.hide()",o?o:2e3)}},showWarning:function(e,o){this.show(e,o,!0)},hide:function(){dialogs.systemConfirm.container&&dialogs.systemConfirm.container.slideUp()}},jQuery(document).on("systemDialogWarn",function(e,o,s){dialogs.systemConfirm.showWarning(o,s)}),dialogs.errorPopup={_dom:null,_content:null,_DOM_ID:"standardAlert",_CONTENT_ID:"errorPopupContents",_PAGE_CONTENT_PATTERN:"#errorPageContent",_DIALOG_WIDTH:"546px",_DIALOG_HEIGHT:"350px",clickHandler:null,show:function(e,o,s){s||(s={});var t=Builder.node("DIV",{style:"display:none"});t.innerHTML=e,document.body.insertBefore(t,document.body.firstChild);var i=$$(this._PAGE_CONTENT_PATTERN)[0],n=i?i.innerHTML:e,a=i&&i.innerHTML;if(t.remove(),n&&(this._dom||(this._dom=$(this._DOM_ID),this._content=$(this._CONTENT_ID),this.clickHandler=this._clickHandler.bindAsEventListener(this)),this._dom)){var l=n;a||(l=Builder.node("P",{"class":"message"}),l.update(xssUtil.escape(n,{softHTMLEscape:!0}))),this._content.update(xssUtil.escape(l,{softHTMLEscape:!0})),this._dom.observe("click",this.clickHandler),this._dom.setStyle({height:s.height||this._DIALOG_HEIGHT,width:s.width||this._DIALOG_WIDTH}),o&&this._dom.addClassName(layoutModule.STACKTRACE_CLASS),dialogs.popup.show(this._dom,o);var d=document.getElementById("completeStackTrace");d&&isIPad()&&new TouchController(d,d.parentNode,{noInit3d:!0})}},_hide:function(){this._dom&&(this._dom.stopObserving("click",this.clickHandler),dialogs.popup.hide(this._dom))},_clickHandler:function(e){var o=e.element();matchAny(o,["button"],!0)&&this._hide()}},dialogs.clusterErrorPopup=_.extend({},dialogs.errorPopup,{show:function(e){var o=this;require(["bundle!jasperserver_messages","bundle!jsexceptions_messages"],function(e,s){var t=s["cluster.exception.session.attribute.missing.popup"];dialogs.errorPopup.show.call(o,t);var i=e["button.home"];jQuery("#"+o._DOM_ID).find("button span.wrap").html(i)})},_hide:function(e){dialogs.errorPopup._hide.apply(this,arguments),window.location="home.html"}}),dialogs.popup={show:function(e,o,s){require(["stdnav","jquery"],function(t,i){if(s=s||{},e=$(e)){"message"in s&&i(e).find(".body").text(xssUtil.unescape(s.message)),(isIE7()||isIE8())&&(jo=i(e),0==jo.children("div.msshadow").length&&jo.prepend('<div class="msshadow" style="position:absolute;top:-10px;right:10px;bottom:10px;left:-10px;border:0;background:#fff;">&nbsp;</div>')),o&&(pageDimmer.show(),e.match(layoutModule.DIALOG_LOADING_PATTERN)&&pageDimmer.setZindex(e.getStyle("zIndex")-1)),reParent(e,document.body),e.setOpacity(0),e.removeClassName(layoutModule.HIDDEN_CLASS),isIE7()&&!e.match(".sizeable")&&setWidthStyleByReflection(e,".content"),layoutModule.createMover.call(layoutModule,e),layoutModule.createSizer.call(layoutModule,e),s.cascade?cascadeElement(e,{position:s.position,number:s.number,horzOffset:40,vertOffset:40}):centerElement(e,{horz:!0,vert:!0}),dialogs.popup._setMaxZIndex(e),layoutModule.createMover.call(layoutModule,e),isIPad()?e.setOpacity(1)&&e.show():appear(e,.4),i(document.activeElement).addClass("preDialogFocus");var n=e;e&&i(".primary",e).length>0&&(n=i(".primary",e)[0]),(!s||"undefined"==typeof s.focus||s.focus)&&(e.tabIndex=0,n.tabIndex=0,isIE8()?setTimeout(function(){try{n.focus()}catch(e){}},450):n.focus()),!o&&e.observe("click",dialogs.popup.zIndexHandler),t.beginModalFocus(e)}})},hide:function(e){require(["stdnav","jquery"],function(o,s){o.endModalFocus(e);var t=s(".preDialogFocus");t.length&&t.is(":visible")&&(t[0].focus(),t.removeClass("preDialogFocus")),e&&($elem=$(e),$elem.hasClassName(layoutModule.HIDDEN_CLASS)||($elem.addClassName(layoutModule.HIDDEN_CLASS),pageDimmer.hide(),$elem.match(layoutModule.DIALOG_LOADING_PATTERN)&&pageDimmer.setZindex(layoutModule.DIMMER_Z_INDEX)),$elem.stopObserving("click",dialogs.popup.zIndexHandler))})},zIndexHandler:function(e){var o=Event.element(e),s=matchMeOrUp(o,layoutModule.DIALOG_PATTERN);dialogs.popup._setMaxZIndex(s)},_setMaxZIndex:function(e,o){if(e){var s=o?o.getStyle("zIndex"):0,t=document.body.select(layoutModule.DIALOG_PATTERN),i=function(e){e.visible()&&!e.match(layoutModule.DIALOG_LOADING_PATTERN)&&(s=Math.max(s,e.getStyle("zIndex"),layoutModule.DIMMER_Z_INDEX+1))};1==t.length?i(t[0]):t.each(i),e.setStyle({zIndex:Math.max(s+1,e.getStyle("zIndex"))})}}},dialogs.popupConfirm=_.extend({},dialogs.popup,{show:function(e,o,s){dialogs.popup.show.apply(this,arguments),s=_.extend({okButtonSelector:"button.ok",cancelButtonSelector:"button.cancel"},s);var t=jQuery(e),i=t.find(s.okButtonSelector),n=t.find(s.cancelButtonSelector),a=jQuery.Deferred();return i.on("click",function(){s.validateFunc&&s.validateFunc()===!1||(i.off("click"),n.off("click"),dialogs.popupConfirm.hide(e),a.resolve())}),n.on("click",function(){i.off("click"),n.off("click"),dialogs.popupConfirm.hide(e),a.reject()}),a}}),dialogs.childPopup=_.extend({},dialogs.popup,{cascadePopups:{},show:function(e,o,s,t){s?(t=_.extend({parent:s},t),this.cascadePopups[s.id]||(this.cascadePopups[s.id]=[]),this.cascadePopups[s.id].push(e.id),$(e).setAttribute("data-parentDialog",s.id),dialogs.popup.show.apply(this,[e,o,t]),dialogs.popup._setMaxZIndex(e,s),o&&pageDimmer.setZindex(e.getStyle("zIndex")-1),s.stopObserving("click",dialogs.popup.zIndexHandler)):dialogs.popup.show.apply(this,[e,o,t])},hide:function(e){var o=$(e).getAttribute("data-parentDialog");if(o){this.cascadePopups[o]&&(this.cascadePopups[o]=_.without(this.cascadePopups[o],e.id)),dialogs.popup.hide.apply(this,[e]);var s=$(o);pageDimmer.show(s),dialogs.popup._setMaxZIndex(s)}else dialogs.popup.hide.apply(this,[e])}});