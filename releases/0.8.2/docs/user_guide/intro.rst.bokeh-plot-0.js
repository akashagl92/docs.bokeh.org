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

  var elt = document.getElementById("79568bc8-3669-4e9a-a5f9-70981b0960cf");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '79568bc8-3669-4e9a-a5f9-70981b0960cf' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "bd6c4273-fb82-4a85-80df-2661f39535ae", "type": "Circle", "attributes": {"tags": [], "y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 0.1, "units": "data"}, "id": "bd6c4273-fb82-4a85-80df-2661f39535ae", "radius": {"value": 0.3, "units": "data"}, "fill_color": {"value": "#1f77b4"}, "line_color": {"value": "#1f77b4"}, "doc": null, "x": {"field": "x", "units": "data"}, "line_alpha": {"value": 0.1, "units": "data"}}}, {"id": "c3f052c6-6c0d-4c1f-8eb8-c8221a226256", "type": "LinearAxis", "attributes": {"id": "c3f052c6-6c0d-4c1f-8eb8-c8221a226256", "formatter": {"id": "68e94136-8c91-4047-a957-fc9a5e6c2d01", "type": "BasicTickFormatter"}, "plot": {"id": "3e7df8a5-e8a8-4f16-8e42-7f5fd7b026a7", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "2474b81d-011e-46a0-8c3f-a96fb6554328", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "79884299-5c5c-4049-b5d3-18b9c63a0c9b", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "1ac868b4-818d-4af1-8d2a-e0763c4b446f", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "79884299-5c5c-4049-b5d3-18b9c63a0c9b", "doc": null, "tags": []}}, {"id": "3e7df8a5-e8a8-4f16-8e42-7f5fd7b026a7", "type": "Plot", "subtype": "Figure", "attributes": {"tool_events": {"id": "8a36f12c-c089-4207-8a09-f8811721aa8b", "type": "ToolEvents"}, "above": [], "extra_y_ranges": {}, "renderers": [{"id": "54627e82-fbae-43bb-b9b1-ddd17894df30", "type": "LinearAxis"}, {"id": "457274ae-a52e-4622-90de-f829c033eaf6", "type": "Grid"}, {"id": "c3f052c6-6c0d-4c1f-8eb8-c8221a226256", "type": "LinearAxis"}, {"id": "3db55db9-4a3a-4cb2-a7c3-bcecfe438cde", "type": "Grid"}, {"id": "5b47303c-cfe5-4ae5-a5cc-8f9e8fa16094", "type": "GlyphRenderer"}], "id": "3e7df8a5-e8a8-4f16-8e42-7f5fd7b026a7", "extra_x_ranges": {}, "doc": null, "below": [{"id": "54627e82-fbae-43bb-b9b1-ddd17894df30", "type": "LinearAxis"}], "right": [], "x_range": {"id": "79884299-5c5c-4049-b5d3-18b9c63a0c9b", "type": "DataRange1d"}, "left": [{"id": "c3f052c6-6c0d-4c1f-8eb8-c8221a226256", "type": "LinearAxis"}], "tools": [{"id": "229e64c2-6e4e-42bf-8076-750d629e0fc7", "type": "PanTool"}, {"id": "f48af1cb-b7c6-4345-9dbd-50b28e7ab21b", "type": "ResetTool"}, {"id": "ff9967a9-0951-43ec-8536-58e1f5e667c9", "type": "PreviewSaveTool"}], "plot_width": 300, "plot_height": 300, "y_range": {"id": "00c23da7-5f9b-41d8-a82c-e89dbfa5abca", "type": "DataRange1d"}, "tags": []}}, {"id": "5b47303c-cfe5-4ae5-a5cc-8f9e8fa16094", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": {"id": "bd6c4273-fb82-4a85-80df-2661f39535ae", "type": "Circle"}, "name": null, "data_source": {"id": "1ac868b4-818d-4af1-8d2a-e0763c4b446f", "type": "ColumnDataSource"}, "id": "5b47303c-cfe5-4ae5-a5cc-8f9e8fa16094", "glyph": {"id": "9c4139e1-9a1f-419f-acae-adb7d907fdc4", "type": "Circle"}, "tags": [], "doc": null}}, {"id": "d97500ac-766b-4225-8db6-c8c0e3d606b9", "type": "BasicTickFormatter", "attributes": {"id": "d97500ac-766b-4225-8db6-c8c0e3d606b9", "doc": null, "tags": []}}, {"id": "d24ad650-b743-4889-80cd-5198998d4a56", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "d24ad650-b743-4889-80cd-5198998d4a56", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "9c4139e1-9a1f-419f-acae-adb7d907fdc4", "type": "Circle", "attributes": {"y": {"field": "y", "units": "data"}, "fill_alpha": {"value": 0.5, "units": "data"}, "id": "9c4139e1-9a1f-419f-acae-adb7d907fdc4", "radius": {"value": 0.3, "units": "data"}, "fill_color": {"value": "#1f77b4"}, "line_color": {"value": "#1f77b4"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "line_alpha": {"value": 0.5, "units": "data"}}}, {"id": "229e64c2-6e4e-42bf-8076-750d629e0fc7", "type": "PanTool", "attributes": {"dimensions": ["width", "height"], "id": "229e64c2-6e4e-42bf-8076-750d629e0fc7", "plot": {"id": "3e7df8a5-e8a8-4f16-8e42-7f5fd7b026a7", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": []}}, {"id": "f48af1cb-b7c6-4345-9dbd-50b28e7ab21b", "type": "ResetTool", "attributes": {"plot": {"id": "3e7df8a5-e8a8-4f16-8e42-7f5fd7b026a7", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "f48af1cb-b7c6-4345-9dbd-50b28e7ab21b"}}, {"id": "ff9967a9-0951-43ec-8536-58e1f5e667c9", "type": "PreviewSaveTool", "attributes": {"plot": {"id": "3e7df8a5-e8a8-4f16-8e42-7f5fd7b026a7", "type": "Plot", "subtype": "Figure"}, "doc": null, "tags": [], "id": "ff9967a9-0951-43ec-8536-58e1f5e667c9"}}, {"id": "68e94136-8c91-4047-a957-fc9a5e6c2d01", "type": "BasicTickFormatter", "attributes": {"id": "68e94136-8c91-4047-a957-fc9a5e6c2d01", "doc": null, "tags": []}}, {"id": "54627e82-fbae-43bb-b9b1-ddd17894df30", "type": "LinearAxis", "attributes": {"id": "54627e82-fbae-43bb-b9b1-ddd17894df30", "formatter": {"id": "d97500ac-766b-4225-8db6-c8c0e3d606b9", "type": "BasicTickFormatter"}, "plot": {"id": "3e7df8a5-e8a8-4f16-8e42-7f5fd7b026a7", "type": "Plot", "subtype": "Figure"}, "ticker": {"id": "d24ad650-b743-4889-80cd-5198998d4a56", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "00c23da7-5f9b-41d8-a82c-e89dbfa5abca", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "1ac868b4-818d-4af1-8d2a-e0763c4b446f", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "00c23da7-5f9b-41d8-a82c-e89dbfa5abca", "doc": null, "tags": []}}, {"id": "3db55db9-4a3a-4cb2-a7c3-bcecfe438cde", "type": "Grid", "attributes": {"id": "3db55db9-4a3a-4cb2-a7c3-bcecfe438cde", "plot": {"id": "3e7df8a5-e8a8-4f16-8e42-7f5fd7b026a7", "type": "Plot", "subtype": "Figure"}, "dimension": 1, "ticker": {"id": "2474b81d-011e-46a0-8c3f-a96fb6554328", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "8a36f12c-c089-4207-8a09-f8811721aa8b", "type": "ToolEvents", "attributes": {"geometries": [], "id": "8a36f12c-c089-4207-8a09-f8811721aa8b", "doc": null, "tags": []}}, {"id": "2474b81d-011e-46a0-8c3f-a96fb6554328", "type": "BasicTicker", "attributes": {"num_minor_ticks": 5, "id": "2474b81d-011e-46a0-8c3f-a96fb6554328", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "457274ae-a52e-4622-90de-f829c033eaf6", "type": "Grid", "attributes": {"id": "457274ae-a52e-4622-90de-f829c033eaf6", "plot": {"id": "3e7df8a5-e8a8-4f16-8e42-7f5fd7b026a7", "type": "Plot", "subtype": "Figure"}, "dimension": 0, "ticker": {"id": "d24ad650-b743-4889-80cd-5198998d4a56", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "1ac868b4-818d-4af1-8d2a-e0763c4b446f", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"y": [2, 3, 1, 1.5], "x": [1, 2.5, 3, 2]}, "column_names": ["x", "y"], "id": "1ac868b4-818d-4af1-8d2a-e0763c4b446f", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("79568bc8-3669-4e9a-a5f9-70981b0960cf", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("79568bc8-3669-4e9a-a5f9-70981b0960cf", all_models);
    });
  }

}(this));