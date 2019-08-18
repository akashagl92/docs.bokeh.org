
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
  };var element = document.getElementById("1ad9b66a-0cd1-43d0-956b-4aafe9c29b1a");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1ad9b66a-0cd1-43d0-956b-4aafe9c29b1a' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"c13f240c-7693-4554-af26-354e4a5085ba": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTicker", "id": "6e7613e0-7597-4720-ad85-7e0590f57cdb", "attributes": {}}, {"type": "ColumnDataSource", "id": "cdc3bd0b-e252-4844-88a8-414af97e3aef", "attributes": {"data": {"ys": [[3.9, 4.02, 4.1, 4.02, 3.9], [2.14, 2.272, 2.36, 2.272, 2.14], [0.88, 1.024, 1.12, 1.024, 0.88], [0.12, 0.276, 0.38, 0.276, 0.12], [-0.13999999999999999, 0.027999999999999997, 0.13999999999999999, 0.027999999999999997, -0.13999999999999999], [0.09999999999999998, 0.28, 0.4, 0.28, 0.09999999999999998], [0.84, 1.032, 1.1600000000000001, 1.032, 0.84], [2.08, 2.284, 2.42, 2.284, 2.08], [3.82, 4.036, 4.18, 4.036, 3.82]], "xs": [[-2.09, -2.12, -2.0, -1.88, -1.91], [-1.599, -1.6320000000000001, -1.5, -1.3679999999999999, -1.401], [-1.108, -1.144, -1.0, -0.856, -0.892], [-0.617, -0.656, -0.5, -0.344, -0.383], [-0.126, -0.16799999999999998, 0.0, 0.16799999999999998, 0.126], [0.365, 0.32, 0.5, 0.6799999999999999, 0.635], [0.856, 0.808, 1.0, 1.192, 1.144], [1.347, 1.296, 1.5, 1.704, 1.653], [1.838, 1.784, 2.0, 2.216, 2.162]]}, "column_names": ["ys", "xs"], "callback": null}}, {"type": "DataRange1d", "id": "4b25577f-ccb8-4a15-b4f3-77b4b6e3fb82", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "d7798dbe-959b-4922-be34-4764e569a657", "attributes": {"ticker": {"type": "BasicTicker", "id": "6e7613e0-7597-4720-ad85-7e0590f57cdb"}, "formatter": {"type": "BasicTickFormatter", "id": "7d6b30b0-eed1-4db0-9923-4c0ef2a1bb6a"}, "plot": {"type": "Plot", "id": "d77ceefc-0aba-4df2-a4bc-583f0048f0bc"}}}, {"type": "BasicTicker", "id": "d2031acd-ee64-440e-b625-12385e457621", "attributes": {}}, {"type": "Grid", "id": "8883a9c5-5a51-49bc-8fe8-c9424dd3d7bd", "attributes": {"ticker": {"type": "BasicTicker", "id": "6e7613e0-7597-4720-ad85-7e0590f57cdb"}, "plot": {"type": "Plot", "id": "d77ceefc-0aba-4df2-a4bc-583f0048f0bc"}}}, {"type": "DataRange1d", "id": "3534c8eb-c216-4b2d-8519-a97d15047371", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "06a84d0e-df88-48ad-a300-b75b4c771e1a", "attributes": {}}, {"type": "BasicTickFormatter", "id": "7d6b30b0-eed1-4db0-9923-4c0ef2a1bb6a", "attributes": {}}, {"type": "Plot", "id": "d77ceefc-0aba-4df2-a4bc-583f0048f0bc", "attributes": {"y_range": {"type": "DataRange1d", "id": "3534c8eb-c216-4b2d-8519-a97d15047371"}, "renderers": [{"type": "GlyphRenderer", "id": "d75f1974-9a16-4569-a5fa-5d343a133c67"}, {"type": "LinearAxis", "id": "d7798dbe-959b-4922-be34-4764e569a657"}, {"type": "LinearAxis", "id": "0aece81d-56d8-4b01-a861-7e16a13247b4"}, {"type": "Grid", "id": "8883a9c5-5a51-49bc-8fe8-c9424dd3d7bd"}, {"type": "Grid", "id": "200a5074-e7df-4a9d-8542-7486d2f90ae6"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "0aece81d-56d8-4b01-a861-7e16a13247b4"}], "x_range": {"type": "DataRange1d", "id": "4b25577f-ccb8-4a15-b4f3-77b4b6e3fb82"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "d7798dbe-959b-4922-be34-4764e569a657"}], "tool_events": {"type": "ToolEvents", "id": "a0afb261-a6aa-43ca-aa72-d660d72f1214"}, "toolbar_location": null}}, {"type": "GlyphRenderer", "id": "d75f1974-9a16-4569-a5fa-5d343a133c67", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "cdc3bd0b-e252-4844-88a8-414af97e3aef"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "MultiLine", "id": "6f0053c0-5ffc-4174-aca2-0a6dc4071506"}}}, {"type": "ToolEvents", "id": "a0afb261-a6aa-43ca-aa72-d660d72f1214", "attributes": {}}, {"type": "Grid", "id": "200a5074-e7df-4a9d-8542-7486d2f90ae6", "attributes": {"ticker": {"type": "BasicTicker", "id": "d2031acd-ee64-440e-b625-12385e457621"}, "dimension": 1, "plot": {"type": "Plot", "id": "d77ceefc-0aba-4df2-a4bc-583f0048f0bc"}}}, {"type": "LinearAxis", "id": "0aece81d-56d8-4b01-a861-7e16a13247b4", "attributes": {"ticker": {"type": "BasicTicker", "id": "d2031acd-ee64-440e-b625-12385e457621"}, "formatter": {"type": "BasicTickFormatter", "id": "06a84d0e-df88-48ad-a300-b75b4c771e1a"}, "plot": {"type": "Plot", "id": "d77ceefc-0aba-4df2-a4bc-583f0048f0bc"}}}, {"type": "MultiLine", "id": "6f0053c0-5ffc-4174-aca2-0a6dc4071506", "attributes": {"line_color": {"value": "#8073ac"}, "ys": {"field": "ys"}, "line_width": {"value": 2}, "xs": {"field": "xs"}}}], "root_ids": ["d77ceefc-0aba-4df2-a4bc-583f0048f0bc"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "c13f240c-7693-4554-af26-354e4a5085ba", "modelid": "d77ceefc-0aba-4df2-a4bc-583f0048f0bc", "elementid": "1ad9b66a-0cd1-43d0-956b-4aafe9c29b1a"}];
          
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