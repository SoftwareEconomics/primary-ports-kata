package com.github.softwareeconomics.primaryportskata;

import java.util.ArrayList;
import java.util.List;

public class InMemoryToDoAdapter implements ToDoPort {
  private final List<ToDoEntry> toDos = new ArrayList<>();

  @Override
  public void create(String description) {
    toDos.add(new ToDoEntry(description));
  }

  @Override
  public List<ToDoEntry> fetchAll() {
    return toDos;
  }
}
