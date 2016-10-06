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

package com.jaspersoft.jasperserver.rest.services;

import com.jaspersoft.jasperserver.remote.ServiceException;
import com.jaspersoft.jasperserver.rest.RESTService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Login REST service
 * The dirty job of loggin a user and sending out an error is done by the RESTLoginAuthenticationFilter.
 * This service does not return anything.
 * @author gtoffoli
 * @version $Id: RESTLogin.java 47331 2014-07-18 09:13:06Z kklein $
 */
@Component("restLoginService")
public class RESTLogin implements RESTService {

    private final static Log log = LogFactory.getLog(RESTLogin.class);
    @Autowired
    private ApplicationContext context;

    public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServiceException {

//        OperationResult or = service.getServicesUtils().createOperationResult(OperationResult.SUCCESS, null);
//        RESTUtils.sendOperationResult(or, resp);
//
//        if (log.isDebugEnabled())
//                log.debug("REST Login executed succesfully" + ServicesUtils.marshall(or));
    }

    public void setApplicationContext(ApplicationContext ac) throws BeansException {
        this.context = ac;
    }
}
