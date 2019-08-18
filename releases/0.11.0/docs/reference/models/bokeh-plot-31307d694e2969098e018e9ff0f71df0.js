
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
  };var element = document.getElementById("8636096e-948f-4257-ba59-47731696e5cf");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8636096e-948f-4257-ba59-47731696e5cf' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"6201fb54-78d0-4b3c-b988-9ad6fae295c9": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "a1f27e04-303e-4752-a879-be7e2e3d87fa", "attributes": {"ticker": {"type": "BasicTicker", "id": "6ce76ec7-e197-47ba-a3aa-5ba6c80e738f"}, "formatter": {"type": "BasicTickFormatter", "id": "87eb25a9-19b5-4ceb-8cd3-871f5480e39f"}, "plot": {"type": "Plot", "id": "732efb2d-d417-4b77-b7f0-8e6aea40ec68"}}}, {"type": "BasicTicker", "id": "6ce76ec7-e197-47ba-a3aa-5ba6c80e738f", "attributes": {}}, {"type": "ToolEvents", "id": "968caee1-eb9b-45d4-b2e8-5d9793895c11", "attributes": {}}, {"type": "BasicTicker", "id": "4884879a-33d0-49fa-a076-a3f38ff21672", "attributes": {}}, {"type": "LinearAxis", "id": "27912dda-f075-4096-abd3-c10b667db067", "attributes": {"ticker": {"type": "BasicTicker", "id": "4884879a-33d0-49fa-a076-a3f38ff21672"}, "formatter": {"type": "BasicTickFormatter", "id": "e4279966-c62a-4447-95cf-cf986f415110"}, "plot": {"type": "Plot", "id": "732efb2d-d417-4b77-b7f0-8e6aea40ec68"}}}, {"type": "Plot", "id": "732efb2d-d417-4b77-b7f0-8e6aea40ec68", "attributes": {"y_range": {"type": "DataRange1d", "id": "ca4db6c9-e93a-479a-bf79-e3222d9bdd99"}, "renderers": [{"type": "GlyphRenderer", "id": "cc4a3c91-d52c-412b-8d1e-a6ee2cffd465"}, {"type": "LinearAxis", "id": "a1f27e04-303e-4752-a879-be7e2e3d87fa"}, {"type": "LinearAxis", "id": "27912dda-f075-4096-abd3-c10b667db067"}, {"type": "Grid", "id": "786284fd-ca3a-41c9-954a-ae753c5e86db"}, {"type": "Grid", "id": "b3cb3b55-dba1-40c6-9717-a9575a826410"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "27912dda-f075-4096-abd3-c10b667db067"}], "x_range": {"type": "DataRange1d", "id": "4b305603-4054-4896-be09-220cb20414f1"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "a1f27e04-303e-4752-a879-be7e2e3d87fa"}], "tool_events": {"type": "ToolEvents", "id": "968caee1-eb9b-45d4-b2e8-5d9793895c11"}, "toolbar_location": null}}, {"type": "BasicTickFormatter", "id": "87eb25a9-19b5-4ceb-8cd3-871f5480e39f", "attributes": {}}, {"type": "DataRange1d", "id": "ca4db6c9-e93a-479a-bf79-e3222d9bdd99", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "cc4a3c91-d52c-412b-8d1e-a6ee2cffd465", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "5d855ecd-d5c8-4d8c-a24a-9b5d76270f96"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Bezier", "id": "bdde9b2e-cd60-4c5a-a5a6-62bda98d19bd"}}}, {"type": "BasicTickFormatter", "id": "e4279966-c62a-4447-95cf-cf986f415110", "attributes": {}}, {"type": "DataRange1d", "id": "4b305603-4054-4896-be09-220cb20414f1", "attributes": {"callback": null}}, {"type": "Grid", "id": "b3cb3b55-dba1-40c6-9717-a9575a826410", "attributes": {"ticker": {"type": "BasicTicker", "id": "4884879a-33d0-49fa-a076-a3f38ff21672"}, "dimension": 1, "plot": {"type": "Plot", "id": "732efb2d-d417-4b77-b7f0-8e6aea40ec68"}}}, {"type": "Grid", "id": "786284fd-ca3a-41c9-954a-ae753c5e86db", "attributes": {"ticker": {"type": "BasicTicker", "id": "6ce76ec7-e197-47ba-a3aa-5ba6c80e738f"}, "plot": {"type": "Plot", "id": "732efb2d-d417-4b77-b7f0-8e6aea40ec68"}}}, {"type": "Bezier", "id": "bdde9b2e-cd60-4c5a-a5a6-62bda98d19bd", "attributes": {"line_color": {"value": "#D95F02"}, "line_width": {"value": 2}, "x1": {"field": "xp02"}, "x0": {"field": "x"}, "y1": {"field": "y"}, "cx1": {"field": "xm01"}, "cx0": {"field": "xp01"}, "cy1": {"field": "ym01"}, "cy0": {"field": "yp01"}, "y0": {"field": "y"}}}, {"type": "ColumnDataSource", "id": "5d855ecd-d5c8-4d8c-a24a-9b5d76270f96", "attributes": {"data": {"yp01": [4.2, 2.45, 1.2, 0.45, 0.2, 0.45, 1.2, 2.45, 4.2], "xp01": [-1.9, -1.4, -0.9, -0.4, 0.1, 0.6, 1.1, 1.6, 2.1], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "xm01": [-2.1, -1.6, -1.1, -0.6, -0.1, 0.4, 0.9, 1.4, 1.9], "ym01": [3.8, 2.05, 0.8, 0.04999999999999999, -0.2, 0.04999999999999999, 0.8, 2.05, 3.8], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "xp02": [-1.6, -1.1, -0.6, -0.09999999999999998, 0.4, 0.9, 1.4, 1.9, 2.4]}, "column_names": ["yp01", "y", "xp01", "xm01", "ym01", "xp02", "x"], "callback": null}}], "root_ids": ["732efb2d-d417-4b77-b7f0-8e6aea40ec68"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "6201fb54-78d0-4b3c-b988-9ad6fae295c9", "modelid": "732efb2d-d417-4b77-b7f0-8e6aea40ec68", "elementid": "8636096e-948f-4257-ba59-47731696e5cf"}];
          
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