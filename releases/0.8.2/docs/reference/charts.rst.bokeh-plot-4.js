(function(global) {
  if (typeof (window._bokeh_onload_callbacks) === "undefined"){
    window._bokeh_onload_callbacks = [];
  }
  function load_lib(url, callback){
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading){
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", new Date());
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", new Date());
    window._bokeh_is_loading = true;
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = function(){
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.js"

  var elt = document.getElementById("2603b8d0-5251-477b-8211-f67a722f0437");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2603b8d0-5251-477b-8211-f67a722f0437' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "af29d0d7-ce43-4654-b670-cb7659b1675d", "type": "CategoricalAxis", "attributes": {"id": "af29d0d7-ce43-4654-b670-cb7659b1675d", "plot": {"id": "57d3a5ff-c114-4555-9618-b8f9573407a2", "type": "Plot", "subtype": "Chart"}, "formatter": {"id": "2bacadd2-36a8-44a4-b067-c9b27cdc483b", "type": "CategoricalTickFormatter"}, "axis_label": null, "major_label_orientation": 0.7853981633974483, "ticker": {"id": "e9546bc7-8231-4f02-8a87-7f4b163c8b4f", "type": "CategoricalTicker"}, "tags": [], "doc": null}}, {"id": "f6d05aa9-5246-43b2-9836-91e96d5ece17", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "8e89fa36-2f47-4c3d-8ed2-313f9bddc489", "type": "ColumnDataSource"}, "id": "f6d05aa9-5246-43b2-9836-91e96d5ece17", "glyph": {"id": "37423ef1-6802-4786-829f-de1d701902a6", "type": "Segment"}, "tags": [], "doc": null}}, {"id": "692f3f61-4783-40a8-9222-8151dc8e9c92", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "692f3f61-4783-40a8-9222-8151dc8e9c92", "plot": {"id": "57d3a5ff-c114-4555-9618-b8f9573407a2", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "9e6942e8-f9c8-4db1-a961-01524cbf892c", "type": "ResetTool", "attributes": {"plot": {"id": "57d3a5ff-c114-4555-9618-b8f9573407a2", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "9e6942e8-f9c8-4db1-a961-01524cbf892c"}}, {"id": "4a3b8eaf-963a-43f3-bdfb-374c87e9593b", "type": "LinearAxis", "attributes": {"id": "4a3b8eaf-963a-43f3-bdfb-374c87e9593b", "plot": {"id": "57d3a5ff-c114-4555-9618-b8f9573407a2", "type": "Plot", "subtype": "Chart"}, "formatter": {"id": "d63f56ae-6ba4-491d-9f04-4dcd467d64c7", "type": "BasicTickFormatter"}, "axis_label": null, "ticker": {"id": "29c6ab56-bd33-411e-8c44-aff88a63c56e", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "2cfcdbcf-77c5-4328-96b9-e913fab20864", "type": "Segment", "attributes": {"y1": {"field": "seg_top_jython", "units": "data"}, "line_width": {"value": 2, "units": "data"}, "x1": {"field": "catjython", "units": "data"}, "id": "2cfcdbcf-77c5-4328-96b9-e913fab20864", "x0": {"field": "catjython", "units": "data"}, "line_color": {"value": "black"}, "y0": {"field": "z_jython", "units": "data"}, "tags": [], "doc": null}}, {"id": "18b9c283-2391-4828-a769-63ef17b7c19d", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "8e89fa36-2f47-4c3d-8ed2-313f9bddc489", "type": "ColumnDataSource"}, "id": "18b9c283-2391-4828-a769-63ef17b7c19d", "glyph": {"id": "e6efdb19-a506-4b40-8a33-f1d2bc86f783", "type": "Segment"}, "tags": [], "doc": null}}, {"id": "37423ef1-6802-4786-829f-de1d701902a6", "type": "Segment", "attributes": {"y1": {"field": "seg_top_pypy", "units": "data"}, "line_width": {"value": 2, "units": "data"}, "x1": {"field": "catpypy", "units": "data"}, "id": "37423ef1-6802-4786-829f-de1d701902a6", "x0": {"field": "catpypy", "units": "data"}, "line_color": {"value": "black"}, "y0": {"field": "z_pypy", "units": "data"}, "tags": [], "doc": null}}, {"id": "e9546bc7-8231-4f02-8a87-7f4b163c8b4f", "type": "CategoricalTicker", "attributes": {"id": "e9546bc7-8231-4f02-8a87-7f4b163c8b4f", "doc": null, "tags": []}}, {"id": "beec4e54-ba2d-478c-92ea-ea8dd322adef", "type": "ToolEvents", "attributes": {"geometries": [], "id": "beec4e54-ba2d-478c-92ea-ea8dd322adef", "doc": null, "tags": []}}, {"id": "8e89fa36-2f47-4c3d-8ed2-313f9bddc489", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"catpython": ["cpu1:0.25", "cpu2:0.25"], "cat": ["cpu1", "cpu2"], "zero": [0.0, 0.0], "z_python": [0.0, 0.0], "seg_top_jython": [22, 30], "catjython": ["cpu1:0.75", "cpu2:0.75"], "z_jython": [0.0, 0.0], "seg_top_python": [2, 5], "seg_top_pypy": [12, 40], "catpypy": ["cpu1:0.5", "cpu2:0.5"], "jython": [22, 30], "python": [2, 5], "z_pypy": [0.0, 0.0], "pypy": [12, 40]}, "column_names": ["catpython", "cat", "zero", "z_python", "seg_top_jython", "catjython", "z_jython", "seg_top_python", "seg_top_pypy", "catpypy", "jython", "python", "z_pypy", "pypy"], "id": "8e89fa36-2f47-4c3d-8ed2-313f9bddc489", "doc": null, "tags": []}}, {"id": "fee706b3-7263-426b-979d-ab514566db04", "type": "Circle", "attributes": {"y": {"field": "jython", "units": "data"}, "fill_alpha": {"value": 1.0, "units": "data"}, "id": "fee706b3-7263-426b-979d-ab514566db04", "fill_color": {"value": "#5ab738"}, "line_color": {"value": "black"}, "size": {"value": 15, "units": "screen"}, "x": {"field": "catjython", "units": "data"}, "doc": null, "tags": [], "line_alpha": {"value": 1.0, "units": "data"}}}, {"id": "29c6ab56-bd33-411e-8c44-aff88a63c56e", "type": "BasicTicker", "attributes": {"id": "29c6ab56-bd33-411e-8c44-aff88a63c56e", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "e6efdb19-a506-4b40-8a33-f1d2bc86f783", "type": "Segment", "attributes": {"y1": {"field": "seg_top_python", "units": "data"}, "line_width": {"value": 2, "units": "data"}, "x1": {"field": "catpython", "units": "data"}, "id": "e6efdb19-a506-4b40-8a33-f1d2bc86f783", "x0": {"field": "catpython", "units": "data"}, "line_color": {"value": "black"}, "y0": {"field": "z_python", "units": "data"}, "tags": [], "doc": null}}, {"id": "527b7ab7-dc49-4a99-a2f1-06215be1a14a", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "8e89fa36-2f47-4c3d-8ed2-313f9bddc489", "type": "ColumnDataSource"}, "id": "527b7ab7-dc49-4a99-a2f1-06215be1a14a", "glyph": {"id": "1f1dedbc-b48b-45d7-8dec-158641d4467f", "type": "Circle"}, "tags": [], "doc": null}}, {"id": "f1bf04b5-48aa-4b0b-be57-783d73283bfc", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "8e89fa36-2f47-4c3d-8ed2-313f9bddc489", "type": "ColumnDataSource"}, "id": "f1bf04b5-48aa-4b0b-be57-783d73283bfc", "glyph": {"id": "fee706b3-7263-426b-979d-ab514566db04", "type": "Circle"}, "tags": [], "doc": null}}, {"id": "d63f56ae-6ba4-491d-9f04-4dcd467d64c7", "type": "BasicTickFormatter", "attributes": {"id": "d63f56ae-6ba4-491d-9f04-4dcd467d64c7", "doc": null, "tags": []}}, {"id": "5178db90-bc34-4ede-b311-a312c44ad4c0", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "8e89fa36-2f47-4c3d-8ed2-313f9bddc489", "type": "ColumnDataSource"}, "id": "5178db90-bc34-4ede-b311-a312c44ad4c0", "glyph": {"id": "2cfcdbcf-77c5-4328-96b9-e913fab20864", "type": "Segment"}, "tags": [], "doc": null}}, {"id": "adf7b848-9655-442f-aae3-4563f84fb95b", "type": "Grid", "attributes": {"id": "adf7b848-9655-442f-aae3-4563f84fb95b", "plot": {"id": "57d3a5ff-c114-4555-9618-b8f9573407a2", "type": "Plot", "subtype": "Chart"}, "dimension": 1, "ticker": {"id": "29c6ab56-bd33-411e-8c44-aff88a63c56e", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "1f1dedbc-b48b-45d7-8dec-158641d4467f", "type": "Circle", "attributes": {"y": {"field": "python", "units": "data"}, "fill_alpha": {"value": 1.0, "units": "data"}, "id": "1f1dedbc-b48b-45d7-8dec-158641d4467f", "fill_color": {"value": "#407ee7"}, "line_color": {"value": "black"}, "size": {"value": 15, "units": "screen"}, "x": {"field": "catpython", "units": "data"}, "doc": null, "tags": [], "line_alpha": {"value": 1.0, "units": "data"}}}, {"id": "9840761d-1e58-4ac7-a02c-cdf9c175de59", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "9840761d-1e58-4ac7-a02c-cdf9c175de59", "plot": {"id": "57d3a5ff-c114-4555-9618-b8f9573407a2", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "94e14e18-4f38-45a5-ad69-b0f29914525b", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "57d3a5ff-c114-4555-9618-b8f9573407a2", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "94e14e18-4f38-45a5-ad69-b0f29914525b"}}, {"id": "0c0b9d6f-e9ec-4494-ac36-123359b492fd", "type": "ResizeTool", "attributes": {"plot": {"id": "57d3a5ff-c114-4555-9618-b8f9573407a2", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": [], "id": "0c0b9d6f-e9ec-4494-ac36-123359b492fd"}}, {"id": "2e51f008-5531-461f-bec8-94bec885e939", "type": "FactorRange", "attributes": {"factors": ["cpu1", "cpu2"], "id": "2e51f008-5531-461f-bec8-94bec885e939", "doc": null, "tags": []}}, {"id": "2bacadd2-36a8-44a4-b067-c9b27cdc483b", "type": "CategoricalTickFormatter", "attributes": {"id": "2bacadd2-36a8-44a4-b067-c9b27cdc483b", "doc": null, "tags": []}}, {"id": "57d3a5ff-c114-4555-9618-b8f9573407a2", "type": "Plot", "subtype": "Chart", "attributes": {"tool_events": {"id": "beec4e54-ba2d-478c-92ea-ea8dd322adef", "type": "ToolEvents"}, "title": "dots", "extra_y_ranges": {}, "renderers": [{"id": "af29d0d7-ce43-4654-b670-cb7659b1675d", "type": "CategoricalAxis"}, {"id": "4a3b8eaf-963a-43f3-bdfb-374c87e9593b", "type": "LinearAxis"}, {"id": "adf7b848-9655-442f-aae3-4563f84fb95b", "type": "Grid"}, {"id": "18b9c283-2391-4828-a769-63ef17b7c19d", "type": "GlyphRenderer"}, {"id": "527b7ab7-dc49-4a99-a2f1-06215be1a14a", "type": "GlyphRenderer"}, {"id": "f6d05aa9-5246-43b2-9836-91e96d5ece17", "type": "GlyphRenderer"}, {"id": "92de482a-a3ac-4d3b-9648-735b9cfa862f", "type": "GlyphRenderer"}, {"id": "5178db90-bc34-4ede-b311-a312c44ad4c0", "type": "GlyphRenderer"}, {"id": "f1bf04b5-48aa-4b0b-be57-783d73283bfc", "type": "GlyphRenderer"}], "id": "57d3a5ff-c114-4555-9618-b8f9573407a2", "extra_x_ranges": {}, "doc": null, "below": [{"id": "af29d0d7-ce43-4654-b670-cb7659b1675d", "type": "CategoricalAxis"}], "right": [], "x_range": {"id": "2e51f008-5531-461f-bec8-94bec885e939", "type": "FactorRange"}, "left": [{"id": "4a3b8eaf-963a-43f3-bdfb-374c87e9593b", "type": "LinearAxis"}], "above": [], "tools": [{"id": "dca0bf71-2fe6-42a1-a579-51e9db535994", "type": "PanTool"}, {"id": "692f3f61-4783-40a8-9222-8151dc8e9c92", "type": "WheelZoomTool"}, {"id": "9840761d-1e58-4ac7-a02c-cdf9c175de59", "type": "BoxZoomTool"}, {"id": "94e14e18-4f38-45a5-ad69-b0f29914525b", "type": "PreviewSaveTool"}, {"id": "0c0b9d6f-e9ec-4494-ac36-123359b492fd", "type": "ResizeTool"}, {"id": "9e6942e8-f9c8-4db1-a961-01524cbf892c", "type": "ResetTool"}], "plot_width": 600, "plot_height": 400, "y_range": {"id": "4e103c20-08a9-4b35-b5b1-a01779e028a0", "type": "Range1d"}, "tags": []}}, {"id": "dca0bf71-2fe6-42a1-a579-51e9db535994", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "dca0bf71-2fe6-42a1-a579-51e9db535994", "plot": {"id": "57d3a5ff-c114-4555-9618-b8f9573407a2", "type": "Plot", "subtype": "Chart"}, "doc": null, "tags": []}}, {"id": "0724aa3a-a68e-44c7-bf6d-0bf433fa6a38", "type": "Circle", "attributes": {"y": {"field": "pypy", "units": "data"}, "fill_alpha": {"value": 1.0, "units": "data"}, "id": "0724aa3a-a68e-44c7-bf6d-0bf433fa6a38", "fill_color": {"value": "#f22c40"}, "line_color": {"value": "black"}, "size": {"value": 15, "units": "screen"}, "x": {"field": "catpypy", "units": "data"}, "doc": null, "tags": [], "line_alpha": {"value": 1.0, "units": "data"}}}, {"id": "4e103c20-08a9-4b35-b5b1-a01779e028a0", "type": "Range1d", "attributes": {"end": 44.0, "start": 0, "id": "4e103c20-08a9-4b35-b5b1-a01779e028a0", "doc": null, "tags": []}}, {"id": "92de482a-a3ac-4d3b-9648-735b9cfa862f", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "8e89fa36-2f47-4c3d-8ed2-313f9bddc489", "type": "ColumnDataSource"}, "id": "92de482a-a3ac-4d3b-9648-735b9cfa862f", "glyph": {"id": "0724aa3a-a68e-44c7-bf6d-0bf433fa6a38", "type": "Circle"}, "tags": [], "doc": null}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("2603b8d0-5251-477b-8211-f67a722f0437", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("2603b8d0-5251-477b-8211-f67a722f0437", all_models);
    });
  }

}(this));