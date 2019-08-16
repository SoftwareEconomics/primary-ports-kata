package com.github.softwareeconomics.primaryportskata;

import static java.util.stream.Collectors.toList;

import java.util.List;
import java.util.stream.Stream;

public class Request {
  private final String rawData;

  public Request(String rawData) {
    this.rawData = rawData;
  }

  public String get() {
    return rawData;
  }

  public List<Integer> getIntList() {
    return Stream.of(rawData.split(","))
        .map(Integer::parseInt)
        .collect(toList());
  }
}
