define(["require","request","requestSettings","underscore","jrs.configs"],function(e){"use strict";var t=e("request"),r=e("requestSettings"),n=e("underscore"),s=e("jrs.configs"),u=s.contextPath+"/rest_v2/bundles",i="all",d=function(e,s){var d;i===e?d="?expanded=true":(e=e.split("/"),d="/"+e[e.length-1]);var o=n.extend({},r,{type:"GET",dataType:"json",url:u+d});o.headers["Cache-Control"]="private",delete o.headers.Pragma,t(o).then(function(t){s(i!==e?t:n(t).reduce(function(e,t){return n.extend(e,t)},{}))})};return d.load=function(e,t,r,n){return n.isBuild?void r():void d(e,r)},d});