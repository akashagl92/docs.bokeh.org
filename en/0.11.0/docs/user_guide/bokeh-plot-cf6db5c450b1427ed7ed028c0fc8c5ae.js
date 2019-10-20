
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
  };var element = document.getElementById("0ddb1dea-82d8-45e6-841e-e4fd42420eb2");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0ddb1dea-82d8-45e6-841e-e4fd42420eb2' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"b947d0ac-ba55-4aaf-9db0-5f4c026f7d2d": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Grid", "id": "e48a82fc-9b33-46d4-be23-9d10205cdbae", "attributes": {"ticker": {"type": "BasicTicker", "id": "a00343a0-e1ed-4ae3-8769-5f0e88253dff"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b1913a85-7115-4751-b32b-422746b7436c"}}}, {"type": "Plot", "id": "b1913a85-7115-4751-b32b-422746b7436c", "attributes": {"tools": [{"type": "PanTool", "id": "39c66e51-3bf7-4163-a0b3-6ac858ac19ca"}, {"type": "WheelZoomTool", "id": "d10d2fa1-d07a-4b33-964b-5434af5b45f0"}, {"type": "BoxZoomTool", "id": "96545489-7e5d-4bb0-85f3-911a2fecebad"}, {"type": "PreviewSaveTool", "id": "fb94865e-6c11-4fd4-9b05-6963e5013f34"}, {"type": "ResizeTool", "id": "bfa072bc-a9f0-47e6-99cd-a8706b1bd3cd"}, {"type": "ResetTool", "id": "e67e0203-b272-4ae2-a3d3-a695b4903a6b"}, {"type": "HelpTool", "id": "ca2eadd7-7e56-4ee0-84f5-a6df40159e00"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "f5c8563a-fec5-4797-95be-501a41198831"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "5b24991c-696e-4b1e-868c-ab66394db9c7"}, {"type": "Grid", "id": "e48a82fc-9b33-46d4-be23-9d10205cdbae"}, {"type": "LinearAxis", "id": "0ced810a-e89c-4e82-97c4-b760eb1fa445"}, {"type": "Grid", "id": "eb4b2da2-7286-4d59-82f1-afae28bd72be"}, {"type": "BoxAnnotation", "id": "f9e762c0-fa0d-4668-b00c-d4b592fe9e70"}, {"type": "GlyphRenderer", "id": "b3b974b5-1337-48c6-9184-d56965b2bdb5"}], "left": [{"type": "LinearAxis", "id": "0ced810a-e89c-4e82-97c4-b760eb1fa445"}], "below": [{"type": "LinearAxis", "id": "5b24991c-696e-4b1e-868c-ab66394db9c7"}], "tool_events": {"type": "ToolEvents", "id": "75f6d737-49ea-47f8-9bb7-601ffb7238a4"}, "x_range": {"type": "DataRange1d", "id": "e228d6c6-1f03-4792-abb9-5131f3fde9a0"}}, "subtype": "Figure"}, {"type": "DataRange1d", "id": "e228d6c6-1f03-4792-abb9-5131f3fde9a0", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "b3b974b5-1337-48c6-9184-d56965b2bdb5", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "7a4cf337-c451-42c3-a26f-f08512a15210"}, "nonselection_glyph": {"type": "Segment", "id": "9b919eed-f977-4f49-b14f-02ed0d70d5bb"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Segment", "id": "88ad73a5-eb2e-42d8-b71c-17cf96132e1f"}}}, {"type": "Segment", "id": "88ad73a5-eb2e-42d8-b71c-17cf96132e1f", "attributes": {"line_color": {"value": "#F4A582"}, "line_width": {"value": 3}, "x1": {"field": "x1"}, "x0": {"field": "x0"}, "y1": {"field": "y1"}, "y0": {"field": "y0"}}}, {"type": "HelpTool", "id": "ca2eadd7-7e56-4ee0-84f5-a6df40159e00", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "b1913a85-7115-4751-b32b-422746b7436c"}}}, {"type": "ToolEvents", "id": "75f6d737-49ea-47f8-9bb7-601ffb7238a4", "attributes": {}}, {"type": "PreviewSaveTool", "id": "fb94865e-6c11-4fd4-9b05-6963e5013f34", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "b1913a85-7115-4751-b32b-422746b7436c"}}}, {"type": "BasicTickFormatter", "id": "4bf04f8e-0979-4aa7-b30e-6a78b3536b43", "attributes": {}}, {"type": "Segment", "id": "9b919eed-f977-4f49-b14f-02ed0d70d5bb", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 3}, "x1": {"field": "x1"}, "y0": {"field": "y0"}, "y1": {"field": "y1"}, "line_alpha": {"value": 0.1}, "x0": {"field": "x0"}}}, {"type": "ResizeTool", "id": "bfa072bc-a9f0-47e6-99cd-a8706b1bd3cd", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "b1913a85-7115-4751-b32b-422746b7436c"}}}, {"type": "LinearAxis", "id": "0ced810a-e89c-4e82-97c4-b760eb1fa445", "attributes": {"ticker": {"type": "BasicTicker", "id": "8b7f3fcc-eaca-4321-8554-f947119a20a0"}, "formatter": {"type": "BasicTickFormatter", "id": "4bf04f8e-0979-4aa7-b30e-6a78b3536b43"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b1913a85-7115-4751-b32b-422746b7436c"}}}, {"type": "BoxZoomTool", "id": "96545489-7e5d-4bb0-85f3-911a2fecebad", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "f9e762c0-fa0d-4668-b00c-d4b592fe9e70"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b1913a85-7115-4751-b32b-422746b7436c"}}}, {"type": "BasicTicker", "id": "8b7f3fcc-eaca-4321-8554-f947119a20a0", "attributes": {}}, {"type": "WheelZoomTool", "id": "d10d2fa1-d07a-4b33-964b-5434af5b45f0", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "b1913a85-7115-4751-b32b-422746b7436c"}}}, {"type": "LinearAxis", "id": "5b24991c-696e-4b1e-868c-ab66394db9c7", "attributes": {"ticker": {"type": "BasicTicker", "id": "a00343a0-e1ed-4ae3-8769-5f0e88253dff"}, "formatter": {"type": "BasicTickFormatter", "id": "03a13d66-71f5-4f21-b404-4bc8599a2e05"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b1913a85-7115-4751-b32b-422746b7436c"}}}, {"type": "ColumnDataSource", "id": "7a4cf337-c451-42c3-a26f-f08512a15210", "attributes": {"data": {"x1": [1.2, 2.4, 3.1], "y0": [1, 2, 3], "x0": [1, 2, 3], "y1": [1.2, 2.5, 3.7]}, "column_names": ["x1", "x0", "y1", "y0"], "callback": null}}, {"type": "BasicTicker", "id": "a00343a0-e1ed-4ae3-8769-5f0e88253dff", "attributes": {}}, {"type": "BasicTickFormatter", "id": "03a13d66-71f5-4f21-b404-4bc8599a2e05", "attributes": {}}, {"type": "BoxAnnotation", "id": "f9e762c0-fa0d-4668-b00c-d4b592fe9e70", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ResetTool", "id": "e67e0203-b272-4ae2-a3d3-a695b4903a6b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "b1913a85-7115-4751-b32b-422746b7436c"}}}, {"type": "Grid", "id": "eb4b2da2-7286-4d59-82f1-afae28bd72be", "attributes": {"ticker": {"type": "BasicTicker", "id": "8b7f3fcc-eaca-4321-8554-f947119a20a0"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "b1913a85-7115-4751-b32b-422746b7436c"}}}, {"type": "PanTool", "id": "39c66e51-3bf7-4163-a0b3-6ac858ac19ca", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "b1913a85-7115-4751-b32b-422746b7436c"}}}, {"type": "DataRange1d", "id": "f5c8563a-fec5-4797-95be-501a41198831", "attributes": {"callback": null}}], "root_ids": ["b1913a85-7115-4751-b32b-422746b7436c"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "b947d0ac-ba55-4aaf-9db0-5f4c026f7d2d", "modelid": "b1913a85-7115-4751-b32b-422746b7436c", "elementid": "0ddb1dea-82d8-45e6-841e-e4fd42420eb2"}];
          
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