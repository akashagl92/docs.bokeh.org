
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
  };var element = document.getElementById("83feb790-76b0-4e72-a761-b1ded4bd9cb4");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '83feb790-76b0-4e72-a761-b1ded4bd9cb4' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"84f02631-b750-4e7d-80b7-3a2ca8585a35": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "2a89f271-ab1d-4084-bda1-5d9acacde111", "attributes": {"ticker": {"type": "BasicTicker", "id": "609ef169-ba1e-4dff-ad39-97f52115dc18"}, "formatter": {"type": "BasicTickFormatter", "id": "841460fc-f370-4c96-919b-2d1271882b95"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "7239f38c-019b-4d0a-93dd-d3d96135163b"}}}, {"type": "ToolEvents", "id": "05d5f2c0-eb92-42d0-adae-2caf4ede66e7", "attributes": {}}, {"type": "Quad", "id": "eff2f978-8919-4af8-8274-ce2af5d4a777", "attributes": {"line_color": {"value": "#B3DE69"}, "top": {"field": "top"}, "left": {"field": "left"}, "right": {"field": "right"}, "bottom": {"field": "bottom"}, "fill_color": {"value": "#B3DE69"}}}, {"type": "GlyphRenderer", "id": "c7d5a2fd-211d-484b-943c-18669c895230", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "9c3c1f4c-12a0-43c6-978f-488c6a2216de"}, "nonselection_glyph": {"type": "Quad", "id": "221ecf02-c1ed-41b4-9f62-de7c5a158b51"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Quad", "id": "eff2f978-8919-4af8-8274-ce2af5d4a777"}}}, {"type": "LinearAxis", "id": "e8c27b0a-7b58-43e8-a3ab-af0e9ffb38c1", "attributes": {"ticker": {"type": "BasicTicker", "id": "ce71a3b1-5647-4a93-8598-d1b0375c9632"}, "formatter": {"type": "BasicTickFormatter", "id": "a618e266-7aeb-48ff-955f-2b3aceaee738"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "7239f38c-019b-4d0a-93dd-d3d96135163b"}}}, {"type": "Plot", "id": "7239f38c-019b-4d0a-93dd-d3d96135163b", "attributes": {"tools": [{"type": "PanTool", "id": "293e6f8f-c0b9-455e-94ea-650655c12a7b"}, {"type": "WheelZoomTool", "id": "53f3c37c-4843-4521-9e30-b5503fa9dcc7"}, {"type": "BoxZoomTool", "id": "0e72415d-3767-4c2b-814b-1042da7ee112"}, {"type": "PreviewSaveTool", "id": "5b786ce5-298e-44e2-81b8-6787cb6d5e67"}, {"type": "ResizeTool", "id": "ca62aff5-dd76-4ca3-a6b7-b3e19d5dbdc0"}, {"type": "ResetTool", "id": "ec1993ee-43cf-410e-afdc-b6a86750b753"}, {"type": "HelpTool", "id": "1efd82c6-119d-4def-bb9d-0c6aa586eeba"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "88d1e0cf-8185-4810-ac3b-3e0a76b290fe"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "e8c27b0a-7b58-43e8-a3ab-af0e9ffb38c1"}, {"type": "Grid", "id": "5d1e2c89-e644-4ea2-9ff2-6bd68c02b6f0"}, {"type": "LinearAxis", "id": "2a89f271-ab1d-4084-bda1-5d9acacde111"}, {"type": "Grid", "id": "03707dfe-9d5b-410e-ae0f-831fd4509c1e"}, {"type": "BoxAnnotation", "id": "33a59c3b-2916-48ab-ac2c-1dcf50145825"}, {"type": "GlyphRenderer", "id": "c7d5a2fd-211d-484b-943c-18669c895230"}], "left": [{"type": "LinearAxis", "id": "2a89f271-ab1d-4084-bda1-5d9acacde111"}], "below": [{"type": "LinearAxis", "id": "e8c27b0a-7b58-43e8-a3ab-af0e9ffb38c1"}], "tool_events": {"type": "ToolEvents", "id": "05d5f2c0-eb92-42d0-adae-2caf4ede66e7"}, "x_range": {"type": "DataRange1d", "id": "efd7a3ab-199f-4ed1-9053-fba0dccadc0a"}}, "subtype": "Figure"}, {"type": "ResizeTool", "id": "ca62aff5-dd76-4ca3-a6b7-b3e19d5dbdc0", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "7239f38c-019b-4d0a-93dd-d3d96135163b"}}}, {"type": "DataRange1d", "id": "88d1e0cf-8185-4810-ac3b-3e0a76b290fe", "attributes": {"callback": null}}, {"type": "BoxAnnotation", "id": "33a59c3b-2916-48ab-ac2c-1dcf50145825", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "PreviewSaveTool", "id": "5b786ce5-298e-44e2-81b8-6787cb6d5e67", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "7239f38c-019b-4d0a-93dd-d3d96135163b"}}}, {"type": "ResetTool", "id": "ec1993ee-43cf-410e-afdc-b6a86750b753", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "7239f38c-019b-4d0a-93dd-d3d96135163b"}}}, {"type": "PanTool", "id": "293e6f8f-c0b9-455e-94ea-650655c12a7b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "7239f38c-019b-4d0a-93dd-d3d96135163b"}}}, {"type": "BasicTickFormatter", "id": "a618e266-7aeb-48ff-955f-2b3aceaee738", "attributes": {}}, {"type": "WheelZoomTool", "id": "53f3c37c-4843-4521-9e30-b5503fa9dcc7", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "7239f38c-019b-4d0a-93dd-d3d96135163b"}}}, {"type": "HelpTool", "id": "1efd82c6-119d-4def-bb9d-0c6aa586eeba", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "7239f38c-019b-4d0a-93dd-d3d96135163b"}}}, {"type": "BasicTicker", "id": "ce71a3b1-5647-4a93-8598-d1b0375c9632", "attributes": {}}, {"type": "BasicTicker", "id": "609ef169-ba1e-4dff-ad39-97f52115dc18", "attributes": {}}, {"type": "DataRange1d", "id": "efd7a3ab-199f-4ed1-9053-fba0dccadc0a", "attributes": {"callback": null}}, {"type": "Quad", "id": "221ecf02-c1ed-41b4-9f62-de7c5a158b51", "attributes": {"line_color": {"value": "#1f77b4"}, "top": {"field": "top"}, "left": {"field": "left"}, "right": {"field": "right"}, "bottom": {"field": "bottom"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "Grid", "id": "03707dfe-9d5b-410e-ae0f-831fd4509c1e", "attributes": {"ticker": {"type": "BasicTicker", "id": "609ef169-ba1e-4dff-ad39-97f52115dc18"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "7239f38c-019b-4d0a-93dd-d3d96135163b"}}}, {"type": "BoxZoomTool", "id": "0e72415d-3767-4c2b-814b-1042da7ee112", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "33a59c3b-2916-48ab-ac2c-1dcf50145825"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "7239f38c-019b-4d0a-93dd-d3d96135163b"}}}, {"type": "ColumnDataSource", "id": "9c3c1f4c-12a0-43c6-978f-488c6a2216de", "attributes": {"data": {"right": [1.2, 2.5, 3.7], "left": [1, 2, 3], "top": [2, 3, 4], "bottom": [1, 2, 3]}, "column_names": ["top", "left", "right", "bottom"], "callback": null}}, {"type": "Grid", "id": "5d1e2c89-e644-4ea2-9ff2-6bd68c02b6f0", "attributes": {"ticker": {"type": "BasicTicker", "id": "ce71a3b1-5647-4a93-8598-d1b0375c9632"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "7239f38c-019b-4d0a-93dd-d3d96135163b"}}}, {"type": "BasicTickFormatter", "id": "841460fc-f370-4c96-919b-2d1271882b95", "attributes": {}}], "root_ids": ["7239f38c-019b-4d0a-93dd-d3d96135163b"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "84f02631-b750-4e7d-80b7-3a2ca8585a35", "modelid": "7239f38c-019b-4d0a-93dd-d3d96135163b", "elementid": "83feb790-76b0-4e72-a761-b1ded4bd9cb4"}];
          
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