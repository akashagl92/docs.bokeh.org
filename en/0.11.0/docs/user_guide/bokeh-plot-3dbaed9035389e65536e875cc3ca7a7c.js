
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
  };var element = document.getElementById("72fadeab-9de6-4648-bbf3-553d8f855fed");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '72fadeab-9de6-4648-bbf3-553d8f855fed' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"f0dd3e62-748f-496f-a6d9-097b5b230513": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "7d53794d-2488-4723-a196-6af6d9b4a727", "attributes": {"ticker": {"type": "BasicTicker", "id": "325d53f6-91ee-490d-9bd3-24e2e97c396c"}, "formatter": {"type": "BasicTickFormatter", "id": "087b7406-d627-46fa-952d-79ee0f0f85b0"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "6e88ddf6-a3a4-4d42-90ad-567dcb609b69"}}}, {"type": "ResizeTool", "id": "1a1d10ac-85a1-47f5-937d-8a9d19674e13", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6e88ddf6-a3a4-4d42-90ad-567dcb609b69"}}}, {"type": "GlyphRenderer", "id": "6e57d9ef-0fa0-4e78-b454-0ecad1f8ac86", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "7ea27cf4-9d22-4537-af24-1c7ae1b51913"}, "nonselection_glyph": {"type": "Circle", "id": "7ed76dc9-e472-4a7e-94bf-a9064a09e96d"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "a5bdb88c-fb47-4b5f-9cc0-9363e14b6c77"}}}, {"type": "DataRange1d", "id": "0467cfdf-cb40-4c3a-9b55-0363177b40d7", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "c0d70cfa-a9f7-4b63-b7b3-11f6480b2fc0", "attributes": {}}, {"type": "BoxZoomTool", "id": "0a2480c6-b71e-4347-b2e1-8ce75930faaa", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "0849219f-5621-46b7-8b1c-695b7db77934"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "6e88ddf6-a3a4-4d42-90ad-567dcb609b69"}}}, {"type": "Grid", "id": "c11a3122-56d0-45cd-a38e-e487c350f42b", "attributes": {"ticker": {"type": "BasicTicker", "id": "325d53f6-91ee-490d-9bd3-24e2e97c396c"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "6e88ddf6-a3a4-4d42-90ad-567dcb609b69"}}}, {"type": "DataRange1d", "id": "021f8566-92e7-41df-8237-52ee12514436", "attributes": {"callback": null}}, {"type": "Plot", "id": "6e88ddf6-a3a4-4d42-90ad-567dcb609b69", "attributes": {"y_range": {"type": "DataRange1d", "id": "0467cfdf-cb40-4c3a-9b55-0363177b40d7"}, "renderers": [{"type": "LinearAxis", "id": "425c073b-6cee-4387-856e-c77f3483022e"}, {"type": "Grid", "id": "aa67a3d7-88ad-43ce-a873-f2fe8af5272e"}, {"type": "LinearAxis", "id": "7d53794d-2488-4723-a196-6af6d9b4a727"}, {"type": "Grid", "id": "c11a3122-56d0-45cd-a38e-e487c350f42b"}, {"type": "BoxAnnotation", "id": "0849219f-5621-46b7-8b1c-695b7db77934"}, {"type": "GlyphRenderer", "id": "6e57d9ef-0fa0-4e78-b454-0ecad1f8ac86"}], "outline_line_alpha": {"value": 0.3}, "tools": [{"type": "PanTool", "id": "6c552158-5e1d-4a3e-9447-7397d7a8b34c"}, {"type": "WheelZoomTool", "id": "d2af42ca-f0cf-4e4a-9c6a-6f256862b3b5"}, {"type": "BoxZoomTool", "id": "0a2480c6-b71e-4347-b2e1-8ce75930faaa"}, {"type": "PreviewSaveTool", "id": "47ee8288-7a5a-4a34-8bec-a26dd15d9bf0"}, {"type": "ResizeTool", "id": "1a1d10ac-85a1-47f5-937d-8a9d19674e13"}, {"type": "ResetTool", "id": "9a534930-750e-429c-830c-a35431f0a5e0"}, {"type": "HelpTool", "id": "27d45864-782c-4ca3-a791-b9988e752615"}], "plot_width": 400, "outline_line_color": {"value": "navy"}, "left": [{"type": "LinearAxis", "id": "7d53794d-2488-4723-a196-6af6d9b4a727"}], "x_range": {"type": "DataRange1d", "id": "021f8566-92e7-41df-8237-52ee12514436"}, "outline_line_width": {"value": 7}, "plot_height": 400, "below": [{"type": "LinearAxis", "id": "425c073b-6cee-4387-856e-c77f3483022e"}], "tool_events": {"type": "ToolEvents", "id": "feaec495-5c33-4cc3-9ac7-b50f10b7fbda"}}, "subtype": "Figure"}, {"type": "ColumnDataSource", "id": "7ea27cf4-9d22-4537-af24-1c7ae1b51913", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "PanTool", "id": "6c552158-5e1d-4a3e-9447-7397d7a8b34c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6e88ddf6-a3a4-4d42-90ad-567dcb609b69"}}}, {"type": "BasicTicker", "id": "325d53f6-91ee-490d-9bd3-24e2e97c396c", "attributes": {}}, {"type": "Grid", "id": "aa67a3d7-88ad-43ce-a873-f2fe8af5272e", "attributes": {"ticker": {"type": "BasicTicker", "id": "c0d70cfa-a9f7-4b63-b7b3-11f6480b2fc0"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "6e88ddf6-a3a4-4d42-90ad-567dcb609b69"}}}, {"type": "BoxAnnotation", "id": "0849219f-5621-46b7-8b1c-695b7db77934", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "HelpTool", "id": "27d45864-782c-4ca3-a791-b9988e752615", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6e88ddf6-a3a4-4d42-90ad-567dcb609b69"}}}, {"type": "Circle", "id": "7ed76dc9-e472-4a7e-94bf-a9064a09e96d", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ToolEvents", "id": "feaec495-5c33-4cc3-9ac7-b50f10b7fbda", "attributes": {}}, {"type": "WheelZoomTool", "id": "d2af42ca-f0cf-4e4a-9c6a-6f256862b3b5", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6e88ddf6-a3a4-4d42-90ad-567dcb609b69"}}}, {"type": "BasicTickFormatter", "id": "a0d437f3-c0af-4fb2-b680-c88c4afce452", "attributes": {}}, {"type": "BasicTickFormatter", "id": "087b7406-d627-46fa-952d-79ee0f0f85b0", "attributes": {}}, {"type": "PreviewSaveTool", "id": "47ee8288-7a5a-4a34-8bec-a26dd15d9bf0", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6e88ddf6-a3a4-4d42-90ad-567dcb609b69"}}}, {"type": "ResetTool", "id": "9a534930-750e-429c-830c-a35431f0a5e0", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "6e88ddf6-a3a4-4d42-90ad-567dcb609b69"}}}, {"type": "LinearAxis", "id": "425c073b-6cee-4387-856e-c77f3483022e", "attributes": {"ticker": {"type": "BasicTicker", "id": "c0d70cfa-a9f7-4b63-b7b3-11f6480b2fc0"}, "formatter": {"type": "BasicTickFormatter", "id": "a0d437f3-c0af-4fb2-b680-c88c4afce452"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "6e88ddf6-a3a4-4d42-90ad-567dcb609b69"}}}, {"type": "Circle", "id": "a5bdb88c-fb47-4b5f-9cc0-9363e14b6c77", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}], "root_ids": ["6e88ddf6-a3a4-4d42-90ad-567dcb609b69"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "f0dd3e62-748f-496f-a6d9-097b5b230513", "modelid": "6e88ddf6-a3a4-4d42-90ad-567dcb609b69", "elementid": "72fadeab-9de6-4648-bbf3-553d8f855fed"}];
          
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