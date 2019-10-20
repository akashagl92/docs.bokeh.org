
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
  };var element = document.getElementById("b78ec619-31e4-4306-98e2-ae3a34de65f8");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b78ec619-31e4-4306-98e2-ae3a34de65f8' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"d85277d7-9218-4595-9884-5c0557dcdcef": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "c5ee0628-6d0b-4dc5-9e8e-b3a5f89c7426", "attributes": {"ticker": {"type": "BasicTicker", "id": "4b9de63b-4067-4365-8aee-dd8434598fdf"}, "formatter": {"type": "BasicTickFormatter", "id": "56c5a85c-90bc-4fe6-b814-bd13a538533a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c682ee20-13d2-4e04-b4e2-a0e2aa0376ed"}}}, {"type": "WheelZoomTool", "id": "ff88387f-95fe-409d-9d48-39e9924272ef", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c682ee20-13d2-4e04-b4e2-a0e2aa0376ed"}}}, {"type": "Grid", "id": "b8ed709e-bf15-4f0c-8615-4654e0fa198e", "attributes": {"ticker": {"type": "BasicTicker", "id": "4b9de63b-4067-4365-8aee-dd8434598fdf"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c682ee20-13d2-4e04-b4e2-a0e2aa0376ed"}}}, {"type": "Circle", "id": "eb096fb2-568d-4e54-a24e-fcf36ef62c85", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ResetTool", "id": "d6b33d59-955a-499f-a7e6-0a03a4c31b13", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c682ee20-13d2-4e04-b4e2-a0e2aa0376ed"}}}, {"type": "BasicTickFormatter", "id": "56c5a85c-90bc-4fe6-b814-bd13a538533a", "attributes": {}}, {"type": "ColumnDataSource", "id": "ac26f0f5-7601-4dac-bfaa-675573b7ee26", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "PreviewSaveTool", "id": "a81fe922-e031-4ea0-bfac-669537e37407", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c682ee20-13d2-4e04-b4e2-a0e2aa0376ed"}}}, {"type": "Grid", "id": "cd1424a1-d9e1-43cd-9cab-33b176747214", "attributes": {"ticker": {"type": "BasicTicker", "id": "dd1d16ef-026e-4774-8099-0f0aa1b93ffe"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "c682ee20-13d2-4e04-b4e2-a0e2aa0376ed"}}}, {"type": "HelpTool", "id": "4f994699-f1c6-4087-8eeb-6aaeb76ace65", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c682ee20-13d2-4e04-b4e2-a0e2aa0376ed"}}}, {"type": "BoxZoomTool", "id": "b0719aae-b5db-4698-b59f-adea430e1a47", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "ba373e4d-ce88-4180-aa42-28cb25bc7600"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c682ee20-13d2-4e04-b4e2-a0e2aa0376ed"}}}, {"type": "BasicTicker", "id": "dd1d16ef-026e-4774-8099-0f0aa1b93ffe", "attributes": {}}, {"type": "BasicTickFormatter", "id": "8e42b502-d55c-490f-a7a3-ae30f8564806", "attributes": {}}, {"type": "Range1d", "id": "d2460480-76a9-4e7d-a5d1-29841856e682", "attributes": {"end": 20, "callback": null}}, {"type": "ToolEvents", "id": "2c7e8534-28cb-4b58-80c8-436d5291025b", "attributes": {}}, {"type": "Circle", "id": "6776f113-2e9f-4ea4-b36b-e3ca6d3d4742", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "Plot", "id": "c682ee20-13d2-4e04-b4e2-a0e2aa0376ed", "attributes": {"tools": [{"type": "PanTool", "id": "4a6a820c-fbb6-45f0-a578-715a793fe7d3"}, {"type": "WheelZoomTool", "id": "ff88387f-95fe-409d-9d48-39e9924272ef"}, {"type": "BoxZoomTool", "id": "b0719aae-b5db-4698-b59f-adea430e1a47"}, {"type": "PreviewSaveTool", "id": "a81fe922-e031-4ea0-bfac-669537e37407"}, {"type": "ResizeTool", "id": "63939597-ab27-4f19-8689-d4fc33dae446"}, {"type": "ResetTool", "id": "d6b33d59-955a-499f-a7e6-0a03a4c31b13"}, {"type": "HelpTool", "id": "4f994699-f1c6-4087-8eeb-6aaeb76ace65"}], "plot_width": 400, "y_range": {"type": "Range1d", "id": "3abbace5-09c5-45bb-a214-78da07605031"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "c5ee0628-6d0b-4dc5-9e8e-b3a5f89c7426"}, {"type": "Grid", "id": "b8ed709e-bf15-4f0c-8615-4654e0fa198e"}, {"type": "LinearAxis", "id": "5fce3ac9-4982-4893-9097-8fe3523073c7"}, {"type": "Grid", "id": "cd1424a1-d9e1-43cd-9cab-33b176747214"}, {"type": "BoxAnnotation", "id": "ba373e4d-ce88-4180-aa42-28cb25bc7600"}, {"type": "GlyphRenderer", "id": "cd92a3c4-577a-426c-ac9a-f4fdbc0b7ac5"}], "left": [{"type": "LinearAxis", "id": "5fce3ac9-4982-4893-9097-8fe3523073c7"}], "below": [{"type": "LinearAxis", "id": "c5ee0628-6d0b-4dc5-9e8e-b3a5f89c7426"}], "tool_events": {"type": "ToolEvents", "id": "2c7e8534-28cb-4b58-80c8-436d5291025b"}, "x_range": {"type": "Range1d", "id": "d2460480-76a9-4e7d-a5d1-29841856e682"}}, "subtype": "Figure"}, {"type": "BoxAnnotation", "id": "ba373e4d-ce88-4180-aa42-28cb25bc7600", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "4b9de63b-4067-4365-8aee-dd8434598fdf", "attributes": {}}, {"type": "ResizeTool", "id": "63939597-ab27-4f19-8689-d4fc33dae446", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c682ee20-13d2-4e04-b4e2-a0e2aa0376ed"}}}, {"type": "GlyphRenderer", "id": "cd92a3c4-577a-426c-ac9a-f4fdbc0b7ac5", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "ac26f0f5-7601-4dac-bfaa-675573b7ee26"}, "nonselection_glyph": {"type": "Circle", "id": "eb096fb2-568d-4e54-a24e-fcf36ef62c85"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "6776f113-2e9f-4ea4-b36b-e3ca6d3d4742"}}}, {"type": "PanTool", "id": "4a6a820c-fbb6-45f0-a578-715a793fe7d3", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c682ee20-13d2-4e04-b4e2-a0e2aa0376ed"}}}, {"type": "Range1d", "id": "3abbace5-09c5-45bb-a214-78da07605031", "attributes": {"end": 15, "callback": null}}, {"type": "LinearAxis", "id": "5fce3ac9-4982-4893-9097-8fe3523073c7", "attributes": {"ticker": {"type": "BasicTicker", "id": "dd1d16ef-026e-4774-8099-0f0aa1b93ffe"}, "formatter": {"type": "BasicTickFormatter", "id": "8e42b502-d55c-490f-a7a3-ae30f8564806"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c682ee20-13d2-4e04-b4e2-a0e2aa0376ed"}}}], "root_ids": ["c682ee20-13d2-4e04-b4e2-a0e2aa0376ed"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "d85277d7-9218-4595-9884-5c0557dcdcef", "modelid": "c682ee20-13d2-4e04-b4e2-a0e2aa0376ed", "elementid": "b78ec619-31e4-4306-98e2-ae3a34de65f8"}];
          
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