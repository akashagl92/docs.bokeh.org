
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
  };var element = document.getElementById("958c00db-ceb3-4bc5-bd79-e12e11643edf");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '958c00db-ceb3-4bc5-bd79-e12e11643edf' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"f41bc4e7-643c-48a9-95eb-91833a501d8d": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ToolEvents", "id": "44dc8166-4f04-4241-8218-f16c1299a16c", "attributes": {}}, {"type": "Circle", "id": "03b7765e-b130-4141-8575-3e5f4f5623ac", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "Grid", "id": "854ed011-226e-4dca-b8e8-fdd63243328f", "attributes": {"ticker": {"type": "BasicTicker", "id": "d8272f38-c37a-4bc6-aa78-bcb96859ef6f"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "011dbd45-de39-4522-b801-f77882de2e02"}}}, {"type": "BasicTicker", "id": "dbddc88c-4502-42a9-aafd-c29648f95304", "attributes": {}}, {"type": "DataRange1d", "id": "3b9ed2c3-e0e6-444c-a8ef-a7989d834537", "attributes": {"callback": null}}, {"type": "PanTool", "id": "990fea8c-a908-409d-96b5-566a8ac2dd0a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "011dbd45-de39-4522-b801-f77882de2e02"}}}, {"type": "ResizeTool", "id": "4f4592c9-2dbf-462b-8379-8007d2e5b7e5", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "011dbd45-de39-4522-b801-f77882de2e02"}}}, {"type": "GlyphRenderer", "id": "74aca9f8-a165-44fb-bc71-6c1ca898bd04", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "b0794f66-a9a4-47a1-a9df-0f7e29a3d658"}, "nonselection_glyph": {"type": "Circle", "id": "03b7765e-b130-4141-8575-3e5f4f5623ac"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "7b0619e1-5bea-4d0a-94ce-a059450a792e"}}}, {"type": "BasicTickFormatter", "id": "56257ace-91ab-4615-b063-2b5f031c5cf8", "attributes": {}}, {"type": "LinearAxis", "id": "42f42767-e4c4-4737-bec0-e85bb78745e4", "attributes": {"ticker": {"type": "BasicTicker", "id": "d8272f38-c37a-4bc6-aa78-bcb96859ef6f"}, "formatter": {"type": "BasicTickFormatter", "id": "56257ace-91ab-4615-b063-2b5f031c5cf8"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "011dbd45-de39-4522-b801-f77882de2e02"}}}, {"type": "ResetTool", "id": "ce8aa5ad-4dcc-4afd-9cf4-f7387c52655a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "011dbd45-de39-4522-b801-f77882de2e02"}}}, {"type": "ColumnDataSource", "id": "b0794f66-a9a4-47a1-a9df-0f7e29a3d658", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "WheelZoomTool", "id": "51e8a6ac-6352-40e4-89ff-336b798d1106", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "011dbd45-de39-4522-b801-f77882de2e02"}}}, {"type": "BasicTickFormatter", "id": "365c881e-7186-4e4d-8cec-278e49f50261", "attributes": {}}, {"type": "BoxZoomTool", "id": "c315981f-4e00-458a-9482-db90d24845b0", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "367ad0f4-03ab-4407-a055-8765e5e698e9"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "011dbd45-de39-4522-b801-f77882de2e02"}}}, {"type": "BasicTicker", "id": "d8272f38-c37a-4bc6-aa78-bcb96859ef6f", "attributes": {}}, {"type": "PreviewSaveTool", "id": "88718870-bfea-4013-bf40-72946a4546d5", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "011dbd45-de39-4522-b801-f77882de2e02"}}}, {"type": "BoxAnnotation", "id": "367ad0f4-03ab-4407-a055-8765e5e698e9", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Plot", "id": "011dbd45-de39-4522-b801-f77882de2e02", "attributes": {"tools": [{"type": "PanTool", "id": "990fea8c-a908-409d-96b5-566a8ac2dd0a"}, {"type": "WheelZoomTool", "id": "51e8a6ac-6352-40e4-89ff-336b798d1106"}, {"type": "BoxZoomTool", "id": "c315981f-4e00-458a-9482-db90d24845b0"}, {"type": "PreviewSaveTool", "id": "88718870-bfea-4013-bf40-72946a4546d5"}, {"type": "ResizeTool", "id": "4f4592c9-2dbf-462b-8379-8007d2e5b7e5"}, {"type": "ResetTool", "id": "ce8aa5ad-4dcc-4afd-9cf4-f7387c52655a"}, {"type": "HelpTool", "id": "32f29651-960c-44f4-a8ad-c1cb79dbe37c"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "8ec4ebbf-11e7-4e11-a12d-4b90db749c17"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "42f42767-e4c4-4737-bec0-e85bb78745e4"}, {"type": "Grid", "id": "854ed011-226e-4dca-b8e8-fdd63243328f"}, {"type": "LinearAxis", "id": "92a66480-70ed-4c63-b7c3-d73711da5ef7"}, {"type": "Grid", "id": "8f7362d1-83b2-47b7-ab1c-3ecead7c54f5"}, {"type": "BoxAnnotation", "id": "367ad0f4-03ab-4407-a055-8765e5e698e9"}, {"type": "GlyphRenderer", "id": "74aca9f8-a165-44fb-bc71-6c1ca898bd04"}], "left": [{"type": "LinearAxis", "id": "92a66480-70ed-4c63-b7c3-d73711da5ef7"}], "below": [{"type": "LinearAxis", "id": "42f42767-e4c4-4737-bec0-e85bb78745e4"}], "tool_events": {"type": "ToolEvents", "id": "44dc8166-4f04-4241-8218-f16c1299a16c"}, "x_range": {"type": "DataRange1d", "id": "3b9ed2c3-e0e6-444c-a8ef-a7989d834537"}}, "subtype": "Figure"}, {"type": "Circle", "id": "7b0619e1-5bea-4d0a-94ce-a059450a792e", "attributes": {"line_color": {"value": "firebrick"}, "line_width": {"value": 2}, "line_dash": [6, 3], "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 60, "units": "screen"}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.2}}}, {"type": "HelpTool", "id": "32f29651-960c-44f4-a8ad-c1cb79dbe37c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "011dbd45-de39-4522-b801-f77882de2e02"}}}, {"type": "LinearAxis", "id": "92a66480-70ed-4c63-b7c3-d73711da5ef7", "attributes": {"ticker": {"type": "BasicTicker", "id": "dbddc88c-4502-42a9-aafd-c29648f95304"}, "formatter": {"type": "BasicTickFormatter", "id": "365c881e-7186-4e4d-8cec-278e49f50261"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "011dbd45-de39-4522-b801-f77882de2e02"}}}, {"type": "DataRange1d", "id": "8ec4ebbf-11e7-4e11-a12d-4b90db749c17", "attributes": {"callback": null}}, {"type": "Grid", "id": "8f7362d1-83b2-47b7-ab1c-3ecead7c54f5", "attributes": {"ticker": {"type": "BasicTicker", "id": "dbddc88c-4502-42a9-aafd-c29648f95304"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "011dbd45-de39-4522-b801-f77882de2e02"}}}], "root_ids": ["011dbd45-de39-4522-b801-f77882de2e02"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "f41bc4e7-643c-48a9-95eb-91833a501d8d", "modelid": "011dbd45-de39-4522-b801-f77882de2e02", "elementid": "958c00db-ceb3-4bc5-bd79-e12e11643edf"}];
          
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