
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
  };var element = document.getElementById("67487bef-87a0-4b39-ab4d-9d220a06b84e");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '67487bef-87a0-4b39-ab4d-9d220a06b84e' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"06a93647-ba99-4b92-98e8-26bc50efb8bb": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "PanTool", "id": "ffb5464d-ff31-4350-ae08-688131089ea5", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1a5db93a-9590-4fd8-8ed5-e9f15112ba1e"}}}, {"type": "BasicTicker", "id": "e5b8f984-9d2d-4009-89cd-29362f767e57", "attributes": {}}, {"type": "ColumnDataSource", "id": "ff0f1d19-e1c3-4c38-8033-6fddfb461867", "attributes": {"data": {"x": [1, 2, 3], "size": [10, 20, 25], "y": [1, 2, 3]}, "column_names": ["y", "x", "size"], "callback": null}}, {"type": "WheelZoomTool", "id": "297fbb2a-8c73-4555-8f16-f4408eeb01d2", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1a5db93a-9590-4fd8-8ed5-e9f15112ba1e"}}}, {"type": "DataRange1d", "id": "09de127f-93e4-46e9-b957-59483dc2112f", "attributes": {"callback": null}}, {"type": "ResetTool", "id": "f69f6c54-e882-4d41-a87c-a4589374e475", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1a5db93a-9590-4fd8-8ed5-e9f15112ba1e"}}}, {"type": "ResizeTool", "id": "9d8dccb5-e44d-40af-94e6-7dceb5ed9fc9", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1a5db93a-9590-4fd8-8ed5-e9f15112ba1e"}}}, {"type": "HelpTool", "id": "d5d8bce9-eb1b-4ec8-ba11-90ccbe4a4070", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1a5db93a-9590-4fd8-8ed5-e9f15112ba1e"}}}, {"type": "Plot", "id": "1a5db93a-9590-4fd8-8ed5-e9f15112ba1e", "attributes": {"tools": [{"type": "PanTool", "id": "ffb5464d-ff31-4350-ae08-688131089ea5"}, {"type": "WheelZoomTool", "id": "297fbb2a-8c73-4555-8f16-f4408eeb01d2"}, {"type": "BoxZoomTool", "id": "59a86245-9b06-400c-b50d-a61737b7310a"}, {"type": "PreviewSaveTool", "id": "5ce51493-db3d-4f91-a863-8d687f7a7899"}, {"type": "ResizeTool", "id": "9d8dccb5-e44d-40af-94e6-7dceb5ed9fc9"}, {"type": "ResetTool", "id": "f69f6c54-e882-4d41-a87c-a4589374e475"}, {"type": "HelpTool", "id": "d5d8bce9-eb1b-4ec8-ba11-90ccbe4a4070"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "09de127f-93e4-46e9-b957-59483dc2112f"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "d35f1f64-ac78-4a63-b0d7-65aa2fcbf91f"}, {"type": "Grid", "id": "dedb0383-caf8-4142-a407-080fb8b534d5"}, {"type": "LinearAxis", "id": "d4c1c74d-5cc4-41b8-9564-5dfb02fc5da1"}, {"type": "Grid", "id": "a8c1d21e-c464-4458-a851-826b889cb2a4"}, {"type": "BoxAnnotation", "id": "476e8a7a-f5cb-416e-b4f6-baf9eb0eff56"}, {"type": "GlyphRenderer", "id": "91207f6e-644c-4da8-b271-6d501f8fe4a2"}], "left": [{"type": "LinearAxis", "id": "d4c1c74d-5cc4-41b8-9564-5dfb02fc5da1"}], "below": [{"type": "LinearAxis", "id": "d35f1f64-ac78-4a63-b0d7-65aa2fcbf91f"}], "tool_events": {"type": "ToolEvents", "id": "d1bc4d8c-a535-42fe-954f-8e7967898d11"}, "x_range": {"type": "DataRange1d", "id": "18d79392-9ff5-4d7d-8fe6-87b24ccbf0ad"}}, "subtype": "Figure"}, {"type": "DataRange1d", "id": "18d79392-9ff5-4d7d-8fe6-87b24ccbf0ad", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "91207f6e-644c-4da8-b271-6d501f8fe4a2", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "ff0f1d19-e1c3-4c38-8033-6fddfb461867"}, "nonselection_glyph": {"type": "SquareX", "id": "40a90c82-8664-4e51-a052-4757b5805347"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "SquareX", "id": "704b60a6-f199-4340-ba4d-f7e06ffc356a"}}}, {"type": "PreviewSaveTool", "id": "5ce51493-db3d-4f91-a863-8d687f7a7899", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1a5db93a-9590-4fd8-8ed5-e9f15112ba1e"}}}, {"type": "Grid", "id": "a8c1d21e-c464-4458-a851-826b889cb2a4", "attributes": {"ticker": {"type": "BasicTicker", "id": "0b751d15-a479-4ebd-8423-74d9447b9714"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "1a5db93a-9590-4fd8-8ed5-e9f15112ba1e"}}}, {"type": "SquareX", "id": "40a90c82-8664-4e51-a052-4757b5805347", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "size"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "BasicTickFormatter", "id": "4418b295-3085-4033-a784-0422414008bb", "attributes": {}}, {"type": "ToolEvents", "id": "d1bc4d8c-a535-42fe-954f-8e7967898d11", "attributes": {}}, {"type": "BoxAnnotation", "id": "476e8a7a-f5cb-416e-b4f6-baf9eb0eff56", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "SquareX", "id": "704b60a6-f199-4340-ba4d-f7e06ffc356a", "attributes": {"line_color": {"value": "#FDAE6B"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "size"}, "fill_color": {"value": null}}}, {"type": "BoxZoomTool", "id": "59a86245-9b06-400c-b50d-a61737b7310a", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "476e8a7a-f5cb-416e-b4f6-baf9eb0eff56"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1a5db93a-9590-4fd8-8ed5-e9f15112ba1e"}}}, {"type": "LinearAxis", "id": "d35f1f64-ac78-4a63-b0d7-65aa2fcbf91f", "attributes": {"ticker": {"type": "BasicTicker", "id": "e5b8f984-9d2d-4009-89cd-29362f767e57"}, "formatter": {"type": "BasicTickFormatter", "id": "91d1eb2e-738c-458d-9f2b-32effe6d5623"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1a5db93a-9590-4fd8-8ed5-e9f15112ba1e"}}}, {"type": "BasicTickFormatter", "id": "91d1eb2e-738c-458d-9f2b-32effe6d5623", "attributes": {}}, {"type": "LinearAxis", "id": "d4c1c74d-5cc4-41b8-9564-5dfb02fc5da1", "attributes": {"ticker": {"type": "BasicTicker", "id": "0b751d15-a479-4ebd-8423-74d9447b9714"}, "formatter": {"type": "BasicTickFormatter", "id": "4418b295-3085-4033-a784-0422414008bb"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1a5db93a-9590-4fd8-8ed5-e9f15112ba1e"}}}, {"type": "BasicTicker", "id": "0b751d15-a479-4ebd-8423-74d9447b9714", "attributes": {}}, {"type": "Grid", "id": "dedb0383-caf8-4142-a407-080fb8b534d5", "attributes": {"ticker": {"type": "BasicTicker", "id": "e5b8f984-9d2d-4009-89cd-29362f767e57"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1a5db93a-9590-4fd8-8ed5-e9f15112ba1e"}}}], "root_ids": ["1a5db93a-9590-4fd8-8ed5-e9f15112ba1e"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "06a93647-ba99-4b92-98e8-26bc50efb8bb", "modelid": "1a5db93a-9590-4fd8-8ed5-e9f15112ba1e", "elementid": "67487bef-87a0-4b39-ab4d-9d220a06b84e"}];
          
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