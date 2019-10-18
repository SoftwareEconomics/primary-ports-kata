package com.github.softwareeconomics.primaryportskata;

import java.util.HashMap;
import java.util.Map;

public class Vertical {
  private final String name;
  private final Map<String, Feature> features = new HashMap<>();

  public Vertical(String name) {this.name = name;}

  public Vertical register(Feature feature) {
    features.put(feature.getName(), feature);
    return this;
  }

  public String getName() {
    return name;
  }

  public Feature getFeature(String name) {
    return features.get(name);
  }
}
