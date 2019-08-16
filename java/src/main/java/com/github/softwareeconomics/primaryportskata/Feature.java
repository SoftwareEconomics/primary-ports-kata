package com.github.softwareeconomics.primaryportskata;


import java.util.function.Function;

public class Feature {
  private final String name;
  private final Function<Request, String> handler;

  public Feature(String name, Function<Request, String> handler) {
    this.name = name;
    this.handler = handler;
  }

  public String getName() {
    return name;
  }

  public String execute(Request request) {
    return handler.apply(request);
  }
}
