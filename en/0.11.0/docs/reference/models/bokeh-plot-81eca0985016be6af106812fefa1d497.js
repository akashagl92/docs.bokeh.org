
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
  };var element = document.getElementById("b24fdcf9-bc16-48b9-a8cd-2ee1b5324b8f");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b24fdcf9-bc16-48b9-a8cd-2ee1b5324b8f' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"f953bbff-70f4-498d-ad9e-4a4e8a05a141": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Quadratic", "id": "1730fdf3-6fc1-4f00-a132-e28f3a014f5d", "attributes": {"line_color": {"value": "#4DAF4A"}, "cx": {"field": "xp01"}, "line_width": {"value": 3}, "x1": {"field": "xp02"}, "y0": {"field": "y"}, "y1": {"field": "y"}, "cy": {"field": "yp01"}, "x0": {"field": "x"}}}, {"type": "BasicTicker", "id": "7c821f3c-428b-4c0d-a45b-9834003a0055", "attributes": {}}, {"type": "DataRange1d", "id": "8e7803cf-5121-4cf5-ba9c-41c32220413e", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "d52aac48-290f-476f-964f-e401b10bdfa4", "attributes": {}}, {"type": "ToolEvents", "id": "a12dbaca-d8b8-4647-8c89-74380f5da2b2", "attributes": {}}, {"type": "GlyphRenderer", "id": "4598e51b-8c6e-4e1d-a97e-29bf239ab58b", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "1e74f4b1-4e47-4066-8dc6-d17651be14b5"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Quadratic", "id": "1730fdf3-6fc1-4f00-a132-e28f3a014f5d"}}}, {"type": "BasicTickFormatter", "id": "c0abc9a2-f186-414c-9c88-51a435341aed", "attributes": {}}, {"type": "BasicTickFormatter", "id": "eaa900af-d866-42c4-be90-9b9684330cab", "attributes": {}}, {"type": "ColumnDataSource", "id": "1e74f4b1-4e47-4066-8dc6-d17651be14b5", "attributes": {"data": {"yp01": [4.2, 2.45, 1.2, 0.45, 0.2, 0.45, 1.2, 2.45, 4.2], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "xp02": [-1.6, -1.1, -0.6, -0.09999999999999998, 0.4, 0.9, 1.4, 1.9, 2.4], "xp01": [-1.9, -1.4, -0.9, -0.4, 0.1, 0.6, 1.1, 1.6, 2.1]}, "column_names": ["yp01", "xp02", "xp01", "x", "y"], "callback": null}}, {"type": "Plot", "id": "efb36b54-599d-4717-9cc8-1010ed839499", "attributes": {"y_range": {"type": "DataRange1d", "id": "8e7803cf-5121-4cf5-ba9c-41c32220413e"}, "renderers": [{"type": "GlyphRenderer", "id": "4598e51b-8c6e-4e1d-a97e-29bf239ab58b"}, {"type": "LinearAxis", "id": "83208668-4cd5-44d8-862b-b3df22e696be"}, {"type": "LinearAxis", "id": "7498dc4d-dae3-463b-adbe-0ab122bb7b2a"}, {"type": "Grid", "id": "e8add543-3936-4782-8baa-c7556df4ad66"}, {"type": "Grid", "id": "4cbc8cda-67a6-43cb-b366-90c80d48f4cf"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "7498dc4d-dae3-463b-adbe-0ab122bb7b2a"}], "x_range": {"type": "DataRange1d", "id": "db2261ec-78ac-4c56-8453-f5469d07dc94"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "83208668-4cd5-44d8-862b-b3df22e696be"}], "tool_events": {"type": "ToolEvents", "id": "a12dbaca-d8b8-4647-8c89-74380f5da2b2"}, "toolbar_location": null}}, {"type": "DataRange1d", "id": "db2261ec-78ac-4c56-8453-f5469d07dc94", "attributes": {"callback": null}}, {"type": "Grid", "id": "4cbc8cda-67a6-43cb-b366-90c80d48f4cf", "attributes": {"ticker": {"type": "BasicTicker", "id": "7c821f3c-428b-4c0d-a45b-9834003a0055"}, "dimension": 1, "plot": {"type": "Plot", "id": "efb36b54-599d-4717-9cc8-1010ed839499"}}}, {"type": "LinearAxis", "id": "7498dc4d-dae3-463b-adbe-0ab122bb7b2a", "attributes": {"ticker": {"type": "BasicTicker", "id": "7c821f3c-428b-4c0d-a45b-9834003a0055"}, "formatter": {"type": "BasicTickFormatter", "id": "eaa900af-d866-42c4-be90-9b9684330cab"}, "plot": {"type": "Plot", "id": "efb36b54-599d-4717-9cc8-1010ed839499"}}}, {"type": "Grid", "id": "e8add543-3936-4782-8baa-c7556df4ad66", "attributes": {"ticker": {"type": "BasicTicker", "id": "d52aac48-290f-476f-964f-e401b10bdfa4"}, "plot": {"type": "Plot", "id": "efb36b54-599d-4717-9cc8-1010ed839499"}}}, {"type": "LinearAxis", "id": "83208668-4cd5-44d8-862b-b3df22e696be", "attributes": {"ticker": {"type": "BasicTicker", "id": "d52aac48-290f-476f-964f-e401b10bdfa4"}, "formatter": {"type": "BasicTickFormatter", "id": "c0abc9a2-f186-414c-9c88-51a435341aed"}, "plot": {"type": "Plot", "id": "efb36b54-599d-4717-9cc8-1010ed839499"}}}], "root_ids": ["efb36b54-599d-4717-9cc8-1010ed839499"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "f953bbff-70f4-498d-ad9e-4a4e8a05a141", "modelid": "efb36b54-599d-4717-9cc8-1010ed839499", "elementid": "b24fdcf9-bc16-48b9-a8cd-2ee1b5324b8f"}];
          
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