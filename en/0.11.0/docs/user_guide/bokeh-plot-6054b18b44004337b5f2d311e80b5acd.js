
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
  }

  function run_callbacks() {
    window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
    delete window._bokeh_onload_callbacks
    console.info("Bokeh: all callbacks have finished");
  }

  function load_libs(js_urls, callback) {
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading > 0) {
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
      return null;
    }
    if (js_urls == null || js_urls.length === 0) {
      run_callbacks();
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
    window._bokeh_is_loading = js_urls.length;
    for (var i = 0; i < js_urls.length; i++) {
      var url = js_urls[i];
      var s = document.createElement('script');
      s.src = url;
      s.async = false;
      s.onreadystatechange = s.onload = function() {
        window._bokeh_is_loading--;
        if (window._bokeh_is_loading === 0) {
          console.log("Bokeh: all BokehJS libraries loaded");
          run_callbacks()
        }
      };
      s.onerror = function() {
        console.warn("failed to load library " + url);
      };
      console.log("Bokeh: injecting script tag for BokehJS library: ", url);
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };var element = document.getElementById("2448d513-a22b-4a91-8262-4f56f5672fc8");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2448d513-a22b-4a91-8262-4f56f5672fc8' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"6a5742f7-4ec5-4bd4-8ec6-08471e7cfc76": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Grid", "id": "0f5d41fe-dfef-4856-ba07-c0d5fc9b324e", "attributes": {"ticker": {"type": "BasicTicker", "id": "6ea3e03d-a0b2-428a-9c2a-5f8169bf1043"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "7099e318-5af4-4746-a3c5-ae7f65bb4567"}, "grid_line_alpha": {"value": 0.5}, "grid_line_dash": [6, 4]}}, {"type": "ResetTool", "id": "2374743b-5a3b-4048-ae93-7a2415fb1d9f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "7099e318-5af4-4746-a3c5-ae7f65bb4567"}}}, {"type": "DataRange1d", "id": "fbde9881-14d2-4b7d-9522-ab50858a3d41", "attributes": {"callback": null}}, {"type": "Circle", "id": "e2cce235-56c3-482f-b125-92f0dfb6d604", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "Plot", "id": "7099e318-5af4-4746-a3c5-ae7f65bb4567", "attributes": {"tools": [{"type": "PanTool", "id": "1440d7c6-f9ae-4228-8121-12cf16285907"}, {"type": "WheelZoomTool", "id": "52bc05a7-fa5a-471e-9222-90df867107e7"}, {"type": "BoxZoomTool", "id": "355a054d-3ac5-40de-b3e1-780eb4cc9be1"}, {"type": "PreviewSaveTool", "id": "786a6231-40d2-4a9c-8589-652857fef3c6"}, {"type": "ResizeTool", "id": "8ac6df5b-8321-4eaa-9ff4-4e4d67c02fb1"}, {"type": "ResetTool", "id": "2374743b-5a3b-4048-ae93-7a2415fb1d9f"}, {"type": "HelpTool", "id": "fdc72beb-5328-44d9-8cac-16aff0b77ee2"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "017a92a6-5792-4a43-a4ca-a9cec5c7a217"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "63195dd6-120e-472f-a69c-87feec6317a0"}, {"type": "Grid", "id": "71778b10-0469-4f29-adc2-905cbcbb197a"}, {"type": "LinearAxis", "id": "d910a79b-fda0-4863-b1aa-9f6be8dc09e5"}, {"type": "Grid", "id": "0f5d41fe-dfef-4856-ba07-c0d5fc9b324e"}, {"type": "BoxAnnotation", "id": "42b4ab59-1c23-4900-83d5-4958bbd39994"}, {"type": "GlyphRenderer", "id": "6f12f6c1-e789-4dfa-8c79-db6af28df4d6"}], "left": [{"type": "LinearAxis", "id": "d910a79b-fda0-4863-b1aa-9f6be8dc09e5"}], "below": [{"type": "LinearAxis", "id": "63195dd6-120e-472f-a69c-87feec6317a0"}], "tool_events": {"type": "ToolEvents", "id": "0391e0df-6cb5-4325-b09a-d299f027bffd"}, "x_range": {"type": "DataRange1d", "id": "fbde9881-14d2-4b7d-9522-ab50858a3d41"}}, "subtype": "Figure"}, {"type": "BasicTickFormatter", "id": "a2472156-dc84-4e62-b100-ffe61f7a0aa0", "attributes": {}}, {"type": "ToolEvents", "id": "0391e0df-6cb5-4325-b09a-d299f027bffd", "attributes": {}}, {"type": "PreviewSaveTool", "id": "786a6231-40d2-4a9c-8589-652857fef3c6", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "7099e318-5af4-4746-a3c5-ae7f65bb4567"}}}, {"type": "LinearAxis", "id": "d910a79b-fda0-4863-b1aa-9f6be8dc09e5", "attributes": {"ticker": {"type": "BasicTicker", "id": "6ea3e03d-a0b2-428a-9c2a-5f8169bf1043"}, "formatter": {"type": "BasicTickFormatter", "id": "a2472156-dc84-4e62-b100-ffe61f7a0aa0"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "7099e318-5af4-4746-a3c5-ae7f65bb4567"}}}, {"type": "WheelZoomTool", "id": "52bc05a7-fa5a-471e-9222-90df867107e7", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "7099e318-5af4-4746-a3c5-ae7f65bb4567"}}}, {"type": "GlyphRenderer", "id": "6f12f6c1-e789-4dfa-8c79-db6af28df4d6", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "0b05a6c5-6627-4836-9f35-2a4a4657b6d8"}, "nonselection_glyph": {"type": "Circle", "id": "afab37c5-f0a0-4e00-9c97-8ed4fd259a4b"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "e2cce235-56c3-482f-b125-92f0dfb6d604"}}}, {"type": "ResizeTool", "id": "8ac6df5b-8321-4eaa-9ff4-4e4d67c02fb1", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "7099e318-5af4-4746-a3c5-ae7f65bb4567"}}}, {"type": "BasicTicker", "id": "6ea3e03d-a0b2-428a-9c2a-5f8169bf1043", "attributes": {}}, {"type": "BasicTickFormatter", "id": "30a51932-fac5-44a5-af26-2e264f1e34e4", "attributes": {}}, {"type": "ColumnDataSource", "id": "0b05a6c5-6627-4836-9f35-2a4a4657b6d8", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "DataRange1d", "id": "017a92a6-5792-4a43-a4ca-a9cec5c7a217", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "71ea4624-31de-4235-8e68-16e0fcc93f27", "attributes": {}}, {"type": "BoxZoomTool", "id": "355a054d-3ac5-40de-b3e1-780eb4cc9be1", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "42b4ab59-1c23-4900-83d5-4958bbd39994"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "7099e318-5af4-4746-a3c5-ae7f65bb4567"}}}, {"type": "Circle", "id": "afab37c5-f0a0-4e00-9c97-8ed4fd259a4b", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "LinearAxis", "id": "63195dd6-120e-472f-a69c-87feec6317a0", "attributes": {"ticker": {"type": "BasicTicker", "id": "71ea4624-31de-4235-8e68-16e0fcc93f27"}, "formatter": {"type": "BasicTickFormatter", "id": "30a51932-fac5-44a5-af26-2e264f1e34e4"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "7099e318-5af4-4746-a3c5-ae7f65bb4567"}}}, {"type": "HelpTool", "id": "fdc72beb-5328-44d9-8cac-16aff0b77ee2", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "7099e318-5af4-4746-a3c5-ae7f65bb4567"}}}, {"type": "Grid", "id": "71778b10-0469-4f29-adc2-905cbcbb197a", "attributes": {"ticker": {"type": "BasicTicker", "id": "71ea4624-31de-4235-8e68-16e0fcc93f27"}, "grid_line_color": {"value": null}, "plot": {"type": "Plot", "subtype": "Figure", "id": "7099e318-5af4-4746-a3c5-ae7f65bb4567"}}}, {"type": "BoxAnnotation", "id": "42b4ab59-1c23-4900-83d5-4958bbd39994", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "PanTool", "id": "1440d7c6-f9ae-4228-8121-12cf16285907", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "7099e318-5af4-4746-a3c5-ae7f65bb4567"}}}], "root_ids": ["7099e318-5af4-4746-a3c5-ae7f65bb4567"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "6a5742f7-4ec5-4bd4-8ec6-08471e7cfc76", "modelid": "7099e318-5af4-4746-a3c5-ae7f65bb4567", "elementid": "2448d513-a22b-4a91-8262-4f56f5672fc8"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
    }
  ];

  function run_inline_js() {
    for (var i = 0; i < inline_js.length; i++) {
      inline_js[i](window.Bokeh);
    }
  }

  if (window._bokeh_is_loading === 0) {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    run_inline_js();
  } else {
    load_libs(js_urls, function() {
      console.log("Bokeh: BokehJS plotting callback run at", now());
      run_inline_js();
    });
  }
}(this));