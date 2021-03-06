package com.jaspersoft.jasperserver.dto.resources.domain;

import java.util.ArrayList;
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
 * @version $Id: QueryResourceGroupElementTest.java 60548 2016-02-03 14:06:55Z tiefimen $
 * @see
 */
public class QueryResourceGroupElementTest {

    public static final String ELEMENT_NAME = "name";
    public static final String FILTER_EXPRESSION = "FilterExpression";
    public static final String QUERY = "query";
    public static final String SOURCE_NAME = "SourceName";
    QueryResourceGroupElement sourceElement;
    QueryResourceGroupElement clonedElement;

    @BeforeMethod
    public void setUp() {
        sourceElement = new QueryResourceGroupElement()
                .setName(ELEMENT_NAME)
                .setElements(new ArrayList<SchemaElement>())
                .setFilterExpression(FILTER_EXPRESSION)
                .setQuery(QUERY)
                .setSourceName(SOURCE_NAME);

    }

    @Test
    public void testCloningConstructor() {

        clonedElement = new QueryResourceGroupElement(sourceElement);

        assertTrue(clonedElement.equals(sourceElement));
        assertFalse(sourceElement == clonedElement);
        assertFalse(sourceElement.getElements() == clonedElement.getElements());
        assertNotNull(clonedElement.getName());
        assertEquals(ELEMENT_NAME, clonedElement.getName());
        assertNotNull(clonedElement.getFilterExpression());
        assertEquals(FILTER_EXPRESSION, clonedElement.getFilterExpression());
        assertNotNull(clonedElement.getQuery());
        assertEquals(QUERY, clonedElement.getQuery());
        assertNotNull(clonedElement.getSourceName());
        assertEquals(SOURCE_NAME, clonedElement.getSourceName());

    }
}