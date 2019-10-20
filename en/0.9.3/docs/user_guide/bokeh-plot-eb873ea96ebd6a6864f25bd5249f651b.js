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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.js"

  var elt = document.getElementById("2ed3323b-f9a7-4c12-84bf-4d18278510c9");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2ed3323b-f9a7-4c12-84bf-4d18278510c9' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "c6dd1f18-efbc-4720-b499-7c47ea849239", "tags": []}, "id": "c6dd1f18-efbc-4720-b499-7c47ea849239"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 0.5}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.5}, "line_color": {"value": "#1f77b4"}, "doc": null, "radius": {"units": "data", "value": 0.3}, "id": "a4dd812b-9fc1-4efd-92b3-eadedb6b2308"}, "id": "a4dd812b-9fc1-4efd-92b3-eadedb6b2308"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "4a784898-1142-496f-a485-9d09d08422eb"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "fd785cf9-3c9f-45a9-a788-817c10f7ea48", "subtype": "Figure"}, "dimension": 0, "id": "8b662424-f0d5-4877-ac87-913e8b2b7aa7"}, "id": "8b662424-f0d5-4877-ac87-913e8b2b7aa7"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "4a784898-1142-496f-a485-9d09d08422eb"}, "id": "4a784898-1142-496f-a485-9d09d08422eb"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "4a784898-1142-496f-a485-9d09d08422eb"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "c6dd1f18-efbc-4720-b499-7c47ea849239"}, "plot": {"type": "Plot", "id": "fd785cf9-3c9f-45a9-a788-817c10f7ea48", "subtype": "Figure"}, "id": "a21fbe68-5f58-499b-b16f-6b7ea5a69543"}, "id": "a21fbe68-5f58-499b-b16f-6b7ea5a69543"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "39daf565-35f5-4195-82ba-3e4ad2d6612a", "tags": []}, "id": "39daf565-35f5-4195-82ba-3e4ad2d6612a"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 0.1}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "radius": {"units": "data", "value": 0.3}, "id": "e63d8ea0-6ffa-48f1-a78d-9f21ca5020ef"}, "id": "e63d8ea0-6ffa-48f1-a78d-9f21ca5020ef"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "8a3946b7-542d-4119-b991-68998738f3ec"}, "tags": [], "glyph": {"type": "Circle", "id": "a4dd812b-9fc1-4efd-92b3-eadedb6b2308"}, "doc": null, "nonselection_glyph": {"type": "Circle", "id": "e63d8ea0-6ffa-48f1-a78d-9f21ca5020ef"}, "selection_glyph": null, "id": "6925e082-5ca1-49ef-a8b9-e7689829fa5f"}, "id": "6925e082-5ca1-49ef-a8b9-e7689829fa5f"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "4d8141ed-bdab-4d1c-8ced-8a9e3d739cb1"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "fd785cf9-3c9f-45a9-a788-817c10f7ea48", "subtype": "Figure"}, "dimension": 1, "id": "4e21d993-4fe7-49ae-bfb3-56eb9569ee9a"}, "id": "4e21d993-4fe7-49ae-bfb3-56eb9569ee9a"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "4d8141ed-bdab-4d1c-8ced-8a9e3d739cb1"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "39daf565-35f5-4195-82ba-3e4ad2d6612a"}, "plot": {"type": "Plot", "id": "fd785cf9-3c9f-45a9-a788-817c10f7ea48", "subtype": "Figure"}, "id": "192de3ad-ac11-4dde-a2a6-09d6e4896f04"}, "id": "192de3ad-ac11-4dde-a2a6-09d6e4896f04"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "54d5d22b-f87c-4176-ab62-f1b2977ff259", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "54d5d22b-f87c-4176-ab62-f1b2977ff259"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "fd785cf9-3c9f-45a9-a788-817c10f7ea48", "subtype": "Figure"}, "id": "98e05a53-446d-4daa-9ab7-7a41daf8b1e6", "tags": [], "doc": null}, "id": "98e05a53-446d-4daa-9ab7-7a41daf8b1e6"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "81dd6afb-e9f2-471e-813b-b9cf0e5350b2", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "81dd6afb-e9f2-471e-813b-b9cf0e5350b2"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "fd785cf9-3c9f-45a9-a788-817c10f7ea48", "subtype": "Figure"}, "id": "92eec095-07e7-428f-a98e-99653cc56de4"}, "id": "92eec095-07e7-428f-a98e-99653cc56de4"}, {"type": "Plot", "attributes": {"plot_height": 300, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "54d5d22b-f87c-4176-ab62-f1b2977ff259"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "b4a64e1f-b6a8-46da-826a-1c2a2459e59e"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "a21fbe68-5f58-499b-b16f-6b7ea5a69543"}, {"type": "Grid", "id": "8b662424-f0d5-4877-ac87-913e8b2b7aa7"}, {"type": "LinearAxis", "id": "192de3ad-ac11-4dde-a2a6-09d6e4896f04"}, {"type": "Grid", "id": "4e21d993-4fe7-49ae-bfb3-56eb9569ee9a"}, {"type": "GlyphRenderer", "id": "6925e082-5ca1-49ef-a8b9-e7689829fa5f"}], "below": [{"type": "LinearAxis", "id": "a21fbe68-5f58-499b-b16f-6b7ea5a69543"}], "left": [{"type": "LinearAxis", "id": "192de3ad-ac11-4dde-a2a6-09d6e4896f04"}], "above": [], "tags": [], "plot_width": 300, "extra_y_ranges": {}, "tools": [{"type": "PanTool", "id": "92eec095-07e7-428f-a98e-99653cc56de4"}, {"type": "ResetTool", "id": "1b5ee435-2e24-46bf-8e77-c5fe8caa5886"}, {"type": "PreviewSaveTool", "id": "98e05a53-446d-4daa-9ab7-7a41daf8b1e6"}], "x_range": {"type": "DataRange1d", "id": "81dd6afb-e9f2-471e-813b-b9cf0e5350b2"}, "id": "fd785cf9-3c9f-45a9-a788-817c10f7ea48"}, "id": "fd785cf9-3c9f-45a9-a788-817c10f7ea48", "subtype": "Figure"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "b4a64e1f-b6a8-46da-826a-1c2a2459e59e", "tags": [], "geometries": []}, "id": "b4a64e1f-b6a8-46da-826a-1c2a2459e59e"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "fd785cf9-3c9f-45a9-a788-817c10f7ea48", "subtype": "Figure"}, "id": "1b5ee435-2e24-46bf-8e77-c5fe8caa5886", "tags": [], "doc": null}, "id": "1b5ee435-2e24-46bf-8e77-c5fe8caa5886"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "4d8141ed-bdab-4d1c-8ced-8a9e3d739cb1"}, "id": "4d8141ed-bdab-4d1c-8ced-8a9e3d739cb1"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [2.0, 3.0, 1.0, 1.5], "x": [1.0, 2.5, 3.0, 2.0]}, "doc": null, "id": "8a3946b7-542d-4119-b991-68998738f3ec", "column_names": ["y", "x"]}, "id": "8a3946b7-542d-4119-b991-68998738f3ec"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("2ed3323b-f9a7-4c12-84bf-4d18278510c9", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("2ed3323b-f9a7-4c12-84bf-4d18278510c9", all_models);
    });
  }

}(this));