
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
  };var element = document.getElementById("a53826df-29a5-4a79-b11b-46aeaa594627");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a53826df-29a5-4a79-b11b-46aeaa594627' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"c2343ce3-7d47-4618-839b-8783bb2b2713": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "GlyphRenderer", "id": "4ac28601-5876-4af0-b162-93bd08374334", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "6bbd663b-b564-4da9-83fb-25015bb141ea"}, "nonselection_glyph": {"type": "Circle", "id": "12f8e91a-e027-4301-b9df-d9ebba9cc70b"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "0dc0a536-89ba-44b0-ba79-7957ce830712"}}}, {"type": "Plot", "id": "32c425c7-acc3-49be-bd0e-f1bc7540e839", "attributes": {"tools": [{"type": "PanTool", "id": "c158734b-0a2d-49e6-8825-aaa502263dd5"}, {"type": "WheelZoomTool", "id": "93b58265-f6d2-4a3f-9a0e-8b375b63f62a"}, {"type": "BoxZoomTool", "id": "7b04fc05-cab3-4ede-827a-1580ec422439"}, {"type": "PreviewSaveTool", "id": "2f91be6e-b584-4989-9322-fb55b9b6c301"}, {"type": "ResizeTool", "id": "3d159c97-853c-4613-a95e-23c57fe9e770"}, {"type": "ResetTool", "id": "1da33c95-535d-43d3-bcf0-a7ad4c01413d"}, {"type": "HelpTool", "id": "d4a0b828-8ddd-4434-a7ae-a65f5974d195"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "1205a813-eaf0-4a41-86fb-94c41f3f7e60"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "e2009c99-a3c4-4710-993d-965c8603863a"}, {"type": "Grid", "id": "b701eb37-0cfd-437f-a6b3-45b8dd248506"}, {"type": "LinearAxis", "id": "e0e57163-486d-4461-b843-7d46a181a604"}, {"type": "Grid", "id": "be65e90d-bc3a-4801-8875-84cac7b53ce9"}, {"type": "BoxAnnotation", "id": "1ffb0ab7-4ae6-4c30-82c3-3268b1166ed1"}, {"type": "GlyphRenderer", "id": "4ac28601-5876-4af0-b162-93bd08374334"}], "left": [{"type": "LinearAxis", "id": "e0e57163-486d-4461-b843-7d46a181a604"}], "below": [{"type": "LinearAxis", "id": "e2009c99-a3c4-4710-993d-965c8603863a"}], "tool_events": {"type": "ToolEvents", "id": "5dcf438b-682e-4f3a-9e93-3717869862a8"}, "x_range": {"type": "DataRange1d", "id": "cac27970-50ef-42a2-98d8-bfe0ed5d3d93"}}, "subtype": "Figure"}, {"type": "PanTool", "id": "c158734b-0a2d-49e6-8825-aaa502263dd5", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "32c425c7-acc3-49be-bd0e-f1bc7540e839"}}}, {"type": "DataRange1d", "id": "1205a813-eaf0-4a41-86fb-94c41f3f7e60", "attributes": {"callback": null}}, {"type": "Circle", "id": "0dc0a536-89ba-44b0-ba79-7957ce830712", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "BasicTicker", "id": "fb3572f1-cc53-4e3d-87d8-2eecd2acda8f", "attributes": {}}, {"type": "ResizeTool", "id": "3d159c97-853c-4613-a95e-23c57fe9e770", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "32c425c7-acc3-49be-bd0e-f1bc7540e839"}}}, {"type": "DataRange1d", "id": "cac27970-50ef-42a2-98d8-bfe0ed5d3d93", "attributes": {"callback": null}}, {"type": "HelpTool", "id": "d4a0b828-8ddd-4434-a7ae-a65f5974d195", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "32c425c7-acc3-49be-bd0e-f1bc7540e839"}}}, {"type": "ResetTool", "id": "1da33c95-535d-43d3-bcf0-a7ad4c01413d", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "32c425c7-acc3-49be-bd0e-f1bc7540e839"}}}, {"type": "BasicTicker", "id": "61c59879-3be3-4dd8-b6eb-117faf32e3b9", "attributes": {}}, {"type": "ToolEvents", "id": "5dcf438b-682e-4f3a-9e93-3717869862a8", "attributes": {}}, {"type": "BoxZoomTool", "id": "7b04fc05-cab3-4ede-827a-1580ec422439", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "1ffb0ab7-4ae6-4c30-82c3-3268b1166ed1"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "32c425c7-acc3-49be-bd0e-f1bc7540e839"}}}, {"type": "BasicTickFormatter", "id": "31fb30ed-2450-49e4-94cd-0e566cb79dbe", "attributes": {}}, {"type": "BasicTickFormatter", "id": "d5ebaace-a293-4032-ad72-b4d3af35ef31", "attributes": {}}, {"type": "LinearAxis", "id": "e0e57163-486d-4461-b843-7d46a181a604", "attributes": {"ticker": {"type": "BasicTicker", "id": "61c59879-3be3-4dd8-b6eb-117faf32e3b9"}, "formatter": {"type": "BasicTickFormatter", "id": "d5ebaace-a293-4032-ad72-b4d3af35ef31"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "32c425c7-acc3-49be-bd0e-f1bc7540e839"}}}, {"type": "Grid", "id": "be65e90d-bc3a-4801-8875-84cac7b53ce9", "attributes": {"band_fill_color": {"value": "navy"}, "band_fill_alpha": {"value": 0.1}, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "61c59879-3be3-4dd8-b6eb-117faf32e3b9"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "32c425c7-acc3-49be-bd0e-f1bc7540e839"}}}, {"type": "BoxAnnotation", "id": "1ffb0ab7-4ae6-4c30-82c3-3268b1166ed1", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Circle", "id": "12f8e91a-e027-4301-b9df-d9ebba9cc70b", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ColumnDataSource", "id": "6bbd663b-b564-4da9-83fb-25015bb141ea", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "LinearAxis", "id": "e2009c99-a3c4-4710-993d-965c8603863a", "attributes": {"ticker": {"type": "BasicTicker", "id": "fb3572f1-cc53-4e3d-87d8-2eecd2acda8f"}, "formatter": {"type": "BasicTickFormatter", "id": "31fb30ed-2450-49e4-94cd-0e566cb79dbe"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "32c425c7-acc3-49be-bd0e-f1bc7540e839"}}}, {"type": "PreviewSaveTool", "id": "2f91be6e-b584-4989-9322-fb55b9b6c301", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "32c425c7-acc3-49be-bd0e-f1bc7540e839"}}}, {"type": "Grid", "id": "b701eb37-0cfd-437f-a6b3-45b8dd248506", "attributes": {"ticker": {"type": "BasicTicker", "id": "fb3572f1-cc53-4e3d-87d8-2eecd2acda8f"}, "grid_line_color": {"value": null}, "plot": {"type": "Plot", "subtype": "Figure", "id": "32c425c7-acc3-49be-bd0e-f1bc7540e839"}}}, {"type": "WheelZoomTool", "id": "93b58265-f6d2-4a3f-9a0e-8b375b63f62a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "32c425c7-acc3-49be-bd0e-f1bc7540e839"}}}], "root_ids": ["32c425c7-acc3-49be-bd0e-f1bc7540e839"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "c2343ce3-7d47-4618-839b-8783bb2b2713", "modelid": "32c425c7-acc3-49be-bd0e-f1bc7540e839", "elementid": "a53826df-29a5-4a79-b11b-46aeaa594627"}];
          
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