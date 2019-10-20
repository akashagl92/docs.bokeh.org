
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
  };var element = document.getElementById("31d8801c-0d7b-44b8-92df-98283967e3c4");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '31d8801c-0d7b-44b8-92df-98283967e3c4' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"cf9cdb92-6b89-44f2-99c1-b0967546fe1b": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ColumnDataSource", "id": "5268ada5-9f6b-4293-84dd-e719cf0f8ecf", "attributes": {"data": {"x": [1, 2, 3], "size": [10, 20, 25], "y": [1, 2, 3]}, "column_names": ["x", "size", "y"], "callback": null}}, {"type": "DataRange1d", "id": "6957d870-07b8-4222-aff2-6c018ed714cc", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "12a9dcf7-895f-4da4-a283-5cdb91aca15b", "attributes": {}}, {"type": "BasicTicker", "id": "78d18a2d-e91a-49f0-8c84-be6a9ee2fba6", "attributes": {}}, {"type": "Grid", "id": "afb77e3f-c906-4d3e-b370-89651d18b38f", "attributes": {"ticker": {"type": "BasicTicker", "id": "78d18a2d-e91a-49f0-8c84-be6a9ee2fba6"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "4f26c3bd-739b-4497-985a-c4fd51a6cfbf"}}}, {"type": "DataRange1d", "id": "75d30814-e58b-4942-b872-39c9148772fd", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "5d28ad81-6e37-4fcd-bb90-464710e16dab", "attributes": {"ticker": {"type": "BasicTicker", "id": "78d18a2d-e91a-49f0-8c84-be6a9ee2fba6"}, "formatter": {"type": "BasicTickFormatter", "id": "0d5296ea-723d-464b-ad52-36d995cd5f82"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "4f26c3bd-739b-4497-985a-c4fd51a6cfbf"}}}, {"type": "Triangle", "id": "03a5cc99-bd8a-4c24-a075-01fd2e4dd260", "attributes": {"line_color": {"value": "#99D594"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "size"}, "fill_color": {"value": "#99D594"}}}, {"type": "Triangle", "id": "fec14133-d74f-41ed-9346-f1c4acb61850", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "size"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "PanTool", "id": "ef179f53-d519-48fb-bc4b-a68553415d5f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "4f26c3bd-739b-4497-985a-c4fd51a6cfbf"}}}, {"type": "WheelZoomTool", "id": "23a713e1-381e-4c24-a5ba-4a8eb2f94fe3", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "4f26c3bd-739b-4497-985a-c4fd51a6cfbf"}}}, {"type": "Grid", "id": "0b3481fa-7283-489e-9d4e-4fc426ba6c3e", "attributes": {"ticker": {"type": "BasicTicker", "id": "12a9dcf7-895f-4da4-a283-5cdb91aca15b"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "4f26c3bd-739b-4497-985a-c4fd51a6cfbf"}}}, {"type": "ToolEvents", "id": "105d6e5b-5eec-4bd4-911d-cef145b9f1b5", "attributes": {}}, {"type": "GlyphRenderer", "id": "d22e7f18-f0a3-4ea0-9f3a-9a925b50eab4", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "5268ada5-9f6b-4293-84dd-e719cf0f8ecf"}, "nonselection_glyph": {"type": "Triangle", "id": "fec14133-d74f-41ed-9346-f1c4acb61850"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Triangle", "id": "03a5cc99-bd8a-4c24-a075-01fd2e4dd260"}}}, {"type": "BoxZoomTool", "id": "cbed4662-f4f2-40c7-b16b-b127ca6a8049", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "3e2ec9cc-10c0-4dca-9881-d47e2e404edf"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "4f26c3bd-739b-4497-985a-c4fd51a6cfbf"}}}, {"type": "PreviewSaveTool", "id": "a7602d9b-e58d-492d-9d04-ac989abd3e66", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "4f26c3bd-739b-4497-985a-c4fd51a6cfbf"}}}, {"type": "HelpTool", "id": "1f68062c-7e39-4910-9c11-a4fa35ea617a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "4f26c3bd-739b-4497-985a-c4fd51a6cfbf"}}}, {"type": "BoxAnnotation", "id": "3e2ec9cc-10c0-4dca-9881-d47e2e404edf", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "LinearAxis", "id": "addf130e-6913-463c-a904-14cdb9b2ed84", "attributes": {"ticker": {"type": "BasicTicker", "id": "12a9dcf7-895f-4da4-a283-5cdb91aca15b"}, "formatter": {"type": "BasicTickFormatter", "id": "00c1ce42-7e75-4345-942a-3323bf6c22cf"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "4f26c3bd-739b-4497-985a-c4fd51a6cfbf"}}}, {"type": "BasicTickFormatter", "id": "00c1ce42-7e75-4345-942a-3323bf6c22cf", "attributes": {}}, {"type": "ResetTool", "id": "08626c9f-60a5-4e3c-a947-67e4afe4c8d8", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "4f26c3bd-739b-4497-985a-c4fd51a6cfbf"}}}, {"type": "Plot", "id": "4f26c3bd-739b-4497-985a-c4fd51a6cfbf", "attributes": {"tools": [{"type": "PanTool", "id": "ef179f53-d519-48fb-bc4b-a68553415d5f"}, {"type": "WheelZoomTool", "id": "23a713e1-381e-4c24-a5ba-4a8eb2f94fe3"}, {"type": "BoxZoomTool", "id": "cbed4662-f4f2-40c7-b16b-b127ca6a8049"}, {"type": "PreviewSaveTool", "id": "a7602d9b-e58d-492d-9d04-ac989abd3e66"}, {"type": "ResizeTool", "id": "e38712a2-ef70-4594-9033-775d92f19cd6"}, {"type": "ResetTool", "id": "08626c9f-60a5-4e3c-a947-67e4afe4c8d8"}, {"type": "HelpTool", "id": "1f68062c-7e39-4910-9c11-a4fa35ea617a"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "75d30814-e58b-4942-b872-39c9148772fd"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "5d28ad81-6e37-4fcd-bb90-464710e16dab"}, {"type": "Grid", "id": "afb77e3f-c906-4d3e-b370-89651d18b38f"}, {"type": "LinearAxis", "id": "addf130e-6913-463c-a904-14cdb9b2ed84"}, {"type": "Grid", "id": "0b3481fa-7283-489e-9d4e-4fc426ba6c3e"}, {"type": "BoxAnnotation", "id": "3e2ec9cc-10c0-4dca-9881-d47e2e404edf"}, {"type": "GlyphRenderer", "id": "d22e7f18-f0a3-4ea0-9f3a-9a925b50eab4"}], "left": [{"type": "LinearAxis", "id": "addf130e-6913-463c-a904-14cdb9b2ed84"}], "below": [{"type": "LinearAxis", "id": "5d28ad81-6e37-4fcd-bb90-464710e16dab"}], "tool_events": {"type": "ToolEvents", "id": "105d6e5b-5eec-4bd4-911d-cef145b9f1b5"}, "x_range": {"type": "DataRange1d", "id": "6957d870-07b8-4222-aff2-6c018ed714cc"}}, "subtype": "Figure"}, {"type": "BasicTickFormatter", "id": "0d5296ea-723d-464b-ad52-36d995cd5f82", "attributes": {}}, {"type": "ResizeTool", "id": "e38712a2-ef70-4594-9033-775d92f19cd6", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "4f26c3bd-739b-4497-985a-c4fd51a6cfbf"}}}], "root_ids": ["4f26c3bd-739b-4497-985a-c4fd51a6cfbf"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "cf9cdb92-6b89-44f2-99c1-b0967546fe1b", "modelid": "4f26c3bd-739b-4497-985a-c4fd51a6cfbf", "elementid": "31d8801c-0d7b-44b8-92df-98283967e3c4"}];
          
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