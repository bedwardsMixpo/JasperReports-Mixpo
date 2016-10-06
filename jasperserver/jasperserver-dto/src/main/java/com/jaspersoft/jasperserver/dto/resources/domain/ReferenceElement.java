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
package com.jaspersoft.jasperserver.dto.resources.domain;

/**
 * <p></p>
 *
 * @author Yaroslav.Kovalchyk
 * @version $Id: ReferenceElement.java 55948 2015-07-10 08:47:20Z ykovalch $
 */
public class ReferenceElement extends SchemaElement<ReferenceElement> {
    private String referencePath;

    public ReferenceElement(){}

    public ReferenceElement(ReferenceElement source){
        super(source);
        referencePath = source.getReferencePath();
    }

    public String getReferencePath() {
        return referencePath;
    }

    public ReferenceElement setReferencePath(String referencePath) {
        this.referencePath = referencePath;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ReferenceElement)) return false;
        if (!super.equals(o)) return false;

        ReferenceElement that = (ReferenceElement) o;

        if (referencePath != null ? !referencePath.equals(that.referencePath) : that.referencePath != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (referencePath != null ? referencePath.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "ReferenceElement{" +
                "referencePath='" + referencePath + '\'' +
                "} " + super.toString();
    }
}