
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
  };var element = document.getElementById("f84f994a-7cfa-4169-87a2-b7ce9657eaf7");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f84f994a-7cfa-4169-87a2-b7ce9657eaf7' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"3eefb0cd-2313-4163-8040-cd323174e87a": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "DataRange1d", "id": "21f0edce-ae44-462c-8959-c82b3f4a4f42", "attributes": {"callback": null}}, {"type": "ColumnDataSource", "id": "365021b7-f092-4671-8821-5c0301f30787", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "w": [0.16666666666666666, 0.19999999999999998, 0.23333333333333334, 0.26666666666666666, 0.3, 0.3333333333333333, 0.36666666666666664, 0.4, 0.43333333333333335], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "h": [0.5, 0.4125, 0.35, 0.3125, 0.3, 0.3125, 0.35, 0.4125, 0.5]}, "column_names": ["x", "w", "y", "h"], "callback": null}}, {"type": "BasicTicker", "id": "dcc20ae2-7f33-4bfc-acfd-706df9492283", "attributes": {}}, {"type": "LinearAxis", "id": "4e5ab0fc-11f8-4868-9edc-12f6076f6930", "attributes": {"ticker": {"type": "BasicTicker", "id": "dcc20ae2-7f33-4bfc-acfd-706df9492283"}, "formatter": {"type": "BasicTickFormatter", "id": "e27138a6-6fd0-433d-9046-58d0ee05f9bc"}, "plot": {"type": "Plot", "id": "9e5fffa7-2df9-495e-a244-0db9627d3509"}}}, {"type": "Grid", "id": "e8cebedb-369a-4287-b2c7-7cadeac78ef4", "attributes": {"ticker": {"type": "BasicTicker", "id": "dcc20ae2-7f33-4bfc-acfd-706df9492283"}, "dimension": 1, "plot": {"type": "Plot", "id": "9e5fffa7-2df9-495e-a244-0db9627d3509"}}}, {"type": "ToolEvents", "id": "259b1d1f-793e-41d1-9fb6-8850682ac258", "attributes": {}}, {"type": "Plot", "id": "9e5fffa7-2df9-495e-a244-0db9627d3509", "attributes": {"y_range": {"type": "DataRange1d", "id": "21f0edce-ae44-462c-8959-c82b3f4a4f42"}, "renderers": [{"type": "GlyphRenderer", "id": "e65d04e7-a5ec-4c1c-b97e-648840dc09da"}, {"type": "LinearAxis", "id": "2d9791d8-1fef-4e8a-9863-800a2716c1d9"}, {"type": "LinearAxis", "id": "4e5ab0fc-11f8-4868-9edc-12f6076f6930"}, {"type": "Grid", "id": "5767e873-756e-48c9-87e6-7c1f1ba5c807"}, {"type": "Grid", "id": "e8cebedb-369a-4287-b2c7-7cadeac78ef4"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "4e5ab0fc-11f8-4868-9edc-12f6076f6930"}], "x_range": {"type": "DataRange1d", "id": "47acb7b2-99c7-4286-b07b-5c5d5734d9be"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "2d9791d8-1fef-4e8a-9863-800a2716c1d9"}], "tool_events": {"type": "ToolEvents", "id": "259b1d1f-793e-41d1-9fb6-8850682ac258"}, "toolbar_location": null}}, {"type": "LinearAxis", "id": "2d9791d8-1fef-4e8a-9863-800a2716c1d9", "attributes": {"ticker": {"type": "BasicTicker", "id": "d6ae22b4-24bf-4e13-a05e-db03b7fbc1fb"}, "formatter": {"type": "BasicTickFormatter", "id": "c0380500-2771-47ac-b5e5-39fb1955b226"}, "plot": {"type": "Plot", "id": "9e5fffa7-2df9-495e-a244-0db9627d3509"}}}, {"type": "BasicTickFormatter", "id": "c0380500-2771-47ac-b5e5-39fb1955b226", "attributes": {}}, {"type": "BasicTicker", "id": "d6ae22b4-24bf-4e13-a05e-db03b7fbc1fb", "attributes": {}}, {"type": "Grid", "id": "5767e873-756e-48c9-87e6-7c1f1ba5c807", "attributes": {"ticker": {"type": "BasicTicker", "id": "d6ae22b4-24bf-4e13-a05e-db03b7fbc1fb"}, "plot": {"type": "Plot", "id": "9e5fffa7-2df9-495e-a244-0db9627d3509"}}}, {"type": "Rect", "id": "406bfa2b-2679-4f52-a9b1-1d4ca735fad9", "attributes": {"width": {"units": "data", "field": "w"}, "y": {"field": "y"}, "angle": {"value": -0.7, "units": "rad"}, "height": {"units": "data", "field": "h"}, "x": {"field": "x"}, "fill_color": {"value": "#CAB2D6"}}}, {"type": "BasicTickFormatter", "id": "e27138a6-6fd0-433d-9046-58d0ee05f9bc", "attributes": {}}, {"type": "DataRange1d", "id": "47acb7b2-99c7-4286-b07b-5c5d5734d9be", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "e65d04e7-a5ec-4c1c-b97e-648840dc09da", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "365021b7-f092-4671-8821-5c0301f30787"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "406bfa2b-2679-4f52-a9b1-1d4ca735fad9"}}}], "root_ids": ["9e5fffa7-2df9-495e-a244-0db9627d3509"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "3eefb0cd-2313-4163-8040-cd323174e87a", "modelid": "9e5fffa7-2df9-495e-a244-0db9627d3509", "elementid": "f84f994a-7cfa-4169-87a2-b7ce9657eaf7"}];
          
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