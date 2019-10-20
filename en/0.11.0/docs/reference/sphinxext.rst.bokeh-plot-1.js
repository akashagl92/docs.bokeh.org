
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
  };var element = document.getElementById("f179bf2c-449b-4ad6-8a9b-6d1a4ef44f4b");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f179bf2c-449b-4ad6-8a9b-6d1a4ef44f4b' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"aa12a9f9-5cfd-44d0-a9ac-7c88f08c77ea": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "PreviewSaveTool", "id": "f2b390b7-a8db-4293-9184-e2aabb706db2", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "05f7b322-b8c6-4e67-adf1-6d739f667ec6"}}}, {"type": "DataRange1d", "id": "b3cf0f1f-5e63-4607-9754-91fd97c74133", "attributes": {"callback": null}}, {"type": "Line", "id": "21c9687a-af21-48e7-9c4c-e6eec18b59b7", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "x": {"field": "x"}, "y": {"field": "y"}}}, {"type": "HelpTool", "id": "5725f7f9-f125-4691-9cf2-752597768bb1", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "05f7b322-b8c6-4e67-adf1-6d739f667ec6"}}}, {"type": "DataRange1d", "id": "069c8d77-0c03-49f2-9cf1-3c66cd4b9c1e", "attributes": {"callback": null}}, {"type": "Circle", "id": "42446568-e92b-4654-8366-16be2efc6c98", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ResetTool", "id": "083c24ac-b3fd-4288-9822-2274c9834cef", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "05f7b322-b8c6-4e67-adf1-6d739f667ec6"}}}, {"type": "WheelZoomTool", "id": "b048c6f1-d30b-4232-8d22-5a54869af8ab", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "05f7b322-b8c6-4e67-adf1-6d739f667ec6"}}}, {"type": "PanTool", "id": "9585e006-9bc5-4c49-9497-9cf0c363e9f9", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "05f7b322-b8c6-4e67-adf1-6d739f667ec6"}}}, {"type": "BasicTicker", "id": "7adf74f5-a5ff-43b3-8f17-5fc540bb0481", "attributes": {}}, {"type": "BasicTickFormatter", "id": "32d11214-adcd-484f-ac7f-bd16217ec8e4", "attributes": {}}, {"type": "ResizeTool", "id": "8ed9ac74-2397-4680-b564-64d89d7de2ad", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "05f7b322-b8c6-4e67-adf1-6d739f667ec6"}}}, {"type": "Plot", "id": "05f7b322-b8c6-4e67-adf1-6d739f667ec6", "attributes": {"tools": [{"type": "PanTool", "id": "9585e006-9bc5-4c49-9497-9cf0c363e9f9"}, {"type": "WheelZoomTool", "id": "b048c6f1-d30b-4232-8d22-5a54869af8ab"}, {"type": "BoxZoomTool", "id": "93586d29-3840-44d7-9dcf-60ee157ad59f"}, {"type": "PreviewSaveTool", "id": "f2b390b7-a8db-4293-9184-e2aabb706db2"}, {"type": "ResizeTool", "id": "8ed9ac74-2397-4680-b564-64d89d7de2ad"}, {"type": "ResetTool", "id": "083c24ac-b3fd-4288-9822-2274c9834cef"}, {"type": "HelpTool", "id": "5725f7f9-f125-4691-9cf2-752597768bb1"}], "plot_width": 300, "x_range": {"type": "DataRange1d", "id": "b3cf0f1f-5e63-4607-9754-91fd97c74133"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "fb2b40f0-cd18-4b11-9399-c5ae0b93643c"}, {"type": "Grid", "id": "2cd34630-2fd6-484a-8d3a-e806164b8a45"}, {"type": "LinearAxis", "id": "676f310e-cc9e-4d8b-88c8-be0580fa1b1e"}, {"type": "Grid", "id": "c4aef163-3006-4d7c-a9bd-64971fb713a2"}, {"type": "BoxAnnotation", "id": "4fb08051-6af0-4503-a650-8cfcf0270238"}, {"type": "GlyphRenderer", "id": "98361025-0f1a-4113-9385-4e61ed2e1c8e"}, {"type": "GlyphRenderer", "id": "54d5e796-2a99-4776-ba6d-36d6aa7b99ec"}], "y_range": {"type": "DataRange1d", "id": "069c8d77-0c03-49f2-9cf1-3c66cd4b9c1e"}, "left": [{"type": "LinearAxis", "id": "676f310e-cc9e-4d8b-88c8-be0580fa1b1e"}], "below": [{"type": "LinearAxis", "id": "fb2b40f0-cd18-4b11-9399-c5ae0b93643c"}], "tool_events": {"type": "ToolEvents", "id": "918b60e2-fcec-4e31-b69e-b19f415f2b82"}, "title": "example"}, "subtype": "Figure"}, {"type": "ColumnDataSource", "id": "193cd8fa-d23f-44b9-b05a-d52d2a37ee25", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [6, 7, 6, 4, 5]}, "column_names": ["x", "y"], "callback": null}}, {"type": "Line", "id": "205999a9-4a9f-45fc-9964-ac5b784c1543", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "y": {"field": "y"}}}, {"type": "ColumnDataSource", "id": "f8530b2c-d8db-4519-8461-af1418fb686b", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [6, 7, 6, 4, 5]}, "column_names": ["x", "y"], "callback": null}}, {"type": "GlyphRenderer", "id": "98361025-0f1a-4113-9385-4e61ed2e1c8e", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "193cd8fa-d23f-44b9-b05a-d52d2a37ee25"}, "nonselection_glyph": {"type": "Line", "id": "205999a9-4a9f-45fc-9964-ac5b784c1543"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "21c9687a-af21-48e7-9c4c-e6eec18b59b7"}}}, {"type": "LinearAxis", "id": "676f310e-cc9e-4d8b-88c8-be0580fa1b1e", "attributes": {"ticker": {"type": "BasicTicker", "id": "7adf74f5-a5ff-43b3-8f17-5fc540bb0481"}, "formatter": {"type": "BasicTickFormatter", "id": "f89121dc-2a66-4122-a2fb-d3d779d28bd7"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "05f7b322-b8c6-4e67-adf1-6d739f667ec6"}}}, {"type": "BasicTickFormatter", "id": "f89121dc-2a66-4122-a2fb-d3d779d28bd7", "attributes": {}}, {"type": "ToolEvents", "id": "918b60e2-fcec-4e31-b69e-b19f415f2b82", "attributes": {}}, {"type": "BasicTicker", "id": "39de0630-1cd7-4ae1-9a63-e0c1a961fe96", "attributes": {}}, {"type": "GlyphRenderer", "id": "54d5e796-2a99-4776-ba6d-36d6aa7b99ec", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "f8530b2c-d8db-4519-8461-af1418fb686b"}, "nonselection_glyph": {"type": "Circle", "id": "42446568-e92b-4654-8366-16be2efc6c98"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "4c825fe3-1dc6-4306-a4f1-57223e7bbe54"}}}, {"type": "LinearAxis", "id": "fb2b40f0-cd18-4b11-9399-c5ae0b93643c", "attributes": {"ticker": {"type": "BasicTicker", "id": "39de0630-1cd7-4ae1-9a63-e0c1a961fe96"}, "formatter": {"type": "BasicTickFormatter", "id": "32d11214-adcd-484f-ac7f-bd16217ec8e4"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "05f7b322-b8c6-4e67-adf1-6d739f667ec6"}}}, {"type": "Grid", "id": "2cd34630-2fd6-484a-8d3a-e806164b8a45", "attributes": {"ticker": {"type": "BasicTicker", "id": "39de0630-1cd7-4ae1-9a63-e0c1a961fe96"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "05f7b322-b8c6-4e67-adf1-6d739f667ec6"}}}, {"type": "BoxZoomTool", "id": "93586d29-3840-44d7-9dcf-60ee157ad59f", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "4fb08051-6af0-4503-a650-8cfcf0270238"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "05f7b322-b8c6-4e67-adf1-6d739f667ec6"}}}, {"type": "BoxAnnotation", "id": "4fb08051-6af0-4503-a650-8cfcf0270238", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Grid", "id": "c4aef163-3006-4d7c-a9bd-64971fb713a2", "attributes": {"ticker": {"type": "BasicTicker", "id": "7adf74f5-a5ff-43b3-8f17-5fc540bb0481"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "05f7b322-b8c6-4e67-adf1-6d739f667ec6"}}}, {"type": "Circle", "id": "4c825fe3-1dc6-4306-a4f1-57223e7bbe54", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "white"}}}], "root_ids": ["05f7b322-b8c6-4e67-adf1-6d739f667ec6"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "aa12a9f9-5cfd-44d0-a9ac-7c88f08c77ea", "modelid": "05f7b322-b8c6-4e67-adf1-6d739f667ec6", "elementid": "f179bf2c-449b-4ad6-8a9b-6d1a4ef44f4b"}];
          
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