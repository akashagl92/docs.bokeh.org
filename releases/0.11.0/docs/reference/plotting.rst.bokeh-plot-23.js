
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
  };var element = document.getElementById("e8090538-51b4-4cc6-babf-dad2d68d9c29");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'e8090538-51b4-4cc6-babf-dad2d68d9c29' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"25429634-6c67-4e8a-acb7-ea3c565c6fe1": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "9bcb1a57-85f6-44f9-8b10-4c6301f4a3c5", "attributes": {"ticker": {"type": "BasicTicker", "id": "fc2aabed-2d4c-4c9f-bf0c-45c038eab217"}, "formatter": {"type": "BasicTickFormatter", "id": "4fefc11d-1527-4013-a5d1-ee5211ea7013"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "6079fe9c-49ba-4f02-b365-98e21d43bd3e"}}}, {"type": "Plot", "id": "6079fe9c-49ba-4f02-b365-98e21d43bd3e", "attributes": {"tools": [{"type": "PanTool", "id": "32d92137-7345-4878-9aad-eef4244d1c22"}, {"type": "WheelZoomTool", "id": "7f46a504-5149-4f07-9624-1d9ebfea706d"}, {"type": "BoxZoomTool", "id": "cee2303a-c564-49cf-ba07-e22d78a9a6ef"}, {"type": "PreviewSaveTool", "id": "14733c5f-b832-49f5-8d60-dbaa2f3696f4"}, {"type": "ResizeTool", "id": "c32ecd70-67e9-4102-9282-93e5286a8813"}, {"type": "ResetTool", "id": "b07949a7-e2ab-4c23-be78-fe91ce737e9b"}, {"type": "HelpTool", "id": "c6ec5e2c-c000-472c-af55-f929f687a8c0"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "744e92fa-a263-4f6a-9459-a1a688b91ef3"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "173694c1-49b3-4769-b970-fe1ef6e788e2"}, {"type": "Grid", "id": "229f7876-9188-4aeb-bed4-518dc2230032"}, {"type": "LinearAxis", "id": "9bcb1a57-85f6-44f9-8b10-4c6301f4a3c5"}, {"type": "Grid", "id": "9cc33fa7-aca4-47ae-bef0-77ab7bb82535"}, {"type": "BoxAnnotation", "id": "db3fb1c9-7603-4361-81db-5a70f0759c2d"}, {"type": "GlyphRenderer", "id": "c1c9dc13-ffc8-4d76-b173-b90b2d7df295"}], "left": [{"type": "LinearAxis", "id": "9bcb1a57-85f6-44f9-8b10-4c6301f4a3c5"}], "below": [{"type": "LinearAxis", "id": "173694c1-49b3-4769-b970-fe1ef6e788e2"}], "tool_events": {"type": "ToolEvents", "id": "b4b143e7-8e00-46a7-93ce-d2e6c006f7d7"}, "x_range": {"type": "DataRange1d", "id": "c1352862-7f2e-4a05-813a-ed6d9fbcbbed"}}, "subtype": "Figure"}, {"type": "ResizeTool", "id": "c32ecd70-67e9-4102-9282-93e5286a8813", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6079fe9c-49ba-4f02-b365-98e21d43bd3e"}}}, {"type": "BoxAnnotation", "id": "db3fb1c9-7603-4361-81db-5a70f0759c2d", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "fc2aabed-2d4c-4c9f-bf0c-45c038eab217", "attributes": {}}, {"type": "X", "id": "f3b7e56a-eadf-44cc-8b27-ac014b22c50d", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "size"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "WheelZoomTool", "id": "7f46a504-5149-4f07-9624-1d9ebfea706d", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6079fe9c-49ba-4f02-b365-98e21d43bd3e"}}}, {"type": "LinearAxis", "id": "173694c1-49b3-4769-b970-fe1ef6e788e2", "attributes": {"ticker": {"type": "BasicTicker", "id": "cec28441-42a8-4139-b681-fcd46f72ac80"}, "formatter": {"type": "BasicTickFormatter", "id": "f8d06591-e98f-4776-a2a0-6943e557e94f"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "6079fe9c-49ba-4f02-b365-98e21d43bd3e"}}}, {"type": "BasicTickFormatter", "id": "f8d06591-e98f-4776-a2a0-6943e557e94f", "attributes": {}}, {"type": "ColumnDataSource", "id": "024ddec3-b5e8-4386-b0a1-06e1162f2136", "attributes": {"data": {"x": [1, 2, 3], "size": [10, 20, 25], "y": [1, 2, 3]}, "column_names": ["x", "size", "y"], "callback": null}}, {"type": "BasicTicker", "id": "cec28441-42a8-4139-b681-fcd46f72ac80", "attributes": {}}, {"type": "PreviewSaveTool", "id": "14733c5f-b832-49f5-8d60-dbaa2f3696f4", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6079fe9c-49ba-4f02-b365-98e21d43bd3e"}}}, {"type": "X", "id": "fa182189-c294-4f67-b21b-da6ed54ae9c0", "attributes": {"line_color": {"value": "#fa9fb5"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "size"}, "y": {"field": "y"}, "fill_color": {"value": "#fa9fb5"}}}, {"type": "HelpTool", "id": "c6ec5e2c-c000-472c-af55-f929f687a8c0", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6079fe9c-49ba-4f02-b365-98e21d43bd3e"}}}, {"type": "ResetTool", "id": "b07949a7-e2ab-4c23-be78-fe91ce737e9b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6079fe9c-49ba-4f02-b365-98e21d43bd3e"}}}, {"type": "DataRange1d", "id": "744e92fa-a263-4f6a-9459-a1a688b91ef3", "attributes": {"callback": null}}, {"type": "PanTool", "id": "32d92137-7345-4878-9aad-eef4244d1c22", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6079fe9c-49ba-4f02-b365-98e21d43bd3e"}}}, {"type": "Grid", "id": "9cc33fa7-aca4-47ae-bef0-77ab7bb82535", "attributes": {"ticker": {"type": "BasicTicker", "id": "fc2aabed-2d4c-4c9f-bf0c-45c038eab217"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "6079fe9c-49ba-4f02-b365-98e21d43bd3e"}}}, {"type": "GlyphRenderer", "id": "c1c9dc13-ffc8-4d76-b173-b90b2d7df295", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "024ddec3-b5e8-4386-b0a1-06e1162f2136"}, "nonselection_glyph": {"type": "X", "id": "f3b7e56a-eadf-44cc-8b27-ac014b22c50d"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "X", "id": "fa182189-c294-4f67-b21b-da6ed54ae9c0"}}}, {"type": "BoxZoomTool", "id": "cee2303a-c564-49cf-ba07-e22d78a9a6ef", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "db3fb1c9-7603-4361-81db-5a70f0759c2d"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "6079fe9c-49ba-4f02-b365-98e21d43bd3e"}}}, {"type": "BasicTickFormatter", "id": "4fefc11d-1527-4013-a5d1-ee5211ea7013", "attributes": {}}, {"type": "ToolEvents", "id": "b4b143e7-8e00-46a7-93ce-d2e6c006f7d7", "attributes": {}}, {"type": "Grid", "id": "229f7876-9188-4aeb-bed4-518dc2230032", "attributes": {"ticker": {"type": "BasicTicker", "id": "cec28441-42a8-4139-b681-fcd46f72ac80"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "6079fe9c-49ba-4f02-b365-98e21d43bd3e"}}}, {"type": "DataRange1d", "id": "c1352862-7f2e-4a05-813a-ed6d9fbcbbed", "attributes": {"callback": null}}], "root_ids": ["6079fe9c-49ba-4f02-b365-98e21d43bd3e"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "25429634-6c67-4e8a-acb7-ea3c565c6fe1", "modelid": "6079fe9c-49ba-4f02-b365-98e21d43bd3e", "elementid": "e8090538-51b4-4cc6-babf-dad2d68d9c29"}];
          
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