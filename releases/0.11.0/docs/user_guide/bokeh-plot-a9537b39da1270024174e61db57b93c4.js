
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
  };var element = document.getElementById("9bc2ab1e-c15b-4278-9e9c-cd9ee60acf67");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '9bc2ab1e-c15b-4278-9e9c-cd9ee60acf67' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"3d2e598b-6dd3-4774-8602-92a4d49971ab": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "WheelZoomTool", "id": "e893bd33-fee2-4a8b-afb4-259581c10ce2", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "228b54df-f70c-48bd-869f-18d282911e25"}}}, {"type": "Range1d", "id": "0b86693f-bc83-4369-afa7-175080b0a76d", "attributes": {"start": 5.24, "end": 50.36, "callback": null}}, {"type": "ToolEvents", "id": "235669cd-33f7-4056-8842-3f4a09159cdd", "attributes": {}}, {"type": "PreviewSaveTool", "id": "c1c3e663-3086-494a-9934-09e70b5fc6a0", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "228b54df-f70c-48bd-869f-18d282911e25"}}}, {"type": "BasicTickFormatter", "id": "d60d9937-4fd8-45e0-b097-01a2e270b332", "attributes": {}}, {"type": "Plot", "id": "228b54df-f70c-48bd-869f-18d282911e25", "attributes": {"y_range": {"type": "Range1d", "id": "95ffedc6-2fc5-4cca-a315-4960a833f4b2"}, "width": 400, "legend": null, "yscale": "auto", "tools": [{"type": "PanTool", "id": "f32cae39-b4d6-4ef4-bb53-cb7aaad9ec31"}, {"type": "WheelZoomTool", "id": "e893bd33-fee2-4a8b-afb4-259581c10ce2"}, {"type": "BoxZoomTool", "id": "054ad9d8-be04-48c4-8d12-c95c7ad89d85"}, {"type": "PreviewSaveTool", "id": "c1c3e663-3086-494a-9934-09e70b5fc6a0"}, {"type": "ResizeTool", "id": "185d6de7-9612-431a-b310-a2b3567976b3"}, {"type": "ResetTool", "id": "7d22ae19-be54-4e90-96a5-eb3165ed5b5c"}, {"type": "HelpTool", "id": "6fa2c673-9173-4b8f-a4d0-ca76037f413c"}], "title": "HP vs MPG", "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "1ac4e188-5bbf-4c22-8fe0-3cff97496316"}], "x_range": {"type": "Range1d", "id": "0b86693f-bc83-4369-afa7-175080b0a76d"}, "y_mapper_type": "auto", "xscale": "auto", "below": [{"type": "LinearAxis", "id": "655c45e9-798c-416a-b5ef-9d1e5f27822a"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "235669cd-33f7-4056-8842-3f4a09159cdd"}, "renderers": [{"type": "BoxAnnotation", "id": "52d07e20-373a-4c2e-b6ba-7c466a53a6b9"}, {"type": "GlyphRenderer", "id": "13ab0ba4-1fd0-4793-96ee-7fe11e5cb788"}, {"type": "LinearAxis", "id": "655c45e9-798c-416a-b5ef-9d1e5f27822a"}, {"type": "LinearAxis", "id": "1ac4e188-5bbf-4c22-8fe0-3cff97496316"}, {"type": "Grid", "id": "1e22c12c-7843-4799-9f32-81c11d9a7ca2"}, {"type": "Grid", "id": "797dde58-4ea5-40b0-8395-345cc7c1f65c"}]}, "subtype": "Chart"}, {"type": "ResizeTool", "id": "185d6de7-9612-431a-b310-a2b3567976b3", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "228b54df-f70c-48bd-869f-18d282911e25"}}}, {"type": "Range1d", "id": "95ffedc6-2fc5-4cca-a315-4960a833f4b2", "attributes": {"start": 27.599999999999998, "end": 248.4, "callback": null}}, {"type": "BasicTicker", "id": "7fe11198-9df8-4599-a8b3-cb5351b513b0", "attributes": {}}, {"type": "LinearAxis", "id": "655c45e9-798c-416a-b5ef-9d1e5f27822a", "attributes": {"ticker": {"type": "BasicTicker", "id": "7fe11198-9df8-4599-a8b3-cb5351b513b0"}, "formatter": {"type": "BasicTickFormatter", "id": "4deca2e4-60ab-4749-b7bc-7902d6fa9e81"}, "axis_label": "Miles Per Gallon", "plot": {"type": "Plot", "subtype": "Chart", "id": "228b54df-f70c-48bd-869f-18d282911e25"}}}, {"type": "BoxZoomTool", "id": "054ad9d8-be04-48c4-8d12-c95c7ad89d85", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "52d07e20-373a-4c2e-b6ba-7c466a53a6b9"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "228b54df-f70c-48bd-869f-18d282911e25"}}}, {"type": "BasicTickFormatter", "id": "4deca2e4-60ab-4749-b7bc-7902d6fa9e81", "attributes": {}}, {"type": "ResetTool", "id": "7d22ae19-be54-4e90-96a5-eb3165ed5b5c", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "228b54df-f70c-48bd-869f-18d282911e25"}}}, {"type": "LinearAxis", "id": "1ac4e188-5bbf-4c22-8fe0-3cff97496316", "attributes": {"ticker": {"type": "BasicTicker", "id": "72fe67fb-f426-42ef-852d-b27360a74925"}, "formatter": {"type": "BasicTickFormatter", "id": "d60d9937-4fd8-45e0-b097-01a2e270b332"}, "axis_label": "Horsepower", "plot": {"type": "Plot", "subtype": "Chart", "id": "228b54df-f70c-48bd-869f-18d282911e25"}}}, {"type": "GlyphRenderer", "id": "13ab0ba4-1fd0-4793-96ee-7fe11e5cb788", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "8c7c08f2-2c56-4543-90f9-6cbcd3e7c114"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "555da6b6-1316-472b-9e12-b582b92dd318"}}}, {"type": "BoxAnnotation", "id": "52d07e20-373a-4c2e-b6ba-7c466a53a6b9", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ColumnDataSource", "id": "8c7c08f2-2c56-4543-90f9-6cbcd3e7c114", "attributes": {"data": {"x_values": [21.5, 23.7, 18.0, 19.0, 30.5, 33.5, 30.0, 30.5, 21.5, 30.0, 43.1, 36.1, 32.8, 39.4, 36.1, 25.1, 25.5, 29.0, 27.2, 30.9, 34.2, 27.2, 27.4, 35.7, 34.1, 31.9, 27.5, 22.3, 31.5, 21.6, 23.9, 23.8, 23.2, 21.1, 29.5, 26.0, 24.5, 29.0, 28.0, 33.0, 25.0, 22.0, 23.0, 23.0, 25.0, 29.0, 25.0, 24.0, 23.0, 23.0, 29.0, 31.0, 24.0, 25.0, 26.0, 27.0, 33.5, 25.5, 36.0, 30.0, 31.5, 19.0, 20.0, 26.5, 28.0, 32.0, 29.5, 33.0, 28.0, 24.5, 29.0, 34.5, 31.8, 28.4, 26.0, 24.0, 27.0, 29.0, 31.0, 34.0, 27.0, 36.0, 28.0, 31.6, 32.9, 32.4, 33.7, 33.0, 29.9, 28.1, 34.4, 37.0, 38.0, 32.0, 44.0, 27.0, 27.0, 36.0, 32.0, 31.0, 26.0, 32.0, 38.0, 34.0, 36.0, 36.0, 36.0, 38.0, 34.7, 34.1, 37.7, 46.6, 32.2, 37.0, 31.3, 29.8, 34.3, 27.9, 24.3, 28.0, 37.2, 32.1, 38.1, 41.5, 33.5, 26.4, 40.8, 44.3, 43.4, 37.0, 32.3, 35.1, 39.0, 39.1, 30.0, 25.8, 26.6, 27.2, 32.4, 35.0, 29.8, 33.8, 44.6, 30.0, 37.3, 24.0, 31.0, 24.0, 32.0, 26.0, 31.0, 22.0, 28.0, 26.0, 24.0, 24.0, 19.0, 20.0, 24.0, 29.0, 25.0, 27.0, 25.0, 24.0, 26.0, 19.0, 25.0, 26.0, 25.0, 28.0, 27.0, 22.0, 21.0, 20.0, 26.0, 23.0, 27.0, 18.0, 26.0, 31.0, 30.0, 22.0, 28.0, 31.0, 35.0, 21.0, 27.0, 24.0, 25.0, 23.0, 20.0, 21.0, 32.0, 28.0, 26.0, 26.0, 26.0, 29.0, 26.0, 22.0, 28.0, 30.0, 23.0, 36.4, 20.3, 25.4, 18.0, 19.0, 20.6, 19.4, 20.5, 20.2, 19.2, 18.0, 18.0, 18.0, 16.0, 20.5, 17.0, 20.8, 26.8, 18.0, 19.0, 17.0, 16.2, 23.5, 23.0, 21.5, 18.0, 19.8, 17.7, 19.0, 18.1, 18.6, 20.2, 20.6, 28.8, 16.0, 32.7, 22.4, 22.5, 20.0, 19.0, 22.0, 24.0, 22.0, 22.0, 15.0, 16.0, 16.0, 18.0, 25.0, 19.0, 38.0, 18.0, 22.0, 20.0, 21.0, 18.0, 15.0, 16.0, 17.0, 15.0, 15.0, 18.0, 19.0, 20.0, 20.0, 19.1, 19.0, 18.0, 17.5, 20.5, 17.6, 19.0, 20.2, 16.5, 21.0, 22.0, 17.5, 18.5, 18.0, 18.5, 18.0, 24.2, 25.4, 30.7, 21.0, 21.0, 14.0, 26.6, 17.0, 11.0, 13.0, 16.0, 18.0, 15.0, 9.0, 15.0, 10.0, 14.0, 14.0, 14.0, 15.0, 15.0, 13.0, 14.0, 15.0, 13.0, 14.0, 14.0, 12.0, 14.0, 14.0, 10.0, 15.0, 15.0, 13.0, 13.0, 13.0, 16.0, 15.0, 17.5, 17.0, 15.5, 15.0, 16.0, 15.5, 15.5, 16.0, 12.0, 13.0, 16.5, 12.0, 13.0, 11.0, 16.0, 15.0, 16.0, 14.0, 20.0, 13.0, 14.0, 14.0, 14.0, 13.0, 16.0, 17.5, 16.0, 15.5, 14.5, 15.0, 11.0, 13.0, 19.9, 15.5, 19.2, 18.5, 23.0, 23.9, 14.0, 13.0, 13.0, 15.0, 13.0, 12.0, 13.0, 11.0, 17.0, 14.0, 16.9, 18.2, 16.5, 17.6, 19.4, 20.2, 12.0, 19.2, 18.1, 17.5, 13.0, 14.0, 14.0, 13.0, 12.0, 14.0, 13.0, 14.0, 13.0, 17.0, 13.0, 18.0], "y_values": [110, 100, 90, 97, 63, 83, 67, 78, 110, 68, 48, 66, 52, 70, 60, 88, 89, 70, 97, 75, 70, 71, 80, 80, 65, 71, 95, 88, 71, 115, 97, 85, 105, 95, 68, 75, 88, 78, 86, 53, 115, 98, 88, 95, 81, 70, 71, 96, 78, 83, 75, 67, 97, 92, 79, 83, 70, 96, 58, 80, 68, 88, 102, 72, 75, 70, 71, 53, 79, 60, 52, 70, 65, 90, 93, 92, 90, 84, 85, 88, 88, 74, 88, 74, 100, 75, 75, 74, 65, 80, 65, 68, 63, 84, 52, 86, 90, 84, 96, 68, 92, 67, 67, 70, 75, 88, 70, 67, 63, 68, 62, 65, 75, 92, 75, 90, 78, 105, 90, 90, 65, 70, 60, 76, 90, 88, 65, 48, 48, 65, 67, 60, 64, 58, 84, 92, 84, 84, 72, 88, 62, 67, 67, 67, 69, 97, 82, 75, 65, 80, 67, 72, 80, 75, 110, 95, 112, 91, 75, 49, 75, 88, 87, 90, 90, 85, 95, 113, 95, 90, 88, 94, 72, 88, 46, 86, 88, 112, 78, 52, 76, 76, 90, 65, 69, 87, 60, 95, 80, 54, 90, 86, 61, 75, 70, 67, 46, 83, 69, 86, 92, 70, 97, 67, 103, 77, 88, 100, 105, 90, 100, 85, 105, 88, 100, 105, 100, 95, 125, 85, 115, 100, 88, 100, 133, 110, 95, 115, 110, 85, 165, 100, 120, 110, 90, 110, 115, 105, 132, 110, 90, 95, 100, 97, 81, 105, 100, 100, 100, 110, 105, 110, 90, 85, 97, 112, 100, 110, 95, 110, 105, 110, 72, 72, 105, 95, 122, 100, 90, 108, 97, 110, 105, 85, 100, 88, 120, 90, 95, 95, 110, 78, 98, 100, 120, 116, 76, 85, 107, 175, 105, 140, 210, 165, 150, 150, 165, 193, 198, 215, 215, 153, 225, 190, 170, 175, 160, 150, 170, 225, 165, 180, 150, 220, 200, 150, 150, 145, 130, 150, 230, 145, 145, 110, 145, 130, 180, 170, 190, 149, 180, 170, 180, 167, 150, 180, 170, 145, 150, 148, 110, 129, 150, 140, 150, 150, 140, 140, 150, 120, 152, 150, 150, 175, 110, 142, 125, 150, 125, 90, 150, 140, 130, 150, 190, 160, 155, 208, 150, 153, 155, 135, 138, 129, 140, 139, 225, 145, 139, 140, 215, 175, 150, 150, 198, 137, 145, 150, 175, 130, 158, 130], "chart_index": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "PanTool", "id": "f32cae39-b4d6-4ef4-bb53-cb7aaad9ec31", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "228b54df-f70c-48bd-869f-18d282911e25"}}}, {"type": "Grid", "id": "1e22c12c-7843-4799-9f32-81c11d9a7ca2", "attributes": {"ticker": {"type": "BasicTicker", "id": "7fe11198-9df8-4599-a8b3-cb5351b513b0"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "228b54df-f70c-48bd-869f-18d282911e25"}}}, {"type": "HelpTool", "id": "6fa2c673-9173-4b8f-a4d0-ca76037f413c", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "228b54df-f70c-48bd-869f-18d282911e25"}}}, {"type": "Circle", "id": "555da6b6-1316-472b-9e12-b582b92dd318", "attributes": {"line_color": {"value": "#f22c40"}, "y": {"field": "y_values"}, "x": {"field": "x_values"}, "size": {"value": 8, "units": "screen"}, "fill_color": {"value": "#f22c40"}, "fill_alpha": {"value": 0.7}}}, {"type": "Grid", "id": "797dde58-4ea5-40b0-8395-345cc7c1f65c", "attributes": {"ticker": {"type": "BasicTicker", "id": "72fe67fb-f426-42ef-852d-b27360a74925"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Chart", "id": "228b54df-f70c-48bd-869f-18d282911e25"}}}, {"type": "BasicTicker", "id": "72fe67fb-f426-42ef-852d-b27360a74925", "attributes": {}}], "root_ids": ["228b54df-f70c-48bd-869f-18d282911e25"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "3d2e598b-6dd3-4774-8602-92a4d49971ab", "modelid": "228b54df-f70c-48bd-869f-18d282911e25", "elementid": "9bc2ab1e-c15b-4278-9e9c-cd9ee60acf67"}];
          
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