
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
  };var element = document.getElementById("7ee4f1bb-d839-44cb-8e29-fcd93fb1d8f5");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7ee4f1bb-d839-44cb-8e29-fcd93fb1d8f5' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"78ded6fa-26a0-4210-9d9c-76907f539864": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Line", "id": "596585bd-a852-48d3-be43-ab98c3555470", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "y": {"field": "y"}}}, {"type": "WheelZoomTool", "id": "2cca0614-e862-4c91-a72a-e43b6605eb2e", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2ffd1a2e-b6c2-44ae-9604-ebbd87faf00e"}}}, {"type": "Legend", "id": "c9f5c5d6-7860-491f-a621-73997c695f9b", "attributes": {"legends": [["Temp.", [{"type": "GlyphRenderer", "id": "42de11fe-b4bb-4698-87b9-e841b7d2b026"}]]], "plot": {"type": "Plot", "subtype": "Figure", "id": "2ffd1a2e-b6c2-44ae-9604-ebbd87faf00e"}}}, {"type": "GlyphRenderer", "id": "42de11fe-b4bb-4698-87b9-e841b7d2b026", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "7e0d0f74-3972-4629-9ce4-9c319d4e7d6a"}, "nonselection_glyph": {"type": "Line", "id": "596585bd-a852-48d3-be43-ab98c3555470"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "2d70d97b-bfff-4635-897f-9d6fa0dc5e61"}}}, {"type": "BoxZoomTool", "id": "b7a00152-64b1-4419-97df-64a289cf9a74", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "fb6dd796-bc14-4f5a-a522-adfa4a538a32"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "2ffd1a2e-b6c2-44ae-9604-ebbd87faf00e"}}}, {"type": "Grid", "id": "35947318-2ca4-422a-aa4b-6fc85d0b8aa1", "attributes": {"ticker": {"type": "BasicTicker", "id": "92074ac4-62be-43d2-aeaa-92fcb6a7cbef"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "2ffd1a2e-b6c2-44ae-9604-ebbd87faf00e"}}}, {"type": "LinearAxis", "id": "c05da5a5-c89f-4883-8031-893c5a4f3346", "attributes": {"ticker": {"type": "BasicTicker", "id": "92074ac4-62be-43d2-aeaa-92fcb6a7cbef"}, "formatter": {"type": "BasicTickFormatter", "id": "ded051fc-9661-4f68-88d5-cef5cd5e862c"}, "axis_label": "x", "plot": {"type": "Plot", "subtype": "Figure", "id": "2ffd1a2e-b6c2-44ae-9604-ebbd87faf00e"}}}, {"type": "ResetTool", "id": "22c51030-9290-471c-93e0-f33a6991519c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2ffd1a2e-b6c2-44ae-9604-ebbd87faf00e"}}}, {"type": "BasicTicker", "id": "92074ac4-62be-43d2-aeaa-92fcb6a7cbef", "attributes": {}}, {"type": "PreviewSaveTool", "id": "f63774cc-58ae-4dfa-aa33-40d26cceadb7", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2ffd1a2e-b6c2-44ae-9604-ebbd87faf00e"}}}, {"type": "Grid", "id": "f776af85-b949-4e20-8e43-dd3a7b935b41", "attributes": {"ticker": {"type": "BasicTicker", "id": "c8b81c33-1adc-48a2-980c-71b00101e72f"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "2ffd1a2e-b6c2-44ae-9604-ebbd87faf00e"}}}, {"type": "ToolEvents", "id": "a41096ee-acd3-431c-8c8c-8070e14f7f73", "attributes": {}}, {"type": "DataRange1d", "id": "50837431-4e83-46e0-a984-cce58f614d48", "attributes": {"callback": null}}, {"type": "DataRange1d", "id": "3e641591-75a3-41e9-83b3-a3613a04eb14", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "2fffcee6-0667-4302-89fd-a9a7b250d32d", "attributes": {}}, {"type": "LinearAxis", "id": "571fcca7-7f51-4b38-a3de-609e007d42fa", "attributes": {"ticker": {"type": "BasicTicker", "id": "c8b81c33-1adc-48a2-980c-71b00101e72f"}, "formatter": {"type": "BasicTickFormatter", "id": "2fffcee6-0667-4302-89fd-a9a7b250d32d"}, "axis_label": "y", "plot": {"type": "Plot", "subtype": "Figure", "id": "2ffd1a2e-b6c2-44ae-9604-ebbd87faf00e"}}}, {"type": "BoxAnnotation", "id": "fb6dd796-bc14-4f5a-a522-adfa4a538a32", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTickFormatter", "id": "ded051fc-9661-4f68-88d5-cef5cd5e862c", "attributes": {}}, {"type": "Line", "id": "2d70d97b-bfff-4635-897f-9d6fa0dc5e61", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "x": {"field": "x"}, "y": {"field": "y"}}}, {"type": "PanTool", "id": "b89bacb2-4834-4499-9870-8a4cf68a42fe", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2ffd1a2e-b6c2-44ae-9604-ebbd87faf00e"}}}, {"type": "ResizeTool", "id": "24429105-21ab-4efa-acac-dbf89b05bcde", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2ffd1a2e-b6c2-44ae-9604-ebbd87faf00e"}}}, {"type": "BasicTicker", "id": "c8b81c33-1adc-48a2-980c-71b00101e72f", "attributes": {}}, {"type": "ColumnDataSource", "id": "7e0d0f74-3972-4629-9ce4-9c319d4e7d6a", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [6, 7, 2, 4, 5]}, "column_names": ["x", "y"], "callback": null}}, {"type": "HelpTool", "id": "ab95eafa-bfc2-41fb-9ed3-484156c4e43a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2ffd1a2e-b6c2-44ae-9604-ebbd87faf00e"}}}, {"type": "Plot", "id": "2ffd1a2e-b6c2-44ae-9604-ebbd87faf00e", "attributes": {"x_range": {"type": "DataRange1d", "id": "3e641591-75a3-41e9-83b3-a3613a04eb14"}, "left": [{"type": "LinearAxis", "id": "571fcca7-7f51-4b38-a3de-609e007d42fa"}], "renderers": [{"type": "LinearAxis", "id": "c05da5a5-c89f-4883-8031-893c5a4f3346"}, {"type": "Grid", "id": "35947318-2ca4-422a-aa4b-6fc85d0b8aa1"}, {"type": "LinearAxis", "id": "571fcca7-7f51-4b38-a3de-609e007d42fa"}, {"type": "Grid", "id": "f776af85-b949-4e20-8e43-dd3a7b935b41"}, {"type": "BoxAnnotation", "id": "fb6dd796-bc14-4f5a-a522-adfa4a538a32"}, {"type": "Legend", "id": "c9f5c5d6-7860-491f-a621-73997c695f9b"}, {"type": "GlyphRenderer", "id": "42de11fe-b4bb-4698-87b9-e841b7d2b026"}], "y_range": {"type": "DataRange1d", "id": "50837431-4e83-46e0-a984-cce58f614d48"}, "tools": [{"type": "PanTool", "id": "b89bacb2-4834-4499-9870-8a4cf68a42fe"}, {"type": "WheelZoomTool", "id": "2cca0614-e862-4c91-a72a-e43b6605eb2e"}, {"type": "BoxZoomTool", "id": "b7a00152-64b1-4419-97df-64a289cf9a74"}, {"type": "PreviewSaveTool", "id": "f63774cc-58ae-4dfa-aa33-40d26cceadb7"}, {"type": "ResizeTool", "id": "24429105-21ab-4efa-acac-dbf89b05bcde"}, {"type": "ResetTool", "id": "22c51030-9290-471c-93e0-f33a6991519c"}, {"type": "HelpTool", "id": "ab95eafa-bfc2-41fb-9ed3-484156c4e43a"}], "below": [{"type": "LinearAxis", "id": "c05da5a5-c89f-4883-8031-893c5a4f3346"}], "tool_events": {"type": "ToolEvents", "id": "a41096ee-acd3-431c-8c8c-8070e14f7f73"}, "title": "simple line example"}, "subtype": "Figure"}], "root_ids": ["2ffd1a2e-b6c2-44ae-9604-ebbd87faf00e"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "78ded6fa-26a0-4210-9d9c-76907f539864", "modelid": "2ffd1a2e-b6c2-44ae-9604-ebbd87faf00e", "elementid": "7ee4f1bb-d839-44cb-8e29-fcd93fb1d8f5"}];
          
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