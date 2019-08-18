
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
  };var element = document.getElementById("7afb0cbd-4b7a-480d-8012-d3b09ee6e4e3");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7afb0cbd-4b7a-480d-8012-d3b09ee6e4e3' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"32fbb3e1-041f-4d22-b480-b06cb5ac4136": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTicker", "id": "b6b3ebd7-62ca-436a-94b7-b54ac14069fb", "attributes": {}}, {"type": "Grid", "id": "9d99e936-cc3f-471a-90c8-084d88003edb", "attributes": {"ticker": {"type": "BasicTicker", "id": "2b5a4d89-7e7b-4a3d-9b15-3b3a1c113ed0"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "50a276e0-96f6-4dbf-b41c-afd829c82367"}}}, {"type": "PanTool", "id": "1b80371c-6af0-4ea5-b403-e1ab50a54047", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "50a276e0-96f6-4dbf-b41c-afd829c82367"}}}, {"type": "BasicTickFormatter", "id": "ef45f24e-4953-4f63-92fe-81420ad08493", "attributes": {}}, {"type": "BasicTickFormatter", "id": "730b929d-af67-496e-8fc3-9e7259cd1662", "attributes": {}}, {"type": "ToolEvents", "id": "a8d7d540-0822-4ebc-9092-da0cb4fa8c80", "attributes": {}}, {"type": "WheelZoomTool", "id": "297c3d12-1eab-44ea-8d73-cb1c745c14ca", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "50a276e0-96f6-4dbf-b41c-afd829c82367"}}}, {"type": "BoxAnnotation", "id": "e081fd2b-e161-4014-9b41-37f2e95d3fb1", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "HelpTool", "id": "73100114-6082-4cb0-8114-34d2c74780dd", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "50a276e0-96f6-4dbf-b41c-afd829c82367"}}}, {"type": "ColumnDataSource", "id": "2904741f-d529-4e12-95e9-b00e340447b4", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["y", "x"], "callback": null}}, {"type": "DataRange1d", "id": "b8762566-07ce-43d3-a10d-268f2ff5f0d8", "attributes": {"callback": null}}, {"type": "ResetTool", "id": "eadad57d-860f-4d85-bde5-c4c325124cb2", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "50a276e0-96f6-4dbf-b41c-afd829c82367"}}}, {"type": "Plot", "id": "50a276e0-96f6-4dbf-b41c-afd829c82367", "attributes": {"tools": [{"type": "PanTool", "id": "1b80371c-6af0-4ea5-b403-e1ab50a54047"}, {"type": "WheelZoomTool", "id": "297c3d12-1eab-44ea-8d73-cb1c745c14ca"}, {"type": "BoxZoomTool", "id": "12574d7f-2fcf-4958-837c-0703c84f2ab5"}, {"type": "PreviewSaveTool", "id": "02bb1e45-52d0-43df-a5fd-343daf41ce44"}, {"type": "ResizeTool", "id": "112e1d5b-dd1a-47fb-bf1d-879d3107a03b"}, {"type": "ResetTool", "id": "eadad57d-860f-4d85-bde5-c4c325124cb2"}, {"type": "HelpTool", "id": "73100114-6082-4cb0-8114-34d2c74780dd"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "24475270-36c7-4666-96e1-4a4400faa883"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "52002e3b-632a-456d-a054-2eae42af6e57"}, {"type": "Grid", "id": "61eb6662-7188-4637-99c4-52682a58d942"}, {"type": "LinearAxis", "id": "b4b55527-e80f-4e9e-85d9-68ab0345a1c8"}, {"type": "Grid", "id": "9d99e936-cc3f-471a-90c8-084d88003edb"}, {"type": "BoxAnnotation", "id": "e081fd2b-e161-4014-9b41-37f2e95d3fb1"}, {"type": "GlyphRenderer", "id": "b1e4810b-6b54-4025-9f4e-b6294a9f673e"}], "left": [{"type": "LinearAxis", "id": "b4b55527-e80f-4e9e-85d9-68ab0345a1c8"}], "below": [{"type": "LinearAxis", "id": "52002e3b-632a-456d-a054-2eae42af6e57"}], "tool_events": {"type": "ToolEvents", "id": "a8d7d540-0822-4ebc-9092-da0cb4fa8c80"}, "x_range": {"type": "DataRange1d", "id": "b8762566-07ce-43d3-a10d-268f2ff5f0d8"}}, "subtype": "Figure"}, {"type": "Wedge", "id": "923fe819-2b16-4380-b10b-618c50e10ab1", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "radius": {"value": 15, "units": "screen"}, "end_angle": {"value": 4.1, "units": "rad"}, "x": {"field": "x"}, "start_angle": {"value": 0.6, "units": "rad"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "PreviewSaveTool", "id": "02bb1e45-52d0-43df-a5fd-343daf41ce44", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "50a276e0-96f6-4dbf-b41c-afd829c82367"}}}, {"type": "DataRange1d", "id": "24475270-36c7-4666-96e1-4a4400faa883", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "b1e4810b-6b54-4025-9f4e-b6294a9f673e", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "2904741f-d529-4e12-95e9-b00e340447b4"}, "nonselection_glyph": {"type": "Wedge", "id": "923fe819-2b16-4380-b10b-618c50e10ab1"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Wedge", "id": "99332af8-7c16-4696-a183-b4fc2f316ecd"}}}, {"type": "Grid", "id": "61eb6662-7188-4637-99c4-52682a58d942", "attributes": {"ticker": {"type": "BasicTicker", "id": "b6b3ebd7-62ca-436a-94b7-b54ac14069fb"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "50a276e0-96f6-4dbf-b41c-afd829c82367"}}}, {"type": "BasicTicker", "id": "2b5a4d89-7e7b-4a3d-9b15-3b3a1c113ed0", "attributes": {}}, {"type": "LinearAxis", "id": "b4b55527-e80f-4e9e-85d9-68ab0345a1c8", "attributes": {"ticker": {"type": "BasicTicker", "id": "2b5a4d89-7e7b-4a3d-9b15-3b3a1c113ed0"}, "formatter": {"type": "BasicTickFormatter", "id": "730b929d-af67-496e-8fc3-9e7259cd1662"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "50a276e0-96f6-4dbf-b41c-afd829c82367"}}}, {"type": "ResizeTool", "id": "112e1d5b-dd1a-47fb-bf1d-879d3107a03b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "50a276e0-96f6-4dbf-b41c-afd829c82367"}}}, {"type": "BoxZoomTool", "id": "12574d7f-2fcf-4958-837c-0703c84f2ab5", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "e081fd2b-e161-4014-9b41-37f2e95d3fb1"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "50a276e0-96f6-4dbf-b41c-afd829c82367"}}}, {"type": "LinearAxis", "id": "52002e3b-632a-456d-a054-2eae42af6e57", "attributes": {"ticker": {"type": "BasicTicker", "id": "b6b3ebd7-62ca-436a-94b7-b54ac14069fb"}, "formatter": {"type": "BasicTickFormatter", "id": "ef45f24e-4953-4f63-92fe-81420ad08493"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "50a276e0-96f6-4dbf-b41c-afd829c82367"}}}, {"type": "Wedge", "id": "99332af8-7c16-4696-a183-b4fc2f316ecd", "attributes": {"line_color": {"value": "#2b8cbe"}, "y": {"field": "y"}, "radius": {"value": 15, "units": "screen"}, "end_angle": {"value": 4.1, "units": "rad"}, "x": {"field": "x"}, "start_angle": {"value": 0.6, "units": "rad"}, "fill_color": {"value": "#2b8cbe"}}}], "root_ids": ["50a276e0-96f6-4dbf-b41c-afd829c82367"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "32fbb3e1-041f-4d22-b480-b06cb5ac4136", "modelid": "50a276e0-96f6-4dbf-b41c-afd829c82367", "elementid": "7afb0cbd-4b7a-480d-8012-d3b09ee6e4e3"}];
          
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