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

package com.jaspersoft.jasperserver.ws.axis2;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.activation.DataSource;

/**
 * @author Lucian Chirita (lucianc@users.sourceforge.net)
 * @version $Id: ResultAttachments.java 47331 2014-07-18 09:13:06Z kklein $
 */
public class ResultAttachments {

	private boolean encapsulationDime;
	private Map attachmentsData = new LinkedHashMap();
	
	public void addAttachment(String name, DataSource dataSource) {
		attachmentsData.put(name, dataSource);
	}
	
	public Map getAttachmentsData() {
		return attachmentsData;
	}
	
	public boolean isEncapsulationDime() {
		return encapsulationDime;
	}
	
	public void setEncapsulationDime(boolean encapsulationDime) {
		this.encapsulationDime = encapsulationDime;
	}

}
