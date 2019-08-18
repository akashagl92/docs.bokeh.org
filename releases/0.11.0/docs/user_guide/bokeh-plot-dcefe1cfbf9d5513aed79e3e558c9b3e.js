
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
  };var element = document.getElementById("e18322ad-a5d5-4de8-944e-a09996a10cc8");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'e18322ad-a5d5-4de8-944e-a09996a10cc8' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"e1b29199-fdf7-4388-bb69-fd0c5548718c": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ResetTool", "id": "058fd0bc-5a07-45f4-9766-94e5ac5d3542", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "349b6a3f-e23e-4c5d-8818-a24d9eab3382"}}}, {"type": "LinearAxis", "id": "36063853-2aed-4f1a-ab48-910d8c62e31e", "attributes": {"ticker": {"type": "BasicTicker", "id": "bea276ff-ac4c-45dd-82cf-8ff35224b3b9"}, "formatter": {"type": "BasicTickFormatter", "id": "d4900a68-2af2-44ed-9fd5-1b154d90826b"}, "axis_label": "Miles Per Gallon", "plot": {"type": "Plot", "subtype": "Chart", "id": "349b6a3f-e23e-4c5d-8818-a24d9eab3382"}}}, {"type": "BoxAnnotation", "id": "d43aa119-fdb9-4191-83fc-bb599e82915c", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "PanTool", "id": "bacae55e-056f-43ed-8faa-cc10eaccdf01", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "349b6a3f-e23e-4c5d-8818-a24d9eab3382"}}}, {"type": "BasicTicker", "id": "a523f752-517e-47f3-bb5e-66a44bb717b8", "attributes": {}}, {"type": "ResizeTool", "id": "b0b940d5-2611-4bb2-8ee1-e6c34311fc56", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "349b6a3f-e23e-4c5d-8818-a24d9eab3382"}}}, {"type": "WheelZoomTool", "id": "5eaafd9f-1377-46bc-acd2-f46ab9af6d0b", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "349b6a3f-e23e-4c5d-8818-a24d9eab3382"}}}, {"type": "HelpTool", "id": "46009756-307b-4af7-accf-919063f6f1e4", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "349b6a3f-e23e-4c5d-8818-a24d9eab3382"}}}, {"type": "BasicTickFormatter", "id": "3d90a8c1-34bc-4436-89bd-e2c5318f51d4", "attributes": {}}, {"type": "ColumnDataSource", "id": "b4f28feb-cf2d-4f8d-9a5c-fe2728dad39b", "attributes": {"data": {"x_values": [21.5, 23.7, 18.0, 19.0, 30.5, 33.5, 30.0, 30.5, 21.5, 30.0, 43.1, 36.1, 32.8, 39.4, 36.1, 25.1, 25.5, 29.0, 27.2, 30.9, 34.2, 27.2, 27.4, 35.7, 34.1, 31.9, 27.5, 22.3, 31.5, 21.6, 23.9, 23.8, 23.2, 21.1, 29.5, 26.0, 24.5, 29.0, 28.0, 33.0, 25.0, 22.0, 23.0, 23.0, 25.0, 29.0, 25.0, 24.0, 23.0, 23.0, 29.0, 31.0, 24.0, 25.0, 26.0, 27.0, 33.5, 25.5, 36.0, 30.0, 31.5, 19.0, 20.0, 26.5, 28.0, 32.0, 29.5, 33.0, 28.0, 24.5, 29.0, 34.5, 31.8, 28.4, 26.0, 24.0, 27.0, 29.0, 31.0, 34.0, 27.0, 36.0, 28.0, 31.6, 32.9, 32.4, 33.7, 33.0, 29.9, 28.1, 34.4, 37.0, 38.0, 32.0, 44.0, 27.0, 27.0, 36.0, 32.0, 31.0, 26.0, 32.0, 38.0, 34.0, 36.0, 36.0, 36.0, 38.0, 34.7, 34.1, 37.7, 46.6, 32.2, 37.0, 31.3, 29.8, 34.3, 27.9, 24.3, 28.0, 37.2, 32.1, 38.1, 41.5, 33.5, 26.4, 40.8, 44.3, 43.4, 37.0, 32.3, 35.1, 39.0, 39.1, 30.0, 25.8, 26.6, 27.2, 32.4, 35.0, 29.8, 33.8, 44.6, 30.0, 37.3, 24.0, 31.0, 24.0, 32.0, 26.0, 31.0, 22.0, 28.0, 26.0, 24.0, 24.0, 19.0, 20.0, 24.0, 29.0, 25.0, 27.0, 25.0, 24.0, 26.0, 19.0, 25.0, 26.0, 25.0, 28.0, 27.0, 22.0, 21.0, 20.0, 26.0, 23.0, 27.0, 18.0, 26.0, 31.0, 30.0, 22.0, 28.0, 31.0, 35.0, 21.0, 27.0, 24.0, 25.0, 23.0, 20.0, 21.0, 32.0, 28.0, 26.0, 26.0, 26.0, 29.0, 26.0, 22.0, 28.0, 30.0, 23.0, 36.4, 20.3, 25.4, 18.0, 19.0, 20.6, 19.4, 20.5, 20.2, 19.2, 18.0, 18.0, 18.0, 16.0, 20.5, 17.0, 20.8, 26.8, 18.0, 19.0, 17.0, 16.2, 23.5, 23.0, 21.5, 18.0, 19.8, 17.7, 19.0, 18.1, 18.6, 20.2, 20.6, 28.8, 16.0, 32.7, 22.4, 22.5, 20.0, 19.0, 22.0, 24.0, 22.0, 22.0, 15.0, 16.0, 16.0, 18.0, 25.0, 19.0, 38.0, 18.0, 22.0, 20.0, 21.0, 18.0, 15.0, 16.0, 17.0, 15.0, 15.0, 18.0, 19.0, 20.0, 20.0, 19.1, 19.0, 18.0, 17.5, 20.5, 17.6, 19.0, 20.2, 16.5, 21.0, 22.0, 17.5, 18.5, 18.0, 18.5, 18.0, 24.2, 25.4, 30.7, 21.0, 21.0, 14.0, 26.6, 17.0, 11.0, 13.0, 16.0, 18.0, 15.0, 9.0, 15.0, 10.0, 14.0, 14.0, 14.0, 15.0, 15.0, 13.0, 14.0, 15.0, 13.0, 14.0, 14.0, 12.0, 14.0, 14.0, 10.0, 15.0, 15.0, 13.0, 13.0, 13.0, 16.0, 15.0, 17.5, 17.0, 15.5, 15.0, 16.0, 15.5, 15.5, 16.0, 12.0, 13.0, 16.5, 12.0, 13.0, 11.0, 16.0, 15.0, 16.0, 14.0, 20.0, 13.0, 14.0, 14.0, 14.0, 13.0, 16.0, 17.5, 16.0, 15.5, 14.5, 15.0, 11.0, 13.0, 19.9, 15.5, 19.2, 18.5, 23.0, 23.9, 14.0, 13.0, 13.0, 15.0, 13.0, 12.0, 13.0, 11.0, 17.0, 14.0, 16.9, 18.2, 16.5, 17.6, 19.4, 20.2, 12.0, 19.2, 18.1, 17.5, 13.0, 14.0, 14.0, 13.0, 12.0, 14.0, 13.0, 14.0, 13.0, 17.0, 13.0, 18.0], "y_values": [110, 100, 90, 97, 63, 83, 67, 78, 110, 68, 48, 66, 52, 70, 60, 88, 89, 70, 97, 75, 70, 71, 80, 80, 65, 71, 95, 88, 71, 115, 97, 85, 105, 95, 68, 75, 88, 78, 86, 53, 115, 98, 88, 95, 81, 70, 71, 96, 78, 83, 75, 67, 97, 92, 79, 83, 70, 96, 58, 80, 68, 88, 102, 72, 75, 70, 71, 53, 79, 60, 52, 70, 65, 90, 93, 92, 90, 84, 85, 88, 88, 74, 88, 74, 100, 75, 75, 74, 65, 80, 65, 68, 63, 84, 52, 86, 90, 84, 96, 68, 92, 67, 67, 70, 75, 88, 70, 67, 63, 68, 62, 65, 75, 92, 75, 90, 78, 105, 90, 90, 65, 70, 60, 76, 90, 88, 65, 48, 48, 65, 67, 60, 64, 58, 84, 92, 84, 84, 72, 88, 62, 67, 67, 67, 69, 97, 82, 75, 65, 80, 67, 72, 80, 75, 110, 95, 112, 91, 75, 49, 75, 88, 87, 90, 90, 85, 95, 113, 95, 90, 88, 94, 72, 88, 46, 86, 88, 112, 78, 52, 76, 76, 90, 65, 69, 87, 60, 95, 80, 54, 90, 86, 61, 75, 70, 67, 46, 83, 69, 86, 92, 70, 97, 67, 103, 77, 88, 100, 105, 90, 100, 85, 105, 88, 100, 105, 100, 95, 125, 85, 115, 100, 88, 100, 133, 110, 95, 115, 110, 85, 165, 100, 120, 110, 90, 110, 115, 105, 132, 110, 90, 95, 100, 97, 81, 105, 100, 100, 100, 110, 105, 110, 90, 85, 97, 112, 100, 110, 95, 110, 105, 110, 72, 72, 105, 95, 122, 100, 90, 108, 97, 110, 105, 85, 100, 88, 120, 90, 95, 95, 110, 78, 98, 100, 120, 116, 76, 85, 107, 175, 105, 140, 210, 165, 150, 150, 165, 193, 198, 215, 215, 153, 225, 190, 170, 175, 160, 150, 170, 225, 165, 180, 150, 220, 200, 150, 150, 145, 130, 150, 230, 145, 145, 110, 145, 130, 180, 170, 190, 149, 180, 170, 180, 167, 150, 180, 170, 145, 150, 148, 110, 129, 150, 140, 150, 150, 140, 140, 150, 120, 152, 150, 150, 175, 110, 142, 125, 150, 125, 90, 150, 140, 130, 150, 190, 160, 155, 208, 150, 153, 155, 135, 138, 129, 140, 139, 225, 145, 139, 140, 215, 175, 150, 150, 198, 137, 145, 150, 175, 130, 158, 130], "chart_index": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "Plot", "id": "349b6a3f-e23e-4c5d-8818-a24d9eab3382", "attributes": {"y_range": {"type": "Range1d", "id": "d0457ce7-08f9-48a6-a413-07ae90d5e77d"}, "width": 400, "legend": null, "yscale": "auto", "tools": [{"type": "PanTool", "id": "bacae55e-056f-43ed-8faa-cc10eaccdf01"}, {"type": "WheelZoomTool", "id": "5eaafd9f-1377-46bc-acd2-f46ab9af6d0b"}, {"type": "BoxZoomTool", "id": "9d99e209-ea96-4233-b256-6f43e7e61960"}, {"type": "PreviewSaveTool", "id": "2e4b083e-2e2d-4a05-b770-58f53c3710f5"}, {"type": "ResizeTool", "id": "b0b940d5-2611-4bb2-8ee1-e6c34311fc56"}, {"type": "ResetTool", "id": "058fd0bc-5a07-45f4-9766-94e5ac5d3542"}, {"type": "HelpTool", "id": "46009756-307b-4af7-accf-919063f6f1e4"}], "title": "HP vs MPG", "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "2a8656e3-8ef0-4396-a57e-c56a78b3257a"}], "x_range": {"type": "Range1d", "id": "0e5983f1-1850-4878-a0f6-01ae0e48bd14"}, "y_mapper_type": "auto", "xscale": "auto", "below": [{"type": "LinearAxis", "id": "36063853-2aed-4f1a-ab48-910d8c62e31e"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "bb385f87-3ad0-45d6-94c4-019cfdf2af42"}, "renderers": [{"type": "BoxAnnotation", "id": "d43aa119-fdb9-4191-83fc-bb599e82915c"}, {"type": "GlyphRenderer", "id": "e190c711-84e0-4f0d-a748-4df9decf79d0"}, {"type": "LinearAxis", "id": "36063853-2aed-4f1a-ab48-910d8c62e31e"}, {"type": "LinearAxis", "id": "2a8656e3-8ef0-4396-a57e-c56a78b3257a"}, {"type": "Grid", "id": "8fd40f9b-dde7-4103-9737-c1a08c4bf0c3"}, {"type": "Grid", "id": "8b606d13-9845-4287-8d0f-5c820b80dcc9"}]}, "subtype": "Chart"}, {"type": "GlyphRenderer", "id": "e190c711-84e0-4f0d-a748-4df9decf79d0", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "b4f28feb-cf2d-4f8d-9a5c-fe2728dad39b"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "9320b90a-d9b9-4520-8d7a-5d4b58cfd55f"}}}, {"type": "Grid", "id": "8fd40f9b-dde7-4103-9737-c1a08c4bf0c3", "attributes": {"ticker": {"type": "BasicTicker", "id": "bea276ff-ac4c-45dd-82cf-8ff35224b3b9"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "349b6a3f-e23e-4c5d-8818-a24d9eab3382"}}}, {"type": "Range1d", "id": "0e5983f1-1850-4878-a0f6-01ae0e48bd14", "attributes": {"start": 5.24, "end": 50.36, "callback": null}}, {"type": "LinearAxis", "id": "2a8656e3-8ef0-4396-a57e-c56a78b3257a", "attributes": {"ticker": {"type": "BasicTicker", "id": "a523f752-517e-47f3-bb5e-66a44bb717b8"}, "formatter": {"type": "BasicTickFormatter", "id": "3d90a8c1-34bc-4436-89bd-e2c5318f51d4"}, "axis_label": "Horsepower", "plot": {"type": "Plot", "subtype": "Chart", "id": "349b6a3f-e23e-4c5d-8818-a24d9eab3382"}}}, {"type": "ToolEvents", "id": "bb385f87-3ad0-45d6-94c4-019cfdf2af42", "attributes": {}}, {"type": "BasicTickFormatter", "id": "d4900a68-2af2-44ed-9fd5-1b154d90826b", "attributes": {}}, {"type": "Range1d", "id": "d0457ce7-08f9-48a6-a413-07ae90d5e77d", "attributes": {"start": 27.599999999999998, "end": 248.4, "callback": null}}, {"type": "BoxZoomTool", "id": "9d99e209-ea96-4233-b256-6f43e7e61960", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "d43aa119-fdb9-4191-83fc-bb599e82915c"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "349b6a3f-e23e-4c5d-8818-a24d9eab3382"}}}, {"type": "Grid", "id": "8b606d13-9845-4287-8d0f-5c820b80dcc9", "attributes": {"ticker": {"type": "BasicTicker", "id": "a523f752-517e-47f3-bb5e-66a44bb717b8"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Chart", "id": "349b6a3f-e23e-4c5d-8818-a24d9eab3382"}}}, {"type": "BasicTicker", "id": "bea276ff-ac4c-45dd-82cf-8ff35224b3b9", "attributes": {}}, {"type": "Circle", "id": "9320b90a-d9b9-4520-8d7a-5d4b58cfd55f", "attributes": {"line_color": {"value": "navy"}, "y": {"field": "y_values"}, "x": {"field": "x_values"}, "size": {"value": 8, "units": "screen"}, "fill_color": {"value": "navy"}, "fill_alpha": {"value": 0.7}}}, {"type": "PreviewSaveTool", "id": "2e4b083e-2e2d-4a05-b770-58f53c3710f5", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "349b6a3f-e23e-4c5d-8818-a24d9eab3382"}}}], "root_ids": ["349b6a3f-e23e-4c5d-8818-a24d9eab3382"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "e1b29199-fdf7-4388-bb69-fd0c5548718c", "modelid": "349b6a3f-e23e-4c5d-8818-a24d9eab3382", "elementid": "e18322ad-a5d5-4de8-944e-a09996a10cc8"}];
          
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