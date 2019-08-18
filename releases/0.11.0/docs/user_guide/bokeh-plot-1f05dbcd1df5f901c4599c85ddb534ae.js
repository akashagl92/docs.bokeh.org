
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
  };var element = document.getElementById("147663d0-7b8e-4942-9337-ff500202e511");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '147663d0-7b8e-4942-9337-ff500202e511' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"2f2b243d-b195-4dcf-9824-21b3e5b07701": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ResizeTool", "id": "9e590e70-e713-4efb-a357-80f0b34a918b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c365b42c-9211-4fee-8ab5-29a92d20c0c3"}}}, {"type": "WheelZoomTool", "id": "86e869ec-6062-48f9-877b-e5a5b78d48b3", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c365b42c-9211-4fee-8ab5-29a92d20c0c3"}}}, {"type": "ResetTool", "id": "cb52e384-e92b-4721-9e28-2d692bfd06f9", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c365b42c-9211-4fee-8ab5-29a92d20c0c3"}}}, {"type": "LinearAxis", "id": "e35c2497-eff9-4cde-9a89-a9ff716f54d3", "attributes": {"ticker": {"type": "BasicTicker", "id": "74917f3c-2812-4dbd-9f05-ab5e9716ea3a"}, "formatter": {"type": "BasicTickFormatter", "id": "17ac8a35-35c5-44c3-845e-3ab3b9de0ae9"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c365b42c-9211-4fee-8ab5-29a92d20c0c3"}}}, {"type": "BoxZoomTool", "id": "3bb09b23-5025-4599-b6d4-a911acdfc2b0", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "e2fe1218-e71c-4392-9654-e167079ab0f2"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c365b42c-9211-4fee-8ab5-29a92d20c0c3"}}}, {"type": "Circle", "id": "3a509e85-ff1b-4dcc-acfe-da25ddad2d85", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "DataRange1d", "id": "ec37ab1b-6f2c-4386-b6f9-3cb3aa2d2d5e", "attributes": {"callback": null}}, {"type": "Grid", "id": "f23a94d9-c1d4-4a15-b524-771d62fdfd9e", "attributes": {"ticker": {"type": "BasicTicker", "id": "74917f3c-2812-4dbd-9f05-ab5e9716ea3a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c365b42c-9211-4fee-8ab5-29a92d20c0c3"}}}, {"type": "HelpTool", "id": "51503321-81fd-4974-bd7e-0b1eaaccfc6a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c365b42c-9211-4fee-8ab5-29a92d20c0c3"}}}, {"type": "PanTool", "id": "67092dbe-709a-4130-b4b8-772563057d5d", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c365b42c-9211-4fee-8ab5-29a92d20c0c3"}}}, {"type": "BoxAnnotation", "id": "e2fe1218-e71c-4392-9654-e167079ab0f2", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "GlyphRenderer", "id": "7e684fb7-3d5f-47af-80ba-6444d21a6cdb", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "cbc1e5c4-7539-40e9-a78a-82aa074248f5"}, "nonselection_glyph": {"type": "Circle", "id": "bb5aef52-00a6-4418-827d-b3ef471b45ca"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "3a509e85-ff1b-4dcc-acfe-da25ddad2d85"}}}, {"type": "ColumnDataSource", "id": "cbc1e5c4-7539-40e9-a78a-82aa074248f5", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "Circle", "id": "bb5aef52-00a6-4418-827d-b3ef471b45ca", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "BasicTickFormatter", "id": "17ac8a35-35c5-44c3-845e-3ab3b9de0ae9", "attributes": {}}, {"type": "BasicTickFormatter", "id": "85779cf1-f802-4448-b33f-00f8c6ae020e", "attributes": {}}, {"type": "BasicTicker", "id": "da8346b3-e12f-41c7-b7cb-84821577bfc8", "attributes": {}}, {"type": "DataRange1d", "id": "10863a44-06dc-4974-8164-50f756a7ad80", "attributes": {"callback": null}}, {"type": "Grid", "id": "c51c1b8c-f35b-4abe-822e-e9de550e6185", "attributes": {"ticker": {"type": "BasicTicker", "id": "da8346b3-e12f-41c7-b7cb-84821577bfc8"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "c365b42c-9211-4fee-8ab5-29a92d20c0c3"}}}, {"type": "PreviewSaveTool", "id": "a3fb5519-0c3f-460b-bdd3-e243e5cf1bc4", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c365b42c-9211-4fee-8ab5-29a92d20c0c3"}}}, {"type": "ToolEvents", "id": "95fe2cd6-d49c-41c8-874d-723156823fe3", "attributes": {}}, {"type": "LinearAxis", "id": "b90b34b8-b6a4-4253-a0bd-e1af0d8ad58b", "attributes": {"ticker": {"type": "BasicTicker", "id": "da8346b3-e12f-41c7-b7cb-84821577bfc8"}, "formatter": {"type": "BasicTickFormatter", "id": "85779cf1-f802-4448-b33f-00f8c6ae020e"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c365b42c-9211-4fee-8ab5-29a92d20c0c3"}}}, {"type": "BasicTicker", "id": "74917f3c-2812-4dbd-9f05-ab5e9716ea3a", "attributes": {}}, {"type": "Plot", "id": "c365b42c-9211-4fee-8ab5-29a92d20c0c3", "attributes": {"tools": [{"type": "PanTool", "id": "67092dbe-709a-4130-b4b8-772563057d5d"}, {"type": "WheelZoomTool", "id": "86e869ec-6062-48f9-877b-e5a5b78d48b3"}, {"type": "BoxZoomTool", "id": "3bb09b23-5025-4599-b6d4-a911acdfc2b0"}, {"type": "PreviewSaveTool", "id": "a3fb5519-0c3f-460b-bdd3-e243e5cf1bc4"}, {"type": "ResizeTool", "id": "9e590e70-e713-4efb-a357-80f0b34a918b"}, {"type": "ResetTool", "id": "cb52e384-e92b-4721-9e28-2d692bfd06f9"}, {"type": "HelpTool", "id": "51503321-81fd-4974-bd7e-0b1eaaccfc6a"}], "plot_width": 400, "x_range": {"type": "DataRange1d", "id": "ec37ab1b-6f2c-4386-b6f9-3cb3aa2d2d5e"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "e35c2497-eff9-4cde-9a89-a9ff716f54d3"}, {"type": "Grid", "id": "f23a94d9-c1d4-4a15-b524-771d62fdfd9e"}, {"type": "LinearAxis", "id": "b90b34b8-b6a4-4253-a0bd-e1af0d8ad58b"}, {"type": "Grid", "id": "c51c1b8c-f35b-4abe-822e-e9de550e6185"}, {"type": "BoxAnnotation", "id": "e2fe1218-e71c-4392-9654-e167079ab0f2"}, {"type": "GlyphRenderer", "id": "7e684fb7-3d5f-47af-80ba-6444d21a6cdb"}], "y_range": {"type": "DataRange1d", "id": "10863a44-06dc-4974-8164-50f756a7ad80"}, "left": [{"type": "LinearAxis", "id": "b90b34b8-b6a4-4253-a0bd-e1af0d8ad58b"}], "below": [{"type": "LinearAxis", "id": "e35c2497-eff9-4cde-9a89-a9ff716f54d3"}], "tool_events": {"type": "ToolEvents", "id": "95fe2cd6-d49c-41c8-874d-723156823fe3"}, "toolbar_location": "below", "title": null}, "subtype": "Figure"}], "root_ids": ["c365b42c-9211-4fee-8ab5-29a92d20c0c3"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "2f2b243d-b195-4dcf-9824-21b3e5b07701", "modelid": "c365b42c-9211-4fee-8ab5-29a92d20c0c3", "elementid": "147663d0-7b8e-4942-9337-ff500202e511"}];
          
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