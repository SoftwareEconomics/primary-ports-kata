package com.github.softwareeconomics.primaryportskata;

import io.javalin.Javalin;

import java.util.HashMap;
import java.util.Map;

public class WebDeliveryAdapter implements DeliveryPort {
  private final Javalin app;
  private final Map<String, Vertical> verticals = new HashMap<>();
  private final int port;

  public WebDeliveryAdapter(Javalin app, int port) {
    this.app = app;
    this.port = port;
  }

  public static WebDeliveryAdapter atPort(int port) {
    return new WebDeliveryAdapter(Javalin.create(), port);
  }

  @Override
  public void register(Vertical vertical) {
    verticals.put(vertical.getName(), vertical);
  }

  @Override
  public void start() {
    app.get("/:verticalName/:featureName", ctx -> {
      String verticalName = ctx.pathParam("verticalName");
      String featureName = ctx.pathParam("featureName");
      String data = ctx.queryParam("data");
      String result = verticals.get(verticalName).getFeature(featureName).execute(new Request(data));
      ctx.result(result);
    });
    app.start(port);

  }
}
