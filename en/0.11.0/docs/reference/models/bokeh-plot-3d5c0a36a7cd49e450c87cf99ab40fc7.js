
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
  };var element = document.getElementById("8b343b3b-26f7-458a-8e43-adf6af293cf5");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8b343b3b-26f7-458a-8e43-adf6af293cf5' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"18a9d1c1-431b-498f-844d-4c4cf3cf4179": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "d2499dd5-5c59-4f58-b9b4-83d160756a4d", "attributes": {}}, {"type": "Plot", "id": "aa0b348e-46f4-4d9c-8dc8-4b2ddd5d0fc0", "attributes": {"y_range": {"type": "DataRange1d", "id": "ce85bce5-6a4a-4c8d-bda9-6c196a113e4d"}, "renderers": [{"type": "GlyphRenderer", "id": "9a105e07-e7b0-404d-94de-bb58dd5a5543"}, {"type": "LinearAxis", "id": "83d914a6-3c6c-4f96-aebe-0f2a6cd51802"}, {"type": "LinearAxis", "id": "235dd1d9-21d5-4561-8297-e96a3c4b7346"}, {"type": "Grid", "id": "3806a6a8-21f8-43f7-a5f1-9d01ce987854"}, {"type": "Grid", "id": "824cc437-72f1-46d5-8225-1f526c9bd587"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "235dd1d9-21d5-4561-8297-e96a3c4b7346"}], "x_range": {"type": "DataRange1d", "id": "44c8f624-1a72-48f5-91da-dc1bc363b26d"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "83d914a6-3c6c-4f96-aebe-0f2a6cd51802"}], "tool_events": {"type": "ToolEvents", "id": "597a3a25-3453-4928-b88a-b89dc3b97f43"}, "toolbar_location": null}}, {"type": "LinearAxis", "id": "83d914a6-3c6c-4f96-aebe-0f2a6cd51802", "attributes": {"ticker": {"type": "BasicTicker", "id": "9ac234ba-95d9-4359-8414-f4ade4275b73"}, "formatter": {"type": "BasicTickFormatter", "id": "cc78c1ea-47da-4048-94f7-3afc0ad8725e"}, "plot": {"type": "Plot", "id": "aa0b348e-46f4-4d9c-8dc8-4b2ddd5d0fc0"}}}, {"type": "LinearAxis", "id": "235dd1d9-21d5-4561-8297-e96a3c4b7346", "attributes": {"ticker": {"type": "BasicTicker", "id": "292d4e62-aa63-40a7-bed3-d51d4f44f981"}, "formatter": {"type": "BasicTickFormatter", "id": "d2499dd5-5c59-4f58-b9b4-83d160756a4d"}, "plot": {"type": "Plot", "id": "aa0b348e-46f4-4d9c-8dc8-4b2ddd5d0fc0"}}}, {"type": "Grid", "id": "3806a6a8-21f8-43f7-a5f1-9d01ce987854", "attributes": {"ticker": {"type": "BasicTicker", "id": "9ac234ba-95d9-4359-8414-f4ade4275b73"}, "plot": {"type": "Plot", "id": "aa0b348e-46f4-4d9c-8dc8-4b2ddd5d0fc0"}}}, {"type": "DataRange1d", "id": "44c8f624-1a72-48f5-91da-dc1bc363b26d", "attributes": {"callback": null}}, {"type": "DataRange1d", "id": "ce85bce5-6a4a-4c8d-bda9-6c196a113e4d", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "9ac234ba-95d9-4359-8414-f4ade4275b73", "attributes": {}}, {"type": "GlyphRenderer", "id": "9a105e07-e7b0-404d-94de-bb58dd5a5543", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "539adb82-f048-43dc-a674-20a2b3aa8bc0"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Arc", "id": "3c785674-d5fb-446d-95c6-1c8de10efad4"}}}, {"type": "ColumnDataSource", "id": "539adb82-f048-43dc-a674-20a2b3aa8bc0", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "r": [0.16666666666666666, 0.19999999999999998, 0.23333333333333334, 0.26666666666666666, 0.3, 0.3333333333333333, 0.36666666666666664, 0.4, 0.43333333333333335]}, "column_names": ["x", "r", "y"], "callback": null}}, {"type": "Grid", "id": "824cc437-72f1-46d5-8225-1f526c9bd587", "attributes": {"ticker": {"type": "BasicTicker", "id": "292d4e62-aa63-40a7-bed3-d51d4f44f981"}, "dimension": 1, "plot": {"type": "Plot", "id": "aa0b348e-46f4-4d9c-8dc8-4b2ddd5d0fc0"}}}, {"type": "BasicTickFormatter", "id": "cc78c1ea-47da-4048-94f7-3afc0ad8725e", "attributes": {}}, {"type": "ToolEvents", "id": "597a3a25-3453-4928-b88a-b89dc3b97f43", "attributes": {}}, {"type": "BasicTicker", "id": "292d4e62-aa63-40a7-bed3-d51d4f44f981", "attributes": {}}, {"type": "Arc", "id": "3c785674-d5fb-446d-95c6-1c8de10efad4", "attributes": {"line_color": {"value": "#beaed4"}, "line_width": {"value": 3}, "y": {"field": "y"}, "end_angle": {"value": 4.1, "units": "rad"}, "x": {"field": "x"}, "start_angle": {"value": 0.6, "units": "rad"}, "radius": {"units": "data", "field": "r"}}}], "root_ids": ["aa0b348e-46f4-4d9c-8dc8-4b2ddd5d0fc0"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "18a9d1c1-431b-498f-844d-4c4cf3cf4179", "modelid": "aa0b348e-46f4-4d9c-8dc8-4b2ddd5d0fc0", "elementid": "8b343b3b-26f7-458a-8e43-adf6af293cf5"}];
          
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