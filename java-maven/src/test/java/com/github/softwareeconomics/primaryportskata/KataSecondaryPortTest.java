package com.github.softwareeconomics.primaryportskata;

import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertThat;

public class KataSecondaryPortTest {

  private FakeAdapter deliveryAdapter;
  private InMemoryToDoAdapter operationLogAdapter;

  @Before
  public void setUp() {
    deliveryAdapter = new FakeAdapter();
    operationLogAdapter = new InMemoryToDoAdapter();
    KataApp.buildApp(deliveryAdapter, operationLogAdapter).start();
  }

  @Test
  public void records_executed_operations() {
    deliveryAdapter.sendRequest("todo", "create", "Cocoterizar el cocotero");
    String result = deliveryAdapter.sendRequest("todo", "fetchAll", "");
    assertThat(result, Matchers.is("Cocoterizar el cocotero"));

  }
}
