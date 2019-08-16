package com.github.softwareeconomics.primaryportskata;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Test;

public class KataAppTest {

  private FakeAdapter adapter;

  @Before
  public void setUp() {
    adapter = new FakeAdapter();
    KataApp.buildApp(adapter).start();
  }

  @Test
  public void knows_how_to_greet_people() {
    String result = adapter.sendRequest("greeter", "greet", "Luigi & Guillermo");
    assertThat(result, is("Hi, Luigi & Guillermo!"));
  }

  @Test
  public void knows_how_to_sum_a_list_of_integers() {
    String result = adapter.sendRequest("calculator", "sum", "1,2,3");
    assertThat(result, is("6"));
  }

  @Test
  public void knows_how_to_multiply_a_list_of_integers() {
    String result = adapter.sendRequest("calculator", "multiply", "1,2,3,4");
    assertThat(result, is("24"));
  }
}
