
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
  };var element = document.getElementById("f0af7413-df62-48d8-8158-fe8d3ef046ac");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f0af7413-df62-48d8-8158-fe8d3ef046ac' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"a0df5043-9874-4be4-a22e-f9e2217037f0": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Patch", "id": "bbaa11e3-823e-44e3-a33a-02995e9ccadc", "attributes": {"x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#a6cee3"}}}, {"type": "GlyphRenderer", "id": "c1938a2c-913d-4e3b-8c15-0378bb667c43", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "93276e23-e186-45d7-8b64-f56f6f5478fa"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Patch", "id": "bbaa11e3-823e-44e3-a33a-02995e9ccadc"}}}, {"type": "DataRange1d", "id": "439578a9-b2ca-4864-b0be-aeb1799d12ca", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "278910ff-df24-4f8c-bb1a-4ea1cde31bba", "attributes": {}}, {"type": "Grid", "id": "c5c25d17-a069-45ed-97ef-d4b353624e91", "attributes": {"ticker": {"type": "BasicTicker", "id": "0f9b027e-419d-43c3-92a3-93509e53f7d1"}, "dimension": 1, "plot": {"type": "Plot", "id": "fcf7582e-28d1-45e3-b67f-20a5b0f76850"}}}, {"type": "BasicTicker", "id": "9271fec7-cf14-4226-841e-42d53decb80a", "attributes": {}}, {"type": "Grid", "id": "5286f645-c7ab-4c68-ba70-5d97185d58bf", "attributes": {"ticker": {"type": "BasicTicker", "id": "9271fec7-cf14-4226-841e-42d53decb80a"}, "plot": {"type": "Plot", "id": "fcf7582e-28d1-45e3-b67f-20a5b0f76850"}}}, {"type": "BasicTicker", "id": "0f9b027e-419d-43c3-92a3-93509e53f7d1", "attributes": {}}, {"type": "BasicTickFormatter", "id": "6c3b349f-55ae-4994-b576-a0bb0f04a8c2", "attributes": {}}, {"type": "LinearAxis", "id": "81ea9ec1-b3d7-4bd1-bd38-718cc82c0ce1", "attributes": {"ticker": {"type": "BasicTicker", "id": "0f9b027e-419d-43c3-92a3-93509e53f7d1"}, "formatter": {"type": "BasicTickFormatter", "id": "6c3b349f-55ae-4994-b576-a0bb0f04a8c2"}, "plot": {"type": "Plot", "id": "fcf7582e-28d1-45e3-b67f-20a5b0f76850"}}}, {"type": "ToolEvents", "id": "a71e7918-6ab9-4162-9c7b-c2518ab44793", "attributes": {}}, {"type": "LinearAxis", "id": "bdef5d29-4315-4035-8604-4878d3d0f2af", "attributes": {"ticker": {"type": "BasicTicker", "id": "9271fec7-cf14-4226-841e-42d53decb80a"}, "formatter": {"type": "BasicTickFormatter", "id": "278910ff-df24-4f8c-bb1a-4ea1cde31bba"}, "plot": {"type": "Plot", "id": "fcf7582e-28d1-45e3-b67f-20a5b0f76850"}}}, {"type": "Plot", "id": "fcf7582e-28d1-45e3-b67f-20a5b0f76850", "attributes": {"y_range": {"type": "DataRange1d", "id": "439578a9-b2ca-4864-b0be-aeb1799d12ca"}, "renderers": [{"type": "GlyphRenderer", "id": "c1938a2c-913d-4e3b-8c15-0378bb667c43"}, {"type": "LinearAxis", "id": "bdef5d29-4315-4035-8604-4878d3d0f2af"}, {"type": "LinearAxis", "id": "81ea9ec1-b3d7-4bd1-bd38-718cc82c0ce1"}, {"type": "Grid", "id": "5286f645-c7ab-4c68-ba70-5d97185d58bf"}, {"type": "Grid", "id": "c5c25d17-a069-45ed-97ef-d4b353624e91"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "81ea9ec1-b3d7-4bd1-bd38-718cc82c0ce1"}], "x_range": {"type": "DataRange1d", "id": "856eef7a-795c-4079-b6df-7fc158a2f51e"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "bdef5d29-4315-4035-8604-4878d3d0f2af"}], "tool_events": {"type": "ToolEvents", "id": "a71e7918-6ab9-4162-9c7b-c2518ab44793"}, "toolbar_location": null}}, {"type": "ColumnDataSource", "id": "93276e23-e186-45d7-8b64-f56f6f5478fa", "attributes": {"data": {"x": [-2.0, -1.8620689655172413, -1.7241379310344827, -1.5862068965517242, -1.4482758620689655, -1.3103448275862069, -1.1724137931034484, -1.0344827586206897, -0.896551724137931, -0.7586206896551724, -0.6206896551724137, -0.48275862068965525, -0.3448275862068966, -0.2068965517241379, -0.06896551724137945, 0.06896551724137945, 0.2068965517241379, 0.34482758620689635, 0.48275862068965525, 0.6206896551724137, 0.7586206896551726, 0.896551724137931, 1.0344827586206895, 1.1724137931034484, 1.3103448275862069, 1.4482758620689653, 1.5862068965517242, 1.7241379310344827, 1.862068965517241, 2.0, 2.0, 1.862068965517241, 1.7241379310344827, 1.5862068965517242, 1.4482758620689653, 1.3103448275862069, 1.1724137931034484, 1.0344827586206895, 0.896551724137931, 0.7586206896551726, 0.6206896551724137, 0.48275862068965525, 0.34482758620689635, 0.2068965517241379, 0.06896551724137945, -0.06896551724137945, -0.2068965517241379, -0.3448275862068966, -0.48275862068965525, -0.6206896551724137, -0.7586206896551724, -0.896551724137931, -1.0344827586206897, -1.1724137931034484, -1.3103448275862069, -1.4482758620689655, -1.5862068965517242, -1.7241379310344827, -1.8620689655172413, -2.0], "y": [4.0, 3.4673008323424495, 2.9726516052318663, 2.5160523186682524, 2.0975029726516055, 1.7170035671819261, 1.3745541022592156, 1.0701545778834722, 0.8038049940546969, 0.5755053507728893, 0.38525564803804985, 0.23305588585017845, 0.11890606420927469, 0.04280618311533887, 0.004756242568371006, 0.004756242568371006, 0.04280618311533887, 0.11890606420927453, 0.23305588585017845, 0.38525564803804985, 0.5755053507728897, 0.8038049940546969, 1.0701545778834718, 1.3745541022592156, 1.7170035671819261, 2.0975029726516046, 2.5160523186682524, 2.9726516052318663, 3.4673008323424486, 4.0, 8.2, 7.52936979785969, 6.896789536266349, 6.302259215219976, 5.74577883472057, 5.227348394768133, 4.746967895362664, 4.304637336504161, 3.900356718192628, 3.5341260404280623, 3.2059453032104637, 2.9158145065398338, 2.6637336504161713, 2.449702734839477, 2.2737217598097508, 2.135790725326992, 2.0359096313912013, 1.9740784780023783, 1.9502972651605233, 1.9645659928656363, 2.016884661117717, 2.107253269916766, 2.235671819262783, 2.4021403091557674, 2.6066587395957193, 2.84922711058264, 3.1298454221165284, 3.448513674197384, 3.805231866825208, 4.2]}, "column_names": ["x", "y"], "callback": null}}, {"type": "DataRange1d", "id": "856eef7a-795c-4079-b6df-7fc158a2f51e", "attributes": {"callback": null}}], "root_ids": ["fcf7582e-28d1-45e3-b67f-20a5b0f76850"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "a0df5043-9874-4be4-a22e-f9e2217037f0", "modelid": "fcf7582e-28d1-45e3-b67f-20a5b0f76850", "elementid": "f0af7413-df62-48d8-8158-fe8d3ef046ac"}];
          
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