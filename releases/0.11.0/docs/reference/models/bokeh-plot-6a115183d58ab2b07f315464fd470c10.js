
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
  };var element = document.getElementById("8eac456c-6cc1-4440-adec-24061c9d93ba");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8eac456c-6cc1-4440-adec-24061c9d93ba' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"1e0e40a0-04ed-4fd4-a0b2-5bc2fe7159a0": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "DataRange1d", "id": "959997f5-dea4-4107-b9e5-7ce195d6de80", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "5f4599f6-8549-4421-a600-42acddeb970e", "attributes": {}}, {"type": "BasicTickFormatter", "id": "81f9bf7f-b132-4b61-828b-f670ddccc307", "attributes": {}}, {"type": "DataRange1d", "id": "d6a5ebe9-47dc-46e8-8fe6-51c44f1bcee0", "attributes": {"callback": null}}, {"type": "Segment", "id": "1aa9de69-229d-404a-a328-61db63da0622", "attributes": {"line_color": {"value": "#f4a582"}, "line_width": {"value": 3}, "x1": {"field": "xm01"}, "x0": {"field": "x"}, "y1": {"field": "ym01"}, "y0": {"field": "y"}}}, {"type": "Grid", "id": "e999a2d0-9cd9-4957-a0da-01d296eef028", "attributes": {"ticker": {"type": "BasicTicker", "id": "8a72d592-c117-4b29-85a3-8aa7d3c2c964"}, "plot": {"type": "Plot", "id": "f71ea23a-2d39-427a-8105-7f84e500b9e4"}}}, {"type": "LinearAxis", "id": "11d74953-5134-4518-b4a6-982659d688d0", "attributes": {"ticker": {"type": "BasicTicker", "id": "200be941-1837-4223-a538-6fd132bf2b15"}, "formatter": {"type": "BasicTickFormatter", "id": "5f4599f6-8549-4421-a600-42acddeb970e"}, "plot": {"type": "Plot", "id": "f71ea23a-2d39-427a-8105-7f84e500b9e4"}}}, {"type": "BasicTicker", "id": "8a72d592-c117-4b29-85a3-8aa7d3c2c964", "attributes": {}}, {"type": "Plot", "id": "f71ea23a-2d39-427a-8105-7f84e500b9e4", "attributes": {"y_range": {"type": "DataRange1d", "id": "959997f5-dea4-4107-b9e5-7ce195d6de80"}, "renderers": [{"type": "GlyphRenderer", "id": "8eba24ef-4cb5-41a9-ab1d-b996f93b11d3"}, {"type": "LinearAxis", "id": "92fc3eae-93ba-4647-9fa7-435ef375e2ca"}, {"type": "LinearAxis", "id": "11d74953-5134-4518-b4a6-982659d688d0"}, {"type": "Grid", "id": "e999a2d0-9cd9-4957-a0da-01d296eef028"}, {"type": "Grid", "id": "49526e99-a66c-4820-940a-8a1a11fd642e"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "11d74953-5134-4518-b4a6-982659d688d0"}], "x_range": {"type": "DataRange1d", "id": "d6a5ebe9-47dc-46e8-8fe6-51c44f1bcee0"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "92fc3eae-93ba-4647-9fa7-435ef375e2ca"}], "tool_events": {"type": "ToolEvents", "id": "320eb846-277d-41b6-b778-9935b10d5793"}, "toolbar_location": null}}, {"type": "GlyphRenderer", "id": "8eba24ef-4cb5-41a9-ab1d-b996f93b11d3", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "40f45e34-242e-4858-ac5f-d0c9558b9b49"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Segment", "id": "1aa9de69-229d-404a-a328-61db63da0622"}}}, {"type": "ColumnDataSource", "id": "40f45e34-242e-4858-ac5f-d0c9558b9b49", "attributes": {"data": {"ym01": [4.1, 2.525, 1.4, 0.725, 0.5, 0.725, 1.4, 2.525, 4.1], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "xm01": [-0.8999999999999999, -0.8625, -0.6000000000000001, -0.1875, 0.3, 0.7875, 1.2, 1.4625000000000001, 1.5]}, "column_names": ["ym01", "x", "y", "xm01"], "callback": null}}, {"type": "Grid", "id": "49526e99-a66c-4820-940a-8a1a11fd642e", "attributes": {"ticker": {"type": "BasicTicker", "id": "200be941-1837-4223-a538-6fd132bf2b15"}, "dimension": 1, "plot": {"type": "Plot", "id": "f71ea23a-2d39-427a-8105-7f84e500b9e4"}}}, {"type": "LinearAxis", "id": "92fc3eae-93ba-4647-9fa7-435ef375e2ca", "attributes": {"ticker": {"type": "BasicTicker", "id": "8a72d592-c117-4b29-85a3-8aa7d3c2c964"}, "formatter": {"type": "BasicTickFormatter", "id": "81f9bf7f-b132-4b61-828b-f670ddccc307"}, "plot": {"type": "Plot", "id": "f71ea23a-2d39-427a-8105-7f84e500b9e4"}}}, {"type": "BasicTicker", "id": "200be941-1837-4223-a538-6fd132bf2b15", "attributes": {}}, {"type": "ToolEvents", "id": "320eb846-277d-41b6-b778-9935b10d5793", "attributes": {}}], "root_ids": ["f71ea23a-2d39-427a-8105-7f84e500b9e4"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "1e0e40a0-04ed-4fd4-a0b2-5bc2fe7159a0", "modelid": "f71ea23a-2d39-427a-8105-7f84e500b9e4", "elementid": "8eac456c-6cc1-4440-adec-24061c9d93ba"}];
          
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