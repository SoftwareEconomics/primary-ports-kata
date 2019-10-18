package com.github.softwareeconomics.primaryportskata;

import java.util.HashMap;
import java.util.Map;

public class FakeAdapter implements DeliveryPort {
  private final Map<String, Vertical> verticals = new HashMap<>();

  public String sendRequest(String verticalName, String featureName, String data) {
    return verticals.get(verticalName).getFeature(featureName).execute(new Request(data));
  }

  @Override
  public void register(Vertical vertical) {
    verticals.put(vertical.getName(), vertical);
  }

  @Override
  public void start() {
    // No start needed
  }
}
