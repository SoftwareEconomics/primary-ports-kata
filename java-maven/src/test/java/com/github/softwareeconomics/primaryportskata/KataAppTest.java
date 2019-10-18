package com.github.softwareeconomics.primaryportskata;

import org.junit.Before;
import org.junit.Test;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

public class KataAppTest {

  private FakeAdapter deliveryAdapter;

  @Before
  public void setUp() {
    deliveryAdapter = new FakeAdapter();
    KataApp.buildApp(deliveryAdapter).start();
  }

  @Test
  public void knows_how_to_greet_people() {
    String result = deliveryAdapter.sendRequest("greeter", "greet", "Luigi & Guillermo");
    assertThat(result, is("Hi, Luigi & Guillermo!"));
  }

  @Test
  public void knows_how_to_sum_a_list_of_integers() {
    String result = deliveryAdapter.sendRequest("calculator", "sum", "1,2,3");
    assertThat(result, is("6"));
  }

  @Test
  public void knows_how_to_multiply_a_list_of_integers() {
    String result = deliveryAdapter.sendRequest("calculator", "multiply", "1,2,3,4");
    assertThat(result, is("24"));
  }
}
