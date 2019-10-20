
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
  };var element = document.getElementById("b55d3615-e7d7-48dc-a2cc-f49833efeafb");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b55d3615-e7d7-48dc-a2cc-f49833efeafb' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"461e7287-f1ef-486b-8935-0c5f5c49a08a": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Grid", "id": "ad65dc41-ca4e-4bac-9369-6f886d45d9b7", "attributes": {"ticker": {"type": "BasicTicker", "id": "4b381e8e-f624-44ef-b6e7-a15505e4dc54"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "71231a37-f20a-4223-a0c0-5e4a8366e70e"}}}, {"type": "DataRange1d", "id": "17d8f811-b827-416d-9771-ed7d964a85d9", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "42944a88-19e5-4e0c-8522-e5978fe9491e", "attributes": {"ticker": {"type": "BasicTicker", "id": "36b21221-52bc-4d69-8292-bfc058ac0ec8"}, "formatter": {"type": "BasicTickFormatter", "id": "aff6d8b2-1939-45cb-8b5e-ae5d541f28e4"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "71231a37-f20a-4223-a0c0-5e4a8366e70e"}}}, {"type": "WheelZoomTool", "id": "98d61c23-103b-4258-b194-c0959fb516af", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "71231a37-f20a-4223-a0c0-5e4a8366e70e"}}}, {"type": "BasicTickFormatter", "id": "aff6d8b2-1939-45cb-8b5e-ae5d541f28e4", "attributes": {}}, {"type": "Asterisk", "id": "21635953-eca6-4d4e-8787-f7e4bf256090", "attributes": {"line_color": {"value": "#F0027F"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#F0027F"}}}, {"type": "GlyphRenderer", "id": "5afac8f0-2d7a-4259-b212-871fab340b38", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "6807b351-f72d-4a45-abfd-8f545bdd9b23"}, "nonselection_glyph": {"type": "Asterisk", "id": "b5dbda84-faea-46b5-8dc1-b827300ba8ef"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Asterisk", "id": "21635953-eca6-4d4e-8787-f7e4bf256090"}}}, {"type": "Asterisk", "id": "b5dbda84-faea-46b5-8dc1-b827300ba8ef", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "LinearAxis", "id": "c2c7570e-b62b-4580-a520-79e8ab54dd55", "attributes": {"ticker": {"type": "BasicTicker", "id": "4b381e8e-f624-44ef-b6e7-a15505e4dc54"}, "formatter": {"type": "BasicTickFormatter", "id": "87a07471-6c5b-49dd-9f3c-a364f804c17e"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "71231a37-f20a-4223-a0c0-5e4a8366e70e"}}}, {"type": "Grid", "id": "d60c24de-a866-419d-9212-480d2c9b2069", "attributes": {"ticker": {"type": "BasicTicker", "id": "36b21221-52bc-4d69-8292-bfc058ac0ec8"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "71231a37-f20a-4223-a0c0-5e4a8366e70e"}}}, {"type": "DataRange1d", "id": "ae8045e1-e44a-4e77-9e1a-4da08ef1cba9", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "4b381e8e-f624-44ef-b6e7-a15505e4dc54", "attributes": {}}, {"type": "Plot", "id": "71231a37-f20a-4223-a0c0-5e4a8366e70e", "attributes": {"tools": [{"type": "PanTool", "id": "4a6f6d8f-6bc3-4a05-9d37-8a9a6e3eb916"}, {"type": "WheelZoomTool", "id": "98d61c23-103b-4258-b194-c0959fb516af"}, {"type": "BoxZoomTool", "id": "6adc0386-bd22-4dfd-900c-73578b61bf08"}, {"type": "PreviewSaveTool", "id": "bac422ab-dc29-43ca-b798-4444b7241f3b"}, {"type": "ResizeTool", "id": "db033ba0-bca9-437d-99d7-a8d5e073e6ba"}, {"type": "ResetTool", "id": "e5fe47d6-88c8-4a96-baed-0204ab0d66b9"}, {"type": "HelpTool", "id": "ad4a952b-20a5-497d-8bb0-74f7589cc9fd"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "17d8f811-b827-416d-9771-ed7d964a85d9"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "42944a88-19e5-4e0c-8522-e5978fe9491e"}, {"type": "Grid", "id": "d60c24de-a866-419d-9212-480d2c9b2069"}, {"type": "LinearAxis", "id": "c2c7570e-b62b-4580-a520-79e8ab54dd55"}, {"type": "Grid", "id": "ad65dc41-ca4e-4bac-9369-6f886d45d9b7"}, {"type": "BoxAnnotation", "id": "431428ce-213a-459b-ad69-6158bc0b366b"}, {"type": "GlyphRenderer", "id": "5afac8f0-2d7a-4259-b212-871fab340b38"}], "left": [{"type": "LinearAxis", "id": "c2c7570e-b62b-4580-a520-79e8ab54dd55"}], "below": [{"type": "LinearAxis", "id": "42944a88-19e5-4e0c-8522-e5978fe9491e"}], "tool_events": {"type": "ToolEvents", "id": "4ec5284b-6fe2-44ce-8cd4-d293ce88645c"}, "x_range": {"type": "DataRange1d", "id": "ae8045e1-e44a-4e77-9e1a-4da08ef1cba9"}}, "subtype": "Figure"}, {"type": "HelpTool", "id": "ad4a952b-20a5-497d-8bb0-74f7589cc9fd", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "71231a37-f20a-4223-a0c0-5e4a8366e70e"}}}, {"type": "PanTool", "id": "4a6f6d8f-6bc3-4a05-9d37-8a9a6e3eb916", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "71231a37-f20a-4223-a0c0-5e4a8366e70e"}}}, {"type": "ColumnDataSource", "id": "6807b351-f72d-4a45-abfd-8f545bdd9b23", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["x", "y"], "callback": null}}, {"type": "ToolEvents", "id": "4ec5284b-6fe2-44ce-8cd4-d293ce88645c", "attributes": {}}, {"type": "ResetTool", "id": "e5fe47d6-88c8-4a96-baed-0204ab0d66b9", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "71231a37-f20a-4223-a0c0-5e4a8366e70e"}}}, {"type": "BoxZoomTool", "id": "6adc0386-bd22-4dfd-900c-73578b61bf08", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "431428ce-213a-459b-ad69-6158bc0b366b"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "71231a37-f20a-4223-a0c0-5e4a8366e70e"}}}, {"type": "BoxAnnotation", "id": "431428ce-213a-459b-ad69-6158bc0b366b", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ResizeTool", "id": "db033ba0-bca9-437d-99d7-a8d5e073e6ba", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "71231a37-f20a-4223-a0c0-5e4a8366e70e"}}}, {"type": "BasicTickFormatter", "id": "87a07471-6c5b-49dd-9f3c-a364f804c17e", "attributes": {}}, {"type": "BasicTicker", "id": "36b21221-52bc-4d69-8292-bfc058ac0ec8", "attributes": {}}, {"type": "PreviewSaveTool", "id": "bac422ab-dc29-43ca-b798-4444b7241f3b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "71231a37-f20a-4223-a0c0-5e4a8366e70e"}}}], "root_ids": ["71231a37-f20a-4223-a0c0-5e4a8366e70e"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "461e7287-f1ef-486b-8935-0c5f5c49a08a", "modelid": "71231a37-f20a-4223-a0c0-5e4a8366e70e", "elementid": "b55d3615-e7d7-48dc-a2cc-f49833efeafb"}];
          
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