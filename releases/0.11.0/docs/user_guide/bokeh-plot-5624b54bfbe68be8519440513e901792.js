
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
  };var element = document.getElementById("663b8c55-cd96-4c6b-9b20-ec84f7df401c");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '663b8c55-cd96-4c6b-9b20-ec84f7df401c' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"c6495f0b-2b43-4ef7-ae17-3fe339c492d4": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "GlyphRenderer", "id": "2b50cd33-06c4-45bf-bc01-434fe97cbfee", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "4efd1dac-8525-4bf0-ae99-fc6404cd4503"}, "nonselection_glyph": {"type": "Circle", "id": "b65c2887-a51a-41af-aa7c-a631f90e180d"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "b9454eb1-7fba-4038-8f40-f78806c535e1"}}}, {"type": "BasicTicker", "id": "ac4ee36a-4198-4dd1-82ee-e2635944ead1", "attributes": {}}, {"type": "HelpTool", "id": "b882f152-086d-4805-814b-b4c764b4acda", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1b3a44f5-75f1-4d49-a7b1-23bdfcb834f8"}}}, {"type": "BoxZoomTool", "id": "6431dd42-dc93-4dec-b9ee-3c9efcb52b17", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "26bb2cc1-0db6-415d-946e-48e473abb51f"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1b3a44f5-75f1-4d49-a7b1-23bdfcb834f8"}}}, {"type": "Grid", "id": "f574dba2-52cb-467d-b721-feff1256aee2", "attributes": {"ticker": {"type": "BasicTicker", "id": "3313ed85-f215-4c1b-b039-017c2833df5a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1b3a44f5-75f1-4d49-a7b1-23bdfcb834f8"}}}, {"type": "DataRange1d", "id": "23b30b4a-95cd-4030-892d-fe49b30ef436", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "d9b7410e-a188-4dbe-9ff0-b1feb98f01f8", "attributes": {"ticker": {"type": "BasicTicker", "id": "3313ed85-f215-4c1b-b039-017c2833df5a"}, "formatter": {"type": "BasicTickFormatter", "id": "144e7dc6-528c-48b8-a185-671164e32f0a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1b3a44f5-75f1-4d49-a7b1-23bdfcb834f8"}}}, {"type": "ResetTool", "id": "37142e67-de10-4527-b393-e6326bf0b8cc", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1b3a44f5-75f1-4d49-a7b1-23bdfcb834f8"}}}, {"type": "BoxAnnotation", "id": "26bb2cc1-0db6-415d-946e-48e473abb51f", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Circle", "id": "b65c2887-a51a-41af-aa7c-a631f90e180d", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "DataRange1d", "id": "784ebe3f-6fc9-4baf-a22c-1a90bf1b008d", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "ec7e07d4-90f4-4ad8-bd8b-3d5f7748afd9", "attributes": {"ticker": {"type": "BasicTicker", "id": "ac4ee36a-4198-4dd1-82ee-e2635944ead1"}, "formatter": {"type": "BasicTickFormatter", "id": "f21afa6b-9492-4cb1-b0a9-6cd8c62cf492"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1b3a44f5-75f1-4d49-a7b1-23bdfcb834f8"}}}, {"type": "ToolEvents", "id": "a169433d-4d8e-48ad-a4d7-52d79a9edb27", "attributes": {}}, {"type": "PreviewSaveTool", "id": "fc61e483-96c0-4dfd-8a82-76ba061e209c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1b3a44f5-75f1-4d49-a7b1-23bdfcb834f8"}}}, {"type": "BasicTicker", "id": "3313ed85-f215-4c1b-b039-017c2833df5a", "attributes": {}}, {"type": "ColumnDataSource", "id": "4efd1dac-8525-4bf0-ae99-fc6404cd4503", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [6, 7, 2, 4, 5]}, "column_names": ["x", "y"], "callback": null}}, {"type": "WheelZoomTool", "id": "da120919-27b4-4bcd-b8b6-64e2fe223b5c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1b3a44f5-75f1-4d49-a7b1-23bdfcb834f8"}}}, {"type": "Circle", "id": "b9454eb1-7fba-4038-8f40-f78806c535e1", "attributes": {"line_color": {"value": "navy"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.5}, "fill_color": {"value": "navy"}, "fill_alpha": {"value": 0.5}}}, {"type": "ResizeTool", "id": "e6bdf737-53dc-4b30-957b-9ce2561be34f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1b3a44f5-75f1-4d49-a7b1-23bdfcb834f8"}}}, {"type": "BasicTickFormatter", "id": "f21afa6b-9492-4cb1-b0a9-6cd8c62cf492", "attributes": {}}, {"type": "Grid", "id": "20e28d2f-299f-425f-9478-b3951a391916", "attributes": {"ticker": {"type": "BasicTicker", "id": "ac4ee36a-4198-4dd1-82ee-e2635944ead1"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "1b3a44f5-75f1-4d49-a7b1-23bdfcb834f8"}}}, {"type": "BasicTickFormatter", "id": "144e7dc6-528c-48b8-a185-671164e32f0a", "attributes": {}}, {"type": "Plot", "id": "1b3a44f5-75f1-4d49-a7b1-23bdfcb834f8", "attributes": {"tools": [{"type": "PanTool", "id": "4c1ba654-7d13-423a-befe-7229399efcff"}, {"type": "WheelZoomTool", "id": "da120919-27b4-4bcd-b8b6-64e2fe223b5c"}, {"type": "BoxZoomTool", "id": "6431dd42-dc93-4dec-b9ee-3c9efcb52b17"}, {"type": "PreviewSaveTool", "id": "fc61e483-96c0-4dfd-8a82-76ba061e209c"}, {"type": "ResizeTool", "id": "e6bdf737-53dc-4b30-957b-9ce2561be34f"}, {"type": "ResetTool", "id": "37142e67-de10-4527-b393-e6326bf0b8cc"}, {"type": "HelpTool", "id": "b882f152-086d-4805-814b-b4c764b4acda"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "23b30b4a-95cd-4030-892d-fe49b30ef436"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "d9b7410e-a188-4dbe-9ff0-b1feb98f01f8"}, {"type": "Grid", "id": "f574dba2-52cb-467d-b721-feff1256aee2"}, {"type": "LinearAxis", "id": "ec7e07d4-90f4-4ad8-bd8b-3d5f7748afd9"}, {"type": "Grid", "id": "20e28d2f-299f-425f-9478-b3951a391916"}, {"type": "BoxAnnotation", "id": "26bb2cc1-0db6-415d-946e-48e473abb51f"}, {"type": "GlyphRenderer", "id": "2b50cd33-06c4-45bf-bc01-434fe97cbfee"}], "left": [{"type": "LinearAxis", "id": "ec7e07d4-90f4-4ad8-bd8b-3d5f7748afd9"}], "below": [{"type": "LinearAxis", "id": "d9b7410e-a188-4dbe-9ff0-b1feb98f01f8"}], "tool_events": {"type": "ToolEvents", "id": "a169433d-4d8e-48ad-a4d7-52d79a9edb27"}, "x_range": {"type": "DataRange1d", "id": "784ebe3f-6fc9-4baf-a22c-1a90bf1b008d"}}, "subtype": "Figure"}, {"type": "PanTool", "id": "4c1ba654-7d13-423a-befe-7229399efcff", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "1b3a44f5-75f1-4d49-a7b1-23bdfcb834f8"}}}], "root_ids": ["1b3a44f5-75f1-4d49-a7b1-23bdfcb834f8"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "c6495f0b-2b43-4ef7-ae17-3fe339c492d4", "modelid": "1b3a44f5-75f1-4d49-a7b1-23bdfcb834f8", "elementid": "663b8c55-cd96-4c6b-9b20-ec84f7df401c"}];
          
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