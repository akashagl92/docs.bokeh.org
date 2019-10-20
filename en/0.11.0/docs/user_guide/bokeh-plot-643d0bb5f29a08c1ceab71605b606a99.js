
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
  };var element = document.getElementById("f2166e84-e6ef-4ff2-bd98-dbf836edd063");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f2166e84-e6ef-4ff2-bd98-dbf836edd063' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"6270b11e-e5e2-41bd-b139-6e856da7713c": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ColumnDataSource", "id": "9ffe7b6c-3a59-47e3-b1b2-3a9ce18ebe70", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "BasicTickFormatter", "id": "1b90c9c1-00a8-438f-bc89-fdf680f79410", "attributes": {}}, {"type": "LinearAxis", "id": "a8922721-60e3-4342-b680-f1db0006826f", "attributes": {"ticker": {"type": "BasicTicker", "id": "75004341-cef8-45e3-bef9-fdea1e150f23"}, "major_tick_line_color": {"value": "firebrick"}, "major_tick_out": 10, "plot": {"type": "Plot", "subtype": "Figure", "id": "1f4f7b2d-4f6a-404c-a014-9a5645911b2a"}, "minor_tick_in": -3, "minor_tick_line_color": {"value": "orange"}, "major_tick_line_width": {"value": 3}, "formatter": {"type": "BasicTickFormatter", "id": "7291dc8a-8938-4896-a0d2-32ed76196995"}, "minor_tick_out": 8}}, {"type": "ToolEvents", "id": "0fae47af-2521-4421-b8a4-657283108b60", "attributes": {}}, {"type": "ResizeTool", "id": "2a051804-ea9d-4fda-b46e-9445fe218f7a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1f4f7b2d-4f6a-404c-a014-9a5645911b2a"}}}, {"type": "HelpTool", "id": "3cb064c3-0c10-41a6-a7c2-9da65b73bd3c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1f4f7b2d-4f6a-404c-a014-9a5645911b2a"}}}, {"type": "BoxZoomTool", "id": "af503655-075d-44aa-9b19-44c46637517e", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "61993306-3da8-41dc-9f41-72706edad84a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1f4f7b2d-4f6a-404c-a014-9a5645911b2a"}}}, {"type": "Circle", "id": "b6f87fbb-6e5c-4398-9aa9-c074a2ea62e5", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "Grid", "id": "84cb8b5a-7434-4dab-90b7-7cbcd4a98d49", "attributes": {"ticker": {"type": "BasicTicker", "id": "75004341-cef8-45e3-bef9-fdea1e150f23"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1f4f7b2d-4f6a-404c-a014-9a5645911b2a"}}}, {"type": "BoxAnnotation", "id": "61993306-3da8-41dc-9f41-72706edad84a", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ResetTool", "id": "05b83584-4a26-475d-9fa3-e6413197f208", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1f4f7b2d-4f6a-404c-a014-9a5645911b2a"}}}, {"type": "BasicTickFormatter", "id": "7291dc8a-8938-4896-a0d2-32ed76196995", "attributes": {}}, {"type": "LinearAxis", "id": "bfc56e2b-c642-441d-b506-b726cae08517", "attributes": {"ticker": {"type": "BasicTicker", "id": "d53776ca-c281-4c8b-943d-87aad9bf686e"}, "major_tick_out": 10, "minor_tick_in": -3, "minor_tick_line_color": {"value": null}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1f4f7b2d-4f6a-404c-a014-9a5645911b2a"}, "formatter": {"type": "BasicTickFormatter", "id": "1b90c9c1-00a8-438f-bc89-fdf680f79410"}, "minor_tick_out": 8}}, {"type": "DataRange1d", "id": "d4727d9c-e22d-4677-bab2-538bd156bcf9", "attributes": {"callback": null}}, {"type": "Circle", "id": "8c5deb55-dc98-4366-9f07-3b3318b3b763", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "DataRange1d", "id": "ba2d4fb6-90e2-4d8f-b200-2d1bd1dbf541", "attributes": {"callback": null}}, {"type": "PanTool", "id": "c4f9dcd9-0037-434a-a260-b563137de23d", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1f4f7b2d-4f6a-404c-a014-9a5645911b2a"}}}, {"type": "GlyphRenderer", "id": "f59d218d-ae1a-4a72-9f2b-41c360d9c20e", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "9ffe7b6c-3a59-47e3-b1b2-3a9ce18ebe70"}, "nonselection_glyph": {"type": "Circle", "id": "b6f87fbb-6e5c-4398-9aa9-c074a2ea62e5"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "8c5deb55-dc98-4366-9f07-3b3318b3b763"}}}, {"type": "BasicTicker", "id": "d53776ca-c281-4c8b-943d-87aad9bf686e", "attributes": {}}, {"type": "WheelZoomTool", "id": "7e30db4f-1e25-4b1b-ac85-92988723f21c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1f4f7b2d-4f6a-404c-a014-9a5645911b2a"}}}, {"type": "PreviewSaveTool", "id": "e2a81218-a905-465b-bb6f-80f4230d10e5", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1f4f7b2d-4f6a-404c-a014-9a5645911b2a"}}}, {"type": "Grid", "id": "098d4606-8830-49c7-af39-bb66b7c15a6b", "attributes": {"ticker": {"type": "BasicTicker", "id": "d53776ca-c281-4c8b-943d-87aad9bf686e"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "1f4f7b2d-4f6a-404c-a014-9a5645911b2a"}}}, {"type": "Plot", "id": "1f4f7b2d-4f6a-404c-a014-9a5645911b2a", "attributes": {"tools": [{"type": "PanTool", "id": "c4f9dcd9-0037-434a-a260-b563137de23d"}, {"type": "WheelZoomTool", "id": "7e30db4f-1e25-4b1b-ac85-92988723f21c"}, {"type": "BoxZoomTool", "id": "af503655-075d-44aa-9b19-44c46637517e"}, {"type": "PreviewSaveTool", "id": "e2a81218-a905-465b-bb6f-80f4230d10e5"}, {"type": "ResizeTool", "id": "2a051804-ea9d-4fda-b46e-9445fe218f7a"}, {"type": "ResetTool", "id": "05b83584-4a26-475d-9fa3-e6413197f208"}, {"type": "HelpTool", "id": "3cb064c3-0c10-41a6-a7c2-9da65b73bd3c"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "d4727d9c-e22d-4677-bab2-538bd156bcf9"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "a8922721-60e3-4342-b680-f1db0006826f"}, {"type": "Grid", "id": "84cb8b5a-7434-4dab-90b7-7cbcd4a98d49"}, {"type": "LinearAxis", "id": "bfc56e2b-c642-441d-b506-b726cae08517"}, {"type": "Grid", "id": "098d4606-8830-49c7-af39-bb66b7c15a6b"}, {"type": "BoxAnnotation", "id": "61993306-3da8-41dc-9f41-72706edad84a"}, {"type": "GlyphRenderer", "id": "f59d218d-ae1a-4a72-9f2b-41c360d9c20e"}], "left": [{"type": "LinearAxis", "id": "bfc56e2b-c642-441d-b506-b726cae08517"}], "below": [{"type": "LinearAxis", "id": "a8922721-60e3-4342-b680-f1db0006826f"}], "tool_events": {"type": "ToolEvents", "id": "0fae47af-2521-4421-b8a4-657283108b60"}, "x_range": {"type": "DataRange1d", "id": "ba2d4fb6-90e2-4d8f-b200-2d1bd1dbf541"}}, "subtype": "Figure"}, {"type": "BasicTicker", "id": "75004341-cef8-45e3-bef9-fdea1e150f23", "attributes": {}}], "root_ids": ["1f4f7b2d-4f6a-404c-a014-9a5645911b2a"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "6270b11e-e5e2-41bd-b139-6e856da7713c", "modelid": "1f4f7b2d-4f6a-404c-a014-9a5645911b2a", "elementid": "f2166e84-e6ef-4ff2-bd98-dbf836edd063"}];
          
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