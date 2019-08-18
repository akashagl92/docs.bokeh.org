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

  var elt = document.getElementById("94284730-ff5b-49ea-9c8a-24437ed85e0b");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '94284730-ff5b-49ea-9c8a-24437ed85e0b' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "09ee7b09-b3b4-494e-ae67-bce56c637dbd"}, "id": "09ee7b09-b3b4-494e-ae67-bce56c637dbd"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "2605cf4b-59a1-4927-a67e-19cee092e18d", "subtype": "Figure"}, "id": "56e3f206-938b-4c0e-ae75-3285cdc8139c", "tags": [], "doc": null}, "id": "56e3f206-938b-4c0e-ae75-3285cdc8139c"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "09ee7b09-b3b4-494e-ae67-bce56c637dbd"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "422f454a-b51a-4321-bb0c-ed64501159dd"}, "plot": {"type": "Plot", "id": "2605cf4b-59a1-4927-a67e-19cee092e18d", "subtype": "Figure"}, "id": "c62ad7a0-bb53-479c-8793-773e5a02492a"}, "id": "c62ad7a0-bb53-479c-8793-773e5a02492a"}, {"type": "Ray", "attributes": {"angle": {"units": "deg", "field": "angle"}, "tags": [], "length": {"units": "data", "value": 45}, "x": {"field": "x"}, "y": {"field": "y"}, "line_width": {"value": 2}, "line_color": {"value": "#1f77b4"}, "doc": null, "angle_units": "deg", "id": "2ea3a430-0108-48b0-9240-3f439f569319", "line_alpha": {"value": 0.1}}, "id": "2ea3a430-0108-48b0-9240-3f439f569319"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [1, 2, 3], "angle": [30, 45, 60], "x": [1, 2, 3]}, "doc": null, "id": "e23721fe-e9e4-4dff-b007-b76438daa06a", "column_names": ["y", "angle", "x"]}, "id": "e23721fe-e9e4-4dff-b007-b76438daa06a"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2605cf4b-59a1-4927-a67e-19cee092e18d", "subtype": "Figure"}, "id": "499214d0-807e-401f-a742-d00125f105d5"}, "id": "499214d0-807e-401f-a742-d00125f105d5"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "dbbe2e97-8308-412a-8877-b831ebdf463e"}, "id": "dbbe2e97-8308-412a-8877-b831ebdf463e"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "e23721fe-e9e4-4dff-b007-b76438daa06a"}, "tags": [], "glyph": {"type": "Ray", "id": "b86d4d7a-a3cf-4c77-a7a4-767f1677dfb6"}, "doc": null, "nonselection_glyph": {"type": "Ray", "id": "2ea3a430-0108-48b0-9240-3f439f569319"}, "selection_glyph": null, "id": "4d2d9811-a7c6-4119-8cf8-73eeb7f9b438"}, "id": "4d2d9811-a7c6-4119-8cf8-73eeb7f9b438"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "db9ae326-c60e-410a-846f-3215eebcc380", "tags": [], "geometries": []}, "id": "db9ae326-c60e-410a-846f-3215eebcc380"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2605cf4b-59a1-4927-a67e-19cee092e18d", "subtype": "Figure"}, "id": "f5ee0296-fe46-43b5-83d8-0ab1af89bcd0"}, "id": "f5ee0296-fe46-43b5-83d8-0ab1af89bcd0"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "f59047bf-7c2a-4bab-b2bb-c3151fa0e88c"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "db9ae326-c60e-410a-846f-3215eebcc380"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "fb6141f9-8e2e-4487-b76f-1785a8ac65df"}, {"type": "Grid", "id": "22497d1b-d5b3-4656-9383-7f4240843c08"}, {"type": "LinearAxis", "id": "c62ad7a0-bb53-479c-8793-773e5a02492a"}, {"type": "Grid", "id": "db28f4af-0754-4325-983a-11bf7fac8ccb"}, {"type": "GlyphRenderer", "id": "4d2d9811-a7c6-4119-8cf8-73eeb7f9b438"}], "below": [{"type": "LinearAxis", "id": "fb6141f9-8e2e-4487-b76f-1785a8ac65df"}], "left": [{"type": "LinearAxis", "id": "c62ad7a0-bb53-479c-8793-773e5a02492a"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "tools": [{"type": "PanTool", "id": "f5ee0296-fe46-43b5-83d8-0ab1af89bcd0"}, {"type": "WheelZoomTool", "id": "ac5ab015-7cef-4030-83ad-ee1c1641b5d5"}, {"type": "BoxZoomTool", "id": "499214d0-807e-401f-a742-d00125f105d5"}, {"type": "PreviewSaveTool", "id": "fb5a7941-699a-460d-91c4-97cb243ace0c"}, {"type": "ResizeTool", "id": "1f82ead3-52a7-4ed7-8eb0-b4d736071cf5"}, {"type": "ResetTool", "id": "56e3f206-938b-4c0e-ae75-3285cdc8139c"}, {"type": "HelpTool", "id": "d40c3a4a-1448-4853-ba4f-7ceb2518da8b"}], "x_range": {"type": "DataRange1d", "id": "cb61d679-ad67-4bdc-92b8-964e09bb075d"}, "id": "2605cf4b-59a1-4927-a67e-19cee092e18d"}, "id": "2605cf4b-59a1-4927-a67e-19cee092e18d", "subtype": "Figure"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "f357e013-b788-4d87-95b0-b2c2ae3fb0b6", "tags": []}, "id": "f357e013-b788-4d87-95b0-b2c2ae3fb0b6"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "cb61d679-ad67-4bdc-92b8-964e09bb075d", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "cb61d679-ad67-4bdc-92b8-964e09bb075d"}, {"type": "Ray", "attributes": {"angle": {"units": "deg", "field": "angle"}, "tags": [], "length": {"units": "data", "value": 45}, "x": {"field": "x"}, "y": {"field": "y"}, "line_width": {"value": 2}, "line_color": {"value": "#FB8072"}, "doc": null, "angle_units": "deg", "id": "b86d4d7a-a3cf-4c77-a7a4-767f1677dfb6", "line_alpha": {"value": 1.0}}, "id": "b86d4d7a-a3cf-4c77-a7a4-767f1677dfb6"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "dbbe2e97-8308-412a-8877-b831ebdf463e"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2605cf4b-59a1-4927-a67e-19cee092e18d", "subtype": "Figure"}, "dimension": 0, "id": "22497d1b-d5b3-4656-9383-7f4240843c08"}, "id": "22497d1b-d5b3-4656-9383-7f4240843c08"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "09ee7b09-b3b4-494e-ae67-bce56c637dbd"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2605cf4b-59a1-4927-a67e-19cee092e18d", "subtype": "Figure"}, "dimension": 1, "id": "db28f4af-0754-4325-983a-11bf7fac8ccb"}, "id": "db28f4af-0754-4325-983a-11bf7fac8ccb"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "2605cf4b-59a1-4927-a67e-19cee092e18d", "subtype": "Figure"}, "id": "fb5a7941-699a-460d-91c4-97cb243ace0c", "tags": [], "doc": null}, "id": "fb5a7941-699a-460d-91c4-97cb243ace0c"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "f59047bf-7c2a-4bab-b2bb-c3151fa0e88c", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "f59047bf-7c2a-4bab-b2bb-c3151fa0e88c"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "dbbe2e97-8308-412a-8877-b831ebdf463e"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "f357e013-b788-4d87-95b0-b2c2ae3fb0b6"}, "plot": {"type": "Plot", "id": "2605cf4b-59a1-4927-a67e-19cee092e18d", "subtype": "Figure"}, "id": "fb6141f9-8e2e-4487-b76f-1785a8ac65df"}, "id": "fb6141f9-8e2e-4487-b76f-1785a8ac65df"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2605cf4b-59a1-4927-a67e-19cee092e18d", "subtype": "Figure"}, "id": "ac5ab015-7cef-4030-83ad-ee1c1641b5d5"}, "id": "ac5ab015-7cef-4030-83ad-ee1c1641b5d5"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "2605cf4b-59a1-4927-a67e-19cee092e18d", "subtype": "Figure"}, "id": "d40c3a4a-1448-4853-ba4f-7ceb2518da8b", "tags": [], "doc": null}, "id": "d40c3a4a-1448-4853-ba4f-7ceb2518da8b"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "422f454a-b51a-4321-bb0c-ed64501159dd", "tags": []}, "id": "422f454a-b51a-4321-bb0c-ed64501159dd"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "2605cf4b-59a1-4927-a67e-19cee092e18d", "subtype": "Figure"}, "id": "1f82ead3-52a7-4ed7-8eb0-b4d736071cf5", "tags": [], "doc": null}, "id": "1f82ead3-52a7-4ed7-8eb0-b4d736071cf5"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("94284730-ff5b-49ea-9c8a-24437ed85e0b", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("94284730-ff5b-49ea-9c8a-24437ed85e0b", all_models);
    });
  }

}(this));