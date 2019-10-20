
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
  };var element = document.getElementById("ddba2ae2-c67b-446e-85dc-93d393ba2915");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ddba2ae2-c67b-446e-85dc-93d393ba2915' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"133123c1-f353-4965-9b60-a19e5ad676a2": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "HelpTool", "id": "f9727ab9-5dda-437a-9f62-77864f3d6af6", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "81a0e0d1-bbd2-4d29-a03e-d98dcc80186c"}}}, {"type": "PreviewSaveTool", "id": "398daafa-521d-4173-9f17-2773026c714a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "81a0e0d1-bbd2-4d29-a03e-d98dcc80186c"}}}, {"type": "Plot", "id": "81a0e0d1-bbd2-4d29-a03e-d98dcc80186c", "attributes": {"tools": [{"type": "PanTool", "id": "b6f38a8d-c0d5-4cd4-81e2-eda124b01cd7"}, {"type": "WheelZoomTool", "id": "a2836fe5-107b-4a4a-9ec8-830267a6f133"}, {"type": "BoxZoomTool", "id": "494d5ac0-f39a-4223-8b18-95ce19579887"}, {"type": "PreviewSaveTool", "id": "398daafa-521d-4173-9f17-2773026c714a"}, {"type": "ResizeTool", "id": "7b3e1215-7a32-4ac9-b86a-1737642954ef"}, {"type": "ResetTool", "id": "da965828-827c-45af-822a-bbbd2b032a6c"}, {"type": "HelpTool", "id": "f9727ab9-5dda-437a-9f62-77864f3d6af6"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "eab1b583-14e1-4df8-8762-8c3f4e54b906"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "2447856d-e1ab-44e3-b8c3-8a19845c6d13"}, {"type": "Grid", "id": "af5e4f46-009d-42b7-be80-dc7a46cd2b80"}, {"type": "LinearAxis", "id": "61f08d0d-5d72-412d-998a-0527dff4a53d"}, {"type": "Grid", "id": "064cf33c-5698-434d-ad26-082a1b999a34"}, {"type": "BoxAnnotation", "id": "1f80c740-5263-444c-91e8-b8019562039e"}, {"type": "GlyphRenderer", "id": "a96da9e6-b374-486b-a745-ce7ff0004e60"}], "left": [{"type": "LinearAxis", "id": "61f08d0d-5d72-412d-998a-0527dff4a53d"}], "below": [{"type": "LinearAxis", "id": "2447856d-e1ab-44e3-b8c3-8a19845c6d13"}], "tool_events": {"type": "ToolEvents", "id": "b41371c2-b428-45dd-992e-fa6d2de93daf"}, "x_range": {"type": "DataRange1d", "id": "6749c3d4-0e36-40d3-87cf-3dd5a38864e4"}}, "subtype": "Figure"}, {"type": "BasicTicker", "id": "ea3c1791-0a88-4cab-8881-6b3ff1d42c3b", "attributes": {}}, {"type": "DataRange1d", "id": "eab1b583-14e1-4df8-8762-8c3f4e54b906", "attributes": {"callback": null}}, {"type": "BoxZoomTool", "id": "494d5ac0-f39a-4223-8b18-95ce19579887", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "1f80c740-5263-444c-91e8-b8019562039e"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "81a0e0d1-bbd2-4d29-a03e-d98dcc80186c"}}}, {"type": "Oval", "id": "27659788-a6b7-415e-814e-ef978298d715", "attributes": {"line_color": {"value": "#1f77b4"}, "width": {"value": 0.2, "units": "data"}, "y": {"field": "y"}, "angle": {"value": 1.0471975511965976, "units": "rad"}, "height": {"value": 40, "units": "screen"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "PanTool", "id": "b6f38a8d-c0d5-4cd4-81e2-eda124b01cd7", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "81a0e0d1-bbd2-4d29-a03e-d98dcc80186c"}}}, {"type": "Oval", "id": "34dbb775-1f1e-4a9f-b3f8-4b7792beadea", "attributes": {"line_color": {"value": "#CAB2D6"}, "width": {"value": 0.2, "units": "data"}, "y": {"field": "y"}, "angle": {"value": 1.0471975511965976, "units": "rad"}, "height": {"value": 40, "units": "screen"}, "x": {"field": "x"}, "fill_color": {"value": "#CAB2D6"}}}, {"type": "DataRange1d", "id": "6749c3d4-0e36-40d3-87cf-3dd5a38864e4", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "287ff209-3f4f-4e85-91ca-9e4f760c15cb", "attributes": {}}, {"type": "BoxAnnotation", "id": "1f80c740-5263-444c-91e8-b8019562039e", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "WheelZoomTool", "id": "a2836fe5-107b-4a4a-9ec8-830267a6f133", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "81a0e0d1-bbd2-4d29-a03e-d98dcc80186c"}}}, {"type": "BasicTicker", "id": "3373c281-7ec8-4777-881e-6da85cffe5bf", "attributes": {}}, {"type": "BasicTickFormatter", "id": "f8f9f5fd-982d-413b-8aba-e159b4100b15", "attributes": {}}, {"type": "ColumnDataSource", "id": "96f0fd62-a827-4821-8ad1-9ab0f4655bed", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["y", "x"], "callback": null}}, {"type": "Grid", "id": "064cf33c-5698-434d-ad26-082a1b999a34", "attributes": {"ticker": {"type": "BasicTicker", "id": "3373c281-7ec8-4777-881e-6da85cffe5bf"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "81a0e0d1-bbd2-4d29-a03e-d98dcc80186c"}}}, {"type": "ResizeTool", "id": "7b3e1215-7a32-4ac9-b86a-1737642954ef", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "81a0e0d1-bbd2-4d29-a03e-d98dcc80186c"}}}, {"type": "ToolEvents", "id": "b41371c2-b428-45dd-992e-fa6d2de93daf", "attributes": {}}, {"type": "ResetTool", "id": "da965828-827c-45af-822a-bbbd2b032a6c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "81a0e0d1-bbd2-4d29-a03e-d98dcc80186c"}}}, {"type": "LinearAxis", "id": "61f08d0d-5d72-412d-998a-0527dff4a53d", "attributes": {"ticker": {"type": "BasicTicker", "id": "3373c281-7ec8-4777-881e-6da85cffe5bf"}, "formatter": {"type": "BasicTickFormatter", "id": "f8f9f5fd-982d-413b-8aba-e159b4100b15"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "81a0e0d1-bbd2-4d29-a03e-d98dcc80186c"}}}, {"type": "GlyphRenderer", "id": "a96da9e6-b374-486b-a745-ce7ff0004e60", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "96f0fd62-a827-4821-8ad1-9ab0f4655bed"}, "nonselection_glyph": {"type": "Oval", "id": "27659788-a6b7-415e-814e-ef978298d715"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Oval", "id": "34dbb775-1f1e-4a9f-b3f8-4b7792beadea"}}}, {"type": "LinearAxis", "id": "2447856d-e1ab-44e3-b8c3-8a19845c6d13", "attributes": {"ticker": {"type": "BasicTicker", "id": "ea3c1791-0a88-4cab-8881-6b3ff1d42c3b"}, "formatter": {"type": "BasicTickFormatter", "id": "287ff209-3f4f-4e85-91ca-9e4f760c15cb"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "81a0e0d1-bbd2-4d29-a03e-d98dcc80186c"}}}, {"type": "Grid", "id": "af5e4f46-009d-42b7-be80-dc7a46cd2b80", "attributes": {"ticker": {"type": "BasicTicker", "id": "ea3c1791-0a88-4cab-8881-6b3ff1d42c3b"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "81a0e0d1-bbd2-4d29-a03e-d98dcc80186c"}}}], "root_ids": ["81a0e0d1-bbd2-4d29-a03e-d98dcc80186c"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "133123c1-f353-4965-9b60-a19e5ad676a2", "modelid": "81a0e0d1-bbd2-4d29-a03e-d98dcc80186c", "elementid": "ddba2ae2-c67b-446e-85dc-93d393ba2915"}];
          
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