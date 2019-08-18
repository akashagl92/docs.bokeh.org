
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
  };var element = document.getElementById("ae9f9676-b8fa-46d8-8cae-5b97ef6801b6");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ae9f9676-b8fa-46d8-8cae-5b97ef6801b6' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"9a296384-0b08-4702-a01d-8ef0086572a4": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "DataRange1d", "id": "191f0f61-3a13-49d0-9cde-71da3379a9fa", "attributes": {"callback": null}}, {"type": "PanTool", "id": "a23839a5-11ea-45b4-8289-439d9b9910a3", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "ca38c607-d4a0-4009-9eed-935112549c65"}}}, {"type": "ToolEvents", "id": "f7a177ed-2cde-4360-9d9f-23903240ab98", "attributes": {}}, {"type": "BoxAnnotation", "id": "c494d9b3-6f61-48ce-b97e-d465e6a03594", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Grid", "id": "470c35ff-eea8-4b2c-955a-f60d7e64a5cc", "attributes": {"ticker": {"type": "BasicTicker", "id": "a6e2b313-9833-4f7f-843e-0822a6883937"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "ca38c607-d4a0-4009-9eed-935112549c65"}}}, {"type": "ResetTool", "id": "d5adbd2a-8750-4851-9644-653db8b13d20", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "ca38c607-d4a0-4009-9eed-935112549c65"}}}, {"type": "ColumnDataSource", "id": "a3b95364-49a1-4fb6-ba03-c901df929694", "attributes": {"data": {"line_color": ["firebrick", "navy"], "ys": [[2, 1, 4], [4, 7, 8, 5]], "line_alpha": [0.8, 0.3], "xs": [[1, 3, 2], [3, 4, 6, 6]]}, "column_names": ["ys", "xs", "line_color", "line_alpha"], "callback": null}}, {"type": "Plot", "id": "ca38c607-d4a0-4009-9eed-935112549c65", "attributes": {"tools": [{"type": "PanTool", "id": "a23839a5-11ea-45b4-8289-439d9b9910a3"}, {"type": "WheelZoomTool", "id": "852c277c-5690-4eec-bdac-a5ffc70011fb"}, {"type": "BoxZoomTool", "id": "3b808c65-bbcd-4ed7-bb26-5e3b85fc784f"}, {"type": "PreviewSaveTool", "id": "3976bc12-ee5e-4beb-9c71-4a5b5f1de85b"}, {"type": "ResizeTool", "id": "70497fe6-9b13-4240-8eea-c25c8e5eee21"}, {"type": "ResetTool", "id": "d5adbd2a-8750-4851-9644-653db8b13d20"}, {"type": "HelpTool", "id": "8aa01814-84fd-47b3-b20f-34e454d6a24e"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "bf9d0294-2a06-4b93-9ec7-5068d0774fc8"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "c519be80-6fc4-47d1-a6cd-6160e9d0d14a"}, {"type": "Grid", "id": "470c35ff-eea8-4b2c-955a-f60d7e64a5cc"}, {"type": "LinearAxis", "id": "abc81fa9-df14-4cdc-9643-18e77b788af8"}, {"type": "Grid", "id": "9d876a34-9972-4e44-b1a8-ac7a7ba6723d"}, {"type": "BoxAnnotation", "id": "c494d9b3-6f61-48ce-b97e-d465e6a03594"}, {"type": "GlyphRenderer", "id": "5a473bde-f0ed-4598-b154-cb96ada168cc"}], "left": [{"type": "LinearAxis", "id": "abc81fa9-df14-4cdc-9643-18e77b788af8"}], "below": [{"type": "LinearAxis", "id": "c519be80-6fc4-47d1-a6cd-6160e9d0d14a"}], "tool_events": {"type": "ToolEvents", "id": "f7a177ed-2cde-4360-9d9f-23903240ab98"}, "x_range": {"type": "DataRange1d", "id": "191f0f61-3a13-49d0-9cde-71da3379a9fa"}}, "subtype": "Figure"}, {"type": "GlyphRenderer", "id": "5a473bde-f0ed-4598-b154-cb96ada168cc", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "a3b95364-49a1-4fb6-ba03-c901df929694"}, "nonselection_glyph": {"type": "MultiLine", "id": "a6df474c-769a-4b96-a2d0-98d0d774c1d9"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "MultiLine", "id": "d052afb0-370f-4333-b838-b65e0ed6a3d3"}}}, {"type": "Grid", "id": "9d876a34-9972-4e44-b1a8-ac7a7ba6723d", "attributes": {"ticker": {"type": "BasicTicker", "id": "3a3a3421-3fb4-4678-a9b1-bc37d3c9fe40"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "ca38c607-d4a0-4009-9eed-935112549c65"}}}, {"type": "LinearAxis", "id": "c519be80-6fc4-47d1-a6cd-6160e9d0d14a", "attributes": {"ticker": {"type": "BasicTicker", "id": "a6e2b313-9833-4f7f-843e-0822a6883937"}, "formatter": {"type": "BasicTickFormatter", "id": "8f95d368-4a97-49f1-a21e-d0f721d9f85b"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "ca38c607-d4a0-4009-9eed-935112549c65"}}}, {"type": "MultiLine", "id": "a6df474c-769a-4b96-a2d0-98d0d774c1d9", "attributes": {"line_color": {"value": "#1f77b4"}, "ys": {"field": "ys"}, "line_width": {"value": 4}, "line_alpha": {"value": 0.1}, "xs": {"field": "xs"}}}, {"type": "BasicTickFormatter", "id": "8f95d368-4a97-49f1-a21e-d0f721d9f85b", "attributes": {}}, {"type": "ResizeTool", "id": "70497fe6-9b13-4240-8eea-c25c8e5eee21", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "ca38c607-d4a0-4009-9eed-935112549c65"}}}, {"type": "PreviewSaveTool", "id": "3976bc12-ee5e-4beb-9c71-4a5b5f1de85b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "ca38c607-d4a0-4009-9eed-935112549c65"}}}, {"type": "DataRange1d", "id": "bf9d0294-2a06-4b93-9ec7-5068d0774fc8", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "3a3a3421-3fb4-4678-a9b1-bc37d3c9fe40", "attributes": {}}, {"type": "BoxZoomTool", "id": "3b808c65-bbcd-4ed7-bb26-5e3b85fc784f", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "c494d9b3-6f61-48ce-b97e-d465e6a03594"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "ca38c607-d4a0-4009-9eed-935112549c65"}}}, {"type": "LinearAxis", "id": "abc81fa9-df14-4cdc-9643-18e77b788af8", "attributes": {"ticker": {"type": "BasicTicker", "id": "3a3a3421-3fb4-4678-a9b1-bc37d3c9fe40"}, "formatter": {"type": "BasicTickFormatter", "id": "39f2f1a0-91a2-40ad-a7ca-a04d28317367"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "ca38c607-d4a0-4009-9eed-935112549c65"}}}, {"type": "BasicTickFormatter", "id": "39f2f1a0-91a2-40ad-a7ca-a04d28317367", "attributes": {}}, {"type": "MultiLine", "id": "d052afb0-370f-4333-b838-b65e0ed6a3d3", "attributes": {"line_color": {"field": "line_color"}, "ys": {"field": "ys"}, "line_width": {"value": 4}, "line_alpha": {"field": "line_alpha"}, "xs": {"field": "xs"}}}, {"type": "BasicTicker", "id": "a6e2b313-9833-4f7f-843e-0822a6883937", "attributes": {}}, {"type": "HelpTool", "id": "8aa01814-84fd-47b3-b20f-34e454d6a24e", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "ca38c607-d4a0-4009-9eed-935112549c65"}}}, {"type": "WheelZoomTool", "id": "852c277c-5690-4eec-bdac-a5ffc70011fb", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "ca38c607-d4a0-4009-9eed-935112549c65"}}}], "root_ids": ["ca38c607-d4a0-4009-9eed-935112549c65"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "9a296384-0b08-4702-a01d-8ef0086572a4", "modelid": "ca38c607-d4a0-4009-9eed-935112549c65", "elementid": "ae9f9676-b8fa-46d8-8cae-5b97ef6801b6"}];
          
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