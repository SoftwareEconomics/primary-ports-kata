package com.github.softwareeconomics.primaryportskata;

public class KataApp {
  public static App buildApp(DeliveryPort deliveryAdapter) {
    return new App(deliveryAdapter)
        .register(new Vertical("calculator")
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
