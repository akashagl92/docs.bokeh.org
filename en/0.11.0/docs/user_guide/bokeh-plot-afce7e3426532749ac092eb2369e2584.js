
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
  };var element = document.getElementById("468a6460-6440-41ce-94dd-e685476f431d");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '468a6460-6440-41ce-94dd-e685476f431d' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"e8eef77e-db80-4da5-a0e3-a0e269bee557": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "DataRange1d", "id": "782c580f-3b13-46a4-b72b-8726afef734d", "attributes": {"callback": null}}, {"type": "BoxZoomTool", "id": "c0afd19f-9d19-404b-bfe8-8c81da000469", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "94d06e67-f07f-4729-a3cc-91e187d1d9b3"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1c6ab38b-a087-4bdc-a6ab-336a28065285"}}}, {"type": "LinearAxis", "id": "8e87ae91-8af2-49ec-a029-1c7ea30641f5", "attributes": {"ticker": {"type": "BasicTicker", "id": "26311a11-3286-484c-b249-2517d1beaab0"}, "formatter": {"type": "BasicTickFormatter", "id": "fc57a22d-65c1-4f7e-8319-f1b8de848597"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1c6ab38b-a087-4bdc-a6ab-336a28065285"}}}, {"type": "HelpTool", "id": "4b7073ce-85c7-482d-9c8f-c09ca4d7cb0b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1c6ab38b-a087-4bdc-a6ab-336a28065285"}}}, {"type": "BasicTickFormatter", "id": "fc57a22d-65c1-4f7e-8319-f1b8de848597", "attributes": {}}, {"type": "Patch", "id": "af66ce4b-a6ae-439b-9b94-ebdc61c08884", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "line_alpha": {"value": 0.5}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.5}}}, {"type": "Patch", "id": "2f2c404a-0b9d-49b9-b040-abab767fa948", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "LinearAxis", "id": "342f5301-d52e-437a-a0ac-4ec17bbcce4d", "attributes": {"ticker": {"type": "BasicTicker", "id": "25335a1e-dfc8-482a-98c4-e538e5d22caf"}, "formatter": {"type": "BasicTickFormatter", "id": "f5b1493d-628e-4e2a-9693-4e2a75b72b28"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1c6ab38b-a087-4bdc-a6ab-336a28065285"}}}, {"type": "GlyphRenderer", "id": "09ef78dc-563c-48de-9002-07d6f0a3d4be", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "bb5a4ba2-d38a-4e21-8409-2c76f63d70d4"}, "nonselection_glyph": {"type": "Patch", "id": "2f2c404a-0b9d-49b9-b040-abab767fa948"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Patch", "id": "af66ce4b-a6ae-439b-9b94-ebdc61c08884"}}}, {"type": "ColumnDataSource", "id": "bb5a4ba2-d38a-4e21-8409-2c76f63d70d4", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [6, 7, 8, 7, 3]}, "column_names": ["x", "y"], "callback": null}}, {"type": "ResizeTool", "id": "392e9661-3482-44e4-b480-85a94c0b7c45", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1c6ab38b-a087-4bdc-a6ab-336a28065285"}}}, {"type": "BasicTickFormatter", "id": "f5b1493d-628e-4e2a-9693-4e2a75b72b28", "attributes": {}}, {"type": "BasicTicker", "id": "26311a11-3286-484c-b249-2517d1beaab0", "attributes": {}}, {"type": "PanTool", "id": "44717fb2-38c2-4efc-b86b-d9fdca088ff7", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1c6ab38b-a087-4bdc-a6ab-336a28065285"}}}, {"type": "WheelZoomTool", "id": "d1a3a2b2-43d3-45cb-a796-8b65f5cbce12", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1c6ab38b-a087-4bdc-a6ab-336a28065285"}}}, {"type": "Grid", "id": "8b93d722-959c-4353-a600-e698950b449a", "attributes": {"ticker": {"type": "BasicTicker", "id": "26311a11-3286-484c-b249-2517d1beaab0"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "1c6ab38b-a087-4bdc-a6ab-336a28065285"}}}, {"type": "ToolEvents", "id": "df383ada-9336-4457-b02f-e72c6abc60d1", "attributes": {}}, {"type": "PreviewSaveTool", "id": "331c577e-3132-47e1-b530-94755526dbee", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1c6ab38b-a087-4bdc-a6ab-336a28065285"}}}, {"type": "BoxAnnotation", "id": "94d06e67-f07f-4729-a3cc-91e187d1d9b3", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Plot", "id": "1c6ab38b-a087-4bdc-a6ab-336a28065285", "attributes": {"tools": [{"type": "PanTool", "id": "44717fb2-38c2-4efc-b86b-d9fdca088ff7"}, {"type": "WheelZoomTool", "id": "d1a3a2b2-43d3-45cb-a796-8b65f5cbce12"}, {"type": "BoxZoomTool", "id": "c0afd19f-9d19-404b-bfe8-8c81da000469"}, {"type": "PreviewSaveTool", "id": "331c577e-3132-47e1-b530-94755526dbee"}, {"type": "ResizeTool", "id": "392e9661-3482-44e4-b480-85a94c0b7c45"}, {"type": "ResetTool", "id": "d326c57a-fb40-4f09-bb66-ad0a84fafe0b"}, {"type": "HelpTool", "id": "4b7073ce-85c7-482d-9c8f-c09ca4d7cb0b"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "782c580f-3b13-46a4-b72b-8726afef734d"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "342f5301-d52e-437a-a0ac-4ec17bbcce4d"}, {"type": "Grid", "id": "5b7649ce-c014-4bbe-9954-e38cb2b0f1bc"}, {"type": "LinearAxis", "id": "8e87ae91-8af2-49ec-a029-1c7ea30641f5"}, {"type": "Grid", "id": "8b93d722-959c-4353-a600-e698950b449a"}, {"type": "BoxAnnotation", "id": "94d06e67-f07f-4729-a3cc-91e187d1d9b3"}, {"type": "GlyphRenderer", "id": "09ef78dc-563c-48de-9002-07d6f0a3d4be"}], "left": [{"type": "LinearAxis", "id": "8e87ae91-8af2-49ec-a029-1c7ea30641f5"}], "below": [{"type": "LinearAxis", "id": "342f5301-d52e-437a-a0ac-4ec17bbcce4d"}], "tool_events": {"type": "ToolEvents", "id": "df383ada-9336-4457-b02f-e72c6abc60d1"}, "x_range": {"type": "DataRange1d", "id": "a3bdc402-cf98-4602-b47a-4868ef158e47"}}, "subtype": "Figure"}, {"type": "ResetTool", "id": "d326c57a-fb40-4f09-bb66-ad0a84fafe0b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1c6ab38b-a087-4bdc-a6ab-336a28065285"}}}, {"type": "DataRange1d", "id": "a3bdc402-cf98-4602-b47a-4868ef158e47", "attributes": {"callback": null}}, {"type": "Grid", "id": "5b7649ce-c014-4bbe-9954-e38cb2b0f1bc", "attributes": {"ticker": {"type": "BasicTicker", "id": "25335a1e-dfc8-482a-98c4-e538e5d22caf"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1c6ab38b-a087-4bdc-a6ab-336a28065285"}}}, {"type": "BasicTicker", "id": "25335a1e-dfc8-482a-98c4-e538e5d22caf", "attributes": {}}], "root_ids": ["1c6ab38b-a087-4bdc-a6ab-336a28065285"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "e8eef77e-db80-4da5-a0e3-a0e269bee557", "modelid": "1c6ab38b-a087-4bdc-a6ab-336a28065285", "elementid": "468a6460-6440-41ce-94dd-e685476f431d"}];
          
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