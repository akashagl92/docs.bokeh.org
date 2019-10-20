
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
  };var element = document.getElementById("0a05ad88-1df8-42b3-8ed8-3eed867b9b98");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0a05ad88-1df8-42b3-8ed8-3eed867b9b98' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"26e19d43-6aee-4b00-881a-49d6898f858a": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTicker", "id": "661bf315-7c68-4460-8387-ad194d757281", "attributes": {}}, {"type": "BoxAnnotation", "id": "186525e2-0a4c-49d3-bfcf-6ec383b15266", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Grid", "id": "304ab9a9-1db4-4adb-b070-1bd83a08fe9f", "attributes": {"ticker": {"type": "BasicTicker", "id": "2b235546-1717-449e-8d9e-bb1f8104e491"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "dade0718-2a32-4116-aa7b-ae391e29a554"}}}, {"type": "PanTool", "id": "84350e0f-6e2d-483c-96b2-c97097355d73", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "dade0718-2a32-4116-aa7b-ae391e29a554"}}}, {"type": "GlyphRenderer", "id": "a2b4a82a-899f-4bd5-9a13-ab03a7d91e3d", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "011e85ad-836a-43e3-b1bd-ff3ffe861682"}, "nonselection_glyph": {"type": "Annulus", "id": "f1d24e2b-2683-4ad1-ba54-f2f1924da656"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Annulus", "id": "b396094f-4a1b-4544-8a8d-5b17e4e7620a"}}}, {"type": "PreviewSaveTool", "id": "18921a66-6bdf-4605-8c69-52e716194c94", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "dade0718-2a32-4116-aa7b-ae391e29a554"}}}, {"type": "Annulus", "id": "b396094f-4a1b-4544-8a8d-5b17e4e7620a", "attributes": {"line_color": {"value": "orange"}, "outer_radius": {"value": 0.25, "units": "data"}, "y": {"field": "y"}, "x": {"field": "x"}, "fill_alpha": {"value": 0.6}, "line_alpha": {"value": 0.6}, "fill_color": {"value": "orange"}, "inner_radius": {"value": 0.1, "units": "data"}}}, {"type": "LinearAxis", "id": "9ebab5b2-242e-46bb-9846-73b014a5e69d", "attributes": {"ticker": {"type": "BasicTicker", "id": "2b235546-1717-449e-8d9e-bb1f8104e491"}, "formatter": {"type": "BasicTickFormatter", "id": "1e924cee-ffa1-4c17-b929-af05c4f50a6b"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "dade0718-2a32-4116-aa7b-ae391e29a554"}}}, {"type": "LinearAxis", "id": "49c78b5c-1d68-4e9e-8d31-9b3ebe795eda", "attributes": {"ticker": {"type": "BasicTicker", "id": "661bf315-7c68-4460-8387-ad194d757281"}, "formatter": {"type": "BasicTickFormatter", "id": "d7fb27f8-1520-44b5-bed6-2c6d7c23723a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "dade0718-2a32-4116-aa7b-ae391e29a554"}}}, {"type": "WheelZoomTool", "id": "28c1c9c0-23e7-4d83-846c-31c4f3a4d649", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "dade0718-2a32-4116-aa7b-ae391e29a554"}}}, {"type": "BasicTicker", "id": "2b235546-1717-449e-8d9e-bb1f8104e491", "attributes": {}}, {"type": "BasicTickFormatter", "id": "1e924cee-ffa1-4c17-b929-af05c4f50a6b", "attributes": {}}, {"type": "Grid", "id": "55f44c85-edd5-450a-a089-20324756ad28", "attributes": {"ticker": {"type": "BasicTicker", "id": "661bf315-7c68-4460-8387-ad194d757281"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "dade0718-2a32-4116-aa7b-ae391e29a554"}}}, {"type": "BasicTickFormatter", "id": "d7fb27f8-1520-44b5-bed6-2c6d7c23723a", "attributes": {}}, {"type": "HelpTool", "id": "919f53ac-05e7-4310-aaa7-e9dc8a700948", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "dade0718-2a32-4116-aa7b-ae391e29a554"}}}, {"type": "ResizeTool", "id": "90e70a24-c9b9-4c81-bb42-00d7e67b5a96", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "dade0718-2a32-4116-aa7b-ae391e29a554"}}}, {"type": "BoxZoomTool", "id": "38101313-8967-44ee-952c-d86bfd3c154d", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "186525e2-0a4c-49d3-bfcf-6ec383b15266"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "dade0718-2a32-4116-aa7b-ae391e29a554"}}}, {"type": "ResetTool", "id": "9cfe62d6-f2e0-42d5-9314-7a5ede210fc5", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "dade0718-2a32-4116-aa7b-ae391e29a554"}}}, {"type": "ToolEvents", "id": "fe00504c-87c0-4b2f-bff6-8d375357831d", "attributes": {}}, {"type": "ColumnDataSource", "id": "011e85ad-836a-43e3-b1bd-ff3ffe861682", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["y", "x"], "callback": null}}, {"type": "DataRange1d", "id": "35777812-ad3f-49e3-9922-091d175b24b1", "attributes": {"callback": null}}, {"type": "DataRange1d", "id": "0d338c68-fa45-4668-b28c-921a60aa97f7", "attributes": {"callback": null}}, {"type": "Plot", "id": "dade0718-2a32-4116-aa7b-ae391e29a554", "attributes": {"tools": [{"type": "PanTool", "id": "84350e0f-6e2d-483c-96b2-c97097355d73"}, {"type": "WheelZoomTool", "id": "28c1c9c0-23e7-4d83-846c-31c4f3a4d649"}, {"type": "BoxZoomTool", "id": "38101313-8967-44ee-952c-d86bfd3c154d"}, {"type": "PreviewSaveTool", "id": "18921a66-6bdf-4605-8c69-52e716194c94"}, {"type": "ResizeTool", "id": "90e70a24-c9b9-4c81-bb42-00d7e67b5a96"}, {"type": "ResetTool", "id": "9cfe62d6-f2e0-42d5-9314-7a5ede210fc5"}, {"type": "HelpTool", "id": "919f53ac-05e7-4310-aaa7-e9dc8a700948"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "0d338c68-fa45-4668-b28c-921a60aa97f7"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "9ebab5b2-242e-46bb-9846-73b014a5e69d"}, {"type": "Grid", "id": "304ab9a9-1db4-4adb-b070-1bd83a08fe9f"}, {"type": "LinearAxis", "id": "49c78b5c-1d68-4e9e-8d31-9b3ebe795eda"}, {"type": "Grid", "id": "55f44c85-edd5-450a-a089-20324756ad28"}, {"type": "BoxAnnotation", "id": "186525e2-0a4c-49d3-bfcf-6ec383b15266"}, {"type": "GlyphRenderer", "id": "a2b4a82a-899f-4bd5-9a13-ab03a7d91e3d"}], "left": [{"type": "LinearAxis", "id": "49c78b5c-1d68-4e9e-8d31-9b3ebe795eda"}], "below": [{"type": "LinearAxis", "id": "9ebab5b2-242e-46bb-9846-73b014a5e69d"}], "tool_events": {"type": "ToolEvents", "id": "fe00504c-87c0-4b2f-bff6-8d375357831d"}, "x_range": {"type": "DataRange1d", "id": "35777812-ad3f-49e3-9922-091d175b24b1"}}, "subtype": "Figure"}, {"type": "Annulus", "id": "f1d24e2b-2683-4ad1-ba54-f2f1924da656", "attributes": {"line_color": {"value": "#1f77b4"}, "outer_radius": {"value": 0.25, "units": "data"}, "y": {"field": "y"}, "x": {"field": "x"}, "fill_alpha": {"value": 0.1}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "inner_radius": {"value": 0.1, "units": "data"}}}], "root_ids": ["dade0718-2a32-4116-aa7b-ae391e29a554"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "26e19d43-6aee-4b00-881a-49d6898f858a", "modelid": "dade0718-2a32-4116-aa7b-ae391e29a554", "elementid": "0a05ad88-1df8-42b3-8ed8-3eed867b9b98"}];
          
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