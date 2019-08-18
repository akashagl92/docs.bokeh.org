
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
  };var element = document.getElementById("688ab978-383b-4527-a772-87f082fe5404");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '688ab978-383b-4527-a772-87f082fe5404' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"f605bfd6-acc0-461e-9653-f1d08a02613f": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LogAxis", "id": "0a34a1a2-7fd3-40af-aad8-89be62b37ef5", "attributes": {"ticker": {"type": "LogTicker", "id": "a0932704-3942-440b-8509-069477810ca1"}, "formatter": {"type": "LogTickFormatter", "id": "fac33622-cff7-4a99-b003-5437575096e4"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "f6cd2a9c-4295-44b0-95d3-0ddd574155f0"}}}, {"type": "LogTickFormatter", "id": "fac33622-cff7-4a99-b003-5437575096e4", "attributes": {"ticker": null}}, {"type": "Range1d", "id": "95575e63-bfbc-44a7-9969-edb4be88e9fe", "attributes": {"start": 0.1, "end": 10000, "callback": null}}, {"type": "WheelZoomTool", "id": "3c307e93-2097-4217-a25b-ef2a546a3133", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f6cd2a9c-4295-44b0-95d3-0ddd574155f0"}}}, {"type": "HelpTool", "id": "c08f85cf-afac-4960-843a-192d78609ada", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f6cd2a9c-4295-44b0-95d3-0ddd574155f0"}}}, {"type": "PreviewSaveTool", "id": "206f8932-fac3-45bf-ac4e-fc347a336ef8", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f6cd2a9c-4295-44b0-95d3-0ddd574155f0"}}}, {"type": "ResizeTool", "id": "12ce22d6-d526-4743-92c3-ef1de2563ffc", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f6cd2a9c-4295-44b0-95d3-0ddd574155f0"}}}, {"type": "Plot", "id": "f6cd2a9c-4295-44b0-95d3-0ddd574155f0", "attributes": {"tools": [{"type": "PanTool", "id": "81db0b95-c5ad-480b-bd4b-b6953ffd3a40"}, {"type": "WheelZoomTool", "id": "3c307e93-2097-4217-a25b-ef2a546a3133"}, {"type": "BoxZoomTool", "id": "64163a5f-0289-405c-b3e6-4a0481cdc572"}, {"type": "PreviewSaveTool", "id": "206f8932-fac3-45bf-ac4e-fc347a336ef8"}, {"type": "ResizeTool", "id": "12ce22d6-d526-4743-92c3-ef1de2563ffc"}, {"type": "ResetTool", "id": "e45fdcf2-9d7d-4ea1-b93c-db6e78ad19a4"}, {"type": "HelpTool", "id": "c08f85cf-afac-4960-843a-192d78609ada"}], "plot_width": 400, "y_range": {"type": "Range1d", "id": "95575e63-bfbc-44a7-9969-edb4be88e9fe"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "f11f14b6-70bb-4a80-978c-cbba4da32c09"}, {"type": "Grid", "id": "5722aac3-49d9-425d-b192-492f45c2057d"}, {"type": "LogAxis", "id": "0a34a1a2-7fd3-40af-aad8-89be62b37ef5"}, {"type": "Grid", "id": "db95c3f7-4b65-4965-9b4d-7fe9351850b8"}, {"type": "BoxAnnotation", "id": "3f35adc2-2803-4f8e-99f2-13c975be728e"}, {"type": "GlyphRenderer", "id": "b77ece75-d2c8-4ae2-9c7d-43bd8541f0a1"}, {"type": "GlyphRenderer", "id": "ca0b6ee2-69a0-451b-921d-b01c6209306a"}], "y_mapper_type": "log", "left": [{"type": "LogAxis", "id": "0a34a1a2-7fd3-40af-aad8-89be62b37ef5"}], "below": [{"type": "LinearAxis", "id": "f11f14b6-70bb-4a80-978c-cbba4da32c09"}], "tool_events": {"type": "ToolEvents", "id": "b840f490-3e78-43cb-8e04-ac9c311c0440"}, "x_range": {"type": "DataRange1d", "id": "1d832c97-0eca-4c58-aa28-9faf025b7b68"}}, "subtype": "Figure"}, {"type": "LogTicker", "id": "a0932704-3942-440b-8509-069477810ca1", "attributes": {"num_minor_ticks": 10}}, {"type": "GlyphRenderer", "id": "b77ece75-d2c8-4ae2-9c7d-43bd8541f0a1", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "087d1c69-b0ef-43e5-9e06-116f6c4d06ff"}, "nonselection_glyph": {"type": "Line", "id": "5f360678-336a-4a14-b063-1e57e211a23b"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "596ceacd-2589-47d4-8219-c76720955580"}}}, {"type": "PanTool", "id": "81db0b95-c5ad-480b-bd4b-b6953ffd3a40", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f6cd2a9c-4295-44b0-95d3-0ddd574155f0"}}}, {"type": "LinearAxis", "id": "f11f14b6-70bb-4a80-978c-cbba4da32c09", "attributes": {"ticker": {"type": "BasicTicker", "id": "46b7e38f-7eb1-4f02-b13d-a2b0b5241d40"}, "formatter": {"type": "BasicTickFormatter", "id": "e8c8027f-ae2a-47e8-b0b8-e6c0c0cc2859"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "f6cd2a9c-4295-44b0-95d3-0ddd574155f0"}}}, {"type": "Line", "id": "596ceacd-2589-47d4-8219-c76720955580", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "x": {"field": "x"}, "y": {"field": "y"}}}, {"type": "ColumnDataSource", "id": "087d1c69-b0ef-43e5-9e06-116f6c4d06ff", "attributes": {"data": {"x": [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0], "y": [1.2589254117941673, 3.1622776601683795, 10.0, 31.622776601683793, 100.0, 316.22776601683796, 1000.0]}, "column_names": ["x", "y"], "callback": null}}, {"type": "BasicTickFormatter", "id": "e8c8027f-ae2a-47e8-b0b8-e6c0c0cc2859", "attributes": {}}, {"type": "DataRange1d", "id": "1d832c97-0eca-4c58-aa28-9faf025b7b68", "attributes": {"callback": null}}, {"type": "Grid", "id": "db95c3f7-4b65-4965-9b4d-7fe9351850b8", "attributes": {"ticker": {"type": "LogTicker", "id": "a0932704-3942-440b-8509-069477810ca1"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "f6cd2a9c-4295-44b0-95d3-0ddd574155f0"}}}, {"type": "ToolEvents", "id": "b840f490-3e78-43cb-8e04-ac9c311c0440", "attributes": {}}, {"type": "BasicTicker", "id": "46b7e38f-7eb1-4f02-b13d-a2b0b5241d40", "attributes": {}}, {"type": "BoxZoomTool", "id": "64163a5f-0289-405c-b3e6-4a0481cdc572", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "3f35adc2-2803-4f8e-99f2-13c975be728e"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "f6cd2a9c-4295-44b0-95d3-0ddd574155f0"}}}, {"type": "ResetTool", "id": "e45fdcf2-9d7d-4ea1-b93c-db6e78ad19a4", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f6cd2a9c-4295-44b0-95d3-0ddd574155f0"}}}, {"type": "Circle", "id": "4820e132-02ab-48f8-99bd-85cd47210e56", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 8, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "Grid", "id": "5722aac3-49d9-425d-b192-492f45c2057d", "attributes": {"ticker": {"type": "BasicTicker", "id": "46b7e38f-7eb1-4f02-b13d-a2b0b5241d40"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "f6cd2a9c-4295-44b0-95d3-0ddd574155f0"}}}, {"type": "BoxAnnotation", "id": "3f35adc2-2803-4f8e-99f2-13c975be728e", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Circle", "id": "e5ceaa8b-9e87-4724-9982-df6ebc6d89fa", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 8, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "white"}}}, {"type": "ColumnDataSource", "id": "edf14319-d429-4980-96af-04dce0952c33", "attributes": {"data": {"x": [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0], "y": [1.2589254117941673, 3.1622776601683795, 10.0, 31.622776601683793, 100.0, 316.22776601683796, 1000.0]}, "column_names": ["x", "y"], "callback": null}}, {"type": "GlyphRenderer", "id": "ca0b6ee2-69a0-451b-921d-b01c6209306a", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "edf14319-d429-4980-96af-04dce0952c33"}, "nonselection_glyph": {"type": "Circle", "id": "4820e132-02ab-48f8-99bd-85cd47210e56"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "e5ceaa8b-9e87-4724-9982-df6ebc6d89fa"}}}, {"type": "Line", "id": "5f360678-336a-4a14-b063-1e57e211a23b", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "y": {"field": "y"}}}], "root_ids": ["f6cd2a9c-4295-44b0-95d3-0ddd574155f0"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "f605bfd6-acc0-461e-9653-f1d08a02613f", "modelid": "f6cd2a9c-4295-44b0-95d3-0ddd574155f0", "elementid": "688ab978-383b-4527-a772-87f082fe5404"}];
          
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