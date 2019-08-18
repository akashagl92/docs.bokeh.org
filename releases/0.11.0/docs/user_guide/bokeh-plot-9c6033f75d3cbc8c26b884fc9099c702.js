
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
  };var element = document.getElementById("18757674-f241-4a4e-beee-01b189af74c6");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '18757674-f241-4a4e-beee-01b189af74c6' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"3d854c80-afa5-4272-bcc6-e4f06f3e0580": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "fe366ad2-cd03-4728-974a-db41d9543ee6", "attributes": {}}, {"type": "Grid", "id": "b014184e-31f5-4207-afc3-52e6fe0f525d", "attributes": {"ticker": {"type": "BasicTicker", "id": "89cd3ef6-81bd-4536-b603-4fc3521e58d8"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "0e8d6081-0842-4623-b894-614ba7c7c159"}}}, {"type": "LinearAxis", "id": "93909a25-448d-4f3d-928b-8fc305116627", "attributes": {"ticker": {"type": "BasicTicker", "id": "42f0c418-234d-44a5-a35d-a8daef405334"}, "formatter": {"type": "BasicTickFormatter", "id": "fe366ad2-cd03-4728-974a-db41d9543ee6"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "0e8d6081-0842-4623-b894-614ba7c7c159"}}}, {"type": "ResizeTool", "id": "36fa5975-23ae-4c16-9247-aef06118dccb", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "0e8d6081-0842-4623-b894-614ba7c7c159"}}}, {"type": "HelpTool", "id": "8a1e0564-1489-4343-90ce-26f97bb58135", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "0e8d6081-0842-4623-b894-614ba7c7c159"}}}, {"type": "ResetTool", "id": "d53ddbe1-2775-4f8d-b06c-8727c12f8795", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "0e8d6081-0842-4623-b894-614ba7c7c159"}}}, {"type": "Patch", "id": "1814ae1f-f333-404f-bf3f-d226c5229772", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "BasicTicker", "id": "89cd3ef6-81bd-4536-b603-4fc3521e58d8", "attributes": {}}, {"type": "LinearAxis", "id": "0fd59813-eec7-4dc6-999e-04ff79f697fa", "attributes": {"ticker": {"type": "BasicTicker", "id": "89cd3ef6-81bd-4536-b603-4fc3521e58d8"}, "formatter": {"type": "BasicTickFormatter", "id": "07fba04b-e60d-4ea8-800e-3696afaef7da"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "0e8d6081-0842-4623-b894-614ba7c7c159"}}}, {"type": "DataRange1d", "id": "243c464d-7373-4512-896a-5c15631bbd6c", "attributes": {"callback": null}}, {"type": "BoxAnnotation", "id": "358db24a-a69e-4ef8-b6e9-ba17c8275a75", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "PanTool", "id": "dac2ab4b-1c28-4c61-b602-3718b9192620", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "0e8d6081-0842-4623-b894-614ba7c7c159"}}}, {"type": "DataRange1d", "id": "487905ad-c653-4d5d-bd2c-a41802ac3fee", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "e893b83b-dc2a-4a6a-a867-f877f746ce29", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "7dc15ef8-60c2-473d-bc6f-f8530aef1c17"}, "nonselection_glyph": {"type": "Patch", "id": "1814ae1f-f333-404f-bf3f-d226c5229772"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Patch", "id": "2710b5b7-aa3d-4138-b279-990cd71f0ac5"}}}, {"type": "Plot", "id": "0e8d6081-0842-4623-b894-614ba7c7c159", "attributes": {"tools": [{"type": "PanTool", "id": "dac2ab4b-1c28-4c61-b602-3718b9192620"}, {"type": "WheelZoomTool", "id": "a997846a-55a9-403e-ab4d-58d0b351f169"}, {"type": "BoxZoomTool", "id": "5ceecc58-94d2-44c3-98a1-cd5f6c3dab13"}, {"type": "PreviewSaveTool", "id": "cb1e4467-ec40-44e0-a662-00caa49a1166"}, {"type": "ResizeTool", "id": "36fa5975-23ae-4c16-9247-aef06118dccb"}, {"type": "ResetTool", "id": "d53ddbe1-2775-4f8d-b06c-8727c12f8795"}, {"type": "HelpTool", "id": "8a1e0564-1489-4343-90ce-26f97bb58135"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "487905ad-c653-4d5d-bd2c-a41802ac3fee"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "93909a25-448d-4f3d-928b-8fc305116627"}, {"type": "Grid", "id": "383ee3c2-2e79-47eb-bda4-ead6cbb8db19"}, {"type": "LinearAxis", "id": "0fd59813-eec7-4dc6-999e-04ff79f697fa"}, {"type": "Grid", "id": "b014184e-31f5-4207-afc3-52e6fe0f525d"}, {"type": "BoxAnnotation", "id": "358db24a-a69e-4ef8-b6e9-ba17c8275a75"}, {"type": "GlyphRenderer", "id": "e893b83b-dc2a-4a6a-a867-f877f746ce29"}], "left": [{"type": "LinearAxis", "id": "0fd59813-eec7-4dc6-999e-04ff79f697fa"}], "below": [{"type": "LinearAxis", "id": "93909a25-448d-4f3d-928b-8fc305116627"}], "tool_events": {"type": "ToolEvents", "id": "862ae9cd-fed7-4b94-b2c8-64df502459ca"}, "x_range": {"type": "DataRange1d", "id": "243c464d-7373-4512-896a-5c15631bbd6c"}}, "subtype": "Figure"}, {"type": "WheelZoomTool", "id": "a997846a-55a9-403e-ab4d-58d0b351f169", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "0e8d6081-0842-4623-b894-614ba7c7c159"}}}, {"type": "ColumnDataSource", "id": "7dc15ef8-60c2-473d-bc6f-f8530aef1c17", "attributes": {"data": {"x": [1.0, 2.0, 3.0, "NaN", 4.0, 5.0, 6.0], "y": [6.0, 7.0, 5.0, "NaN", 7.0, 3.0, 6.0]}, "column_names": ["x", "y"], "callback": null}}, {"type": "BasicTicker", "id": "42f0c418-234d-44a5-a35d-a8daef405334", "attributes": {}}, {"type": "BoxZoomTool", "id": "5ceecc58-94d2-44c3-98a1-cd5f6c3dab13", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "358db24a-a69e-4ef8-b6e9-ba17c8275a75"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "0e8d6081-0842-4623-b894-614ba7c7c159"}}}, {"type": "Grid", "id": "383ee3c2-2e79-47eb-bda4-ead6cbb8db19", "attributes": {"ticker": {"type": "BasicTicker", "id": "42f0c418-234d-44a5-a35d-a8daef405334"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "0e8d6081-0842-4623-b894-614ba7c7c159"}}}, {"type": "BasicTickFormatter", "id": "07fba04b-e60d-4ea8-800e-3696afaef7da", "attributes": {}}, {"type": "PreviewSaveTool", "id": "cb1e4467-ec40-44e0-a662-00caa49a1166", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "0e8d6081-0842-4623-b894-614ba7c7c159"}}}, {"type": "Patch", "id": "2710b5b7-aa3d-4138-b279-990cd71f0ac5", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "line_alpha": {"value": 0.5}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.5}}}, {"type": "ToolEvents", "id": "862ae9cd-fed7-4b94-b2c8-64df502459ca", "attributes": {}}], "root_ids": ["0e8d6081-0842-4623-b894-614ba7c7c159"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "3d854c80-afa5-4272-bcc6-e4f06f3e0580", "modelid": "0e8d6081-0842-4623-b894-614ba7c7c159", "elementid": "18757674-f241-4a4e-beee-01b189af74c6"}];
          
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