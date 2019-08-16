package com.github.softwareeconomics.primaryportskata;

public class App {
  private final DeliveryPort adapter;

  public App(DeliveryPort adapter) {
    this.adapter = adapter;
  }

  public void start() {
    adapter.start();
  }

  public App register(Vertical vertical) {
    adapter.register(vertical);
    return this;
  }
}
