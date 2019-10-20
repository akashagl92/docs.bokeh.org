
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
  };var element = document.getElementById("5552de7d-a417-47c5-8e56-d76ce439fd3d");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5552de7d-a417-47c5-8e56-d76ce439fd3d' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"9d8d07d2-f2fa-4783-bbc4-4dd6935b1ac7": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "AnnularWedge", "id": "18813f6d-7693-4dc9-b7d6-a3e502e50e4c", "attributes": {"line_color": {"value": "#1f77b4"}, "start_angle": {"value": 0.4, "units": "rad"}, "outer_radius": {"value": 0.25, "units": "data"}, "y": {"field": "y"}, "end_angle": {"value": 4.8, "units": "rad"}, "x": {"field": "x"}, "fill_alpha": {"value": 0.1}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "inner_radius": {"value": 0.1, "units": "data"}}}, {"type": "ResetTool", "id": "62fdadb2-89ed-48f3-badc-3e68f4b6029e", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "aa6167e5-9667-4f5c-9e98-16afe0d12800"}}}, {"type": "Grid", "id": "50e6ef2e-0f4f-4861-80b9-7d96f526d017", "attributes": {"ticker": {"type": "BasicTicker", "id": "36b4dda0-cebc-4603-acad-51a711b71381"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "aa6167e5-9667-4f5c-9e98-16afe0d12800"}}}, {"type": "GlyphRenderer", "id": "2b19183d-7a76-4149-af16-3aa29d9010a5", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "7ff9d987-565e-4b3d-9403-be69fcac3ea1"}, "nonselection_glyph": {"type": "AnnularWedge", "id": "18813f6d-7693-4dc9-b7d6-a3e502e50e4c"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "AnnularWedge", "id": "2fa1671c-89ae-4ae8-9546-35e78a9b36be"}}}, {"type": "Grid", "id": "3cfa7d92-3dfc-4d51-9142-48d4f6aac3a9", "attributes": {"ticker": {"type": "BasicTicker", "id": "410b0c30-61b4-4afd-8d3d-643f9c4f858a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "aa6167e5-9667-4f5c-9e98-16afe0d12800"}}}, {"type": "PreviewSaveTool", "id": "692c7d70-c5a7-4a7b-bee0-c302ff7131e2", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "aa6167e5-9667-4f5c-9e98-16afe0d12800"}}}, {"type": "BasicTicker", "id": "410b0c30-61b4-4afd-8d3d-643f9c4f858a", "attributes": {}}, {"type": "ToolEvents", "id": "8d115955-ed28-4fc9-b615-d7ae58bd2cae", "attributes": {}}, {"type": "HelpTool", "id": "1e1df964-23a7-4a32-be87-646e88b31988", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "aa6167e5-9667-4f5c-9e98-16afe0d12800"}}}, {"type": "BasicTickFormatter", "id": "66a34c03-648b-49c9-ba33-ab9e08e58854", "attributes": {}}, {"type": "PanTool", "id": "47f06b40-3001-4dcc-af60-d74d90e14a66", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "aa6167e5-9667-4f5c-9e98-16afe0d12800"}}}, {"type": "WheelZoomTool", "id": "5ec1f37e-7fea-41f8-b426-4caf737792f5", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "aa6167e5-9667-4f5c-9e98-16afe0d12800"}}}, {"type": "DataRange1d", "id": "a4d1769f-7ab8-4646-8220-3081f3681d9e", "attributes": {"callback": null}}, {"type": "DataRange1d", "id": "b6e5759d-3d59-4222-baa7-c5bc81f65e32", "attributes": {"callback": null}}, {"type": "Plot", "id": "aa6167e5-9667-4f5c-9e98-16afe0d12800", "attributes": {"tools": [{"type": "PanTool", "id": "47f06b40-3001-4dcc-af60-d74d90e14a66"}, {"type": "WheelZoomTool", "id": "5ec1f37e-7fea-41f8-b426-4caf737792f5"}, {"type": "BoxZoomTool", "id": "27095406-b633-4a7f-9ca5-5014a3dca54d"}, {"type": "PreviewSaveTool", "id": "692c7d70-c5a7-4a7b-bee0-c302ff7131e2"}, {"type": "ResizeTool", "id": "b2728e53-4a60-4259-8757-96a00d441d8d"}, {"type": "ResetTool", "id": "62fdadb2-89ed-48f3-badc-3e68f4b6029e"}, {"type": "HelpTool", "id": "1e1df964-23a7-4a32-be87-646e88b31988"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "b6e5759d-3d59-4222-baa7-c5bc81f65e32"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "a6e37448-28be-4a6a-abb0-04d22834ad4c"}, {"type": "Grid", "id": "3cfa7d92-3dfc-4d51-9142-48d4f6aac3a9"}, {"type": "LinearAxis", "id": "461aa3e8-b295-4e15-be44-c9db83bcf292"}, {"type": "Grid", "id": "50e6ef2e-0f4f-4861-80b9-7d96f526d017"}, {"type": "BoxAnnotation", "id": "bc956871-f3b1-461e-b533-e77e19902749"}, {"type": "GlyphRenderer", "id": "2b19183d-7a76-4149-af16-3aa29d9010a5"}], "left": [{"type": "LinearAxis", "id": "461aa3e8-b295-4e15-be44-c9db83bcf292"}], "below": [{"type": "LinearAxis", "id": "a6e37448-28be-4a6a-abb0-04d22834ad4c"}], "tool_events": {"type": "ToolEvents", "id": "8d115955-ed28-4fc9-b615-d7ae58bd2cae"}, "x_range": {"type": "DataRange1d", "id": "a4d1769f-7ab8-4646-8220-3081f3681d9e"}}, "subtype": "Figure"}, {"type": "BoxZoomTool", "id": "27095406-b633-4a7f-9ca5-5014a3dca54d", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "bc956871-f3b1-461e-b533-e77e19902749"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "aa6167e5-9667-4f5c-9e98-16afe0d12800"}}}, {"type": "BoxAnnotation", "id": "bc956871-f3b1-461e-b533-e77e19902749", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ColumnDataSource", "id": "7ff9d987-565e-4b3d-9403-be69fcac3ea1", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["y", "x"], "callback": null}}, {"type": "LinearAxis", "id": "a6e37448-28be-4a6a-abb0-04d22834ad4c", "attributes": {"ticker": {"type": "BasicTicker", "id": "410b0c30-61b4-4afd-8d3d-643f9c4f858a"}, "formatter": {"type": "BasicTickFormatter", "id": "1df239c7-40a6-4210-a780-f9e3fe8808ef"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "aa6167e5-9667-4f5c-9e98-16afe0d12800"}}}, {"type": "ResizeTool", "id": "b2728e53-4a60-4259-8757-96a00d441d8d", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "aa6167e5-9667-4f5c-9e98-16afe0d12800"}}}, {"type": "AnnularWedge", "id": "2fa1671c-89ae-4ae8-9546-35e78a9b36be", "attributes": {"line_color": {"value": "green"}, "start_angle": {"value": 0.4, "units": "rad"}, "outer_radius": {"value": 0.25, "units": "data"}, "y": {"field": "y"}, "end_angle": {"value": 4.8, "units": "rad"}, "x": {"field": "x"}, "fill_alpha": {"value": 0.6}, "line_alpha": {"value": 0.6}, "fill_color": {"value": "green"}, "inner_radius": {"value": 0.1, "units": "data"}}}, {"type": "BasicTicker", "id": "36b4dda0-cebc-4603-acad-51a711b71381", "attributes": {}}, {"type": "LinearAxis", "id": "461aa3e8-b295-4e15-be44-c9db83bcf292", "attributes": {"ticker": {"type": "BasicTicker", "id": "36b4dda0-cebc-4603-acad-51a711b71381"}, "formatter": {"type": "BasicTickFormatter", "id": "66a34c03-648b-49c9-ba33-ab9e08e58854"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "aa6167e5-9667-4f5c-9e98-16afe0d12800"}}}, {"type": "BasicTickFormatter", "id": "1df239c7-40a6-4210-a780-f9e3fe8808ef", "attributes": {}}], "root_ids": ["aa6167e5-9667-4f5c-9e98-16afe0d12800"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "9d8d07d2-f2fa-4783-bbc4-4dd6935b1ac7", "modelid": "aa6167e5-9667-4f5c-9e98-16afe0d12800", "elementid": "5552de7d-a417-47c5-8e56-d76ce439fd3d"}];
          
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