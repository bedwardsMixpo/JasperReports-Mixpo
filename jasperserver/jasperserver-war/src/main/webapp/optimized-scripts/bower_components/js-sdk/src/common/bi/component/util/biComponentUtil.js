define(["require","exports","module","underscore.string","tv4","jquery","backbone","underscore","logger","../../error/biComponentErrorFactory"],function(e,r,n){"use strict";function t(e){if(e&&e instanceof a.Model&&e.get("_destroyed"))throw f.alreadyDestroyedError()}function i(e){var r=e;if(e.subErrors&&e.subErrors.length){var n=s.filter(e.subErrors,function(e){return e.code!=u.errorCodes.ENUM_MISMATCH}),t=n.length>0;if(t)r=i(n[0]);else{var o=s.all(e.subErrors,function(e){return!s.isUndefined(e.subErrors)});o&&(r=s.max(e.subErrors,function(e){var r=e.dataPath;return s.count(r,"/")}))}}return r}function o(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}e("underscore.string");var u=e("tv4"),c=e("jquery"),a=e("backbone"),s=e("underscore"),d=e("logger").register(n),f=e("../../error/biComponentErrorFactory"),l={cloneDeep:function(e){return s.cloneDeep(e,function(e){return e instanceof c?e:void 0})},createField:function(e,r,n,i,o){e[r]=function(u){if(t(o),!arguments.length)return l.ES5Object(l.cloneDeep(n[r]));var c=l.cloneDeep(u);if(i&&i.length)for(var a=0;a<i.length;a++)delete c[i[a]];return n[r]=s.extend({},n[r],c),void 0!==o&&"properties"==r&&o.set(l.cloneDeep(n[r])),e}},createReadOnlyField:function(e,r,n,i,o){e[r]=function(u){if(t(o),!arguments.length)return l.ES5Object(l.cloneDeep(n[r]));if(i)throw new Error("The field '"+r+"' cannot be set at this moment.");return e}},createProperty:function(e,r,n,i){e[r]=function(o){return t(i),arguments.length?(n.properties[r]=o,i&&i instanceof a.Model&&i.set(r,l.cloneDeep(n.properties[r])),e):n.properties[r]}},createReadOnlyProperty:function(e,r,n,i,o){e[r]=function(u){if(t(o),!arguments.length)return n.properties[r];if(i)throw new Error("The property '"+r+"' cannot be set at this moment.");return e}},createValidateAction:function(e,r,n){return function(){return t(n),l.validateObject(r,e.properties)}},createInstancePropertiesAndFields:function(e,r,n,t,i,o){function u(e,r){return l.createField(e,r,this,!1,o),e}function c(e,r){return l.createReadOnlyField(e,r,this,!0,o),e}function a(e,r){return l.createProperty(e,r,this,o),e}s.reduce(n,s.bind(a,r),e),s.reduce(t,s.bind(u,r),e),s.reduce(i,s.bind(c,r),e)},createDeferredAction:function(){var e=arguments;return function(r,n,t){var i=new c.Deferred;r&&s.isFunction(r)&&i.done(r),n&&s.isFunction(n)&&i.fail(n),t&&s.isFunction(t)&&i.always(t);try{var o=e[0],u=e[1],a=Array.prototype.slice.call(e,2);if(u.get("_destroyed")){var l=f.alreadyDestroyedError();d.error(l.toString()),i.reject(l)}else a.unshift(i),o.apply(this,a)}catch(p){var b=f.javaScriptException(p);d.error(b.toString()),i.reject(b)}return i}},validateObject:function(e,r){var n=u.validateResult(r,e,!1,!0);return n.valid?void 0:i(n.error)},ES5Object:function(e){return s.isArray(e)?this.ES5Array(e):(s.isObject(e)&&s.each(s.keys(e),function(r){l.ES5Object(e[r])}),e)},ES5Array:function(e){if(!s.isArray(e))throw new Error("Must be array!",e);return e.indexOf||(e.indexOf=s.bind(s.indexOf,e,e)),e.lastIndexOf||(e.lastIndexOf=s.bind(s.lastIndexOf,e,e)),e.forEach||(e.forEach=s.bind(s.each,e,e)),e.every||(e.every=s.bind(s.every,e,e)),e.some||(e.some=s.bind(s.some,e,e)),e.map||(e.map=s.bind(s.map,e,e)),e.filter||(e.filter=s.bind(s.filter,e,e)),e.reduce||(e.reduce=s.bind(s.reduce,e,e)),e.reduceRight||(e.reduceRight=s.bind(s.reduceRight,e,e)),e},bindContextToArgument:function(e,r){if(!r)return r;if(s.isFunction(r.done)&&s.isFunction(r.fail)&&s.isFunction(r.progress)){var n=c.Deferred();return r.progress(function(){n.notifyWith(e,arguments)}),r.fail(function(){n.rejectWith(e,arguments)}),r.done(function(){n.resolveWith(e,arguments)}),n}return s.isString(r.jquery)?r:o(r)?r:s.isFunction(r)?s.bind(r,e):s.isArray(r)?s.map(r,function(r){return l.bindContextToArgument(e,r)}):s.isObject(r)?s.reduce(r,function(r,n,t){return r[t]=l.bindContextToArgument(e,n),r},{}):r}};return l});