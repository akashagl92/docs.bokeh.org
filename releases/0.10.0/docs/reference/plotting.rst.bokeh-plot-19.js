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

  var elt = document.getElementById("990eedac-b2c4-45ce-985b-73a7f82375be");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '990eedac-b2c4-45ce-985b-73a7f82375be' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "1ee45c3c-c018-4642-9c2a-27fbe4358e1d"}, "type": "DataRange1d", "id": "1ee45c3c-c018-4642-9c2a-27fbe4358e1d"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "ee3691cd-f241-4e8b-a3d9-97ac7f0b82f7"}, "type": "DataRange1d", "id": "ee3691cd-f241-4e8b-a3d9-97ac7f0b82f7"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6a0216af-b947-46e3-b6d2-1a7387f53a6e"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "3f1974ff-9b27-48eb-a7b8-6f2351b3d74d"}, "ticker": {"type": "BasicTicker", "id": "7727cd5b-ae55-4d53-bdda-20b0f91e2fc8"}, "id": "c48497bb-79b3-467c-af66-76d91a30bb2c"}, "type": "LinearAxis", "id": "c48497bb-79b3-467c-af66-76d91a30bb2c"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "4830f1d5-1f45-4deb-bd1e-12f4168d8bac", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "4830f1d5-1f45-4deb-bd1e-12f4168d8bac"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "7727cd5b-ae55-4d53-bdda-20b0f91e2fc8", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "7727cd5b-ae55-4d53-bdda-20b0f91e2fc8"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6a0216af-b947-46e3-b6d2-1a7387f53a6e"}, "tags": [], "doc": null, "id": "1c39ca9c-4fbe-4d76-bd19-2b29263f66d0"}, "type": "ResetTool", "id": "1c39ca9c-4fbe-4d76-bd19-2b29263f66d0"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6a0216af-b947-46e3-b6d2-1a7387f53a6e"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "28fb5d32-1b1e-45f1-9069-e336dfd08c41"}, "type": "BoxZoomTool", "id": "28fb5d32-1b1e-45f1-9069-e336dfd08c41"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "4d228727-7632-4f07-870a-7631d6bf08fb"}, "type": "ToolEvents", "id": "4d228727-7632-4f07-870a-7631d6bf08fb"}, {"attributes": {"nonselection_glyph": {"type": "SquareCross", "id": "908ee280-9a3a-4407-b937-885d28f4d0a9"}, "data_source": {"type": "ColumnDataSource", "id": "08e43fb6-5228-4026-9745-701553a0da31"}, "tags": [], "doc": null, "selection_glyph": null, "id": "f95d28ba-ccb3-4c00-b8f3-70c9813927c9", "glyph": {"type": "SquareCross", "id": "c80f99e1-a9ea-483f-8e71-0c31b275deca"}}, "type": "GlyphRenderer", "id": "f95d28ba-ccb3-4c00-b8f3-70c9813927c9"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6a0216af-b947-46e3-b6d2-1a7387f53a6e"}, "tags": [], "doc": null, "id": "c968023a-7c72-4da1-b519-68ccfdb0642c"}, "type": "HelpTool", "id": "c968023a-7c72-4da1-b519-68ccfdb0642c"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "line_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "908ee280-9a3a-4407-b937-885d28f4d0a9", "size": {"units": "screen", "field": "size"}}, "type": "SquareCross", "id": "908ee280-9a3a-4407-b937-885d28f4d0a9"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6a0216af-b947-46e3-b6d2-1a7387f53a6e"}, "tags": [], "doc": null, "id": "058bb6ca-dfdd-4389-b20a-99209025703c"}, "type": "ResizeTool", "id": "058bb6ca-dfdd-4389-b20a-99209025703c"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6a0216af-b947-46e3-b6d2-1a7387f53a6e"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "4830f1d5-1f45-4deb-bd1e-12f4168d8bac"}, "id": "c5d420c0-6c5c-4db3-95de-e6f1fcb19ff0"}, "type": "Grid", "id": "c5d420c0-6c5c-4db3-95de-e6f1fcb19ff0"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6a0216af-b947-46e3-b6d2-1a7387f53a6e"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "87f047d0-a0ef-4ec9-8e22-0996553a87c5"}, "type": "PanTool", "id": "87f047d0-a0ef-4ec9-8e22-0996553a87c5"}, {"attributes": {"column_names": ["y", "x", "size"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [1, 2, 3], "x": [1, 2, 3], "size": [10, 20, 25]}, "id": "08e43fb6-5228-4026-9745-701553a0da31"}, "type": "ColumnDataSource", "id": "08e43fb6-5228-4026-9745-701553a0da31"}, {"attributes": {"doc": null, "id": "e8670a75-29aa-4435-8e34-3ea1654c50d5", "tags": []}, "type": "BasicTickFormatter", "id": "e8670a75-29aa-4435-8e34-3ea1654c50d5"}, {"attributes": {"line_color": {"value": "#7FC97F"}, "line_width": {"value": 2}, "fill_color": null, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "line_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "c80f99e1-a9ea-483f-8e71-0c31b275deca", "size": {"units": "screen", "field": "size"}}, "type": "SquareCross", "id": "c80f99e1-a9ea-483f-8e71-0c31b275deca"}, {"subtype": "Figure", "type": "Plot", "id": "6a0216af-b947-46e3-b6d2-1a7387f53a6e", "attributes": {"x_range": {"type": "DataRange1d", "id": "1ee45c3c-c018-4642-9c2a-27fbe4358e1d"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "87f047d0-a0ef-4ec9-8e22-0996553a87c5"}, {"type": "WheelZoomTool", "id": "e4ba0f6d-218d-4458-9baf-f058e85abad8"}, {"type": "BoxZoomTool", "id": "28fb5d32-1b1e-45f1-9069-e336dfd08c41"}, {"type": "PreviewSaveTool", "id": "70db7671-da40-4e0d-90b7-75dad2a2e795"}, {"type": "ResizeTool", "id": "058bb6ca-dfdd-4389-b20a-99209025703c"}, {"type": "ResetTool", "id": "1c39ca9c-4fbe-4d76-bd19-2b29263f66d0"}, {"type": "HelpTool", "id": "c968023a-7c72-4da1-b519-68ccfdb0642c"}], "extra_y_ranges": {}, "plot_width": 300, "renderers": [{"type": "LinearAxis", "id": "d8fd32f6-ab02-4d2f-826b-81032ebc4069"}, {"type": "Grid", "id": "c5d420c0-6c5c-4db3-95de-e6f1fcb19ff0"}, {"type": "LinearAxis", "id": "c48497bb-79b3-467c-af66-76d91a30bb2c"}, {"type": "Grid", "id": "4acdfbf5-9f28-4278-909f-1b03a10ead9a"}, {"type": "GlyphRenderer", "id": "f95d28ba-ccb3-4c00-b8f3-70c9813927c9"}], "extra_x_ranges": {}, "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "4d228727-7632-4f07-870a-7631d6bf08fb"}, "above": [], "doc": null, "id": "6a0216af-b947-46e3-b6d2-1a7387f53a6e", "y_range": {"type": "DataRange1d", "id": "ee3691cd-f241-4e8b-a3d9-97ac7f0b82f7"}, "below": [{"type": "LinearAxis", "id": "d8fd32f6-ab02-4d2f-826b-81032ebc4069"}], "left": [{"type": "LinearAxis", "id": "c48497bb-79b3-467c-af66-76d91a30bb2c"}]}}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6a0216af-b947-46e3-b6d2-1a7387f53a6e"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "e8670a75-29aa-4435-8e34-3ea1654c50d5"}, "ticker": {"type": "BasicTicker", "id": "4830f1d5-1f45-4deb-bd1e-12f4168d8bac"}, "id": "d8fd32f6-ab02-4d2f-826b-81032ebc4069"}, "type": "LinearAxis", "id": "d8fd32f6-ab02-4d2f-826b-81032ebc4069"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6a0216af-b947-46e3-b6d2-1a7387f53a6e"}, "tags": [], "doc": null, "id": "70db7671-da40-4e0d-90b7-75dad2a2e795"}, "type": "PreviewSaveTool", "id": "70db7671-da40-4e0d-90b7-75dad2a2e795"}, {"attributes": {"doc": null, "id": "3f1974ff-9b27-48eb-a7b8-6f2351b3d74d", "tags": []}, "type": "BasicTickFormatter", "id": "3f1974ff-9b27-48eb-a7b8-6f2351b3d74d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6a0216af-b947-46e3-b6d2-1a7387f53a6e"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "e4ba0f6d-218d-4458-9baf-f058e85abad8"}, "type": "WheelZoomTool", "id": "e4ba0f6d-218d-4458-9baf-f058e85abad8"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "6a0216af-b947-46e3-b6d2-1a7387f53a6e"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "7727cd5b-ae55-4d53-bdda-20b0f91e2fc8"}, "id": "4acdfbf5-9f28-4278-909f-1b03a10ead9a"}, "type": "Grid", "id": "4acdfbf5-9f28-4278-909f-1b03a10ead9a"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("990eedac-b2c4-45ce-985b-73a7f82375be", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("990eedac-b2c4-45ce-985b-73a7f82375be", all_models);
    });
  }

}(this));