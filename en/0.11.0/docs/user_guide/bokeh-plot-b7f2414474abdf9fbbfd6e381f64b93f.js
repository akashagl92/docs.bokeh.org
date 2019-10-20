
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
  };var element = document.getElementById("6827aab2-bd3f-47c8-b8a1-ba5a878f0efa");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6827aab2-bd3f-47c8-b8a1-ba5a878f0efa' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"323dfd95-cdfa-4c31-98d0-4db039b3aadb": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "73082fcc-5887-4a2a-bd44-db1af866fd39", "attributes": {}}, {"type": "BasicTicker", "id": "e409e921-932a-408c-99a2-77c0a8592f75", "attributes": {}}, {"type": "BasicTicker", "id": "259a2b20-d957-4c6d-bc54-91de1831737d", "attributes": {}}, {"type": "LinearAxis", "id": "773069d9-a528-492c-a18e-39b611912451", "attributes": {"ticker": {"type": "BasicTicker", "id": "e409e921-932a-408c-99a2-77c0a8592f75"}, "formatter": {"type": "BasicTickFormatter", "id": "daf4f50b-bb32-4761-b2fe-d578ee7543f6"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b4a3404f-104c-4c90-b743-f9258ffd349c"}}}, {"type": "Range1d", "id": "fd9ad525-b4ef-4403-90fc-fb1387401736", "attributes": {"callback": null}}, {"type": "CustomJS", "id": "79c72b34-bcfa-460b-afb8-96ba1bf7f837", "attributes": {"code": "\n        // get data source from Callback args\n        var data = source.get('data');\n\n        /// get BoxSelectTool dimensions from cb_data parameter of Callback\n        var geometry = cb_data['geometry'];\n\n        /// calculate Rect attributes\n        var width = geometry['x1'] - geometry['x0'];\n        var height = geometry['y1'] - geometry['y0'];\n        var x = geometry['x0'] + width/2;\n        var y = geometry['y0'] + height/2;\n\n        /// update data source with new Rect attributes\n        data['x'].push(x);\n        data['y'].push(y);\n        data['width'].push(width);\n        data['height'].push(height);\n\n        // trigger update of data source\n        source.trigger('change');\n    ", "args": {"source": {"type": "ColumnDataSource", "id": "24ffca9c-d9b0-4ff8-8e3d-88adf2eaeec1"}}}}, {"type": "ColumnDataSource", "id": "24ffca9c-d9b0-4ff8-8e3d-88adf2eaeec1", "attributes": {"data": {"height": [], "width": [], "x": [], "y": []}, "column_names": ["height", "width", "x", "y"], "callback": null}}, {"type": "Grid", "id": "34bb864a-45ec-47a4-9ddc-e0d1b079798a", "attributes": {"ticker": {"type": "BasicTicker", "id": "e409e921-932a-408c-99a2-77c0a8592f75"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b4a3404f-104c-4c90-b743-f9258ffd349c"}}}, {"type": "ToolEvents", "id": "14dcf9f3-34dc-47e3-8482-2176f4b0b4cb", "attributes": {}}, {"type": "Rect", "id": "f7dfe182-f102-451e-a3fc-dead5402835b", "attributes": {"width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"value": "#009933"}, "fill_alpha": {"value": 0.3}}}, {"type": "BoxAnnotation", "id": "6adb0441-6559-4d2a-ba82-abf724ab1fca", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "GlyphRenderer", "id": "64509fcb-e160-4209-b94a-2a9401130e15", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "24ffca9c-d9b0-4ff8-8e3d-88adf2eaeec1"}, "nonselection_glyph": {"type": "Rect", "id": "f7dfe182-f102-451e-a3fc-dead5402835b"}, "selection_glyph": {"type": "Rect", "id": "f7dfe182-f102-451e-a3fc-dead5402835b"}, "hover_glyph": null, "glyph": {"type": "Rect", "id": "f7dfe182-f102-451e-a3fc-dead5402835b"}}}, {"type": "Plot", "id": "b4a3404f-104c-4c90-b743-f9258ffd349c", "attributes": {"tools": [{"type": "BoxSelectTool", "id": "b3f76ada-175d-400e-bf9b-310d409e6a7a"}], "plot_width": 400, "x_range": {"type": "Range1d", "id": "4f77588b-e6ff-4792-93b8-43e57692e64e"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "773069d9-a528-492c-a18e-39b611912451"}, {"type": "Grid", "id": "34bb864a-45ec-47a4-9ddc-e0d1b079798a"}, {"type": "LinearAxis", "id": "6f451de7-43ab-442b-819d-c34e5056f951"}, {"type": "Grid", "id": "a80dca2f-8485-476b-b9fc-94f74843651e"}, {"type": "BoxAnnotation", "id": "6adb0441-6559-4d2a-ba82-abf724ab1fca"}, {"type": "GlyphRenderer", "id": "64509fcb-e160-4209-b94a-2a9401130e15"}], "y_range": {"type": "Range1d", "id": "fd9ad525-b4ef-4403-90fc-fb1387401736"}, "left": [{"type": "LinearAxis", "id": "6f451de7-43ab-442b-819d-c34e5056f951"}], "below": [{"type": "LinearAxis", "id": "773069d9-a528-492c-a18e-39b611912451"}], "tool_events": {"type": "ToolEvents", "id": "14dcf9f3-34dc-47e3-8482-2176f4b0b4cb"}, "title": "Select Below"}, "subtype": "Figure"}, {"type": "Grid", "id": "a80dca2f-8485-476b-b9fc-94f74843651e", "attributes": {"ticker": {"type": "BasicTicker", "id": "259a2b20-d957-4c6d-bc54-91de1831737d"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "b4a3404f-104c-4c90-b743-f9258ffd349c"}}}, {"type": "BasicTickFormatter", "id": "daf4f50b-bb32-4761-b2fe-d578ee7543f6", "attributes": {}}, {"type": "Range1d", "id": "4f77588b-e6ff-4792-93b8-43e57692e64e", "attributes": {"callback": null}}, {"type": "BoxSelectTool", "id": "b3f76ada-175d-400e-bf9b-310d409e6a7a", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "6adb0441-6559-4d2a-ba82-abf724ab1fca"}, "callback": {"type": "CustomJS", "id": "79c72b34-bcfa-460b-afb8-96ba1bf7f837"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b4a3404f-104c-4c90-b743-f9258ffd349c"}}}, {"type": "LinearAxis", "id": "6f451de7-43ab-442b-819d-c34e5056f951", "attributes": {"ticker": {"type": "BasicTicker", "id": "259a2b20-d957-4c6d-bc54-91de1831737d"}, "formatter": {"type": "BasicTickFormatter", "id": "73082fcc-5887-4a2a-bd44-db1af866fd39"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b4a3404f-104c-4c90-b743-f9258ffd349c"}}}], "root_ids": ["b4a3404f-104c-4c90-b743-f9258ffd349c"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "323dfd95-cdfa-4c31-98d0-4db039b3aadb", "modelid": "b4a3404f-104c-4c90-b743-f9258ffd349c", "elementid": "6827aab2-bd3f-47c8-b8a1-ba5a878f0efa"}];
          
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