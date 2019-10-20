
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
  };var element = document.getElementById("7bd501da-b830-4098-9ea3-8ef8293150a8");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7bd501da-b830-4098-9ea3-8ef8293150a8' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"b9580fd5-5874-4906-a9cd-01bf37291085": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "eec67bc3-1e7f-42bf-946f-ea68204fab9a", "attributes": {}}, {"type": "ColumnDataSource", "id": "c4f604b9-bf73-4abe-a6e9-57356179b8f3", "attributes": {"data": {"l": [15.0, 17.5, 20.0, 22.5, 25.0, 27.5, 30.0, 32.5, 35.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["l", "x", "y"], "callback": null}}, {"type": "ToolEvents", "id": "f1a5c8b8-8ac2-42e4-8cb0-3c419b268436", "attributes": {}}, {"type": "LinearAxis", "id": "a7e771cf-31d5-425c-89e5-98d905b17bac", "attributes": {"ticker": {"type": "BasicTicker", "id": "07bd43e4-f5e9-439d-9816-d37b9e86cd53"}, "formatter": {"type": "BasicTickFormatter", "id": "4aa28f30-fbde-43a9-847b-c6b0552c9365"}, "plot": {"type": "Plot", "id": "1a605552-e3e4-4bba-9d54-cbc84d98f2ba"}}}, {"type": "DataRange1d", "id": "9c0337d1-42ad-43a8-b3c5-3a16c25cf43e", "attributes": {"callback": null}}, {"type": "Plot", "id": "1a605552-e3e4-4bba-9d54-cbc84d98f2ba", "attributes": {"y_range": {"type": "DataRange1d", "id": "9c0337d1-42ad-43a8-b3c5-3a16c25cf43e"}, "renderers": [{"type": "GlyphRenderer", "id": "ee492d0f-ca99-48bc-8445-1607ce994490"}, {"type": "LinearAxis", "id": "17fb20ce-5262-41fe-aca0-c6ff5e01684a"}, {"type": "LinearAxis", "id": "a7e771cf-31d5-425c-89e5-98d905b17bac"}, {"type": "Grid", "id": "bc028012-3c74-428b-834b-0ab17ca30fff"}, {"type": "Grid", "id": "6e0568ae-a981-49da-89ab-b679e6dfd460"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "a7e771cf-31d5-425c-89e5-98d905b17bac"}], "x_range": {"type": "DataRange1d", "id": "4ed81f1d-236a-46a2-b359-3800a281df41"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "17fb20ce-5262-41fe-aca0-c6ff5e01684a"}], "tool_events": {"type": "ToolEvents", "id": "f1a5c8b8-8ac2-42e4-8cb0-3c419b268436"}, "toolbar_location": null}}, {"type": "BasicTicker", "id": "07bd43e4-f5e9-439d-9816-d37b9e86cd53", "attributes": {}}, {"type": "DataRange1d", "id": "4ed81f1d-236a-46a2-b359-3800a281df41", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "17fb20ce-5262-41fe-aca0-c6ff5e01684a", "attributes": {"ticker": {"type": "BasicTicker", "id": "4b1ad1dc-8427-4566-b9bf-cac6bdf9a28c"}, "formatter": {"type": "BasicTickFormatter", "id": "eec67bc3-1e7f-42bf-946f-ea68204fab9a"}, "plot": {"type": "Plot", "id": "1a605552-e3e4-4bba-9d54-cbc84d98f2ba"}}}, {"type": "Grid", "id": "bc028012-3c74-428b-834b-0ab17ca30fff", "attributes": {"ticker": {"type": "BasicTicker", "id": "4b1ad1dc-8427-4566-b9bf-cac6bdf9a28c"}, "plot": {"type": "Plot", "id": "1a605552-e3e4-4bba-9d54-cbc84d98f2ba"}}}, {"type": "BasicTicker", "id": "4b1ad1dc-8427-4566-b9bf-cac6bdf9a28c", "attributes": {}}, {"type": "Ray", "id": "99275cab-701a-40df-91b0-538d34e7ac3c", "attributes": {"line_color": {"value": "#fb8072"}, "line_width": {"value": 3}, "y": {"field": "y"}, "angle": {"value": -2.0, "units": "rad"}, "x": {"field": "x"}, "length": {"units": "data", "field": "l"}}}, {"type": "BasicTickFormatter", "id": "4aa28f30-fbde-43a9-847b-c6b0552c9365", "attributes": {}}, {"type": "Grid", "id": "6e0568ae-a981-49da-89ab-b679e6dfd460", "attributes": {"ticker": {"type": "BasicTicker", "id": "07bd43e4-f5e9-439d-9816-d37b9e86cd53"}, "dimension": 1, "plot": {"type": "Plot", "id": "1a605552-e3e4-4bba-9d54-cbc84d98f2ba"}}}, {"type": "GlyphRenderer", "id": "ee492d0f-ca99-48bc-8445-1607ce994490", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "c4f604b9-bf73-4abe-a6e9-57356179b8f3"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Ray", "id": "99275cab-701a-40df-91b0-538d34e7ac3c"}}}], "root_ids": ["1a605552-e3e4-4bba-9d54-cbc84d98f2ba"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "b9580fd5-5874-4906-a9cd-01bf37291085", "modelid": "1a605552-e3e4-4bba-9d54-cbc84d98f2ba", "elementid": "7bd501da-b830-4098-9ea3-8ef8293150a8"}];
          
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