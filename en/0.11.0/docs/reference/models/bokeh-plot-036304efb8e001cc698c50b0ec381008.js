
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
  };var element = document.getElementById("8215abf2-5ccc-4c11-9fb0-1b0d69050e13");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8215abf2-5ccc-4c11-9fb0-1b0d69050e13' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"3069cc6b-c7ce-4ddc-b6c8-4063fcdd82b0": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "9fe2e2ce-8dfc-481d-9fc5-2f0bd0a92981", "attributes": {}}, {"type": "GlyphRenderer", "id": "82c53e8e-add5-4100-91aa-52001bc00b33", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "7cd64d1e-c95b-4878-97d6-8ed972212b22"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "b9ea61da-b71a-4d31-94ff-b199a51f8a7e"}}}, {"type": "Grid", "id": "8a83e3b5-1497-480a-b407-6375af74dc81", "attributes": {"ticker": {"type": "BasicTicker", "id": "0cced7dd-a4f7-48e5-be7f-5d7ee2d82215"}, "plot": {"type": "Plot", "id": "71f7653c-6637-4221-80f1-ac674b3dd917"}}}, {"type": "Grid", "id": "4e37257b-4adb-436c-a8df-0bc143b96a46", "attributes": {"ticker": {"type": "BasicTicker", "id": "db79ed4d-b8aa-48b5-953e-1add304bdcd0"}, "dimension": 1, "plot": {"type": "Plot", "id": "71f7653c-6637-4221-80f1-ac674b3dd917"}}}, {"type": "DataRange1d", "id": "ed5bce8f-dc49-45a7-90be-2383a2b8daaf", "attributes": {"callback": null}}, {"type": "DataRange1d", "id": "775de9d1-8679-4822-a222-3be760f5824a", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "0bba1421-d472-458a-8670-e0470b3c9eaa", "attributes": {}}, {"type": "ToolEvents", "id": "39401b2b-bbe4-432e-ad19-fc91623cbcfd", "attributes": {}}, {"type": "BasicTicker", "id": "0cced7dd-a4f7-48e5-be7f-5d7ee2d82215", "attributes": {}}, {"type": "LinearAxis", "id": "b9e3870e-eb4d-4638-a8a8-5318fa0a79c1", "attributes": {"ticker": {"type": "BasicTicker", "id": "0cced7dd-a4f7-48e5-be7f-5d7ee2d82215"}, "formatter": {"type": "BasicTickFormatter", "id": "0bba1421-d472-458a-8670-e0470b3c9eaa"}, "plot": {"type": "Plot", "id": "71f7653c-6637-4221-80f1-ac674b3dd917"}}}, {"type": "Plot", "id": "71f7653c-6637-4221-80f1-ac674b3dd917", "attributes": {"y_range": {"type": "DataRange1d", "id": "775de9d1-8679-4822-a222-3be760f5824a"}, "renderers": [{"type": "GlyphRenderer", "id": "82c53e8e-add5-4100-91aa-52001bc00b33"}, {"type": "LinearAxis", "id": "b9e3870e-eb4d-4638-a8a8-5318fa0a79c1"}, {"type": "LinearAxis", "id": "b1c7d7db-0138-494b-9c2d-782cb84a6a26"}, {"type": "Grid", "id": "8a83e3b5-1497-480a-b407-6375af74dc81"}, {"type": "Grid", "id": "4e37257b-4adb-436c-a8df-0bc143b96a46"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "b1c7d7db-0138-494b-9c2d-782cb84a6a26"}], "x_range": {"type": "DataRange1d", "id": "ed5bce8f-dc49-45a7-90be-2383a2b8daaf"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "b9e3870e-eb4d-4638-a8a8-5318fa0a79c1"}], "tool_events": {"type": "ToolEvents", "id": "39401b2b-bbe4-432e-ad19-fc91623cbcfd"}, "toolbar_location": null}}, {"type": "ColumnDataSource", "id": "7cd64d1e-c95b-4878-97d6-8ed972212b22", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "sizes", "y"], "callback": null}}, {"type": "BasicTicker", "id": "db79ed4d-b8aa-48b5-953e-1add304bdcd0", "attributes": {}}, {"type": "Circle", "id": "b9ea61da-b71a-4d31-94ff-b199a51f8a7e", "attributes": {"line_color": {"value": "#3288Bd"}, "line_width": {"value": 3}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "sizes"}, "fill_color": {"value": "white"}}}, {"type": "LinearAxis", "id": "b1c7d7db-0138-494b-9c2d-782cb84a6a26", "attributes": {"ticker": {"type": "BasicTicker", "id": "db79ed4d-b8aa-48b5-953e-1add304bdcd0"}, "formatter": {"type": "BasicTickFormatter", "id": "9fe2e2ce-8dfc-481d-9fc5-2f0bd0a92981"}, "plot": {"type": "Plot", "id": "71f7653c-6637-4221-80f1-ac674b3dd917"}}}], "root_ids": ["71f7653c-6637-4221-80f1-ac674b3dd917"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "3069cc6b-c7ce-4ddc-b6c8-4063fcdd82b0", "modelid": "71f7653c-6637-4221-80f1-ac674b3dd917", "elementid": "8215abf2-5ccc-4c11-9fb0-1b0d69050e13"}];
          
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