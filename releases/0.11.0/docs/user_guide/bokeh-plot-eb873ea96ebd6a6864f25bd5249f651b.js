
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
  };var element = document.getElementById("68fac165-bd34-4652-96b4-023388d503f8");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '68fac165-bd34-4652-96b4-023388d503f8' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"c7d4feb7-c652-4070-bdcb-88ea930af610": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "9108b016-86bf-45e6-a9ce-9d400416bb5b", "attributes": {}}, {"type": "Circle", "id": "f1612eef-a246-428f-bf1f-f6fe58a27adb", "attributes": {"line_color": {"value": "#1f77b4"}, "fill_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "line_alpha": {"value": 0.5}, "radius": {"value": 0.3, "units": "data"}, "fill_alpha": {"value": 0.5}}}, {"type": "Grid", "id": "99464628-386f-4569-acaa-30455510993c", "attributes": {"ticker": {"type": "BasicTicker", "id": "1a7d5e0c-b4f0-425e-8846-c5856235e4d0"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "092437e9-f9e4-4288-94e7-e18e69d09263"}}}, {"type": "BasicTicker", "id": "be224992-6491-4e6e-bd6d-ab4b042b134d", "attributes": {}}, {"type": "BasicTickFormatter", "id": "9cce41b2-ab74-48d6-85e9-477c4da8e234", "attributes": {}}, {"type": "GlyphRenderer", "id": "b8255e58-48cf-4b36-b0a0-88160a3de542", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "98c0b9be-ec49-40a9-8efd-4441f3f115a1"}, "nonselection_glyph": {"type": "Circle", "id": "540b7c6c-51ff-4424-a095-f602dfa253b0"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "f1612eef-a246-428f-bf1f-f6fe58a27adb"}}}, {"type": "DataRange1d", "id": "2f57e8c3-bbe0-4d20-ad0f-b48d3ac596a1", "attributes": {"callback": null}}, {"type": "ColumnDataSource", "id": "98c0b9be-ec49-40a9-8efd-4441f3f115a1", "attributes": {"data": {"x": [1.0, 2.5, 3.0, 2.0], "y": [2.0, 3.0, 1.0, 1.5]}, "column_names": ["y", "x"], "callback": null}}, {"type": "ToolEvents", "id": "fa1c6612-10a0-4059-84b2-e2efd1d30c7b", "attributes": {}}, {"type": "DataRange1d", "id": "565b2520-d8bf-4080-8f16-ac50c3bc96ed", "attributes": {"callback": null}}, {"type": "Plot", "id": "092437e9-f9e4-4288-94e7-e18e69d09263", "attributes": {"tools": [{"type": "PanTool", "id": "9e10fa4b-2760-42fd-89b8-9fa651577678"}, {"type": "ResetTool", "id": "fc69ec06-bcfe-48d1-b189-8db3ef13a555"}, {"type": "PreviewSaveTool", "id": "3814d0b2-90c6-4c6e-a2d9-c85a4eac2f50"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "2f57e8c3-bbe0-4d20-ad0f-b48d3ac596a1"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "69f5227f-dd5e-49cd-8d98-cd96b2feebe8"}, {"type": "Grid", "id": "b1f64e14-1ca3-4a89-a69e-34616747745c"}, {"type": "LinearAxis", "id": "00da09dc-ad7d-4778-a956-4c4121911759"}, {"type": "Grid", "id": "99464628-386f-4569-acaa-30455510993c"}, {"type": "GlyphRenderer", "id": "b8255e58-48cf-4b36-b0a0-88160a3de542"}], "left": [{"type": "LinearAxis", "id": "00da09dc-ad7d-4778-a956-4c4121911759"}], "below": [{"type": "LinearAxis", "id": "69f5227f-dd5e-49cd-8d98-cd96b2feebe8"}], "tool_events": {"type": "ToolEvents", "id": "fa1c6612-10a0-4059-84b2-e2efd1d30c7b"}, "x_range": {"type": "DataRange1d", "id": "565b2520-d8bf-4080-8f16-ac50c3bc96ed"}}, "subtype": "Figure"}, {"type": "ResetTool", "id": "fc69ec06-bcfe-48d1-b189-8db3ef13a555", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "092437e9-f9e4-4288-94e7-e18e69d09263"}}}, {"type": "LinearAxis", "id": "00da09dc-ad7d-4778-a956-4c4121911759", "attributes": {"ticker": {"type": "BasicTicker", "id": "1a7d5e0c-b4f0-425e-8846-c5856235e4d0"}, "formatter": {"type": "BasicTickFormatter", "id": "9cce41b2-ab74-48d6-85e9-477c4da8e234"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "092437e9-f9e4-4288-94e7-e18e69d09263"}}}, {"type": "Grid", "id": "b1f64e14-1ca3-4a89-a69e-34616747745c", "attributes": {"ticker": {"type": "BasicTicker", "id": "be224992-6491-4e6e-bd6d-ab4b042b134d"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "092437e9-f9e4-4288-94e7-e18e69d09263"}}}, {"type": "BasicTicker", "id": "1a7d5e0c-b4f0-425e-8846-c5856235e4d0", "attributes": {}}, {"type": "PanTool", "id": "9e10fa4b-2760-42fd-89b8-9fa651577678", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "092437e9-f9e4-4288-94e7-e18e69d09263"}}}, {"type": "LinearAxis", "id": "69f5227f-dd5e-49cd-8d98-cd96b2feebe8", "attributes": {"ticker": {"type": "BasicTicker", "id": "be224992-6491-4e6e-bd6d-ab4b042b134d"}, "formatter": {"type": "BasicTickFormatter", "id": "9108b016-86bf-45e6-a9ce-9d400416bb5b"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "092437e9-f9e4-4288-94e7-e18e69d09263"}}}, {"type": "Circle", "id": "540b7c6c-51ff-4424-a095-f602dfa253b0", "attributes": {"line_color": {"value": "#1f77b4"}, "fill_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "radius": {"value": 0.3, "units": "data"}, "fill_alpha": {"value": 0.1}}}, {"type": "PreviewSaveTool", "id": "3814d0b2-90c6-4c6e-a2d9-c85a4eac2f50", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "092437e9-f9e4-4288-94e7-e18e69d09263"}}}], "root_ids": ["092437e9-f9e4-4288-94e7-e18e69d09263"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "c7d4feb7-c652-4070-bdcb-88ea930af610", "modelid": "092437e9-f9e4-4288-94e7-e18e69d09263", "elementid": "68fac165-bd34-4652-96b4-023388d503f8"}];
          
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