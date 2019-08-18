
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
  };var element = document.getElementById("937b18e9-7387-4754-b240-1c56a80e50d7");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '937b18e9-7387-4754-b240-1c56a80e50d7' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"43febb6f-1c29-44be-8384-076c80ea1f9f": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "HelpTool", "id": "df16872d-1f7e-4992-8545-a3e69748206e", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e5dad4cd-9a68-4d42-be49-c19fc2a4e1c3"}}}, {"type": "Grid", "id": "cbff932a-b83a-4a71-8b23-2089c13cb51e", "attributes": {"ticker": {"type": "BasicTicker", "id": "c95357f1-78ea-4235-a740-456ff68bc3c0"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "e5dad4cd-9a68-4d42-be49-c19fc2a4e1c3"}}}, {"type": "DataRange1d", "id": "c4cf2746-7c5f-4c1b-8071-6b3d2ef632a8", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "9edc57ca-bc09-43c0-956f-383200f6d378", "attributes": {}}, {"type": "LinearAxis", "id": "ee237f20-cbc7-498b-8d6f-52b95d3c1a0c", "attributes": {"ticker": {"type": "BasicTicker", "id": "9edc57ca-bc09-43c0-956f-383200f6d378"}, "formatter": {"type": "BasicTickFormatter", "id": "7e6f75bc-c4df-4223-9e13-98c5d24593ec"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e5dad4cd-9a68-4d42-be49-c19fc2a4e1c3"}}}, {"type": "CircleCross", "id": "773bb627-15e5-45ac-a5a8-97f7ab52bbb6", "attributes": {"line_color": {"value": "#FB8072"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "fill_color": {"value": "#FB8072"}, "fill_alpha": {"value": 0.2}}}, {"type": "BoxAnnotation", "id": "202260e2-52f8-4a2d-945c-9a7e503aa7eb", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "WheelZoomTool", "id": "7194d70c-2320-4959-9948-a68c9b917ebe", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e5dad4cd-9a68-4d42-be49-c19fc2a4e1c3"}}}, {"type": "LinearAxis", "id": "eea0fcb4-5fb7-4040-8b71-1c0cd6f6fd86", "attributes": {"ticker": {"type": "BasicTicker", "id": "c95357f1-78ea-4235-a740-456ff68bc3c0"}, "formatter": {"type": "BasicTickFormatter", "id": "ce27877b-398a-4719-a130-f8714107aa15"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e5dad4cd-9a68-4d42-be49-c19fc2a4e1c3"}}}, {"type": "Plot", "id": "e5dad4cd-9a68-4d42-be49-c19fc2a4e1c3", "attributes": {"tools": [{"type": "PanTool", "id": "0168c933-df43-4fd3-8e43-a808d577bfd2"}, {"type": "WheelZoomTool", "id": "7194d70c-2320-4959-9948-a68c9b917ebe"}, {"type": "BoxZoomTool", "id": "4b700838-67fd-4416-bcaa-7843e604183b"}, {"type": "PreviewSaveTool", "id": "720b2f0b-f94c-47b4-9070-0568e8a6d57b"}, {"type": "ResizeTool", "id": "b5436b47-b4d4-45cd-9eab-10c24b07c6c6"}, {"type": "ResetTool", "id": "6000ce69-eadc-460d-b45c-bee0b7f4d4bf"}, {"type": "HelpTool", "id": "df16872d-1f7e-4992-8545-a3e69748206e"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "c4cf2746-7c5f-4c1b-8071-6b3d2ef632a8"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "ee237f20-cbc7-498b-8d6f-52b95d3c1a0c"}, {"type": "Grid", "id": "d2c090e0-9fb5-475d-94c4-85897eff032d"}, {"type": "LinearAxis", "id": "eea0fcb4-5fb7-4040-8b71-1c0cd6f6fd86"}, {"type": "Grid", "id": "cbff932a-b83a-4a71-8b23-2089c13cb51e"}, {"type": "BoxAnnotation", "id": "202260e2-52f8-4a2d-945c-9a7e503aa7eb"}, {"type": "GlyphRenderer", "id": "72fdd0d0-7c35-4811-996b-e5b2f32428ac"}], "left": [{"type": "LinearAxis", "id": "eea0fcb4-5fb7-4040-8b71-1c0cd6f6fd86"}], "below": [{"type": "LinearAxis", "id": "ee237f20-cbc7-498b-8d6f-52b95d3c1a0c"}], "tool_events": {"type": "ToolEvents", "id": "d5111fd9-0998-4adf-9785-6a9377119604"}, "x_range": {"type": "DataRange1d", "id": "d0c8bfb2-50f6-4d13-94cd-3d913b99deac"}}, "subtype": "Figure"}, {"type": "GlyphRenderer", "id": "72fdd0d0-7c35-4811-996b-e5b2f32428ac", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "90dd7027-8cb2-4338-91c5-81edb3c4d487"}, "nonselection_glyph": {"type": "CircleCross", "id": "2aedd405-369a-4189-9964-31352a2ebed1"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "CircleCross", "id": "773bb627-15e5-45ac-a5a8-97f7ab52bbb6"}}}, {"type": "Grid", "id": "d2c090e0-9fb5-475d-94c4-85897eff032d", "attributes": {"ticker": {"type": "BasicTicker", "id": "9edc57ca-bc09-43c0-956f-383200f6d378"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e5dad4cd-9a68-4d42-be49-c19fc2a4e1c3"}}}, {"type": "BoxZoomTool", "id": "4b700838-67fd-4416-bcaa-7843e604183b", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "202260e2-52f8-4a2d-945c-9a7e503aa7eb"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "e5dad4cd-9a68-4d42-be49-c19fc2a4e1c3"}}}, {"type": "PanTool", "id": "0168c933-df43-4fd3-8e43-a808d577bfd2", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e5dad4cd-9a68-4d42-be49-c19fc2a4e1c3"}}}, {"type": "ResetTool", "id": "6000ce69-eadc-460d-b45c-bee0b7f4d4bf", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e5dad4cd-9a68-4d42-be49-c19fc2a4e1c3"}}}, {"type": "ToolEvents", "id": "d5111fd9-0998-4adf-9785-6a9377119604", "attributes": {}}, {"type": "CircleCross", "id": "2aedd405-369a-4189-9964-31352a2ebed1", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ColumnDataSource", "id": "90dd7027-8cb2-4338-91c5-81edb3c4d487", "attributes": {"data": {"x": [1, 2, 3], "y": [4, 5, 6]}, "column_names": ["y", "x"], "callback": null}}, {"type": "DataRange1d", "id": "d0c8bfb2-50f6-4d13-94cd-3d913b99deac", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "7e6f75bc-c4df-4223-9e13-98c5d24593ec", "attributes": {}}, {"type": "BasicTicker", "id": "c95357f1-78ea-4235-a740-456ff68bc3c0", "attributes": {}}, {"type": "ResizeTool", "id": "b5436b47-b4d4-45cd-9eab-10c24b07c6c6", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e5dad4cd-9a68-4d42-be49-c19fc2a4e1c3"}}}, {"type": "PreviewSaveTool", "id": "720b2f0b-f94c-47b4-9070-0568e8a6d57b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "e5dad4cd-9a68-4d42-be49-c19fc2a4e1c3"}}}, {"type": "BasicTickFormatter", "id": "ce27877b-398a-4719-a130-f8714107aa15", "attributes": {}}], "root_ids": ["e5dad4cd-9a68-4d42-be49-c19fc2a4e1c3"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "43febb6f-1c29-44be-8384-076c80ea1f9f", "modelid": "e5dad4cd-9a68-4d42-be49-c19fc2a4e1c3", "elementid": "937b18e9-7387-4754-b240-1c56a80e50d7"}];
          
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