function AjaxRequester(e,t,a,r){this.url=e||document.location.toString(),this.params=t,this.xmlhttp=getXMLHTTP();var n=this.processResponse(this);this.xmlhttp.onreadystatechange=n,this.postData=a,this.async=!r,this.requestTime=+new Date}function handleResponse(e){checkForErrors(e)||e.responseHandler(e),ajaxRequestEnded(e),JRS&&JRS.vars&&(JRS.vars.ajax_in_progress=!1),document.getElementById("mainTableContainerOverlay")&&(document.getElementById("mainTableContainerOverlay").className="hidden")}function targettedResponseHandler(e){var t=e.xmlhttp,a=e.params[0],r=e.params[1],n=e.params[2],o=(e.params[3],$(a));if(r)o.innerHTML="",updateUsingResponseSubset(t,r,o);else{var s=t.responseText.trim();if(0===s.indexOf("<div")){var i=s.substring(0,s.indexOf(">")+1),d=s.substring(s.indexOf(">")+1,s.lastIndexOf("</")),p=s.substring(s.lastIndexOf("</")),l=jQuery(i+p);l.text(xssUtil.escape(d)),jQuery(o).html(l)}else jQuery(o).html(s)}invokeCallbacks(n,o)}function cumulativeResponseHandler(e){var t=e.xmlhttp,a=e.params[0],r=e.params[1],n=e.params[2],o=$(a);r?updateUsingResponseSubset(t,r,o):o.insert(t.responseText,{position:"after"}),invokeCallbacks(n)}function rowCopyResponseHandler(e){var t=e.xmlhttp,a=e.params[0],r=e.params[2],n=$(a);if("TABLE"!==n.tagName)return void alert("Ajax Exception: rowCopyResponseHandler will not work for container "+n.tagName);var o=Builder.node("DIV");o.innerHTML=t.responseText,copyTable(o.getElementsByTagName("table")[0],n,!1,!1),invokeCallbacks(r)}function updateUsingResponseSubset(e,t,a){function r(){if(!(l>=p)){var e=jQuery(d.get(l));e.attr("src")?(l++,n(e.attr("data-custname"),e.attr("src"),r)):(l++,o(e.html(),r))}}function n(e,t,a){var r=a||!1,n=document.createElement("script");window.jr_scripts||(window.jr_scripts={}),window.jr_scripts[e]||"jr_jq_min"===e?r&&a():(n.setAttribute("type","text/javascript"),n.readyState?n.onreadystatechange=function(){("loaded"===n.readyState||"complete"===n.readyState)&&(n.onreadystatechange=null,r&&a())}:n.onload=function(){r&&a()},n.src=t,document.getElementsByTagName("head")[0].appendChild(n),window.jr_scripts[e]=t)}function o(e,t){var a=t||!1;if(e){var r=e.match(/^.*((\r\n|\n|\r)|$)/gm);window.eval(r.join("\n")),a&&t()}}var s=jQuery(e.responseText),i=s.filter("#"+t);if("TABLE"==a.tagName&&"TABLE"==$(t).tagName?copyTableJquery(i,a,!0):jQuery(a).append(i.html()),"undefined"!=typeof jQuery){var d=s.filter("script.jasperreports"),p=d.size(),l=0;r()}}function invokeCallbacks(callback,customArg){callback&&("string"==typeof callback?eval(callback):callback(customArg))}function ajaxClobberredUpdate(e,t){t.responseHandler=clobberingResponseHandler,ajaxUpdate(e,t)}function ajaxTargettedUpdate(url,options){var responseHandler;responseHandler=options.mode==AjaxRequester.prototype.CUMULATIVE_UPDATE?cumulativeResponseHandler:options.mode==AjaxRequester.prototype.ROW_COPY_UPDATE?rowCopyResponseHandler:options.mode==AjaxRequester.prototype.EVAL_JSON?evalJSONResponseHandler:targettedResponseHandler,options.responseHandler=function(requester,params){options.preFillAction?"string"==typeof options.preFillAction?eval(options.preFillAction):options.preFillAction(responseHandler(requester,params)):responseHandler(requester,options.params)},ajaxUpdate(url,options)}function ajaxNonReturningUpdate(e,t){t.responseHandler=null,ajaxUpdate(e,t)}function ajaxClobberedFormSubmit(e,t,a){var r=getPostData(e,extraPostData);a.postData=appendPostData(r,extraPostData),a.responseHandler=clobberingResponseHandler,ajaxUpdate(t,a)}function ajaxTargettedFormSubmit(e,t,a){var r=getPostData(e,a.extraPostData);a.postData=appendPostData(r,a.extraPostData),a.responseHandler=targettedResponseHandler,ajaxUpdate(t,a)}function ajaxErrorHandler(){showMessageDialog(ajaxError,ajaxErrorHeader)}function doNothing(){}function ajaxUpdate(e,t){var a=!0,r=new AjaxRequester(e,[t.fillLocation,t.fromLocation,t.callback,t.isAutomaticRefresh],t.postData,t.synchronous);isIPad()&&"adhoc"==JRS.vars.current_flow&&(JRS.vars.ajax_in_progress||(JRS.vars.ajax_in_progress=!0)),a&&(r.busyCursor=!t.silent,r.showLoading=!t.silent&&!t.hideLoader,r.responseHandler=t.responseHandler||doNothing,r.responseHandler!=doNothing&&ajaxRequestStarted(r),t.errorHandler&&(r.errorHandler=t.errorHandler),r.xmlhttp&&(t.postData?r.doPost():r.doGet()))}function checkForErrors(e){var t=e.errorHandler;return t(e.xmlhttp)}function getPostData(e,t){"string"==typeof e&&(e=document.forms[e]);for(var a="",r=0;r<e.elements.length;++r){var n=e.elements[r];!n.name||t&&t[n.name]||(a=appendFormInput(a,n))}return a}function appendPostData(e,t){for(var a in t)e=appendFormValue(e,a,t[a]);return e}function appendFormInput(e,t){if(t.name){var a,r=!1;switch(t.type){case"checkbox":case"radio":r=t.checked,a=t.value;break;case"hidden":case"password":case"text":case"Textarea":r=!0,a=t.value;break;case"select-one":case"select-multiple":a=[];for(var n=0;n<t.options.length;++n){var o=t.options[n];o.selected&&(r=!0,a.push(o.value))}}if(r)if(a.shift)for(;a.length>0;)e=appendFormValue(e,t.name,a.shift());else e=appendFormValue(e,t.name,a)}return e}function appendFormValue(e,t,a){return e.length>0&&(e+="&"),e+=t+"="+encodeURIComponent(a)}function baseErrorHandler(e){if(500==e.status)return showErrorPopup(e.responseText),!0;var t=e.getResponseHeader("LoginRequested");if(t){var a=".";return document.location=a,!0}var r=e.getResponseHeader("JasperServerError");if(r){var n=e.getResponseHeader("SuppressError");if(!n){var o=jQuery(".dashboardViewFrame");if(1==o.length){document.body.innerHTML=e.responseText;var s=jQuery("#"+JRS.fid,window.parent.document);s.removeClass("hidden").show()}else showErrorPopup(e.responseText)}return!0}return!1}function showErrorPopup(e,t){(e&&e.indexOf("sessionAttributeMissingException"))>-1?dialogs.clusterErrorPopup.show(e):dialogs.errorPopup.show(e,!1,t)}function hideErrorPopup(){popOverlayObject();var e=document.getElementById(ERROR_POPUP_DIV);e.style.display="none"}function ajaxRequestStarted(e){++ajax.ajaxRequestCount,e.busyCursor&&(document.body.style.cursor="wait"),!isIPad()&&e.showLoading&&e.startResponseTimer()}function ajaxRequestEnded(e){e.cancelResponseTimer(),ajax.ajaxRequestCount<=1?(document.body.style.cursor="auto",ajax.ajaxRequestCount=0,dialogs.popup.hide($(ajax.LOADING_ID))):ajax.ajaxRequestCount--}function isValidJsonResponse(e){var t=e.getResponseHeader("Content-Type");return 200==e.status&&null!=t&&t.indexOf("application/json")>=0}function getXMLHTTP(){var e,t;if(!t&&!e)try{t=new XMLHttpRequest}catch(a){alert("You need a browser which supports an XMLHttpRequest Object.\nMozilla build 0.9.5 has this Object and IE5 and above, others may do, I don't know, any info jim@jibbering.com")}return t}var ajax={};ajax.cancelRequestsBefore,ajax.LOADING_ID="loading",AjaxRequester.addVar("CUMULATIVE_UPDATE","c").addVar("ROW_COPY_UPDATE","r").addVar("TARGETTED_REPLACE_UPDATE","t").addVar("EVAL_JSON","j").addVar("DUMMY_POST_PARAM","dummyPostData").addVar("MAX_WAIT_TIME",2e3).addVar("errorHandler",function(){return!1}).addMethod("doGet",function(){return this.xmlhttp?(this.xmlhttp.open("GET",this.url,this.async),this.xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),this.xmlhttp.setRequestHeader("If-Modified-Since","Sat, 1 Jan 2000 00:00:00 GMT"),this.xmlhttp.setRequestHeader("x-requested-with","AJAXRequest"),this.xmlhttp.send(null),!0):!1}).addMethod("doPost",function(){return this.xmlhttp?(this.postData===AjaxRequester.prototype.DUMMY_POST_PARAM&&(this.postData=null),this.xmlhttp.open("POST",this.url,this.async),this.xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),this.xmlhttp.setRequestHeader("x-requested-with","AJAXRequest"),this.xmlhttp.send(this.postData),!0):!1}).addMethod("processResponse",function(e){return function(){if(4==e.xmlhttp.readyState){if(ajax.cancelRequestsBefore&&ajax.cancelRequestsBefore>e.requestTime)return void ajaxRequestEnded(e);handleResponse(e)}}}).addMethod("setErrorHandler",function(e){this.errorHandler=errorHandler}).addMethod("verifyAjaxResponse",function(){return this.xmlhttp.getResponseHeader("Server")||this.confirmContinue()}).addMethod("startResponseTimer",function(){this.responseTimer=window.setTimeout(function(){dialogs.popup.show($(ajax.LOADING_ID),!0)},this.MAX_WAIT_TIME)}).addMethod("cancelResponseTimer",function(){window.clearTimeout(this.responseTimer)}).addMethod("confirmContinue",function(){return confirm(serverIsNotResponding)});var clobberingResponseHandler=function(e){var t=e.params[2];document.body.innerHTML=e.xmlhttp.responseText,document.fire("dom:loaded"),invokeCallbacks(t)},evalJSONResponseHandler=function(e){var t=null;try{t=e.xmlhttp.responseText.evalJSON()}catch(a){window.console&&console.log(a)}var r=e.params[2];invokeCallbacks(r,t)},ERROR_POPUP_DIV="jsErrorPopup",ERROR_POPUP_CONTENTS="errorPopupContents",ERROR_POPUP_BACK_BUTTON="errorBack",ERROR_POPUP_CLOSE_BUTTON="errorPopupCloseButton";ajax.ajaxRequestCount=0;