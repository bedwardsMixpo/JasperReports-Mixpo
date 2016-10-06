/*
* Copyright (C) 2005 - 2014 Jaspersoft Corporation. All rights  reserved.
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
* along with this program.&nbsp; If not, see <http://www.gnu.org/licenses/>.
*/
package com.jaspersoft.jasperserver.jaxrs.common;

import com.jaspersoft.jasperserver.api.JSSecurityException;
import com.jaspersoft.jasperserver.dto.common.ErrorDescriptor;
import org.springframework.stereotype.Component;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

/**
 * <p></p>
 *
 * @author Yaroslav.Kovalchyk
 * @version $Id: JSSecurityExceptionMapper.java 62954 2016-05-01 09:49:23Z ykovalch $
 */
@Provider
@Component
public class JSSecurityExceptionMapper implements ExceptionMapper<JSSecurityException> {
    @Override
    public Response toResponse(JSSecurityException exception) {
        return Response.status(Response.Status.FORBIDDEN)
                .entity(new ErrorDescriptor().setMessage(exception.getMessage()).setErrorCode("security.6632"))
                .build();
    }
}
