
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
  };var element = document.getElementById("ce2e53c6-fe5f-47ff-a8e0-39293c4252f7");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ce2e53c6-fe5f-47ff-a8e0-39293c4252f7' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"2c590bce-50a5-4a82-8b5c-338142090edb": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "DataRange1d", "id": "6b79c167-d074-4870-9d39-ba5ed7a37ecc", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "93c8396c-8831-4288-b2e9-14330f9c71e9", "attributes": {}}, {"type": "HelpTool", "id": "9cfd38ba-1f48-4027-bf4a-161285446576", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "0c9eb3cf-1abf-465e-8faf-66812af7f211"}}}, {"type": "ResizeTool", "id": "cd0eb113-68b2-4f0d-8612-91c482bd1ab9", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "0c9eb3cf-1abf-465e-8faf-66812af7f211"}}}, {"type": "PanTool", "id": "21bb8f9b-ba76-4058-9f95-f77f894087ad", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "0c9eb3cf-1abf-465e-8faf-66812af7f211"}}}, {"type": "WheelZoomTool", "id": "95528f08-b4d5-44e0-ba68-39f80dcee891", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "0c9eb3cf-1abf-465e-8faf-66812af7f211"}}}, {"type": "ResetTool", "id": "f47dfa05-b3eb-4fb3-9e07-690b889e77cb", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "0c9eb3cf-1abf-465e-8faf-66812af7f211"}}}, {"type": "BasicTickFormatter", "id": "428acff7-d637-444a-adaf-484bd52ac5f6", "attributes": {}}, {"type": "LinearAxis", "id": "fb448bc8-f735-4103-b689-0af21a9bf6f1", "attributes": {"ticker": {"type": "BasicTicker", "id": "93c8396c-8831-4288-b2e9-14330f9c71e9"}, "formatter": {"type": "BasicTickFormatter", "id": "b8b68eb1-73ed-47f9-92a0-b176097a9bf6"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "0c9eb3cf-1abf-465e-8faf-66812af7f211"}}}, {"type": "BoxAnnotation", "id": "001dd538-e7a5-476d-98a5-89328876a1a1", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Grid", "id": "f69ffc04-1ed7-44c8-ad31-6bcef8b94e6d", "attributes": {"ticker": {"type": "BasicTicker", "id": "7a0c95df-918c-413f-b0a4-03cbc4ec0142"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "0c9eb3cf-1abf-465e-8faf-66812af7f211"}}}, {"type": "PreviewSaveTool", "id": "11d3c15c-7ab5-43ed-9932-21edd2d1ba70", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "0c9eb3cf-1abf-465e-8faf-66812af7f211"}}}, {"type": "BasicTickFormatter", "id": "b8b68eb1-73ed-47f9-92a0-b176097a9bf6", "attributes": {}}, {"type": "Grid", "id": "c312c574-e33f-4a98-a7ce-25db51fb6a24", "attributes": {"ticker": {"type": "BasicTicker", "id": "93c8396c-8831-4288-b2e9-14330f9c71e9"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "0c9eb3cf-1abf-465e-8faf-66812af7f211"}}}, {"type": "GlyphRenderer", "id": "9bc32977-b8d3-4238-8f9f-0aa0456bbff4", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "91f6aca1-5c03-41cf-8477-9fabeec5e20f"}, "nonselection_glyph": {"type": "SquareCross", "id": "8c0abd84-2923-460c-9f46-6c4c1ee1fe1b"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "SquareCross", "id": "7fa9d9c0-8fcb-46cd-8e91-8b1db0ddfbd8"}}}, {"type": "BasicTicker", "id": "7a0c95df-918c-413f-b0a4-03cbc4ec0142", "attributes": {}}, {"type": "DataRange1d", "id": "7b3f41bc-3c24-4fb2-a8e0-29f33cc003dd", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "e84cf7a7-bec8-44e1-abf6-9aa11b2c0d1e", "attributes": {"ticker": {"type": "BasicTicker", "id": "7a0c95df-918c-413f-b0a4-03cbc4ec0142"}, "formatter": {"type": "BasicTickFormatter", "id": "428acff7-d637-444a-adaf-484bd52ac5f6"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "0c9eb3cf-1abf-465e-8faf-66812af7f211"}}}, {"type": "ColumnDataSource", "id": "91f6aca1-5c03-41cf-8477-9fabeec5e20f", "attributes": {"data": {"x": [1, 2, 3], "size": [10, 20, 25], "y": [1, 2, 3]}, "column_names": ["y", "x", "size"], "callback": null}}, {"type": "Plot", "id": "0c9eb3cf-1abf-465e-8faf-66812af7f211", "attributes": {"tools": [{"type": "PanTool", "id": "21bb8f9b-ba76-4058-9f95-f77f894087ad"}, {"type": "WheelZoomTool", "id": "95528f08-b4d5-44e0-ba68-39f80dcee891"}, {"type": "BoxZoomTool", "id": "464c4c3b-c8ca-47d1-be59-3bd9b05fde87"}, {"type": "PreviewSaveTool", "id": "11d3c15c-7ab5-43ed-9932-21edd2d1ba70"}, {"type": "ResizeTool", "id": "cd0eb113-68b2-4f0d-8612-91c482bd1ab9"}, {"type": "ResetTool", "id": "f47dfa05-b3eb-4fb3-9e07-690b889e77cb"}, {"type": "HelpTool", "id": "9cfd38ba-1f48-4027-bf4a-161285446576"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "6b79c167-d074-4870-9d39-ba5ed7a37ecc"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "e84cf7a7-bec8-44e1-abf6-9aa11b2c0d1e"}, {"type": "Grid", "id": "f69ffc04-1ed7-44c8-ad31-6bcef8b94e6d"}, {"type": "LinearAxis", "id": "fb448bc8-f735-4103-b689-0af21a9bf6f1"}, {"type": "Grid", "id": "c312c574-e33f-4a98-a7ce-25db51fb6a24"}, {"type": "BoxAnnotation", "id": "001dd538-e7a5-476d-98a5-89328876a1a1"}, {"type": "GlyphRenderer", "id": "9bc32977-b8d3-4238-8f9f-0aa0456bbff4"}], "left": [{"type": "LinearAxis", "id": "fb448bc8-f735-4103-b689-0af21a9bf6f1"}], "below": [{"type": "LinearAxis", "id": "e84cf7a7-bec8-44e1-abf6-9aa11b2c0d1e"}], "tool_events": {"type": "ToolEvents", "id": "1354f762-aa9f-4164-a5cb-de878bcca91e"}, "x_range": {"type": "DataRange1d", "id": "7b3f41bc-3c24-4fb2-a8e0-29f33cc003dd"}}, "subtype": "Figure"}, {"type": "BoxZoomTool", "id": "464c4c3b-c8ca-47d1-be59-3bd9b05fde87", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "001dd538-e7a5-476d-98a5-89328876a1a1"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "0c9eb3cf-1abf-465e-8faf-66812af7f211"}}}, {"type": "SquareCross", "id": "8c0abd84-2923-460c-9f46-6c4c1ee1fe1b", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "size"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "SquareCross", "id": "7fa9d9c0-8fcb-46cd-8e91-8b1db0ddfbd8", "attributes": {"line_color": {"value": "#7FC97F"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "size"}, "fill_color": {"value": null}}}, {"type": "ToolEvents", "id": "1354f762-aa9f-4164-a5cb-de878bcca91e", "attributes": {}}], "root_ids": ["0c9eb3cf-1abf-465e-8faf-66812af7f211"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "2c590bce-50a5-4a82-8b5c-338142090edb", "modelid": "0c9eb3cf-1abf-465e-8faf-66812af7f211", "elementid": "ce2e53c6-fe5f-47ff-a8e0-39293c4252f7"}];
          
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