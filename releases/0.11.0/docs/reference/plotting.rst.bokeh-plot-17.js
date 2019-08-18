
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
  };var element = document.getElementById("82a0ac5e-5c71-46be-8105-4dc9c9f76f21");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '82a0ac5e-5c71-46be-8105-4dc9c9f76f21' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"ec3ad73f-7eb4-4a34-b556-e6538a4deaad": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Segment", "id": "0b4d0555-f3a6-4e04-bbea-ff3b769d8a2a", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 3}, "x1": {"field": "x1"}, "y0": {"field": "y0"}, "y1": {"field": "y1"}, "line_alpha": {"value": 0.1}, "x0": {"field": "x0"}}}, {"type": "ResetTool", "id": "f48b49f8-cbc4-40d2-aa0b-339aaa5f9212", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "825f471d-d661-4f90-90d2-ceaa422cd7c2"}}}, {"type": "PreviewSaveTool", "id": "c655b9dd-29b2-4296-b101-dd7464e79fc5", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "825f471d-d661-4f90-90d2-ceaa422cd7c2"}}}, {"type": "ToolEvents", "id": "309fe4ef-370d-4991-937f-e4e3e963b7b4", "attributes": {}}, {"type": "ResizeTool", "id": "f72f24f3-88fa-4207-a0c0-e907f1256bee", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "825f471d-d661-4f90-90d2-ceaa422cd7c2"}}}, {"type": "LinearAxis", "id": "dff89aae-0049-4bf8-ade3-23f4ad7f0adc", "attributes": {"ticker": {"type": "BasicTicker", "id": "c421471f-9c6b-4f5c-9a98-c644a4790172"}, "formatter": {"type": "BasicTickFormatter", "id": "7a229ee0-05b6-48cc-9470-e89ec3b64850"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "825f471d-d661-4f90-90d2-ceaa422cd7c2"}}}, {"type": "GlyphRenderer", "id": "cbd28205-602b-4712-99e0-f032fe8b86ba", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "8da4d27e-fc68-4a84-9796-cb8f0e63f75d"}, "nonselection_glyph": {"type": "Segment", "id": "0b4d0555-f3a6-4e04-bbea-ff3b769d8a2a"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Segment", "id": "b0b216a4-fec2-4f8c-aaff-a7e68fa80381"}}}, {"type": "ColumnDataSource", "id": "8da4d27e-fc68-4a84-9796-cb8f0e63f75d", "attributes": {"data": {"x1": [1, 2, 3], "y0": [1, 2, 3], "x0": [1, 2, 3], "y1": [1.2, 2.5, 3.7]}, "column_names": ["x1", "x0", "y1", "y0"], "callback": null}}, {"type": "BasicTicker", "id": "885bdcef-1232-4c90-aa89-09c181b79a01", "attributes": {}}, {"type": "BasicTickFormatter", "id": "38f6f73b-1825-4a8f-a659-b478a89caac2", "attributes": {}}, {"type": "Plot", "id": "825f471d-d661-4f90-90d2-ceaa422cd7c2", "attributes": {"tools": [{"type": "PanTool", "id": "21aa9da1-40b4-43f9-9c68-401580e45930"}, {"type": "WheelZoomTool", "id": "dbe86710-c99a-4e43-9b0b-8df3c329aa0a"}, {"type": "BoxZoomTool", "id": "f4a8cbf4-893d-4650-8620-32d5f41d0861"}, {"type": "PreviewSaveTool", "id": "c655b9dd-29b2-4296-b101-dd7464e79fc5"}, {"type": "ResizeTool", "id": "f72f24f3-88fa-4207-a0c0-e907f1256bee"}, {"type": "ResetTool", "id": "f48b49f8-cbc4-40d2-aa0b-339aaa5f9212"}, {"type": "HelpTool", "id": "a4a4cc25-c0c9-4cd9-82e3-2394ad90a62b"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "0ab1050c-2e74-4e9b-b12b-8beded4d9d59"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "dff89aae-0049-4bf8-ade3-23f4ad7f0adc"}, {"type": "Grid", "id": "6df7e01d-6e8b-40ea-9db2-0856abb1e137"}, {"type": "LinearAxis", "id": "75422f79-85e1-46c3-ae57-4fd98b2ad7d3"}, {"type": "Grid", "id": "edadc072-6b5f-41ac-b120-84348b428f6d"}, {"type": "BoxAnnotation", "id": "1d56252d-0979-440a-a97a-bee062ef8b76"}, {"type": "GlyphRenderer", "id": "cbd28205-602b-4712-99e0-f032fe8b86ba"}], "left": [{"type": "LinearAxis", "id": "75422f79-85e1-46c3-ae57-4fd98b2ad7d3"}], "below": [{"type": "LinearAxis", "id": "dff89aae-0049-4bf8-ade3-23f4ad7f0adc"}], "tool_events": {"type": "ToolEvents", "id": "309fe4ef-370d-4991-937f-e4e3e963b7b4"}, "x_range": {"type": "DataRange1d", "id": "3a9a235d-9df0-4b1c-9072-475c9f0922a1"}}, "subtype": "Figure"}, {"type": "WheelZoomTool", "id": "dbe86710-c99a-4e43-9b0b-8df3c329aa0a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "825f471d-d661-4f90-90d2-ceaa422cd7c2"}}}, {"type": "DataRange1d", "id": "3a9a235d-9df0-4b1c-9072-475c9f0922a1", "attributes": {"callback": null}}, {"type": "Grid", "id": "6df7e01d-6e8b-40ea-9db2-0856abb1e137", "attributes": {"ticker": {"type": "BasicTicker", "id": "c421471f-9c6b-4f5c-9a98-c644a4790172"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "825f471d-d661-4f90-90d2-ceaa422cd7c2"}}}, {"type": "DataRange1d", "id": "0ab1050c-2e74-4e9b-b12b-8beded4d9d59", "attributes": {"callback": null}}, {"type": "BoxZoomTool", "id": "f4a8cbf4-893d-4650-8620-32d5f41d0861", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "1d56252d-0979-440a-a97a-bee062ef8b76"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "825f471d-d661-4f90-90d2-ceaa422cd7c2"}}}, {"type": "LinearAxis", "id": "75422f79-85e1-46c3-ae57-4fd98b2ad7d3", "attributes": {"ticker": {"type": "BasicTicker", "id": "885bdcef-1232-4c90-aa89-09c181b79a01"}, "formatter": {"type": "BasicTickFormatter", "id": "38f6f73b-1825-4a8f-a659-b478a89caac2"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "825f471d-d661-4f90-90d2-ceaa422cd7c2"}}}, {"type": "BasicTicker", "id": "c421471f-9c6b-4f5c-9a98-c644a4790172", "attributes": {}}, {"type": "HelpTool", "id": "a4a4cc25-c0c9-4cd9-82e3-2394ad90a62b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "825f471d-d661-4f90-90d2-ceaa422cd7c2"}}}, {"type": "BasicTickFormatter", "id": "7a229ee0-05b6-48cc-9470-e89ec3b64850", "attributes": {}}, {"type": "BoxAnnotation", "id": "1d56252d-0979-440a-a97a-bee062ef8b76", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Segment", "id": "b0b216a4-fec2-4f8c-aaff-a7e68fa80381", "attributes": {"line_color": {"value": "#F4A582"}, "line_width": {"value": 3}, "x1": {"field": "x1"}, "x0": {"field": "x0"}, "y1": {"field": "y1"}, "y0": {"field": "y0"}}}, {"type": "PanTool", "id": "21aa9da1-40b4-43f9-9c68-401580e45930", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "825f471d-d661-4f90-90d2-ceaa422cd7c2"}}}, {"type": "Grid", "id": "edadc072-6b5f-41ac-b120-84348b428f6d", "attributes": {"ticker": {"type": "BasicTicker", "id": "885bdcef-1232-4c90-aa89-09c181b79a01"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "825f471d-d661-4f90-90d2-ceaa422cd7c2"}}}], "root_ids": ["825f471d-d661-4f90-90d2-ceaa422cd7c2"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "ec3ad73f-7eb4-4a34-b556-e6538a4deaad", "modelid": "825f471d-d661-4f90-90d2-ceaa422cd7c2", "elementid": "82a0ac5e-5c71-46be-8105-4dc9c9f76f21"}];
          
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