
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
  };var element = document.getElementById("8c94e437-c15c-4623-a726-fd8148b60c46");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8c94e437-c15c-4623-a726-fd8148b60c46' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"8aba8925-277e-4f9f-b850-90863010848d": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "20aa4308-8dae-4123-bb52-5cc4348be4d4", "attributes": {"ticker": {"type": "BasicTicker", "id": "3617957b-6988-4110-8769-919ffb39a565"}, "formatter": {"type": "BasicTickFormatter", "id": "fc858846-c2ef-4a32-acd1-df2a8415a644"}, "axis_label": "Rate per ounce", "plot": {"type": "Plot", "subtype": "Chart", "id": "df03333f-4c66-42b4-b7d6-40741b110af1"}}}, {"type": "Line", "id": "a92972ef-b3a3-4af7-a64a-e34c66aee88e", "attributes": {"line_color": {"value": "#f22c40"}, "line_width": {"value": 2}, "x": {"field": "x_values"}, "y": {"field": "y_values"}}}, {"type": "ResetTool", "id": "aca30713-2db1-4b06-9cc7-0491da69c1e3", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "df03333f-4c66-42b4-b7d6-40741b110af1"}}}, {"type": "Legend", "id": "5be0d9c5-b6fb-4281-870c-e75c8a02c506", "attributes": {"legends": [["stamp", [{"type": "GlyphRenderer", "id": "fa00d4e3-0ca3-4a2d-a229-1ec40ba875fc"}]], ["postcard", [{"type": "GlyphRenderer", "id": "bd531df2-31b3-4a41-a698-692f53d3b75a"}]]], "location": "top_left", "plot": {"type": "Plot", "subtype": "Chart", "id": "df03333f-4c66-42b4-b7d6-40741b110af1"}}}, {"type": "Plot", "id": "df03333f-4c66-42b4-b7d6-40741b110af1", "attributes": {"y_range": {"type": "Range1d", "id": "3ee8a090-2815-4c85-a01e-d414700661ad"}, "width": 400, "legend": true, "yscale": "auto", "tools": [{"type": "PanTool", "id": "89581ad4-1a72-44dd-abca-effb59af441e"}, {"type": "WheelZoomTool", "id": "838acfe9-5e84-4932-b3d2-56deeb4304ca"}, {"type": "BoxZoomTool", "id": "e99d8f8c-a0db-4a93-8fd1-c289a2031bec"}, {"type": "PreviewSaveTool", "id": "afa1ec77-2c97-44af-ae9c-b245c2b11eab"}, {"type": "ResizeTool", "id": "64ce4f14-78a1-47eb-9b24-7745b6115e48"}, {"type": "ResetTool", "id": "aca30713-2db1-4b06-9cc7-0491da69c1e3"}, {"type": "HelpTool", "id": "0ee2360b-26f6-443b-bd54-22bd2339bc2b"}], "title": "U.S. Postage Rates (1999-2015)", "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "20aa4308-8dae-4123-bb52-5cc4348be4d4"}], "x_range": {"type": "Range1d", "id": "8253ab07-53c1-4618-944f-ad1ad045452b"}, "y_mapper_type": "auto", "xscale": "auto", "below": [{"type": "LinearAxis", "id": "87d9fbe5-0711-42f3-a6d2-9f5592db52ac"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "2688052b-7215-4b78-91af-4aee6c71770f"}, "renderers": [{"type": "BoxAnnotation", "id": "fc0b2c52-9b81-4ebb-affd-3378dd8dee37"}, {"type": "GlyphRenderer", "id": "fa00d4e3-0ca3-4a2d-a229-1ec40ba875fc"}, {"type": "GlyphRenderer", "id": "bd531df2-31b3-4a41-a698-692f53d3b75a"}, {"type": "Legend", "id": "5be0d9c5-b6fb-4281-870c-e75c8a02c506"}, {"type": "LinearAxis", "id": "87d9fbe5-0711-42f3-a6d2-9f5592db52ac"}, {"type": "LinearAxis", "id": "20aa4308-8dae-4123-bb52-5cc4348be4d4"}, {"type": "Grid", "id": "1dbc51b6-31ee-49f5-9149-e9d8d6d72f66"}, {"type": "Grid", "id": "62a001f9-5d6d-4792-a6fd-4523c9e73b0b"}]}, "subtype": "Chart"}, {"type": "GlyphRenderer", "id": "bd531df2-31b3-4a41-a698-692f53d3b75a", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "f431a965-bac5-48a0-a295-237af2e03225"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "a92972ef-b3a3-4af7-a64a-e34c66aee88e"}}}, {"type": "ResizeTool", "id": "64ce4f14-78a1-47eb-9b24-7745b6115e48", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "df03333f-4c66-42b4-b7d6-40741b110af1"}}}, {"type": "BasicTickFormatter", "id": "3fa6b10b-f03a-45cf-ab98-4610e60a18c9", "attributes": {}}, {"type": "GlyphRenderer", "id": "fa00d4e3-0ca3-4a2d-a229-1ec40ba875fc", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "a557f79c-7607-4220-a1e4-2428154cbdb0"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "f864548e-7662-4609-b065-84e08e0e4fda"}}}, {"type": "ColumnDataSource", "id": "a557f79c-7607-4220-a1e4-2428154cbdb0", "attributes": {"data": {"x_values": [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16], "y_values": [0.33, 0.33, 0.33, 0.33, 0.34, 0.34, 0.37, 0.37, 0.37, 0.37, 0.37, 0.37, 0.37, 0.37, 0.39, 0.39, 0.41, 0.41, 0.42, 0.42, 0.44, 0.44, 0.44, 0.44, 0.44, 0.44, 0.45, 0.45, 0.46, 0.46, 0.49, 0.49, 0.49], "chart_index": ["None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None"]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "Grid", "id": "62a001f9-5d6d-4792-a6fd-4523c9e73b0b", "attributes": {"ticker": {"type": "BasicTicker", "id": "3617957b-6988-4110-8769-919ffb39a565"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Chart", "id": "df03333f-4c66-42b4-b7d6-40741b110af1"}}}, {"type": "Range1d", "id": "8253ab07-53c1-4618-944f-ad1ad045452b", "attributes": {"start": -1.6, "end": 17.6, "callback": null}}, {"type": "BasicTicker", "id": "3617957b-6988-4110-8769-919ffb39a565", "attributes": {}}, {"type": "PanTool", "id": "89581ad4-1a72-44dd-abca-effb59af441e", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "df03333f-4c66-42b4-b7d6-40741b110af1"}}}, {"type": "ColumnDataSource", "id": "f431a965-bac5-48a0-a295-237af2e03225", "attributes": {"data": {"x_values": [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16], "y_values": [0.2, 0.2, 0.2, 0.2, 0.21, 0.21, 0.23, 0.23, 0.23, 0.23, 0.23, 0.23, 0.23, 0.23, 0.24, 0.24, 0.26, 0.26, 0.27, 0.27, 0.28, 0.28, 0.28, 0.28, 0.29, 0.29, 0.32, 0.32, 0.33, 0.33, 0.34, 0.34, 0.35], "chart_index": ["None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None"]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "BasicTickFormatter", "id": "fc858846-c2ef-4a32-acd1-df2a8415a644", "attributes": {}}, {"type": "PreviewSaveTool", "id": "afa1ec77-2c97-44af-ae9c-b245c2b11eab", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "df03333f-4c66-42b4-b7d6-40741b110af1"}}}, {"type": "ToolEvents", "id": "2688052b-7215-4b78-91af-4aee6c71770f", "attributes": {}}, {"type": "BasicTicker", "id": "b5469904-51ce-471e-89f7-b7f6ff93fd28", "attributes": {}}, {"type": "LinearAxis", "id": "87d9fbe5-0711-42f3-a6d2-9f5592db52ac", "attributes": {"ticker": {"type": "BasicTicker", "id": "b5469904-51ce-471e-89f7-b7f6ff93fd28"}, "formatter": {"type": "BasicTickFormatter", "id": "3fa6b10b-f03a-45cf-ab98-4610e60a18c9"}, "axis_label": "index", "plot": {"type": "Plot", "subtype": "Chart", "id": "df03333f-4c66-42b4-b7d6-40741b110af1"}}}, {"type": "Line", "id": "f864548e-7662-4609-b065-84e08e0e4fda", "attributes": {"line_color": {"value": "#5ab738"}, "line_width": {"value": 2}, "line_dash": [6], "x": {"field": "x_values"}, "y": {"field": "y_values"}}}, {"type": "BoxZoomTool", "id": "e99d8f8c-a0db-4a93-8fd1-c289a2031bec", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "fc0b2c52-9b81-4ebb-affd-3378dd8dee37"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "df03333f-4c66-42b4-b7d6-40741b110af1"}}}, {"type": "Range1d", "id": "3ee8a090-2815-4c85-a01e-d414700661ad", "attributes": {"start": 0.171, "end": 0.519, "callback": null}}, {"type": "BoxAnnotation", "id": "fc0b2c52-9b81-4ebb-affd-3378dd8dee37", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "WheelZoomTool", "id": "838acfe9-5e84-4932-b3d2-56deeb4304ca", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "df03333f-4c66-42b4-b7d6-40741b110af1"}}}, {"type": "HelpTool", "id": "0ee2360b-26f6-443b-bd54-22bd2339bc2b", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "df03333f-4c66-42b4-b7d6-40741b110af1"}}}, {"type": "Grid", "id": "1dbc51b6-31ee-49f5-9149-e9d8d6d72f66", "attributes": {"ticker": {"type": "BasicTicker", "id": "b5469904-51ce-471e-89f7-b7f6ff93fd28"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "df03333f-4c66-42b4-b7d6-40741b110af1"}}}], "root_ids": ["df03333f-4c66-42b4-b7d6-40741b110af1"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "8aba8925-277e-4f9f-b850-90863010848d", "modelid": "df03333f-4c66-42b4-b7d6-40741b110af1", "elementid": "8c94e437-c15c-4623-a726-fd8148b60c46"}];
          
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