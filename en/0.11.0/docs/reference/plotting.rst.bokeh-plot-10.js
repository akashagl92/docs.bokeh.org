
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
  };var element = document.getElementById("b606a6dc-bf23-4719-b5f5-e4621d836ab0");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b606a6dc-bf23-4719-b5f5-e4621d836ab0' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"07c8f175-d89a-477e-b809-ddd6e494af8f": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Plot", "id": "c025e470-07a3-4639-a8dc-804a253a66d1", "attributes": {"tools": [{"type": "PanTool", "id": "1348be9d-df94-4076-af9c-b4aeff06b8f6"}, {"type": "WheelZoomTool", "id": "17f2edf1-5687-46c7-ae26-840070de0965"}, {"type": "BoxZoomTool", "id": "3c8636ad-80c0-4daa-a7d1-30925e04b4f3"}, {"type": "PreviewSaveTool", "id": "4a9e968e-8cfb-4603-8230-cfe8fdc76cce"}, {"type": "ResizeTool", "id": "cbc8a664-eec2-499f-98b4-bcf672757d56"}, {"type": "ResetTool", "id": "0bb6d195-80be-4da3-8ba3-8956c4f55841"}, {"type": "HelpTool", "id": "7991a27a-e28e-4d11-a1f7-bca366540006"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "eb092c79-fe45-4347-bbe6-4c57d5361687"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "5846b9d6-1ae9-48fd-81f7-98a3e22d180a"}, {"type": "Grid", "id": "d43fda42-90aa-4a0f-ade2-79a71b4f0077"}, {"type": "LinearAxis", "id": "b6481efe-f9ea-462b-95ae-7c8c9b1113ca"}, {"type": "Grid", "id": "fb154130-eaaa-4ec3-8c27-bb10569641e5"}, {"type": "BoxAnnotation", "id": "0948cc73-2b36-4aa0-a50e-dc40b6cf0368"}, {"type": "GlyphRenderer", "id": "e1412c0b-2a77-4482-b866-62eb32139fa6"}], "left": [{"type": "LinearAxis", "id": "b6481efe-f9ea-462b-95ae-7c8c9b1113ca"}], "below": [{"type": "LinearAxis", "id": "5846b9d6-1ae9-48fd-81f7-98a3e22d180a"}], "tool_events": {"type": "ToolEvents", "id": "20336e33-87ca-4003-9c64-e2988a048b58"}, "x_range": {"type": "DataRange1d", "id": "f460718b-8be5-4deb-bd5b-f14461a23452"}}, "subtype": "Figure"}, {"type": "BoxAnnotation", "id": "0948cc73-2b36-4aa0-a50e-dc40b6cf0368", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "21bd3ada-3551-4cca-ac83-e6c45cbd36c6", "attributes": {}}, {"type": "BasicTicker", "id": "0d7bb66f-9ec7-44b0-a64e-5af113e69b9a", "attributes": {}}, {"type": "Grid", "id": "d43fda42-90aa-4a0f-ade2-79a71b4f0077", "attributes": {"ticker": {"type": "BasicTicker", "id": "21bd3ada-3551-4cca-ac83-e6c45cbd36c6"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c025e470-07a3-4639-a8dc-804a253a66d1"}}}, {"type": "WheelZoomTool", "id": "17f2edf1-5687-46c7-ae26-840070de0965", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c025e470-07a3-4639-a8dc-804a253a66d1"}}}, {"type": "BoxZoomTool", "id": "3c8636ad-80c0-4daa-a7d1-30925e04b4f3", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "0948cc73-2b36-4aa0-a50e-dc40b6cf0368"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c025e470-07a3-4639-a8dc-804a253a66d1"}}}, {"type": "ColumnDataSource", "id": "256d6b5b-5218-4916-840e-c0a502adbd80", "attributes": {"data": {"line_color": ["red", "green"], "ys": [[6, 7, 2], [4, 5, 7]], "xs": [[1, 2, 3], [2, 3, 4]]}, "column_names": ["ys", "xs", "line_color"], "callback": null}}, {"type": "ToolEvents", "id": "20336e33-87ca-4003-9c64-e2988a048b58", "attributes": {}}, {"type": "DataRange1d", "id": "f460718b-8be5-4deb-bd5b-f14461a23452", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "5846b9d6-1ae9-48fd-81f7-98a3e22d180a", "attributes": {"ticker": {"type": "BasicTicker", "id": "21bd3ada-3551-4cca-ac83-e6c45cbd36c6"}, "formatter": {"type": "BasicTickFormatter", "id": "e8ee8016-2ade-4ff9-a9a9-db8a45b6a314"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c025e470-07a3-4639-a8dc-804a253a66d1"}}}, {"type": "PanTool", "id": "1348be9d-df94-4076-af9c-b4aeff06b8f6", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c025e470-07a3-4639-a8dc-804a253a66d1"}}}, {"type": "BasicTickFormatter", "id": "08b24684-8393-4571-bf26-46ebd9de77ea", "attributes": {}}, {"type": "BasicTickFormatter", "id": "e8ee8016-2ade-4ff9-a9a9-db8a45b6a314", "attributes": {}}, {"type": "HelpTool", "id": "7991a27a-e28e-4d11-a1f7-bca366540006", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c025e470-07a3-4639-a8dc-804a253a66d1"}}}, {"type": "MultiLine", "id": "1ca5a68d-9e49-45f0-bb85-1b421ca06b0b", "attributes": {"line_color": {"value": "#1f77b4"}, "ys": {"field": "ys"}, "line_alpha": {"value": 0.1}, "xs": {"field": "xs"}}}, {"type": "LinearAxis", "id": "b6481efe-f9ea-462b-95ae-7c8c9b1113ca", "attributes": {"ticker": {"type": "BasicTicker", "id": "0d7bb66f-9ec7-44b0-a64e-5af113e69b9a"}, "formatter": {"type": "BasicTickFormatter", "id": "08b24684-8393-4571-bf26-46ebd9de77ea"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c025e470-07a3-4639-a8dc-804a253a66d1"}}}, {"type": "Grid", "id": "fb154130-eaaa-4ec3-8c27-bb10569641e5", "attributes": {"ticker": {"type": "BasicTicker", "id": "0d7bb66f-9ec7-44b0-a64e-5af113e69b9a"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "c025e470-07a3-4639-a8dc-804a253a66d1"}}}, {"type": "DataRange1d", "id": "eb092c79-fe45-4347-bbe6-4c57d5361687", "attributes": {"callback": null}}, {"type": "PreviewSaveTool", "id": "4a9e968e-8cfb-4603-8230-cfe8fdc76cce", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c025e470-07a3-4639-a8dc-804a253a66d1"}}}, {"type": "GlyphRenderer", "id": "e1412c0b-2a77-4482-b866-62eb32139fa6", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "256d6b5b-5218-4916-840e-c0a502adbd80"}, "nonselection_glyph": {"type": "MultiLine", "id": "1ca5a68d-9e49-45f0-bb85-1b421ca06b0b"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "MultiLine", "id": "754aede1-1aa3-4abb-a96d-bc945e3022be"}}}, {"type": "ResizeTool", "id": "cbc8a664-eec2-499f-98b4-bcf672757d56", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c025e470-07a3-4639-a8dc-804a253a66d1"}}}, {"type": "ResetTool", "id": "0bb6d195-80be-4da3-8ba3-8956c4f55841", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c025e470-07a3-4639-a8dc-804a253a66d1"}}}, {"type": "MultiLine", "id": "754aede1-1aa3-4abb-a96d-bc945e3022be", "attributes": {"line_color": {"field": "line_color"}, "ys": {"field": "ys"}, "xs": {"field": "xs"}}}], "root_ids": ["c025e470-07a3-4639-a8dc-804a253a66d1"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "07c8f175-d89a-477e-b809-ddd6e494af8f", "modelid": "c025e470-07a3-4639-a8dc-804a253a66d1", "elementid": "b606a6dc-bf23-4719-b5f5-e4621d836ab0"}];
          
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