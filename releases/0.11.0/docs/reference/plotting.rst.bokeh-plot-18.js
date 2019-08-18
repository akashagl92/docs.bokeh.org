
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
  };var element = document.getElementById("6ad16f47-b10d-476b-91a0-5f3a08d711ec");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6ad16f47-b10d-476b-91a0-5f3a08d711ec' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"d437f676-6c45-41fe-b37f-4abc31e29060": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "HelpTool", "id": "f41ea170-fa73-4cdf-aa5c-07042eebb606", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e7e04daf-ee98-48ca-b7a0-4706e3c7acd3"}}}, {"type": "LinearAxis", "id": "cdc1f350-d942-4cf6-b47d-a581c3b526c5", "attributes": {"ticker": {"type": "BasicTicker", "id": "8d4cfb64-e38e-4aeb-b1e7-77c0bf29f6cc"}, "formatter": {"type": "BasicTickFormatter", "id": "ce88548c-62cb-4e33-b18f-3623aaa3cc04"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e7e04daf-ee98-48ca-b7a0-4706e3c7acd3"}}}, {"type": "DataRange1d", "id": "b88dd54e-83f8-4093-b023-ffc68c617502", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "ce88548c-62cb-4e33-b18f-3623aaa3cc04", "attributes": {}}, {"type": "ResizeTool", "id": "a92c349a-88ff-4de1-b05b-b234addf403c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e7e04daf-ee98-48ca-b7a0-4706e3c7acd3"}}}, {"type": "PanTool", "id": "dda7cc5e-8b7b-4737-bfe0-577a8d17f91d", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e7e04daf-ee98-48ca-b7a0-4706e3c7acd3"}}}, {"type": "PreviewSaveTool", "id": "64a4d707-f6ea-462b-9561-74e280541122", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e7e04daf-ee98-48ca-b7a0-4706e3c7acd3"}}}, {"type": "Grid", "id": "547783b1-1a53-4005-82c1-a93bd0d73031", "attributes": {"ticker": {"type": "BasicTicker", "id": "8d4cfb64-e38e-4aeb-b1e7-77c0bf29f6cc"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "e7e04daf-ee98-48ca-b7a0-4706e3c7acd3"}}}, {"type": "ColumnDataSource", "id": "2008a7ef-027d-479b-82d8-d856c6ff2168", "attributes": {"data": {"x": [1, 2, 3], "size": [10, 20, 30], "y": [1, 2, 3]}, "column_names": ["x", "size", "y"], "callback": null}}, {"type": "GlyphRenderer", "id": "ae37d78c-bbba-4980-8a18-5d6cc4fa77f7", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "2008a7ef-027d-479b-82d8-d856c6ff2168"}, "nonselection_glyph": {"type": "Square", "id": "6e0e99fd-49d4-4402-b263-a6133be40c90"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Square", "id": "878208d8-c3de-4010-8107-2c3cf46c10dc"}}}, {"type": "WheelZoomTool", "id": "b5f5c891-e5c0-4647-884a-c740f21277c1", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e7e04daf-ee98-48ca-b7a0-4706e3c7acd3"}}}, {"type": "BasicTicker", "id": "ed0f8b67-1d87-4f3a-b2a8-255747bad387", "attributes": {}}, {"type": "ResetTool", "id": "4293725b-0fd2-4479-9cfc-a0643e52c24f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e7e04daf-ee98-48ca-b7a0-4706e3c7acd3"}}}, {"type": "Square", "id": "878208d8-c3de-4010-8107-2c3cf46c10dc", "attributes": {"line_color": {"value": "#74ADD1"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "size"}, "y": {"field": "y"}, "fill_color": {"value": "#74ADD1"}}}, {"type": "ToolEvents", "id": "03e93722-a0f7-4e5e-85d5-e56e2cbe54e1", "attributes": {}}, {"type": "DataRange1d", "id": "0ed18d4a-56d3-426b-b3dc-8fe34c97f28f", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "8d4cfb64-e38e-4aeb-b1e7-77c0bf29f6cc", "attributes": {}}, {"type": "LinearAxis", "id": "d4cd827f-4b2c-4bef-b52e-deb2817f97a8", "attributes": {"ticker": {"type": "BasicTicker", "id": "ed0f8b67-1d87-4f3a-b2a8-255747bad387"}, "formatter": {"type": "BasicTickFormatter", "id": "eb9127f8-be12-4b12-a9d4-81e0d2e3e532"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e7e04daf-ee98-48ca-b7a0-4706e3c7acd3"}}}, {"type": "Grid", "id": "da4285e8-1ac9-4018-ad1e-044466f6169f", "attributes": {"ticker": {"type": "BasicTicker", "id": "ed0f8b67-1d87-4f3a-b2a8-255747bad387"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e7e04daf-ee98-48ca-b7a0-4706e3c7acd3"}}}, {"type": "Square", "id": "6e0e99fd-49d4-4402-b263-a6133be40c90", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "size"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "BoxAnnotation", "id": "111dce59-e360-49bf-9878-788ef8913abe", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTickFormatter", "id": "eb9127f8-be12-4b12-a9d4-81e0d2e3e532", "attributes": {}}, {"type": "Plot", "id": "e7e04daf-ee98-48ca-b7a0-4706e3c7acd3", "attributes": {"tools": [{"type": "PanTool", "id": "dda7cc5e-8b7b-4737-bfe0-577a8d17f91d"}, {"type": "WheelZoomTool", "id": "b5f5c891-e5c0-4647-884a-c740f21277c1"}, {"type": "BoxZoomTool", "id": "6b54fb6f-aebd-4e4f-b1ea-718b1e87fef2"}, {"type": "PreviewSaveTool", "id": "64a4d707-f6ea-462b-9561-74e280541122"}, {"type": "ResizeTool", "id": "a92c349a-88ff-4de1-b05b-b234addf403c"}, {"type": "ResetTool", "id": "4293725b-0fd2-4479-9cfc-a0643e52c24f"}, {"type": "HelpTool", "id": "f41ea170-fa73-4cdf-aa5c-07042eebb606"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "b88dd54e-83f8-4093-b023-ffc68c617502"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "d4cd827f-4b2c-4bef-b52e-deb2817f97a8"}, {"type": "Grid", "id": "da4285e8-1ac9-4018-ad1e-044466f6169f"}, {"type": "LinearAxis", "id": "cdc1f350-d942-4cf6-b47d-a581c3b526c5"}, {"type": "Grid", "id": "547783b1-1a53-4005-82c1-a93bd0d73031"}, {"type": "BoxAnnotation", "id": "111dce59-e360-49bf-9878-788ef8913abe"}, {"type": "GlyphRenderer", "id": "ae37d78c-bbba-4980-8a18-5d6cc4fa77f7"}], "left": [{"type": "LinearAxis", "id": "cdc1f350-d942-4cf6-b47d-a581c3b526c5"}], "below": [{"type": "LinearAxis", "id": "d4cd827f-4b2c-4bef-b52e-deb2817f97a8"}], "tool_events": {"type": "ToolEvents", "id": "03e93722-a0f7-4e5e-85d5-e56e2cbe54e1"}, "x_range": {"type": "DataRange1d", "id": "0ed18d4a-56d3-426b-b3dc-8fe34c97f28f"}}, "subtype": "Figure"}, {"type": "BoxZoomTool", "id": "6b54fb6f-aebd-4e4f-b1ea-718b1e87fef2", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "111dce59-e360-49bf-9878-788ef8913abe"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e7e04daf-ee98-48ca-b7a0-4706e3c7acd3"}}}], "root_ids": ["e7e04daf-ee98-48ca-b7a0-4706e3c7acd3"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "d437f676-6c45-41fe-b37f-4abc31e29060", "modelid": "e7e04daf-ee98-48ca-b7a0-4706e3c7acd3", "elementid": "6ad16f47-b10d-476b-91a0-5f3a08d711ec"}];
          
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