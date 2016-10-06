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
package com.jaspersoft.jasperserver.api.engine.scheduling.quartz;

import java.util.Locale;

import com.jaspersoft.jasperserver.api.common.domain.ExecutionContext;
import com.jaspersoft.jasperserver.api.engine.common.service.EngineService;
import com.jaspersoft.jasperserver.api.engine.scheduling.domain.ReportJob;
import com.jaspersoft.jasperserver.api.metadata.common.domain.DataContainer;
import com.jaspersoft.jasperserver.api.metadata.common.service.RepositoryService;

import net.sf.jasperreports.engine.export.JRHyperlinkProducerFactory;

/**
 * @author Lucian Chirita (lucianc@users.sourceforge.net)
 * @version $Id: ReportJobContext.java 63530 2016-06-09 13:59:59Z tdanciu $
 */
public interface ReportJobContext {

	DataContainer createDataContainer(Output output);
	
	String getCharacterEncoding();
	
	String getBaseFilename();
	
	JRHyperlinkProducerFactory getHyperlinkProducerFactory();
	
	RepositoryService getRepositoryService();
	
	EngineService getEngineService();
	
	String getReportUnitURI();
	
	ExecutionContext getExecutionContext();
	
	Locale getLocale();

	boolean hasOutput(byte outputFormat);

	ReportJob getReportJob();
	
}
