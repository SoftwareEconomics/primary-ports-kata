package com.github.softwareeconomics.primaryportskata;

import java.util.List;

public class KataApp {
  public static App buildApp(DeliveryPort deliveryAdapter) {
    return new App(deliveryAdapter)
        .register(new Vertical("calculator")
            .register(Feature.of(
                "div",
                request -> {
                  List<Integer> intList = request.getIntList();
                  return String.valueOf(intList.get(0) / intList.get(1));
                }
            ))
            .register(Feature.of(
                "sum",
                request -> {
                  return request.getIntList().stream().reduce(0, (a, b) -> a + b).toString();
                }
            ))
            .register(Feature.of(
                "multiply",
                request -> {
                  return request.getIntList().stream().reduce(1, (a, b) -> a * b).toString();
                }
            ))
        )
        .register(new Vertical("greeter")
            .register(Feature.of(
                "greet",
                request -> {
                  return String.format("Hi, %s!", request.get());
                }
            ))
        );
  }
}
