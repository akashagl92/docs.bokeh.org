
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
  };var element = document.getElementById("e2cb7d80-21ff-48f3-8a15-032263e7fbf4");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'e2cb7d80-21ff-48f3-8a15-032263e7fbf4' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"54691f5e-011d-480c-9811-0dabe8951867": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "CategoricalTickFormatter", "id": "55ec4f66-12aa-4c19-89a9-aeeb6f333cca", "attributes": {}}, {"type": "ToolEvents", "id": "fe036d9c-7f44-4d3d-9e49-8c7f6af3bdf3", "attributes": {}}, {"type": "WheelZoomTool", "id": "563d0b34-215b-4f7e-ba14-f4492057a562", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "04dfbd6d-8a25-47c2-87b8-974672d03a5d"}}}, {"type": "ResizeTool", "id": "ef7edd7c-0cd6-41ef-92a7-3f36357f493b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "04dfbd6d-8a25-47c2-87b8-974672d03a5d"}}}, {"type": "Grid", "id": "f1420ab6-0fc6-4a18-b33c-7a872f5b88b3", "attributes": {"ticker": {"type": "BasicTicker", "id": "935b697b-3373-4cd8-b119-a69621646e2b"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "04dfbd6d-8a25-47c2-87b8-974672d03a5d"}}}, {"type": "CategoricalAxis", "id": "716e379c-4d58-491a-9f1d-4be9d4c06738", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "4a935f45-627a-43c0-b70a-0487a4f0e14e"}, "formatter": {"type": "CategoricalTickFormatter", "id": "55ec4f66-12aa-4c19-89a9-aeeb6f333cca"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "04dfbd6d-8a25-47c2-87b8-974672d03a5d"}}}, {"type": "PanTool", "id": "8241bd89-ecbd-429f-95cd-57f213d2a8cb", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "04dfbd6d-8a25-47c2-87b8-974672d03a5d"}}}, {"type": "BasicTicker", "id": "935b697b-3373-4cd8-b119-a69621646e2b", "attributes": {}}, {"type": "DataRange1d", "id": "1b0aed50-76e7-42b4-a07e-8ba3d7e0467d", "attributes": {"callback": null}}, {"type": "Plot", "id": "04dfbd6d-8a25-47c2-87b8-974672d03a5d", "attributes": {"y_range": {"type": "FactorRange", "id": "7e32f3fa-5df8-4d77-a9d4-2dd8bf2e2b9b"}, "left": [{"type": "CategoricalAxis", "id": "716e379c-4d58-491a-9f1d-4be9d4c06738"}], "renderers": [{"type": "LinearAxis", "id": "f82077c4-d186-44fb-be2d-f44036c524a9"}, {"type": "Grid", "id": "f1420ab6-0fc6-4a18-b33c-7a872f5b88b3"}, {"type": "CategoricalAxis", "id": "716e379c-4d58-491a-9f1d-4be9d4c06738"}, {"type": "Grid", "id": "1d993f4d-5588-4e50-9faf-5f7187ca1de8"}, {"type": "BoxAnnotation", "id": "d9e8a0f2-d22a-41f4-9d58-873487928867"}, {"type": "GlyphRenderer", "id": "5dee1edc-03e0-4c8c-9009-5f2a083fb3b7"}], "tool_events": {"type": "ToolEvents", "id": "fe036d9c-7f44-4d3d-9e49-8c7f6af3bdf3"}, "below": [{"type": "LinearAxis", "id": "f82077c4-d186-44fb-be2d-f44036c524a9"}], "tools": [{"type": "PanTool", "id": "8241bd89-ecbd-429f-95cd-57f213d2a8cb"}, {"type": "WheelZoomTool", "id": "563d0b34-215b-4f7e-ba14-f4492057a562"}, {"type": "BoxZoomTool", "id": "b8efe85e-f0f5-4be5-ae6d-7f5cda104282"}, {"type": "PreviewSaveTool", "id": "2337ef0b-464a-4241-a4a6-949b80d2baba"}, {"type": "ResizeTool", "id": "ef7edd7c-0cd6-41ef-92a7-3f36357f493b"}, {"type": "ResetTool", "id": "39e5e879-9c9c-41ab-a914-5bd60905f108"}, {"type": "HelpTool", "id": "6cc46e3d-f486-4a50-9271-6021c20a672f"}], "x_range": {"type": "DataRange1d", "id": "1b0aed50-76e7-42b4-a07e-8ba3d7e0467d"}}, "subtype": "Figure"}, {"type": "Grid", "id": "1d993f4d-5588-4e50-9faf-5f7187ca1de8", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "4a935f45-627a-43c0-b70a-0487a4f0e14e"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "04dfbd6d-8a25-47c2-87b8-974672d03a5d"}}}, {"type": "FactorRange", "id": "7e32f3fa-5df8-4d77-a9d4-2dd8bf2e2b9b", "attributes": {"factors": ["a", "b", "c", "d", "e", "f", "g", "h"], "callback": null}}, {"type": "ColumnDataSource", "id": "8bfe872d-5abc-402b-a4ac-a3984ecc8fdb", "attributes": {"data": {"x": [50, 40, 65, 10, 25, 37, 80, 60], "y": ["a", "b", "c", "d", "e", "f", "g", "h"]}, "column_names": ["y", "x"], "callback": null}}, {"type": "Circle", "id": "f8010e26-85ec-49fd-a332-e3967e637113", "attributes": {"line_color": {"value": "green"}, "line_width": {"value": 3}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 15, "units": "screen"}, "fill_color": {"value": "orange"}}}, {"type": "ResetTool", "id": "39e5e879-9c9c-41ab-a914-5bd60905f108", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "04dfbd6d-8a25-47c2-87b8-974672d03a5d"}}}, {"type": "GlyphRenderer", "id": "5dee1edc-03e0-4c8c-9009-5f2a083fb3b7", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "8bfe872d-5abc-402b-a4ac-a3984ecc8fdb"}, "nonselection_glyph": {"type": "Circle", "id": "26776561-e67f-466a-9cdf-c84182c9bf81"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "f8010e26-85ec-49fd-a332-e3967e637113"}}}, {"type": "BoxZoomTool", "id": "b8efe85e-f0f5-4be5-ae6d-7f5cda104282", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "d9e8a0f2-d22a-41f4-9d58-873487928867"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "04dfbd6d-8a25-47c2-87b8-974672d03a5d"}}}, {"type": "HelpTool", "id": "6cc46e3d-f486-4a50-9271-6021c20a672f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "04dfbd6d-8a25-47c2-87b8-974672d03a5d"}}}, {"type": "BasicTickFormatter", "id": "80f05420-4d21-4c1f-aa2e-cb47568858c3", "attributes": {}}, {"type": "BoxAnnotation", "id": "d9e8a0f2-d22a-41f4-9d58-873487928867", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "LinearAxis", "id": "f82077c4-d186-44fb-be2d-f44036c524a9", "attributes": {"ticker": {"type": "BasicTicker", "id": "935b697b-3373-4cd8-b119-a69621646e2b"}, "formatter": {"type": "BasicTickFormatter", "id": "80f05420-4d21-4c1f-aa2e-cb47568858c3"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "04dfbd6d-8a25-47c2-87b8-974672d03a5d"}}}, {"type": "PreviewSaveTool", "id": "2337ef0b-464a-4241-a4a6-949b80d2baba", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "04dfbd6d-8a25-47c2-87b8-974672d03a5d"}}}, {"type": "Circle", "id": "26776561-e67f-466a-9cdf-c84182c9bf81", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 3}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 15, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "CategoricalTicker", "id": "4a935f45-627a-43c0-b70a-0487a4f0e14e", "attributes": {}}], "root_ids": ["04dfbd6d-8a25-47c2-87b8-974672d03a5d"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "54691f5e-011d-480c-9811-0dabe8951867", "modelid": "04dfbd6d-8a25-47c2-87b8-974672d03a5d", "elementid": "e2cb7d80-21ff-48f3-8a15-032263e7fbf4"}];
          
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