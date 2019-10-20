
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
  };var element = document.getElementById("6a0d5e0b-c015-4125-aaf0-530fb341fb67");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6a0d5e0b-c015-4125-aaf0-530fb341fb67' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"e0a34c8b-209c-4b61-b233-848a9bbbe840": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Wedge", "id": "94979ca2-15e9-45d9-a18a-cf5006dd8c34", "attributes": {"y": {"field": "y"}, "radius": {"units": "data", "field": "r"}, "end_angle": {"value": 4.1, "units": "rad"}, "x": {"field": "x"}, "start_angle": {"value": 0.6, "units": "rad"}, "fill_color": {"value": "#B3DE69"}}}, {"type": "DataRange1d", "id": "6b5a604e-1501-44c5-a498-267a7c34e365", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "b3afa6d7-a7f9-45e9-b2df-5b2722fee1d8", "attributes": {}}, {"type": "Grid", "id": "643de0ef-b814-4a9a-99ac-6929099506d4", "attributes": {"ticker": {"type": "BasicTicker", "id": "b3afa6d7-a7f9-45e9-b2df-5b2722fee1d8"}, "dimension": 1, "plot": {"type": "Plot", "id": "a7b4f062-d21b-4c1b-b02c-f0065c1bf945"}}}, {"type": "BasicTicker", "id": "552e6f85-e004-41fd-a3d0-bd76569151b0", "attributes": {}}, {"type": "Grid", "id": "cf89b15b-fb6c-459f-8c9f-ab2df3b49d45", "attributes": {"ticker": {"type": "BasicTicker", "id": "552e6f85-e004-41fd-a3d0-bd76569151b0"}, "plot": {"type": "Plot", "id": "a7b4f062-d21b-4c1b-b02c-f0065c1bf945"}}}, {"type": "BasicTickFormatter", "id": "ee929098-d0bc-489b-8b49-f4647ffacd08", "attributes": {}}, {"type": "ToolEvents", "id": "cd4d2e54-4f1a-4cbb-bb6a-7e7f17022be2", "attributes": {}}, {"type": "LinearAxis", "id": "58a53996-dccd-4aec-b578-5bbb2ddf3b4d", "attributes": {"ticker": {"type": "BasicTicker", "id": "552e6f85-e004-41fd-a3d0-bd76569151b0"}, "formatter": {"type": "BasicTickFormatter", "id": "ee929098-d0bc-489b-8b49-f4647ffacd08"}, "plot": {"type": "Plot", "id": "a7b4f062-d21b-4c1b-b02c-f0065c1bf945"}}}, {"type": "GlyphRenderer", "id": "28139afe-4bee-494c-bfec-0111dd05633e", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "80204da4-02a8-44d1-ab38-fe00bb06d468"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Wedge", "id": "94979ca2-15e9-45d9-a18a-cf5006dd8c34"}}}, {"type": "BasicTickFormatter", "id": "c7813059-2f69-41a1-a8a1-ef1dc91474dc", "attributes": {}}, {"type": "LinearAxis", "id": "46012d80-e346-4836-aa60-7ca566495995", "attributes": {"ticker": {"type": "BasicTicker", "id": "b3afa6d7-a7f9-45e9-b2df-5b2722fee1d8"}, "formatter": {"type": "BasicTickFormatter", "id": "c7813059-2f69-41a1-a8a1-ef1dc91474dc"}, "plot": {"type": "Plot", "id": "a7b4f062-d21b-4c1b-b02c-f0065c1bf945"}}}, {"type": "Plot", "id": "a7b4f062-d21b-4c1b-b02c-f0065c1bf945", "attributes": {"y_range": {"type": "DataRange1d", "id": "6b5a604e-1501-44c5-a498-267a7c34e365"}, "renderers": [{"type": "GlyphRenderer", "id": "28139afe-4bee-494c-bfec-0111dd05633e"}, {"type": "LinearAxis", "id": "58a53996-dccd-4aec-b578-5bbb2ddf3b4d"}, {"type": "LinearAxis", "id": "46012d80-e346-4836-aa60-7ca566495995"}, {"type": "Grid", "id": "cf89b15b-fb6c-459f-8c9f-ab2df3b49d45"}, {"type": "Grid", "id": "643de0ef-b814-4a9a-99ac-6929099506d4"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "46012d80-e346-4836-aa60-7ca566495995"}], "x_range": {"type": "DataRange1d", "id": "9fdc54fd-833e-42b2-a44a-b9b5ed19c39f"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "58a53996-dccd-4aec-b578-5bbb2ddf3b4d"}], "tool_events": {"type": "ToolEvents", "id": "cd4d2e54-4f1a-4cbb-bb6a-7e7f17022be2"}, "toolbar_location": null}}, {"type": "ColumnDataSource", "id": "80204da4-02a8-44d1-ab38-fe00bb06d468", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "r": [0.16666666666666666, 0.19999999999999998, 0.23333333333333334, 0.26666666666666666, 0.3, 0.3333333333333333, 0.36666666666666664, 0.4, 0.43333333333333335]}, "column_names": ["x", "r", "y"], "callback": null}}, {"type": "DataRange1d", "id": "9fdc54fd-833e-42b2-a44a-b9b5ed19c39f", "attributes": {"callback": null}}], "root_ids": ["a7b4f062-d21b-4c1b-b02c-f0065c1bf945"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "e0a34c8b-209c-4b61-b233-848a9bbbe840", "modelid": "a7b4f062-d21b-4c1b-b02c-f0065c1bf945", "elementid": "6a0d5e0b-c015-4125-aaf0-530fb341fb67"}];
          
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