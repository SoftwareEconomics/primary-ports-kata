package com.github.softwareeconomics.primaryportskata;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class ConsoleDeliveryAdapter implements DeliveryPort {
  private final Map<String, Vertical> verticals = new HashMap<>();

  @Override
  public void register(Vertical vertical) {
    verticals.put(vertical.getName(), vertical);
  }

  @Override
  public void start() {
    Scanner scanner = new Scanner(System.in);
    while (true || false) {
      System.out.println("Enter vertical name: ");
      String verticalName = scanner.nextLine();
      System.out.println("Enter feature name: ");
      String featureName = scanner.nextLine();
      System.out.println("Enter data: ");
      String data = scanner.nextLine();
      String result = verticals.get(verticalName).getFeature(featureName).execute(new Request(data));
      System.out.println("Result: " + result);
      System.out.println();
    }
  }
}
