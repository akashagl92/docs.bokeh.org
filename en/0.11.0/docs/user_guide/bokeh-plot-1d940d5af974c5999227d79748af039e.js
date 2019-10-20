
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
  };var element = document.getElementById("bc07cde9-7a94-4d9f-be85-ddec72f97e2c");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'bc07cde9-7a94-4d9f-be85-ddec72f97e2c' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"8c0f1f83-2daa-48ef-a789-c0196084b2c2": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "9afd4614-a5f5-4f85-89e4-f01a41776e28", "attributes": {}}, {"type": "Line", "id": "45a3f54b-7261-4cec-88c9-00a20fcaf933", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 3}, "x": {"field": "x"}, "line_alpha": {"value": 0.6}, "y": {"field": "y"}}}, {"type": "LinearAxis", "id": "06b53057-1ec7-4c68-a40f-3a250052b934", "attributes": {"ticker": {"type": "BasicTicker", "id": "748217c6-2582-43c6-8a54-25ac59c9d32d"}, "formatter": {"type": "BasicTickFormatter", "id": "9afd4614-a5f5-4f85-89e4-f01a41776e28"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9109f266-c337-41b7-bc4f-e8d406f5811a"}}}, {"type": "BoxZoomTool", "id": "3dc0b433-ab1c-4c4c-9118-00f525207692", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "9bffaf27-4286-4015-b4cf-e758684ec2d2"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9109f266-c337-41b7-bc4f-e8d406f5811a"}}}, {"type": "BasicTickFormatter", "id": "20484147-7d4e-458c-98fa-44916f19033f", "attributes": {}}, {"type": "CustomJS", "id": "32c04368-ca23-4df0-94e4-22a9517e27c4", "attributes": {"code": "\n        var data = source.get('data');\n        var f = cb_obj.get('value')\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.trigger('change');\n    ", "args": {"source": {"type": "ColumnDataSource", "id": "9eef864d-a177-4204-829e-1d8c3125ecc8"}}}}, {"type": "ToolEvents", "id": "cd7e19b6-dd43-49a9-9e2c-c3c7ec166447", "attributes": {}}, {"type": "Slider", "id": "b2f039b6-b1ef-43b3-b943-28faa32d966d", "attributes": {"start": 0.1, "end": 4, "value": 1, "callback": {"type": "CustomJS", "id": "32c04368-ca23-4df0-94e4-22a9517e27c4"}, "title": "power"}}, {"type": "DataRange1d", "id": "efb80ae0-aace-4191-84f9-8d8de8470951", "attributes": {"callback": null}}, {"type": "ResizeTool", "id": "c2c786f1-c0e2-4492-a20e-e71e640eaac3", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9109f266-c337-41b7-bc4f-e8d406f5811a"}}}, {"type": "Line", "id": "3f0630fd-62b9-4d52-a9a1-f8b75390dd1e", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 3}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "y": {"field": "y"}}}, {"type": "GlyphRenderer", "id": "871a479f-4473-49b0-be94-25146be97bf9", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "9eef864d-a177-4204-829e-1d8c3125ecc8"}, "nonselection_glyph": {"type": "Line", "id": "3f0630fd-62b9-4d52-a9a1-f8b75390dd1e"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "45a3f54b-7261-4cec-88c9-00a20fcaf933"}}}, {"type": "PanTool", "id": "ff40e528-9ca0-4929-b51a-635f62b5b793", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9109f266-c337-41b7-bc4f-e8d406f5811a"}}}, {"type": "ResetTool", "id": "fc0cd116-914b-4190-93a9-58a8acebe9b9", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9109f266-c337-41b7-bc4f-e8d406f5811a"}}}, {"type": "BasicTicker", "id": "d4d2c760-c456-4a05-a4fd-5e4ec7e61b10", "attributes": {}}, {"type": "DataRange1d", "id": "6848fdd7-1eb6-4cdd-b95f-b628f4a10376", "attributes": {"callback": null}}, {"type": "Grid", "id": "c33802ef-5ccd-4fc4-9f8c-2d847d13a341", "attributes": {"ticker": {"type": "BasicTicker", "id": "d4d2c760-c456-4a05-a4fd-5e4ec7e61b10"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9109f266-c337-41b7-bc4f-e8d406f5811a"}}}, {"type": "Plot", "id": "9109f266-c337-41b7-bc4f-e8d406f5811a", "attributes": {"tools": [{"type": "PanTool", "id": "ff40e528-9ca0-4929-b51a-635f62b5b793"}, {"type": "WheelZoomTool", "id": "7ab3db78-498b-4c2b-b793-57a05b788194"}, {"type": "BoxZoomTool", "id": "3dc0b433-ab1c-4c4c-9118-00f525207692"}, {"type": "PreviewSaveTool", "id": "ae18211b-3542-4fab-a4fc-cf27e8b9e9d2"}, {"type": "ResizeTool", "id": "c2c786f1-c0e2-4492-a20e-e71e640eaac3"}, {"type": "ResetTool", "id": "fc0cd116-914b-4190-93a9-58a8acebe9b9"}, {"type": "HelpTool", "id": "e77af477-303f-469a-8645-4104ddb5edbb"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "efb80ae0-aace-4191-84f9-8d8de8470951"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "9df1e793-d6ed-4dc4-bf57-e9275069bf54"}, {"type": "Grid", "id": "c33802ef-5ccd-4fc4-9f8c-2d847d13a341"}, {"type": "LinearAxis", "id": "06b53057-1ec7-4c68-a40f-3a250052b934"}, {"type": "Grid", "id": "8655c60a-f8d9-412f-ae3a-409637218a44"}, {"type": "BoxAnnotation", "id": "9bffaf27-4286-4015-b4cf-e758684ec2d2"}, {"type": "GlyphRenderer", "id": "871a479f-4473-49b0-be94-25146be97bf9"}], "left": [{"type": "LinearAxis", "id": "06b53057-1ec7-4c68-a40f-3a250052b934"}], "below": [{"type": "LinearAxis", "id": "9df1e793-d6ed-4dc4-bf57-e9275069bf54"}], "tool_events": {"type": "ToolEvents", "id": "cd7e19b6-dd43-49a9-9e2c-c3c7ec166447"}, "x_range": {"type": "DataRange1d", "id": "6848fdd7-1eb6-4cdd-b95f-b628f4a10376"}}, "subtype": "Figure"}, {"type": "WheelZoomTool", "id": "7ab3db78-498b-4c2b-b793-57a05b788194", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9109f266-c337-41b7-bc4f-e8d406f5811a"}}}, {"type": "LinearAxis", "id": "9df1e793-d6ed-4dc4-bf57-e9275069bf54", "attributes": {"ticker": {"type": "BasicTicker", "id": "d4d2c760-c456-4a05-a4fd-5e4ec7e61b10"}, "formatter": {"type": "BasicTickFormatter", "id": "20484147-7d4e-458c-98fa-44916f19033f"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9109f266-c337-41b7-bc4f-e8d406f5811a"}}}, {"type": "Grid", "id": "8655c60a-f8d9-412f-ae3a-409637218a44", "attributes": {"ticker": {"type": "BasicTicker", "id": "748217c6-2582-43c6-8a54-25ac59c9d32d"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "9109f266-c337-41b7-bc4f-e8d406f5811a"}}}, {"type": "PreviewSaveTool", "id": "ae18211b-3542-4fab-a4fc-cf27e8b9e9d2", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9109f266-c337-41b7-bc4f-e8d406f5811a"}}}, {"type": "BasicTicker", "id": "748217c6-2582-43c6-8a54-25ac59c9d32d", "attributes": {}}, {"type": "HelpTool", "id": "e77af477-303f-469a-8645-4104ddb5edbb", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9109f266-c337-41b7-bc4f-e8d406f5811a"}}}, {"type": "VBoxForm", "id": "6c30c954-3761-4de5-8812-75a43236526c", "attributes": {"children": [{"type": "Slider", "id": "b2f039b6-b1ef-43b3-b943-28faa32d966d"}, {"type": "Plot", "subtype": "Figure", "id": "9109f266-c337-41b7-bc4f-e8d406f5811a"}]}}, {"type": "ColumnDataSource", "id": "9eef864d-a177-4204-829e-1d8c3125ecc8", "attributes": {"data": {"x": [0.0, 0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035, 0.04, 0.045, 0.05, 0.055, 0.06, 0.065, 0.07, 0.075, 0.08, 0.085, 0.09, 0.095, 0.1, 0.105, 0.11, 0.115, 0.12, 0.125, 0.13, 0.135, 0.14, 0.145, 0.15, 0.155, 0.16, 0.165, 0.17, 0.17500000000000002, 0.18, 0.185, 0.19, 0.195, 0.2, 0.20500000000000002, 0.21, 0.215, 0.22, 0.225, 0.23, 0.23500000000000001, 0.24, 0.245, 0.25, 0.255, 0.26, 0.265, 0.27, 0.275, 0.28, 0.28500000000000003, 0.29, 0.295, 0.3, 0.305, 0.31, 0.315, 0.32, 0.325, 0.33, 0.335, 0.34, 0.34500000000000003, 0.35000000000000003, 0.355, 0.36, 0.365, 0.37, 0.375, 0.38, 0.385, 0.39, 0.395, 0.4, 0.405, 0.41000000000000003, 0.41500000000000004, 0.42, 0.425, 0.43, 0.435, 0.44, 0.445, 0.45, 0.455, 0.46, 0.465, 0.47000000000000003, 0.47500000000000003, 0.48, 0.485, 0.49, 0.495, 0.5, 0.505, 0.51, 0.515, 0.52, 0.525, 0.53, 0.535, 0.54, 0.545, 0.55, 0.555, 0.56, 0.5650000000000001, 0.5700000000000001, 0.5750000000000001, 0.58, 0.585, 0.59, 0.595, 0.6, 0.605, 0.61, 0.615, 0.62, 0.625, 0.63, 0.635, 0.64, 0.645, 0.65, 0.655, 0.66, 0.665, 0.67, 0.675, 0.68, 0.685, 0.6900000000000001, 0.6950000000000001, 0.7000000000000001, 0.705, 0.71, 0.715, 0.72, 0.725, 0.73, 0.735, 0.74, 0.745, 0.75, 0.755, 0.76, 0.765, 0.77, 0.775, 0.78, 0.785, 0.79, 0.795, 0.8, 0.805, 0.81, 0.8150000000000001, 0.8200000000000001, 0.8250000000000001, 0.8300000000000001, 0.835, 0.84, 0.845, 0.85, 0.855, 0.86, 0.865, 0.87, 0.875, 0.88, 0.885, 0.89, 0.895, 0.9, 0.905, 0.91, 0.915, 0.92, 0.925, 0.93, 0.935, 0.9400000000000001, 0.9450000000000001, 0.9500000000000001, 0.9550000000000001, 0.96, 0.965, 0.97, 0.975, 0.98, 0.985, 0.99, 0.995], "y": [0.0, 0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035, 0.04, 0.045, 0.05, 0.055, 0.06, 0.065, 0.07, 0.075, 0.08, 0.085, 0.09, 0.095, 0.1, 0.105, 0.11, 0.115, 0.12, 0.125, 0.13, 0.135, 0.14, 0.145, 0.15, 0.155, 0.16, 0.165, 0.17, 0.17500000000000002, 0.18, 0.185, 0.19, 0.195, 0.2, 0.20500000000000002, 0.21, 0.215, 0.22, 0.225, 0.23, 0.23500000000000001, 0.24, 0.245, 0.25, 0.255, 0.26, 0.265, 0.27, 0.275, 0.28, 0.28500000000000003, 0.29, 0.295, 0.3, 0.305, 0.31, 0.315, 0.32, 0.325, 0.33, 0.335, 0.34, 0.34500000000000003, 0.35000000000000003, 0.355, 0.36, 0.365, 0.37, 0.375, 0.38, 0.385, 0.39, 0.395, 0.4, 0.405, 0.41000000000000003, 0.41500000000000004, 0.42, 0.425, 0.43, 0.435, 0.44, 0.445, 0.45, 0.455, 0.46, 0.465, 0.47000000000000003, 0.47500000000000003, 0.48, 0.485, 0.49, 0.495, 0.5, 0.505, 0.51, 0.515, 0.52, 0.525, 0.53, 0.535, 0.54, 0.545, 0.55, 0.555, 0.56, 0.5650000000000001, 0.5700000000000001, 0.5750000000000001, 0.58, 0.585, 0.59, 0.595, 0.6, 0.605, 0.61, 0.615, 0.62, 0.625, 0.63, 0.635, 0.64, 0.645, 0.65, 0.655, 0.66, 0.665, 0.67, 0.675, 0.68, 0.685, 0.6900000000000001, 0.6950000000000001, 0.7000000000000001, 0.705, 0.71, 0.715, 0.72, 0.725, 0.73, 0.735, 0.74, 0.745, 0.75, 0.755, 0.76, 0.765, 0.77, 0.775, 0.78, 0.785, 0.79, 0.795, 0.8, 0.805, 0.81, 0.8150000000000001, 0.8200000000000001, 0.8250000000000001, 0.8300000000000001, 0.835, 0.84, 0.845, 0.85, 0.855, 0.86, 0.865, 0.87, 0.875, 0.88, 0.885, 0.89, 0.895, 0.9, 0.905, 0.91, 0.915, 0.92, 0.925, 0.93, 0.935, 0.9400000000000001, 0.9450000000000001, 0.9500000000000001, 0.9550000000000001, 0.96, 0.965, 0.97, 0.975, 0.98, 0.985, 0.99, 0.995]}, "column_names": ["x", "y"], "callback": null}}, {"type": "BoxAnnotation", "id": "9bffaf27-4286-4015-b4cf-e758684ec2d2", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}], "root_ids": ["6c30c954-3761-4de5-8812-75a43236526c"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "8c0f1f83-2daa-48ef-a789-c0196084b2c2", "modelid": "6c30c954-3761-4de5-8812-75a43236526c", "elementid": "bc07cde9-7a94-4d9f-be85-ddec72f97e2c"}];
          
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