
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
  };var element = document.getElementById("1003ce0e-2468-457a-afe9-11c6ecab6fb0");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1003ce0e-2468-457a-afe9-11c6ecab6fb0' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"c62c752c-886d-48f1-a53e-d7606ffcc7b1": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "dbb024af-f61f-47b4-824d-feaf137569c3", "attributes": {"ticker": {"type": "BasicTicker", "id": "e91172a5-2a43-4450-a233-ebad88b92ebb"}, "formatter": {"type": "BasicTickFormatter", "id": "adb34324-c0f0-430b-8da7-43571df375b5"}, "axis_label": "index", "plot": {"type": "Plot", "subtype": "Chart", "id": "d7c19b6b-dfc5-49cc-819d-0a2b3b573c6e"}}}, {"type": "GlyphRenderer", "id": "b65fd559-18de-413e-a02a-d89c1ee07b95", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "d1e97ea8-ac78-4f5d-881d-baf9956809f6"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "0a5cd327-ac0e-496e-b9aa-07ebdf86da11"}}}, {"type": "BasicTicker", "id": "e91172a5-2a43-4450-a233-ebad88b92ebb", "attributes": {}}, {"type": "BasicTickFormatter", "id": "adb34324-c0f0-430b-8da7-43571df375b5", "attributes": {}}, {"type": "GlyphRenderer", "id": "2ef4aa8d-01e8-471a-a732-fa28477f764c", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "935b5224-ce70-4a56-a0d0-b7418ec13e83"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "7c10f3ac-3643-410d-913b-de517a4903a0"}}}, {"type": "ColumnDataSource", "id": "173386f9-65c6-4879-aad3-2384708420ea", "attributes": {"data": {"x_values": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "series": ["jython", "jython", "jython", "jython", "jython", "jython", "jython", "jython", "jython", "jython", "jython", "jython", "jython", "jython"], "y_values": [22, 43, 10, 25, 26, 101, 114, 203, 194, 215, 201, 227, 139, 160], "chart_index": [{"series": "jython"}, {"series": "jython"}, {"series": "jython"}, {"series": "jython"}, {"series": "jython"}, {"series": "jython"}, {"series": "jython"}, {"series": "jython"}, {"series": "jython"}, {"series": "jython"}, {"series": "jython"}, {"series": "jython"}, {"series": "jython"}, {"series": "jython"}]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "PanTool", "id": "e92ef210-7ee4-4757-8d65-9dfc1742e6ab", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "d7c19b6b-dfc5-49cc-819d-0a2b3b573c6e"}}}, {"type": "BoxAnnotation", "id": "10e1e9ed-9624-4ad9-bc52-48b821c2e8ae", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "GlyphRenderer", "id": "2fcded19-be78-4468-8086-4c2bc683c66f", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "173386f9-65c6-4879-aad3-2384708420ea"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "50b9cb21-694e-4a7f-9fcc-40b8639595c7"}}}, {"type": "HelpTool", "id": "6ccaa35f-efe1-4e37-b42c-823f3503efd8", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "d7c19b6b-dfc5-49cc-819d-0a2b3b573c6e"}}}, {"type": "Range1d", "id": "3846c0b0-3c94-427b-9b3b-7e86c8770c95", "attributes": {"start": -24.5, "end": 293.5, "callback": null}}, {"type": "Grid", "id": "c04a8622-1a10-4dd4-ab6c-6e68de636a64", "attributes": {"ticker": {"type": "BasicTicker", "id": "0048494f-91df-42d9-a48c-6f3d6ac9475d"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Chart", "id": "d7c19b6b-dfc5-49cc-819d-0a2b3b573c6e"}}}, {"type": "Legend", "id": "f18d6de8-da56-4185-8a99-2b6f3eda6798", "attributes": {"legends": [["python", [{"type": "GlyphRenderer", "id": "b65fd559-18de-413e-a02a-d89c1ee07b95"}]], ["pypy", [{"type": "GlyphRenderer", "id": "2ef4aa8d-01e8-471a-a732-fa28477f764c"}]], ["jython", [{"type": "GlyphRenderer", "id": "2fcded19-be78-4468-8086-4c2bc683c66f"}]]], "location": "top_left", "plot": {"type": "Plot", "subtype": "Chart", "id": "d7c19b6b-dfc5-49cc-819d-0a2b3b573c6e"}}}, {"type": "ResizeTool", "id": "3230a107-b5f1-4382-84c1-18c9f355cca6", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "d7c19b6b-dfc5-49cc-819d-0a2b3b573c6e"}}}, {"type": "ResetTool", "id": "234c3dc0-3f9c-4372-8fe0-5e10420f0abe", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "d7c19b6b-dfc5-49cc-819d-0a2b3b573c6e"}}}, {"type": "PreviewSaveTool", "id": "8c2df9a8-3626-416f-a8ca-f3fed0fb9f7e", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "d7c19b6b-dfc5-49cc-819d-0a2b3b573c6e"}}}, {"type": "BasicTickFormatter", "id": "74fca31d-601b-4483-ac44-cba1edd6b6fa", "attributes": {}}, {"type": "LinearAxis", "id": "10638413-fd0a-4881-a952-9775aaad967f", "attributes": {"ticker": {"type": "BasicTicker", "id": "0048494f-91df-42d9-a48c-6f3d6ac9475d"}, "formatter": {"type": "BasicTickFormatter", "id": "74fca31d-601b-4483-ac44-cba1edd6b6fa"}, "axis_label": "Duration", "plot": {"type": "Plot", "subtype": "Chart", "id": "d7c19b6b-dfc5-49cc-819d-0a2b3b573c6e"}}}, {"type": "Plot", "id": "d7c19b6b-dfc5-49cc-819d-0a2b3b573c6e", "attributes": {"y_range": {"type": "Range1d", "id": "3846c0b0-3c94-427b-9b3b-7e86c8770c95"}, "width": 400, "legend": true, "yscale": "auto", "tools": [{"type": "PanTool", "id": "e92ef210-7ee4-4757-8d65-9dfc1742e6ab"}, {"type": "WheelZoomTool", "id": "4237360c-f5f1-4796-a194-134c4db141ca"}, {"type": "BoxZoomTool", "id": "a6349262-6d0f-4a67-9786-8d46c0d03b1a"}, {"type": "PreviewSaveTool", "id": "8c2df9a8-3626-416f-a8ca-f3fed0fb9f7e"}, {"type": "ResizeTool", "id": "3230a107-b5f1-4382-84c1-18c9f355cca6"}, {"type": "ResetTool", "id": "234c3dc0-3f9c-4372-8fe0-5e10420f0abe"}, {"type": "HelpTool", "id": "6ccaa35f-efe1-4e37-b42c-823f3503efd8"}], "title": "Interpreter Sample Data", "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "10638413-fd0a-4881-a952-9775aaad967f"}], "x_range": {"type": "Range1d", "id": "bd595dc4-ee7a-434d-a826-41e7458f7992"}, "y_mapper_type": "auto", "xscale": "auto", "below": [{"type": "LinearAxis", "id": "dbb024af-f61f-47b4-824d-feaf137569c3"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "8d42b785-495d-40ba-8c5f-e77a0828ba35"}, "renderers": [{"type": "BoxAnnotation", "id": "10e1e9ed-9624-4ad9-bc52-48b821c2e8ae"}, {"type": "GlyphRenderer", "id": "b65fd559-18de-413e-a02a-d89c1ee07b95"}, {"type": "GlyphRenderer", "id": "2ef4aa8d-01e8-471a-a732-fa28477f764c"}, {"type": "GlyphRenderer", "id": "2fcded19-be78-4468-8086-4c2bc683c66f"}, {"type": "Legend", "id": "f18d6de8-da56-4185-8a99-2b6f3eda6798"}, {"type": "LinearAxis", "id": "dbb024af-f61f-47b4-824d-feaf137569c3"}, {"type": "LinearAxis", "id": "10638413-fd0a-4881-a952-9775aaad967f"}, {"type": "Grid", "id": "db1763cc-ac39-440d-96ae-2760d8d5607d"}, {"type": "Grid", "id": "c04a8622-1a10-4dd4-ab6c-6e68de636a64"}]}, "subtype": "Chart"}, {"type": "Line", "id": "0a5cd327-ac0e-496e-b9aa-07ebdf86da11", "attributes": {"line_color": {"value": "#407ee7"}, "line_width": {"value": 2}, "line_dash": [2, 4], "x": {"field": "x_values"}, "y": {"field": "y_values"}}}, {"type": "Grid", "id": "db1763cc-ac39-440d-96ae-2760d8d5607d", "attributes": {"ticker": {"type": "BasicTicker", "id": "e91172a5-2a43-4450-a233-ebad88b92ebb"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "d7c19b6b-dfc5-49cc-819d-0a2b3b573c6e"}}}, {"type": "Range1d", "id": "bd595dc4-ee7a-434d-a826-41e7458f7992", "attributes": {"start": -1.3, "end": 14.3, "callback": null}}, {"type": "WheelZoomTool", "id": "4237360c-f5f1-4796-a194-134c4db141ca", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "d7c19b6b-dfc5-49cc-819d-0a2b3b573c6e"}}}, {"type": "ToolEvents", "id": "8d42b785-495d-40ba-8c5f-e77a0828ba35", "attributes": {}}, {"type": "BasicTicker", "id": "0048494f-91df-42d9-a48c-6f3d6ac9475d", "attributes": {}}, {"type": "Line", "id": "50b9cb21-694e-4a7f-9fcc-40b8639595c7", "attributes": {"line_color": {"value": "#f22c40"}, "line_width": {"value": 2}, "x": {"field": "x_values"}, "y": {"field": "y_values"}}}, {"type": "ColumnDataSource", "id": "935b5224-ce70-4a56-a0d0-b7418ec13e83", "attributes": {"data": {"x_values": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "series": ["pypy", "pypy", "pypy", "pypy", "pypy", "pypy", "pypy", "pypy", "pypy", "pypy", "pypy", "pypy", "pypy", "pypy"], "y_values": [12, 33, 47, 15, 126, 121, 144, 233, 254, 225, 226, 267, 110, 130], "chart_index": [{"series": "pypy"}, {"series": "pypy"}, {"series": "pypy"}, {"series": "pypy"}, {"series": "pypy"}, {"series": "pypy"}, {"series": "pypy"}, {"series": "pypy"}, {"series": "pypy"}, {"series": "pypy"}, {"series": "pypy"}, {"series": "pypy"}, {"series": "pypy"}, {"series": "pypy"}]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "BoxZoomTool", "id": "a6349262-6d0f-4a67-9786-8d46c0d03b1a", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "10e1e9ed-9624-4ad9-bc52-48b821c2e8ae"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "d7c19b6b-dfc5-49cc-819d-0a2b3b573c6e"}}}, {"type": "Line", "id": "7c10f3ac-3643-410d-913b-de517a4903a0", "attributes": {"line_color": {"value": "#5ab738"}, "line_width": {"value": 2}, "line_dash": [6], "x": {"field": "x_values"}, "y": {"field": "y_values"}}}, {"type": "ColumnDataSource", "id": "d1e97ea8-ac78-4f5d-881d-baf9956809f6", "attributes": {"data": {"x_values": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "series": ["python", "python", "python", "python", "python", "python", "python", "python", "python", "python", "python", "python", "python", "python"], "y_values": [2, 3, 7, 5, 26, 221, 44, 233, 254, 265, 266, 267, 120, 111], "chart_index": [{"series": "python"}, {"series": "python"}, {"series": "python"}, {"series": "python"}, {"series": "python"}, {"series": "python"}, {"series": "python"}, {"series": "python"}, {"series": "python"}, {"series": "python"}, {"series": "python"}, {"series": "python"}, {"series": "python"}, {"series": "python"}]}, "column_names": ["x_values", "y_values"], "callback": null}}], "root_ids": ["d7c19b6b-dfc5-49cc-819d-0a2b3b573c6e"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "c62c752c-886d-48f1-a53e-d7606ffcc7b1", "modelid": "d7c19b6b-dfc5-49cc-819d-0a2b3b573c6e", "elementid": "1003ce0e-2468-457a-afe9-11c6ecab6fb0"}];
          
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