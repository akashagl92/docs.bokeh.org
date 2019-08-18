
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
  };var element = document.getElementById("d348afc5-dc5e-4aa8-ba8d-370985536cc1");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'd348afc5-dc5e-4aa8-ba8d-370985536cc1' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"49484682-9893-4539-86cd-fe2109e44301": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "071b8dab-2ad0-410a-864d-447a0261c53e", "attributes": {"ticker": {"type": "BasicTicker", "id": "b68002b9-5df0-4d1c-9949-1b0a340de77e"}, "formatter": {"type": "BasicTickFormatter", "id": "ddedd74b-4f24-48e4-ae4e-7264a4e9a123"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d5044af3-a2e6-46b8-908f-af92878ba59f"}}}, {"type": "BoxSelectTool", "id": "b4f9a8f2-6eb4-4316-b1ce-432a71fe3229", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "60778a4f-965d-4d11-b417-e52f9ac882ff"}, "renderers": [{"type": "GlyphRenderer", "id": "34bb8fea-e85e-41ae-954a-0a5e65eb9a21"}], "callback": null, "plot": {"type": "Plot", "subtype": "Figure", "id": "d5044af3-a2e6-46b8-908f-af92878ba59f"}}}, {"type": "ColumnDataSource", "id": "922fffad-78ab-4fe5-bbad-a5b922411bf0", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "BasicTicker", "id": "3655e44b-8b92-472f-92b7-b6b055d54d87", "attributes": {}}, {"type": "BasicTickFormatter", "id": "ddedd74b-4f24-48e4-ae4e-7264a4e9a123", "attributes": {}}, {"type": "BasicTickFormatter", "id": "b763292b-b2ea-4136-aeb7-359eeed57e80", "attributes": {}}, {"type": "DataRange1d", "id": "46be7cb0-b279-45a3-958b-3612af195d15", "attributes": {"callback": null}}, {"type": "Grid", "id": "d94c6fd9-4cf4-4510-a880-bb32b455ea52", "attributes": {"ticker": {"type": "BasicTicker", "id": "b68002b9-5df0-4d1c-9949-1b0a340de77e"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d5044af3-a2e6-46b8-908f-af92878ba59f"}}}, {"type": "Plot", "id": "d5044af3-a2e6-46b8-908f-af92878ba59f", "attributes": {"tools": [{"type": "BoxZoomTool", "id": "3f4039d9-e883-4a7b-b6ff-9086c2f2649a"}, {"type": "BoxSelectTool", "id": "b4f9a8f2-6eb4-4316-b1ce-432a71fe3229"}, {"type": "CrosshairTool", "id": "82753765-3b54-46c0-99f5-645362b381e2"}, {"type": "ResizeTool", "id": "2aeb63dc-1c44-404c-b247-8f22bdea76d4"}, {"type": "ResetTool", "id": "b7aa0cc3-c3b6-4037-aabf-b664c6a265c4"}], "plot_width": 400, "x_range": {"type": "DataRange1d", "id": "711b7586-6848-43ae-b87c-8fed033d9034"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "071b8dab-2ad0-410a-864d-447a0261c53e"}, {"type": "Grid", "id": "d94c6fd9-4cf4-4510-a880-bb32b455ea52"}, {"type": "LinearAxis", "id": "0e477baf-c9c0-44af-b6bb-3687624ac8f3"}, {"type": "Grid", "id": "9b89f114-6ed4-494f-a2bb-f5cc30a2f5ca"}, {"type": "BoxAnnotation", "id": "68c65187-2b26-44fe-93e5-c91bc82b127a"}, {"type": "BoxAnnotation", "id": "60778a4f-965d-4d11-b417-e52f9ac882ff"}, {"type": "GlyphRenderer", "id": "34bb8fea-e85e-41ae-954a-0a5e65eb9a21"}], "y_range": {"type": "DataRange1d", "id": "46be7cb0-b279-45a3-958b-3612af195d15"}, "left": [{"type": "LinearAxis", "id": "0e477baf-c9c0-44af-b6bb-3687624ac8f3"}], "below": [{"type": "LinearAxis", "id": "071b8dab-2ad0-410a-864d-447a0261c53e"}], "tool_events": {"type": "ToolEvents", "id": "5e926e11-8ef8-4eee-bc80-2decd2e34c76"}, "title": null}, "subtype": "Figure"}, {"type": "BoxZoomTool", "id": "3f4039d9-e883-4a7b-b6ff-9086c2f2649a", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "68c65187-2b26-44fe-93e5-c91bc82b127a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d5044af3-a2e6-46b8-908f-af92878ba59f"}}}, {"type": "ResetTool", "id": "b7aa0cc3-c3b6-4037-aabf-b664c6a265c4", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d5044af3-a2e6-46b8-908f-af92878ba59f"}}}, {"type": "Grid", "id": "9b89f114-6ed4-494f-a2bb-f5cc30a2f5ca", "attributes": {"ticker": {"type": "BasicTicker", "id": "3655e44b-8b92-472f-92b7-b6b055d54d87"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "d5044af3-a2e6-46b8-908f-af92878ba59f"}}}, {"type": "BoxAnnotation", "id": "60778a4f-965d-4d11-b417-e52f9ac882ff", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "LinearAxis", "id": "0e477baf-c9c0-44af-b6bb-3687624ac8f3", "attributes": {"ticker": {"type": "BasicTicker", "id": "3655e44b-8b92-472f-92b7-b6b055d54d87"}, "formatter": {"type": "BasicTickFormatter", "id": "b763292b-b2ea-4136-aeb7-359eeed57e80"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d5044af3-a2e6-46b8-908f-af92878ba59f"}}}, {"type": "Circle", "id": "95254e1f-5fd5-46cd-8170-445574da710a", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "CrosshairTool", "id": "82753765-3b54-46c0-99f5-645362b381e2", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d5044af3-a2e6-46b8-908f-af92878ba59f"}}}, {"type": "BasicTicker", "id": "b68002b9-5df0-4d1c-9949-1b0a340de77e", "attributes": {}}, {"type": "ToolEvents", "id": "5e926e11-8ef8-4eee-bc80-2decd2e34c76", "attributes": {}}, {"type": "BoxAnnotation", "id": "68c65187-2b26-44fe-93e5-c91bc82b127a", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "DataRange1d", "id": "711b7586-6848-43ae-b87c-8fed033d9034", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "34bb8fea-e85e-41ae-954a-0a5e65eb9a21", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "922fffad-78ab-4fe5-bbad-a5b922411bf0"}, "nonselection_glyph": {"type": "Circle", "id": "50a0a405-09d1-499f-a44a-b52efe58fa27"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "95254e1f-5fd5-46cd-8170-445574da710a"}}}, {"type": "Circle", "id": "50a0a405-09d1-499f-a44a-b52efe58fa27", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ResizeTool", "id": "2aeb63dc-1c44-404c-b247-8f22bdea76d4", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d5044af3-a2e6-46b8-908f-af92878ba59f"}}}], "root_ids": ["d5044af3-a2e6-46b8-908f-af92878ba59f"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "49484682-9893-4539-86cd-fe2109e44301", "modelid": "d5044af3-a2e6-46b8-908f-af92878ba59f", "elementid": "d348afc5-dc5e-4aa8-ba8d-370985536cc1"}];
          
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