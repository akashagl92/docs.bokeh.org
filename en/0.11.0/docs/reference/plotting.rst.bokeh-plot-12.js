
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
  };var element = document.getElementById("5a761db7-ba44-4c91-a221-53735a9a985c");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5a761db7-ba44-4c91-a221-53735a9a985c' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"64f08ff6-859e-423e-94c0-6c18233f6ec7": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "HelpTool", "id": "98cdcc28-1369-44e8-87e5-3029b03d73f1", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f1d5a75d-0a96-4e42-a6e9-1f21e3f8c978"}}}, {"type": "DataRange1d", "id": "e443a2a6-2354-469d-8f92-e0d628cd99d8", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "dfd66265-9887-435c-bd7a-d7f5ee5b470f", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "562026dc-7438-48cb-8978-bef22c3fa341"}, "nonselection_glyph": {"type": "Patch", "id": "824f3243-d0d2-4572-9970-04ab6bab94e6"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Patch", "id": "9d46fa85-9ec9-4662-bafe-e289de77402a"}}}, {"type": "ResizeTool", "id": "47a42284-1e6d-4100-a5b7-0e8afd600905", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f1d5a75d-0a96-4e42-a6e9-1f21e3f8c978"}}}, {"type": "BasicTickFormatter", "id": "a8bf85f8-7404-4808-ae1f-42f434996ad4", "attributes": {}}, {"type": "Patch", "id": "824f3243-d0d2-4572-9970-04ab6bab94e6", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "LinearAxis", "id": "45808797-7a52-447c-adb9-a108dc316687", "attributes": {"ticker": {"type": "BasicTicker", "id": "591853bf-de61-4b00-b3a2-ab2c7cee52e3"}, "formatter": {"type": "BasicTickFormatter", "id": "a8bf85f8-7404-4808-ae1f-42f434996ad4"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "f1d5a75d-0a96-4e42-a6e9-1f21e3f8c978"}}}, {"type": "DataRange1d", "id": "e7cb35e2-4b34-4494-977f-f768b9682413", "attributes": {"callback": null}}, {"type": "ToolEvents", "id": "fdef96a8-a652-49f5-970c-b2bd52756aee", "attributes": {}}, {"type": "ResetTool", "id": "13f41afc-3887-49b4-87e5-3332aee72aa0", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f1d5a75d-0a96-4e42-a6e9-1f21e3f8c978"}}}, {"type": "PreviewSaveTool", "id": "3d695bdc-9e76-421b-9fdb-c298b2664005", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f1d5a75d-0a96-4e42-a6e9-1f21e3f8c978"}}}, {"type": "BoxAnnotation", "id": "16b5fc8a-c761-489b-910c-9a83ace2e354", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Patch", "id": "9d46fa85-9ec9-4662-bafe-e289de77402a", "attributes": {"line_color": {"value": "#99d8c9"}, "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#99d8c9"}}}, {"type": "BasicTicker", "id": "591853bf-de61-4b00-b3a2-ab2c7cee52e3", "attributes": {}}, {"type": "ColumnDataSource", "id": "562026dc-7438-48cb-8978-bef22c3fa341", "attributes": {"data": {"x": [1, 2, 3, 2], "y": [6, 7, 2, 2]}, "column_names": ["x", "y"], "callback": null}}, {"type": "PanTool", "id": "f96c8d8e-ed44-4b95-b2ca-03b5d1ea10c6", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f1d5a75d-0a96-4e42-a6e9-1f21e3f8c978"}}}, {"type": "WheelZoomTool", "id": "01b05891-0f92-49d6-ba79-a029ab34e2d8", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "f1d5a75d-0a96-4e42-a6e9-1f21e3f8c978"}}}, {"type": "BasicTicker", "id": "470754de-401f-4085-82dd-2bab84c4cd69", "attributes": {}}, {"type": "BasicTickFormatter", "id": "68c7ba92-25ff-4c27-8e60-80b21688dc77", "attributes": {}}, {"type": "Grid", "id": "6bea20db-3c84-4e52-8870-ba7826323448", "attributes": {"ticker": {"type": "BasicTicker", "id": "591853bf-de61-4b00-b3a2-ab2c7cee52e3"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "f1d5a75d-0a96-4e42-a6e9-1f21e3f8c978"}}}, {"type": "LinearAxis", "id": "8382ad34-6bc7-4fa1-a7ca-a861ac818dc3", "attributes": {"ticker": {"type": "BasicTicker", "id": "470754de-401f-4085-82dd-2bab84c4cd69"}, "formatter": {"type": "BasicTickFormatter", "id": "68c7ba92-25ff-4c27-8e60-80b21688dc77"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "f1d5a75d-0a96-4e42-a6e9-1f21e3f8c978"}}}, {"type": "Grid", "id": "6f3a86bb-5495-4964-8a57-4f136c0a173e", "attributes": {"ticker": {"type": "BasicTicker", "id": "470754de-401f-4085-82dd-2bab84c4cd69"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "f1d5a75d-0a96-4e42-a6e9-1f21e3f8c978"}}}, {"type": "Plot", "id": "f1d5a75d-0a96-4e42-a6e9-1f21e3f8c978", "attributes": {"tools": [{"type": "PanTool", "id": "f96c8d8e-ed44-4b95-b2ca-03b5d1ea10c6"}, {"type": "WheelZoomTool", "id": "01b05891-0f92-49d6-ba79-a029ab34e2d8"}, {"type": "BoxZoomTool", "id": "69189b1c-80e0-4c4a-80d0-7f168383a013"}, {"type": "PreviewSaveTool", "id": "3d695bdc-9e76-421b-9fdb-c298b2664005"}, {"type": "ResizeTool", "id": "47a42284-1e6d-4100-a5b7-0e8afd600905"}, {"type": "ResetTool", "id": "13f41afc-3887-49b4-87e5-3332aee72aa0"}, {"type": "HelpTool", "id": "98cdcc28-1369-44e8-87e5-3029b03d73f1"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "e443a2a6-2354-469d-8f92-e0d628cd99d8"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "8382ad34-6bc7-4fa1-a7ca-a861ac818dc3"}, {"type": "Grid", "id": "6f3a86bb-5495-4964-8a57-4f136c0a173e"}, {"type": "LinearAxis", "id": "45808797-7a52-447c-adb9-a108dc316687"}, {"type": "Grid", "id": "6bea20db-3c84-4e52-8870-ba7826323448"}, {"type": "BoxAnnotation", "id": "16b5fc8a-c761-489b-910c-9a83ace2e354"}, {"type": "GlyphRenderer", "id": "dfd66265-9887-435c-bd7a-d7f5ee5b470f"}], "left": [{"type": "LinearAxis", "id": "45808797-7a52-447c-adb9-a108dc316687"}], "below": [{"type": "LinearAxis", "id": "8382ad34-6bc7-4fa1-a7ca-a861ac818dc3"}], "tool_events": {"type": "ToolEvents", "id": "fdef96a8-a652-49f5-970c-b2bd52756aee"}, "x_range": {"type": "DataRange1d", "id": "e7cb35e2-4b34-4494-977f-f768b9682413"}}, "subtype": "Figure"}, {"type": "BoxZoomTool", "id": "69189b1c-80e0-4c4a-80d0-7f168383a013", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "16b5fc8a-c761-489b-910c-9a83ace2e354"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "f1d5a75d-0a96-4e42-a6e9-1f21e3f8c978"}}}], "root_ids": ["f1d5a75d-0a96-4e42-a6e9-1f21e3f8c978"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "64f08ff6-859e-423e-94c0-6c18233f6ec7", "modelid": "f1d5a75d-0a96-4e42-a6e9-1f21e3f8c978", "elementid": "5a761db7-ba44-4c91-a221-53735a9a985c"}];
          
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