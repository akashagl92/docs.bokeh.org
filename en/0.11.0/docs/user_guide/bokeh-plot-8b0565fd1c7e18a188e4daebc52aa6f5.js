
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
  };var element = document.getElementById("c6e1aadd-75c2-44ca-891d-fb5cb689e8de");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c6e1aadd-75c2-44ca-891d-fb5cb689e8de' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"e872fdb1-8fbf-4b79-a2fe-a0b3df9d8904": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Plot", "id": "64f17540-d601-47f0-a3ea-f5afe385473f", "attributes": {"tools": [{"type": "PanTool", "id": "93a5d62d-ec07-4136-b01b-4e1c6ffdc70d"}, {"type": "WheelZoomTool", "id": "cf098d75-fb1e-422a-97ee-002bbde03fc4"}, {"type": "BoxZoomTool", "id": "4b04abd9-d0ed-4bf1-9633-9d99e8cdf927"}, {"type": "PreviewSaveTool", "id": "73cc56de-6488-4124-81ae-79e824e0c486"}, {"type": "ResizeTool", "id": "47508443-6364-45e5-93f6-db6656d45260"}, {"type": "ResetTool", "id": "a0c6fc53-2b37-4c5e-b50e-999d24231659"}, {"type": "HelpTool", "id": "519d9ffb-fa05-47ae-a4bc-4141bf9ef91f"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "2d10c44e-0d59-4f7e-8101-262a059a231d"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "9435abbc-6469-4e16-95b8-be5ce1981181"}, {"type": "Grid", "id": "f3d36802-7fa1-43c5-9ab0-4dc72719ea41"}, {"type": "LinearAxis", "id": "e86ca816-2c9f-4628-ba6c-dbfce9642892"}, {"type": "Grid", "id": "e406685d-5343-42a5-bc60-3250fdac3894"}, {"type": "BoxAnnotation", "id": "cb97eb9e-9019-42ff-bb59-62f6db8d4b50"}, {"type": "GlyphRenderer", "id": "889276aa-fc40-428f-ba9a-3ca65826eb67"}], "left": [{"type": "LinearAxis", "id": "e86ca816-2c9f-4628-ba6c-dbfce9642892"}], "below": [{"type": "LinearAxis", "id": "9435abbc-6469-4e16-95b8-be5ce1981181"}], "tool_events": {"type": "ToolEvents", "id": "82fb80c2-16e5-4e38-8ab6-78f28ebd7d40"}, "x_range": {"type": "DataRange1d", "id": "135ce2ee-ce51-4d79-a03f-ee1357949748"}}, "subtype": "Figure"}, {"type": "ColumnDataSource", "id": "446feb17-af40-4763-9bd2-aef5b8c32b68", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["y", "x"], "callback": null}}, {"type": "LinearAxis", "id": "9435abbc-6469-4e16-95b8-be5ce1981181", "attributes": {"ticker": {"type": "BasicTicker", "id": "21bfd887-42a9-49fd-91e2-f4053b526e84"}, "formatter": {"type": "BasicTickFormatter", "id": "6a101a6b-24df-43e4-882e-681c7afe4113"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "64f17540-d601-47f0-a3ea-f5afe385473f"}}}, {"type": "HelpTool", "id": "519d9ffb-fa05-47ae-a4bc-4141bf9ef91f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "64f17540-d601-47f0-a3ea-f5afe385473f"}}}, {"type": "Grid", "id": "f3d36802-7fa1-43c5-9ab0-4dc72719ea41", "attributes": {"ticker": {"type": "BasicTicker", "id": "21bfd887-42a9-49fd-91e2-f4053b526e84"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "64f17540-d601-47f0-a3ea-f5afe385473f"}}}, {"type": "ResizeTool", "id": "47508443-6364-45e5-93f6-db6656d45260", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "64f17540-d601-47f0-a3ea-f5afe385473f"}}}, {"type": "Grid", "id": "e406685d-5343-42a5-bc60-3250fdac3894", "attributes": {"ticker": {"type": "BasicTicker", "id": "801bdd69-289c-4fbb-8f26-fb312cd340fa"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "64f17540-d601-47f0-a3ea-f5afe385473f"}}}, {"type": "BasicTickFormatter", "id": "6a101a6b-24df-43e4-882e-681c7afe4113", "attributes": {}}, {"type": "BoxZoomTool", "id": "4b04abd9-d0ed-4bf1-9633-9d99e8cdf927", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "cb97eb9e-9019-42ff-bb59-62f6db8d4b50"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "64f17540-d601-47f0-a3ea-f5afe385473f"}}}, {"type": "PreviewSaveTool", "id": "73cc56de-6488-4124-81ae-79e824e0c486", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "64f17540-d601-47f0-a3ea-f5afe385473f"}}}, {"type": "DataRange1d", "id": "2d10c44e-0d59-4f7e-8101-262a059a231d", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "21bfd887-42a9-49fd-91e2-f4053b526e84", "attributes": {}}, {"type": "BasicTickFormatter", "id": "9a66ed3b-1fb9-4c43-908a-aa52656e1582", "attributes": {}}, {"type": "GlyphRenderer", "id": "889276aa-fc40-428f-ba9a-3ca65826eb67", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "446feb17-af40-4763-9bd2-aef5b8c32b68"}, "nonselection_glyph": {"type": "Rect", "id": "9900c7dc-2a5b-4344-b64a-c078740936fd"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "e75bc7a3-108a-4a98-ba58-a11ad9c1ef99"}}}, {"type": "DataRange1d", "id": "135ce2ee-ce51-4d79-a03f-ee1357949748", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "e86ca816-2c9f-4628-ba6c-dbfce9642892", "attributes": {"ticker": {"type": "BasicTicker", "id": "801bdd69-289c-4fbb-8f26-fb312cd340fa"}, "formatter": {"type": "BasicTickFormatter", "id": "9a66ed3b-1fb9-4c43-908a-aa52656e1582"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "64f17540-d601-47f0-a3ea-f5afe385473f"}}}, {"type": "WheelZoomTool", "id": "cf098d75-fb1e-422a-97ee-002bbde03fc4", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "64f17540-d601-47f0-a3ea-f5afe385473f"}}}, {"type": "ResetTool", "id": "a0c6fc53-2b37-4c5e-b50e-999d24231659", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "64f17540-d601-47f0-a3ea-f5afe385473f"}}}, {"type": "Rect", "id": "e75bc7a3-108a-4a98-ba58-a11ad9c1ef99", "attributes": {"line_color": {"value": "#CAB2D6"}, "width": {"value": 0.2, "units": "data"}, "y": {"field": "y"}, "angle": {"value": 1.0471975511965976, "units": "rad"}, "height": {"value": 40, "units": "screen"}, "x": {"field": "x"}, "fill_color": {"value": "#CAB2D6"}}}, {"type": "Rect", "id": "9900c7dc-2a5b-4344-b64a-c078740936fd", "attributes": {"line_color": {"value": "#1f77b4"}, "width": {"value": 0.2, "units": "data"}, "y": {"field": "y"}, "angle": {"value": 1.0471975511965976, "units": "rad"}, "height": {"value": 40, "units": "screen"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "BoxAnnotation", "id": "cb97eb9e-9019-42ff-bb59-62f6db8d4b50", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "PanTool", "id": "93a5d62d-ec07-4136-b01b-4e1c6ffdc70d", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "64f17540-d601-47f0-a3ea-f5afe385473f"}}}, {"type": "ToolEvents", "id": "82fb80c2-16e5-4e38-8ab6-78f28ebd7d40", "attributes": {}}, {"type": "BasicTicker", "id": "801bdd69-289c-4fbb-8f26-fb312cd340fa", "attributes": {}}], "root_ids": ["64f17540-d601-47f0-a3ea-f5afe385473f"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "e872fdb1-8fbf-4b79-a2fe-a0b3df9d8904", "modelid": "64f17540-d601-47f0-a3ea-f5afe385473f", "elementid": "c6e1aadd-75c2-44ca-891d-fb5cb689e8de"}];
          
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