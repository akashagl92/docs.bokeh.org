
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
  };var element = document.getElementById("05bea372-685a-4fde-9e50-71c28aa3bd31");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '05bea372-685a-4fde-9e50-71c28aa3bd31' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"86ac949f-5a85-4a7a-9611-97b88a8a13dc": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTicker", "id": "600f1509-67ee-49bd-958b-333c541f7364", "attributes": {}}, {"type": "Grid", "id": "d857fb72-a77b-406f-ae6b-908997a29b4d", "attributes": {"ticker": {"type": "BasicTicker", "id": "600f1509-67ee-49bd-958b-333c541f7364"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "3dc7ac6f-7f04-4c12-b788-f9c0dcb81c27"}}}, {"type": "Circle", "id": "68a74dab-43ad-43c3-be11-87ad8100f7ad", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 8, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "GlyphRenderer", "id": "666f6782-5e94-44c3-9098-9dd845b88581", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "c3405d40-08eb-4efd-b0fc-003ec609ab45"}, "nonselection_glyph": {"type": "Circle", "id": "68a74dab-43ad-43c3-be11-87ad8100f7ad"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "ea5f6b29-699d-468f-bdba-d0f33ba4e1b5"}}}, {"type": "Grid", "id": "02f5ec46-f4f2-4119-a630-07ac43beff2b", "attributes": {"ticker": {"type": "BasicTicker", "id": "5c112519-7f2f-4cf6-965d-28dbcf88ebb3"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "3dc7ac6f-7f04-4c12-b788-f9c0dcb81c27"}}}, {"type": "BoxAnnotation", "id": "ecc0d17a-3143-499a-a9d8-3df8574e77ad", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Line", "id": "1f2c661b-4b59-45d3-8bfa-ff2747b3e93a", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "x": {"field": "x"}, "y": {"field": "y"}}}, {"type": "Circle", "id": "ea5f6b29-699d-468f-bdba-d0f33ba4e1b5", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 8, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "white"}}}, {"type": "ResetTool", "id": "5add0cb5-9041-436b-bc37-49b65a687b84", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3dc7ac6f-7f04-4c12-b788-f9c0dcb81c27"}}}, {"type": "DataRange1d", "id": "f07fb346-e0f5-4de4-8846-e14a833f635c", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "902d05a9-638f-4956-99f1-feb3ffd597fd", "attributes": {"ticker": {"type": "BasicTicker", "id": "600f1509-67ee-49bd-958b-333c541f7364"}, "formatter": {"type": "BasicTickFormatter", "id": "48608ee0-0bef-435c-89e1-f90fc44a3586"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "3dc7ac6f-7f04-4c12-b788-f9c0dcb81c27"}}}, {"type": "PanTool", "id": "6fce2ac3-26bf-4175-91e2-8fefdf521ba7", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3dc7ac6f-7f04-4c12-b788-f9c0dcb81c27"}}}, {"type": "GlyphRenderer", "id": "5f538ef4-136e-4503-8bf4-a157dd048aed", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "fdb1f7c4-06d9-4ebe-a30b-2c2f9b1eaa69"}, "nonselection_glyph": {"type": "Line", "id": "9e81dfff-8a7b-462c-9cf6-1b9e3f4383b7"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "1f2c661b-4b59-45d3-8bfa-ff2747b3e93a"}}}, {"type": "ColumnDataSource", "id": "fdb1f7c4-06d9-4ebe-a30b-2c2f9b1eaa69", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [6, 7, 8, 7, 3]}, "column_names": ["x", "y"], "callback": null}}, {"type": "ResizeTool", "id": "3841c04d-62c8-416c-8713-88a9192c8b80", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3dc7ac6f-7f04-4c12-b788-f9c0dcb81c27"}}}, {"type": "Plot", "id": "3dc7ac6f-7f04-4c12-b788-f9c0dcb81c27", "attributes": {"tools": [{"type": "PanTool", "id": "6fce2ac3-26bf-4175-91e2-8fefdf521ba7"}, {"type": "WheelZoomTool", "id": "4af2d52b-a6f1-4b18-95cb-0055b07d490c"}, {"type": "BoxZoomTool", "id": "5836065a-4db4-418b-90a9-2d1b3f447dc5"}, {"type": "PreviewSaveTool", "id": "c467b2fc-edfd-4e92-81a3-e40bf2aacadd"}, {"type": "ResizeTool", "id": "3841c04d-62c8-416c-8713-88a9192c8b80"}, {"type": "ResetTool", "id": "5add0cb5-9041-436b-bc37-49b65a687b84"}, {"type": "HelpTool", "id": "746be03a-070c-4321-b6fa-0d0e627c030f"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "a3e41b7f-5a4f-4cd8-88e7-bab3f23c3d1e"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "902d05a9-638f-4956-99f1-feb3ffd597fd"}, {"type": "Grid", "id": "d857fb72-a77b-406f-ae6b-908997a29b4d"}, {"type": "LinearAxis", "id": "00fe4ee2-1d72-4476-923a-91f52b6f64f0"}, {"type": "Grid", "id": "02f5ec46-f4f2-4119-a630-07ac43beff2b"}, {"type": "BoxAnnotation", "id": "ecc0d17a-3143-499a-a9d8-3df8574e77ad"}, {"type": "GlyphRenderer", "id": "5f538ef4-136e-4503-8bf4-a157dd048aed"}, {"type": "GlyphRenderer", "id": "666f6782-5e94-44c3-9098-9dd845b88581"}], "left": [{"type": "LinearAxis", "id": "00fe4ee2-1d72-4476-923a-91f52b6f64f0"}], "below": [{"type": "LinearAxis", "id": "902d05a9-638f-4956-99f1-feb3ffd597fd"}], "tool_events": {"type": "ToolEvents", "id": "b3651f8e-76f1-4366-a1a8-a6416414ef4d"}, "x_range": {"type": "DataRange1d", "id": "f07fb346-e0f5-4de4-8846-e14a833f635c"}}, "subtype": "Figure"}, {"type": "HelpTool", "id": "746be03a-070c-4321-b6fa-0d0e627c030f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3dc7ac6f-7f04-4c12-b788-f9c0dcb81c27"}}}, {"type": "BasicTicker", "id": "5c112519-7f2f-4cf6-965d-28dbcf88ebb3", "attributes": {}}, {"type": "WheelZoomTool", "id": "4af2d52b-a6f1-4b18-95cb-0055b07d490c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3dc7ac6f-7f04-4c12-b788-f9c0dcb81c27"}}}, {"type": "PreviewSaveTool", "id": "c467b2fc-edfd-4e92-81a3-e40bf2aacadd", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3dc7ac6f-7f04-4c12-b788-f9c0dcb81c27"}}}, {"type": "ColumnDataSource", "id": "c3405d40-08eb-4efd-b0fc-003ec609ab45", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [6, 7, 8, 7, 3]}, "column_names": ["x", "y"], "callback": null}}, {"type": "BasicTickFormatter", "id": "9dedb345-2927-41e3-a559-0e9ad28fe214", "attributes": {}}, {"type": "BoxZoomTool", "id": "5836065a-4db4-418b-90a9-2d1b3f447dc5", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "ecc0d17a-3143-499a-a9d8-3df8574e77ad"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "3dc7ac6f-7f04-4c12-b788-f9c0dcb81c27"}}}, {"type": "BasicTickFormatter", "id": "48608ee0-0bef-435c-89e1-f90fc44a3586", "attributes": {}}, {"type": "ToolEvents", "id": "b3651f8e-76f1-4366-a1a8-a6416414ef4d", "attributes": {}}, {"type": "DataRange1d", "id": "a3e41b7f-5a4f-4cd8-88e7-bab3f23c3d1e", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "00fe4ee2-1d72-4476-923a-91f52b6f64f0", "attributes": {"ticker": {"type": "BasicTicker", "id": "5c112519-7f2f-4cf6-965d-28dbcf88ebb3"}, "formatter": {"type": "BasicTickFormatter", "id": "9dedb345-2927-41e3-a559-0e9ad28fe214"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "3dc7ac6f-7f04-4c12-b788-f9c0dcb81c27"}}}, {"type": "Line", "id": "9e81dfff-8a7b-462c-9cf6-1b9e3f4383b7", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "y": {"field": "y"}}}], "root_ids": ["3dc7ac6f-7f04-4c12-b788-f9c0dcb81c27"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "86ac949f-5a85-4a7a-9611-97b88a8a13dc", "modelid": "3dc7ac6f-7f04-4c12-b788-f9c0dcb81c27", "elementid": "05bea372-685a-4fde-9e50-71c28aa3bd31"}];
          
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