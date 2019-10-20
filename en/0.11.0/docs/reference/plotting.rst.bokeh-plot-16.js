
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
  };var element = document.getElementById("827ad41d-0965-4707-8cd1-8e8a2d33fe4f");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '827ad41d-0965-4707-8cd1-8e8a2d33fe4f' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"7c6b0ea7-cca5-4673-851e-0526ab1c2619": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "PanTool", "id": "2fc65631-3932-4851-b892-2df3de9e4f0b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a1832531-1aad-4c6a-a3d9-9b3da6d164fc"}}}, {"type": "GlyphRenderer", "id": "623b5363-4dd7-4af4-8752-437e258665d7", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "958c5581-dc02-48e8-a96e-df517f1069b2"}, "nonselection_glyph": {"type": "Rect", "id": "9eb12e89-f550-4f8e-800c-2618ac2633cd"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "03e0d151-9468-4c0a-a48a-b9e4473e39a1"}}}, {"type": "LinearAxis", "id": "d769d69c-d4da-4d46-ae03-18bb92a6c7d6", "attributes": {"ticker": {"type": "BasicTicker", "id": "239363fc-7536-44ba-afbf-f760a8693f07"}, "formatter": {"type": "BasicTickFormatter", "id": "5307a0de-24d5-4ca9-a5bb-81f55bef93c1"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a1832531-1aad-4c6a-a3d9-9b3da6d164fc"}}}, {"type": "ResetTool", "id": "eb89eca1-e4d8-447e-814a-d8a1ad31279e", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a1832531-1aad-4c6a-a3d9-9b3da6d164fc"}}}, {"type": "BasicTickFormatter", "id": "5307a0de-24d5-4ca9-a5bb-81f55bef93c1", "attributes": {}}, {"type": "HelpTool", "id": "70f28467-4d3f-4c14-bcf8-b42d09b59186", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a1832531-1aad-4c6a-a3d9-9b3da6d164fc"}}}, {"type": "ResizeTool", "id": "15a23d23-aa22-4d58-8969-65dd2fb3856a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a1832531-1aad-4c6a-a3d9-9b3da6d164fc"}}}, {"type": "DataRange1d", "id": "a8a36dcd-f60d-4f3a-b85c-941bef5f7a68", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "cfd7b216-4d13-4110-9892-4e639dc1b9cc", "attributes": {}}, {"type": "BasicTicker", "id": "239363fc-7536-44ba-afbf-f760a8693f07", "attributes": {}}, {"type": "WheelZoomTool", "id": "db82dca0-0ad4-40a0-90eb-c1620283392f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a1832531-1aad-4c6a-a3d9-9b3da6d164fc"}}}, {"type": "Grid", "id": "ff0a861a-777d-466f-b97d-6ba07c63359b", "attributes": {"ticker": {"type": "BasicTicker", "id": "239363fc-7536-44ba-afbf-f760a8693f07"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "a1832531-1aad-4c6a-a3d9-9b3da6d164fc"}}}, {"type": "Grid", "id": "5c5f83d9-288e-445f-bf50-8cf106bf4050", "attributes": {"ticker": {"type": "BasicTicker", "id": "cfd7b216-4d13-4110-9892-4e639dc1b9cc"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a1832531-1aad-4c6a-a3d9-9b3da6d164fc"}}}, {"type": "PreviewSaveTool", "id": "c14c14ed-b6b5-4afc-b9ca-899cc06c42e7", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a1832531-1aad-4c6a-a3d9-9b3da6d164fc"}}}, {"type": "Rect", "id": "03e0d151-9468-4c0a-a48a-b9e4473e39a1", "attributes": {"line_color": {"value": "#CAB2D6"}, "width": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "height": {"value": 20, "units": "screen"}, "x": {"field": "x"}, "fill_color": {"value": "#CAB2D6"}}}, {"type": "ToolEvents", "id": "acdad639-af08-4fa1-9679-86ef4ea27c65", "attributes": {}}, {"type": "Rect", "id": "9eb12e89-f550-4f8e-800c-2618ac2633cd", "attributes": {"line_color": {"value": "#1f77b4"}, "width": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "height": {"value": 20, "units": "screen"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "LinearAxis", "id": "d5b8c657-dc0f-4f8d-9cca-89d0f77ff57b", "attributes": {"ticker": {"type": "BasicTicker", "id": "cfd7b216-4d13-4110-9892-4e639dc1b9cc"}, "formatter": {"type": "BasicTickFormatter", "id": "8b2de503-1c24-41d9-9ed7-448ac0581c8e"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a1832531-1aad-4c6a-a3d9-9b3da6d164fc"}}}, {"type": "Plot", "id": "a1832531-1aad-4c6a-a3d9-9b3da6d164fc", "attributes": {"tools": [{"type": "PanTool", "id": "2fc65631-3932-4851-b892-2df3de9e4f0b"}, {"type": "WheelZoomTool", "id": "db82dca0-0ad4-40a0-90eb-c1620283392f"}, {"type": "BoxZoomTool", "id": "92ec2683-905b-4d28-9f80-7bbc12af24cc"}, {"type": "PreviewSaveTool", "id": "c14c14ed-b6b5-4afc-b9ca-899cc06c42e7"}, {"type": "ResizeTool", "id": "15a23d23-aa22-4d58-8969-65dd2fb3856a"}, {"type": "ResetTool", "id": "eb89eca1-e4d8-447e-814a-d8a1ad31279e"}, {"type": "HelpTool", "id": "70f28467-4d3f-4c14-bcf8-b42d09b59186"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "b28e0036-486b-47eb-b42f-0db9d8dc38a0"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "d5b8c657-dc0f-4f8d-9cca-89d0f77ff57b"}, {"type": "Grid", "id": "5c5f83d9-288e-445f-bf50-8cf106bf4050"}, {"type": "LinearAxis", "id": "d769d69c-d4da-4d46-ae03-18bb92a6c7d6"}, {"type": "Grid", "id": "ff0a861a-777d-466f-b97d-6ba07c63359b"}, {"type": "BoxAnnotation", "id": "7a84a67d-9222-4936-bf0e-3cc29ed26b2c"}, {"type": "GlyphRenderer", "id": "623b5363-4dd7-4af4-8752-437e258665d7"}], "left": [{"type": "LinearAxis", "id": "d769d69c-d4da-4d46-ae03-18bb92a6c7d6"}], "below": [{"type": "LinearAxis", "id": "d5b8c657-dc0f-4f8d-9cca-89d0f77ff57b"}], "tool_events": {"type": "ToolEvents", "id": "acdad639-af08-4fa1-9679-86ef4ea27c65"}, "x_range": {"type": "DataRange1d", "id": "a8a36dcd-f60d-4f3a-b85c-941bef5f7a68"}}, "subtype": "Figure"}, {"type": "BoxZoomTool", "id": "92ec2683-905b-4d28-9f80-7bbc12af24cc", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "7a84a67d-9222-4936-bf0e-3cc29ed26b2c"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a1832531-1aad-4c6a-a3d9-9b3da6d164fc"}}}, {"type": "DataRange1d", "id": "b28e0036-486b-47eb-b42f-0db9d8dc38a0", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "8b2de503-1c24-41d9-9ed7-448ac0581c8e", "attributes": {}}, {"type": "BoxAnnotation", "id": "7a84a67d-9222-4936-bf0e-3cc29ed26b2c", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ColumnDataSource", "id": "958c5581-dc02-48e8-a96e-df517f1069b2", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["y", "x"], "callback": null}}], "root_ids": ["a1832531-1aad-4c6a-a3d9-9b3da6d164fc"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "7c6b0ea7-cca5-4673-851e-0526ab1c2619", "modelid": "a1832531-1aad-4c6a-a3d9-9b3da6d164fc", "elementid": "827ad41d-0965-4707-8cd1-8e8a2d33fe4f"}];
          
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