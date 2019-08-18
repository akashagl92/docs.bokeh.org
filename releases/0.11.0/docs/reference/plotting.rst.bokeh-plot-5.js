
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
  };var element = document.getElementById("c322524c-f8c7-4024-9248-3fb86b86632f");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c322524c-f8c7-4024-9248-3fb86b86632f' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"150a40fe-0aee-4556-81ac-2dd8ecd8f4d6": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "HelpTool", "id": "4b4e0ca2-f8ca-4551-841d-c9c605d98c6c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3f142e6c-baa6-439d-b773-d4e9b50aa612"}}}, {"type": "ToolEvents", "id": "2f1ab846-1d59-4451-a69c-8ffe27d3d7dc", "attributes": {}}, {"type": "ResizeTool", "id": "0565237f-af56-4f11-a87f-20e923f9e199", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3f142e6c-baa6-439d-b773-d4e9b50aa612"}}}, {"type": "BoxZoomTool", "id": "e1ae717a-bde9-4f23-b692-1ffa397b5c49", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "bbeb9695-843c-4800-9d0c-952a5ade5a9f"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "3f142e6c-baa6-439d-b773-d4e9b50aa612"}}}, {"type": "LinearAxis", "id": "918e00bb-8ddb-44dc-ae8a-557fd80aa4d5", "attributes": {"ticker": {"type": "BasicTicker", "id": "9713a08a-995d-4956-ac11-0fa18a7d9f56"}, "formatter": {"type": "BasicTickFormatter", "id": "0ea61d07-4aaa-439b-82aa-c77cd8721977"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "3f142e6c-baa6-439d-b773-d4e9b50aa612"}}}, {"type": "GlyphRenderer", "id": "e47f1515-3001-418b-89ca-0f0876106c52", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "8c181100-9c9f-4a9a-bd35-17cfd20472f1"}, "nonselection_glyph": {"type": "Cross", "id": "e77cbfdf-6b76-44a7-9c23-1e82d2c88d89"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Cross", "id": "3578dd8b-8fdb-40c3-8278-c08971bff74d"}}}, {"type": "ResetTool", "id": "23960189-166f-45a5-9722-63615b6fa674", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3f142e6c-baa6-439d-b773-d4e9b50aa612"}}}, {"type": "Cross", "id": "3578dd8b-8fdb-40c3-8278-c08971bff74d", "attributes": {"line_color": {"value": "#E6550D"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "fill_color": {"value": "#E6550D"}}}, {"type": "PanTool", "id": "50a6ce17-fe22-4b59-9377-41829b0a1af4", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3f142e6c-baa6-439d-b773-d4e9b50aa612"}}}, {"type": "LinearAxis", "id": "a6f2f565-d679-4d80-aa33-1b3c5d88fd71", "attributes": {"ticker": {"type": "BasicTicker", "id": "d6c962b5-bd2f-4806-888a-0558b19b433b"}, "formatter": {"type": "BasicTickFormatter", "id": "5a904f4f-6291-4501-9e02-c19e99696718"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "3f142e6c-baa6-439d-b773-d4e9b50aa612"}}}, {"type": "BasicTicker", "id": "9713a08a-995d-4956-ac11-0fa18a7d9f56", "attributes": {}}, {"type": "Cross", "id": "e77cbfdf-6b76-44a7-9c23-1e82d2c88d89", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "WheelZoomTool", "id": "1aee9f76-0599-4128-905f-9ab676080fbf", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3f142e6c-baa6-439d-b773-d4e9b50aa612"}}}, {"type": "Plot", "id": "3f142e6c-baa6-439d-b773-d4e9b50aa612", "attributes": {"tools": [{"type": "PanTool", "id": "50a6ce17-fe22-4b59-9377-41829b0a1af4"}, {"type": "WheelZoomTool", "id": "1aee9f76-0599-4128-905f-9ab676080fbf"}, {"type": "BoxZoomTool", "id": "e1ae717a-bde9-4f23-b692-1ffa397b5c49"}, {"type": "PreviewSaveTool", "id": "7259442d-6ff5-48f1-84a2-2f8521bfc69a"}, {"type": "ResizeTool", "id": "0565237f-af56-4f11-a87f-20e923f9e199"}, {"type": "ResetTool", "id": "23960189-166f-45a5-9722-63615b6fa674"}, {"type": "HelpTool", "id": "4b4e0ca2-f8ca-4551-841d-c9c605d98c6c"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "f98bf3cc-a073-49e4-aa92-9447e7986eae"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "918e00bb-8ddb-44dc-ae8a-557fd80aa4d5"}, {"type": "Grid", "id": "5745ca76-2d37-4a3f-b075-f04cb958e822"}, {"type": "LinearAxis", "id": "a6f2f565-d679-4d80-aa33-1b3c5d88fd71"}, {"type": "Grid", "id": "5b37a14f-fd01-470b-a90c-2f5590d7a3db"}, {"type": "BoxAnnotation", "id": "bbeb9695-843c-4800-9d0c-952a5ade5a9f"}, {"type": "GlyphRenderer", "id": "e47f1515-3001-418b-89ca-0f0876106c52"}], "left": [{"type": "LinearAxis", "id": "a6f2f565-d679-4d80-aa33-1b3c5d88fd71"}], "below": [{"type": "LinearAxis", "id": "918e00bb-8ddb-44dc-ae8a-557fd80aa4d5"}], "tool_events": {"type": "ToolEvents", "id": "2f1ab846-1d59-4451-a69c-8ffe27d3d7dc"}, "x_range": {"type": "DataRange1d", "id": "bb0b6c50-fdd9-4754-96d9-017dd1ec43ed"}}, "subtype": "Figure"}, {"type": "BasicTickFormatter", "id": "5a904f4f-6291-4501-9e02-c19e99696718", "attributes": {}}, {"type": "Grid", "id": "5745ca76-2d37-4a3f-b075-f04cb958e822", "attributes": {"ticker": {"type": "BasicTicker", "id": "9713a08a-995d-4956-ac11-0fa18a7d9f56"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "3f142e6c-baa6-439d-b773-d4e9b50aa612"}}}, {"type": "DataRange1d", "id": "bb0b6c50-fdd9-4754-96d9-017dd1ec43ed", "attributes": {"callback": null}}, {"type": "BoxAnnotation", "id": "bbeb9695-843c-4800-9d0c-952a5ade5a9f", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "d6c962b5-bd2f-4806-888a-0558b19b433b", "attributes": {}}, {"type": "DataRange1d", "id": "f98bf3cc-a073-49e4-aa92-9447e7986eae", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "0ea61d07-4aaa-439b-82aa-c77cd8721977", "attributes": {}}, {"type": "ColumnDataSource", "id": "8c181100-9c9f-4a9a-bd35-17cfd20472f1", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["x", "y"], "callback": null}}, {"type": "PreviewSaveTool", "id": "7259442d-6ff5-48f1-84a2-2f8521bfc69a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3f142e6c-baa6-439d-b773-d4e9b50aa612"}}}, {"type": "Grid", "id": "5b37a14f-fd01-470b-a90c-2f5590d7a3db", "attributes": {"ticker": {"type": "BasicTicker", "id": "d6c962b5-bd2f-4806-888a-0558b19b433b"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "3f142e6c-baa6-439d-b773-d4e9b50aa612"}}}], "root_ids": ["3f142e6c-baa6-439d-b773-d4e9b50aa612"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "150a40fe-0aee-4556-81ac-2dd8ecd8f4d6", "modelid": "3f142e6c-baa6-439d-b773-d4e9b50aa612", "elementid": "c322524c-f8c7-4024-9248-3fb86b86632f"}];
          
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