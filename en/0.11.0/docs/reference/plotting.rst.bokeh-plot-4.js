
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
  };var element = document.getElementById("711fc277-48a5-4ac2-aec1-986967627618");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '711fc277-48a5-4ac2-aec1-986967627618' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"214ff786-48ef-415c-824f-4d0302c6e828": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Grid", "id": "0900e5c9-9275-43e5-af5c-66f5b1bcbb4e", "attributes": {"ticker": {"type": "BasicTicker", "id": "4f5866c2-75f3-4ed1-8271-d061b25dd0a2"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "fec5ada4-1916-4f1e-b0ea-afb73daacedb"}}}, {"type": "BasicTicker", "id": "4f5866c2-75f3-4ed1-8271-d061b25dd0a2", "attributes": {}}, {"type": "PreviewSaveTool", "id": "38acd51b-81ba-4a7c-908a-a87155837350", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "fec5ada4-1916-4f1e-b0ea-afb73daacedb"}}}, {"type": "BoxAnnotation", "id": "524e5b43-bb1e-4482-a43c-7b108519fe21", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "GlyphRenderer", "id": "d08c03f3-bcf0-45ae-8acb-c643017f3186", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "ab06b7e0-98b5-4aaa-83ca-c7025ad52748"}, "nonselection_glyph": {"type": "CircleX", "id": "a61fa92b-3506-4ccb-ab3f-26364690702c"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "CircleX", "id": "e3162e64-99ea-4b41-baa0-3c234dd75457"}}}, {"type": "ResetTool", "id": "bcd4ff2a-ed0a-447d-ac88-82cdc5a5773a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "fec5ada4-1916-4f1e-b0ea-afb73daacedb"}}}, {"type": "BasicTicker", "id": "7ff3d043-debc-4c43-b833-e9b370efb0b5", "attributes": {}}, {"type": "BoxZoomTool", "id": "b04bc2bd-928f-47b8-8ccc-09dd982cd50e", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "524e5b43-bb1e-4482-a43c-7b108519fe21"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "fec5ada4-1916-4f1e-b0ea-afb73daacedb"}}}, {"type": "DataRange1d", "id": "8c288195-5c38-40ad-b9d6-6ec7d4ca934a", "attributes": {"callback": null}}, {"type": "Plot", "id": "fec5ada4-1916-4f1e-b0ea-afb73daacedb", "attributes": {"tools": [{"type": "PanTool", "id": "5a401c91-395e-49ac-9198-7429dff454f4"}, {"type": "WheelZoomTool", "id": "1060f25f-e8e0-486a-b02f-e5fbd75bf361"}, {"type": "BoxZoomTool", "id": "b04bc2bd-928f-47b8-8ccc-09dd982cd50e"}, {"type": "PreviewSaveTool", "id": "38acd51b-81ba-4a7c-908a-a87155837350"}, {"type": "ResizeTool", "id": "2b3d8b1b-05d4-450e-bfaf-e35d73432aaf"}, {"type": "ResetTool", "id": "bcd4ff2a-ed0a-447d-ac88-82cdc5a5773a"}, {"type": "HelpTool", "id": "53b63269-388f-4504-a919-51bc7a094707"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "87105afa-80cd-4221-b70a-3554fcb7d430"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "0ea22108-5770-48b3-9c8e-7698362325f0"}, {"type": "Grid", "id": "97647946-4626-4947-8ccd-89fbae5883f3"}, {"type": "LinearAxis", "id": "cadc8e9b-ba13-44fd-af20-f0bea076d8d9"}, {"type": "Grid", "id": "0900e5c9-9275-43e5-af5c-66f5b1bcbb4e"}, {"type": "BoxAnnotation", "id": "524e5b43-bb1e-4482-a43c-7b108519fe21"}, {"type": "GlyphRenderer", "id": "d08c03f3-bcf0-45ae-8acb-c643017f3186"}], "left": [{"type": "LinearAxis", "id": "cadc8e9b-ba13-44fd-af20-f0bea076d8d9"}], "below": [{"type": "LinearAxis", "id": "0ea22108-5770-48b3-9c8e-7698362325f0"}], "tool_events": {"type": "ToolEvents", "id": "ee8b968f-9e07-4402-a22d-6d4057ceba5b"}, "x_range": {"type": "DataRange1d", "id": "8c288195-5c38-40ad-b9d6-6ec7d4ca934a"}}, "subtype": "Figure"}, {"type": "CircleX", "id": "a61fa92b-3506-4ccb-ab3f-26364690702c", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ResizeTool", "id": "2b3d8b1b-05d4-450e-bfaf-e35d73432aaf", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "fec5ada4-1916-4f1e-b0ea-afb73daacedb"}}}, {"type": "LinearAxis", "id": "cadc8e9b-ba13-44fd-af20-f0bea076d8d9", "attributes": {"ticker": {"type": "BasicTicker", "id": "4f5866c2-75f3-4ed1-8271-d061b25dd0a2"}, "formatter": {"type": "BasicTickFormatter", "id": "25cbf505-2599-4e45-a19a-885fdb23c440"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "fec5ada4-1916-4f1e-b0ea-afb73daacedb"}}}, {"type": "BasicTickFormatter", "id": "9fab5476-48f7-44d1-92cd-55918a065e1b", "attributes": {}}, {"type": "DataRange1d", "id": "87105afa-80cd-4221-b70a-3554fcb7d430", "attributes": {"callback": null}}, {"type": "Grid", "id": "97647946-4626-4947-8ccd-89fbae5883f3", "attributes": {"ticker": {"type": "BasicTicker", "id": "7ff3d043-debc-4c43-b833-e9b370efb0b5"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "fec5ada4-1916-4f1e-b0ea-afb73daacedb"}}}, {"type": "CircleX", "id": "e3162e64-99ea-4b41-baa0-3c234dd75457", "attributes": {"line_color": {"value": "#DD1C77"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "fill_color": {"value": "#DD1C77"}, "fill_alpha": {"value": 0.2}}}, {"type": "WheelZoomTool", "id": "1060f25f-e8e0-486a-b02f-e5fbd75bf361", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "fec5ada4-1916-4f1e-b0ea-afb73daacedb"}}}, {"type": "ColumnDataSource", "id": "ab06b7e0-98b5-4aaa-83ca-c7025ad52748", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["x", "y"], "callback": null}}, {"type": "PanTool", "id": "5a401c91-395e-49ac-9198-7429dff454f4", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "fec5ada4-1916-4f1e-b0ea-afb73daacedb"}}}, {"type": "LinearAxis", "id": "0ea22108-5770-48b3-9c8e-7698362325f0", "attributes": {"ticker": {"type": "BasicTicker", "id": "7ff3d043-debc-4c43-b833-e9b370efb0b5"}, "formatter": {"type": "BasicTickFormatter", "id": "9fab5476-48f7-44d1-92cd-55918a065e1b"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "fec5ada4-1916-4f1e-b0ea-afb73daacedb"}}}, {"type": "HelpTool", "id": "53b63269-388f-4504-a919-51bc7a094707", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "fec5ada4-1916-4f1e-b0ea-afb73daacedb"}}}, {"type": "BasicTickFormatter", "id": "25cbf505-2599-4e45-a19a-885fdb23c440", "attributes": {}}, {"type": "ToolEvents", "id": "ee8b968f-9e07-4402-a22d-6d4057ceba5b", "attributes": {}}], "root_ids": ["fec5ada4-1916-4f1e-b0ea-afb73daacedb"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "214ff786-48ef-415c-824f-4d0302c6e828", "modelid": "fec5ada4-1916-4f1e-b0ea-afb73daacedb", "elementid": "711fc277-48a5-4ac2-aec1-986967627618"}];
          
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