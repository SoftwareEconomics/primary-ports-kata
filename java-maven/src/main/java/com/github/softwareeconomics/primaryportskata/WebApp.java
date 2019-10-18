package com.github.softwareeconomics.primaryportskata;

public class WebApp {
  public static void main(String[] args) {
    KataApp.buildApp(WebDeliveryAdapter.atPort(7000)).start();
  }
}
