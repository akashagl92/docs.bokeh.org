
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
  };var element = document.getElementById("4e3e5fcf-3807-4419-9a5f-74af4b287c62");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '4e3e5fcf-3807-4419-9a5f-74af4b287c62' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"17f4d137-711c-45a1-b862-d9795231c608": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "53471bd4-3e74-4d75-a200-cf257596bee8", "attributes": {}}, {"type": "Plot", "id": "5aa9b35f-49db-4be1-87bc-e9b5a38532fd", "attributes": {"y_range": {"type": "DataRange1d", "id": "b7dbb82f-b3f6-47f1-ae89-6dbb899c1c87"}, "renderers": [{"type": "GlyphRenderer", "id": "f1cff300-17a9-43f5-a695-3a6c54bbfd2d"}, {"type": "LinearAxis", "id": "497a97d6-3ff4-470a-9e95-e318bdf1b84e"}, {"type": "LinearAxis", "id": "6b5e1b13-446f-41f8-9368-315b1bece522"}, {"type": "Grid", "id": "4c6da6d4-6a70-4792-b320-fc5a244e4fd4"}, {"type": "Grid", "id": "66b353b7-f768-4f05-8991-fdb431dade2a"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "6b5e1b13-446f-41f8-9368-315b1bece522"}], "x_range": {"type": "DataRange1d", "id": "514b4556-f1cb-45fb-8707-2657c51ce6ba"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "497a97d6-3ff4-470a-9e95-e318bdf1b84e"}], "tool_events": {"type": "ToolEvents", "id": "3ccb469c-4702-4d6e-9b12-f502f186d41e"}, "toolbar_location": null}}, {"type": "Grid", "id": "4c6da6d4-6a70-4792-b320-fc5a244e4fd4", "attributes": {"ticker": {"type": "BasicTicker", "id": "d963e47e-ba16-44a4-8f5d-0892e01cdde6"}, "plot": {"type": "Plot", "id": "5aa9b35f-49db-4be1-87bc-e9b5a38532fd"}}}, {"type": "DataRange1d", "id": "b7dbb82f-b3f6-47f1-ae89-6dbb899c1c87", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "56973bcb-4e99-4a86-afc0-7cf6f0df1dcf", "attributes": {}}, {"type": "LinearAxis", "id": "497a97d6-3ff4-470a-9e95-e318bdf1b84e", "attributes": {"ticker": {"type": "BasicTicker", "id": "d963e47e-ba16-44a4-8f5d-0892e01cdde6"}, "formatter": {"type": "BasicTickFormatter", "id": "53471bd4-3e74-4d75-a200-cf257596bee8"}, "plot": {"type": "Plot", "id": "5aa9b35f-49db-4be1-87bc-e9b5a38532fd"}}}, {"type": "BasicTicker", "id": "d963e47e-ba16-44a4-8f5d-0892e01cdde6", "attributes": {}}, {"type": "Grid", "id": "66b353b7-f768-4f05-8991-fdb431dade2a", "attributes": {"ticker": {"type": "BasicTicker", "id": "e49feee9-5384-4c27-9d60-024d99029f29"}, "dimension": 1, "plot": {"type": "Plot", "id": "5aa9b35f-49db-4be1-87bc-e9b5a38532fd"}}}, {"type": "ToolEvents", "id": "3ccb469c-4702-4d6e-9b12-f502f186d41e", "attributes": {}}, {"type": "X", "id": "164745d7-0a45-4343-b229-040022945890", "attributes": {"line_color": {"value": "#fdae6b"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "sizes"}, "fill_color": {"value": null}}}, {"type": "DataRange1d", "id": "514b4556-f1cb-45fb-8707-2657c51ce6ba", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "6b5e1b13-446f-41f8-9368-315b1bece522", "attributes": {"ticker": {"type": "BasicTicker", "id": "e49feee9-5384-4c27-9d60-024d99029f29"}, "formatter": {"type": "BasicTickFormatter", "id": "56973bcb-4e99-4a86-afc0-7cf6f0df1dcf"}, "plot": {"type": "Plot", "id": "5aa9b35f-49db-4be1-87bc-e9b5a38532fd"}}}, {"type": "ColumnDataSource", "id": "5eb20516-9dda-4ec6-9c78-d484a76252f3", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "sizes", "y"], "callback": null}}, {"type": "GlyphRenderer", "id": "f1cff300-17a9-43f5-a695-3a6c54bbfd2d", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "5eb20516-9dda-4ec6-9c78-d484a76252f3"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "X", "id": "164745d7-0a45-4343-b229-040022945890"}}}, {"type": "BasicTicker", "id": "e49feee9-5384-4c27-9d60-024d99029f29", "attributes": {}}], "root_ids": ["5aa9b35f-49db-4be1-87bc-e9b5a38532fd"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "17f4d137-711c-45a1-b862-d9795231c608", "modelid": "5aa9b35f-49db-4be1-87bc-e9b5a38532fd", "elementid": "4e3e5fcf-3807-4419-9a5f-74af4b287c62"}];
          
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