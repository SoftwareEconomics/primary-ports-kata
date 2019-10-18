package com.github.softwareeconomics.primaryportskata;

import java.util.List;

public interface ToDoPort {
  void create(String description);

  List<ToDoEntry> fetchAll();
}