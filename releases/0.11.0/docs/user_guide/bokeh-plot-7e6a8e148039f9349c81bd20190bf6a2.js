
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
  };var element = document.getElementById("3cfb9ffb-bfd1-42ae-a8dd-b0aeabccf491");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '3cfb9ffb-bfd1-42ae-a8dd-b0aeabccf491' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"8b41b402-0f2f-4a5a-9cf7-4e2a244f12b3": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "DataRange1d", "id": "956e83ba-9d99-4dc1-be55-eaf223c15020", "attributes": {"callback": null}}, {"type": "WheelZoomTool", "id": "da9972a3-dade-4aa2-ba9e-5bd95f5924c1", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "dae39d9c-cfdd-454b-a8ff-470879fb1f7e"}}}, {"type": "PanTool", "id": "0c95d056-c768-40ad-8b57-c4a1fccdf2d3", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "dae39d9c-cfdd-454b-a8ff-470879fb1f7e"}}}, {"type": "ToolEvents", "id": "5bf68fd9-f1d5-434d-b998-a896a66ded49", "attributes": {}}, {"type": "BoxZoomTool", "id": "d03762de-d35e-49b0-af26-f0dd6a1abe73", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "dcdf6f09-90fb-4a79-956e-425a017a907d"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "dae39d9c-cfdd-454b-a8ff-470879fb1f7e"}}}, {"type": "BasicTicker", "id": "5771b65b-de88-4f3d-a66c-05e8db202d51", "attributes": {}}, {"type": "BasicTicker", "id": "2402792f-0a89-4617-a765-e68386fa5695", "attributes": {}}, {"type": "Circle", "id": "ecaf4564-3f0a-41a3-8950-a068defc5707", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "BoxAnnotation", "id": "dcdf6f09-90fb-4a79-956e-425a017a907d", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Grid", "id": "4666e770-d6da-4a4d-bb29-1d36dd8b8511", "attributes": {"ticker": {"type": "BasicTicker", "id": "2402792f-0a89-4617-a765-e68386fa5695"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "dae39d9c-cfdd-454b-a8ff-470879fb1f7e"}}}, {"type": "ResetTool", "id": "35d8c8d7-1ef8-4b9e-ac0a-68d301003057", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "dae39d9c-cfdd-454b-a8ff-470879fb1f7e"}}}, {"type": "ResizeTool", "id": "1875cd84-0339-4468-a0b7-cffb4eef2825", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "dae39d9c-cfdd-454b-a8ff-470879fb1f7e"}}}, {"type": "ColumnDataSource", "id": "2670cbf8-a749-4bb4-bb53-bd03011d781f", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "PreviewSaveTool", "id": "eff19a6c-3856-4d08-b422-b774b846629a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "dae39d9c-cfdd-454b-a8ff-470879fb1f7e"}}}, {"type": "HelpTool", "id": "13df1254-e12e-4a61-be42-0d3b0dac3158", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "dae39d9c-cfdd-454b-a8ff-470879fb1f7e"}}}, {"type": "LinearAxis", "id": "828f5422-f74d-4020-8f28-0e4b927b9c5f", "attributes": {"ticker": {"type": "BasicTicker", "id": "5771b65b-de88-4f3d-a66c-05e8db202d51"}, "formatter": {"type": "BasicTickFormatter", "id": "5b30372c-fd91-4a73-b04d-b0b45aae761b"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "dae39d9c-cfdd-454b-a8ff-470879fb1f7e"}}}, {"type": "DataRange1d", "id": "523e6176-745d-412f-8d16-7eb1fc797f9a", "attributes": {"callback": null}}, {"type": "Grid", "id": "8048134d-d875-43ce-94ae-46b58a597bea", "attributes": {"ticker": {"type": "BasicTicker", "id": "5771b65b-de88-4f3d-a66c-05e8db202d51"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "dae39d9c-cfdd-454b-a8ff-470879fb1f7e"}}}, {"type": "BasicTickFormatter", "id": "5b30372c-fd91-4a73-b04d-b0b45aae761b", "attributes": {}}, {"type": "BasicTickFormatter", "id": "a5c6fcf5-f06e-4b2c-8041-bc88eb1b038f", "attributes": {}}, {"type": "GlyphRenderer", "id": "a40b7067-1d96-4a66-9be5-2930d12e66ba", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "2670cbf8-a749-4bb4-bb53-bd03011d781f"}, "nonselection_glyph": {"type": "Circle", "id": "5acdb4cf-6eeb-4583-9739-aa1a9f14ea0d"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "ecaf4564-3f0a-41a3-8950-a068defc5707"}}}, {"type": "Circle", "id": "5acdb4cf-6eeb-4583-9739-aa1a9f14ea0d", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "LinearAxis", "id": "ac3748f3-4f64-435b-9de8-300d4e9e2346", "attributes": {"ticker": {"type": "BasicTicker", "id": "2402792f-0a89-4617-a765-e68386fa5695"}, "formatter": {"type": "BasicTickFormatter", "id": "a5c6fcf5-f06e-4b2c-8041-bc88eb1b038f"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "dae39d9c-cfdd-454b-a8ff-470879fb1f7e"}}}, {"type": "Plot", "id": "dae39d9c-cfdd-454b-a8ff-470879fb1f7e", "attributes": {"border_fill_color": {"value": "whitesmoke"}, "plot_width": 400, "tool_events": {"type": "ToolEvents", "id": "5bf68fd9-f1d5-434d-b998-a896a66ded49"}, "y_range": {"type": "DataRange1d", "id": "956e83ba-9d99-4dc1-be55-eaf223c15020"}, "left": [{"type": "LinearAxis", "id": "ac3748f3-4f64-435b-9de8-300d4e9e2346"}], "renderers": [{"type": "LinearAxis", "id": "828f5422-f74d-4020-8f28-0e4b927b9c5f"}, {"type": "Grid", "id": "8048134d-d875-43ce-94ae-46b58a597bea"}, {"type": "LinearAxis", "id": "ac3748f3-4f64-435b-9de8-300d4e9e2346"}, {"type": "Grid", "id": "4666e770-d6da-4a4d-bb29-1d36dd8b8511"}, {"type": "BoxAnnotation", "id": "dcdf6f09-90fb-4a79-956e-425a017a907d"}, {"type": "GlyphRenderer", "id": "a40b7067-1d96-4a66-9be5-2930d12e66ba"}], "min_border_left": 80, "below": [{"type": "LinearAxis", "id": "828f5422-f74d-4020-8f28-0e4b927b9c5f"}], "plot_height": 400, "tools": [{"type": "PanTool", "id": "0c95d056-c768-40ad-8b57-c4a1fccdf2d3"}, {"type": "WheelZoomTool", "id": "da9972a3-dade-4aa2-ba9e-5bd95f5924c1"}, {"type": "BoxZoomTool", "id": "d03762de-d35e-49b0-af26-f0dd6a1abe73"}, {"type": "PreviewSaveTool", "id": "eff19a6c-3856-4d08-b422-b774b846629a"}, {"type": "ResizeTool", "id": "1875cd84-0339-4468-a0b7-cffb4eef2825"}, {"type": "ResetTool", "id": "35d8c8d7-1ef8-4b9e-ac0a-68d301003057"}, {"type": "HelpTool", "id": "13df1254-e12e-4a61-be42-0d3b0dac3158"}], "x_range": {"type": "DataRange1d", "id": "523e6176-745d-412f-8d16-7eb1fc797f9a"}}, "subtype": "Figure"}], "root_ids": ["dae39d9c-cfdd-454b-a8ff-470879fb1f7e"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "8b41b402-0f2f-4a5a-9cf7-4e2a244f12b3", "modelid": "dae39d9c-cfdd-454b-a8ff-470879fb1f7e", "elementid": "3cfb9ffb-bfd1-42ae-a8dd-b0aeabccf491"}];
          
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