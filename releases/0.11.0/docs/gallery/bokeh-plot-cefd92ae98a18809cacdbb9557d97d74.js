
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
  };var element = document.getElementById("3031e33c-ae2b-4722-b30c-1341ce3d938b");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '3031e33c-ae2b-4722-b30c-1341ce3d938b' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"e91b4fc7-fd13-4b74-913e-7af122de35d8": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "HelpTool", "id": "ef01d97e-1cc2-46c3-bac7-e3649f9cbe9e", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "061e2f64-921a-46f9-a2df-1a5f4e2092db"}}}, {"type": "DataRange1d", "id": "cb5b2e38-8fe9-4869-9675-1a822e8fff9f", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "e664fd63-ad1e-4d01-8a2b-de0c70395754", "attributes": {}}, {"type": "WheelZoomTool", "id": "2c156ae9-02ec-4fab-acdb-eff8f129945a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "061e2f64-921a-46f9-a2df-1a5f4e2092db"}}}, {"type": "ToolEvents", "id": "1240f3cb-2c3d-456a-9895-c521c69d42c2", "attributes": {}}, {"type": "Circle", "id": "34566afe-5e17-4ad5-84b6-d07b72db4747", "attributes": {"line_color": {"field": "line_color"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "fill_color": {"field": "fill_color"}, "fill_alpha": {"value": 0.2}}}, {"type": "ResizeTool", "id": "838a37d2-3332-4f7d-8c24-cafe1f5d6255", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "061e2f64-921a-46f9-a2df-1a5f4e2092db"}}}, {"type": "Plot", "id": "061e2f64-921a-46f9-a2df-1a5f4e2092db", "attributes": {"x_range": {"type": "DataRange1d", "id": "b4ad5883-d6c2-4277-a9b4-e2e5f37f5fe8"}, "left": [{"type": "LinearAxis", "id": "5855807d-8fe8-4c32-ac08-92a4e693509f"}], "renderers": [{"type": "LinearAxis", "id": "962cc044-1137-4af0-8a74-61843db9ba3c"}, {"type": "Grid", "id": "5ff99ac3-235d-4cb1-8b92-3c1a5643d902"}, {"type": "LinearAxis", "id": "5855807d-8fe8-4c32-ac08-92a4e693509f"}, {"type": "Grid", "id": "f7edcebf-1cc5-49d4-b10e-a84e93661dba"}, {"type": "BoxAnnotation", "id": "f76e8b6e-d3be-416e-9f14-d173dbd980c2"}, {"type": "GlyphRenderer", "id": "ef662de9-9976-49e1-8a30-5d102b0bbce2"}], "y_range": {"type": "DataRange1d", "id": "cb5b2e38-8fe9-4869-9675-1a822e8fff9f"}, "tools": [{"type": "PanTool", "id": "8f618261-42ff-4e41-aadb-d11f12487161"}, {"type": "WheelZoomTool", "id": "2c156ae9-02ec-4fab-acdb-eff8f129945a"}, {"type": "BoxZoomTool", "id": "8e86c7d7-6df8-4f29-833f-3eb0c6e55567"}, {"type": "PreviewSaveTool", "id": "fdc87022-60e2-4ba3-aa59-7201c75f6486"}, {"type": "ResizeTool", "id": "838a37d2-3332-4f7d-8c24-cafe1f5d6255"}, {"type": "ResetTool", "id": "4a832b59-73c3-4bec-a473-9bbfb567b3c1"}, {"type": "HelpTool", "id": "ef01d97e-1cc2-46c3-bac7-e3649f9cbe9e"}], "below": [{"type": "LinearAxis", "id": "962cc044-1137-4af0-8a74-61843db9ba3c"}], "tool_events": {"type": "ToolEvents", "id": "1240f3cb-2c3d-456a-9895-c521c69d42c2"}, "title": "Iris Morphology"}, "subtype": "Figure"}, {"type": "LinearAxis", "id": "962cc044-1137-4af0-8a74-61843db9ba3c", "attributes": {"ticker": {"type": "BasicTicker", "id": "e664fd63-ad1e-4d01-8a2b-de0c70395754"}, "formatter": {"type": "BasicTickFormatter", "id": "8be9162c-f90f-4f67-af1b-312538abad1b"}, "axis_label": "Petal Length", "plot": {"type": "Plot", "subtype": "Figure", "id": "061e2f64-921a-46f9-a2df-1a5f4e2092db"}}}, {"type": "BoxZoomTool", "id": "8e86c7d7-6df8-4f29-833f-3eb0c6e55567", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "f76e8b6e-d3be-416e-9f14-d173dbd980c2"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "061e2f64-921a-46f9-a2df-1a5f4e2092db"}}}, {"type": "BasicTickFormatter", "id": "d391e3af-efb9-49d8-bc45-5589f50d15fc", "attributes": {}}, {"type": "BasicTicker", "id": "9803b89e-4281-4bf5-be6f-a5127f007172", "attributes": {}}, {"type": "DataRange1d", "id": "b4ad5883-d6c2-4277-a9b4-e2e5f37f5fe8", "attributes": {"callback": null}}, {"type": "ResetTool", "id": "4a832b59-73c3-4bec-a473-9bbfb567b3c1", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "061e2f64-921a-46f9-a2df-1a5f4e2092db"}}}, {"type": "GlyphRenderer", "id": "ef662de9-9976-49e1-8a30-5d102b0bbce2", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "a03af523-b56e-4e0c-8089-92113b72f0fd"}, "nonselection_glyph": {"type": "Circle", "id": "e244861e-376b-4637-957b-7c4009df12c7"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "34566afe-5e17-4ad5-84b6-d07b72db4747"}}}, {"type": "Circle", "id": "e244861e-376b-4637-957b-7c4009df12c7", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "BasicTickFormatter", "id": "8be9162c-f90f-4f67-af1b-312538abad1b", "attributes": {}}, {"type": "PreviewSaveTool", "id": "fdc87022-60e2-4ba3-aa59-7201c75f6486", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "061e2f64-921a-46f9-a2df-1a5f4e2092db"}}}, {"type": "Grid", "id": "f7edcebf-1cc5-49d4-b10e-a84e93661dba", "attributes": {"ticker": {"type": "BasicTicker", "id": "9803b89e-4281-4bf5-be6f-a5127f007172"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "061e2f64-921a-46f9-a2df-1a5f4e2092db"}}}, {"type": "BoxAnnotation", "id": "f76e8b6e-d3be-416e-9f14-d173dbd980c2", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "LinearAxis", "id": "5855807d-8fe8-4c32-ac08-92a4e693509f", "attributes": {"ticker": {"type": "BasicTicker", "id": "9803b89e-4281-4bf5-be6f-a5127f007172"}, "formatter": {"type": "BasicTickFormatter", "id": "d391e3af-efb9-49d8-bc45-5589f50d15fc"}, "axis_label": "Petal Width", "plot": {"type": "Plot", "subtype": "Figure", "id": "061e2f64-921a-46f9-a2df-1a5f4e2092db"}}}, {"type": "ColumnDataSource", "id": "a03af523-b56e-4e0c-8089-92113b72f0fd", "attributes": {"data": {"line_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"], "x": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "y": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8], "fill_color": ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"]}, "column_names": ["x", "y", "line_color", "fill_color"], "callback": null}}, {"type": "PanTool", "id": "8f618261-42ff-4e41-aadb-d11f12487161", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "061e2f64-921a-46f9-a2df-1a5f4e2092db"}}}, {"type": "Grid", "id": "5ff99ac3-235d-4cb1-8b92-3c1a5643d902", "attributes": {"ticker": {"type": "BasicTicker", "id": "e664fd63-ad1e-4d01-8a2b-de0c70395754"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "061e2f64-921a-46f9-a2df-1a5f4e2092db"}}}], "root_ids": ["061e2f64-921a-46f9-a2df-1a5f4e2092db"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "e91b4fc7-fd13-4b74-913e-7af122de35d8", "modelid": "061e2f64-921a-46f9-a2df-1a5f4e2092db", "elementid": "3031e33c-ae2b-4722-b30c-1341ce3d938b"}];
          
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