
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
  };var element = document.getElementById("bc80c995-ea46-4e8c-a5bd-213d338ce9ba");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'bc80c995-ea46-4e8c-a5bd-213d338ce9ba' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"2ae624c2-2528-4a62-9c9b-805c2486e121": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTicker", "id": "a0baa8c7-4b6b-4dca-92ba-938b36437f40", "attributes": {}}, {"type": "Grid", "id": "cd628068-497c-452e-9427-b007f0b68e84", "attributes": {"ticker": {"type": "BasicTicker", "id": "a0baa8c7-4b6b-4dca-92ba-938b36437f40"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "ec38df62-8f6c-4fdc-a128-ffe793cd21dd"}}}, {"type": "DataRange1d", "id": "c7c615a5-05d4-40dd-b34e-7b5d17645810", "attributes": {"callback": null}}, {"type": "DataRange1d", "id": "6419169e-8828-4291-8c26-1a5528547a70", "attributes": {"callback": null}}, {"type": "ResetTool", "id": "7b861eff-4726-4826-a20a-5ebb522e0fb2", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "ec38df62-8f6c-4fdc-a128-ffe793cd21dd"}}}, {"type": "BoxAnnotation", "id": "dc984717-13bb-4a3d-ba19-77eeeec127a9", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "GlyphRenderer", "id": "6f429ed1-c6e5-4398-98d4-aa17503afb40", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "d0f9b92f-9230-488f-ac64-b4315a71e076"}, "nonselection_glyph": {"type": "Circle", "id": "7f5cc265-47c7-4437-a321-d4bc05832e60"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "6b31c963-8085-44ee-a395-5f162e3604fc"}}}, {"type": "ToolEvents", "id": "70b43a2e-2a09-4b9c-ab26-ab81e6214333", "attributes": {}}, {"type": "Grid", "id": "dbef577d-2ec9-4574-b7a8-9bb6b6e4ed74", "attributes": {"ticker": {"type": "BasicTicker", "id": "7d5801a9-ae6b-46ef-aebc-22c18f1d4952"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "ec38df62-8f6c-4fdc-a128-ffe793cd21dd"}}}, {"type": "LinearAxis", "id": "fc83d9a7-c0df-443f-8c60-acd3ed22239a", "attributes": {"ticker": {"type": "BasicTicker", "id": "a0baa8c7-4b6b-4dca-92ba-938b36437f40"}, "formatter": {"type": "BasicTickFormatter", "id": "0f68fd67-674f-4753-acad-14e2354f0389"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "ec38df62-8f6c-4fdc-a128-ffe793cd21dd"}}}, {"type": "ColumnDataSource", "id": "d0f9b92f-9230-488f-ac64-b4315a71e076", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "WheelZoomTool", "id": "d9184480-d0c9-430e-b794-3d72eca7a0c6", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "ec38df62-8f6c-4fdc-a128-ffe793cd21dd"}}}, {"type": "HelpTool", "id": "7b0955dd-65f8-41f5-8f3b-a929c8da81e6", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "ec38df62-8f6c-4fdc-a128-ffe793cd21dd"}}}, {"type": "BasicTicker", "id": "7d5801a9-ae6b-46ef-aebc-22c18f1d4952", "attributes": {}}, {"type": "BasicTickFormatter", "id": "c154d007-22c3-4132-907e-ca3947ebf473", "attributes": {}}, {"type": "PreviewSaveTool", "id": "c59dd7d0-5498-41a8-95c4-a33799fd792f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "ec38df62-8f6c-4fdc-a128-ffe793cd21dd"}}}, {"type": "Circle", "id": "6b31c963-8085-44ee-a395-5f162e3604fc", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "Plot", "id": "ec38df62-8f6c-4fdc-a128-ffe793cd21dd", "attributes": {"y_range": {"type": "DataRange1d", "id": "6419169e-8828-4291-8c26-1a5528547a70"}, "renderers": [{"type": "LinearAxis", "id": "fc83d9a7-c0df-443f-8c60-acd3ed22239a"}, {"type": "Grid", "id": "cd628068-497c-452e-9427-b007f0b68e84"}, {"type": "LinearAxis", "id": "9163a40a-6874-428f-8595-8e146ec1958e"}, {"type": "Grid", "id": "dbef577d-2ec9-4574-b7a8-9bb6b6e4ed74"}, {"type": "BoxAnnotation", "id": "dc984717-13bb-4a3d-ba19-77eeeec127a9"}, {"type": "GlyphRenderer", "id": "6f429ed1-c6e5-4398-98d4-aa17503afb40"}], "title_text_font_style": "italic", "title": "Some Title", "tools": [{"type": "PanTool", "id": "ce92dda7-7ea0-4935-be07-f300993801a6"}, {"type": "WheelZoomTool", "id": "d9184480-d0c9-430e-b794-3d72eca7a0c6"}, {"type": "BoxZoomTool", "id": "d6f96ff1-4700-44c2-be00-344093de7c34"}, {"type": "PreviewSaveTool", "id": "c59dd7d0-5498-41a8-95c4-a33799fd792f"}, {"type": "ResizeTool", "id": "6829fc92-41e5-4992-b255-8a8c974c5935"}, {"type": "ResetTool", "id": "7b861eff-4726-4826-a20a-5ebb522e0fb2"}, {"type": "HelpTool", "id": "7b0955dd-65f8-41f5-8f3b-a929c8da81e6"}], "title_text_font": "times", "plot_width": 400, "plot_height": 400, "x_range": {"type": "DataRange1d", "id": "c7c615a5-05d4-40dd-b34e-7b5d17645810"}, "left": [{"type": "LinearAxis", "id": "9163a40a-6874-428f-8595-8e146ec1958e"}], "below": [{"type": "LinearAxis", "id": "fc83d9a7-c0df-443f-8c60-acd3ed22239a"}], "title_text_color": {"value": "olive"}, "tool_events": {"type": "ToolEvents", "id": "70b43a2e-2a09-4b9c-ab26-ab81e6214333"}}, "subtype": "Figure"}, {"type": "Circle", "id": "7f5cc265-47c7-4437-a321-d4bc05832e60", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "LinearAxis", "id": "9163a40a-6874-428f-8595-8e146ec1958e", "attributes": {"ticker": {"type": "BasicTicker", "id": "7d5801a9-ae6b-46ef-aebc-22c18f1d4952"}, "formatter": {"type": "BasicTickFormatter", "id": "c154d007-22c3-4132-907e-ca3947ebf473"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "ec38df62-8f6c-4fdc-a128-ffe793cd21dd"}}}, {"type": "BoxZoomTool", "id": "d6f96ff1-4700-44c2-be00-344093de7c34", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "dc984717-13bb-4a3d-ba19-77eeeec127a9"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "ec38df62-8f6c-4fdc-a128-ffe793cd21dd"}}}, {"type": "ResizeTool", "id": "6829fc92-41e5-4992-b255-8a8c974c5935", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "ec38df62-8f6c-4fdc-a128-ffe793cd21dd"}}}, {"type": "BasicTickFormatter", "id": "0f68fd67-674f-4753-acad-14e2354f0389", "attributes": {}}, {"type": "PanTool", "id": "ce92dda7-7ea0-4935-be07-f300993801a6", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "ec38df62-8f6c-4fdc-a128-ffe793cd21dd"}}}], "root_ids": ["ec38df62-8f6c-4fdc-a128-ffe793cd21dd"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "2ae624c2-2528-4a62-9c9b-805c2486e121", "modelid": "ec38df62-8f6c-4fdc-a128-ffe793cd21dd", "elementid": "bc80c995-ea46-4e8c-a5bd-213d338ce9ba"}];
          
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