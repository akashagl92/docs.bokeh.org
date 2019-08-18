
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
  };var element = document.getElementById("315a65fa-dbdc-4a23-92a7-c60ba8305a65");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '315a65fa-dbdc-4a23-92a7-c60ba8305a65' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"34200ce7-8ca6-475c-ba34-7e88a32bc592": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "d187c9ae-ad75-4416-ad9e-1c90c6857972", "attributes": {"ticker": {"type": "BasicTicker", "id": "1652c178-a023-419d-a737-d20409de2997"}, "formatter": {"type": "BasicTickFormatter", "id": "1bce90b4-5c4a-4ca1-8637-a395520440ba"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "25d92774-4d87-4d11-9a1d-88a98b9e1d9c"}}}, {"type": "LinearAxis", "id": "e35baaab-3057-4c67-87d1-a8ca9cbac368", "attributes": {"ticker": {"type": "BasicTicker", "id": "ca3b2dba-b8ce-42e9-bf02-53c7f05f7ed7"}, "formatter": {"type": "BasicTickFormatter", "id": "fc3c3573-6762-4d8c-adfa-72d25d417f2b"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "25d92774-4d87-4d11-9a1d-88a98b9e1d9c"}}}, {"type": "BasicTicker", "id": "ca3b2dba-b8ce-42e9-bf02-53c7f05f7ed7", "attributes": {}}, {"type": "Grid", "id": "55659569-d99e-4c71-99e0-cf5b942bab34", "attributes": {"ticker": {"type": "BasicTicker", "id": "ca3b2dba-b8ce-42e9-bf02-53c7f05f7ed7"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "25d92774-4d87-4d11-9a1d-88a98b9e1d9c"}}}, {"type": "HoverTool", "id": "f749a0dc-4120-43f7-b5cf-ea30b0f436a3", "attributes": {"callback": null, "plot": {"type": "Plot", "subtype": "Figure", "id": "25d92774-4d87-4d11-9a1d-88a98b9e1d9c"}}}, {"type": "Grid", "id": "9594b4ed-16df-4c77-b01c-d867b6761e6c", "attributes": {"ticker": {"type": "BasicTicker", "id": "1652c178-a023-419d-a737-d20409de2997"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "25d92774-4d87-4d11-9a1d-88a98b9e1d9c"}}}, {"type": "BoxAnnotation", "id": "c52ed02f-6752-482a-bf70-b5b5cfed7f37", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BoxSelectTool", "id": "78221fc8-c770-4467-9645-4472ba762006", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "c52ed02f-6752-482a-bf70-b5b5cfed7f37"}, "renderers": [{"type": "GlyphRenderer", "id": "e5df9c6c-9abb-436b-a4be-23db6d178ceb"}], "callback": null, "plot": {"type": "Plot", "subtype": "Figure", "id": "25d92774-4d87-4d11-9a1d-88a98b9e1d9c"}}}, {"type": "Circle", "id": "fe8ca36d-a61b-46a7-978b-f96b5521b507", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "DataRange1d", "id": "280a97b1-1456-43cf-a572-5d106794b055", "attributes": {"callback": null}}, {"type": "DataRange1d", "id": "dbe9f117-5ff1-41f4-a489-183ea19ac20d", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "1652c178-a023-419d-a737-d20409de2997", "attributes": {}}, {"type": "GlyphRenderer", "id": "e5df9c6c-9abb-436b-a4be-23db6d178ceb", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "54524388-d005-43bf-b4f0-fd6e7a56197b"}, "nonselection_glyph": {"type": "Circle", "id": "fe8ca36d-a61b-46a7-978b-f96b5521b507"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "7ab6e088-7d04-46bc-9461-092d182b2c92"}}}, {"type": "BasicTickFormatter", "id": "fc3c3573-6762-4d8c-adfa-72d25d417f2b", "attributes": {}}, {"type": "BasicTickFormatter", "id": "1bce90b4-5c4a-4ca1-8637-a395520440ba", "attributes": {}}, {"type": "ToolEvents", "id": "f58ff803-9542-4e2a-9e8c-6fe6f1a4721b", "attributes": {}}, {"type": "ColumnDataSource", "id": "54524388-d005-43bf-b4f0-fd6e7a56197b", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "Circle", "id": "7ab6e088-7d04-46bc-9461-092d182b2c92", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "Plot", "id": "25d92774-4d87-4d11-9a1d-88a98b9e1d9c", "attributes": {"tools": [{"type": "BoxSelectTool", "id": "78221fc8-c770-4467-9645-4472ba762006"}, {"type": "HoverTool", "id": "f749a0dc-4120-43f7-b5cf-ea30b0f436a3"}], "plot_width": 400, "x_range": {"type": "DataRange1d", "id": "dbe9f117-5ff1-41f4-a489-183ea19ac20d"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "e35baaab-3057-4c67-87d1-a8ca9cbac368"}, {"type": "Grid", "id": "55659569-d99e-4c71-99e0-cf5b942bab34"}, {"type": "LinearAxis", "id": "d187c9ae-ad75-4416-ad9e-1c90c6857972"}, {"type": "Grid", "id": "9594b4ed-16df-4c77-b01c-d867b6761e6c"}, {"type": "BoxAnnotation", "id": "c52ed02f-6752-482a-bf70-b5b5cfed7f37"}, {"type": "GlyphRenderer", "id": "e5df9c6c-9abb-436b-a4be-23db6d178ceb"}], "y_range": {"type": "DataRange1d", "id": "280a97b1-1456-43cf-a572-5d106794b055"}, "left": [{"type": "LinearAxis", "id": "d187c9ae-ad75-4416-ad9e-1c90c6857972"}], "below": [{"type": "LinearAxis", "id": "e35baaab-3057-4c67-87d1-a8ca9cbac368"}], "tool_events": {"type": "ToolEvents", "id": "f58ff803-9542-4e2a-9e8c-6fe6f1a4721b"}, "title": null}, "subtype": "Figure"}], "root_ids": ["25d92774-4d87-4d11-9a1d-88a98b9e1d9c"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "34200ce7-8ca6-475c-ba34-7e88a32bc592", "modelid": "25d92774-4d87-4d11-9a1d-88a98b9e1d9c", "elementid": "315a65fa-dbdc-4a23-92a7-c60ba8305a65"}];
          
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