
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
  };var element = document.getElementById("631a992a-5e0b-464d-92b9-87a25493a5f3");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '631a992a-5e0b-464d-92b9-87a25493a5f3' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"b1fd939b-e5d9-43b8-b633-da947aa7a53e": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Rect", "id": "b7a5ea90-a711-451e-a002-9e13f282461f", "attributes": {"line_width": {"value": 2}, "width": {"value": 0.7, "units": "data"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"value": "#3B8686"}}}, {"type": "Circle", "id": "b3ec50bf-ca34-4b57-ae18-7019634e8e19", "attributes": {"line_color": {"value": "#F38630"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 6, "units": "screen"}, "fill_color": {"value": "#F38630"}, "fill_alpha": {"value": 0.6}}}, {"type": "ColumnDataSource", "id": "53d1ef0f-da0e-4def-9b50-d5e44e931cde", "attributes": {"data": {"x": ["a", "b", "c", "d", "e", "f"], "y": [-2.4450686571293656, -2.3851943425849225, -1.5222678210464409, -1.4479810907333586, -0.4968922553012638, -0.6270192499633302]}, "column_names": ["x", "y"], "callback": null}}, {"type": "FactorRange", "id": "d1dab613-9d62-4269-994d-13833615d1f7", "attributes": {"factors": ["a", "b", "c", "d", "e", "f"], "callback": null}}, {"type": "BasicTickFormatter", "id": "279e509a-56dc-45f1-910e-0d0d17b026fa", "attributes": {}}, {"type": "GlyphRenderer", "id": "37593ae0-96e4-4279-93ac-a7c3ecbadbe0", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "e439078d-a83a-4eae-9ef6-6c83f00450d8"}, "nonselection_glyph": {"type": "Rect", "id": "1f710c4a-4715-4a82-9115-9cc5c970044d"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "8700077b-f271-47ea-aad8-61ecb5ebe412"}}}, {"type": "GlyphRenderer", "id": "43e39063-8c8a-4c3a-b671-cfc67adc034f", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "a6e30445-f976-438d-8135-12d366cecd9f"}, "nonselection_glyph": {"type": "Rect", "id": "c90f65f4-58ed-4255-8e4b-971fe856b656"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "7e772ff5-176b-4e81-bb0f-baa12401319a"}}}, {"type": "Rect", "id": "c90f65f4-58ed-4255-8e4b-971fe856b656", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "width": {"value": 0.7, "units": "data"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "Segment", "id": "bc03829d-96db-4ccf-9e9a-bb49d2030c04", "attributes": {"line_width": {"value": 2}, "x1": {"field": "x1"}, "y0": {"field": "y0"}, "x0": {"field": "x0"}, "y1": {"field": "y1"}}}, {"type": "GlyphRenderer", "id": "0bc3189d-16d8-4587-bbc7-7bc51e5672f4", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "bac2a7a9-f262-4905-8589-0c203d76725a"}, "nonselection_glyph": {"type": "Rect", "id": "73a0c398-ea72-400e-b834-51a04594626d"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "b7a5ea90-a711-451e-a002-9e13f282461f"}}}, {"type": "ToolEvents", "id": "79461291-02f6-4785-ba4f-8aed0cc6b2a1", "attributes": {}}, {"type": "CategoricalTicker", "id": "88507b56-38fe-4baa-ba51-382ff22f6627", "attributes": {}}, {"type": "Rect", "id": "7e772ff5-176b-4e81-bb0f-baa12401319a", "attributes": {"line_width": {"value": 2}, "width": {"value": 0.7, "units": "data"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"value": "#E08E79"}}}, {"type": "GlyphRenderer", "id": "d5ce4d86-b889-49c9-80ed-c8ed07f6a510", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "2b39e1d3-f594-400f-9d62-23f8140c18f9"}, "nonselection_glyph": {"type": "Circle", "id": "df2dee33-403b-44c6-b329-70e896324619"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "b3ec50bf-ca34-4b57-ae18-7019634e8e19"}}}, {"type": "PreviewSaveTool", "id": "7860c5e9-d303-4ca3-88cb-f0f5095b5511", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "84f93b11-a68f-4d4d-995b-c364a350caa4"}}}, {"type": "GlyphRenderer", "id": "295dea3a-5c69-411f-b477-2684d07eeb5a", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "53d1ef0f-da0e-4def-9b50-d5e44e931cde"}, "nonselection_glyph": {"type": "Rect", "id": "047090c4-2ed4-43e2-a649-60e8237d4f19"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "b0fee9a0-81f9-404b-882e-3e37822243a4"}}}, {"type": "Rect", "id": "73a0c398-ea72-400e-b834-51a04594626d", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "width": {"value": 0.7, "units": "data"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "CategoricalAxis", "id": "da22e4e8-8520-4ef7-961c-bb2b393030e5", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "88507b56-38fe-4baa-ba51-382ff22f6627"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "84f93b11-a68f-4d4d-995b-c364a350caa4"}, "formatter": {"type": "CategoricalTickFormatter", "id": "61aed2e2-eef6-480a-bb94-53952af9029c"}, "major_label_text_font_size": {"value": "12pt"}}}, {"type": "Segment", "id": "7820fef9-3763-4767-9c5d-0fc5894c3d0b", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "x1": {"field": "x1"}, "y0": {"field": "y0"}, "y1": {"field": "y1"}, "line_alpha": {"value": 0.1}, "x0": {"field": "x0"}}}, {"type": "Grid", "id": "8e911cd8-59a1-4889-a7a8-6a2dce18f114", "attributes": {"ticker": {"type": "BasicTicker", "id": "4229f106-f327-4a38-956a-be6982bdc56a"}, "grid_line_color": {"value": "white"}, "dimension": 1, "grid_line_width": {"value": 2}, "plot": {"type": "Plot", "subtype": "Figure", "id": "84f93b11-a68f-4d4d-995b-c364a350caa4"}}}, {"type": "CategoricalTickFormatter", "id": "61aed2e2-eef6-480a-bb94-53952af9029c", "attributes": {}}, {"type": "LinearAxis", "id": "aa1c6705-351f-4092-abef-57be2380311b", "attributes": {"ticker": {"type": "BasicTicker", "id": "4229f106-f327-4a38-956a-be6982bdc56a"}, "formatter": {"type": "BasicTickFormatter", "id": "279e509a-56dc-45f1-910e-0d0d17b026fa"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "84f93b11-a68f-4d4d-995b-c364a350caa4"}}}, {"type": "Segment", "id": "2b011c2e-f47f-4344-b29f-931449fcb4f3", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "x1": {"field": "x1"}, "y0": {"field": "y0"}, "y1": {"field": "y1"}, "line_alpha": {"value": 0.1}, "x0": {"field": "x0"}}}, {"type": "Plot", "id": "84f93b11-a68f-4d4d-995b-c364a350caa4", "attributes": {"y_range": {"type": "DataRange1d", "id": "6fb11411-17b9-46cc-a897-6b9f99a19ad9"}, "left": [{"type": "LinearAxis", "id": "aa1c6705-351f-4092-abef-57be2380311b"}], "renderers": [{"type": "CategoricalAxis", "id": "da22e4e8-8520-4ef7-961c-bb2b393030e5"}, {"type": "Grid", "id": "8458005e-c387-4506-87b1-1cc31028e04a"}, {"type": "LinearAxis", "id": "aa1c6705-351f-4092-abef-57be2380311b"}, {"type": "Grid", "id": "8e911cd8-59a1-4889-a7a8-6a2dce18f114"}, {"type": "GlyphRenderer", "id": "a40a0c26-9486-4173-a082-4699163995a5"}, {"type": "GlyphRenderer", "id": "55efdfa8-1630-4b20-931a-9d137f04b975"}, {"type": "GlyphRenderer", "id": "43e39063-8c8a-4c3a-b671-cfc67adc034f"}, {"type": "GlyphRenderer", "id": "0bc3189d-16d8-4587-bbc7-7bc51e5672f4"}, {"type": "GlyphRenderer", "id": "295dea3a-5c69-411f-b477-2684d07eeb5a"}, {"type": "GlyphRenderer", "id": "37593ae0-96e4-4279-93ac-a7c3ecbadbe0"}, {"type": "GlyphRenderer", "id": "d5ce4d86-b889-49c9-80ed-c8ed07f6a510"}], "tools": [{"type": "PreviewSaveTool", "id": "7860c5e9-d303-4ca3-88cb-f0f5095b5511"}], "background_fill_color": {"value": "#EFE8E2"}, "tool_events": {"type": "ToolEvents", "id": "79461291-02f6-4785-ba4f-8aed0cc6b2a1"}, "below": [{"type": "CategoricalAxis", "id": "da22e4e8-8520-4ef7-961c-bb2b393030e5"}], "x_range": {"type": "FactorRange", "id": "d1dab613-9d62-4269-994d-13833615d1f7"}}, "subtype": "Figure"}, {"type": "ColumnDataSource", "id": "379c8a61-adbb-4ecf-a388-211d52a4c8bc", "attributes": {"data": {"x1": ["a", "b", "c", "d", "e", "f"], "y0": [-2.4450686571293656, -2.3851943425849225, -1.5222678210464409, -1.4479810907333586, -0.4968922553012638, -0.6270192499633302], "x0": ["a", "b", "c", "d", "e", "f"], "y1": [-0.6676802008384938, -0.7500191939529653, 0.29965305588909985, 0.4129943824349557, 1.3925809706594852, 1.3241477416334062]}, "column_names": ["x1", "y0", "y1", "x0"], "callback": null}}, {"type": "GlyphRenderer", "id": "a40a0c26-9486-4173-a082-4699163995a5", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "0e3a191d-8c29-4642-9889-b6eff0bf256a"}, "nonselection_glyph": {"type": "Segment", "id": "7820fef9-3763-4767-9c5d-0fc5894c3d0b"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Segment", "id": "34ee00c1-dff8-49bc-880d-4e04489919f5"}}}, {"type": "Rect", "id": "047090c4-2ed4-43e2-a649-60e8237d4f19", "attributes": {"line_color": {"value": "#1f77b4"}, "width": {"value": 0.2, "units": "data"}, "y": {"field": "y"}, "height": {"value": 0.01, "units": "data"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "Rect", "id": "8700077b-f271-47ea-aad8-61ecb5ebe412", "attributes": {"height": {"value": 0.01, "units": "data"}, "y": {"field": "y"}, "width": {"value": 0.2, "units": "data"}, "x": {"field": "x"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "GlyphRenderer", "id": "55efdfa8-1630-4b20-931a-9d137f04b975", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "379c8a61-adbb-4ecf-a388-211d52a4c8bc"}, "nonselection_glyph": {"type": "Segment", "id": "2b011c2e-f47f-4344-b29f-931449fcb4f3"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Segment", "id": "bc03829d-96db-4ccf-9e9a-bb49d2030c04"}}}, {"type": "ColumnDataSource", "id": "e439078d-a83a-4eae-9ef6-6c83f00450d8", "attributes": {"data": {"x": ["a", "b", "c", "d", "e", "f"], "y": [2.825256933372699, 2.742321103808518, 3.4607647422617505, 3.598528058234304, 4.5417030139274, 4.75317835686341]}, "column_names": ["x", "y"], "callback": null}}, {"type": "ColumnDataSource", "id": "0e3a191d-8c29-4642-9889-b6eff0bf256a", "attributes": {"data": {"x1": ["a", "b", "c", "d", "e", "f"], "y0": [2.825256933372699, 2.742321103808518, 3.4607647422617505, 3.598528058234304, 4.5417030139274, 4.75317835686341], "x0": ["a", "b", "c", "d", "e", "f"], "y1": [0.7294946528459835, 0.6469169251516279, 1.56409773043816, 1.7058680948216502, 2.652229787966651, 2.695759987725408]}, "column_names": ["x1", "y0", "y1", "x0"], "callback": null}}, {"type": "Segment", "id": "34ee00c1-dff8-49bc-880d-4e04489919f5", "attributes": {"line_width": {"value": 2}, "x1": {"field": "x1"}, "y0": {"field": "y0"}, "x0": {"field": "x0"}, "y1": {"field": "y1"}}}, {"type": "Rect", "id": "b0fee9a0-81f9-404b-882e-3e37822243a4", "attributes": {"height": {"value": 0.01, "units": "data"}, "y": {"field": "y"}, "width": {"value": 0.2, "units": "data"}, "x": {"field": "x"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "Circle", "id": "df2dee33-403b-44c6-b329-70e896324619", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 6, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "Rect", "id": "1f710c4a-4715-4a82-9115-9cc5c970044d", "attributes": {"line_color": {"value": "#1f77b4"}, "width": {"value": 0.2, "units": "data"}, "y": {"field": "y"}, "height": {"value": 0.01, "units": "data"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ColumnDataSource", "id": "2b39e1d3-f594-400f-9d62-23f8140c18f9", "attributes": {"data": {"x": ["a", "b", "c", "c", "c", "e", "e", "e", "e", "f", "f"], "y": [3.4167947747104517, 3.6915587536168877, 3.4976472253525204, 3.956357100695933, 4.083314421460889, -1.0378837919006272, -0.9485837599109912, 4.623953558594938, 4.6453894879913005, 4.773668372210337, 4.8896146754191525]}, "column_names": ["x", "y"], "callback": null}}, {"type": "BasicTicker", "id": "4229f106-f327-4a38-956a-be6982bdc56a", "attributes": {}}, {"type": "ColumnDataSource", "id": "bac2a7a9-f262-4905-8589-0c203d76725a", "attributes": {"data": {"height": [0.6165374791560048, 0.7574186676753518, 0.660258955117245, 0.6012411534001366, 0.5966399344000761, 0.7126959237759318], "x": ["a", "b", "c", "d", "e", "f"], "y": [-0.3594114612604914, -0.37130986011528944, 0.6297825334477223, 0.713614959135024, 1.6909009378595232, 1.6804957035213721]}, "column_names": ["y", "x", "height"], "callback": null}}, {"type": "ColumnDataSource", "id": "a6e30445-f976-438d-8135-12d366cecd9f", "attributes": {"data": {"height": [0.7806373745284725, 0.6395174514292414, 0.6041857194318152, 0.691632558986558, 0.6630088829070899, 0.6589163223160699], "x": ["a", "b", "c", "d", "e", "f"], "y": [0.33917596558174723, 0.3271581994370072, 1.2620048707222524, 1.3600518153283714, 2.320725346513106, 2.3663018265673728]}, "column_names": ["y", "x", "height"], "callback": null}}, {"type": "Grid", "id": "8458005e-c387-4506-87b1-1cc31028e04a", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "88507b56-38fe-4baa-ba51-382ff22f6627"}, "grid_line_color": {"value": null}, "grid_line_width": {"value": 2}, "plot": {"type": "Plot", "subtype": "Figure", "id": "84f93b11-a68f-4d4d-995b-c364a350caa4"}}}, {"type": "DataRange1d", "id": "6fb11411-17b9-46cc-a897-6b9f99a19ad9", "attributes": {"callback": null}}], "root_ids": ["84f93b11-a68f-4d4d-995b-c364a350caa4"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "b1fd939b-e5d9-43b8-b633-da947aa7a53e", "modelid": "84f93b11-a68f-4d4d-995b-c364a350caa4", "elementid": "631a992a-5e0b-464d-92b9-87a25493a5f3"}];
          
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