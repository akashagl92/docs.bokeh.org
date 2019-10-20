
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
  };var element = document.getElementById("ee5def64-bf46-4db8-9e54-e4036ff6d50c");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ee5def64-bf46-4db8-9e54-e4036ff6d50c' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"e2493932-1867-4c67-ad7c-3dc5d3ece894": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ResetTool", "id": "0156b873-043c-4286-89fb-bddf806cd7e5", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "abf851b9-ac45-433d-8d64-a70b768ac1d8"}}}, {"type": "PanTool", "id": "fa32a7ed-0b12-4ac1-bfce-453564c6c78b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "abf851b9-ac45-433d-8d64-a70b768ac1d8"}}}, {"type": "LinearAxis", "id": "58286dfd-a724-4631-a56f-f682d9ec49fd", "attributes": {"major_label_text_color": {"value": "orange"}, "major_label_orientation": "vertical", "minor_tick_in": -3, "ticker": {"type": "BasicTicker", "id": "eb5ba108-e057-40a2-babf-8700e3d54b46"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "abf851b9-ac45-433d-8d64-a70b768ac1d8"}, "formatter": {"type": "BasicTickFormatter", "id": "5701da61-51a4-492b-9a04-2ee73f5315b5"}, "axis_label": "Pressure", "minor_tick_out": 6}}, {"type": "Circle", "id": "2e77a82b-ee5c-4c1a-8890-9081f07628e0", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "BoxZoomTool", "id": "40994f31-6808-43ff-88c3-befc3265df91", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "14d74e31-ff3d-44e7-ae1b-370e60363bea"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "abf851b9-ac45-433d-8d64-a70b768ac1d8"}}}, {"type": "BasicTicker", "id": "9b0f6fb8-1476-41ce-91e4-d5d50fa306d8", "attributes": {}}, {"type": "Grid", "id": "3a7ed293-c944-4bf3-b03a-b7d6f5f7c5dc", "attributes": {"ticker": {"type": "BasicTicker", "id": "eb5ba108-e057-40a2-babf-8700e3d54b46"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "abf851b9-ac45-433d-8d64-a70b768ac1d8"}}}, {"type": "BasicTickFormatter", "id": "5701da61-51a4-492b-9a04-2ee73f5315b5", "attributes": {}}, {"type": "GlyphRenderer", "id": "8eb4984b-3bf0-4928-b91c-dec3525f7830", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "b0bcacce-1807-4835-888f-5738c8bc7161"}, "nonselection_glyph": {"type": "Circle", "id": "492bdcd4-731e-40d4-86a4-974136ca5129"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "2e77a82b-ee5c-4c1a-8890-9081f07628e0"}}}, {"type": "ColumnDataSource", "id": "b0bcacce-1807-4835-888f-5738c8bc7161", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "Plot", "id": "abf851b9-ac45-433d-8d64-a70b768ac1d8", "attributes": {"tools": [{"type": "PanTool", "id": "fa32a7ed-0b12-4ac1-bfce-453564c6c78b"}, {"type": "WheelZoomTool", "id": "e93cb38f-2919-4097-91d1-6b57efe841be"}, {"type": "BoxZoomTool", "id": "40994f31-6808-43ff-88c3-befc3265df91"}, {"type": "PreviewSaveTool", "id": "3d5b34ac-5e1c-40f4-9a13-b699bcfe8817"}, {"type": "ResizeTool", "id": "8d9bed1d-3ac7-434c-82e0-24a5f55e1b38"}, {"type": "ResetTool", "id": "0156b873-043c-4286-89fb-bddf806cd7e5"}, {"type": "HelpTool", "id": "ebeecfd6-ea1a-40b6-84c4-8a48ee83e0fe"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "3ba84906-cfc0-4be9-a567-bfae608dd7f5"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "6097f751-3d0a-4ed5-82bf-288d453ef0c1"}, {"type": "Grid", "id": "917274ab-629c-4309-ab4a-8c277bb33316"}, {"type": "LinearAxis", "id": "58286dfd-a724-4631-a56f-f682d9ec49fd"}, {"type": "Grid", "id": "3a7ed293-c944-4bf3-b03a-b7d6f5f7c5dc"}, {"type": "BoxAnnotation", "id": "14d74e31-ff3d-44e7-ae1b-370e60363bea"}, {"type": "GlyphRenderer", "id": "8eb4984b-3bf0-4928-b91c-dec3525f7830"}], "left": [{"type": "LinearAxis", "id": "58286dfd-a724-4631-a56f-f682d9ec49fd"}], "below": [{"type": "LinearAxis", "id": "6097f751-3d0a-4ed5-82bf-288d453ef0c1"}], "tool_events": {"type": "ToolEvents", "id": "e8d804e5-7642-4183-a69e-5126c27bed45"}, "x_range": {"type": "DataRange1d", "id": "60cc2a76-d803-4fe4-a05d-83284ff15375"}}, "subtype": "Figure"}, {"type": "Grid", "id": "917274ab-629c-4309-ab4a-8c277bb33316", "attributes": {"ticker": {"type": "BasicTicker", "id": "9b0f6fb8-1476-41ce-91e4-d5d50fa306d8"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "abf851b9-ac45-433d-8d64-a70b768ac1d8"}}}, {"type": "BasicTicker", "id": "eb5ba108-e057-40a2-babf-8700e3d54b46", "attributes": {}}, {"type": "LinearAxis", "id": "6097f751-3d0a-4ed5-82bf-288d453ef0c1", "attributes": {"axis_line_color": {"value": "red"}, "axis_label": "Temp", "minor_tick_in": -3, "ticker": {"type": "BasicTicker", "id": "9b0f6fb8-1476-41ce-91e4-d5d50fa306d8"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "abf851b9-ac45-433d-8d64-a70b768ac1d8"}, "formatter": {"type": "BasicTickFormatter", "id": "6f71013b-08ba-4973-a8df-9776ae80f8c3"}, "axis_line_width": {"value": 3}, "minor_tick_out": 6}}, {"type": "DataRange1d", "id": "3ba84906-cfc0-4be9-a567-bfae608dd7f5", "attributes": {"callback": null}}, {"type": "WheelZoomTool", "id": "e93cb38f-2919-4097-91d1-6b57efe841be", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "abf851b9-ac45-433d-8d64-a70b768ac1d8"}}}, {"type": "BasicTickFormatter", "id": "6f71013b-08ba-4973-a8df-9776ae80f8c3", "attributes": {}}, {"type": "ResizeTool", "id": "8d9bed1d-3ac7-434c-82e0-24a5f55e1b38", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "abf851b9-ac45-433d-8d64-a70b768ac1d8"}}}, {"type": "ToolEvents", "id": "e8d804e5-7642-4183-a69e-5126c27bed45", "attributes": {}}, {"type": "BoxAnnotation", "id": "14d74e31-ff3d-44e7-ae1b-370e60363bea", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "DataRange1d", "id": "60cc2a76-d803-4fe4-a05d-83284ff15375", "attributes": {"callback": null}}, {"type": "Circle", "id": "492bdcd4-731e-40d4-86a4-974136ca5129", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "HelpTool", "id": "ebeecfd6-ea1a-40b6-84c4-8a48ee83e0fe", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "abf851b9-ac45-433d-8d64-a70b768ac1d8"}}}, {"type": "PreviewSaveTool", "id": "3d5b34ac-5e1c-40f4-9a13-b699bcfe8817", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "abf851b9-ac45-433d-8d64-a70b768ac1d8"}}}], "root_ids": ["abf851b9-ac45-433d-8d64-a70b768ac1d8"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "e2493932-1867-4c67-ad7c-3dc5d3ece894", "modelid": "abf851b9-ac45-433d-8d64-a70b768ac1d8", "elementid": "ee5def64-bf46-4db8-9e54-e4036ff6d50c"}];
          
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