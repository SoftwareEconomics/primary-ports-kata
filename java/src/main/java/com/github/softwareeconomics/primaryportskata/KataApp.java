package com.github.softwareeconomics.primaryportskata;

public class KataApp {
  public static App buildApp(DeliveryPort adapter) {
    return new App(adapter)
        .register(new Vertical("calculator")
            .register(new Feature("sum", request -> request.getIntList().stream().reduce(0, (a, b) -> a + b).toString()))
            .register(new Feature("multiply", request -> request.getIntList().stream().reduce(1, (a, b) -> a * b).toString()))
        )
        .register(new Vertical("greeter")
            .register(new Feature("greet", request -> String.format("Hi, %s!", request.get()))));
  }
}
