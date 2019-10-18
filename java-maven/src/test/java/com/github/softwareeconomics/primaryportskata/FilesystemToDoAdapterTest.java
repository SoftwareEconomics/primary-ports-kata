package com.github.softwareeconomics.primaryportskata;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.assertThat;

public class FilesystemToDoAdapterTest {

  private Path storageFile;

  @Before
  public void setUp() throws IOException {
    storageFile = Files.createTempFile("primary-ports-kata-", ".txt");
  }

  @After
  public void tearDown() throws Exception {
    Files.delete(storageFile);
  }

  @Test
  public void creates_and_reads_to_do_entries() {
    FilesystemToDoAdapter adapter = new FilesystemToDoAdapter(storageFile);

    adapter.create("cocotero");
    assertThat(Files.exists(storageFile), is(true));

    assertThat(adapter.fetchAll(), allOf(
        hasItem(new ToDoEntry("cocotero"))
    ));
  }

  @Test
  public void regression_can_work_with_an_existing_file() {
    FilesystemToDoAdapter adapter = new FilesystemToDoAdapter(storageFile);

    adapter.create("cocotero");
    // By creating a second entry, we ensure that the adapter has to
    // write into an existing files (created by the first adapter.create() call)
    adapter.create("chuchu");

    assertThat(adapter.fetchAll(), allOf(
        hasItem(new ToDoEntry("cocotero")),
        hasItem(new ToDoEntry("chuchu"))
    ));
  }
}
