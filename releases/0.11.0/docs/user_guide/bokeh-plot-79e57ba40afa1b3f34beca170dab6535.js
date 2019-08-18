
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
  };var element = document.getElementById("6d353c4e-b195-48bc-81d3-5249a3989a22");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6d353c4e-b195-48bc-81d3-5249a3989a22' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"246c414e-4712-4ba2-b23d-22549f6125a3": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ResizeTool", "id": "8fd3a46c-ed2f-406b-b6b5-6bb42cd1c5bd", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e7c78547-1492-4783-b917-20e34bbf903b"}}}, {"type": "DataRange1d", "id": "155914bb-d848-4a14-a2ae-0eaf6a8f9178", "attributes": {"callback": null}}, {"type": "Ray", "id": "3fb5f7f8-ef0d-4326-ab40-82c5317d7a0c", "attributes": {"line_color": {"value": "#FB8072"}, "line_width": {"value": 2}, "y": {"field": "y"}, "angle": {"units": "deg", "field": "angle"}, "x": {"field": "x"}, "length": {"value": 45, "units": "data"}}}, {"type": "BoxZoomTool", "id": "1cddbe4b-1b0c-45f4-9ec2-5af501531c87", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "8e7b9a26-8da9-4024-8894-7d76f21fe459"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e7c78547-1492-4783-b917-20e34bbf903b"}}}, {"type": "DataRange1d", "id": "3539baac-efeb-414c-8967-3e9e21f4f7a7", "attributes": {"callback": null}}, {"type": "WheelZoomTool", "id": "2a533475-2935-4fb7-8626-ed276f529f54", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e7c78547-1492-4783-b917-20e34bbf903b"}}}, {"type": "PreviewSaveTool", "id": "195778df-8f31-4cfc-92b3-3b2671075533", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e7c78547-1492-4783-b917-20e34bbf903b"}}}, {"type": "BasicTicker", "id": "c741650f-e387-4216-90e8-079608cb3b2c", "attributes": {}}, {"type": "BasicTicker", "id": "9fa3c89c-41dd-4445-bc3a-4740fe84a8b7", "attributes": {}}, {"type": "HelpTool", "id": "259425a8-4699-4f89-8e04-3a8e86e2737c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e7c78547-1492-4783-b917-20e34bbf903b"}}}, {"type": "Plot", "id": "e7c78547-1492-4783-b917-20e34bbf903b", "attributes": {"tools": [{"type": "PanTool", "id": "1a845a4a-d9c3-414a-a770-c8d1294ab4c3"}, {"type": "WheelZoomTool", "id": "2a533475-2935-4fb7-8626-ed276f529f54"}, {"type": "BoxZoomTool", "id": "1cddbe4b-1b0c-45f4-9ec2-5af501531c87"}, {"type": "PreviewSaveTool", "id": "195778df-8f31-4cfc-92b3-3b2671075533"}, {"type": "ResizeTool", "id": "8fd3a46c-ed2f-406b-b6b5-6bb42cd1c5bd"}, {"type": "ResetTool", "id": "cc598296-4940-421e-ab24-135345c340e3"}, {"type": "HelpTool", "id": "259425a8-4699-4f89-8e04-3a8e86e2737c"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "3539baac-efeb-414c-8967-3e9e21f4f7a7"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "836ce804-461b-47af-96bb-4b04e0c7542a"}, {"type": "Grid", "id": "e69f660b-3e03-4b23-a0c2-bdec05e9b221"}, {"type": "LinearAxis", "id": "c4923e7e-3620-4d38-a1ba-4258db89ff5e"}, {"type": "Grid", "id": "b79f570d-8f14-4b81-9733-6c06222199d3"}, {"type": "BoxAnnotation", "id": "8e7b9a26-8da9-4024-8894-7d76f21fe459"}, {"type": "GlyphRenderer", "id": "777e14bd-fc12-456e-be86-845db70829c3"}], "left": [{"type": "LinearAxis", "id": "c4923e7e-3620-4d38-a1ba-4258db89ff5e"}], "below": [{"type": "LinearAxis", "id": "836ce804-461b-47af-96bb-4b04e0c7542a"}], "tool_events": {"type": "ToolEvents", "id": "8ef0d2be-206b-43f2-9866-1a7a9c4fa47a"}, "x_range": {"type": "DataRange1d", "id": "155914bb-d848-4a14-a2ae-0eaf6a8f9178"}}, "subtype": "Figure"}, {"type": "LinearAxis", "id": "c4923e7e-3620-4d38-a1ba-4258db89ff5e", "attributes": {"ticker": {"type": "BasicTicker", "id": "c741650f-e387-4216-90e8-079608cb3b2c"}, "formatter": {"type": "BasicTickFormatter", "id": "5d8250ea-8a2f-4818-81f6-ec53ee78198b"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e7c78547-1492-4783-b917-20e34bbf903b"}}}, {"type": "BasicTickFormatter", "id": "8539725a-eacb-4ba5-9e9e-3f0f7c82db3f", "attributes": {}}, {"type": "LinearAxis", "id": "836ce804-461b-47af-96bb-4b04e0c7542a", "attributes": {"ticker": {"type": "BasicTicker", "id": "9fa3c89c-41dd-4445-bc3a-4740fe84a8b7"}, "formatter": {"type": "BasicTickFormatter", "id": "8539725a-eacb-4ba5-9e9e-3f0f7c82db3f"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e7c78547-1492-4783-b917-20e34bbf903b"}}}, {"type": "Grid", "id": "e69f660b-3e03-4b23-a0c2-bdec05e9b221", "attributes": {"ticker": {"type": "BasicTicker", "id": "9fa3c89c-41dd-4445-bc3a-4740fe84a8b7"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e7c78547-1492-4783-b917-20e34bbf903b"}}}, {"type": "ResetTool", "id": "cc598296-4940-421e-ab24-135345c340e3", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e7c78547-1492-4783-b917-20e34bbf903b"}}}, {"type": "BoxAnnotation", "id": "8e7b9a26-8da9-4024-8894-7d76f21fe459", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "GlyphRenderer", "id": "777e14bd-fc12-456e-be86-845db70829c3", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "d94cc2cc-cc46-49de-83ff-c6800fe6ec22"}, "nonselection_glyph": {"type": "Ray", "id": "42658c76-7f37-42a8-88ea-39f88658dad7"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Ray", "id": "3fb5f7f8-ef0d-4326-ab40-82c5317d7a0c"}}}, {"type": "Grid", "id": "b79f570d-8f14-4b81-9733-6c06222199d3", "attributes": {"ticker": {"type": "BasicTicker", "id": "c741650f-e387-4216-90e8-079608cb3b2c"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "e7c78547-1492-4783-b917-20e34bbf903b"}}}, {"type": "Ray", "id": "42658c76-7f37-42a8-88ea-39f88658dad7", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "y": {"field": "y"}, "angle": {"units": "deg", "field": "angle"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "length": {"value": 45, "units": "data"}}}, {"type": "BasicTickFormatter", "id": "5d8250ea-8a2f-4818-81f6-ec53ee78198b", "attributes": {}}, {"type": "PanTool", "id": "1a845a4a-d9c3-414a-a770-c8d1294ab4c3", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e7c78547-1492-4783-b917-20e34bbf903b"}}}, {"type": "ToolEvents", "id": "8ef0d2be-206b-43f2-9866-1a7a9c4fa47a", "attributes": {}}, {"type": "ColumnDataSource", "id": "d94cc2cc-cc46-49de-83ff-c6800fe6ec22", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3], "angle": [30, 45, 60]}, "column_names": ["y", "angle", "x"], "callback": null}}], "root_ids": ["e7c78547-1492-4783-b917-20e34bbf903b"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "246c414e-4712-4ba2-b23d-22549f6125a3", "modelid": "e7c78547-1492-4783-b917-20e34bbf903b", "elementid": "6d353c4e-b195-48bc-81d3-5249a3989a22"}];
          
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