
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
  };var element = document.getElementById("90bfa10a-32a9-444c-961a-83e0cccf0daa");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '90bfa10a-32a9-444c-961a-83e0cccf0daa' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"c1011280-2954-42cf-875b-3b39e15b2e1b": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ColumnDataSource", "id": "d89a909c-956a-4ee8-a81a-0d6c16dffeb6", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["y", "x"], "callback": null}}, {"type": "ResetTool", "id": "cf4cc052-a2a4-408f-92be-cee3c1450c02", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "df109229-2f0a-4d7c-b835-430eec53cf82"}}}, {"type": "PreviewSaveTool", "id": "3c2bebf6-223e-4c1c-9043-e1e74b5e1f88", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "df109229-2f0a-4d7c-b835-430eec53cf82"}}}, {"type": "BasicTicker", "id": "09266c5b-bbec-495a-90d0-b764569d4d78", "attributes": {}}, {"type": "Grid", "id": "9a729803-7088-4521-bc09-d95a270076e4", "attributes": {"ticker": {"type": "BasicTicker", "id": "09266c5b-bbec-495a-90d0-b764569d4d78"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "df109229-2f0a-4d7c-b835-430eec53cf82"}}}, {"type": "Grid", "id": "a9c75f55-3df6-41c5-ae1b-a1c9e15a2de7", "attributes": {"ticker": {"type": "BasicTicker", "id": "f4a8f3bb-7188-43c4-8137-857e11d1b82c"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "df109229-2f0a-4d7c-b835-430eec53cf82"}}}, {"type": "GlyphRenderer", "id": "1f6628d7-86dc-48a6-be7d-9de243a22146", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "d89a909c-956a-4ee8-a81a-0d6c16dffeb6"}, "nonselection_glyph": {"type": "DiamondCross", "id": "407d7eb3-fe6f-4165-8114-6bd9c72739d1"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "DiamondCross", "id": "03cc53f9-7aaa-4a87-a406-f1a1d353ce03"}}}, {"type": "WheelZoomTool", "id": "1aeb1731-b525-4ad4-8928-2007c807fe6a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "df109229-2f0a-4d7c-b835-430eec53cf82"}}}, {"type": "Plot", "id": "df109229-2f0a-4d7c-b835-430eec53cf82", "attributes": {"tools": [{"type": "PanTool", "id": "b114972b-f080-49b1-a9f3-1e441a2e427a"}, {"type": "WheelZoomTool", "id": "1aeb1731-b525-4ad4-8928-2007c807fe6a"}, {"type": "BoxZoomTool", "id": "5e3f645f-f120-47e2-9386-d69108e0f2c4"}, {"type": "PreviewSaveTool", "id": "3c2bebf6-223e-4c1c-9043-e1e74b5e1f88"}, {"type": "ResizeTool", "id": "b3e10b8f-d765-4fc5-991f-e51e3f32265c"}, {"type": "ResetTool", "id": "cf4cc052-a2a4-408f-92be-cee3c1450c02"}, {"type": "HelpTool", "id": "d005a072-b293-4b68-a61e-d69d3ca55048"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "69ee4294-23ef-492d-a19f-2e8173c37781"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "e1c19ddc-1dfa-415e-b59c-b838c4d537bf"}, {"type": "Grid", "id": "9a729803-7088-4521-bc09-d95a270076e4"}, {"type": "LinearAxis", "id": "2d792348-4f84-42d8-91d5-9e622e9cf74b"}, {"type": "Grid", "id": "a9c75f55-3df6-41c5-ae1b-a1c9e15a2de7"}, {"type": "BoxAnnotation", "id": "7bbb9e62-ea67-4a75-ae13-a78f4450e0ee"}, {"type": "GlyphRenderer", "id": "1f6628d7-86dc-48a6-be7d-9de243a22146"}], "left": [{"type": "LinearAxis", "id": "2d792348-4f84-42d8-91d5-9e622e9cf74b"}], "below": [{"type": "LinearAxis", "id": "e1c19ddc-1dfa-415e-b59c-b838c4d537bf"}], "tool_events": {"type": "ToolEvents", "id": "eba92541-2af2-4898-bf41-ae42ac769d25"}, "x_range": {"type": "DataRange1d", "id": "f9d201f1-be4d-48f2-80e5-b3f62a5c2120"}}, "subtype": "Figure"}, {"type": "ResizeTool", "id": "b3e10b8f-d765-4fc5-991f-e51e3f32265c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "df109229-2f0a-4d7c-b835-430eec53cf82"}}}, {"type": "DataRange1d", "id": "69ee4294-23ef-492d-a19f-2e8173c37781", "attributes": {"callback": null}}, {"type": "BoxAnnotation", "id": "7bbb9e62-ea67-4a75-ae13-a78f4450e0ee", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "LinearAxis", "id": "e1c19ddc-1dfa-415e-b59c-b838c4d537bf", "attributes": {"ticker": {"type": "BasicTicker", "id": "09266c5b-bbec-495a-90d0-b764569d4d78"}, "formatter": {"type": "BasicTickFormatter", "id": "53b76121-1c7d-4939-b5bd-dbd2acadc787"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "df109229-2f0a-4d7c-b835-430eec53cf82"}}}, {"type": "BoxZoomTool", "id": "5e3f645f-f120-47e2-9386-d69108e0f2c4", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "7bbb9e62-ea67-4a75-ae13-a78f4450e0ee"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "df109229-2f0a-4d7c-b835-430eec53cf82"}}}, {"type": "DiamondCross", "id": "03cc53f9-7aaa-4a87-a406-f1a1d353ce03", "attributes": {"line_color": {"value": "#386CB0"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "fill_color": {"value": null}}}, {"type": "BasicTicker", "id": "f4a8f3bb-7188-43c4-8137-857e11d1b82c", "attributes": {}}, {"type": "ToolEvents", "id": "eba92541-2af2-4898-bf41-ae42ac769d25", "attributes": {}}, {"type": "DataRange1d", "id": "f9d201f1-be4d-48f2-80e5-b3f62a5c2120", "attributes": {"callback": null}}, {"type": "PanTool", "id": "b114972b-f080-49b1-a9f3-1e441a2e427a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "df109229-2f0a-4d7c-b835-430eec53cf82"}}}, {"type": "BasicTickFormatter", "id": "c5c0bcb9-c973-4e13-9f91-788949bed6e3", "attributes": {}}, {"type": "LinearAxis", "id": "2d792348-4f84-42d8-91d5-9e622e9cf74b", "attributes": {"ticker": {"type": "BasicTicker", "id": "f4a8f3bb-7188-43c4-8137-857e11d1b82c"}, "formatter": {"type": "BasicTickFormatter", "id": "c5c0bcb9-c973-4e13-9f91-788949bed6e3"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "df109229-2f0a-4d7c-b835-430eec53cf82"}}}, {"type": "DiamondCross", "id": "407d7eb3-fe6f-4165-8114-6bd9c72739d1", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "HelpTool", "id": "d005a072-b293-4b68-a61e-d69d3ca55048", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "df109229-2f0a-4d7c-b835-430eec53cf82"}}}, {"type": "BasicTickFormatter", "id": "53b76121-1c7d-4939-b5bd-dbd2acadc787", "attributes": {}}], "root_ids": ["df109229-2f0a-4d7c-b835-430eec53cf82"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "c1011280-2954-42cf-875b-3b39e15b2e1b", "modelid": "df109229-2f0a-4d7c-b835-430eec53cf82", "elementid": "90bfa10a-32a9-444c-961a-83e0cccf0daa"}];
          
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