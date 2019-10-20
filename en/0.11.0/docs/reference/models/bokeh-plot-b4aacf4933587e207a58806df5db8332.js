
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
  };var element = document.getElementById("0b40f413-7d3d-429a-a141-e3c63c124f25");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0b40f413-7d3d-429a-a141-e3c63c124f25' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"b1cb0fd1-4d57-437a-8b82-355a51999076": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "cd6ce290-825c-4754-a2da-ee1b0dbb54f1", "attributes": {"ticker": {"type": "BasicTicker", "id": "2e562cd1-dbf7-4d2c-adfc-a51c66ced09d"}, "formatter": {"type": "BasicTickFormatter", "id": "d71f6686-ae27-406b-83d2-e1fe832aa019"}, "plot": {"type": "Plot", "id": "af91ad63-f3f1-4e65-8865-95c5e1ace1e2"}}}, {"type": "DataRange1d", "id": "3064442e-f53d-4cb4-a409-0554ce44facc", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "d71f6686-ae27-406b-83d2-e1fe832aa019", "attributes": {}}, {"type": "BasicTickFormatter", "id": "6de8e64d-bc18-45e2-ab93-d54975efeb5b", "attributes": {}}, {"type": "LinearAxis", "id": "63885e4e-ccb1-4b65-b972-32a08c0d40cf", "attributes": {"ticker": {"type": "BasicTicker", "id": "2b5c2dbd-e0d6-475d-941e-18f388f3bc0b"}, "formatter": {"type": "BasicTickFormatter", "id": "6de8e64d-bc18-45e2-ab93-d54975efeb5b"}, "plot": {"type": "Plot", "id": "af91ad63-f3f1-4e65-8865-95c5e1ace1e2"}}}, {"type": "ToolEvents", "id": "fd5db5dc-0c18-4158-9463-064c4b0b1d16", "attributes": {}}, {"type": "GlyphRenderer", "id": "f632faea-8a8f-4690-8e6f-1250c86d4c15", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "899ef2ab-1026-4e4e-b5ef-c1bbb022507c"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "CircleX", "id": "d1235882-35f1-489b-8a68-634667b32ade"}}}, {"type": "BasicTicker", "id": "2b5c2dbd-e0d6-475d-941e-18f388f3bc0b", "attributes": {}}, {"type": "Grid", "id": "0ea91141-ec02-499a-967b-c2119233c1c5", "attributes": {"ticker": {"type": "BasicTicker", "id": "2e562cd1-dbf7-4d2c-adfc-a51c66ced09d"}, "dimension": 1, "plot": {"type": "Plot", "id": "af91ad63-f3f1-4e65-8865-95c5e1ace1e2"}}}, {"type": "DataRange1d", "id": "690e12c5-5243-4bf3-bfba-c53799368f3e", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "2e562cd1-dbf7-4d2c-adfc-a51c66ced09d", "attributes": {}}, {"type": "Plot", "id": "af91ad63-f3f1-4e65-8865-95c5e1ace1e2", "attributes": {"y_range": {"type": "DataRange1d", "id": "3064442e-f53d-4cb4-a409-0554ce44facc"}, "renderers": [{"type": "GlyphRenderer", "id": "f632faea-8a8f-4690-8e6f-1250c86d4c15"}, {"type": "LinearAxis", "id": "63885e4e-ccb1-4b65-b972-32a08c0d40cf"}, {"type": "LinearAxis", "id": "cd6ce290-825c-4754-a2da-ee1b0dbb54f1"}, {"type": "Grid", "id": "ef6259af-629c-40a5-a4b6-418402bf0981"}, {"type": "Grid", "id": "0ea91141-ec02-499a-967b-c2119233c1c5"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "cd6ce290-825c-4754-a2da-ee1b0dbb54f1"}], "x_range": {"type": "DataRange1d", "id": "690e12c5-5243-4bf3-bfba-c53799368f3e"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "63885e4e-ccb1-4b65-b972-32a08c0d40cf"}], "tool_events": {"type": "ToolEvents", "id": "fd5db5dc-0c18-4158-9463-064c4b0b1d16"}, "toolbar_location": null}}, {"type": "Grid", "id": "ef6259af-629c-40a5-a4b6-418402bf0981", "attributes": {"ticker": {"type": "BasicTicker", "id": "2b5c2dbd-e0d6-475d-941e-18f388f3bc0b"}, "plot": {"type": "Plot", "id": "af91ad63-f3f1-4e65-8865-95c5e1ace1e2"}}}, {"type": "ColumnDataSource", "id": "899ef2ab-1026-4e4e-b5ef-c1bbb022507c", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "sizes", "y"], "callback": null}}, {"type": "CircleX", "id": "d1235882-35f1-489b-8a68-634667b32ade", "attributes": {"line_color": {"value": "#dd1c77"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "sizes"}, "y": {"field": "y"}, "fill_color": {"value": null}}}], "root_ids": ["af91ad63-f3f1-4e65-8865-95c5e1ace1e2"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "b1cb0fd1-4d57-437a-8b82-355a51999076", "modelid": "af91ad63-f3f1-4e65-8865-95c5e1ace1e2", "elementid": "0b40f413-7d3d-429a-a141-e3c63c124f25"}];
          
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