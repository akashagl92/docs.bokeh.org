
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
  };var element = document.getElementById("0de03e88-85f2-495f-8360-4b9addef5465");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0de03e88-85f2-495f-8360-4b9addef5465' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"c3bce372-a91e-4d93-b59f-39a50b148643": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "2e0692df-9917-4626-8ec0-1ff3ed4ee5be", "attributes": {"ticker": {"type": "BasicTicker", "id": "ebb8725d-4651-4637-b1cc-9343b2de1a6b"}, "formatter": {"type": "BasicTickFormatter", "id": "fc82564c-6470-4b62-92b1-e50bd2c5425b"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "6f134d36-04ca-47ed-9236-94baa59543a9"}}}, {"type": "DataRange1d", "id": "e1e44298-756d-4f71-b414-a14a2f4379f4", "attributes": {"callback": null}}, {"type": "InvertedTriangle", "id": "8109ea08-9e9a-4316-a2ea-2b7d1a2c38cd", "attributes": {"line_color": {"value": "#DE2D26"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#DE2D26"}}}, {"type": "PreviewSaveTool", "id": "7d21fd53-1669-498b-b30d-a8857c43e7c0", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6f134d36-04ca-47ed-9236-94baa59543a9"}}}, {"type": "BoxZoomTool", "id": "c88b6e0d-2167-41c9-ba0f-4cf0e2c0abd0", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "80f28007-01e9-4e4b-ae9c-cf5cf75da7ce"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "6f134d36-04ca-47ed-9236-94baa59543a9"}}}, {"type": "GlyphRenderer", "id": "747a98ec-6e34-4247-9834-ae38eedcc3ce", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "dbc83183-1b3f-49fd-a97e-d3b87419babe"}, "nonselection_glyph": {"type": "InvertedTriangle", "id": "4cf4f79f-80a7-4e98-824d-d4e6362c5b33"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "InvertedTriangle", "id": "8109ea08-9e9a-4316-a2ea-2b7d1a2c38cd"}}}, {"type": "LinearAxis", "id": "438c6298-1269-4b05-bc9c-ff5afb9cd5a6", "attributes": {"ticker": {"type": "BasicTicker", "id": "8e120119-6c7c-4fa1-ae45-d22d98064a5d"}, "formatter": {"type": "BasicTickFormatter", "id": "2f0d2aae-0e36-4474-b231-376c3ea8f64f"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "6f134d36-04ca-47ed-9236-94baa59543a9"}}}, {"type": "Grid", "id": "e02272ed-77a3-403a-9a67-efb5ae4e3338", "attributes": {"ticker": {"type": "BasicTicker", "id": "ebb8725d-4651-4637-b1cc-9343b2de1a6b"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "6f134d36-04ca-47ed-9236-94baa59543a9"}}}, {"type": "ResetTool", "id": "625ba6bc-f7fd-4337-9f9d-c52554e46cd8", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6f134d36-04ca-47ed-9236-94baa59543a9"}}}, {"type": "PanTool", "id": "ab654d01-8b14-4290-b239-9da3c1fb8107", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6f134d36-04ca-47ed-9236-94baa59543a9"}}}, {"type": "BasicTicker", "id": "8e120119-6c7c-4fa1-ae45-d22d98064a5d", "attributes": {}}, {"type": "Plot", "id": "6f134d36-04ca-47ed-9236-94baa59543a9", "attributes": {"tools": [{"type": "PanTool", "id": "ab654d01-8b14-4290-b239-9da3c1fb8107"}, {"type": "WheelZoomTool", "id": "65381dc8-79cc-40cc-8fd2-6a3074371967"}, {"type": "BoxZoomTool", "id": "c88b6e0d-2167-41c9-ba0f-4cf0e2c0abd0"}, {"type": "PreviewSaveTool", "id": "7d21fd53-1669-498b-b30d-a8857c43e7c0"}, {"type": "ResizeTool", "id": "2243d350-3afa-48d8-87f8-4daee2fd255e"}, {"type": "ResetTool", "id": "625ba6bc-f7fd-4337-9f9d-c52554e46cd8"}, {"type": "HelpTool", "id": "71b16605-05b6-452a-9c33-57f31fe2defb"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "851acb47-629c-4924-980b-c902cd871cc7"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "438c6298-1269-4b05-bc9c-ff5afb9cd5a6"}, {"type": "Grid", "id": "d02b6501-c764-41fb-be28-6e156360984b"}, {"type": "LinearAxis", "id": "2e0692df-9917-4626-8ec0-1ff3ed4ee5be"}, {"type": "Grid", "id": "e02272ed-77a3-403a-9a67-efb5ae4e3338"}, {"type": "BoxAnnotation", "id": "80f28007-01e9-4e4b-ae9c-cf5cf75da7ce"}, {"type": "GlyphRenderer", "id": "747a98ec-6e34-4247-9834-ae38eedcc3ce"}], "left": [{"type": "LinearAxis", "id": "2e0692df-9917-4626-8ec0-1ff3ed4ee5be"}], "below": [{"type": "LinearAxis", "id": "438c6298-1269-4b05-bc9c-ff5afb9cd5a6"}], "tool_events": {"type": "ToolEvents", "id": "357ddb8c-45f2-45d7-abf0-9ff8e483e23b"}, "x_range": {"type": "DataRange1d", "id": "e1e44298-756d-4f71-b414-a14a2f4379f4"}}, "subtype": "Figure"}, {"type": "BasicTickFormatter", "id": "2f0d2aae-0e36-4474-b231-376c3ea8f64f", "attributes": {}}, {"type": "BoxAnnotation", "id": "80f28007-01e9-4e4b-ae9c-cf5cf75da7ce", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ToolEvents", "id": "357ddb8c-45f2-45d7-abf0-9ff8e483e23b", "attributes": {}}, {"type": "Grid", "id": "d02b6501-c764-41fb-be28-6e156360984b", "attributes": {"ticker": {"type": "BasicTicker", "id": "8e120119-6c7c-4fa1-ae45-d22d98064a5d"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "6f134d36-04ca-47ed-9236-94baa59543a9"}}}, {"type": "ResizeTool", "id": "2243d350-3afa-48d8-87f8-4daee2fd255e", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6f134d36-04ca-47ed-9236-94baa59543a9"}}}, {"type": "BasicTickFormatter", "id": "fc82564c-6470-4b62-92b1-e50bd2c5425b", "attributes": {}}, {"type": "ColumnDataSource", "id": "dbc83183-1b3f-49fd-a97e-d3b87419babe", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["x", "y"], "callback": null}}, {"type": "InvertedTriangle", "id": "4cf4f79f-80a7-4e98-824d-d4e6362c5b33", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "WheelZoomTool", "id": "65381dc8-79cc-40cc-8fd2-6a3074371967", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6f134d36-04ca-47ed-9236-94baa59543a9"}}}, {"type": "BasicTicker", "id": "ebb8725d-4651-4637-b1cc-9343b2de1a6b", "attributes": {}}, {"type": "HelpTool", "id": "71b16605-05b6-452a-9c33-57f31fe2defb", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6f134d36-04ca-47ed-9236-94baa59543a9"}}}, {"type": "DataRange1d", "id": "851acb47-629c-4924-980b-c902cd871cc7", "attributes": {"callback": null}}], "root_ids": ["6f134d36-04ca-47ed-9236-94baa59543a9"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "c3bce372-a91e-4d93-b59f-39a50b148643", "modelid": "6f134d36-04ca-47ed-9236-94baa59543a9", "elementid": "0de03e88-85f2-495f-8360-4b9addef5465"}];
          
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