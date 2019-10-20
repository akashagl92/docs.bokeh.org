
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
  };var element = document.getElementById("6a04523e-bc6a-41dc-9b2b-2e9e4c8ce796");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6a04523e-bc6a-41dc-9b2b-2e9e4c8ce796' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"fdc5bb33-ddf7-4c8c-91ce-708bfc655c85": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "PreviewSaveTool", "id": "31bb1494-79a3-4961-8d3d-1cd168514b8b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "aa356bc1-04f2-46f7-9113-b6d72f4d7fc7"}}}, {"type": "DataRange1d", "id": "f73bbfb0-a4ab-4946-8df0-11a1f2574d03", "attributes": {"callback": null}}, {"type": "ResetTool", "id": "e9f70b54-c08f-480e-b861-a4aa34b09c1f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "aa356bc1-04f2-46f7-9113-b6d72f4d7fc7"}}}, {"type": "GlyphRenderer", "id": "11827a1c-ffc8-40d5-a4c1-cb07c32fcb45", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "185e8312-a4c0-47b7-b968-7a5ab10f0751"}, "nonselection_glyph": {"type": "Circle", "id": "933594ec-d627-4e94-94d1-320fbaa75efd"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "458b8d81-82ad-43ca-b1d1-0fe0f9d2dd64"}}}, {"type": "LinearAxis", "id": "4f6df49a-7859-4262-bd8a-ee0d724b3229", "attributes": {"ticker": {"type": "BasicTicker", "id": "d4d31240-ee0c-4ee9-9837-2d0e92983037"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "aa356bc1-04f2-46f7-9113-b6d72f4d7fc7"}, "bounds": [2, 4], "formatter": {"type": "BasicTickFormatter", "id": "8883e13a-8987-4b1c-9b73-b10cfc562600"}}}, {"type": "BasicTicker", "id": "e53f9dc9-93fa-4d8b-a01f-82625a995fcd", "attributes": {}}, {"type": "Circle", "id": "933594ec-d627-4e94-94d1-320fbaa75efd", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "BoxZoomTool", "id": "c3d17430-4d04-44e8-b597-dd445776685c", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "23be38db-318f-48a5-92e8-b70a87478851"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "aa356bc1-04f2-46f7-9113-b6d72f4d7fc7"}}}, {"type": "DataRange1d", "id": "67d676ab-d8ca-4166-92bc-0cd9550d143a", "attributes": {"callback": null}}, {"type": "WheelZoomTool", "id": "f0e80a62-1c5d-411c-bc32-379d4db6ad33", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "aa356bc1-04f2-46f7-9113-b6d72f4d7fc7"}}}, {"type": "BasicTickFormatter", "id": "7617dcf6-6b54-4d41-8610-5a7727cfc000", "attributes": {}}, {"type": "ResizeTool", "id": "fc525500-14e7-49c1-bc6b-900ca3f464b9", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "aa356bc1-04f2-46f7-9113-b6d72f4d7fc7"}}}, {"type": "BoxAnnotation", "id": "23be38db-318f-48a5-92e8-b70a87478851", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "HelpTool", "id": "888d8f81-77e4-41bd-b06c-8eb6dc87887c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "aa356bc1-04f2-46f7-9113-b6d72f4d7fc7"}}}, {"type": "Circle", "id": "458b8d81-82ad-43ca-b1d1-0fe0f9d2dd64", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "BasicTicker", "id": "d4d31240-ee0c-4ee9-9837-2d0e92983037", "attributes": {}}, {"type": "Grid", "id": "1354136c-9e73-4798-a562-b669b60f5342", "attributes": {"ticker": {"type": "BasicTicker", "id": "d4d31240-ee0c-4ee9-9837-2d0e92983037"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "aa356bc1-04f2-46f7-9113-b6d72f4d7fc7"}}}, {"type": "BasicTickFormatter", "id": "8883e13a-8987-4b1c-9b73-b10cfc562600", "attributes": {}}, {"type": "Plot", "id": "aa356bc1-04f2-46f7-9113-b6d72f4d7fc7", "attributes": {"tools": [{"type": "PanTool", "id": "efbebd42-8a1d-466f-819f-de89bfb6e753"}, {"type": "WheelZoomTool", "id": "f0e80a62-1c5d-411c-bc32-379d4db6ad33"}, {"type": "BoxZoomTool", "id": "c3d17430-4d04-44e8-b597-dd445776685c"}, {"type": "PreviewSaveTool", "id": "31bb1494-79a3-4961-8d3d-1cd168514b8b"}, {"type": "ResizeTool", "id": "fc525500-14e7-49c1-bc6b-900ca3f464b9"}, {"type": "ResetTool", "id": "e9f70b54-c08f-480e-b861-a4aa34b09c1f"}, {"type": "HelpTool", "id": "888d8f81-77e4-41bd-b06c-8eb6dc87887c"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "f73bbfb0-a4ab-4946-8df0-11a1f2574d03"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "4f6df49a-7859-4262-bd8a-ee0d724b3229"}, {"type": "Grid", "id": "1354136c-9e73-4798-a562-b669b60f5342"}, {"type": "LinearAxis", "id": "201d4c55-b6e1-49f4-badb-24c1864bd2a2"}, {"type": "Grid", "id": "93a69902-8ece-41e2-a6c2-6e557b0ce9aa"}, {"type": "BoxAnnotation", "id": "23be38db-318f-48a5-92e8-b70a87478851"}, {"type": "GlyphRenderer", "id": "11827a1c-ffc8-40d5-a4c1-cb07c32fcb45"}], "left": [{"type": "LinearAxis", "id": "201d4c55-b6e1-49f4-badb-24c1864bd2a2"}], "below": [{"type": "LinearAxis", "id": "4f6df49a-7859-4262-bd8a-ee0d724b3229"}], "tool_events": {"type": "ToolEvents", "id": "f05941af-d9ca-466b-bdc7-ccf410c44c40"}, "x_range": {"type": "DataRange1d", "id": "67d676ab-d8ca-4166-92bc-0cd9550d143a"}}, "subtype": "Figure"}, {"type": "LinearAxis", "id": "201d4c55-b6e1-49f4-badb-24c1864bd2a2", "attributes": {"ticker": {"type": "BasicTicker", "id": "e53f9dc9-93fa-4d8b-a01f-82625a995fcd"}, "formatter": {"type": "BasicTickFormatter", "id": "7617dcf6-6b54-4d41-8610-5a7727cfc000"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "aa356bc1-04f2-46f7-9113-b6d72f4d7fc7"}}}, {"type": "Grid", "id": "93a69902-8ece-41e2-a6c2-6e557b0ce9aa", "attributes": {"ticker": {"type": "BasicTicker", "id": "e53f9dc9-93fa-4d8b-a01f-82625a995fcd"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "aa356bc1-04f2-46f7-9113-b6d72f4d7fc7"}}}, {"type": "PanTool", "id": "efbebd42-8a1d-466f-819f-de89bfb6e753", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "aa356bc1-04f2-46f7-9113-b6d72f4d7fc7"}}}, {"type": "ColumnDataSource", "id": "185e8312-a4c0-47b7-b968-7a5ab10f0751", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "ToolEvents", "id": "f05941af-d9ca-466b-bdc7-ccf410c44c40", "attributes": {}}], "root_ids": ["aa356bc1-04f2-46f7-9113-b6d72f4d7fc7"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "fdc5bb33-ddf7-4c8c-91ce-708bfc655c85", "modelid": "aa356bc1-04f2-46f7-9113-b6d72f4d7fc7", "elementid": "6a04523e-bc6a-41dc-9b2b-2e9e4c8ce796"}];
          
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