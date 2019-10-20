
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
  };var element = document.getElementById("531688ab-83f8-4570-aa03-207b1635a827");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '531688ab-83f8-4570-aa03-207b1635a827' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"86666aed-fcfd-49bc-ab98-efe80cfc05b6": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "aff2b823-421d-40b2-8a1d-86fd1b151b1f", "attributes": {"ticker": {"type": "BasicTicker", "id": "bcd49ba5-1466-46f6-a26c-3dc5df052ed4"}, "formatter": {"type": "BasicTickFormatter", "id": "05369c51-fd85-41c6-8732-5542df663f79"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "2de42325-ebd9-4a53-ba05-890d2edbada7"}}}, {"type": "BasicTickFormatter", "id": "386c4140-ee98-41ed-8650-742df2cf359a", "attributes": {}}, {"type": "BoxZoomTool", "id": "a5a82e95-44ed-418d-b729-cb440b4ddb06", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "aea3bc29-3935-4004-ae3b-7c637b7820fe"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "2de42325-ebd9-4a53-ba05-890d2edbada7"}}}, {"type": "PanTool", "id": "f1807ba4-cddb-4b74-ae91-748ec7a7807f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2de42325-ebd9-4a53-ba05-890d2edbada7"}}}, {"type": "WheelZoomTool", "id": "ee1f087e-6e16-4c7b-8e09-a6e244103f56", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2de42325-ebd9-4a53-ba05-890d2edbada7"}}}, {"type": "Circle", "id": "31c06fb4-a2ec-490c-b095-3a3354c0e339", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "GlyphRenderer", "id": "a6e0cfe4-98cc-478c-9967-4f4f3e9adf9d", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "46ce7feb-2e2a-4f61-8ea1-28b13d78a633"}, "nonselection_glyph": {"type": "Circle", "id": "1842304e-e297-4a88-b3ee-883ddc6f5e7e"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "31c06fb4-a2ec-490c-b095-3a3354c0e339"}}}, {"type": "HelpTool", "id": "5f565935-681a-493a-9fbb-c682986cabb2", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2de42325-ebd9-4a53-ba05-890d2edbada7"}}}, {"type": "PreviewSaveTool", "id": "290786b1-2c77-4a66-849c-b19c4be6bfe9", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2de42325-ebd9-4a53-ba05-890d2edbada7"}}}, {"type": "ToolEvents", "id": "8891ee78-aea1-454c-9124-8820b6398640", "attributes": {}}, {"type": "ResetTool", "id": "7daa0314-f36b-46d2-8dc2-a287216ef17c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2de42325-ebd9-4a53-ba05-890d2edbada7"}}}, {"type": "ResizeTool", "id": "d8baae1d-ff4e-4bb6-b096-f5dcc1c873ea", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2de42325-ebd9-4a53-ba05-890d2edbada7"}}}, {"type": "DataRange1d", "id": "86807041-2a62-486d-84c8-6d1d1a1d0379", "attributes": {"callback": null}}, {"type": "Grid", "id": "6f079e7c-7f43-434e-9704-9ac39a59019a", "attributes": {"ticker": {"type": "BasicTicker", "id": "dd51130c-3244-47ab-9ef3-d050f9ac5938"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "2de42325-ebd9-4a53-ba05-890d2edbada7"}}}, {"type": "BasicTickFormatter", "id": "05369c51-fd85-41c6-8732-5542df663f79", "attributes": {}}, {"type": "Grid", "id": "cf74ca81-17d8-4f78-afc0-4361b64fc0f8", "attributes": {"ticker": {"type": "BasicTicker", "id": "bcd49ba5-1466-46f6-a26c-3dc5df052ed4"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "2de42325-ebd9-4a53-ba05-890d2edbada7"}}}, {"type": "BasicTicker", "id": "bcd49ba5-1466-46f6-a26c-3dc5df052ed4", "attributes": {}}, {"type": "Plot", "id": "2de42325-ebd9-4a53-ba05-890d2edbada7", "attributes": {"tools": [{"type": "PanTool", "id": "f1807ba4-cddb-4b74-ae91-748ec7a7807f"}, {"type": "WheelZoomTool", "id": "ee1f087e-6e16-4c7b-8e09-a6e244103f56"}, {"type": "BoxZoomTool", "id": "a5a82e95-44ed-418d-b729-cb440b4ddb06"}, {"type": "PreviewSaveTool", "id": "290786b1-2c77-4a66-849c-b19c4be6bfe9"}, {"type": "ResizeTool", "id": "d8baae1d-ff4e-4bb6-b096-f5dcc1c873ea"}, {"type": "ResetTool", "id": "7daa0314-f36b-46d2-8dc2-a287216ef17c"}, {"type": "HelpTool", "id": "5f565935-681a-493a-9fbb-c682986cabb2"}], "plot_width": 400, "tool_events": {"type": "ToolEvents", "id": "8891ee78-aea1-454c-9124-8820b6398640"}, "y_range": {"type": "DataRange1d", "id": "b69cdf49-a9d5-4ebf-9b86-75e27c5dc677"}, "left": [{"type": "LinearAxis", "id": "74fe93d9-2415-43a0-aa07-31c84ea7070f"}], "renderers": [{"type": "LinearAxis", "id": "aff2b823-421d-40b2-8a1d-86fd1b151b1f"}, {"type": "Grid", "id": "cf74ca81-17d8-4f78-afc0-4361b64fc0f8"}, {"type": "LinearAxis", "id": "74fe93d9-2415-43a0-aa07-31c84ea7070f"}, {"type": "Grid", "id": "6f079e7c-7f43-434e-9704-9ac39a59019a"}, {"type": "BoxAnnotation", "id": "aea3bc29-3935-4004-ae3b-7c637b7820fe"}, {"type": "GlyphRenderer", "id": "a6e0cfe4-98cc-478c-9967-4f4f3e9adf9d"}], "background_fill_alpha": {"value": 0.5}, "background_fill_color": {"value": "beige"}, "plot_height": 400, "below": [{"type": "LinearAxis", "id": "aff2b823-421d-40b2-8a1d-86fd1b151b1f"}], "x_range": {"type": "DataRange1d", "id": "86807041-2a62-486d-84c8-6d1d1a1d0379"}}, "subtype": "Figure"}, {"type": "BasicTicker", "id": "dd51130c-3244-47ab-9ef3-d050f9ac5938", "attributes": {}}, {"type": "DataRange1d", "id": "b69cdf49-a9d5-4ebf-9b86-75e27c5dc677", "attributes": {"callback": null}}, {"type": "BoxAnnotation", "id": "aea3bc29-3935-4004-ae3b-7c637b7820fe", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ColumnDataSource", "id": "46ce7feb-2e2a-4f61-8ea1-28b13d78a633", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "Circle", "id": "1842304e-e297-4a88-b3ee-883ddc6f5e7e", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "LinearAxis", "id": "74fe93d9-2415-43a0-aa07-31c84ea7070f", "attributes": {"ticker": {"type": "BasicTicker", "id": "dd51130c-3244-47ab-9ef3-d050f9ac5938"}, "formatter": {"type": "BasicTickFormatter", "id": "386c4140-ee98-41ed-8650-742df2cf359a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "2de42325-ebd9-4a53-ba05-890d2edbada7"}}}], "root_ids": ["2de42325-ebd9-4a53-ba05-890d2edbada7"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "86666aed-fcfd-49bc-ab98-efe80cfc05b6", "modelid": "2de42325-ebd9-4a53-ba05-890d2edbada7", "elementid": "531688ab-83f8-4570-aa03-207b1635a827"}];
          
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