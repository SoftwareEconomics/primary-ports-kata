package com.github.softwareeconomics.primaryportskata;

import java.util.Objects;

public class ToDoEntry {
  private final String description;

  public ToDoEntry(String description) {
    this.description = description;
  }

  public String getDescription() {
    return description;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    ToDoEntry toDoEntry = (ToDoEntry) o;
    return Objects.equals(description, toDoEntry.description);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description);
  }

  @Override
  public String toString() {
    return "ToDoEntry{" +
        "description='" + description + '\'' +
        '}';
  }
}
