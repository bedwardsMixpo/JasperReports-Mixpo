define(["require","bundle!AttributesBundle","underscore"],function(e){function r(e,r){var t={};return s.each(e,function(e,i){s.isObject(e)?t[e.field]=e.fn(r[i]):t[e]=r[i]}),t}function t(e){return i["attributes.attribute.permissionMask."+e]}var i=e("bundle!AttributesBundle"),s=e("underscore"),n={},a=[i["attributes.error.message.unknown.error"]];return n["access.denied"]=[i["attributes.error.message.access.denied"],["name"]],n[401]=[i["attributes.error.message.not.authenticated"]],n["illegal.parameter.value.error"]=[i["attributes.illegal.parameter.value.error"]],n["attribute.invalid.permission.order"]=[i["attributes.error.message.invalid.permission.order"],["name",{field:"strongerPermission",fn:t},{field:"inheritedPermission",fn:t}]],n["attribute.duplicate.server.level"]=[i["attributes.error.message.duplicate.server.level"],["name"]],function(e){var t,i=e.responseJSON||{},u=i.errorCode,o=i.parameters,l=e.status,d=n[u?u:l]||a;return t=s.template(d[0])(d[1]?r(d[1],o):{})}});