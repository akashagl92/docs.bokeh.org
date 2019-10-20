
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
  };var element = document.getElementById("893e5090-ae03-466b-8e5a-2dfdfe8fb4b1");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '893e5090-ae03-466b-8e5a-2dfdfe8fb4b1' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"158061fd-69e9-4ed0-bcf1-941465c0b3fc": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "WheelZoomTool", "id": "6307e2a9-f8f4-4a97-8741-f636b7e5567e", "attributes": {"plot": {"type": "Plot", "id": "8c211dbd-993b-4254-86e9-3c3e48fdbc5c"}}}, {"type": "Line", "id": "ba5e8650-cac5-4679-b3ad-4df902113997", "attributes": {"line_color": {"value": "#000000"}, "x": {"field": "Series 0"}, "y": {"field": "Series 1"}}}, {"type": "GlyphRenderer", "id": "c6e5e20d-a4d9-40d6-8011-ee52b9cb5709", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "8bbe77f3-558f-477e-b544-a40c16206d8f"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "ba5e8650-cac5-4679-b3ad-4df902113997"}}}, {"type": "PanTool", "id": "ab92cae6-83fe-431b-88cc-d69c46ca9bbf", "attributes": {"plot": {"type": "Plot", "id": "8c211dbd-993b-4254-86e9-3c3e48fdbc5c"}}}, {"type": "DataRange1d", "id": "09fcb3e6-94f7-4f69-9690-fc1fb1279b53", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "fc678c09-0401-4542-8267-ca8cd1a24484", "attributes": {}}, {"type": "LinearAxis", "id": "58bd23f1-dec3-4473-bdbe-0d2f88cc5c3d", "attributes": {"major_label_text_font": "sans-serif", "axis_label_text_font_size": {"value": "14.400000pt"}, "ticker": {"type": "BasicTicker", "id": "40a3809d-92da-4b43-bda1-c34c20bf3578"}, "plot": {"type": "Plot", "id": "8c211dbd-993b-4254-86e9-3c3e48fdbc5c"}, "major_label_text_font_size": {"value": "10.000000pt"}, "formatter": {"type": "BasicTickFormatter", "id": "46492f2d-8d61-430b-92db-c374e5072220"}, "axis_label": "y", "axis_label_text_font": "sans-serif"}}, {"type": "PreviewSaveTool", "id": "5e8ddebf-64f7-4a8b-8dbc-ffd159410d7c", "attributes": {"plot": {"type": "Plot", "id": "8c211dbd-993b-4254-86e9-3c3e48fdbc5c"}}}, {"type": "HelpTool", "id": "bd6d0245-b254-4288-89be-b0fdbb2b0cfc", "attributes": {"plot": {"type": "Plot", "id": "8c211dbd-993b-4254-86e9-3c3e48fdbc5c"}}}, {"type": "BasicTickFormatter", "id": "46492f2d-8d61-430b-92db-c374e5072220", "attributes": {}}, {"type": "Grid", "id": "46b16872-456d-4b36-8f0b-f8d94d422bb1", "attributes": {"ticker": {"type": "BasicTicker", "id": "40a3809d-92da-4b43-bda1-c34c20bf3578"}, "grid_line_color": {"value": "white"}, "dimension": 1, "grid_line_width": {"value": 1.4}, "plot": {"type": "Plot", "id": "8c211dbd-993b-4254-86e9-3c3e48fdbc5c"}}}, {"type": "ColumnDataSource", "id": "8bbe77f3-558f-477e-b544-a40c16206d8f", "attributes": {"data": {"Series 1": [1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 2.0, 2.0, 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 7.0, 7.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0, 10.0, 10.0, 11.0, 11.0, 12.0, 12.0, 13.0, 13.0, 14.0, 14.0, 13.0, 13.0, 12.0, 12.0, 11.0, 11.0, 10.0, 10.0, 9.0, 9.0, 8.0, 8.0, 7.0, 7.0, 8.0, 8.0, 7.0, 7.0, 6.0, 6.0, 7.0, 7.0, 6.0, 6.0, 7.0, 7.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0, 8.0, 8.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0, 8.0, 8.0, 9.0, 9.0, 10.0, 10.0, 11.0, 11.0, 10.0, 10.0, 9.0, 9.0, 10.0, 10.0, 9.0, 9.0, 10.0, 10.0, 11.0, 11.0, 12.0, 12.0, 11.0, 11.0, 12.0, 12.0, 11.0, 11.0, 12.0, 12.0, 11.0, 11.0, 12.0, 12.0, 13.0, 13.0, 12.0, 12.0, 13.0, 13.0, 14.0, 14.0, 13.0, 13.0, 14.0, 14.0, 13.0, 13.0, 14.0, 14.0, 15.0, 15.0, 16.0, 16.0, 15.0, 15.0, 14.0, 14.0, 13.0, 13.0, 14.0, 14.0, 13.0, 13.0, 12.0, 12.0, 11.0, 11.0, 12.0, 12.0, 11.0, 11.0, 10.0, 10.0, 11.0, 11.0, 12.0, 12.0, 13.0, 13.0, 14.0, 14.0, 15.0, 15.0, 16.0, 16.0, 17.0, 17.0, 18.0, 18.0, 19.0, 19.0, 20.0, 20.0, 19.0, 19.0, 20.0, 20.0, 19.0, 19.0, 18.0, 18.0, 19.0, 19.0], "Series 0": [0.0, 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0, 10.0, 10.0, 11.0, 11.0, 12.0, 12.0, 13.0, 13.0, 14.0, 14.0, 15.0, 15.0, 16.0, 16.0, 17.0, 17.0, 18.0, 18.0, 19.0, 19.0, 20.0, 20.0, 21.0, 21.0, 22.0, 22.0, 23.0, 23.0, 24.0, 24.0, 25.0, 25.0, 26.0, 26.0, 27.0, 27.0, 28.0, 28.0, 29.0, 29.0, 30.0, 30.0, 31.0, 31.0, 32.0, 32.0, 33.0, 33.0, 34.0, 34.0, 35.0, 35.0, 36.0, 36.0, 37.0, 37.0, 38.0, 38.0, 39.0, 39.0, 40.0, 40.0, 41.0, 41.0, 42.0, 42.0, 43.0, 43.0, 44.0, 44.0, 45.0, 45.0, 46.0, 46.0, 47.0, 47.0, 48.0, 48.0, 49.0, 49.0, 50.0, 50.0, 51.0, 51.0, 52.0, 52.0, 53.0, 53.0, 54.0, 54.0, 55.0, 55.0, 56.0, 56.0, 57.0, 57.0, 58.0, 58.0, 59.0, 59.0, 60.0, 60.0, 61.0, 61.0, 62.0, 62.0, 63.0, 63.0, 64.0, 64.0, 65.0, 65.0, 66.0, 66.0, 67.0, 67.0, 68.0, 68.0, 69.0, 69.0, 70.0, 70.0, 71.0, 71.0, 72.0, 72.0, 73.0, 73.0, 74.0, 74.0, 75.0, 75.0, 76.0, 76.0, 77.0, 77.0, 78.0, 78.0, 79.0, 79.0, 80.0, 80.0, 81.0, 81.0, 82.0, 82.0, 83.0, 83.0, 84.0, 84.0, 85.0, 85.0, 86.0, 86.0, 87.0, 87.0, 88.0, 88.0, 89.0, 89.0, 90.0, 90.0, 91.0, 91.0, 92.0, 92.0, 93.0, 93.0, 94.0, 94.0, 95.0, 95.0, 96.0, 96.0, 97.0, 97.0, 98.0, 98.0, 99.0]}, "column_names": ["Series 0", "Series 1"], "callback": null}}, {"type": "Plot", "id": "8c211dbd-993b-4254-86e9-3c3e48fdbc5c", "attributes": {"tools": [{"type": "PanTool", "id": "ab92cae6-83fe-431b-88cc-d69c46ca9bbf"}, {"type": "WheelZoomTool", "id": "6307e2a9-f8f4-4a97-8741-f636b7e5567e"}, {"type": "BoxZoomTool", "id": "915c7caa-799f-46e8-a558-8c0199fc4a57"}, {"type": "PreviewSaveTool", "id": "5e8ddebf-64f7-4a8b-8dbc-ffd159410d7c"}, {"type": "ResizeTool", "id": "c3245a61-2f4c-4658-8cb9-e218753a5d47"}, {"type": "ResetTool", "id": "bf263c65-2275-4266-b900-cd872e8976e6"}, {"type": "HelpTool", "id": "bd6d0245-b254-4288-89be-b0fdbb2b0cfc"}], "plot_width": 880, "x_range": {"type": "DataRange1d", "id": "ef7c323e-d251-4eb9-8ade-6f082a328885"}, "plot_height": 640, "renderers": [{"type": "LinearAxis", "id": "bc33fbaf-7ee4-469f-98c5-fbfab13c2ad5"}, {"type": "Grid", "id": "aaf05078-c538-4df0-b4eb-76f53f336576"}, {"type": "LinearAxis", "id": "58bd23f1-dec3-4473-bdbe-0d2f88cc5c3d"}, {"type": "Grid", "id": "46b16872-456d-4b36-8f0b-f8d94d422bb1"}, {"type": "GlyphRenderer", "id": "2b0b83fd-6dc1-447c-ab79-26d1d7a92d90"}, {"type": "BoxAnnotation", "id": "444bcde1-00f9-4307-8c27-af1ca393507b"}, {"type": "GlyphRenderer", "id": "c6e5e20d-a4d9-40d6-8011-ee52b9cb5709"}], "y_range": {"type": "DataRange1d", "id": "09fcb3e6-94f7-4f69-9690-fc1fb1279b53"}, "left": [{"type": "LinearAxis", "id": "58bd23f1-dec3-4473-bdbe-0d2f88cc5c3d"}], "background_fill_color": {"value": "#E5E5E5"}, "tool_events": {"type": "ToolEvents", "id": "5c17741c-6b9c-45f7-bc12-05d296ddcca6"}, "below": [{"type": "LinearAxis", "id": "bc33fbaf-7ee4-469f-98c5-fbfab13c2ad5"}], "title": "Step ggplot-based plot in Bokeh."}}, {"type": "BasicTickFormatter", "id": "3430334d-f54e-4fb6-8698-2cd7dbfa9b9f", "attributes": {}}, {"type": "X", "id": "357ffa1a-0b1e-4aec-868e-b3918bb14d99", "attributes": {}}, {"type": "ResizeTool", "id": "c3245a61-2f4c-4658-8cb9-e218753a5d47", "attributes": {"plot": {"type": "Plot", "id": "8c211dbd-993b-4254-86e9-3c3e48fdbc5c"}}}, {"type": "GlyphRenderer", "id": "2b0b83fd-6dc1-447c-ab79-26d1d7a92d90", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "21a3c2a9-8cd0-4a26-a5e4-04ab3eb71170"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "X", "id": "357ffa1a-0b1e-4aec-868e-b3918bb14d99"}}}, {"type": "BasicTicker", "id": "40a3809d-92da-4b43-bda1-c34c20bf3578", "attributes": {}}, {"type": "BoxAnnotation", "id": "444bcde1-00f9-4307-8c27-af1ca393507b", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Grid", "id": "aaf05078-c538-4df0-b4eb-76f53f336576", "attributes": {"ticker": {"type": "BasicTicker", "id": "fc678c09-0401-4542-8267-ca8cd1a24484"}, "grid_line_color": {"value": "white"}, "grid_line_width": {"value": 1.4}, "plot": {"type": "Plot", "id": "8c211dbd-993b-4254-86e9-3c3e48fdbc5c"}}}, {"type": "ColumnDataSource", "id": "21a3c2a9-8cd0-4a26-a5e4-04ab3eb71170", "attributes": {"data": {"name": "ax_end"}, "column_names": ["name"], "callback": null}}, {"type": "ToolEvents", "id": "5c17741c-6b9c-45f7-bc12-05d296ddcca6", "attributes": {}}, {"type": "DataRange1d", "id": "ef7c323e-d251-4eb9-8ade-6f082a328885", "attributes": {"callback": null}}, {"type": "ResetTool", "id": "bf263c65-2275-4266-b900-cd872e8976e6", "attributes": {"plot": {"type": "Plot", "id": "8c211dbd-993b-4254-86e9-3c3e48fdbc5c"}}}, {"type": "LinearAxis", "id": "bc33fbaf-7ee4-469f-98c5-fbfab13c2ad5", "attributes": {"major_label_text_font": "sans-serif", "axis_label_text_font_size": {"value": "14.400000pt"}, "ticker": {"type": "BasicTicker", "id": "fc678c09-0401-4542-8267-ca8cd1a24484"}, "plot": {"type": "Plot", "id": "8c211dbd-993b-4254-86e9-3c3e48fdbc5c"}, "major_label_text_font_size": {"value": "10.000000pt"}, "formatter": {"type": "BasicTickFormatter", "id": "3430334d-f54e-4fb6-8698-2cd7dbfa9b9f"}, "axis_label": "x", "axis_label_text_font": "sans-serif"}}, {"type": "BoxZoomTool", "id": "915c7caa-799f-46e8-a558-8c0199fc4a57", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "444bcde1-00f9-4307-8c27-af1ca393507b"}, "plot": {"type": "Plot", "id": "8c211dbd-993b-4254-86e9-3c3e48fdbc5c"}}}], "root_ids": ["8c211dbd-993b-4254-86e9-3c3e48fdbc5c"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "158061fd-69e9-4ed0-bcf1-941465c0b3fc", "modelid": "8c211dbd-993b-4254-86e9-3c3e48fdbc5c", "elementid": "893e5090-ae03-466b-8e5a-2dfdfe8fb4b1"}];
          
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