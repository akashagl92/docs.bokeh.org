
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
  };var element = document.getElementById("3436af27-6f9a-40e6-af82-fafc27e1017a");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '3436af27-6f9a-40e6-af82-fafc27e1017a' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"0d21329f-7722-4b66-aae3-21ffee6d7c51": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Circle", "id": "9c37e053-ce92-4301-a455-e1a3fb441e56", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "HelpTool", "id": "e65b451f-5cd0-46e1-9827-32439be7be90", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9f723a2f-7461-418f-8d50-9410782773b9"}}}, {"type": "ColumnDataSource", "id": "74b60810-dc4d-49bb-acd3-889531576a6b", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "PreviewSaveTool", "id": "5ecf6cf7-8654-4664-bd3e-83c812aa25ad", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9f723a2f-7461-418f-8d50-9410782773b9"}}}, {"type": "PanTool", "id": "1252691a-b927-4108-9697-10ef549c8269", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9f723a2f-7461-418f-8d50-9410782773b9"}}}, {"type": "WheelZoomTool", "id": "f089b94f-cc3b-4735-aa39-1e073ee828ca", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9f723a2f-7461-418f-8d50-9410782773b9"}}}, {"type": "ToolEvents", "id": "37b84c2d-c40b-439b-9da0-df7fb0a4a04d", "attributes": {}}, {"type": "Grid", "id": "75c1796d-f98e-404a-9627-1ee2cd276737", "attributes": {"ticker": {"type": "BasicTicker", "id": "0165b99a-bab4-4f79-bd6c-ea3a4e0e411b"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9f723a2f-7461-418f-8d50-9410782773b9"}}}, {"type": "DataRange1d", "id": "c7bb1299-c5da-49fc-ae61-e23304c0b0d3", "attributes": {"callback": null}}, {"type": "ResizeTool", "id": "83d168a5-0b30-4156-a9d9-3410504ea6fe", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9f723a2f-7461-418f-8d50-9410782773b9"}}}, {"type": "ResetTool", "id": "2d036a7b-1ab7-487e-9c02-de64558460bf", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9f723a2f-7461-418f-8d50-9410782773b9"}}}, {"type": "GlyphRenderer", "id": "9ff94e46-4a61-4170-a6df-3d0d43977494", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "74b60810-dc4d-49bb-acd3-889531576a6b"}, "nonselection_glyph": {"type": "Circle", "id": "9c37e053-ce92-4301-a455-e1a3fb441e56"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "dfb7fc6f-dfbc-4829-9382-2d9fc5ae5089"}}}, {"type": "BoxAnnotation", "id": "bf7d2b4f-de2a-404a-834c-3373304c1943", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "ed3d1dc8-6c33-4369-8ff1-fbebe82d4a94", "attributes": {}}, {"type": "BoxZoomTool", "id": "5cf2d7e8-c61c-49a9-afe4-b2236d1a9f5c", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "bf7d2b4f-de2a-404a-834c-3373304c1943"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9f723a2f-7461-418f-8d50-9410782773b9"}}}, {"type": "BasicTickFormatter", "id": "e0356589-5fb1-484b-a51d-fe55c5ad8daf", "attributes": {}}, {"type": "LinearAxis", "id": "2523c875-39e0-43d3-b90c-2a9bcea8228e", "attributes": {"ticker": {"type": "BasicTicker", "id": "ed3d1dc8-6c33-4369-8ff1-fbebe82d4a94"}, "formatter": {"type": "BasicTickFormatter", "id": "5cd51e00-4eca-4339-9a35-122a508f8b49"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9f723a2f-7461-418f-8d50-9410782773b9"}}}, {"type": "Plot", "id": "9f723a2f-7461-418f-8d50-9410782773b9", "attributes": {"tools": [{"type": "PanTool", "id": "1252691a-b927-4108-9697-10ef549c8269"}, {"type": "WheelZoomTool", "id": "f089b94f-cc3b-4735-aa39-1e073ee828ca"}, {"type": "BoxZoomTool", "id": "5cf2d7e8-c61c-49a9-afe4-b2236d1a9f5c"}, {"type": "PreviewSaveTool", "id": "5ecf6cf7-8654-4664-bd3e-83c812aa25ad"}, {"type": "ResizeTool", "id": "83d168a5-0b30-4156-a9d9-3410504ea6fe"}, {"type": "ResetTool", "id": "2d036a7b-1ab7-487e-9c02-de64558460bf"}, {"type": "HelpTool", "id": "e65b451f-5cd0-46e1-9827-32439be7be90"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "961b2416-4053-4470-b273-fd0dc662436e"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "5cdd1a78-c963-4901-9cb4-6b16aafa200d"}, {"type": "Grid", "id": "75c1796d-f98e-404a-9627-1ee2cd276737"}, {"type": "LinearAxis", "id": "2523c875-39e0-43d3-b90c-2a9bcea8228e"}, {"type": "Grid", "id": "57829bbb-085f-4bec-9f72-4b918d0f303f"}, {"type": "BoxAnnotation", "id": "bf7d2b4f-de2a-404a-834c-3373304c1943"}, {"type": "GlyphRenderer", "id": "9ff94e46-4a61-4170-a6df-3d0d43977494"}], "left": [{"type": "LinearAxis", "id": "2523c875-39e0-43d3-b90c-2a9bcea8228e"}], "below": [{"type": "LinearAxis", "id": "5cdd1a78-c963-4901-9cb4-6b16aafa200d"}], "tool_events": {"type": "ToolEvents", "id": "37b84c2d-c40b-439b-9da0-df7fb0a4a04d"}, "x_range": {"type": "DataRange1d", "id": "c7bb1299-c5da-49fc-ae61-e23304c0b0d3"}}, "subtype": "Figure"}, {"type": "Grid", "id": "57829bbb-085f-4bec-9f72-4b918d0f303f", "attributes": {"ticker": {"type": "BasicTicker", "id": "ed3d1dc8-6c33-4369-8ff1-fbebe82d4a94"}, "minor_grid_line_color": {"value": "navy"}, "dimension": 1, "minor_grid_line_alpha": {"value": 0.1}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9f723a2f-7461-418f-8d50-9410782773b9"}}}, {"type": "LinearAxis", "id": "5cdd1a78-c963-4901-9cb4-6b16aafa200d", "attributes": {"ticker": {"type": "BasicTicker", "id": "0165b99a-bab4-4f79-bd6c-ea3a4e0e411b"}, "formatter": {"type": "BasicTickFormatter", "id": "e0356589-5fb1-484b-a51d-fe55c5ad8daf"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9f723a2f-7461-418f-8d50-9410782773b9"}}}, {"type": "BasicTicker", "id": "0165b99a-bab4-4f79-bd6c-ea3a4e0e411b", "attributes": {}}, {"type": "Circle", "id": "dfb7fc6f-dfbc-4829-9382-2d9fc5ae5089", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "DataRange1d", "id": "961b2416-4053-4470-b273-fd0dc662436e", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "5cd51e00-4eca-4339-9a35-122a508f8b49", "attributes": {}}], "root_ids": ["9f723a2f-7461-418f-8d50-9410782773b9"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "0d21329f-7722-4b66-aae3-21ffee6d7c51", "modelid": "9f723a2f-7461-418f-8d50-9410782773b9", "elementid": "3436af27-6f9a-40e6-af82-fafc27e1017a"}];
          
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