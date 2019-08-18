
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
  };var element = document.getElementById("70173414-016f-4c31-9bf4-6d26db54b241");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '70173414-016f-4c31-9bf4-6d26db54b241' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"7ebffb06-2dc6-4543-94e1-4cb25d8700c9": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ToolEvents", "id": "e97376a6-06a1-4cd2-a467-306506c33ae7", "attributes": {}}, {"type": "BasicTickFormatter", "id": "78486283-23a5-4e47-acaf-3ddeb52d579c", "attributes": {}}, {"type": "LinearAxis", "id": "d3a2aebe-0750-4963-80d3-a36f125b29b5", "attributes": {"ticker": {"type": "BasicTicker", "id": "35eda0b6-c526-440f-b820-2c1cb4b86abf"}, "formatter": {"type": "BasicTickFormatter", "id": "78486283-23a5-4e47-acaf-3ddeb52d579c"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d0b6ff4f-99e5-43e6-9166-78f77bca99e7"}}}, {"type": "Plot", "id": "d0b6ff4f-99e5-43e6-9166-78f77bca99e7", "attributes": {"tools": [{"type": "PanTool", "id": "6b6d67f8-8ebf-4252-a965-b3f25b46382e"}, {"type": "WheelZoomTool", "id": "5264dd5b-ce04-400b-9e66-0ff9570395a1"}, {"type": "BoxZoomTool", "id": "81771026-eac7-4b65-90dd-3af29671ddf5"}, {"type": "PreviewSaveTool", "id": "34875859-7b29-4d28-a597-1b0274bdd107"}, {"type": "ResizeTool", "id": "23bbcdd2-b5d3-4470-b783-da284f69d88e"}, {"type": "ResetTool", "id": "dc096588-2178-4a5c-9066-2e870fe71341"}, {"type": "HelpTool", "id": "36b162db-3e80-40e5-a2fd-ffbe09180644"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "ca8985f3-d23a-43de-a36e-97047a30ef7c"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "b8508d81-6622-4163-af5f-7f06ab95c7f2"}, {"type": "Grid", "id": "b58c1e21-a474-4e75-b4b7-8440306b19a7"}, {"type": "LinearAxis", "id": "d3a2aebe-0750-4963-80d3-a36f125b29b5"}, {"type": "Grid", "id": "49f69910-8d0a-4ed0-a56b-6c91651afddf"}, {"type": "BoxAnnotation", "id": "bf60d58d-5e56-4555-a8c4-6fb437270e9d"}, {"type": "GlyphRenderer", "id": "24a49350-3059-40bd-8654-c51fb8290c7d"}], "left": [{"type": "LinearAxis", "id": "d3a2aebe-0750-4963-80d3-a36f125b29b5"}], "below": [{"type": "LinearAxis", "id": "b8508d81-6622-4163-af5f-7f06ab95c7f2"}], "tool_events": {"type": "ToolEvents", "id": "e97376a6-06a1-4cd2-a467-306506c33ae7"}, "x_range": {"type": "DataRange1d", "id": "213131bb-dc21-4741-b47e-31cf1a6bc61f"}}, "subtype": "Figure"}, {"type": "WheelZoomTool", "id": "5264dd5b-ce04-400b-9e66-0ff9570395a1", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d0b6ff4f-99e5-43e6-9166-78f77bca99e7"}}}, {"type": "BoxAnnotation", "id": "bf60d58d-5e56-4555-a8c4-6fb437270e9d", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "7b598ae8-1659-424b-9b5d-52c41f1a1a7e", "attributes": {}}, {"type": "HelpTool", "id": "36b162db-3e80-40e5-a2fd-ffbe09180644", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d0b6ff4f-99e5-43e6-9166-78f77bca99e7"}}}, {"type": "Wedge", "id": "c9999de8-cff8-4fce-9929-8e4a264dc113", "attributes": {"line_color": {"value": "#1f77b4"}, "direction": "clock", "y": {"field": "y"}, "radius": {"value": 0.2, "units": "data"}, "end_angle": {"value": 4.8, "units": "rad"}, "x": {"field": "x"}, "start_angle": {"value": 0.4, "units": "rad"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "Wedge", "id": "83e4d596-7df4-4d76-ada5-baaa067919a1", "attributes": {"line_color": {"value": "firebrick"}, "direction": "clock", "y": {"field": "y"}, "radius": {"value": 0.2, "units": "data"}, "end_angle": {"value": 4.8, "units": "rad"}, "x": {"field": "x"}, "start_angle": {"value": 0.4, "units": "rad"}, "line_alpha": {"value": 0.6}, "fill_color": {"value": "firebrick"}, "fill_alpha": {"value": 0.6}}}, {"type": "ColumnDataSource", "id": "5f79f549-74b0-4bdc-b396-7ba33588ded9", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["y", "x"], "callback": null}}, {"type": "DataRange1d", "id": "213131bb-dc21-4741-b47e-31cf1a6bc61f", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "35eda0b6-c526-440f-b820-2c1cb4b86abf", "attributes": {}}, {"type": "Grid", "id": "49f69910-8d0a-4ed0-a56b-6c91651afddf", "attributes": {"ticker": {"type": "BasicTicker", "id": "35eda0b6-c526-440f-b820-2c1cb4b86abf"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "d0b6ff4f-99e5-43e6-9166-78f77bca99e7"}}}, {"type": "Grid", "id": "b58c1e21-a474-4e75-b4b7-8440306b19a7", "attributes": {"ticker": {"type": "BasicTicker", "id": "7b598ae8-1659-424b-9b5d-52c41f1a1a7e"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d0b6ff4f-99e5-43e6-9166-78f77bca99e7"}}}, {"type": "BasicTickFormatter", "id": "1cb81a73-1472-4331-8e3b-10258637f5a2", "attributes": {}}, {"type": "ResizeTool", "id": "23bbcdd2-b5d3-4470-b783-da284f69d88e", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d0b6ff4f-99e5-43e6-9166-78f77bca99e7"}}}, {"type": "DataRange1d", "id": "ca8985f3-d23a-43de-a36e-97047a30ef7c", "attributes": {"callback": null}}, {"type": "ResetTool", "id": "dc096588-2178-4a5c-9066-2e870fe71341", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d0b6ff4f-99e5-43e6-9166-78f77bca99e7"}}}, {"type": "LinearAxis", "id": "b8508d81-6622-4163-af5f-7f06ab95c7f2", "attributes": {"ticker": {"type": "BasicTicker", "id": "7b598ae8-1659-424b-9b5d-52c41f1a1a7e"}, "formatter": {"type": "BasicTickFormatter", "id": "1cb81a73-1472-4331-8e3b-10258637f5a2"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d0b6ff4f-99e5-43e6-9166-78f77bca99e7"}}}, {"type": "GlyphRenderer", "id": "24a49350-3059-40bd-8654-c51fb8290c7d", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "5f79f549-74b0-4bdc-b396-7ba33588ded9"}, "nonselection_glyph": {"type": "Wedge", "id": "c9999de8-cff8-4fce-9929-8e4a264dc113"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Wedge", "id": "83e4d596-7df4-4d76-ada5-baaa067919a1"}}}, {"type": "PreviewSaveTool", "id": "34875859-7b29-4d28-a597-1b0274bdd107", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d0b6ff4f-99e5-43e6-9166-78f77bca99e7"}}}, {"type": "PanTool", "id": "6b6d67f8-8ebf-4252-a965-b3f25b46382e", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d0b6ff4f-99e5-43e6-9166-78f77bca99e7"}}}, {"type": "BoxZoomTool", "id": "81771026-eac7-4b65-90dd-3af29671ddf5", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "bf60d58d-5e56-4555-a8c4-6fb437270e9d"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d0b6ff4f-99e5-43e6-9166-78f77bca99e7"}}}], "root_ids": ["d0b6ff4f-99e5-43e6-9166-78f77bca99e7"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "7ebffb06-2dc6-4543-94e1-4cb25d8700c9", "modelid": "d0b6ff4f-99e5-43e6-9166-78f77bca99e7", "elementid": "70173414-016f-4c31-9bf4-6d26db54b241"}];
          
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