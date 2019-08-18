
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
  };var element = document.getElementById("a0b5a647-f5bb-428d-a06b-534e1363a525");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a0b5a647-f5bb-428d-a06b-534e1363a525' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"7510dda1-e26b-47cc-9028-ca6ff2e29ada": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ResizeTool", "id": "2e6b6852-30fe-46c7-9e4b-0675dee214a2", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "679af8c0-a422-4459-8368-02f9e7e9045f"}}}, {"type": "WheelZoomTool", "id": "fd4ff161-f860-42fd-bc13-b9cb1b2ee9ad", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "679af8c0-a422-4459-8368-02f9e7e9045f"}}}, {"type": "BasicTickFormatter", "id": "06172f6c-65db-4a2c-8afd-c1b4d8746439", "attributes": {}}, {"type": "GlyphRenderer", "id": "30d0216a-42c4-4181-821c-439a08d4951a", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "0223e9ff-c788-4f69-b142-b2a8cd3a4c9f"}, "nonselection_glyph": {"type": "Quad", "id": "0c88d568-2f49-435a-99c4-09a7ac8e8f1d"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Quad", "id": "4bad0cc2-2e48-4b51-8f2e-534c295eb993"}}}, {"type": "BasicTickFormatter", "id": "1299497f-9aa4-447e-880d-590f1173d69e", "attributes": {}}, {"type": "BasicTicker", "id": "13bab260-fe34-4477-8dd1-8e13ad482c06", "attributes": {}}, {"type": "Quad", "id": "4bad0cc2-2e48-4b51-8f2e-534c295eb993", "attributes": {"line_color": {"value": "#B3DE69"}, "top": {"field": "top"}, "left": {"field": "left"}, "right": {"field": "right"}, "bottom": {"field": "bottom"}, "fill_color": {"value": "#B3DE69"}}}, {"type": "Quad", "id": "0c88d568-2f49-435a-99c4-09a7ac8e8f1d", "attributes": {"line_color": {"value": "#1f77b4"}, "top": {"field": "top"}, "left": {"field": "left"}, "right": {"field": "right"}, "bottom": {"field": "bottom"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "DataRange1d", "id": "61105f7c-2c10-480e-83e0-f1f2e481b2a0", "attributes": {"callback": null}}, {"type": "Plot", "id": "679af8c0-a422-4459-8368-02f9e7e9045f", "attributes": {"tools": [{"type": "PanTool", "id": "bdf16c91-e1a6-4627-85aa-17b3f5de1acf"}, {"type": "WheelZoomTool", "id": "fd4ff161-f860-42fd-bc13-b9cb1b2ee9ad"}, {"type": "BoxZoomTool", "id": "37ff1956-ce1f-40d7-a538-54dcf4a2f2c8"}, {"type": "PreviewSaveTool", "id": "9f9d5977-9f85-4697-a7ae-d4405ce5d16a"}, {"type": "ResizeTool", "id": "2e6b6852-30fe-46c7-9e4b-0675dee214a2"}, {"type": "ResetTool", "id": "5a862b21-af0e-41f4-8fe2-ddafeaa379f4"}, {"type": "HelpTool", "id": "dcf6ddda-7692-4c91-9976-e310337f5522"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "61105f7c-2c10-480e-83e0-f1f2e481b2a0"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "67ba011f-e87c-4ed6-83e8-f7f73ad99f29"}, {"type": "Grid", "id": "c828b22b-e9b4-421d-b574-c6c624d09226"}, {"type": "LinearAxis", "id": "3abce8ca-52ba-422b-8580-50079214f0ee"}, {"type": "Grid", "id": "f8aecc93-cf41-4572-8908-9be95448e538"}, {"type": "BoxAnnotation", "id": "075d1aaa-7897-424d-b610-bbabd2b42a50"}, {"type": "GlyphRenderer", "id": "30d0216a-42c4-4181-821c-439a08d4951a"}], "left": [{"type": "LinearAxis", "id": "3abce8ca-52ba-422b-8580-50079214f0ee"}], "below": [{"type": "LinearAxis", "id": "67ba011f-e87c-4ed6-83e8-f7f73ad99f29"}], "tool_events": {"type": "ToolEvents", "id": "db5ddcf2-476e-4073-8bd4-d6a936b3619c"}, "x_range": {"type": "DataRange1d", "id": "0b1d3d94-f2d7-4f12-8f2a-2dc1e2254395"}}, "subtype": "Figure"}, {"type": "Grid", "id": "c828b22b-e9b4-421d-b574-c6c624d09226", "attributes": {"ticker": {"type": "BasicTicker", "id": "13bab260-fe34-4477-8dd1-8e13ad482c06"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "679af8c0-a422-4459-8368-02f9e7e9045f"}}}, {"type": "Grid", "id": "f8aecc93-cf41-4572-8908-9be95448e538", "attributes": {"ticker": {"type": "BasicTicker", "id": "ec5e3e1a-1fa8-44f5-976e-3b6c3029e1ee"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "679af8c0-a422-4459-8368-02f9e7e9045f"}}}, {"type": "PreviewSaveTool", "id": "9f9d5977-9f85-4697-a7ae-d4405ce5d16a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "679af8c0-a422-4459-8368-02f9e7e9045f"}}}, {"type": "ColumnDataSource", "id": "0223e9ff-c788-4f69-b142-b2a8cd3a4c9f", "attributes": {"data": {"right": [1.2, 2.5, 3.7], "left": [1, 2, 3], "top": [2, 3, 4], "bottom": [1, 2, 3]}, "column_names": ["top", "left", "right", "bottom"], "callback": null}}, {"type": "BoxAnnotation", "id": "075d1aaa-7897-424d-b610-bbabd2b42a50", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BoxZoomTool", "id": "37ff1956-ce1f-40d7-a538-54dcf4a2f2c8", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "075d1aaa-7897-424d-b610-bbabd2b42a50"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "679af8c0-a422-4459-8368-02f9e7e9045f"}}}, {"type": "PanTool", "id": "bdf16c91-e1a6-4627-85aa-17b3f5de1acf", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "679af8c0-a422-4459-8368-02f9e7e9045f"}}}, {"type": "LinearAxis", "id": "3abce8ca-52ba-422b-8580-50079214f0ee", "attributes": {"ticker": {"type": "BasicTicker", "id": "ec5e3e1a-1fa8-44f5-976e-3b6c3029e1ee"}, "formatter": {"type": "BasicTickFormatter", "id": "06172f6c-65db-4a2c-8afd-c1b4d8746439"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "679af8c0-a422-4459-8368-02f9e7e9045f"}}}, {"type": "HelpTool", "id": "dcf6ddda-7692-4c91-9976-e310337f5522", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "679af8c0-a422-4459-8368-02f9e7e9045f"}}}, {"type": "DataRange1d", "id": "0b1d3d94-f2d7-4f12-8f2a-2dc1e2254395", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "ec5e3e1a-1fa8-44f5-976e-3b6c3029e1ee", "attributes": {}}, {"type": "LinearAxis", "id": "67ba011f-e87c-4ed6-83e8-f7f73ad99f29", "attributes": {"ticker": {"type": "BasicTicker", "id": "13bab260-fe34-4477-8dd1-8e13ad482c06"}, "formatter": {"type": "BasicTickFormatter", "id": "1299497f-9aa4-447e-880d-590f1173d69e"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "679af8c0-a422-4459-8368-02f9e7e9045f"}}}, {"type": "ToolEvents", "id": "db5ddcf2-476e-4073-8bd4-d6a936b3619c", "attributes": {}}, {"type": "ResetTool", "id": "5a862b21-af0e-41f4-8fe2-ddafeaa379f4", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "679af8c0-a422-4459-8368-02f9e7e9045f"}}}], "root_ids": ["679af8c0-a422-4459-8368-02f9e7e9045f"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "7510dda1-e26b-47cc-9028-ca6ff2e29ada", "modelid": "679af8c0-a422-4459-8368-02f9e7e9045f", "elementid": "a0b5a647-f5bb-428d-a06b-534e1363a525"}];
          
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