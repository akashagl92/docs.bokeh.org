
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
  };var element = document.getElementById("ede34127-3286-4c46-86f0-85c67c9a5b52");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ede34127-3286-4c46-86f0-85c67c9a5b52' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"9193205d-212a-47f2-b896-debee1e7e793": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "PanTool", "id": "890d8a3d-0ada-4fb8-9a16-7c66090144c7", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d4985116-4b8b-4efe-abfd-5d37a5fa75b8"}}}, {"type": "WheelZoomTool", "id": "175163ec-f860-4685-ac11-1eada58ccffc", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d4985116-4b8b-4efe-abfd-5d37a5fa75b8"}}}, {"type": "Grid", "id": "3baf0381-b94e-4921-b541-94a55fd34151", "attributes": {"ticker": {"type": "BasicTicker", "id": "886175f6-b58b-4ce5-9177-8d41d8299355"}, "bounds": [2, 4], "plot": {"type": "Plot", "subtype": "Figure", "id": "d4985116-4b8b-4efe-abfd-5d37a5fa75b8"}}}, {"type": "BasicTicker", "id": "b6dcc041-76d5-49d9-a15b-0b22139ab761", "attributes": {}}, {"type": "ResizeTool", "id": "fb861c3b-c8f2-411c-b31d-f42951a22d65", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d4985116-4b8b-4efe-abfd-5d37a5fa75b8"}}}, {"type": "LinearAxis", "id": "fa2f1adb-8668-4a95-8b2e-1e1ce49c1cfa", "attributes": {"ticker": {"type": "BasicTicker", "id": "886175f6-b58b-4ce5-9177-8d41d8299355"}, "formatter": {"type": "BasicTickFormatter", "id": "2ed5b8fa-cb91-47e3-a3e2-5e239dfc2895"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d4985116-4b8b-4efe-abfd-5d37a5fa75b8"}}}, {"type": "DataRange1d", "id": "4f2bb843-bb65-4517-a31f-88a8f62ec699", "attributes": {"callback": null}}, {"type": "Plot", "id": "d4985116-4b8b-4efe-abfd-5d37a5fa75b8", "attributes": {"tools": [{"type": "PanTool", "id": "890d8a3d-0ada-4fb8-9a16-7c66090144c7"}, {"type": "WheelZoomTool", "id": "175163ec-f860-4685-ac11-1eada58ccffc"}, {"type": "BoxZoomTool", "id": "c965a063-2f6d-4162-8296-fc4e717d1771"}, {"type": "PreviewSaveTool", "id": "ef9c644c-c17a-4c32-817d-7c7185237622"}, {"type": "ResizeTool", "id": "fb861c3b-c8f2-411c-b31d-f42951a22d65"}, {"type": "ResetTool", "id": "7cc4ef75-3514-4d80-b9b4-dc016cac1695"}, {"type": "HelpTool", "id": "9c6b9664-5b6c-436e-9125-e8bb7a45cb8a"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "4f2bb843-bb65-4517-a31f-88a8f62ec699"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "fa2f1adb-8668-4a95-8b2e-1e1ce49c1cfa"}, {"type": "Grid", "id": "3baf0381-b94e-4921-b541-94a55fd34151"}, {"type": "LinearAxis", "id": "2b209138-72af-48a2-9d65-dfcb2d7ae8e8"}, {"type": "Grid", "id": "57467939-2fe2-474e-bc61-00d6f300214f"}, {"type": "BoxAnnotation", "id": "685dcc97-7b35-41db-8526-2b7b476d7ff4"}, {"type": "GlyphRenderer", "id": "6cbfc687-b307-4cd0-b5b3-8ec0d18e042e"}], "left": [{"type": "LinearAxis", "id": "2b209138-72af-48a2-9d65-dfcb2d7ae8e8"}], "below": [{"type": "LinearAxis", "id": "fa2f1adb-8668-4a95-8b2e-1e1ce49c1cfa"}], "tool_events": {"type": "ToolEvents", "id": "cdc84ba1-15da-4dfc-a56c-09ee9113cbad"}, "x_range": {"type": "DataRange1d", "id": "d96b7552-cd79-4a88-83dd-0c960e7aaf8f"}}, "subtype": "Figure"}, {"type": "GlyphRenderer", "id": "6cbfc687-b307-4cd0-b5b3-8ec0d18e042e", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "d8a40367-9f84-4705-8f1e-cf4119d34844"}, "nonselection_glyph": {"type": "Circle", "id": "54c25614-d059-4321-9160-882feab19173"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "ef2bdb15-1baa-4c72-a8c3-d2f132d845cc"}}}, {"type": "LinearAxis", "id": "2b209138-72af-48a2-9d65-dfcb2d7ae8e8", "attributes": {"ticker": {"type": "BasicTicker", "id": "b6dcc041-76d5-49d9-a15b-0b22139ab761"}, "formatter": {"type": "BasicTickFormatter", "id": "c20aada2-4132-4187-8ab1-45855ad1e883"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d4985116-4b8b-4efe-abfd-5d37a5fa75b8"}}}, {"type": "ToolEvents", "id": "cdc84ba1-15da-4dfc-a56c-09ee9113cbad", "attributes": {}}, {"type": "Circle", "id": "54c25614-d059-4321-9160-882feab19173", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "BoxAnnotation", "id": "685dcc97-7b35-41db-8526-2b7b476d7ff4", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "HelpTool", "id": "9c6b9664-5b6c-436e-9125-e8bb7a45cb8a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d4985116-4b8b-4efe-abfd-5d37a5fa75b8"}}}, {"type": "Circle", "id": "ef2bdb15-1baa-4c72-a8c3-d2f132d845cc", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "BasicTickFormatter", "id": "2ed5b8fa-cb91-47e3-a3e2-5e239dfc2895", "attributes": {}}, {"type": "PreviewSaveTool", "id": "ef9c644c-c17a-4c32-817d-7c7185237622", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d4985116-4b8b-4efe-abfd-5d37a5fa75b8"}}}, {"type": "BoxZoomTool", "id": "c965a063-2f6d-4162-8296-fc4e717d1771", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "685dcc97-7b35-41db-8526-2b7b476d7ff4"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d4985116-4b8b-4efe-abfd-5d37a5fa75b8"}}}, {"type": "BasicTickFormatter", "id": "c20aada2-4132-4187-8ab1-45855ad1e883", "attributes": {}}, {"type": "ResetTool", "id": "7cc4ef75-3514-4d80-b9b4-dc016cac1695", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d4985116-4b8b-4efe-abfd-5d37a5fa75b8"}}}, {"type": "ColumnDataSource", "id": "d8a40367-9f84-4705-8f1e-cf4119d34844", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "DataRange1d", "id": "d96b7552-cd79-4a88-83dd-0c960e7aaf8f", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "886175f6-b58b-4ce5-9177-8d41d8299355", "attributes": {}}, {"type": "Grid", "id": "57467939-2fe2-474e-bc61-00d6f300214f", "attributes": {"ticker": {"type": "BasicTicker", "id": "b6dcc041-76d5-49d9-a15b-0b22139ab761"}, "dimension": 1, "bounds": [2, 4], "plot": {"type": "Plot", "subtype": "Figure", "id": "d4985116-4b8b-4efe-abfd-5d37a5fa75b8"}}}], "root_ids": ["d4985116-4b8b-4efe-abfd-5d37a5fa75b8"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "9193205d-212a-47f2-b896-debee1e7e793", "modelid": "d4985116-4b8b-4efe-abfd-5d37a5fa75b8", "elementid": "ede34127-3286-4c46-86f0-85c67c9a5b52"}];
          
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