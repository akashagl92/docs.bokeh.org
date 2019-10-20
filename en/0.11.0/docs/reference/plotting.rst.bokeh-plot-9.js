
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
  };var element = document.getElementById("49e3afc5-03c3-4a85-aead-6c999dfccbda");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '49e3afc5-03c3-4a85-aead-6c999dfccbda' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"93b15b9d-824f-4974-b0e3-03434f6f7580": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "DataRange1d", "id": "72e462f8-327e-4481-8c8d-460153c6586b", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "afc89eb1-ed90-4d57-b024-be72c61a763e", "attributes": {}}, {"type": "BasicTicker", "id": "be821e1d-54b1-45db-bee7-def439e2ad62", "attributes": {}}, {"type": "BasicTickFormatter", "id": "79db5eee-e324-4c53-871e-5561401c6a90", "attributes": {}}, {"type": "Line", "id": "4617c514-9a80-439e-81af-241b2815f417", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "y": {"field": "y"}}}, {"type": "GlyphRenderer", "id": "4600133b-9c3f-4225-a32c-b5365e64f13f", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "3352892b-1a70-47c5-8703-3a0f22e4b5f3"}, "nonselection_glyph": {"type": "Line", "id": "4617c514-9a80-439e-81af-241b2815f417"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "6358df8a-dbdc-4469-9ce9-76f5a263024f"}}}, {"type": "ResetTool", "id": "9b9a7864-2ae9-47d5-b355-10852b5ce436", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "78973b01-8673-46d9-b3f0-30dae32fb4e5"}}}, {"type": "LinearAxis", "id": "a760c0c5-e4c1-414e-87ca-139c7cfc2f00", "attributes": {"ticker": {"type": "BasicTicker", "id": "04e71032-da25-4771-9716-b848d3d6e45a"}, "formatter": {"type": "BasicTickFormatter", "id": "79db5eee-e324-4c53-871e-5561401c6a90"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "78973b01-8673-46d9-b3f0-30dae32fb4e5"}}}, {"type": "ResizeTool", "id": "dc3707d9-8b8d-4a79-8c89-0cc0b328028c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "78973b01-8673-46d9-b3f0-30dae32fb4e5"}}}, {"type": "ToolEvents", "id": "5af3df08-c463-4f11-aee8-324fbcc88a0c", "attributes": {}}, {"type": "LinearAxis", "id": "9ebda380-97e3-47f4-bf5f-24f784e88190", "attributes": {"ticker": {"type": "BasicTicker", "id": "be821e1d-54b1-45db-bee7-def439e2ad62"}, "formatter": {"type": "BasicTickFormatter", "id": "afc89eb1-ed90-4d57-b024-be72c61a763e"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "78973b01-8673-46d9-b3f0-30dae32fb4e5"}}}, {"type": "DataRange1d", "id": "10c34dd8-09b5-46d8-86dc-802e7b05b850", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "04e71032-da25-4771-9716-b848d3d6e45a", "attributes": {}}, {"type": "Plot", "id": "78973b01-8673-46d9-b3f0-30dae32fb4e5", "attributes": {"tools": [{"type": "PanTool", "id": "58817cc1-1994-46e0-9a8f-d896773b58cd"}, {"type": "WheelZoomTool", "id": "be2ef4b4-4431-4fc4-a77d-9fb915358920"}, {"type": "BoxZoomTool", "id": "d09fdf8e-4c8a-4a16-b0f0-bcb6ab296dff"}, {"type": "PreviewSaveTool", "id": "9770934b-12bd-46ec-b2dd-fd1dcd90221b"}, {"type": "ResizeTool", "id": "dc3707d9-8b8d-4a79-8c89-0cc0b328028c"}, {"type": "ResetTool", "id": "9b9a7864-2ae9-47d5-b355-10852b5ce436"}, {"type": "HelpTool", "id": "410f2300-73dd-432a-b581-20b82243fa38"}], "plot_width": 300, "x_range": {"type": "DataRange1d", "id": "72e462f8-327e-4481-8c8d-460153c6586b"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "9ebda380-97e3-47f4-bf5f-24f784e88190"}, {"type": "Grid", "id": "d590dc8b-8aba-4801-baaf-f7032de903a5"}, {"type": "LinearAxis", "id": "a760c0c5-e4c1-414e-87ca-139c7cfc2f00"}, {"type": "Grid", "id": "ea48bc15-0920-46d1-8163-d68601486e75"}, {"type": "BoxAnnotation", "id": "aad66cfe-dc1f-46fd-afb3-9800a4c4966b"}, {"type": "GlyphRenderer", "id": "4600133b-9c3f-4225-a32c-b5365e64f13f"}], "y_range": {"type": "DataRange1d", "id": "10c34dd8-09b5-46d8-86dc-802e7b05b850"}, "left": [{"type": "LinearAxis", "id": "a760c0c5-e4c1-414e-87ca-139c7cfc2f00"}], "below": [{"type": "LinearAxis", "id": "9ebda380-97e3-47f4-bf5f-24f784e88190"}], "tool_events": {"type": "ToolEvents", "id": "5af3df08-c463-4f11-aee8-324fbcc88a0c"}, "title": "line"}, "subtype": "Figure"}, {"type": "Line", "id": "6358df8a-dbdc-4469-9ce9-76f5a263024f", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "y": {"field": "y"}}}, {"type": "Grid", "id": "d590dc8b-8aba-4801-baaf-f7032de903a5", "attributes": {"ticker": {"type": "BasicTicker", "id": "be821e1d-54b1-45db-bee7-def439e2ad62"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "78973b01-8673-46d9-b3f0-30dae32fb4e5"}}}, {"type": "WheelZoomTool", "id": "be2ef4b4-4431-4fc4-a77d-9fb915358920", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "78973b01-8673-46d9-b3f0-30dae32fb4e5"}}}, {"type": "PanTool", "id": "58817cc1-1994-46e0-9a8f-d896773b58cd", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "78973b01-8673-46d9-b3f0-30dae32fb4e5"}}}, {"type": "HelpTool", "id": "410f2300-73dd-432a-b581-20b82243fa38", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "78973b01-8673-46d9-b3f0-30dae32fb4e5"}}}, {"type": "BoxAnnotation", "id": "aad66cfe-dc1f-46fd-afb3-9800a4c4966b", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Grid", "id": "ea48bc15-0920-46d1-8163-d68601486e75", "attributes": {"ticker": {"type": "BasicTicker", "id": "04e71032-da25-4771-9716-b848d3d6e45a"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "78973b01-8673-46d9-b3f0-30dae32fb4e5"}}}, {"type": "PreviewSaveTool", "id": "9770934b-12bd-46ec-b2dd-fd1dcd90221b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "78973b01-8673-46d9-b3f0-30dae32fb4e5"}}}, {"type": "ColumnDataSource", "id": "3352892b-1a70-47c5-8703-3a0f22e4b5f3", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [6, 7, 2, 4, 5]}, "column_names": ["x", "y"], "callback": null}}, {"type": "BoxZoomTool", "id": "d09fdf8e-4c8a-4a16-b0f0-bcb6ab296dff", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "aad66cfe-dc1f-46fd-afb3-9800a4c4966b"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "78973b01-8673-46d9-b3f0-30dae32fb4e5"}}}], "root_ids": ["78973b01-8673-46d9-b3f0-30dae32fb4e5"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "93b15b9d-824f-4974-b0e3-03434f6f7580", "modelid": "78973b01-8673-46d9-b3f0-30dae32fb4e5", "elementid": "49e3afc5-03c3-4a85-aead-6c999dfccbda"}];
          
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