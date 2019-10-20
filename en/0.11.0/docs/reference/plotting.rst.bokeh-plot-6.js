
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
  };var element = document.getElementById("67bff602-991d-4b16-bfd8-4c106300a5ee");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '67bff602-991d-4b16-bfd8-4c106300a5ee' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"0db38d63-6d10-46ca-be5f-a34644a04757": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ToolEvents", "id": "09e31a7e-26f7-41d7-86b0-ab486b3bba82", "attributes": {}}, {"type": "DataRange1d", "id": "19929fd1-e430-4558-9b6e-f2f564edba6d", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "5b7d0f8c-6d4c-4437-b45d-a4001939fb5d", "attributes": {"ticker": {"type": "BasicTicker", "id": "3384f690-b4dd-4850-a26c-62f5ec3f351d"}, "formatter": {"type": "BasicTickFormatter", "id": "c21f850c-fac9-4553-93e4-f8f589918a6c"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "11dde8e2-d8ef-4dc2-9c45-4e5b17b51079"}}}, {"type": "Diamond", "id": "6df6814b-85dc-4f1f-afc5-2a81ff2614c1", "attributes": {"line_color": {"value": "#1C9099"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "fill_color": {"value": "#1C9099"}}}, {"type": "LinearAxis", "id": "5f6a58f6-7eb1-4e8a-83c6-6f5a65c586b8", "attributes": {"ticker": {"type": "BasicTicker", "id": "9ba1a3a4-549c-4502-8ae9-24882f933f84"}, "formatter": {"type": "BasicTickFormatter", "id": "558a4f9c-ef7b-4022-b689-08fddc3da8cd"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "11dde8e2-d8ef-4dc2-9c45-4e5b17b51079"}}}, {"type": "BasicTickFormatter", "id": "c21f850c-fac9-4553-93e4-f8f589918a6c", "attributes": {}}, {"type": "GlyphRenderer", "id": "9deedcb1-ff70-4162-8892-6c18c3249382", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "1ec0efdd-78de-446d-a823-dbb80ef960cb"}, "nonselection_glyph": {"type": "Diamond", "id": "3ad795cc-b624-497e-8ea3-926e5a15cd1f"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Diamond", "id": "6df6814b-85dc-4f1f-afc5-2a81ff2614c1"}}}, {"type": "PanTool", "id": "7a83d1a0-3dba-4dcb-8ff5-7db0212a90dc", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "11dde8e2-d8ef-4dc2-9c45-4e5b17b51079"}}}, {"type": "BasicTicker", "id": "9ba1a3a4-549c-4502-8ae9-24882f933f84", "attributes": {}}, {"type": "Grid", "id": "11e75ef1-b434-47e4-9a9a-3f47f248259f", "attributes": {"ticker": {"type": "BasicTicker", "id": "3384f690-b4dd-4850-a26c-62f5ec3f351d"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "11dde8e2-d8ef-4dc2-9c45-4e5b17b51079"}}}, {"type": "Grid", "id": "acc21514-2244-4b11-b6fc-62812a28cc8c", "attributes": {"ticker": {"type": "BasicTicker", "id": "9ba1a3a4-549c-4502-8ae9-24882f933f84"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "11dde8e2-d8ef-4dc2-9c45-4e5b17b51079"}}}, {"type": "BoxZoomTool", "id": "fe33b347-b7c7-450e-9c1a-876a94bcb3be", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "02dcc11f-c5ea-4921-8f2c-05998c3559fe"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "11dde8e2-d8ef-4dc2-9c45-4e5b17b51079"}}}, {"type": "HelpTool", "id": "94f99e84-2988-40a0-9c81-4f8552e62862", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "11dde8e2-d8ef-4dc2-9c45-4e5b17b51079"}}}, {"type": "Diamond", "id": "3ad795cc-b624-497e-8ea3-926e5a15cd1f", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "WheelZoomTool", "id": "0e2f8c5f-e0c9-4ae9-a7d1-04631858ea6c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "11dde8e2-d8ef-4dc2-9c45-4e5b17b51079"}}}, {"type": "Plot", "id": "11dde8e2-d8ef-4dc2-9c45-4e5b17b51079", "attributes": {"tools": [{"type": "PanTool", "id": "7a83d1a0-3dba-4dcb-8ff5-7db0212a90dc"}, {"type": "WheelZoomTool", "id": "0e2f8c5f-e0c9-4ae9-a7d1-04631858ea6c"}, {"type": "BoxZoomTool", "id": "fe33b347-b7c7-450e-9c1a-876a94bcb3be"}, {"type": "PreviewSaveTool", "id": "e190aafe-82bd-4aed-b2fe-85f3487cc26e"}, {"type": "ResizeTool", "id": "4faedc70-8fd5-415c-9178-a3d25c3f3b50"}, {"type": "ResetTool", "id": "a1c4dcfd-487f-40ae-b578-e7a76c59bd5a"}, {"type": "HelpTool", "id": "94f99e84-2988-40a0-9c81-4f8552e62862"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "1d8148f7-f3cf-4aac-8a3b-98e05e751a90"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "5f6a58f6-7eb1-4e8a-83c6-6f5a65c586b8"}, {"type": "Grid", "id": "acc21514-2244-4b11-b6fc-62812a28cc8c"}, {"type": "LinearAxis", "id": "5b7d0f8c-6d4c-4437-b45d-a4001939fb5d"}, {"type": "Grid", "id": "11e75ef1-b434-47e4-9a9a-3f47f248259f"}, {"type": "BoxAnnotation", "id": "02dcc11f-c5ea-4921-8f2c-05998c3559fe"}, {"type": "GlyphRenderer", "id": "9deedcb1-ff70-4162-8892-6c18c3249382"}], "left": [{"type": "LinearAxis", "id": "5b7d0f8c-6d4c-4437-b45d-a4001939fb5d"}], "below": [{"type": "LinearAxis", "id": "5f6a58f6-7eb1-4e8a-83c6-6f5a65c586b8"}], "tool_events": {"type": "ToolEvents", "id": "09e31a7e-26f7-41d7-86b0-ab486b3bba82"}, "x_range": {"type": "DataRange1d", "id": "19929fd1-e430-4558-9b6e-f2f564edba6d"}}, "subtype": "Figure"}, {"type": "BasicTickFormatter", "id": "558a4f9c-ef7b-4022-b689-08fddc3da8cd", "attributes": {}}, {"type": "BasicTicker", "id": "3384f690-b4dd-4850-a26c-62f5ec3f351d", "attributes": {}}, {"type": "ResetTool", "id": "a1c4dcfd-487f-40ae-b578-e7a76c59bd5a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "11dde8e2-d8ef-4dc2-9c45-4e5b17b51079"}}}, {"type": "BoxAnnotation", "id": "02dcc11f-c5ea-4921-8f2c-05998c3559fe", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ColumnDataSource", "id": "1ec0efdd-78de-446d-a823-dbb80ef960cb", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["x", "y"], "callback": null}}, {"type": "PreviewSaveTool", "id": "e190aafe-82bd-4aed-b2fe-85f3487cc26e", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "11dde8e2-d8ef-4dc2-9c45-4e5b17b51079"}}}, {"type": "DataRange1d", "id": "1d8148f7-f3cf-4aac-8a3b-98e05e751a90", "attributes": {"callback": null}}, {"type": "ResizeTool", "id": "4faedc70-8fd5-415c-9178-a3d25c3f3b50", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "11dde8e2-d8ef-4dc2-9c45-4e5b17b51079"}}}], "root_ids": ["11dde8e2-d8ef-4dc2-9c45-4e5b17b51079"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "0db38d63-6d10-46ca-be5f-a34644a04757", "modelid": "11dde8e2-d8ef-4dc2-9c45-4e5b17b51079", "elementid": "67bff602-991d-4b16-bfd8-4c106300a5ee"}];
          
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