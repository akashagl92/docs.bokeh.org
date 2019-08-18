
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
  };var element = document.getElementById("081a5541-5861-4d86-aa6a-6f4d7a5b761e");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '081a5541-5861-4d86-aa6a-6f4d7a5b761e' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"b28be703-d714-41ec-a311-dde5a46d66f9": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "a046c30c-63cd-4150-b921-6dd257a0fbff", "attributes": {"ticker": {"type": "BasicTicker", "id": "00d42cc3-1a1e-4a0e-b6d2-ff85af30bdfc"}, "formatter": {"type": "BasicTickFormatter", "id": "32d9cea6-8dbf-4989-a1bb-83db5bc6cb84"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "f5d560fc-6a3b-4173-8e8a-aef73a448eaf"}}}, {"type": "BasicTicker", "id": "6ded2ba7-e35a-4e97-ace1-e2f4acdeed19", "attributes": {}}, {"type": "Ray", "id": "6453ef51-efaf-40db-b334-cf44474c7d2e", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "y": {"field": "y"}, "angle": {"value": -0.7, "units": "rad"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "length": {"value": 45, "units": "data"}}}, {"type": "BoxAnnotation", "id": "7278b693-dcb8-4e48-99b8-ac5d6385a809", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "00d42cc3-1a1e-4a0e-b6d2-ff85af30bdfc", "attributes": {}}, {"type": "Grid", "id": "0af8abcf-e76f-4a05-8dac-c37d1b587ec1", "attributes": {"ticker": {"type": "BasicTicker", "id": "6ded2ba7-e35a-4e97-ace1-e2f4acdeed19"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "f5d560fc-6a3b-4173-8e8a-aef73a448eaf"}}}, {"type": "ColumnDataSource", "id": "184291b5-7b79-481d-acc2-87611a35c136", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["y", "x"], "callback": null}}, {"type": "Ray", "id": "9d419084-2813-4790-831f-b757d28ed8b6", "attributes": {"line_color": {"value": "#FB8072"}, "line_width": {"value": 2}, "y": {"field": "y"}, "angle": {"value": -0.7, "units": "rad"}, "x": {"field": "x"}, "length": {"value": 45, "units": "data"}}}, {"type": "Grid", "id": "8121af33-1602-4dad-8661-e2c54a2076ce", "attributes": {"ticker": {"type": "BasicTicker", "id": "00d42cc3-1a1e-4a0e-b6d2-ff85af30bdfc"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "f5d560fc-6a3b-4173-8e8a-aef73a448eaf"}}}, {"type": "ResizeTool", "id": "a415e081-7ba0-4226-b3cd-a258be74d83e", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f5d560fc-6a3b-4173-8e8a-aef73a448eaf"}}}, {"type": "PanTool", "id": "7b0fb69f-5abd-46c1-addf-763b39b22857", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f5d560fc-6a3b-4173-8e8a-aef73a448eaf"}}}, {"type": "BasicTickFormatter", "id": "32d9cea6-8dbf-4989-a1bb-83db5bc6cb84", "attributes": {}}, {"type": "Plot", "id": "f5d560fc-6a3b-4173-8e8a-aef73a448eaf", "attributes": {"tools": [{"type": "PanTool", "id": "7b0fb69f-5abd-46c1-addf-763b39b22857"}, {"type": "WheelZoomTool", "id": "05c84b56-9040-4117-82a1-508fcbbc8edc"}, {"type": "BoxZoomTool", "id": "488d3461-a96a-4f34-9524-ea4f5a17335d"}, {"type": "PreviewSaveTool", "id": "15ba43f6-21b1-4854-87e8-31eead2a4a5f"}, {"type": "ResizeTool", "id": "a415e081-7ba0-4226-b3cd-a258be74d83e"}, {"type": "ResetTool", "id": "7779bf10-4a28-45ee-8585-40fe6e189257"}, {"type": "HelpTool", "id": "66896875-ae02-4f21-b108-820e63a8c941"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "0040812a-273a-4d73-b806-b7815d4d2215"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "a046c30c-63cd-4150-b921-6dd257a0fbff"}, {"type": "Grid", "id": "8121af33-1602-4dad-8661-e2c54a2076ce"}, {"type": "LinearAxis", "id": "f0b7aabf-d30f-434c-b885-780ae5498d3a"}, {"type": "Grid", "id": "0af8abcf-e76f-4a05-8dac-c37d1b587ec1"}, {"type": "BoxAnnotation", "id": "7278b693-dcb8-4e48-99b8-ac5d6385a809"}, {"type": "GlyphRenderer", "id": "901d9bcf-0494-40c5-ba00-a5ba8ae923e4"}], "left": [{"type": "LinearAxis", "id": "f0b7aabf-d30f-434c-b885-780ae5498d3a"}], "below": [{"type": "LinearAxis", "id": "a046c30c-63cd-4150-b921-6dd257a0fbff"}], "tool_events": {"type": "ToolEvents", "id": "36f4a53f-8fab-4696-8853-83424b4aa824"}, "x_range": {"type": "DataRange1d", "id": "6e044ddc-adaf-4c0a-8e32-fc7cc43524d1"}}, "subtype": "Figure"}, {"type": "ToolEvents", "id": "36f4a53f-8fab-4696-8853-83424b4aa824", "attributes": {}}, {"type": "LinearAxis", "id": "f0b7aabf-d30f-434c-b885-780ae5498d3a", "attributes": {"ticker": {"type": "BasicTicker", "id": "6ded2ba7-e35a-4e97-ace1-e2f4acdeed19"}, "formatter": {"type": "BasicTickFormatter", "id": "19cca2a0-e9f7-4c35-8235-6f401ec26611"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "f5d560fc-6a3b-4173-8e8a-aef73a448eaf"}}}, {"type": "BasicTickFormatter", "id": "19cca2a0-e9f7-4c35-8235-6f401ec26611", "attributes": {}}, {"type": "PreviewSaveTool", "id": "15ba43f6-21b1-4854-87e8-31eead2a4a5f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f5d560fc-6a3b-4173-8e8a-aef73a448eaf"}}}, {"type": "WheelZoomTool", "id": "05c84b56-9040-4117-82a1-508fcbbc8edc", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f5d560fc-6a3b-4173-8e8a-aef73a448eaf"}}}, {"type": "ResetTool", "id": "7779bf10-4a28-45ee-8585-40fe6e189257", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f5d560fc-6a3b-4173-8e8a-aef73a448eaf"}}}, {"type": "HelpTool", "id": "66896875-ae02-4f21-b108-820e63a8c941", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f5d560fc-6a3b-4173-8e8a-aef73a448eaf"}}}, {"type": "DataRange1d", "id": "6e044ddc-adaf-4c0a-8e32-fc7cc43524d1", "attributes": {"callback": null}}, {"type": "BoxZoomTool", "id": "488d3461-a96a-4f34-9524-ea4f5a17335d", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "7278b693-dcb8-4e48-99b8-ac5d6385a809"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "f5d560fc-6a3b-4173-8e8a-aef73a448eaf"}}}, {"type": "DataRange1d", "id": "0040812a-273a-4d73-b806-b7815d4d2215", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "901d9bcf-0494-40c5-ba00-a5ba8ae923e4", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "184291b5-7b79-481d-acc2-87611a35c136"}, "nonselection_glyph": {"type": "Ray", "id": "6453ef51-efaf-40db-b334-cf44474c7d2e"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Ray", "id": "9d419084-2813-4790-831f-b757d28ed8b6"}}}], "root_ids": ["f5d560fc-6a3b-4173-8e8a-aef73a448eaf"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "b28be703-d714-41ec-a311-dde5a46d66f9", "modelid": "f5d560fc-6a3b-4173-8e8a-aef73a448eaf", "elementid": "081a5541-5861-4d86-aa6a-6f4d7a5b761e"}];
          
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