
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
  };var element = document.getElementById("e6d3d3c7-2ad5-4315-a217-8c6c7b01bf89");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'e6d3d3c7-2ad5-4315-a217-8c6c7b01bf89' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"d7dbb7bc-f00d-4b1b-8b4f-6684a023ab7a": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "GlyphRenderer", "id": "6711f002-4146-462d-bb33-e1333e75b60e", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "33be77d1-d97f-4b62-a43e-fefa8809d740"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "CircleCross", "id": "f6120e4b-7f1f-443c-93de-068870983ca4"}}}, {"type": "BasicTickFormatter", "id": "f441df8a-4362-492a-b72c-22036d31cd0f", "attributes": {}}, {"type": "DataRange1d", "id": "b1aec715-5acd-442f-a52f-98148933a288", "attributes": {"callback": null}}, {"type": "ColumnDataSource", "id": "33be77d1-d97f-4b62-a43e-fefa8809d740", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "sizes", "y"], "callback": null}}, {"type": "BasicTicker", "id": "7a0f5d72-5bb6-4f70-a910-26d0918f2344", "attributes": {}}, {"type": "Grid", "id": "b9cfe198-b7c6-4e30-9099-54ba48c7af8e", "attributes": {"ticker": {"type": "BasicTicker", "id": "7a0f5d72-5bb6-4f70-a910-26d0918f2344"}, "plot": {"type": "Plot", "id": "68752ca7-4812-49a7-bfc5-ac3bc54a56d6"}}}, {"type": "LinearAxis", "id": "75be50fb-5dba-4742-b8c3-6bd3cef86604", "attributes": {"ticker": {"type": "BasicTicker", "id": "e5145913-2387-403d-90b1-03b155c9374a"}, "formatter": {"type": "BasicTickFormatter", "id": "a716797a-dd9c-4df0-85e5-f1aa8378ac78"}, "plot": {"type": "Plot", "id": "68752ca7-4812-49a7-bfc5-ac3bc54a56d6"}}}, {"type": "CircleCross", "id": "f6120e4b-7f1f-443c-93de-068870983ca4", "attributes": {"line_color": {"value": "#fb8072"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "sizes"}, "fill_color": {"value": null}}}, {"type": "LinearAxis", "id": "b0ea39a2-cd88-4be4-a13b-4fd021a23baf", "attributes": {"ticker": {"type": "BasicTicker", "id": "7a0f5d72-5bb6-4f70-a910-26d0918f2344"}, "formatter": {"type": "BasicTickFormatter", "id": "f441df8a-4362-492a-b72c-22036d31cd0f"}, "plot": {"type": "Plot", "id": "68752ca7-4812-49a7-bfc5-ac3bc54a56d6"}}}, {"type": "Plot", "id": "68752ca7-4812-49a7-bfc5-ac3bc54a56d6", "attributes": {"y_range": {"type": "DataRange1d", "id": "b1aec715-5acd-442f-a52f-98148933a288"}, "renderers": [{"type": "GlyphRenderer", "id": "6711f002-4146-462d-bb33-e1333e75b60e"}, {"type": "LinearAxis", "id": "b0ea39a2-cd88-4be4-a13b-4fd021a23baf"}, {"type": "LinearAxis", "id": "75be50fb-5dba-4742-b8c3-6bd3cef86604"}, {"type": "Grid", "id": "b9cfe198-b7c6-4e30-9099-54ba48c7af8e"}, {"type": "Grid", "id": "1383df8e-f198-4eeb-afa5-536567b6b76d"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "75be50fb-5dba-4742-b8c3-6bd3cef86604"}], "x_range": {"type": "DataRange1d", "id": "46f8fa83-45ef-45f4-89cb-bb1d64833f0d"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "b0ea39a2-cd88-4be4-a13b-4fd021a23baf"}], "tool_events": {"type": "ToolEvents", "id": "18e330e5-f696-4bb5-99a4-cc0f94776ab0"}, "toolbar_location": null}}, {"type": "BasicTickFormatter", "id": "a716797a-dd9c-4df0-85e5-f1aa8378ac78", "attributes": {}}, {"type": "ToolEvents", "id": "18e330e5-f696-4bb5-99a4-cc0f94776ab0", "attributes": {}}, {"type": "BasicTicker", "id": "e5145913-2387-403d-90b1-03b155c9374a", "attributes": {}}, {"type": "Grid", "id": "1383df8e-f198-4eeb-afa5-536567b6b76d", "attributes": {"ticker": {"type": "BasicTicker", "id": "e5145913-2387-403d-90b1-03b155c9374a"}, "dimension": 1, "plot": {"type": "Plot", "id": "68752ca7-4812-49a7-bfc5-ac3bc54a56d6"}}}, {"type": "DataRange1d", "id": "46f8fa83-45ef-45f4-89cb-bb1d64833f0d", "attributes": {"callback": null}}], "root_ids": ["68752ca7-4812-49a7-bfc5-ac3bc54a56d6"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "d7dbb7bc-f00d-4b1b-8b4f-6684a023ab7a", "modelid": "68752ca7-4812-49a7-bfc5-ac3bc54a56d6", "elementid": "e6d3d3c7-2ad5-4315-a217-8c6c7b01bf89"}];
          
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