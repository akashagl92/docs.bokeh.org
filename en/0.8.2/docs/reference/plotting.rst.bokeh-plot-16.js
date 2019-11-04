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

  var elt = document.getElementById("d3464a37-52d2-4049-b91d-d6fea9e8b83c");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'd3464a37-52d2-4049-b91d-d6fea9e8b83c' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "88efeba2-f8e9-44e8-94ab-b891c7e69bb7", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "005e4f8b-7612-49a1-91a0-8c012c341675", "type": "Rect"}, "name": null, "data_source": {"id": "28c37179-863a-4306-9bfc-ce4368e2f2ba", "type": "ColumnDataSource"}, "id": "88efeba2-f8e9-44e8-94ab-b891c7e69bb7", "glyph": {"id": "44b91611-ccdd-48c3-887b-6daf8bed9141", "type": "Rect"}, "tags": [], "doc": null}}, {"id": "d7c3057c-e01d-4885-90be-ade02fbe0641", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "d7c3057c-e01d-4885-90be-ade02fbe0641", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "543d297c-f8b9-46d5-b88b-97251bd03606", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "28c37179-863a-4306-9bfc-ce4368e2f2ba", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "543d297c-f8b9-46d5-b88b-97251bd03606", "doc": null, "tags": []}}, {"id": "adfde336-8ba3-45a1-8f86-b8ea825187a5", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "adfde336-8ba3-45a1-8f86-b8ea825187a5", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "3a59c37a-2f18-4252-88ee-3ef4e2b28492", "type": "ResizeTool", "attributes": {"plot": {"id": "b653c97b-e558-46e8-96dc-3555a9301cef", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "3a59c37a-2f18-4252-88ee-3ef4e2b28492"}}, {"id": "9452a745-88e6-40fa-b48d-19a09a47a554", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "9452a745-88e6-40fa-b48d-19a09a47a554", "plot": {"id": "b653c97b-e558-46e8-96dc-3555a9301cef", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "44b91611-ccdd-48c3-887b-6daf8bed9141", "type": "Rect", "attributes": {"y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 1.0, "units": "data"}, "height": {"value": 20, "units": "screen"}, "doc": null, "x": {"field": "x", "units": "data"}, "width": {"value": 10, "units": "screen"}, "fill_color": {"value": "#CAB2D6"}, "line_alpha": {"value": 1.0, "units": "data"}, "id": "44b91611-ccdd-48c3-887b-6daf8bed9141", "line_color": {"value": "#CAB2D6"}, "tags": []}}, {"id": "2f75b862-f311-44b2-98b4-9b22a0c9edb7", "type": "LinearAxis", "attributes": {"id": "2f75b862-f311-44b2-98b4-9b22a0c9edb7", "formatter": {"id": "b64d2c56-cf2e-4ace-ad06-a22784528fb7", "type": "BasicTickFormatter"}, "plot": {"id": "b653c97b-e558-46e8-96dc-3555a9301cef", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "adfde336-8ba3-45a1-8f86-b8ea825187a5", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "d58eaf26-58e9-496c-bb81-a7695a97f97b", "type": "Grid", "attributes": {"id": "d58eaf26-58e9-496c-bb81-a7695a97f97b", "plot": {"id": "b653c97b-e558-46e8-96dc-3555a9301cef", "type": "Plot", "subtype": "Figure"}, "dimension": 1, "ticker": {"id": "adfde336-8ba3-45a1-8f86-b8ea825187a5", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "6b206e3d-b5ec-4ca6-9360-c1fb0f55c8ff", "type": "ResetTool", "attributes": {"plot": {"id": "b653c97b-e558-46e8-96dc-3555a9301cef", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "6b206e3d-b5ec-4ca6-9360-c1fb0f55c8ff"}}, {"id": "4fae93e2-c705-4f48-bb37-1e35e287ea26", "type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "4fae93e2-c705-4f48-bb37-1e35e287ea26", "plot": {"id": "b653c97b-e558-46e8-96dc-3555a9301cef", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "005e4f8b-7612-49a1-91a0-8c012c341675", "type": "Rect", "attributes": {"y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 0.1, "units": "data"}, "height": {"value": 20, "units": "screen"}, "doc": null, "x": {"field": "x", "units": "data"}, "width": {"value": 10, "units": "screen"}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1, "units": "data"}, "id": "005e4f8b-7612-49a1-91a0-8c012c341675", "line_color": {"value": "#1f77b4"}, "tags": []}}, {"id": "5874ec41-1ca7-45a9-9d49-d0e660400f90", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "b653c97b-e558-46e8-96dc-3555a9301cef", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "5874ec41-1ca7-45a9-9d49-d0e660400f90"}}, {"id": "782adbd9-afaa-4513-9787-2ffa8c112e40", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "28c37179-863a-4306-9bfc-ce4368e2f2ba", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "782adbd9-afaa-4513-9787-2ffa8c112e40", "doc": null, "tags": []}}, {"id": "d39ae8f9-3ea6-4db0-9f19-6b8f6f5116ef", "type": "ToolEvents", "attributes": {"geometries": [], "id": "d39ae8f9-3ea6-4db0-9f19-6b8f6f5116ef", "doc": null, "tags": []}}, {"id": "98ce7bed-e851-4545-9343-151b5d20ab4e", "type": "Grid", "attributes": {"id": "98ce7bed-e851-4545-9343-151b5d20ab4e", "plot": {"id": "b653c97b-e558-46e8-96dc-3555a9301cef", "type": "Plot", "subtype": "Figure"}, "dimension": 0, "ticker": {"id": "d7c3057c-e01d-4885-90be-ade02fbe0641", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "8598fc0b-7b45-4714-9270-313c0e6f5dd9", "type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "id": "8598fc0b-7b45-4714-9270-313c0e6f5dd9", "plot": {"id": "b653c97b-e558-46e8-96dc-3555a9301cef", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "823f2e6a-06f5-433f-bfed-7f9eda267714", "type": "BasicTickFormatter", "attributes": {"id": "823f2e6a-06f5-433f-bfed-7f9eda267714", "doc": null, "tags": []}}, {"id": "74f33bec-70d6-43e7-aa7e-a425b3171180", "type": "LinearAxis", "attributes": {"id": "74f33bec-70d6-43e7-aa7e-a425b3171180", "formatter": {"id": "823f2e6a-06f5-433f-bfed-7f9eda267714", "type": "BasicTickFormatter"}, "plot": {"id": "b653c97b-e558-46e8-96dc-3555a9301cef", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "d7c3057c-e01d-4885-90be-ade02fbe0641", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "b64d2c56-cf2e-4ace-ad06-a22784528fb7", "type": "BasicTickFormatter", "attributes": {"id": "b64d2c56-cf2e-4ace-ad06-a22784528fb7", "doc": null, "tags": []}}, {"id": "b653c97b-e558-46e8-96dc-3555a9301cef", "type": "Plot", "subtype": "Figure", "attributes": {"tool_events": {"id": "d39ae8f9-3ea6-4db0-9f19-6b8f6f5116ef", "type": "ToolEvents"}, "above": [], "extra_y_ranges": {}, "renderers": [{"id": "74f33bec-70d6-43e7-aa7e-a425b3171180", "type": "LinearAxis"}, {"id": "98ce7bed-e851-4545-9343-151b5d20ab4e", "type": "Grid"}, {"id": "2f75b862-f311-44b2-98b4-9b22a0c9edb7", "type": "LinearAxis"}, {"id": "d58eaf26-58e9-496c-bb81-a7695a97f97b", "type": "Grid"}, {"id": "88efeba2-f8e9-44e8-94ab-b891c7e69bb7", "type": "GlyphRenderer"}], "id": "b653c97b-e558-46e8-96dc-3555a9301cef", "extra_x_ranges": {}, "doc": null, "below": [{"id": "74f33bec-70d6-43e7-aa7e-a425b3171180", "type": "LinearAxis"}], "right": [], "x_range": {"id": "543d297c-f8b9-46d5-b88b-97251bd03606", "type": "DataRange1d"}, "left": [{"id": "2f75b862-f311-44b2-98b4-9b22a0c9edb7", "type": "LinearAxis"}], "tools": [{"id": "9452a745-88e6-40fa-b48d-19a09a47a554", "type": "PanTool"}, {"id": "8598fc0b-7b45-4714-9270-313c0e6f5dd9", "type": "WheelZoomTool"}, {"id": "4fae93e2-c705-4f48-bb37-1e35e287ea26", "type": "BoxZoomTool"}, {"id": "5874ec41-1ca7-45a9-9d49-d0e660400f90", "type": "PreviewSaveTool"}, {"id": "3a59c37a-2f18-4252-88ee-3ef4e2b28492", "type": "ResizeTool"}, {"id": "6b206e3d-b5ec-4ca6-9360-c1fb0f55c8ff", "type": "ResetTool"}], "plot_width": 300, "plot_height": 300, "y_range": {"id": "782adbd9-afaa-4513-9787-2ffa8c112e40", "type": "DataRange1d"}, "tags": []}}, {"id": "28c37179-863a-4306-9bfc-ce4368e2f2ba", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"y": [1, 2, 3], "x": [1, 2, 3]}, "column_names": ["x", "y"], "id": "28c37179-863a-4306-9bfc-ce4368e2f2ba", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("d3464a37-52d2-4049-b91d-d6fea9e8b83c", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("d3464a37-52d2-4049-b91d-d6fea9e8b83c", all_models);
    });
  }

}(this));