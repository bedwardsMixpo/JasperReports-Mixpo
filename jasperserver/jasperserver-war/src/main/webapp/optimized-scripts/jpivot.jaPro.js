function click(){for(i=0;i<document.forms.length;i++)for(nl=document.forms[i].getElementsByTagName("INPUT"),j=0;j<nl.length;j++)for(n=nl.item(j),al=n.attributes,k=0;k<al.length;k++)if(a=al.item(k),"name"==a.nodeName){if(a.nodeValue!=argv)break;for(al0=n.attributes,k0=0;k0<al0.length;k0++)a0=al0.item(k0),("onclick"==a0.nodeName||"ondblclick"==a0.nodeName)&&(a0.nodeValue=null);n.click()}}function dblClick(e){for(i=0;i<document.forms.length;i++)for(nl=document.forms[i].getElementsByTagName("INPUT"),j=0;j<nl.length;j++)for(n=nl.item(j),al=n.attributes,k=0;k<al.length;k++)if(a=al.item(k),"name"==a.nodeName){if(a.nodeValue!=e)break;for(n=nl.item(++j),al0=n.attributes,k0=0;k0<al0.length;k0++)if(a0=al0.item(k0),"disabled"==a0.nodeName){a0.nodeValue=!1;break}n.click(),document.forms[i].submit()}}function launch(e){null==childWin||childWin.closed?childWin=launchCenter(e,"center",700,1100):(childWin.close(),childWin=launchCenter(e,"center",700,1100)),childWin.focus()}function launchCenter(e,n,i,l){var t="height="+i+",innerHeight="+i;if(t+=",width="+l+",innerWidth="+l,window.screen){var a=screen.availHeight-30,o=screen.availWidth-10,c=(o-l)/2,s=(a-i)/2;t+=",left="+c+",screenX="+c,t+=",top="+s+",screenY="+s,t+=",channelmode=0,dependent=1,directories=0,fullscreen=0,location=0,menubar=0,resizable=1,scrollbars=1,status=1,toolbar=0","drillThroughWindow"}return window.open(e,n,t)}function ld(e){return launch("../"+olapPage+"?name="+viewURI+"&"+e+"=x&d=x")}function lc(e){return location.replace("../"+olapPage+"?name="+viewURI+"&"+e+"=x&d=y")}function z(e){return location.replace("../"+olapPage+"?name="+viewURI+"&"+e+"=x&d=z")}function closeChildWin(){childWin&&!childWin.closed&&childWin.close()}function initialize(){bWidth=document.body.offsetWidth,bHeight=document.body.offsetHeight,subobj=document.getElementById("displayFormTable"),subobj&&(sWidth=subobj.offsetWidth,sHeight=subobj.offsetHeight,posX=(bWidth-sWidth)/2,posY=(bHeight-sHeight)/2),saveAsViewName=document.getElementById("viewName"),saveAsViewName&&""==saveAsViewName.value&&(saveAsViewName.value="${olapSession.olapUnit.label}_<%=copyString%>"),images=$$("img");for(var e=0;e<images.length;e++)images[e].onclick=function(e){pageAlert=!1};links=$$("a");for(var e=0;e<links.length;e++)links[e].onclick=function(e){pageAlert=!1};helpElement=$("help"),helpElement&&(helpElement.onclick=webHelpModule.displayWebHelp),inputs=$$("input.corner");for(var e=0;e<inputs.length;e++)inputs[e].onclick=function(e){pageAlert=!1};inputs=$$("input.nav");for(var e=0;e<inputs.length;e++)inputs[e].onclick=function(n){return pageAlert=!1,t=setTimeout("click()",250),argv=inputs[e].id,!1},inputs[e].ondblclick=function(n){return clearTimeout(t),dblClick(inputs[e].id),!1}}var bWidth=1,bHeight=1,sWidth=0,sHeight=0,posX=0,posY=0,subobj,i,j,k,k0,nl,al,al0,n,a,a0,t,argv,childWin,saveAsViewName,images,links,helpElement,inputs;document.observe("dom:loaded",function(){if(initialize(),webHelpModule.setCurrentContext("analysis"),isIPad()){var e=$("olapViewForm");new TouchController(e,e.up(),{absolute:!0})}});