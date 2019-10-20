
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
  };var element = document.getElementById("2ee6a162-e7c6-4648-9ef4-b6ed8a731cf4");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2ee6a162-e7c6-4648-9ef4-b6ed8a731cf4' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"d372c535-f268-4f75-8603-d4cc2daf499b": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Plot", "id": "d7fcd8c3-beb4-4f72-9c5c-ce1dfb7a2c12", "attributes": {"y_range": {"type": "Range1d", "id": "e5b314f2-f64f-4e8d-9371-abdfd36380bf"}, "width": 400, "legend": "top_left", "yscale": "auto", "tools": [{"type": "PanTool", "id": "de6f891e-e095-4b8a-b03b-877a5c04a457"}, {"type": "WheelZoomTool", "id": "6e0c97df-cbc0-4ee8-a260-e8a6cedf4732"}, {"type": "BoxZoomTool", "id": "03e37ad5-e312-47b5-bca1-1abe08af4729"}, {"type": "PreviewSaveTool", "id": "ba499c70-e516-4f78-aaf0-8d5312e89ef1"}, {"type": "ResizeTool", "id": "87a6b8ac-4633-4311-aa32-2fb7a099a7b5"}, {"type": "ResetTool", "id": "c2beef5b-bd88-45f3-be8f-748b86a39f74"}, {"type": "HelpTool", "id": "670611a4-7efc-4c1b-813e-d69e4f99899c"}], "title": "HP vs DISPL", "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "debeefca-d6df-48f7-b35f-5621e9f75b40"}], "x_range": {"type": "Range1d", "id": "f1bd16df-14b6-477a-a4af-d689d3089578"}, "y_mapper_type": "auto", "xscale": "auto", "below": [{"type": "LinearAxis", "id": "2f7da3be-38ae-4561-be89-190055110fdb"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "1177e376-bbe8-48be-9da4-3334f460ca5d"}, "renderers": [{"type": "BoxAnnotation", "id": "c5176d97-959e-428c-8f3d-5f78bf42924b"}, {"type": "GlyphRenderer", "id": "a040c433-b0e7-439c-9bdd-d6e44324ed9f"}, {"type": "Legend", "id": "b3c6464c-38eb-41db-bb56-8aa097cdcc30"}, {"type": "LinearAxis", "id": "2f7da3be-38ae-4561-be89-190055110fdb"}, {"type": "LinearAxis", "id": "debeefca-d6df-48f7-b35f-5621e9f75b40"}, {"type": "Grid", "id": "5c9c80e7-da05-4876-a43c-0a0308ac44e8"}, {"type": "Grid", "id": "d2cb74e7-f055-4630-b99b-f107cfe708b0"}]}, "subtype": "Chart"}, {"type": "Grid", "id": "5c9c80e7-da05-4876-a43c-0a0308ac44e8", "attributes": {"ticker": {"type": "BasicTicker", "id": "9be37ce4-66a4-4f23-8444-2b0e38d150f8"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "d7fcd8c3-beb4-4f72-9c5c-ce1dfb7a2c12"}}}, {"type": "Square", "id": "90adebaa-f8f2-4682-a805-f1a4cd69d981", "attributes": {"line_color": {"value": "#f22c40"}, "y": {"field": "y_values"}, "x": {"field": "x_values"}, "size": {"value": 8, "units": "screen"}, "fill_color": {"value": "#f22c40"}, "fill_alpha": {"value": 0.7}}}, {"type": "BasicTickFormatter", "id": "c36f8119-60ee-46a9-a544-8e1f00038e04", "attributes": {}}, {"type": "BoxAnnotation", "id": "c5176d97-959e-428c-8f3d-5f78bf42924b", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ResizeTool", "id": "87a6b8ac-4633-4311-aa32-2fb7a099a7b5", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "d7fcd8c3-beb4-4f72-9c5c-ce1dfb7a2c12"}}}, {"type": "ResetTool", "id": "c2beef5b-bd88-45f3-be8f-748b86a39f74", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "d7fcd8c3-beb4-4f72-9c5c-ce1dfb7a2c12"}}}, {"type": "Grid", "id": "d2cb74e7-f055-4630-b99b-f107cfe708b0", "attributes": {"ticker": {"type": "BasicTicker", "id": "12e9ed88-f993-491c-9c81-b856ebe2010a"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Chart", "id": "d7fcd8c3-beb4-4f72-9c5c-ce1dfb7a2c12"}}}, {"type": "ColumnDataSource", "id": "674501a3-06ad-481d-98fc-1f5c46a1991f", "attributes": {"data": {"x_values": [80.0, 70.0, 70.0, 70.0, 98.0, 98.0, 97.0, 97.0, 121.0, 98.0, 90.0, 98.0, 78.0, 85.0, 91.0, 140.0, 140.0, 90.0, 119.0, 105.0, 105.0, 141.0, 121.0, 98.0, 86.0, 89.0, 134.0, 140.0, 89.0, 121.0, 119.0, 151.0, 156.0, 134.0, 98.0, 97.0, 151.0, 97.0, 107.0, 91.0, 121.0, 121.0, 120.0, 115.0, 116.0, 90.0, 90.0, 134.0, 140.0, 140.0, 97.0, 79.0, 119.0, 140.0, 98.0, 101.0, 85.0, 122.0, 79.0, 111.0, 98.0, 120.0, 130.0, 140.0, 97.0, 85.0, 97.0, 91.0, 120.0, 98.0, 85.0, 105.0, 85.0, 151.0, 108.0, 140.0, 151.0, 135.0, 112.0, 112.0, 112.0, 105.0, 112.0, 120.0, 119.0, 108.0, 107.0, 105.0, 98.0, 141.0, 98.0, 91.0, 105.0, 135.0, 97.0, 140.0, 151.0, 135.0, 144.0, 91.0, 156.0, 91.0, 91.0, 108.0, 107.0, 120.0, 98.0, 91.0, 105.0, 91.0, 89.0, 86.0, 108.0, 119.0, 120.0, 134.0, 97.0, 156.0, 151.0, 151.0, 86.0, 98.0, 89.0, 98.0, 151.0, 140.0, 85.0, 90.0, 90.0, 85.0, 97.0, 81.0, 86.0, 79.0, 135.0, 156.0, 151.0, 135.0, 107.0, 122.0, 89.0, 97.0, 91.0, 146.0, 91.0, 120.0, 119.0, 90.0, 71.0, 122.0, 79.0, 140.0, 98.0, 116.0, 121.0, 113.0, 121.0, 114.0, 116.0, 68.0, 140.0, 97.0, 110.0, 107.0, 98.0, 122.0, 104.0, 121.0, 113.0, 140.0, 97.0, 108.0, 140.0, 97.0, 97.0, 122.0, 97.0, 121.0, 97.0, 76.0, 88.0, 121.0, 116.0, 71.0, 72.0, 120.0, 97.0, 113.0, 97.5, 97.0, 140.0, 122.0, 83.0, 90.0, 91.0, 79.0, 97.0, 98.0, 96.0, 122.0, 97.0, 79.0, 120.0, 121.0, 131.0, 183.0, 250.0, 250.0, 231.0, 232.0, 225.0, 200.0, 231.0, 250.0, 232.0, 225.0, 250.0, 200.0, 163.0, 200.0, 173.0, 232.0, 250.0, 250.0, 163.0, 173.0, 198.0, 231.0, 258.0, 200.0, 231.0, 232.0, 258.0, 225.0, 232.0, 225.0, 173.0, 225.0, 168.0, 231.0, 232.0, 198.0, 232.0, 146.0, 200.0, 250.0, 225.0, 250.0, 250.0, 258.0, 225.0, 181.0, 232.0, 262.0, 171.0, 232.0, 232.0, 231.0, 225.0, 258.0, 250.0, 231.0, 250.0, 250.0, 250.0, 225.0, 156.0, 225.0, 225.0, 156.0, 199.0, 250.0, 231.0, 225.0, 225.0, 200.0, 168.0, 199.0, 198.0, 258.0, 250.0, 250.0, 250.0, 232.0, 146.0, 168.0, 145.0, 200.0, 155.0, 400.0, 350.0, 302.0, 318.0, 350.0, 304.0, 318.0, 350.0, 304.0, 429.0, 360.0, 440.0, 351.0, 455.0, 390.0, 383.0, 400.0, 340.0, 400.0, 400.0, 455.0, 350.0, 383.0, 318.0, 454.0, 307.0, 318.0, 318.0, 350.0, 302.0, 318.0, 400.0, 350.0, 305.0, 260.0, 318.0, 302.0, 400.0, 350.0, 400.0, 351.0, 350.0, 360.0, 350.0, 400.0, 318.0, 350.0, 400.0, 350.0, 318.0, 351.0, 262.0, 302.0, 304.0, 302.0, 318.0, 350.0, 302.0, 305.0, 318.0, 304.0, 351.0, 318.0, 400.0, 360.0, 260.0, 351.0, 267.0, 360.0, 350.0, 260.0, 318.0, 302.0, 307.0, 304.0, 400.0, 350.0, 350.0, 429.0, 304.0, 351.0, 350.0, 318.0, 351.0, 302.0, 318.0, 302.0, 455.0, 305.0, 302.0, 318.0, 440.0, 400.0, 318.0, 400.0, 429.0, 302.0, 350.0, 304.0, 350.0, 305.0, 351.0, 307.0], "y_values": [110, 100, 90, 97, 63, 83, 67, 78, 110, 68, 48, 66, 52, 70, 60, 88, 89, 70, 97, 75, 70, 71, 80, 80, 65, 71, 95, 88, 71, 115, 97, 85, 105, 95, 68, 75, 88, 78, 86, 53, 115, 98, 88, 95, 81, 70, 71, 96, 78, 83, 75, 67, 97, 92, 79, 83, 70, 96, 58, 80, 68, 88, 102, 72, 75, 70, 71, 53, 79, 60, 52, 70, 65, 90, 93, 92, 90, 84, 85, 88, 88, 74, 88, 74, 100, 75, 75, 74, 65, 80, 65, 68, 63, 84, 52, 86, 90, 84, 96, 68, 92, 67, 67, 70, 75, 88, 70, 67, 63, 68, 62, 65, 75, 92, 75, 90, 78, 105, 90, 90, 65, 70, 60, 76, 90, 88, 65, 48, 48, 65, 67, 60, 64, 58, 84, 92, 84, 84, 72, 88, 62, 67, 67, 67, 69, 97, 82, 75, 65, 80, 67, 72, 80, 75, 110, 95, 112, 91, 75, 49, 75, 88, 87, 90, 90, 85, 95, 113, 95, 90, 88, 94, 72, 88, 46, 86, 88, 112, 78, 52, 76, 76, 90, 65, 69, 87, 60, 95, 80, 54, 90, 86, 61, 75, 70, 67, 46, 83, 69, 86, 92, 70, 97, 67, 103, 77, 88, 100, 105, 90, 100, 85, 105, 88, 100, 105, 100, 95, 125, 85, 115, 100, 88, 100, 133, 110, 95, 115, 110, 85, 165, 100, 120, 110, 90, 110, 115, 105, 132, 110, 90, 95, 100, 97, 81, 105, 100, 100, 100, 110, 105, 110, 90, 85, 97, 112, 100, 110, 95, 110, 105, 110, 72, 72, 105, 95, 122, 100, 90, 108, 97, 110, 105, 85, 100, 88, 120, 90, 95, 95, 110, 78, 98, 100, 120, 116, 76, 85, 107, 175, 105, 140, 210, 165, 150, 150, 165, 193, 198, 215, 215, 153, 225, 190, 170, 175, 160, 150, 170, 225, 165, 180, 150, 220, 200, 150, 150, 145, 130, 150, 230, 145, 145, 110, 145, 130, 180, 170, 190, 149, 180, 170, 180, 167, 150, 180, 170, 145, 150, 148, 110, 129, 150, 140, 150, 150, 140, 140, 150, 120, 152, 150, 150, 175, 110, 142, 125, 150, 125, 90, 150, 140, 130, 150, 190, 160, 155, 208, 150, 153, 155, 135, 138, 129, 140, 139, 225, 145, 139, 140, 215, 175, 150, 150, 198, 137, 145, 150, 175, 130, 158, 130], "chart_index": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "BasicTicker", "id": "12e9ed88-f993-491c-9c81-b856ebe2010a", "attributes": {}}, {"type": "PanTool", "id": "de6f891e-e095-4b8a-b03b-877a5c04a457", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "d7fcd8c3-beb4-4f72-9c5c-ce1dfb7a2c12"}}}, {"type": "PreviewSaveTool", "id": "ba499c70-e516-4f78-aaf0-8d5312e89ef1", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "d7fcd8c3-beb4-4f72-9c5c-ce1dfb7a2c12"}}}, {"type": "Range1d", "id": "f1bd16df-14b6-477a-a4af-d689d3089578", "attributes": {"start": 29.299999999999997, "end": 493.7, "callback": null}}, {"type": "HelpTool", "id": "670611a4-7efc-4c1b-813e-d69e4f99899c", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "d7fcd8c3-beb4-4f72-9c5c-ce1dfb7a2c12"}}}, {"type": "BasicTickFormatter", "id": "896c4214-3306-4964-90ba-985b6dff961b", "attributes": {}}, {"type": "WheelZoomTool", "id": "6e0c97df-cbc0-4ee8-a260-e8a6cedf4732", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "d7fcd8c3-beb4-4f72-9c5c-ce1dfb7a2c12"}}}, {"type": "LinearAxis", "id": "2f7da3be-38ae-4561-be89-190055110fdb", "attributes": {"ticker": {"type": "BasicTicker", "id": "9be37ce4-66a4-4f23-8444-2b0e38d150f8"}, "formatter": {"type": "BasicTickFormatter", "id": "896c4214-3306-4964-90ba-985b6dff961b"}, "axis_label": "Displacement", "plot": {"type": "Plot", "subtype": "Chart", "id": "d7fcd8c3-beb4-4f72-9c5c-ce1dfb7a2c12"}}}, {"type": "Legend", "id": "b3c6464c-38eb-41db-bb56-8aa097cdcc30", "attributes": {"location": "top_left", "plot": {"type": "Plot", "subtype": "Chart", "id": "d7fcd8c3-beb4-4f72-9c5c-ce1dfb7a2c12"}}}, {"type": "BasicTicker", "id": "9be37ce4-66a4-4f23-8444-2b0e38d150f8", "attributes": {}}, {"type": "Range1d", "id": "e5b314f2-f64f-4e8d-9371-abdfd36380bf", "attributes": {"start": 27.599999999999998, "end": 248.4, "callback": null}}, {"type": "ToolEvents", "id": "1177e376-bbe8-48be-9da4-3334f460ca5d", "attributes": {}}, {"type": "GlyphRenderer", "id": "a040c433-b0e7-439c-9bdd-d6e44324ed9f", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "674501a3-06ad-481d-98fc-1f5c46a1991f"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Square", "id": "90adebaa-f8f2-4682-a805-f1a4cd69d981"}}}, {"type": "LinearAxis", "id": "debeefca-d6df-48f7-b35f-5621e9f75b40", "attributes": {"ticker": {"type": "BasicTicker", "id": "12e9ed88-f993-491c-9c81-b856ebe2010a"}, "formatter": {"type": "BasicTickFormatter", "id": "c36f8119-60ee-46a9-a544-8e1f00038e04"}, "axis_label": "Horsepower", "plot": {"type": "Plot", "subtype": "Chart", "id": "d7fcd8c3-beb4-4f72-9c5c-ce1dfb7a2c12"}}}, {"type": "BoxZoomTool", "id": "03e37ad5-e312-47b5-bca1-1abe08af4729", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "c5176d97-959e-428c-8f3d-5f78bf42924b"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "d7fcd8c3-beb4-4f72-9c5c-ce1dfb7a2c12"}}}], "root_ids": ["d7fcd8c3-beb4-4f72-9c5c-ce1dfb7a2c12"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "d372c535-f268-4f75-8603-d4cc2daf499b", "modelid": "d7fcd8c3-beb4-4f72-9c5c-ce1dfb7a2c12", "elementid": "2ee6a162-e7c6-4648-9ef4-b6ed8a731cf4"}];
          
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