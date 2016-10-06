/*
 * Copyright (C) 2005 - 2014 TIBCO Software Inc. All rights reserved.
 * http://www.jaspersoft.com.
 *
 * Unless you have purchased  a commercial license agreement from Jaspersoft,
 * the following license terms  apply:
 *
 * This program is free software: you can redistribute it and/or  modify
 * it under the terms of the GNU Affero General Public License  as
 * published by the Free Software Foundation, either version 3 of  the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero  General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public  License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */


/**
 * @author: Igor Nesterenko
 * @version: $Id: request.js 1605 2015-09-23 17:55:32Z inestere $
 */

define(function (require) {
    "use strict";

    var $ = require("jquery"),
        _ = require("underscore"),
        requestSettings = require("requestSettings");

    return function(){
        var mergedOptions =  _.extend({}, requestSettings, arguments[0]);

        if (requestSettings.headers && arguments[0].headers){
            mergedOptions.headers = _.extend({}, requestSettings.headers, arguments[0].headers);
        }
        arguments[0] = mergedOptions;
        return $.ajax.apply($, arguments);
    };
});