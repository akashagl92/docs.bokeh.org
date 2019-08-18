
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
  };var element = document.getElementById("e17bdf3a-885a-4662-8d2e-14a44b40184c");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'e17bdf3a-885a-4662-8d2e-14a44b40184c' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"92efddc3-0b40-4d73-9273-763d56d3538a": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Grid", "id": "ea516c96-8399-4885-9547-cdeb269e70c2", "attributes": {"ticker": {"type": "BasicTicker", "id": "c2bf1b0f-20bd-489f-b9ef-cc735b60d6fb"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "0249677b-f624-431b-aaaf-bc7ad35897d4"}}}, {"type": "Legend", "id": "a5b3fc5e-1b97-45f8-a26a-363ad70d6bf7", "attributes": {"legends": [["a", [{"type": "GlyphRenderer", "id": "21c92e1b-5e79-453a-beae-46bf25edee66"}]], ["b", [{"type": "GlyphRenderer", "id": "56780a65-e1d5-4897-b7e9-87bf3a6a9fba"}]], ["c", [{"type": "GlyphRenderer", "id": "0479b887-9f46-40cc-87c8-5c7f5044c03a"}]]], "location": "top_left", "plot": {"type": "Plot", "subtype": "Chart", "id": "0249677b-f624-431b-aaaf-bc7ad35897d4"}}}, {"type": "Range1d", "id": "74158d92-9430-42f7-ba07-6cb859f68975", "attributes": {"start": -0.4, "end": 4.4, "callback": null}}, {"type": "WheelZoomTool", "id": "5dc5b36e-ce8e-482b-ab8d-0de7436e5126", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "0249677b-f624-431b-aaaf-bc7ad35897d4"}}}, {"type": "Line", "id": "d4c1c45c-ab22-4bb6-9b2d-157a643bcbe2", "attributes": {"line_color": {"value": "#407ee7"}, "line_width": {"value": 2}, "x": {"field": "x_values"}, "y": {"field": "y_values"}}}, {"type": "GlyphRenderer", "id": "0479b887-9f46-40cc-87c8-5c7f5044c03a", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "2c17ff70-c9e6-4929-8a14-c6a465652a9c"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "d4c1c45c-ab22-4bb6-9b2d-157a643bcbe2"}}}, {"type": "PanTool", "id": "790409dc-df84-4e65-8d9c-75e67aada5c9", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "0249677b-f624-431b-aaaf-bc7ad35897d4"}}}, {"type": "ResizeTool", "id": "811ecac3-eadc-4b04-8185-7daab9b1304a", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "0249677b-f624-431b-aaaf-bc7ad35897d4"}}}, {"type": "Line", "id": "c0325f31-e6c6-4be7-ba3b-bc53263e4cdb", "attributes": {"line_color": {"value": "#5ab738"}, "line_width": {"value": 2}, "x": {"field": "x_values"}, "y": {"field": "y_values"}}}, {"type": "Range1d", "id": "a51845bb-020f-4700-ab48-4ec2bdfa45b6", "attributes": {"start": -10.4, "end": 138.4, "callback": null}}, {"type": "GlyphRenderer", "id": "21c92e1b-5e79-453a-beae-46bf25edee66", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "d086ec1b-12f5-42c7-94b4-0597b7267d0c"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "cce3612e-73d7-4b69-9123-d5161acdf597"}}}, {"type": "ColumnDataSource", "id": "fed6a5f8-0280-4b58-b04a-022c9de47408", "attributes": {"data": {"x_values": [0, 1, 2, 3, 4], "series": ["b", "b", "b", "b", "b"], "y_values": [12, 33, 47, 15, 126], "chart_index": [{"series": "b"}, {"series": "b"}, {"series": "b"}, {"series": "b"}, {"series": "b"}]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "ColumnDataSource", "id": "d086ec1b-12f5-42c7-94b4-0597b7267d0c", "attributes": {"data": {"x_values": [0, 1, 2, 3, 4], "series": ["a", "a", "a", "a", "a"], "y_values": [2, 3, 7, 5, 26], "chart_index": [{"series": "a"}, {"series": "a"}, {"series": "a"}, {"series": "a"}, {"series": "a"}]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "BasicTickFormatter", "id": "22ee5de1-117b-4f6d-842f-a3a4d2fc4d58", "attributes": {}}, {"type": "ColumnDataSource", "id": "2c17ff70-c9e6-4929-8a14-c6a465652a9c", "attributes": {"data": {"x_values": [0, 1, 2, 3, 4], "series": ["c", "c", "c", "c", "c"], "y_values": [22, 43, 10, 25, 26], "chart_index": [{"series": "c"}, {"series": "c"}, {"series": "c"}, {"series": "c"}, {"series": "c"}]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "BasicTicker", "id": "c2bf1b0f-20bd-489f-b9ef-cc735b60d6fb", "attributes": {}}, {"type": "BasicTicker", "id": "4445b777-bd25-4ebc-be46-c917ce1b15e9", "attributes": {}}, {"type": "LinearAxis", "id": "d4a9fef3-9df3-4b30-8d70-0a2b8c1ea9a9", "attributes": {"ticker": {"type": "BasicTicker", "id": "c2bf1b0f-20bd-489f-b9ef-cc735b60d6fb"}, "formatter": {"type": "BasicTickFormatter", "id": "22ee5de1-117b-4f6d-842f-a3a4d2fc4d58"}, "axis_label": "index", "plot": {"type": "Plot", "subtype": "Chart", "id": "0249677b-f624-431b-aaaf-bc7ad35897d4"}}}, {"type": "BoxZoomTool", "id": "96ca7a2b-a6a5-4e9d-8837-2e1bb54109d4", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "387947ba-254e-43e1-bda7-c1e2984ebe15"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "0249677b-f624-431b-aaaf-bc7ad35897d4"}}}, {"type": "ResetTool", "id": "ccaa8c2e-d737-4e66-8bbe-3976a0889bad", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "0249677b-f624-431b-aaaf-bc7ad35897d4"}}}, {"type": "Plot", "id": "0249677b-f624-431b-aaaf-bc7ad35897d4", "attributes": {"y_range": {"type": "Range1d", "id": "a51845bb-020f-4700-ab48-4ec2bdfa45b6"}, "width": 400, "legend": "top_left", "yscale": "auto", "tools": [{"type": "PanTool", "id": "790409dc-df84-4e65-8d9c-75e67aada5c9"}, {"type": "WheelZoomTool", "id": "5dc5b36e-ce8e-482b-ab8d-0de7436e5126"}, {"type": "BoxZoomTool", "id": "96ca7a2b-a6a5-4e9d-8837-2e1bb54109d4"}, {"type": "PreviewSaveTool", "id": "49f42d89-945c-4ed6-8410-1e96fd976614"}, {"type": "ResizeTool", "id": "811ecac3-eadc-4b04-8185-7daab9b1304a"}, {"type": "ResetTool", "id": "ccaa8c2e-d737-4e66-8bbe-3976a0889bad"}, {"type": "HelpTool", "id": "ff00aef2-2ef1-4715-a789-bb4f05725d9b"}], "title": "line", "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "52bd17d8-8293-4001-b89c-d24766e7cb55"}], "x_range": {"type": "Range1d", "id": "74158d92-9430-42f7-ba07-6cb859f68975"}, "y_mapper_type": "auto", "xscale": "auto", "below": [{"type": "LinearAxis", "id": "d4a9fef3-9df3-4b30-8d70-0a2b8c1ea9a9"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "9c814c7a-cf38-4d16-a2e1-c77562f6893f"}, "renderers": [{"type": "BoxAnnotation", "id": "387947ba-254e-43e1-bda7-c1e2984ebe15"}, {"type": "GlyphRenderer", "id": "21c92e1b-5e79-453a-beae-46bf25edee66"}, {"type": "GlyphRenderer", "id": "56780a65-e1d5-4897-b7e9-87bf3a6a9fba"}, {"type": "GlyphRenderer", "id": "0479b887-9f46-40cc-87c8-5c7f5044c03a"}, {"type": "Legend", "id": "a5b3fc5e-1b97-45f8-a26a-363ad70d6bf7"}, {"type": "LinearAxis", "id": "d4a9fef3-9df3-4b30-8d70-0a2b8c1ea9a9"}, {"type": "LinearAxis", "id": "52bd17d8-8293-4001-b89c-d24766e7cb55"}, {"type": "Grid", "id": "ea516c96-8399-4885-9547-cdeb269e70c2"}, {"type": "Grid", "id": "d031f29c-9beb-4e3f-947e-041f6a0d7052"}]}, "subtype": "Chart"}, {"type": "Line", "id": "cce3612e-73d7-4b69-9123-d5161acdf597", "attributes": {"line_color": {"value": "#f22c40"}, "line_width": {"value": 2}, "x": {"field": "x_values"}, "y": {"field": "y_values"}}}, {"type": "BasicTickFormatter", "id": "e11c463d-41e0-437b-bf5a-d973fa6ffe80", "attributes": {}}, {"type": "LinearAxis", "id": "52bd17d8-8293-4001-b89c-d24766e7cb55", "attributes": {"ticker": {"type": "BasicTicker", "id": "4445b777-bd25-4ebc-be46-c917ce1b15e9"}, "formatter": {"type": "BasicTickFormatter", "id": "e11c463d-41e0-437b-bf5a-d973fa6ffe80"}, "axis_label": "Languages", "plot": {"type": "Plot", "subtype": "Chart", "id": "0249677b-f624-431b-aaaf-bc7ad35897d4"}}}, {"type": "GlyphRenderer", "id": "56780a65-e1d5-4897-b7e9-87bf3a6a9fba", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "fed6a5f8-0280-4b58-b04a-022c9de47408"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "c0325f31-e6c6-4be7-ba3b-bc53263e4cdb"}}}, {"type": "HelpTool", "id": "ff00aef2-2ef1-4715-a789-bb4f05725d9b", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "0249677b-f624-431b-aaaf-bc7ad35897d4"}}}, {"type": "Grid", "id": "d031f29c-9beb-4e3f-947e-041f6a0d7052", "attributes": {"ticker": {"type": "BasicTicker", "id": "4445b777-bd25-4ebc-be46-c917ce1b15e9"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Chart", "id": "0249677b-f624-431b-aaaf-bc7ad35897d4"}}}, {"type": "ToolEvents", "id": "9c814c7a-cf38-4d16-a2e1-c77562f6893f", "attributes": {}}, {"type": "BoxAnnotation", "id": "387947ba-254e-43e1-bda7-c1e2984ebe15", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "PreviewSaveTool", "id": "49f42d89-945c-4ed6-8410-1e96fd976614", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "0249677b-f624-431b-aaaf-bc7ad35897d4"}}}], "root_ids": ["0249677b-f624-431b-aaaf-bc7ad35897d4"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "92efddc3-0b40-4d73-9273-763d56d3538a", "modelid": "0249677b-f624-431b-aaaf-bc7ad35897d4", "elementid": "e17bdf3a-885a-4662-8d2e-14a44b40184c"}];
          
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