
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
  };var element = document.getElementById("7c76b981-3b49-4f45-bd5c-628b680d24b5");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7c76b981-3b49-4f45-bd5c-628b680d24b5' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"e0b2e520-9428-4123-b947-9260d27ff38b": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "27cc0b2b-baf1-48c2-b196-9643353b4082", "attributes": {}}, {"type": "BasicTicker", "id": "278cb202-2794-4705-bfd1-b027886873c0", "attributes": {}}, {"type": "LinearAxis", "id": "7fbe8f60-eed7-496f-bddb-b9fc0b6fea96", "attributes": {"ticker": {"type": "BasicTicker", "id": "78b9bc12-8ce4-4d7b-9709-bc5ed66c7795"}, "formatter": {"type": "BasicTickFormatter", "id": "27cc0b2b-baf1-48c2-b196-9643353b4082"}, "plot": {"type": "Plot", "id": "82ddf6ec-d442-4a9e-8d6c-f908533050f3"}}}, {"type": "BasicTickFormatter", "id": "4d0a36fa-f67d-414a-9237-8036abdcaa17", "attributes": {}}, {"type": "ToolEvents", "id": "54c5280a-d528-4e64-abbf-41feaf4bd715", "attributes": {}}, {"type": "Grid", "id": "629bbd15-6224-4cba-ac11-d308a4a8ab22", "attributes": {"ticker": {"type": "BasicTicker", "id": "278cb202-2794-4705-bfd1-b027886873c0"}, "plot": {"type": "Plot", "id": "82ddf6ec-d442-4a9e-8d6c-f908533050f3"}}}, {"type": "BasicTicker", "id": "78b9bc12-8ce4-4d7b-9709-bc5ed66c7795", "attributes": {}}, {"type": "DataRange1d", "id": "85ad175d-8ea4-41b0-b483-48d7c994330c", "attributes": {"callback": null}}, {"type": "Grid", "id": "fbec48c6-1452-415d-b586-14a63b6f1dd2", "attributes": {"ticker": {"type": "BasicTicker", "id": "78b9bc12-8ce4-4d7b-9709-bc5ed66c7795"}, "dimension": 1, "plot": {"type": "Plot", "id": "82ddf6ec-d442-4a9e-8d6c-f908533050f3"}}}, {"type": "Plot", "id": "82ddf6ec-d442-4a9e-8d6c-f908533050f3", "attributes": {"y_range": {"type": "DataRange1d", "id": "d5983454-1a32-4161-83d5-ce23a2446482"}, "renderers": [{"type": "GlyphRenderer", "id": "5c3573c3-abf3-4dee-ba39-f867adc1ae8a"}, {"type": "LinearAxis", "id": "113c3cad-6ef8-45ba-b2ef-ae6b74dd0217"}, {"type": "LinearAxis", "id": "7fbe8f60-eed7-496f-bddb-b9fc0b6fea96"}, {"type": "Grid", "id": "629bbd15-6224-4cba-ac11-d308a4a8ab22"}, {"type": "Grid", "id": "fbec48c6-1452-415d-b586-14a63b6f1dd2"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "7fbe8f60-eed7-496f-bddb-b9fc0b6fea96"}], "x_range": {"type": "DataRange1d", "id": "85ad175d-8ea4-41b0-b483-48d7c994330c"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "113c3cad-6ef8-45ba-b2ef-ae6b74dd0217"}], "tool_events": {"type": "ToolEvents", "id": "54c5280a-d528-4e64-abbf-41feaf4bd715"}, "toolbar_location": null}}, {"type": "LinearAxis", "id": "113c3cad-6ef8-45ba-b2ef-ae6b74dd0217", "attributes": {"ticker": {"type": "BasicTicker", "id": "278cb202-2794-4705-bfd1-b027886873c0"}, "formatter": {"type": "BasicTickFormatter", "id": "4d0a36fa-f67d-414a-9237-8036abdcaa17"}, "plot": {"type": "Plot", "id": "82ddf6ec-d442-4a9e-8d6c-f908533050f3"}}}, {"type": "Cross", "id": "592b64de-4cbb-430e-8cb6-1d09341fd600", "attributes": {"line_color": {"value": "#e6550d"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "sizes"}, "fill_color": {"value": null}}}, {"type": "DataRange1d", "id": "d5983454-1a32-4161-83d5-ce23a2446482", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "5c3573c3-abf3-4dee-ba39-f867adc1ae8a", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "1d349aff-36a4-4712-b085-f3d094f66ca9"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Cross", "id": "592b64de-4cbb-430e-8cb6-1d09341fd600"}}}, {"type": "ColumnDataSource", "id": "1d349aff-36a4-4712-b085-f3d094f66ca9", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "sizes", "y"], "callback": null}}], "root_ids": ["82ddf6ec-d442-4a9e-8d6c-f908533050f3"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "e0b2e520-9428-4123-b947-9260d27ff38b", "modelid": "82ddf6ec-d442-4a9e-8d6c-f908533050f3", "elementid": "7c76b981-3b49-4f45-bd5c-628b680d24b5"}];
          
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