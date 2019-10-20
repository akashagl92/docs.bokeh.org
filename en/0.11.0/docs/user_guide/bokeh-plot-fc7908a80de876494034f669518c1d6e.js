
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
  };var element = document.getElementById("772cae8e-c38d-4593-90d5-4df710f27ac0");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '772cae8e-c38d-4593-90d5-4df710f27ac0' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"5aa720a6-97ba-4ada-959b-db9a8ee993e0": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "351f4d04-1d9b-4104-be9b-6a5ba6d02446", "attributes": {}}, {"type": "ToolEvents", "id": "02ca0c43-38c5-48c7-b041-b642b4398cce", "attributes": {}}, {"type": "WheelZoomTool", "id": "4fd0224f-98e9-4e01-ae1a-8c17a442a223", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c32974c6-bed2-4c5c-8676-af1a5992b950"}}}, {"type": "Plot", "id": "c32974c6-bed2-4c5c-8676-af1a5992b950", "attributes": {"tools": [{"type": "PanTool", "id": "2211602b-b461-4a98-bbb9-612fc7342c9a"}, {"type": "WheelZoomTool", "id": "4fd0224f-98e9-4e01-ae1a-8c17a442a223"}, {"type": "BoxZoomTool", "id": "6d9207e0-578f-4e11-9387-ecc876851a46"}, {"type": "PreviewSaveTool", "id": "aef03cfa-58c5-49d0-bf7d-870925b6c967"}, {"type": "ResizeTool", "id": "84ba3674-7e48-43e8-a59f-87af4e6d15bd"}, {"type": "ResetTool", "id": "bce60b3f-439e-416d-92e6-d05160e49099"}, {"type": "HelpTool", "id": "66bb453a-8d8a-45a5-b0c8-2b821b1ed6d4"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "c254e649-b26e-47b4-b6cf-d244af843997"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "23de4073-41f1-4c01-9ab8-a178672e82de"}, {"type": "Grid", "id": "b1a7a683-6105-46d7-9a15-566dd9e56851"}, {"type": "LinearAxis", "id": "00f4bb91-837c-483e-abb1-627d01248153"}, {"type": "Grid", "id": "99be6f5f-3539-4d58-9305-7e6ff14c9d0c"}, {"type": "BoxAnnotation", "id": "2a3aaed8-9b05-41ab-9e17-96c0e2330cbc"}, {"type": "GlyphRenderer", "id": "1fede21b-99e3-4d44-97e6-ee8bece28a7d"}], "left": [{"type": "LinearAxis", "id": "00f4bb91-837c-483e-abb1-627d01248153"}], "below": [{"type": "LinearAxis", "id": "23de4073-41f1-4c01-9ab8-a178672e82de"}], "tool_events": {"type": "ToolEvents", "id": "02ca0c43-38c5-48c7-b041-b642b4398cce"}, "x_range": {"type": "DataRange1d", "id": "ba4866c7-83f7-4011-99f9-5dbfa7110afd"}}, "subtype": "Figure"}, {"type": "HelpTool", "id": "66bb453a-8d8a-45a5-b0c8-2b821b1ed6d4", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c32974c6-bed2-4c5c-8676-af1a5992b950"}}}, {"type": "BoxAnnotation", "id": "2a3aaed8-9b05-41ab-9e17-96c0e2330cbc", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BoxZoomTool", "id": "6d9207e0-578f-4e11-9387-ecc876851a46", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "2a3aaed8-9b05-41ab-9e17-96c0e2330cbc"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c32974c6-bed2-4c5c-8676-af1a5992b950"}}}, {"type": "ResizeTool", "id": "84ba3674-7e48-43e8-a59f-87af4e6d15bd", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c32974c6-bed2-4c5c-8676-af1a5992b950"}}}, {"type": "Grid", "id": "b1a7a683-6105-46d7-9a15-566dd9e56851", "attributes": {"ticker": {"type": "BasicTicker", "id": "553d07cd-d1cf-4bcc-9fc6-5aef2a41c3a8"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c32974c6-bed2-4c5c-8676-af1a5992b950"}}}, {"type": "ColumnDataSource", "id": "baffd814-1ed2-4e39-a992-949c573a1fe8", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "BasicTicker", "id": "553d07cd-d1cf-4bcc-9fc6-5aef2a41c3a8", "attributes": {}}, {"type": "Circle", "id": "1da6710d-1938-4fe2-8bc0-0a113df56dca", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "BasicTickFormatter", "id": "8cbd2a54-2d46-4a62-a83c-807e30d92224", "attributes": {}}, {"type": "BasicTicker", "id": "7c951f5b-964c-4cc3-a277-eb0a3f5877ca", "attributes": {}}, {"type": "Circle", "id": "37f28846-8ddf-4f98-8674-ba4894d756a7", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "PreviewSaveTool", "id": "aef03cfa-58c5-49d0-bf7d-870925b6c967", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c32974c6-bed2-4c5c-8676-af1a5992b950"}}}, {"type": "LinearAxis", "id": "00f4bb91-837c-483e-abb1-627d01248153", "attributes": {"ticker": {"type": "BasicTicker", "id": "7c951f5b-964c-4cc3-a277-eb0a3f5877ca"}, "formatter": {"type": "BasicTickFormatter", "id": "8cbd2a54-2d46-4a62-a83c-807e30d92224"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c32974c6-bed2-4c5c-8676-af1a5992b950"}}}, {"type": "DataRange1d", "id": "ba4866c7-83f7-4011-99f9-5dbfa7110afd", "attributes": {"callback": null}}, {"type": "FixedTicker", "id": "e7a5c4d7-16ba-4184-beb9-b146bc7d8fee", "attributes": {"ticks": [2, 3.5, 4]}}, {"type": "PanTool", "id": "2211602b-b461-4a98-bbb9-612fc7342c9a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c32974c6-bed2-4c5c-8676-af1a5992b950"}}}, {"type": "Grid", "id": "99be6f5f-3539-4d58-9305-7e6ff14c9d0c", "attributes": {"ticker": {"type": "BasicTicker", "id": "7c951f5b-964c-4cc3-a277-eb0a3f5877ca"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "c32974c6-bed2-4c5c-8676-af1a5992b950"}}}, {"type": "DataRange1d", "id": "c254e649-b26e-47b4-b6cf-d244af843997", "attributes": {"callback": null}}, {"type": "ResetTool", "id": "bce60b3f-439e-416d-92e6-d05160e49099", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c32974c6-bed2-4c5c-8676-af1a5992b950"}}}, {"type": "LinearAxis", "id": "23de4073-41f1-4c01-9ab8-a178672e82de", "attributes": {"ticker": {"type": "FixedTicker", "id": "e7a5c4d7-16ba-4184-beb9-b146bc7d8fee"}, "formatter": {"type": "BasicTickFormatter", "id": "351f4d04-1d9b-4104-be9b-6a5ba6d02446"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c32974c6-bed2-4c5c-8676-af1a5992b950"}}}, {"type": "GlyphRenderer", "id": "1fede21b-99e3-4d44-97e6-ee8bece28a7d", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "baffd814-1ed2-4e39-a992-949c573a1fe8"}, "nonselection_glyph": {"type": "Circle", "id": "37f28846-8ddf-4f98-8674-ba4894d756a7"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "1da6710d-1938-4fe2-8bc0-0a113df56dca"}}}], "root_ids": ["c32974c6-bed2-4c5c-8676-af1a5992b950"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "5aa720a6-97ba-4ada-959b-db9a8ee993e0", "modelid": "c32974c6-bed2-4c5c-8676-af1a5992b950", "elementid": "772cae8e-c38d-4593-90d5-4df710f27ac0"}];
          
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