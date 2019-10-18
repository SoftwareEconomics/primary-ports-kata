package com.github.softwareeconomics.primaryportskata;

import static java.util.stream.Collectors.joining;

public class KataApp {
  public static App buildApp(DeliveryPort deliveryAdapter, ToDoPort toDoAdapter) {
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
        )
        .register(new Vertical("todo")
            .register(Feature.of(
                "create",
                request -> {
                  toDoAdapter.create(request.get());
                }
            ))
            .register(Feature.of(
                "fetchAll",
                request -> {
                  return toDoAdapter.fetchAll().stream().map(ToDoEntry::getDescription).collect(joining("\n"));
                }
            ))
        );
  }
}
