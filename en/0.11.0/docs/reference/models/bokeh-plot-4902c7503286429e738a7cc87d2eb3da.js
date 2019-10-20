
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
  };var element = document.getElementById("52ced704-bc5a-43a0-a0fd-ce6d95da7cf4");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '52ced704-bc5a-43a0-a0fd-ce6d95da7cf4' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"452c637d-5203-4e83-87dc-9ca5fe0f89e7": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "DataRange1d", "id": "d38c49dc-a6ca-43ce-917d-8b401db69c3a", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "3d6e2879-8a7d-4a08-a8bb-da2561453647", "attributes": {}}, {"type": "ToolEvents", "id": "736a5e1a-e75d-4490-b57c-6397b9c3fdb0", "attributes": {}}, {"type": "Plot", "id": "96397197-824b-4ab5-ae5f-59d13dd04842", "attributes": {"y_range": {"type": "DataRange1d", "id": "d38c49dc-a6ca-43ce-917d-8b401db69c3a"}, "renderers": [{"type": "GlyphRenderer", "id": "0ad99b1e-ec18-461e-a3c3-f36910522de6"}, {"type": "LinearAxis", "id": "431b9863-fb81-4c6c-8fe5-a90141bec103"}, {"type": "LinearAxis", "id": "cb11e547-d8db-4f0c-95df-fc66ee76c8f5"}, {"type": "Grid", "id": "950632dc-3626-466b-8b8b-46c9a65533b6"}, {"type": "Grid", "id": "e991affd-bf9c-4443-9241-dfb497865bb0"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "cb11e547-d8db-4f0c-95df-fc66ee76c8f5"}], "x_range": {"type": "DataRange1d", "id": "31f89b40-c850-4360-96ed-45d02916c244"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "431b9863-fb81-4c6c-8fe5-a90141bec103"}], "tool_events": {"type": "ToolEvents", "id": "736a5e1a-e75d-4490-b57c-6397b9c3fdb0"}, "toolbar_location": null}}, {"type": "DataRange1d", "id": "31f89b40-c850-4360-96ed-45d02916c244", "attributes": {"callback": null}}, {"type": "Grid", "id": "950632dc-3626-466b-8b8b-46c9a65533b6", "attributes": {"ticker": {"type": "BasicTicker", "id": "d5c6a544-7376-443c-aace-756cda72a359"}, "plot": {"type": "Plot", "id": "96397197-824b-4ab5-ae5f-59d13dd04842"}}}, {"type": "Grid", "id": "e991affd-bf9c-4443-9241-dfb497865bb0", "attributes": {"ticker": {"type": "BasicTicker", "id": "c95e4650-55bf-4b57-8e65-2ae2127721e1"}, "dimension": 1, "plot": {"type": "Plot", "id": "96397197-824b-4ab5-ae5f-59d13dd04842"}}}, {"type": "GlyphRenderer", "id": "0ad99b1e-ec18-461e-a3c3-f36910522de6", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "ea0acc25-46f3-482d-a523-53bac478f285"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "SquareCross", "id": "72361642-ecc8-48a3-ab2e-851b114c4628"}}}, {"type": "LinearAxis", "id": "cb11e547-d8db-4f0c-95df-fc66ee76c8f5", "attributes": {"ticker": {"type": "BasicTicker", "id": "c95e4650-55bf-4b57-8e65-2ae2127721e1"}, "formatter": {"type": "BasicTickFormatter", "id": "3d6e2879-8a7d-4a08-a8bb-da2561453647"}, "plot": {"type": "Plot", "id": "96397197-824b-4ab5-ae5f-59d13dd04842"}}}, {"type": "BasicTicker", "id": "d5c6a544-7376-443c-aace-756cda72a359", "attributes": {}}, {"type": "ColumnDataSource", "id": "ea0acc25-46f3-482d-a523-53bac478f285", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "sizes", "y"], "callback": null}}, {"type": "BasicTickFormatter", "id": "9163a5b0-bf36-4446-b650-c732ff719bb7", "attributes": {}}, {"type": "LinearAxis", "id": "431b9863-fb81-4c6c-8fe5-a90141bec103", "attributes": {"ticker": {"type": "BasicTicker", "id": "d5c6a544-7376-443c-aace-756cda72a359"}, "formatter": {"type": "BasicTickFormatter", "id": "9163a5b0-bf36-4446-b650-c732ff719bb7"}, "plot": {"type": "Plot", "id": "96397197-824b-4ab5-ae5f-59d13dd04842"}}}, {"type": "BasicTicker", "id": "c95e4650-55bf-4b57-8e65-2ae2127721e1", "attributes": {}}, {"type": "SquareCross", "id": "72361642-ecc8-48a3-ab2e-851b114c4628", "attributes": {"line_color": {"value": "#7fc97f"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "sizes"}, "fill_color": {"value": null}}}], "root_ids": ["96397197-824b-4ab5-ae5f-59d13dd04842"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "452c637d-5203-4e83-87dc-9ca5fe0f89e7", "modelid": "96397197-824b-4ab5-ae5f-59d13dd04842", "elementid": "52ced704-bc5a-43a0-a0fd-ce6d95da7cf4"}];
          
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