
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
  };var element = document.getElementById("45ed54ad-2312-4baa-93de-544097ac3170");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '45ed54ad-2312-4baa-93de-544097ac3170' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"15e2c5b7-7565-4a17-b720-c5efe265e11a": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ToolEvents", "id": "9866de92-d094-4f9f-8c5e-0872c6f03b07", "attributes": {}}, {"type": "Circle", "id": "1a387d44-07cb-4e7d-94a5-b8c521f8ff2d", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "ResetTool", "id": "4d0fad92-c778-4fef-84fa-e975d4d7e0e4", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e87a14a8-7a7c-4a26-874e-cdfa6e863b55"}}}, {"type": "PreviewSaveTool", "id": "151a66dd-f4ad-4386-96d8-ccf7ee9c9770", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e87a14a8-7a7c-4a26-874e-cdfa6e863b55"}}}, {"type": "LinearAxis", "id": "d49b74f7-2a40-4c36-8cbb-2033774d94f5", "attributes": {"ticker": {"type": "BasicTicker", "id": "bb6686d7-d166-42b1-8a9e-7512038a8de4"}, "formatter": {"type": "BasicTickFormatter", "id": "6ab5fc18-fad8-4370-b4e0-c0196e26c7e5"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e87a14a8-7a7c-4a26-874e-cdfa6e863b55"}}}, {"type": "ColumnDataSource", "id": "9df321c6-ef65-4c21-8d85-669e8cb05e74", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "DataRange1d", "id": "60beba7b-45c8-4e62-8360-121ab58fe78d", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "ed7cd47a-4af8-481f-9c7e-216be2fb8076", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "9df321c6-ef65-4c21-8d85-669e8cb05e74"}, "nonselection_glyph": {"type": "Circle", "id": "d727ac53-1ba7-4389-a666-079aa67f2e05"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "1a387d44-07cb-4e7d-94a5-b8c521f8ff2d"}}}, {"type": "PanTool", "id": "3a7aeb49-9da0-4d26-9842-5cc4d5e7b1f7", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e87a14a8-7a7c-4a26-874e-cdfa6e863b55"}}}, {"type": "BasicTicker", "id": "e269a1d2-ce29-4f81-990f-2f7a14f535a2", "attributes": {}}, {"type": "DataRange1d", "id": "98b60e1d-905c-42bc-aba1-e01ee99bc53b", "attributes": {"callback": null}}, {"type": "BoxAnnotation", "id": "8d596d96-19f0-4471-a9bc-864a5424366c", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "HelpTool", "id": "9d15c5cc-e728-43d3-b9de-d3af8aab23a8", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e87a14a8-7a7c-4a26-874e-cdfa6e863b55"}}}, {"type": "BoxZoomTool", "id": "1f325ce8-ebaf-4a93-93a5-e1ae9da813d0", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "8d596d96-19f0-4471-a9bc-864a5424366c"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e87a14a8-7a7c-4a26-874e-cdfa6e863b55"}}}, {"type": "LinearAxis", "id": "8c559037-cb5b-4608-8b90-dca9352fd58b", "attributes": {"ticker": {"type": "BasicTicker", "id": "e269a1d2-ce29-4f81-990f-2f7a14f535a2"}, "formatter": {"type": "BasicTickFormatter", "id": "1c2fe6b8-57dc-4b4d-8781-17a29e591d84"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e87a14a8-7a7c-4a26-874e-cdfa6e863b55"}}}, {"type": "Circle", "id": "d727ac53-1ba7-4389-a666-079aa67f2e05", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ResizeTool", "id": "c665b13e-6597-469d-8898-243b0d7ccc32", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e87a14a8-7a7c-4a26-874e-cdfa6e863b55"}}}, {"type": "BasicTickFormatter", "id": "6ab5fc18-fad8-4370-b4e0-c0196e26c7e5", "attributes": {}}, {"type": "BasicTicker", "id": "bb6686d7-d166-42b1-8a9e-7512038a8de4", "attributes": {}}, {"type": "WheelZoomTool", "id": "7a823fd8-0a43-4437-9c12-21fe78162a71", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e87a14a8-7a7c-4a26-874e-cdfa6e863b55"}}}, {"type": "Grid", "id": "5f850b05-729f-40fd-ad3e-4aab86e0be34", "attributes": {"ticker": {"type": "BasicTicker", "id": "e269a1d2-ce29-4f81-990f-2f7a14f535a2"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e87a14a8-7a7c-4a26-874e-cdfa6e863b55"}}}, {"type": "BasicTickFormatter", "id": "1c2fe6b8-57dc-4b4d-8781-17a29e591d84", "attributes": {}}, {"type": "Plot", "id": "e87a14a8-7a7c-4a26-874e-cdfa6e863b55", "attributes": {"tools": [{"type": "PanTool", "id": "3a7aeb49-9da0-4d26-9842-5cc4d5e7b1f7"}, {"type": "WheelZoomTool", "id": "7a823fd8-0a43-4437-9c12-21fe78162a71"}, {"type": "BoxZoomTool", "id": "1f325ce8-ebaf-4a93-93a5-e1ae9da813d0"}, {"type": "PreviewSaveTool", "id": "151a66dd-f4ad-4386-96d8-ccf7ee9c9770"}, {"type": "ResizeTool", "id": "c665b13e-6597-469d-8898-243b0d7ccc32"}, {"type": "ResetTool", "id": "4d0fad92-c778-4fef-84fa-e975d4d7e0e4"}, {"type": "HelpTool", "id": "9d15c5cc-e728-43d3-b9de-d3af8aab23a8"}], "plot_width": 700, "y_range": {"type": "DataRange1d", "id": "60beba7b-45c8-4e62-8360-121ab58fe78d"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "8c559037-cb5b-4608-8b90-dca9352fd58b"}, {"type": "Grid", "id": "5f850b05-729f-40fd-ad3e-4aab86e0be34"}, {"type": "LinearAxis", "id": "d49b74f7-2a40-4c36-8cbb-2033774d94f5"}, {"type": "Grid", "id": "70fc1e8c-3d52-49c9-8f6b-a8768837d999"}, {"type": "BoxAnnotation", "id": "8d596d96-19f0-4471-a9bc-864a5424366c"}, {"type": "GlyphRenderer", "id": "ed7cd47a-4af8-481f-9c7e-216be2fb8076"}], "left": [{"type": "LinearAxis", "id": "d49b74f7-2a40-4c36-8cbb-2033774d94f5"}], "below": [{"type": "LinearAxis", "id": "8c559037-cb5b-4608-8b90-dca9352fd58b"}], "tool_events": {"type": "ToolEvents", "id": "9866de92-d094-4f9f-8c5e-0872c6f03b07"}, "x_range": {"type": "DataRange1d", "id": "98b60e1d-905c-42bc-aba1-e01ee99bc53b"}}, "subtype": "Figure"}, {"type": "Grid", "id": "70fc1e8c-3d52-49c9-8f6b-a8768837d999", "attributes": {"ticker": {"type": "BasicTicker", "id": "bb6686d7-d166-42b1-8a9e-7512038a8de4"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "e87a14a8-7a7c-4a26-874e-cdfa6e863b55"}}}], "root_ids": ["e87a14a8-7a7c-4a26-874e-cdfa6e863b55"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "15e2c5b7-7565-4a17-b720-c5efe265e11a", "modelid": "e87a14a8-7a7c-4a26-874e-cdfa6e863b55", "elementid": "45ed54ad-2312-4baa-93de-544097ac3170"}];
          
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