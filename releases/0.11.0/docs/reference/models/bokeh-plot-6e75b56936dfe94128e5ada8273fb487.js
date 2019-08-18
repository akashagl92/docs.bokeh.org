
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
  };var element = document.getElementById("02af447b-b55b-448b-9dcc-323125b819f5");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '02af447b-b55b-448b-9dcc-323125b819f5' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"7afaf3da-1479-42f3-abb2-a156cc01dec6": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Grid", "id": "c84d813c-dcef-4b71-97e0-d9b172ac3df7", "attributes": {"ticker": {"type": "BasicTicker", "id": "7714384d-626c-424e-9080-3afdfbeff609"}, "plot": {"type": "Plot", "id": "999eb18d-4045-4430-98e5-4cdcb602be77"}}}, {"type": "DataRange1d", "id": "bc845591-0b1f-4dac-8cbb-6d482912ee42", "attributes": {"callback": null}}, {"type": "DataRange1d", "id": "14728fb4-3356-4e8a-9c2d-3a30a9af6200", "attributes": {"callback": null}}, {"type": "Grid", "id": "b6072cf0-466b-4cd2-9922-b9e0e03221f4", "attributes": {"ticker": {"type": "BasicTicker", "id": "fb7b93f5-57cd-450a-ab2a-b5076dd89874"}, "dimension": 1, "plot": {"type": "Plot", "id": "999eb18d-4045-4430-98e5-4cdcb602be77"}}}, {"type": "BasicTickFormatter", "id": "b738bfb6-de49-427e-b6e2-9bcabff4dfd5", "attributes": {}}, {"type": "Line", "id": "276b7aa8-aaeb-4eb9-b233-4ef591196b27", "attributes": {"line_color": {"value": "#F46D43"}, "line_width": {"value": 6}, "x": {"field": "x"}, "line_alpha": {"value": 0.6}, "y": {"field": "y"}}}, {"type": "BasicTicker", "id": "fb7b93f5-57cd-450a-ab2a-b5076dd89874", "attributes": {}}, {"type": "BasicTickFormatter", "id": "dc7d0ee8-b456-4f88-b307-3868ee63cc9c", "attributes": {}}, {"type": "LinearAxis", "id": "fc3931ea-3942-4eac-9753-1c37dcdad229", "attributes": {"ticker": {"type": "BasicTicker", "id": "7714384d-626c-424e-9080-3afdfbeff609"}, "formatter": {"type": "BasicTickFormatter", "id": "b738bfb6-de49-427e-b6e2-9bcabff4dfd5"}, "plot": {"type": "Plot", "id": "999eb18d-4045-4430-98e5-4cdcb602be77"}}}, {"type": "BasicTicker", "id": "7714384d-626c-424e-9080-3afdfbeff609", "attributes": {}}, {"type": "GlyphRenderer", "id": "bf5d21a4-312f-4918-9980-1cb05a5f6711", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "4701ab9e-da79-4a09-aa9a-06b0a20e4fc7"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "276b7aa8-aaeb-4eb9-b233-4ef591196b27"}}}, {"type": "LinearAxis", "id": "3fc8980b-4890-4bf1-bfba-95157a50ca15", "attributes": {"ticker": {"type": "BasicTicker", "id": "fb7b93f5-57cd-450a-ab2a-b5076dd89874"}, "formatter": {"type": "BasicTickFormatter", "id": "dc7d0ee8-b456-4f88-b307-3868ee63cc9c"}, "plot": {"type": "Plot", "id": "999eb18d-4045-4430-98e5-4cdcb602be77"}}}, {"type": "ToolEvents", "id": "e5ad5581-096d-40ef-9223-4082861aa2a8", "attributes": {}}, {"type": "Plot", "id": "999eb18d-4045-4430-98e5-4cdcb602be77", "attributes": {"y_range": {"type": "DataRange1d", "id": "bc845591-0b1f-4dac-8cbb-6d482912ee42"}, "renderers": [{"type": "GlyphRenderer", "id": "bf5d21a4-312f-4918-9980-1cb05a5f6711"}, {"type": "LinearAxis", "id": "fc3931ea-3942-4eac-9753-1c37dcdad229"}, {"type": "LinearAxis", "id": "3fc8980b-4890-4bf1-bfba-95157a50ca15"}, {"type": "Grid", "id": "c84d813c-dcef-4b71-97e0-d9b172ac3df7"}, {"type": "Grid", "id": "b6072cf0-466b-4cd2-9922-b9e0e03221f4"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "3fc8980b-4890-4bf1-bfba-95157a50ca15"}], "x_range": {"type": "DataRange1d", "id": "14728fb4-3356-4e8a-9c2d-3a30a9af6200"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "fc3931ea-3942-4eac-9753-1c37dcdad229"}], "tool_events": {"type": "ToolEvents", "id": "e5ad5581-096d-40ef-9223-4082861aa2a8"}, "toolbar_location": null}}, {"type": "ColumnDataSource", "id": "4701ab9e-da79-4a09-aa9a-06b0a20e4fc7", "attributes": {"data": {"x": [-2.0, -1.8620689655172413, -1.7241379310344827, -1.5862068965517242, -1.4482758620689655, -1.3103448275862069, -1.1724137931034484, -1.0344827586206897, -0.896551724137931, -0.7586206896551724, -0.6206896551724137, -0.48275862068965525, -0.3448275862068966, -0.2068965517241379, -0.06896551724137945, 0.06896551724137945, 0.2068965517241379, 0.34482758620689635, 0.48275862068965525, 0.6206896551724137, 0.7586206896551726, 0.896551724137931, 1.0344827586206895, 1.1724137931034484, 1.3103448275862069, 1.4482758620689653, 1.5862068965517242, 1.7241379310344827, 1.862068965517241, 2.0], "y": [4.0, 3.4673008323424495, 2.9726516052318663, 2.5160523186682524, 2.0975029726516055, 1.7170035671819261, 1.3745541022592156, 1.0701545778834722, 0.8038049940546969, 0.5755053507728893, 0.38525564803804985, 0.23305588585017845, 0.11890606420927469, 0.04280618311533887, 0.004756242568371006, 0.004756242568371006, 0.04280618311533887, 0.11890606420927453, 0.23305588585017845, 0.38525564803804985, 0.5755053507728897, 0.8038049940546969, 1.0701545778834718, 1.3745541022592156, 1.7170035671819261, 2.0975029726516046, 2.5160523186682524, 2.9726516052318663, 3.4673008323424486, 4.0]}, "column_names": ["x", "y"], "callback": null}}], "root_ids": ["999eb18d-4045-4430-98e5-4cdcb602be77"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "7afaf3da-1479-42f3-abb2-a156cc01dec6", "modelid": "999eb18d-4045-4430-98e5-4cdcb602be77", "elementid": "02af447b-b55b-448b-9dcc-323125b819f5"}];
          
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