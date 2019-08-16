package com.github.softwareeconomics.primaryportskata;

import static java.nio.charset.StandardCharsets.UTF_8;
import static java.nio.file.StandardOpenOption.APPEND;
import static java.nio.file.StandardOpenOption.CREATE;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.file.Files;
import java.nio.file.OpenOption;
import java.nio.file.Path;
import java.util.List;
import java.util.stream.Collectors;

public class FilesystemToDoAdapter implements ToDoPort {

  private final Path storageFile;

  public FilesystemToDoAdapter(Path storageFile) {
    this.storageFile = storageFile;
  }

  @Override
  public void create(String description) {
    uncheckedWrite(storageFile, (description + "\n").getBytes(UTF_8), APPEND, CREATE);
  }

  private void uncheckedWrite(Path storageFile, byte[] bytes, OpenOption... options) {
    try {
      Files.write(storageFile, bytes, options);
    } catch (IOException e) {
      throw new UncheckedIOException(e);
    }
  }

  @Override
  public List<ToDoEntry> fetchAll() {
    return uncheckedReadAllLines(storageFile).stream().map(ToDoEntry::new).collect(Collectors.toList());
  }

  private List<String> uncheckedReadAllLines(Path path) {
    try {
      return Files.readAllLines(storageFile);
    } catch (IOException e) {
      throw new UncheckedIOException(e);
    }
  }
}
