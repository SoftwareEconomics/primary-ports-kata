package com.github.softwareeconomics.primaryportskata;

import java.nio.file.Paths;

public class ConsoleApp {
  public static void main(String[] args) {
    KataApp.buildApp(new ConsoleDeliveryAdapter()).start();
  }
}
