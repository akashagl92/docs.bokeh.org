
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
  };var element = document.getElementById("cf756bbe-e1e6-47b8-98f0-acbdf241b31d");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'cf756bbe-e1e6-47b8-98f0-acbdf241b31d' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"e44cf07e-2dea-4052-a7ca-edc13ea8c41d": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ColumnDataSource", "id": "fa6dadcb-31c5-4bca-a0f2-268c0e59438d", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [6, 7, 2, 4, 5]}, "column_names": ["x", "y"], "callback": null}}, {"type": "LinearAxis", "id": "a0e58c14-71d2-403f-9ac4-930608849f5c", "attributes": {"ticker": {"type": "BasicTicker", "id": "434ed73e-be72-468a-a695-5d174d227500"}, "formatter": {"type": "BasicTickFormatter", "id": "e8ad5507-5256-4bb6-8f4b-c5262092e617"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a8bc1fc6-b721-4e42-bfe0-2e82fd0d0e0b"}}}, {"type": "BoxAnnotation", "id": "a0ec3228-9d43-4141-864a-75c5a8814a05", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Grid", "id": "9a596124-db61-4566-ad9e-210f9f8f3add", "attributes": {"ticker": {"type": "BasicTicker", "id": "434ed73e-be72-468a-a695-5d174d227500"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "a8bc1fc6-b721-4e42-bfe0-2e82fd0d0e0b"}}}, {"type": "BoxZoomTool", "id": "d4cd0699-2798-4280-b7bf-d3df14701dd6", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "a0ec3228-9d43-4141-864a-75c5a8814a05"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a8bc1fc6-b721-4e42-bfe0-2e82fd0d0e0b"}}}, {"type": "LinearAxis", "id": "64ac4662-d734-4a61-b1f6-d9d8e28e4c15", "attributes": {"ticker": {"type": "BasicTicker", "id": "f414cfc4-b42d-4c51-bb86-bdae39c6b805"}, "formatter": {"type": "BasicTickFormatter", "id": "bc82d4a8-c755-4444-97ce-7b48b70b60af"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a8bc1fc6-b721-4e42-bfe0-2e82fd0d0e0b"}}}, {"type": "BasicTickFormatter", "id": "bc82d4a8-c755-4444-97ce-7b48b70b60af", "attributes": {}}, {"type": "ResetTool", "id": "7b76306d-27cf-490c-ab70-443a4a65396b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a8bc1fc6-b721-4e42-bfe0-2e82fd0d0e0b"}}}, {"type": "BasicTicker", "id": "434ed73e-be72-468a-a695-5d174d227500", "attributes": {}}, {"type": "DataRange1d", "id": "22c16dbf-dfde-4aea-8511-3ea53ae87ce7", "attributes": {"callback": null}}, {"type": "WheelZoomTool", "id": "309cbc0a-0ab4-491f-a94a-ee5a9918f79a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a8bc1fc6-b721-4e42-bfe0-2e82fd0d0e0b"}}}, {"type": "PanTool", "id": "f3944b01-e3f4-4c32-85c3-1ba9ca1ba3ea", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a8bc1fc6-b721-4e42-bfe0-2e82fd0d0e0b"}}}, {"type": "HelpTool", "id": "0632b9d5-34b8-4e5d-b5da-9e369ebba288", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a8bc1fc6-b721-4e42-bfe0-2e82fd0d0e0b"}}}, {"type": "BasicTickFormatter", "id": "e8ad5507-5256-4bb6-8f4b-c5262092e617", "attributes": {}}, {"type": "Grid", "id": "554169ca-1eb2-4e7a-90f4-28fc11471263", "attributes": {"ticker": {"type": "BasicTicker", "id": "f414cfc4-b42d-4c51-bb86-bdae39c6b805"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a8bc1fc6-b721-4e42-bfe0-2e82fd0d0e0b"}}}, {"type": "BasicTicker", "id": "f414cfc4-b42d-4c51-bb86-bdae39c6b805", "attributes": {}}, {"type": "PreviewSaveTool", "id": "ab4cf252-82a1-4dae-989a-a800fba4e907", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a8bc1fc6-b721-4e42-bfe0-2e82fd0d0e0b"}}}, {"type": "GlyphRenderer", "id": "9650f3c4-c96d-4a89-8b08-83daddfb2bee", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "fa6dadcb-31c5-4bca-a0f2-268c0e59438d"}, "nonselection_glyph": {"type": "Line", "id": "17c6160e-d30a-472e-b960-2c658edecf71"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "50979a4a-e9e1-4654-bf4d-40259c110dc0"}}}, {"type": "Line", "id": "17c6160e-d30a-472e-b960-2c658edecf71", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "y": {"field": "y"}}}, {"type": "Line", "id": "50979a4a-e9e1-4654-bf4d-40259c110dc0", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "x": {"field": "x"}, "y": {"field": "y"}}}, {"type": "ResizeTool", "id": "4e12042e-762c-4faa-85c9-abbfa50abca7", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a8bc1fc6-b721-4e42-bfe0-2e82fd0d0e0b"}}}, {"type": "ToolEvents", "id": "0207cb4a-9e6e-47d8-853e-5c84c25a8ef8", "attributes": {}}, {"type": "Plot", "id": "a8bc1fc6-b721-4e42-bfe0-2e82fd0d0e0b", "attributes": {"tools": [{"type": "PanTool", "id": "f3944b01-e3f4-4c32-85c3-1ba9ca1ba3ea"}, {"type": "WheelZoomTool", "id": "309cbc0a-0ab4-491f-a94a-ee5a9918f79a"}, {"type": "BoxZoomTool", "id": "d4cd0699-2798-4280-b7bf-d3df14701dd6"}, {"type": "PreviewSaveTool", "id": "ab4cf252-82a1-4dae-989a-a800fba4e907"}, {"type": "ResizeTool", "id": "4e12042e-762c-4faa-85c9-abbfa50abca7"}, {"type": "ResetTool", "id": "7b76306d-27cf-490c-ab70-443a4a65396b"}, {"type": "HelpTool", "id": "0632b9d5-34b8-4e5d-b5da-9e369ebba288"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "22c16dbf-dfde-4aea-8511-3ea53ae87ce7"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "64ac4662-d734-4a61-b1f6-d9d8e28e4c15"}, {"type": "Grid", "id": "554169ca-1eb2-4e7a-90f4-28fc11471263"}, {"type": "LinearAxis", "id": "a0e58c14-71d2-403f-9ac4-930608849f5c"}, {"type": "Grid", "id": "9a596124-db61-4566-ad9e-210f9f8f3add"}, {"type": "BoxAnnotation", "id": "a0ec3228-9d43-4141-864a-75c5a8814a05"}, {"type": "GlyphRenderer", "id": "9650f3c4-c96d-4a89-8b08-83daddfb2bee"}], "left": [{"type": "LinearAxis", "id": "a0e58c14-71d2-403f-9ac4-930608849f5c"}], "below": [{"type": "LinearAxis", "id": "64ac4662-d734-4a61-b1f6-d9d8e28e4c15"}], "tool_events": {"type": "ToolEvents", "id": "0207cb4a-9e6e-47d8-853e-5c84c25a8ef8"}, "x_range": {"type": "DataRange1d", "id": "3e132083-f926-4036-ab04-4544980d1453"}}, "subtype": "Figure"}, {"type": "DataRange1d", "id": "3e132083-f926-4036-ab04-4544980d1453", "attributes": {"callback": null}}], "root_ids": ["a8bc1fc6-b721-4e42-bfe0-2e82fd0d0e0b"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "e44cf07e-2dea-4052-a7ca-edc13ea8c41d", "modelid": "a8bc1fc6-b721-4e42-bfe0-2e82fd0d0e0b", "elementid": "cf756bbe-e1e6-47b8-98f0-acbdf241b31d"}];
          
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