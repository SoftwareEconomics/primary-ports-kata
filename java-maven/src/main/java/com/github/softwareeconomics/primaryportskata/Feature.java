package com.github.softwareeconomics.primaryportskata;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.function.Consumer;
import java.util.function.Function;

public class Feature {
  private final String name;
  private final Function<Request, String> handler;
  public static final Logger LOGGER = LoggerFactory.getLogger("request-logger");

  public Feature(String name, Function<Request, String> handler) {
    this.name = name;
    this.handler = handler;
  }

  public static Feature of(String name, Function<Request, String> handler) {
    return new Feature(name, handler);
  }

  public static Feature of(String name, Consumer<Request> handler) {
    return new Feature(name, request -> {
      handler.accept(request);
      return null;
    });
  }

  public String getName() {
    return name;
  }

  public String execute(Request request) {
    String response = handler.apply(request);
    LOGGER.info("{} : {} -> {}", this.name, request.get(), response);
    return response;
  }
}