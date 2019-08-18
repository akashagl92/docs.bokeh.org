
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
  };var element = document.getElementById("c359cda3-9e28-4d32-9600-af57ace89ed4");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c359cda3-9e28-4d32-9600-af57ace89ed4' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"dba257b9-b976-46df-a599-432fc0acaa82": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "WheelZoomTool", "id": "825c32a5-90de-4e37-a91f-c69a872e41d5", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9cf50a28-0b14-474b-a2f8-9525c97c95c1"}}}, {"type": "Arc", "id": "1c34d848-f71b-40f5-bcff-779295c90375", "attributes": {"line_color": {"value": "navy"}, "y": {"field": "y"}, "end_angle": {"value": 4.8, "units": "rad"}, "x": {"field": "x"}, "start_angle": {"value": 0.4, "units": "rad"}, "radius": {"value": 0.1, "units": "data"}}}, {"type": "BasicTickFormatter", "id": "2be328e1-5c39-49a7-aba3-4b08a6164b12", "attributes": {}}, {"type": "HelpTool", "id": "7ae8c97d-c610-40ea-bbe0-63254779a5f1", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9cf50a28-0b14-474b-a2f8-9525c97c95c1"}}}, {"type": "LinearAxis", "id": "fd066888-3e6d-4a83-bf11-d23da03e250f", "attributes": {"ticker": {"type": "BasicTicker", "id": "5207a5a4-c104-4cd8-a140-a6896ee49e23"}, "formatter": {"type": "BasicTickFormatter", "id": "2be328e1-5c39-49a7-aba3-4b08a6164b12"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9cf50a28-0b14-474b-a2f8-9525c97c95c1"}}}, {"type": "BoxAnnotation", "id": "208b82d8-c6ea-4d7e-b950-49276def59de", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "5207a5a4-c104-4cd8-a140-a6896ee49e23", "attributes": {}}, {"type": "ResetTool", "id": "25d89427-8c5c-4dc3-aaae-bb5da6c43ba9", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9cf50a28-0b14-474b-a2f8-9525c97c95c1"}}}, {"type": "Arc", "id": "18934550-afa9-4eb6-9795-99561dcaf1b3", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "end_angle": {"value": 4.8, "units": "rad"}, "x": {"field": "x"}, "start_angle": {"value": 0.4, "units": "rad"}, "line_alpha": {"value": 0.1}, "radius": {"value": 0.1, "units": "data"}}}, {"type": "Grid", "id": "f2c826be-936d-4678-89c9-5ece2956aa58", "attributes": {"ticker": {"type": "BasicTicker", "id": "8cee7bea-7a90-4785-9da5-816ab98c7aed"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "9cf50a28-0b14-474b-a2f8-9525c97c95c1"}}}, {"type": "BasicTicker", "id": "8cee7bea-7a90-4785-9da5-816ab98c7aed", "attributes": {}}, {"type": "Grid", "id": "698fe206-8c5b-4a08-9ab2-240210fc1c88", "attributes": {"ticker": {"type": "BasicTicker", "id": "5207a5a4-c104-4cd8-a140-a6896ee49e23"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9cf50a28-0b14-474b-a2f8-9525c97c95c1"}}}, {"type": "LinearAxis", "id": "36751940-0e84-4740-b7bf-19a9d4741b47", "attributes": {"ticker": {"type": "BasicTicker", "id": "8cee7bea-7a90-4785-9da5-816ab98c7aed"}, "formatter": {"type": "BasicTickFormatter", "id": "e85cd9f8-c27f-4b21-ac98-e4a54b77c0c0"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9cf50a28-0b14-474b-a2f8-9525c97c95c1"}}}, {"type": "ToolEvents", "id": "b064bce0-4c65-46af-b5a1-d6ab0cb49f3c", "attributes": {}}, {"type": "BoxZoomTool", "id": "de2b3ad1-1551-4201-bf5d-1aba3c2cbc0c", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "208b82d8-c6ea-4d7e-b950-49276def59de"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9cf50a28-0b14-474b-a2f8-9525c97c95c1"}}}, {"type": "ResizeTool", "id": "0ec5f14d-bcc8-428f-8c7c-15fecf29cf7c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9cf50a28-0b14-474b-a2f8-9525c97c95c1"}}}, {"type": "PanTool", "id": "430f3cfd-f1e5-4877-9ac2-2dcc657a2469", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9cf50a28-0b14-474b-a2f8-9525c97c95c1"}}}, {"type": "BasicTickFormatter", "id": "e85cd9f8-c27f-4b21-ac98-e4a54b77c0c0", "attributes": {}}, {"type": "DataRange1d", "id": "9472e7d4-b9a8-4188-ba34-b0a75a89d092", "attributes": {"callback": null}}, {"type": "PreviewSaveTool", "id": "18d33f56-055f-4ea3-b8eb-add9a70f98d5", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9cf50a28-0b14-474b-a2f8-9525c97c95c1"}}}, {"type": "ColumnDataSource", "id": "4bfe54b3-7442-45db-8b80-092b904e6e7a", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["y", "x"], "callback": null}}, {"type": "DataRange1d", "id": "4fb78ddc-59a7-475f-9e89-7daa55769aae", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "61c3cebd-c1aa-43c4-96c0-d3326dcdbe26", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "4bfe54b3-7442-45db-8b80-092b904e6e7a"}, "nonselection_glyph": {"type": "Arc", "id": "18934550-afa9-4eb6-9795-99561dcaf1b3"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Arc", "id": "1c34d848-f71b-40f5-bcff-779295c90375"}}}, {"type": "Plot", "id": "9cf50a28-0b14-474b-a2f8-9525c97c95c1", "attributes": {"tools": [{"type": "PanTool", "id": "430f3cfd-f1e5-4877-9ac2-2dcc657a2469"}, {"type": "WheelZoomTool", "id": "825c32a5-90de-4e37-a91f-c69a872e41d5"}, {"type": "BoxZoomTool", "id": "de2b3ad1-1551-4201-bf5d-1aba3c2cbc0c"}, {"type": "PreviewSaveTool", "id": "18d33f56-055f-4ea3-b8eb-add9a70f98d5"}, {"type": "ResizeTool", "id": "0ec5f14d-bcc8-428f-8c7c-15fecf29cf7c"}, {"type": "ResetTool", "id": "25d89427-8c5c-4dc3-aaae-bb5da6c43ba9"}, {"type": "HelpTool", "id": "7ae8c97d-c610-40ea-bbe0-63254779a5f1"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "9472e7d4-b9a8-4188-ba34-b0a75a89d092"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "fd066888-3e6d-4a83-bf11-d23da03e250f"}, {"type": "Grid", "id": "698fe206-8c5b-4a08-9ab2-240210fc1c88"}, {"type": "LinearAxis", "id": "36751940-0e84-4740-b7bf-19a9d4741b47"}, {"type": "Grid", "id": "f2c826be-936d-4678-89c9-5ece2956aa58"}, {"type": "BoxAnnotation", "id": "208b82d8-c6ea-4d7e-b950-49276def59de"}, {"type": "GlyphRenderer", "id": "61c3cebd-c1aa-43c4-96c0-d3326dcdbe26"}], "left": [{"type": "LinearAxis", "id": "36751940-0e84-4740-b7bf-19a9d4741b47"}], "below": [{"type": "LinearAxis", "id": "fd066888-3e6d-4a83-bf11-d23da03e250f"}], "tool_events": {"type": "ToolEvents", "id": "b064bce0-4c65-46af-b5a1-d6ab0cb49f3c"}, "x_range": {"type": "DataRange1d", "id": "4fb78ddc-59a7-475f-9e89-7daa55769aae"}}, "subtype": "Figure"}], "root_ids": ["9cf50a28-0b14-474b-a2f8-9525c97c95c1"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "dba257b9-b976-46df-a599-432fc0acaa82", "modelid": "9cf50a28-0b14-474b-a2f8-9525c97c95c1", "elementid": "c359cda3-9e28-4d32-9600-af57ace89ed4"}];
          
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