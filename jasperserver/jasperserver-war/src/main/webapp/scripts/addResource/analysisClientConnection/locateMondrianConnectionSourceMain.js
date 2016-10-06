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
 * @version: $Id: locateMondrianConnectionSourceMain.js 10082 2016-04-20 18:28:47Z inestere $
 */

/* global isIPad */

define(function(require) {
    "use strict";

    var domReady = require("!domReady"),
        resourceMondrianLocate = require("resource.analysisConnection.mondrian.locate"),
        _ = require("underscore"),
        jrsConfigs = require("jrs.configs"),
        resource = require("resource.base");

    require("utils.common");

    domReady(function(){
        _.extend(window.localContext, jrsConfigs.locateConnectionSource.localContext);
        _.extend(resourceMondrianLocate.messages, jrsConfigs.locateConnectionSource.resourceMondrianLocate.messages);

        resourceMondrianLocate.initialize();
        isIPad() && resource.initSwipeScroll();
    });
});
