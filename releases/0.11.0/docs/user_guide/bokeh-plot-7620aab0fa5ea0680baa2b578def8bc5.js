
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
  };var element = document.getElementById("32848699-c9c2-4144-9341-f83ff129bebf");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '32848699-c9c2-4144-9341-f83ff129bebf' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"5600cff1-f4f7-4d26-8a3f-665909301264": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ColumnDataSource", "id": "1302a881-e0a7-41c1-85ab-487dd3b42b36", "attributes": {"data": {"line_color": ["firebrick", "navy"], "xs": [[1, 3, 2], [3, 4, 6, 6]], "ys": [[2, 1, 4], [4, 7, 8, 5]], "line_alpha": [0.8, 0.3], "fill_color": ["firebrick", "navy"], "fill_alpha": [0.8, 0.3]}, "column_names": ["ys", "xs", "line_color", "line_alpha", "fill_color", "fill_alpha"], "callback": null}}, {"type": "Patches", "id": "a555690e-b738-4620-a305-4a56645736c7", "attributes": {"line_color": {"field": "line_color"}, "line_width": {"value": 2}, "xs": {"field": "xs"}, "ys": {"field": "ys"}, "line_alpha": {"field": "line_alpha"}, "fill_color": {"field": "fill_color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "ToolEvents", "id": "82283334-4dc1-4bd9-9bda-77e8f3578747", "attributes": {}}, {"type": "WheelZoomTool", "id": "bff76336-4c4e-4db2-a063-2c4c7d5d0117", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "bd64c873-4278-4a87-af71-ff967ae5f107"}}}, {"type": "BoxZoomTool", "id": "9eb80cfa-bbba-485c-a92f-04589a746e47", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "c4e35930-2feb-404e-9cc7-5b7e9661d764"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "bd64c873-4278-4a87-af71-ff967ae5f107"}}}, {"type": "BasicTickFormatter", "id": "96786e3b-4cfc-465a-9a65-39061d9e08fa", "attributes": {}}, {"type": "Grid", "id": "35b89e13-047d-4fdb-b7e9-caced65b820e", "attributes": {"ticker": {"type": "BasicTicker", "id": "36f4f9bc-af23-4a42-98a1-e4021fa3898e"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "bd64c873-4278-4a87-af71-ff967ae5f107"}}}, {"type": "Patches", "id": "011bca3d-8c84-46f0-bd24-fb5b070e83b0", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "xs": {"field": "xs"}, "ys": {"field": "ys"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ResizeTool", "id": "a03ed7db-5bcf-47b3-b442-896dc9570118", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "bd64c873-4278-4a87-af71-ff967ae5f107"}}}, {"type": "BoxAnnotation", "id": "c4e35930-2feb-404e-9cc7-5b7e9661d764", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ResetTool", "id": "b0cec902-129a-483d-a67d-2c16bb9d4e4c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "bd64c873-4278-4a87-af71-ff967ae5f107"}}}, {"type": "HelpTool", "id": "4c0a5f28-ad07-4b6e-9b10-9b62f86820e4", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "bd64c873-4278-4a87-af71-ff967ae5f107"}}}, {"type": "Plot", "id": "bd64c873-4278-4a87-af71-ff967ae5f107", "attributes": {"tools": [{"type": "PanTool", "id": "7414401f-e246-4748-8057-100286e18312"}, {"type": "WheelZoomTool", "id": "bff76336-4c4e-4db2-a063-2c4c7d5d0117"}, {"type": "BoxZoomTool", "id": "9eb80cfa-bbba-485c-a92f-04589a746e47"}, {"type": "PreviewSaveTool", "id": "0a3b78f4-5720-4fcf-bcc6-7ad20a37f237"}, {"type": "ResizeTool", "id": "a03ed7db-5bcf-47b3-b442-896dc9570118"}, {"type": "ResetTool", "id": "b0cec902-129a-483d-a67d-2c16bb9d4e4c"}, {"type": "HelpTool", "id": "4c0a5f28-ad07-4b6e-9b10-9b62f86820e4"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "a6743fd7-e54a-478f-a3c9-42dfbe3889c1"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "179881cd-d020-4b8d-a864-61df89648c90"}, {"type": "Grid", "id": "35b89e13-047d-4fdb-b7e9-caced65b820e"}, {"type": "LinearAxis", "id": "195a71d7-ec86-4eb4-bc52-d6374d8668af"}, {"type": "Grid", "id": "6228250c-df01-42b5-9ccb-12b819c7170e"}, {"type": "BoxAnnotation", "id": "c4e35930-2feb-404e-9cc7-5b7e9661d764"}, {"type": "GlyphRenderer", "id": "a5eaa3d6-3658-47e3-bdc1-4cf1d5402aa7"}], "left": [{"type": "LinearAxis", "id": "195a71d7-ec86-4eb4-bc52-d6374d8668af"}], "below": [{"type": "LinearAxis", "id": "179881cd-d020-4b8d-a864-61df89648c90"}], "tool_events": {"type": "ToolEvents", "id": "82283334-4dc1-4bd9-9bda-77e8f3578747"}, "x_range": {"type": "DataRange1d", "id": "519c32bd-d7b2-4e5e-9344-878bde09b69a"}}, "subtype": "Figure"}, {"type": "BasicTicker", "id": "c32f5f22-626b-44f0-b94f-2227f30b5919", "attributes": {}}, {"type": "BasicTicker", "id": "36f4f9bc-af23-4a42-98a1-e4021fa3898e", "attributes": {}}, {"type": "LinearAxis", "id": "195a71d7-ec86-4eb4-bc52-d6374d8668af", "attributes": {"ticker": {"type": "BasicTicker", "id": "c32f5f22-626b-44f0-b94f-2227f30b5919"}, "formatter": {"type": "BasicTickFormatter", "id": "4ecd5297-fc7f-4757-a3e0-df7640296dd6"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "bd64c873-4278-4a87-af71-ff967ae5f107"}}}, {"type": "GlyphRenderer", "id": "a5eaa3d6-3658-47e3-bdc1-4cf1d5402aa7", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "1302a881-e0a7-41c1-85ab-487dd3b42b36"}, "nonselection_glyph": {"type": "Patches", "id": "011bca3d-8c84-46f0-bd24-fb5b070e83b0"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Patches", "id": "a555690e-b738-4620-a305-4a56645736c7"}}}, {"type": "LinearAxis", "id": "179881cd-d020-4b8d-a864-61df89648c90", "attributes": {"ticker": {"type": "BasicTicker", "id": "36f4f9bc-af23-4a42-98a1-e4021fa3898e"}, "formatter": {"type": "BasicTickFormatter", "id": "96786e3b-4cfc-465a-9a65-39061d9e08fa"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "bd64c873-4278-4a87-af71-ff967ae5f107"}}}, {"type": "PreviewSaveTool", "id": "0a3b78f4-5720-4fcf-bcc6-7ad20a37f237", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "bd64c873-4278-4a87-af71-ff967ae5f107"}}}, {"type": "BasicTickFormatter", "id": "4ecd5297-fc7f-4757-a3e0-df7640296dd6", "attributes": {}}, {"type": "PanTool", "id": "7414401f-e246-4748-8057-100286e18312", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "bd64c873-4278-4a87-af71-ff967ae5f107"}}}, {"type": "DataRange1d", "id": "a6743fd7-e54a-478f-a3c9-42dfbe3889c1", "attributes": {"callback": null}}, {"type": "Grid", "id": "6228250c-df01-42b5-9ccb-12b819c7170e", "attributes": {"ticker": {"type": "BasicTicker", "id": "c32f5f22-626b-44f0-b94f-2227f30b5919"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "bd64c873-4278-4a87-af71-ff967ae5f107"}}}, {"type": "DataRange1d", "id": "519c32bd-d7b2-4e5e-9344-878bde09b69a", "attributes": {"callback": null}}], "root_ids": ["bd64c873-4278-4a87-af71-ff967ae5f107"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "5600cff1-f4f7-4d26-8a3f-665909301264", "modelid": "bd64c873-4278-4a87-af71-ff967ae5f107", "elementid": "32848699-c9c2-4144-9341-f83ff129bebf"}];
          
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