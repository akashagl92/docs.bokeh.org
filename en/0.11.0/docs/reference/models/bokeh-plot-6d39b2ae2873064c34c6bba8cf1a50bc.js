
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
  };var element = document.getElementById("1fae44a4-a8a1-44d4-943d-2f076d46c2ba");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1fae44a4-a8a1-44d4-943d-2f076d46c2ba' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"a59b5d76-31a1-447c-a665-be544ae14c42": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "032bbbe7-c56c-4f97-a837-2f33bc201d97", "attributes": {}}, {"type": "BasicTicker", "id": "ceb52ca1-fa8a-48df-bc8f-71d3859a84b6", "attributes": {}}, {"type": "Grid", "id": "7840af4d-bb80-4e0d-892e-f98d4cf56367", "attributes": {"ticker": {"type": "BasicTicker", "id": "b49dd51b-7e9a-4523-a5a5-be85ea6f42e4"}, "plot": {"type": "Plot", "id": "96e417d3-e8df-41bc-b200-611a00345b01"}}}, {"type": "DataRange1d", "id": "1b3ace36-8d88-47c6-8e4f-26a86cad627d", "attributes": {"callback": null}}, {"type": "Grid", "id": "d13b9776-f11c-4f85-8fb7-b5d353caf38d", "attributes": {"ticker": {"type": "BasicTicker", "id": "ceb52ca1-fa8a-48df-bc8f-71d3859a84b6"}, "dimension": 1, "plot": {"type": "Plot", "id": "96e417d3-e8df-41bc-b200-611a00345b01"}}}, {"type": "ColumnDataSource", "id": "af89fc5b-d01b-4212-8c3f-0236dc0b2ff9", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "r": [0.23333333333333336, 0.275, 0.3166666666666667, 0.35833333333333334, 0.4, 0.4416666666666667, 0.48333333333333334, 0.525, 0.5666666666666667]}, "column_names": ["x", "r", "y"], "callback": null}}, {"type": "DataRange1d", "id": "875482b4-f822-4135-a6ec-250484ed8dee", "attributes": {"callback": null}}, {"type": "ToolEvents", "id": "5eceafea-7f77-4701-811f-7ed10650e6f6", "attributes": {}}, {"type": "BasicTicker", "id": "b49dd51b-7e9a-4523-a5a5-be85ea6f42e4", "attributes": {}}, {"type": "GlyphRenderer", "id": "b490a2bf-f981-419a-8d1f-3c2a2c6e92c3", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "af89fc5b-d01b-4212-8c3f-0236dc0b2ff9"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "AnnularWedge", "id": "8d233f1c-b9ee-4064-961c-83e8c793d73a"}}}, {"type": "BasicTickFormatter", "id": "58aec2b7-9eba-43f8-adb4-8ca80eb5585e", "attributes": {}}, {"type": "LinearAxis", "id": "5f18184a-03dc-4f0e-8a6b-93c876f5ce43", "attributes": {"ticker": {"type": "BasicTicker", "id": "ceb52ca1-fa8a-48df-bc8f-71d3859a84b6"}, "formatter": {"type": "BasicTickFormatter", "id": "032bbbe7-c56c-4f97-a837-2f33bc201d97"}, "plot": {"type": "Plot", "id": "96e417d3-e8df-41bc-b200-611a00345b01"}}}, {"type": "Plot", "id": "96e417d3-e8df-41bc-b200-611a00345b01", "attributes": {"y_range": {"type": "DataRange1d", "id": "1b3ace36-8d88-47c6-8e4f-26a86cad627d"}, "renderers": [{"type": "GlyphRenderer", "id": "b490a2bf-f981-419a-8d1f-3c2a2c6e92c3"}, {"type": "LinearAxis", "id": "cc0e83e3-a2d2-4f75-80e3-8b48e71b704d"}, {"type": "LinearAxis", "id": "5f18184a-03dc-4f0e-8a6b-93c876f5ce43"}, {"type": "Grid", "id": "7840af4d-bb80-4e0d-892e-f98d4cf56367"}, {"type": "Grid", "id": "d13b9776-f11c-4f85-8fb7-b5d353caf38d"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "5f18184a-03dc-4f0e-8a6b-93c876f5ce43"}], "x_range": {"type": "DataRange1d", "id": "875482b4-f822-4135-a6ec-250484ed8dee"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "cc0e83e3-a2d2-4f75-80e3-8b48e71b704d"}], "tool_events": {"type": "ToolEvents", "id": "5eceafea-7f77-4701-811f-7ed10650e6f6"}, "toolbar_location": null}}, {"type": "LinearAxis", "id": "cc0e83e3-a2d2-4f75-80e3-8b48e71b704d", "attributes": {"ticker": {"type": "BasicTicker", "id": "b49dd51b-7e9a-4523-a5a5-be85ea6f42e4"}, "formatter": {"type": "BasicTickFormatter", "id": "58aec2b7-9eba-43f8-adb4-8ca80eb5585e"}, "plot": {"type": "Plot", "id": "96e417d3-e8df-41bc-b200-611a00345b01"}}}, {"type": "AnnularWedge", "id": "8d233f1c-b9ee-4064-961c-83e8c793d73a", "attributes": {"outer_radius": {"units": "data", "field": "r"}, "y": {"field": "y"}, "end_angle": {"value": 4.1, "units": "rad"}, "x": {"field": "x"}, "start_angle": {"value": 0.6, "units": "rad"}, "inner_radius": {"value": 0.2, "units": "data"}, "fill_color": {"value": "#8888ee"}}}], "root_ids": ["96e417d3-e8df-41bc-b200-611a00345b01"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "a59b5d76-31a1-447c-a665-be544ae14c42", "modelid": "96e417d3-e8df-41bc-b200-611a00345b01", "elementid": "1fae44a4-a8a1-44d4-943d-2f076d46c2ba"}];
          
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