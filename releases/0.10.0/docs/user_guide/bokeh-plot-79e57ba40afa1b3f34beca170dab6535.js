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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.js"

  var elt = document.getElementById("7faa8aec-f3a9-497a-b0c7-7055cdab2334");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7faa8aec-f3a9-497a-b0c7-7055cdab2334' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "fbb2bd2a-f666-406e-a59b-aa658868f2aa"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "29a42bf8-6a98-4279-8f9f-6827624b3481"}, "id": "49227fe6-7fe1-4409-a7b0-3db1a8f9359d"}, "type": "Grid", "id": "49227fe6-7fe1-4409-a7b0-3db1a8f9359d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "fbb2bd2a-f666-406e-a59b-aa658868f2aa"}, "tags": [], "doc": null, "id": "88428b66-bf1d-4ff9-b7bb-e7a8d4f475e9"}, "type": "ResetTool", "id": "88428b66-bf1d-4ff9-b7bb-e7a8d4f475e9"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "fbb2bd2a-f666-406e-a59b-aa658868f2aa"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "d0812a6e-b520-4485-abda-6e38fb0e3f2e"}, "ticker": {"type": "BasicTicker", "id": "772d970f-cf00-47bb-8a80-2637b2b5a524"}, "id": "77f723b9-8551-418a-a342-ea4fd45846f0"}, "type": "LinearAxis", "id": "77f723b9-8551-418a-a342-ea4fd45846f0"}, {"subtype": "Figure", "type": "Plot", "id": "fbb2bd2a-f666-406e-a59b-aa658868f2aa", "attributes": {"x_range": {"type": "DataRange1d", "id": "cbffaa46-6810-4ca9-b102-85034240a837"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "3b36c98d-6065-4d4a-8019-9c05ab6d93bd"}, {"type": "WheelZoomTool", "id": "37c09415-827d-46a0-b1ef-f2261a04102d"}, {"type": "BoxZoomTool", "id": "d39c3a3d-a908-4042-93c5-fe7e19557050"}, {"type": "PreviewSaveTool", "id": "42feedfa-fa33-447a-b974-f0b8bd8c5950"}, {"type": "ResizeTool", "id": "04ac2451-1309-4cf8-8114-16dd43d82088"}, {"type": "ResetTool", "id": "88428b66-bf1d-4ff9-b7bb-e7a8d4f475e9"}, {"type": "HelpTool", "id": "ccdcb4c9-a51f-4aee-b9e0-0aad40ab0876"}], "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "77f723b9-8551-418a-a342-ea4fd45846f0"}, {"type": "Grid", "id": "b37b908e-ed24-4899-9733-3ee15372a4fb"}, {"type": "LinearAxis", "id": "58c7c06a-a053-4167-adba-7370fbe5cfe4"}, {"type": "Grid", "id": "49227fe6-7fe1-4409-a7b0-3db1a8f9359d"}, {"type": "GlyphRenderer", "id": "79ad33ae-42c5-4632-bb2a-784339c6693c"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "23d4abc7-6c59-45e2-b7b1-c9fa03bc2e3a"}, "above": [], "doc": null, "id": "fbb2bd2a-f666-406e-a59b-aa658868f2aa", "y_range": {"type": "DataRange1d", "id": "0e21bddd-d81a-4ee8-9941-47e80b0c7b7c"}, "below": [{"type": "LinearAxis", "id": "77f723b9-8551-418a-a342-ea4fd45846f0"}], "left": [{"type": "LinearAxis", "id": "58c7c06a-a053-4167-adba-7370fbe5cfe4"}]}}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "fbb2bd2a-f666-406e-a59b-aa658868f2aa"}, "tags": [], "doc": null, "id": "42feedfa-fa33-447a-b974-f0b8bd8c5950"}, "type": "PreviewSaveTool", "id": "42feedfa-fa33-447a-b974-f0b8bd8c5950"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "fbb2bd2a-f666-406e-a59b-aa658868f2aa"}, "tags": [], "doc": null, "id": "04ac2451-1309-4cf8-8114-16dd43d82088"}, "type": "ResizeTool", "id": "04ac2451-1309-4cf8-8114-16dd43d82088"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "angle_units": "deg", "angle": {"units": "deg", "field": "angle"}, "tags": [], "doc": null, "line_alpha": {"value": 0.1}, "length": {"units": "data", "value": 45}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "ecf8c802-1ddf-44b5-bf8a-24149976e989"}, "type": "Ray", "id": "ecf8c802-1ddf-44b5-bf8a-24149976e989"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "0e21bddd-d81a-4ee8-9941-47e80b0c7b7c"}, "type": "DataRange1d", "id": "0e21bddd-d81a-4ee8-9941-47e80b0c7b7c"}, {"attributes": {"nonselection_glyph": {"type": "Ray", "id": "ecf8c802-1ddf-44b5-bf8a-24149976e989"}, "data_source": {"type": "ColumnDataSource", "id": "621d9ae6-a109-4c98-bcee-82f97e5fcc94"}, "tags": [], "doc": null, "selection_glyph": null, "id": "79ad33ae-42c5-4632-bb2a-784339c6693c", "glyph": {"type": "Ray", "id": "f3c7c246-dfe4-47da-9041-5c547f72e639"}}, "type": "GlyphRenderer", "id": "79ad33ae-42c5-4632-bb2a-784339c6693c"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "fbb2bd2a-f666-406e-a59b-aa658868f2aa"}, "tags": [], "doc": null, "id": "ccdcb4c9-a51f-4aee-b9e0-0aad40ab0876"}, "type": "HelpTool", "id": "ccdcb4c9-a51f-4aee-b9e0-0aad40ab0876"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "772d970f-cf00-47bb-8a80-2637b2b5a524", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "772d970f-cf00-47bb-8a80-2637b2b5a524"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "fbb2bd2a-f666-406e-a59b-aa658868f2aa"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "37c09415-827d-46a0-b1ef-f2261a04102d"}, "type": "WheelZoomTool", "id": "37c09415-827d-46a0-b1ef-f2261a04102d"}, {"attributes": {"line_color": {"value": "#FB8072"}, "line_width": {"value": 2}, "angle_units": "deg", "angle": {"units": "deg", "field": "angle"}, "tags": [], "doc": null, "line_alpha": {"value": 1.0}, "length": {"units": "data", "value": 45}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "f3c7c246-dfe4-47da-9041-5c547f72e639"}, "type": "Ray", "id": "f3c7c246-dfe4-47da-9041-5c547f72e639"}, {"attributes": {"column_names": ["angle", "y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [1, 2, 3], "x": [1, 2, 3], "angle": [30, 45, 60]}, "id": "621d9ae6-a109-4c98-bcee-82f97e5fcc94"}, "type": "ColumnDataSource", "id": "621d9ae6-a109-4c98-bcee-82f97e5fcc94"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "fbb2bd2a-f666-406e-a59b-aa658868f2aa"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "f547272c-8608-4d60-bd83-663161f602d3"}, "ticker": {"type": "BasicTicker", "id": "29a42bf8-6a98-4279-8f9f-6827624b3481"}, "id": "58c7c06a-a053-4167-adba-7370fbe5cfe4"}, "type": "LinearAxis", "id": "58c7c06a-a053-4167-adba-7370fbe5cfe4"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "29a42bf8-6a98-4279-8f9f-6827624b3481", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "29a42bf8-6a98-4279-8f9f-6827624b3481"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "fbb2bd2a-f666-406e-a59b-aa658868f2aa"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "772d970f-cf00-47bb-8a80-2637b2b5a524"}, "id": "b37b908e-ed24-4899-9733-3ee15372a4fb"}, "type": "Grid", "id": "b37b908e-ed24-4899-9733-3ee15372a4fb"}, {"attributes": {"doc": null, "id": "d0812a6e-b520-4485-abda-6e38fb0e3f2e", "tags": []}, "type": "BasicTickFormatter", "id": "d0812a6e-b520-4485-abda-6e38fb0e3f2e"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "cbffaa46-6810-4ca9-b102-85034240a837"}, "type": "DataRange1d", "id": "cbffaa46-6810-4ca9-b102-85034240a837"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "23d4abc7-6c59-45e2-b7b1-c9fa03bc2e3a"}, "type": "ToolEvents", "id": "23d4abc7-6c59-45e2-b7b1-c9fa03bc2e3a"}, {"attributes": {"doc": null, "id": "f547272c-8608-4d60-bd83-663161f602d3", "tags": []}, "type": "BasicTickFormatter", "id": "f547272c-8608-4d60-bd83-663161f602d3"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "fbb2bd2a-f666-406e-a59b-aa658868f2aa"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "3b36c98d-6065-4d4a-8019-9c05ab6d93bd"}, "type": "PanTool", "id": "3b36c98d-6065-4d4a-8019-9c05ab6d93bd"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "fbb2bd2a-f666-406e-a59b-aa658868f2aa"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "d39c3a3d-a908-4042-93c5-fe7e19557050"}, "type": "BoxZoomTool", "id": "d39c3a3d-a908-4042-93c5-fe7e19557050"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("7faa8aec-f3a9-497a-b0c7-7055cdab2334", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("7faa8aec-f3a9-497a-b0c7-7055cdab2334", all_models);
    });
  }

}(this));