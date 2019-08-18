
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
  };var element = document.getElementById("314db8dc-5b3d-4948-836c-23e468d74e4f");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '314db8dc-5b3d-4948-836c-23e468d74e4f' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"3b582324-7777-4525-ad43-64a868935e81": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "a7fe9e31-8c48-4503-b5ff-88d7664e44b1", "attributes": {}}, {"type": "Circle", "id": "d4dd1ba8-f692-4e1f-8b6b-d9be0bb947a8", "attributes": {"line_color": {"value": "olive"}, "x": {"field": "x"}, "size": {"value": 30, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "olive"}}}, {"type": "DataRange1d", "id": "b04e94aa-388f-4777-8c57-b5d928d7f008", "attributes": {"callback": null}}, {"type": "Segment", "id": "75d2d7c5-955d-4d6c-928f-41efa48f3b48", "attributes": {"line_color": {"value": "olive"}, "line_width": {"value": 3}, "x1": {"field": "x1"}, "y0": {"field": "y0"}, "y1": {"field": "y1"}, "line_alpha": {"value": 0.6}, "x0": {"field": "x0"}}}, {"type": "BasicTicker", "id": "2bd93c9b-4715-483b-9050-c15aab7ea4f9", "attributes": {}}, {"type": "ColumnDataSource", "id": "ec82e131-5ba3-403a-982b-974e5e02d3bd", "attributes": {"data": {"x1": [], "y0": [], "x0": [], "y1": []}, "column_names": ["x1", "y0", "x0", "y1"], "callback": null}}, {"type": "ColumnDataSource", "id": "0862e99e-ce83-4b19-a3b6-1c66c0b46334", "attributes": {"data": {"x": [2, 3, 5, 6, 8, 7], "y": [6, 4, 3, 8, 7, 5]}, "column_names": ["y", "x"], "callback": null}}, {"type": "Segment", "id": "665258ea-981a-4896-86f4-4545c0fc5daf", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 3}, "x1": {"field": "x1"}, "y0": {"field": "y0"}, "y1": {"field": "y1"}, "line_alpha": {"value": 0.1}, "x0": {"field": "x0"}}}, {"type": "BasicTicker", "id": "1604d991-93b9-4232-b4c8-0f521c212dc2", "attributes": {}}, {"type": "Plot", "id": "b190718c-9200-469d-bd18-0b322212b62c", "attributes": {"tools": [{"type": "HoverTool", "id": "a502ecc3-28dc-42c2-bfd4-dd92bf6c71f2"}], "plot_width": 400, "x_range": {"type": "DataRange1d", "id": "b04e94aa-388f-4777-8c57-b5d928d7f008"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "d0cce720-a0ed-40dc-9f20-d671b5b5f3ed"}, {"type": "Grid", "id": "e13eae16-8ee5-4636-b819-c8f3a75e5d63"}, {"type": "LinearAxis", "id": "ead426fa-624e-4653-92a5-716fd1602aae"}, {"type": "Grid", "id": "ebdd6494-806f-459d-9646-3506a971efa7"}, {"type": "GlyphRenderer", "id": "a89e00ad-ef4e-496f-a895-ea08ad080c3b"}, {"type": "GlyphRenderer", "id": "b84a1bef-428c-418e-aefd-7f26cac18623"}], "y_range": {"type": "DataRange1d", "id": "b032deb2-b614-4575-91fc-44204cd81179"}, "left": [{"type": "LinearAxis", "id": "ead426fa-624e-4653-92a5-716fd1602aae"}], "below": [{"type": "LinearAxis", "id": "d0cce720-a0ed-40dc-9f20-d671b5b5f3ed"}], "tool_events": {"type": "ToolEvents", "id": "08ab3ab7-50d5-442e-842e-5a313767cd03"}, "toolbar_location": null, "title": "Hover over points"}, "subtype": "Figure"}, {"type": "DataRange1d", "id": "b032deb2-b614-4575-91fc-44204cd81179", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "d0cce720-a0ed-40dc-9f20-d671b5b5f3ed", "attributes": {"ticker": {"type": "BasicTicker", "id": "2bd93c9b-4715-483b-9050-c15aab7ea4f9"}, "formatter": {"type": "BasicTickFormatter", "id": "dd1dd455-7b4e-4aae-bc99-c423fb16109e"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b190718c-9200-469d-bd18-0b322212b62c"}}}, {"type": "LinearAxis", "id": "ead426fa-624e-4653-92a5-716fd1602aae", "attributes": {"ticker": {"type": "BasicTicker", "id": "1604d991-93b9-4232-b4c8-0f521c212dc2"}, "formatter": {"type": "BasicTickFormatter", "id": "a7fe9e31-8c48-4503-b5ff-88d7664e44b1"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b190718c-9200-469d-bd18-0b322212b62c"}}}, {"type": "GlyphRenderer", "id": "b84a1bef-428c-418e-aefd-7f26cac18623", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "0862e99e-ce83-4b19-a3b6-1c66c0b46334"}, "nonselection_glyph": {"type": "Circle", "id": "0c3f0167-98b2-48e3-bd00-4f2bc79db392"}, "selection_glyph": null, "hover_glyph": {"type": "Circle", "id": "d4dd1ba8-f692-4e1f-8b6b-d9be0bb947a8"}, "glyph": {"type": "Circle", "id": "1a0aa5ba-0b77-4bb7-913b-57d15219355e"}}}, {"type": "BasicTickFormatter", "id": "dd1dd455-7b4e-4aae-bc99-c423fb16109e", "attributes": {}}, {"type": "Grid", "id": "ebdd6494-806f-459d-9646-3506a971efa7", "attributes": {"ticker": {"type": "BasicTicker", "id": "1604d991-93b9-4232-b4c8-0f521c212dc2"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "b190718c-9200-469d-bd18-0b322212b62c"}}}, {"type": "ToolEvents", "id": "08ab3ab7-50d5-442e-842e-5a313767cd03", "attributes": {}}, {"type": "GlyphRenderer", "id": "a89e00ad-ef4e-496f-a895-ea08ad080c3b", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "ec82e131-5ba3-403a-982b-974e5e02d3bd"}, "nonselection_glyph": {"type": "Segment", "id": "665258ea-981a-4896-86f4-4545c0fc5daf"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Segment", "id": "75d2d7c5-955d-4d6c-928f-41efa48f3b48"}}}, {"type": "Circle", "id": "1a0aa5ba-0b77-4bb7-913b-57d15219355e", "attributes": {"line_color": {"value": "olive"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 30, "units": "screen"}, "line_alpha": {"value": 0.4}, "fill_color": {"value": "olive"}, "fill_alpha": {"value": 0.4}}}, {"type": "Grid", "id": "e13eae16-8ee5-4636-b819-c8f3a75e5d63", "attributes": {"ticker": {"type": "BasicTicker", "id": "2bd93c9b-4715-483b-9050-c15aab7ea4f9"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b190718c-9200-469d-bd18-0b322212b62c"}}}, {"type": "CustomJS", "id": "af77889a-df7a-4557-8927-51971b22a719", "attributes": {"code": "\nvar links = {0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1, 4], 4: [1, 3], 5: [2, 3, 4]};\nvar data = {'x0': [], 'y0': [], 'x1': [], 'y1': []};\nvar cdata = circle.get('data');\nvar indices = cb_data.index['1d'].indices;\nfor (i=0; i < indices.length; i++) {\n    ind0 = indices[i]\n    for (j=0; j < links[ind0].length; j++) {\n        ind1 = links[ind0][j];\n        data['x0'].push(cdata.x[ind0]);\n        data['y0'].push(cdata.y[ind0]);\n        data['x1'].push(cdata.x[ind1]);\n        data['y1'].push(cdata.y[ind1]);\n    }\n}\nsegment.set('data', data);\n", "args": {"segment": {"type": "ColumnDataSource", "id": "ec82e131-5ba3-403a-982b-974e5e02d3bd"}, "circle": {"type": "ColumnDataSource", "id": "0862e99e-ce83-4b19-a3b6-1c66c0b46334"}}}}, {"type": "HoverTool", "id": "a502ecc3-28dc-42c2-bfd4-dd92bf6c71f2", "attributes": {"tooltips": null, "renderers": [{"type": "GlyphRenderer", "id": "b84a1bef-428c-418e-aefd-7f26cac18623"}], "callback": {"type": "CustomJS", "id": "af77889a-df7a-4557-8927-51971b22a719"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b190718c-9200-469d-bd18-0b322212b62c"}}}, {"type": "Circle", "id": "0c3f0167-98b2-48e3-bd00-4f2bc79db392", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 30, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}], "root_ids": ["b190718c-9200-469d-bd18-0b322212b62c"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "3b582324-7777-4525-ad43-64a868935e81", "modelid": "b190718c-9200-469d-bd18-0b322212b62c", "elementid": "314db8dc-5b3d-4948-836c-23e468d74e4f"}];
          
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