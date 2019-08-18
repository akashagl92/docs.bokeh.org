
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
  };var element = document.getElementById("8d690fda-b94f-46ad-9d28-750a0b934dfd");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8d690fda-b94f-46ad-9d28-750a0b934dfd' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"21ae9ba8-3a04-45ae-a601-257d0842e621": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Grid", "id": "1946b2fa-8d1d-443e-9d90-40a8d98e84f1", "attributes": {"ticker": {"type": "BasicTicker", "id": "4ff31b74-9e62-421e-b8ad-3066e975f6a0"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "514aff24-5d88-40b3-9a92-134e0c2d1a7d"}}}, {"type": "Plot", "id": "514aff24-5d88-40b3-9a92-134e0c2d1a7d", "attributes": {"tools": [{"type": "TapTool", "id": "e7ab3df4-9bd8-4ff5-9db9-2d39708e00ec"}], "plot_width": 400, "x_range": {"type": "DataRange1d", "id": "1031db42-02a6-4961-bc97-0c6c3f6f3760"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "f9b03641-7bce-41e3-884c-d709e53b72b9"}, {"type": "Grid", "id": "cd557891-b349-42da-b2e4-dde2098ef8c4"}, {"type": "LinearAxis", "id": "da01fa60-ff1e-4a50-952f-96a546382f80"}, {"type": "Grid", "id": "1946b2fa-8d1d-443e-9d90-40a8d98e84f1"}, {"type": "GlyphRenderer", "id": "d3441c82-2672-4a69-abbe-9e69c62a47c0"}], "y_range": {"type": "DataRange1d", "id": "e9549d9b-61c3-4495-a2bc-e00425d0b554"}, "left": [{"type": "LinearAxis", "id": "da01fa60-ff1e-4a50-952f-96a546382f80"}], "below": [{"type": "LinearAxis", "id": "f9b03641-7bce-41e3-884c-d709e53b72b9"}], "tool_events": {"type": "ToolEvents", "id": "4ef29219-7a5d-4933-b05e-9a9b883bd020"}, "title": "Click the Dots"}, "subtype": "Figure"}, {"type": "Grid", "id": "cd557891-b349-42da-b2e4-dde2098ef8c4", "attributes": {"ticker": {"type": "BasicTicker", "id": "a95e1d1d-08f3-4d15-b8aa-34d9ab516797"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "514aff24-5d88-40b3-9a92-134e0c2d1a7d"}}}, {"type": "LinearAxis", "id": "da01fa60-ff1e-4a50-952f-96a546382f80", "attributes": {"ticker": {"type": "BasicTicker", "id": "4ff31b74-9e62-421e-b8ad-3066e975f6a0"}, "formatter": {"type": "BasicTickFormatter", "id": "4150bd62-a46e-4524-bc52-0aee9cdbd554"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "514aff24-5d88-40b3-9a92-134e0c2d1a7d"}}}, {"type": "OpenURL", "id": "323208f2-453d-494a-af09-7ab159ac6552", "attributes": {"url": "http://www.colors.commutercreative.com/@color/"}}, {"type": "BasicTickFormatter", "id": "8785b9dd-3511-4758-b886-1cee8ff9da79", "attributes": {}}, {"type": "LinearAxis", "id": "f9b03641-7bce-41e3-884c-d709e53b72b9", "attributes": {"ticker": {"type": "BasicTicker", "id": "a95e1d1d-08f3-4d15-b8aa-34d9ab516797"}, "formatter": {"type": "BasicTickFormatter", "id": "8785b9dd-3511-4758-b886-1cee8ff9da79"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "514aff24-5d88-40b3-9a92-134e0c2d1a7d"}}}, {"type": "GlyphRenderer", "id": "d3441c82-2672-4a69-abbe-9e69c62a47c0", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "e3ac4e00-0d61-49c1-886c-6b85a59f818e"}, "nonselection_glyph": {"type": "Circle", "id": "9d9cefe9-671f-4c31-b9f2-2c2a2d396bb6"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "412096f9-62c3-41dc-9c14-e809e843c846"}}}, {"type": "BasicTicker", "id": "a95e1d1d-08f3-4d15-b8aa-34d9ab516797", "attributes": {}}, {"type": "ToolEvents", "id": "4ef29219-7a5d-4933-b05e-9a9b883bd020", "attributes": {}}, {"type": "DataRange1d", "id": "e9549d9b-61c3-4495-a2bc-e00425d0b554", "attributes": {"callback": null}}, {"type": "TapTool", "id": "e7ab3df4-9bd8-4ff5-9db9-2d39708e00ec", "attributes": {"callback": {"type": "OpenURL", "id": "323208f2-453d-494a-af09-7ab159ac6552"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "514aff24-5d88-40b3-9a92-134e0c2d1a7d"}}}, {"type": "Circle", "id": "412096f9-62c3-41dc-9c14-e809e843c846", "attributes": {"line_color": {"field": "color"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"field": "color"}}}, {"type": "Circle", "id": "9d9cefe9-671f-4c31-b9f2-2c2a2d396bb6", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "BasicTickFormatter", "id": "4150bd62-a46e-4524-bc52-0aee9cdbd554", "attributes": {}}, {"type": "BasicTicker", "id": "4ff31b74-9e62-421e-b8ad-3066e975f6a0", "attributes": {}}, {"type": "DataRange1d", "id": "1031db42-02a6-4961-bc97-0c6c3f6f3760", "attributes": {"callback": null}}, {"type": "ColumnDataSource", "id": "e3ac4e00-0d61-49c1-886c-6b85a59f818e", "attributes": {"data": {"color": ["navy", "orange", "olive", "firebrick", "gold"], "x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["color", "x", "y"], "callback": null}}], "root_ids": ["514aff24-5d88-40b3-9a92-134e0c2d1a7d"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "21ae9ba8-3a04-45ae-a601-257d0842e621", "modelid": "514aff24-5d88-40b3-9a92-134e0c2d1a7d", "elementid": "8d690fda-b94f-46ad-9d28-750a0b934dfd"}];
          
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