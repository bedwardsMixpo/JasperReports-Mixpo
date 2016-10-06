package com.jaspersoft.jasperserver.dto.resources.domain;

import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertNotNull;
import static org.testng.Assert.assertTrue;

/**
 * <p/>
 * <p/>
 *
 * @author tetiana.iefimenko
 * @version $Id: ResourceSingleElementTest.java 60839 2016-02-12 15:37:14Z ykovalch $
 * @see
 */
public class ResourceSingleElementTest {

    public static final String SOURCE_NAME = "SourceName";
    public static final String ELEMENT_NAME = "name";
    public static final String TYPE = "Type";
    public static final String EXPRESSION = "Expression";
    ResourceSingleElement sourceElement;
    ResourceSingleElement clonedElement;

    @BeforeMethod
    public void setUp() {

        sourceElement = new ResourceSingleElement()
                .setType(TYPE)
                .setExpression(EXPRESSION)
                .setSourceName(SOURCE_NAME)
                .setName(ELEMENT_NAME);
    }

    @Test
    public void testCloningConstructor() {

        clonedElement = new ResourceSingleElement(sourceElement);

        assertTrue(clonedElement.equals(sourceElement));
        assertFalse(sourceElement == clonedElement);
        assertNotNull(clonedElement.getName());
        assertEquals(ELEMENT_NAME, clonedElement.getName());
        assertNotNull(clonedElement.getSourceName());
        assertEquals(SOURCE_NAME, clonedElement.getSourceName());
        assertNotNull(clonedElement.getExpression());
        assertEquals(EXPRESSION, clonedElement.getExpression());
        assertNotNull(clonedElement.getType());
        assertEquals(TYPE, clonedElement.getType());

    }

}