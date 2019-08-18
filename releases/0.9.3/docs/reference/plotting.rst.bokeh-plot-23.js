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

  var elt = document.getElementById("09a8debe-4317-4efd-9cc5-ca2d843d0e86");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '09a8debe-4317-4efd-9cc5-ca2d843d0e86' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "0266b998-8f7b-4ae3-bf9b-9f95348941b1", "subtype": "Figure"}, "id": "eebe01da-71d6-425f-950e-849822fd719c"}, "id": "eebe01da-71d6-425f-950e-849822fd719c"}, {"type": "Plot", "attributes": {"plot_height": 300, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "5d195781-d345-4c5d-ab93-ae42187205ca"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "ed037eae-d834-4841-97d2-854f0e52974e"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "1aec3815-a88f-45d2-bcab-5bd855a12f36"}, {"type": "Grid", "id": "15ba5187-c160-4adf-8f50-86c2171eae6a"}, {"type": "LinearAxis", "id": "0ed54ab0-c917-4845-abc8-5ed3ff922646"}, {"type": "Grid", "id": "cd36a77b-482c-4f6b-9e9d-6ed639e71124"}, {"type": "GlyphRenderer", "id": "9bcd935f-3e3e-404b-ae10-1dd2b6adec10"}], "below": [{"type": "LinearAxis", "id": "1aec3815-a88f-45d2-bcab-5bd855a12f36"}], "left": [{"type": "LinearAxis", "id": "0ed54ab0-c917-4845-abc8-5ed3ff922646"}], "above": [], "tags": [], "plot_width": 300, "extra_y_ranges": {}, "tools": [{"type": "PanTool", "id": "eebe01da-71d6-425f-950e-849822fd719c"}, {"type": "WheelZoomTool", "id": "248d4477-12e9-4a95-bc17-419af72c1a36"}, {"type": "BoxZoomTool", "id": "f10e7eef-d0ca-4ae7-90c9-b8765944a400"}, {"type": "PreviewSaveTool", "id": "a7b7c383-aa6a-4959-b888-5aaf665f4e22"}, {"type": "ResizeTool", "id": "071a6482-2ed4-4178-8102-d91441227ecd"}, {"type": "ResetTool", "id": "9f62ae3d-eed6-475e-8b5f-27456e4bb3d4"}, {"type": "HelpTool", "id": "2ab1af24-0be8-48aa-8af6-ff99f8bcd439"}], "x_range": {"type": "DataRange1d", "id": "8fd96c22-d8ef-4e50-bb7a-b092beaaf482"}, "id": "0266b998-8f7b-4ae3-bf9b-9f95348941b1"}, "id": "0266b998-8f7b-4ae3-bf9b-9f95348941b1", "subtype": "Figure"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "fcdc34d8-0f6e-48d0-aba5-3fedd730fa89", "tags": []}, "id": "fcdc34d8-0f6e-48d0-aba5-3fedd730fa89"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "8fd96c22-d8ef-4e50-bb7a-b092beaaf482", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "8fd96c22-d8ef-4e50-bb7a-b092beaaf482"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "95fa4593-87e2-466a-aa3b-38b8e3c1b7eb"}, "id": "95fa4593-87e2-466a-aa3b-38b8e3c1b7eb"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "5f2fbd42-d83e-49f1-829a-27190aa8f9c6"}, "id": "5f2fbd42-d83e-49f1-829a-27190aa8f9c6"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "95fa4593-87e2-466a-aa3b-38b8e3c1b7eb"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "fcdc34d8-0f6e-48d0-aba5-3fedd730fa89"}, "plot": {"type": "Plot", "id": "0266b998-8f7b-4ae3-bf9b-9f95348941b1", "subtype": "Figure"}, "id": "0ed54ab0-c917-4845-abc8-5ed3ff922646"}, "id": "0ed54ab0-c917-4845-abc8-5ed3ff922646"}, {"type": "X", "attributes": {"fill_alpha": {"value": 1.0}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#fa9fb5"}, "size": {"units": "screen", "field": "size"}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#fa9fb5"}, "doc": null, "id": "c33faf4b-8881-42de-88f7-bc2b48956fc4"}, "id": "c33faf4b-8881-42de-88f7-bc2b48956fc4"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "ed037eae-d834-4841-97d2-854f0e52974e", "tags": [], "geometries": []}, "id": "ed037eae-d834-4841-97d2-854f0e52974e"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "95fa4593-87e2-466a-aa3b-38b8e3c1b7eb"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "0266b998-8f7b-4ae3-bf9b-9f95348941b1", "subtype": "Figure"}, "dimension": 1, "id": "cd36a77b-482c-4f6b-9e9d-6ed639e71124"}, "id": "cd36a77b-482c-4f6b-9e9d-6ed639e71124"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "0266b998-8f7b-4ae3-bf9b-9f95348941b1", "subtype": "Figure"}, "id": "071a6482-2ed4-4178-8102-d91441227ecd", "tags": [], "doc": null}, "id": "071a6482-2ed4-4178-8102-d91441227ecd"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "5f2fbd42-d83e-49f1-829a-27190aa8f9c6"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "0266b998-8f7b-4ae3-bf9b-9f95348941b1", "subtype": "Figure"}, "dimension": 0, "id": "15ba5187-c160-4adf-8f50-86c2171eae6a"}, "id": "15ba5187-c160-4adf-8f50-86c2171eae6a"}, {"type": "X", "attributes": {"fill_alpha": {"value": 0.1}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "field": "size"}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "f47ba050-1459-4e19-af91-d03a10d4f76e"}, "id": "f47ba050-1459-4e19-af91-d03a10d4f76e"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "5f2fbd42-d83e-49f1-829a-27190aa8f9c6"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "874c1a01-3fab-4f16-af3a-3ff324fe84fa"}, "plot": {"type": "Plot", "id": "0266b998-8f7b-4ae3-bf9b-9f95348941b1", "subtype": "Figure"}, "id": "1aec3815-a88f-45d2-bcab-5bd855a12f36"}, "id": "1aec3815-a88f-45d2-bcab-5bd855a12f36"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "0266b998-8f7b-4ae3-bf9b-9f95348941b1", "subtype": "Figure"}, "id": "248d4477-12e9-4a95-bc17-419af72c1a36"}, "id": "248d4477-12e9-4a95-bc17-419af72c1a36"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "874c1a01-3fab-4f16-af3a-3ff324fe84fa", "tags": []}, "id": "874c1a01-3fab-4f16-af3a-3ff324fe84fa"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "0266b998-8f7b-4ae3-bf9b-9f95348941b1", "subtype": "Figure"}, "id": "f10e7eef-d0ca-4ae7-90c9-b8765944a400"}, "id": "f10e7eef-d0ca-4ae7-90c9-b8765944a400"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "06d7e2b2-58d1-4e67-b040-7d2e02357074"}, "tags": [], "glyph": {"type": "X", "id": "c33faf4b-8881-42de-88f7-bc2b48956fc4"}, "doc": null, "nonselection_glyph": {"type": "X", "id": "f47ba050-1459-4e19-af91-d03a10d4f76e"}, "selection_glyph": null, "id": "9bcd935f-3e3e-404b-ae10-1dd2b6adec10"}, "id": "9bcd935f-3e3e-404b-ae10-1dd2b6adec10"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "0266b998-8f7b-4ae3-bf9b-9f95348941b1", "subtype": "Figure"}, "id": "9f62ae3d-eed6-475e-8b5f-27456e4bb3d4", "tags": [], "doc": null}, "id": "9f62ae3d-eed6-475e-8b5f-27456e4bb3d4"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "5d195781-d345-4c5d-ab93-ae42187205ca", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "5d195781-d345-4c5d-ab93-ae42187205ca"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [1, 2, 3], "x": [1, 2, 3], "size": [10, 20, 25]}, "doc": null, "id": "06d7e2b2-58d1-4e67-b040-7d2e02357074", "column_names": ["y", "x", "size"]}, "id": "06d7e2b2-58d1-4e67-b040-7d2e02357074"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "0266b998-8f7b-4ae3-bf9b-9f95348941b1", "subtype": "Figure"}, "id": "2ab1af24-0be8-48aa-8af6-ff99f8bcd439", "tags": [], "doc": null}, "id": "2ab1af24-0be8-48aa-8af6-ff99f8bcd439"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "0266b998-8f7b-4ae3-bf9b-9f95348941b1", "subtype": "Figure"}, "id": "a7b7c383-aa6a-4959-b888-5aaf665f4e22", "tags": [], "doc": null}, "id": "a7b7c383-aa6a-4959-b888-5aaf665f4e22"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("09a8debe-4317-4efd-9cc5-ca2d843d0e86", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("09a8debe-4317-4efd-9cc5-ca2d843d0e86", all_models);
    });
  }

}(this));