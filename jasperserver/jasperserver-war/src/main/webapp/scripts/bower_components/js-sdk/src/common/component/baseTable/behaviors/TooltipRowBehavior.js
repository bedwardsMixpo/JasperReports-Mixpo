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
 * @author: Olesya Bobruyko
 * @version: $Id: TooltipRowBehavior.js 1244 2015-06-09 15:10:14Z obobruyk $
 */

define(function(require) {

    var Marionette = require("backbone.marionette");

    return Marionette.Behavior.extend({
        events: {
            "mouseover": "_onMouseOver",
            "mouseout": "_onMouseOut"
        },

        _onMouseOver: function(e) {
            this.view.trigger("mouseover", this.view.model, e);
        },

        _onMouseOut: function(e) {
            this.view.trigger("mouseout", this.view.model, e);
        }
    });

});

