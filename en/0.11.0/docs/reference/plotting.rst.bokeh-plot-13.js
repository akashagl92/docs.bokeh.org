
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
  };var element = document.getElementById("2aba1eab-3f9c-42d3-bbdd-54eabe89ae16");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2aba1eab-3f9c-42d3-bbdd-54eabe89ae16' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"f10017fe-9336-4166-b825-a9fb4534fcaf": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "DataRange1d", "id": "d3a4a736-374c-421c-9182-d5551bde7e08", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "4add172e-a276-4a19-af63-247c462b4e36", "attributes": {}}, {"type": "LinearAxis", "id": "196e8eae-d199-4c60-8b37-e694ff12eb12", "attributes": {"ticker": {"type": "BasicTicker", "id": "40dd72b1-6c35-468c-bfbb-fc3a3b74bb9a"}, "formatter": {"type": "BasicTickFormatter", "id": "4add172e-a276-4a19-af63-247c462b4e36"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a98d340b-a54f-47a5-9a0d-376d0330ad3e"}}}, {"type": "LinearAxis", "id": "f3ce53b3-66a4-4f5e-83d7-caca794aa98a", "attributes": {"ticker": {"type": "BasicTicker", "id": "b5e2dea7-58df-49eb-ab44-da0c6d7f2b9b"}, "formatter": {"type": "BasicTickFormatter", "id": "bc6dd18c-5e1e-4395-ad03-1108a363d208"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a98d340b-a54f-47a5-9a0d-376d0330ad3e"}}}, {"type": "ColumnDataSource", "id": "4b29e686-7270-44f4-abd1-f18a4a61ebff", "attributes": {"data": {"line_color": ["#43a2ca", "#a8ddb5"], "ys": [[1, 2, 1], [4, 5, 5, 4]], "xs": [[1, 2, 3], [4, 5, 6, 5]], "fill_color": ["#43a2ca", "#a8ddb5"]}, "column_names": ["ys", "xs", "line_color", "fill_color"], "callback": null}}, {"type": "BoxZoomTool", "id": "9caa5795-8999-4294-b7a1-6e82aeeb3df0", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "daa45239-f018-4de9-8dad-a9445099ecf1"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a98d340b-a54f-47a5-9a0d-376d0330ad3e"}}}, {"type": "DataRange1d", "id": "4f002089-a7bb-46e1-a121-0a23e71efe02", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "40dd72b1-6c35-468c-bfbb-fc3a3b74bb9a", "attributes": {}}, {"type": "PreviewSaveTool", "id": "2826afd9-dc34-4272-8442-690ff1485d43", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a98d340b-a54f-47a5-9a0d-376d0330ad3e"}}}, {"type": "Grid", "id": "87a46841-ab3a-4c6e-b9bd-362d5fe3d9b4", "attributes": {"ticker": {"type": "BasicTicker", "id": "40dd72b1-6c35-468c-bfbb-fc3a3b74bb9a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a98d340b-a54f-47a5-9a0d-376d0330ad3e"}}}, {"type": "BasicTickFormatter", "id": "bc6dd18c-5e1e-4395-ad03-1108a363d208", "attributes": {}}, {"type": "ToolEvents", "id": "97add088-e3cf-4783-bdef-47562afa1714", "attributes": {}}, {"type": "GlyphRenderer", "id": "c23973bf-bf35-4ce8-ac45-fa4cff7c5e67", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "4b29e686-7270-44f4-abd1-f18a4a61ebff"}, "nonselection_glyph": {"type": "Patches", "id": "94c876f2-fa6a-45f0-802b-85374c8458e6"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Patches", "id": "0008001c-4f39-41fd-8abd-1449c92eaa24"}}}, {"type": "ResetTool", "id": "7b0a450e-a65a-4921-a552-daebfcf6eef6", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a98d340b-a54f-47a5-9a0d-376d0330ad3e"}}}, {"type": "WheelZoomTool", "id": "2d4e8efe-8b95-416f-a6fe-d03c590f4bef", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a98d340b-a54f-47a5-9a0d-376d0330ad3e"}}}, {"type": "PanTool", "id": "a17cdf83-2c3f-4ea2-9fdf-7b60f439a6e3", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a98d340b-a54f-47a5-9a0d-376d0330ad3e"}}}, {"type": "Plot", "id": "a98d340b-a54f-47a5-9a0d-376d0330ad3e", "attributes": {"tools": [{"type": "PanTool", "id": "a17cdf83-2c3f-4ea2-9fdf-7b60f439a6e3"}, {"type": "WheelZoomTool", "id": "2d4e8efe-8b95-416f-a6fe-d03c590f4bef"}, {"type": "BoxZoomTool", "id": "9caa5795-8999-4294-b7a1-6e82aeeb3df0"}, {"type": "PreviewSaveTool", "id": "2826afd9-dc34-4272-8442-690ff1485d43"}, {"type": "ResizeTool", "id": "c81a76c7-a77d-440f-85de-bdfee39ec563"}, {"type": "ResetTool", "id": "7b0a450e-a65a-4921-a552-daebfcf6eef6"}, {"type": "HelpTool", "id": "04200e9e-f22c-4ed1-ba73-c20c36a48966"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "d3a4a736-374c-421c-9182-d5551bde7e08"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "196e8eae-d199-4c60-8b37-e694ff12eb12"}, {"type": "Grid", "id": "87a46841-ab3a-4c6e-b9bd-362d5fe3d9b4"}, {"type": "LinearAxis", "id": "f3ce53b3-66a4-4f5e-83d7-caca794aa98a"}, {"type": "Grid", "id": "ea6cd23b-8b8d-4765-b8eb-7f19adf047d2"}, {"type": "BoxAnnotation", "id": "daa45239-f018-4de9-8dad-a9445099ecf1"}, {"type": "GlyphRenderer", "id": "c23973bf-bf35-4ce8-ac45-fa4cff7c5e67"}], "left": [{"type": "LinearAxis", "id": "f3ce53b3-66a4-4f5e-83d7-caca794aa98a"}], "below": [{"type": "LinearAxis", "id": "196e8eae-d199-4c60-8b37-e694ff12eb12"}], "tool_events": {"type": "ToolEvents", "id": "97add088-e3cf-4783-bdef-47562afa1714"}, "x_range": {"type": "DataRange1d", "id": "4f002089-a7bb-46e1-a121-0a23e71efe02"}}, "subtype": "Figure"}, {"type": "Patches", "id": "94c876f2-fa6a-45f0-802b-85374c8458e6", "attributes": {"line_color": {"value": "#1f77b4"}, "xs": {"field": "xs"}, "ys": {"field": "ys"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "Grid", "id": "ea6cd23b-8b8d-4765-b8eb-7f19adf047d2", "attributes": {"ticker": {"type": "BasicTicker", "id": "b5e2dea7-58df-49eb-ab44-da0c6d7f2b9b"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "a98d340b-a54f-47a5-9a0d-376d0330ad3e"}}}, {"type": "HelpTool", "id": "04200e9e-f22c-4ed1-ba73-c20c36a48966", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a98d340b-a54f-47a5-9a0d-376d0330ad3e"}}}, {"type": "Patches", "id": "0008001c-4f39-41fd-8abd-1449c92eaa24", "attributes": {"line_color": {"field": "line_color"}, "ys": {"field": "ys"}, "xs": {"field": "xs"}, "fill_color": {"field": "fill_color"}}}, {"type": "ResizeTool", "id": "c81a76c7-a77d-440f-85de-bdfee39ec563", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a98d340b-a54f-47a5-9a0d-376d0330ad3e"}}}, {"type": "BoxAnnotation", "id": "daa45239-f018-4de9-8dad-a9445099ecf1", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "b5e2dea7-58df-49eb-ab44-da0c6d7f2b9b", "attributes": {}}], "root_ids": ["a98d340b-a54f-47a5-9a0d-376d0330ad3e"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "f10017fe-9336-4166-b825-a9fb4534fcaf", "modelid": "a98d340b-a54f-47a5-9a0d-376d0330ad3e", "elementid": "2aba1eab-3f9c-42d3-bbdd-54eabe89ae16"}];
          
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