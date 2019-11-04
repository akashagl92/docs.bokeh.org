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

  var elt = document.getElementById("44fc169a-bd9a-484c-888f-093e7a400424");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '44fc169a-bd9a-484c-888f-093e7a400424' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "d47b206b-cf3e-4722-a328-61313cc7f2cd"}, "tags": [], "doc": null, "id": "b834dc7c-9c67-467a-b75a-86f9725545a1"}, "type": "HelpTool", "id": "b834dc7c-9c67-467a-b75a-86f9725545a1"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "d47b206b-cf3e-4722-a328-61313cc7f2cd"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "2fd218da-74a9-48dd-9dd6-2d03dff294ac"}, "id": "0a6f9d1b-5e54-4b99-b354-226edc69f61d"}, "type": "Grid", "id": "0a6f9d1b-5e54-4b99-b354-226edc69f61d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "d47b206b-cf3e-4722-a328-61313cc7f2cd"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "0da48f09-b6a8-4caa-8179-f4daa33b7ec5"}, "ticker": {"type": "BasicTicker", "id": "34bed6aa-2a0e-4848-8461-4a76adbc5466"}, "id": "c508e790-a6b9-47d4-9fce-594f7ad2be68"}, "type": "LinearAxis", "id": "c508e790-a6b9-47d4-9fce-594f7ad2be68"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "5cfbfa17-e2e6-4701-9359-d82b7779155b"}, "type": "ToolEvents", "id": "5cfbfa17-e2e6-4701-9359-d82b7779155b"}, {"attributes": {"nonselection_glyph": {"type": "Ray", "id": "40b0deba-b086-4561-9ef8-ff85e329733d"}, "data_source": {"type": "ColumnDataSource", "id": "4c2174f8-1b90-40f6-9e80-6dedcf8c806e"}, "tags": [], "doc": null, "selection_glyph": null, "id": "222eb0cc-fba7-47b3-a6fb-7a6a53973289", "glyph": {"type": "Ray", "id": "daac6d00-541c-4bf1-82bf-0b693debab4b"}}, "type": "GlyphRenderer", "id": "222eb0cc-fba7-47b3-a6fb-7a6a53973289"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "d47b206b-cf3e-4722-a328-61313cc7f2cd"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "34bed6aa-2a0e-4848-8461-4a76adbc5466"}, "id": "627a0591-e188-4300-a890-96ae811b6011"}, "type": "Grid", "id": "627a0591-e188-4300-a890-96ae811b6011"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "40dc3d59-be05-4f51-82d6-804e0c583b47"}, "type": "DataRange1d", "id": "40dc3d59-be05-4f51-82d6-804e0c583b47"}, {"attributes": {"doc": null, "id": "2c059c09-9fb3-4b85-9617-f868ba4508a8", "tags": []}, "type": "BasicTickFormatter", "id": "2c059c09-9fb3-4b85-9617-f868ba4508a8"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "d47b206b-cf3e-4722-a328-61313cc7f2cd"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "5e82fcfe-ef88-43fb-bede-e1f6059036bc"}, "type": "WheelZoomTool", "id": "5e82fcfe-ef88-43fb-bede-e1f6059036bc"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "b174a17d-d78e-498a-bfd5-90f936eef27e"}, "type": "DataRange1d", "id": "b174a17d-d78e-498a-bfd5-90f936eef27e"}, {"attributes": {"line_color": {"value": "#FB8072"}, "line_width": {"value": 2}, "angle": {"units": "rad", "value": -0.7}, "line_alpha": {"value": 1.0}, "doc": null, "tags": [], "length": {"units": "data", "value": 45}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "daac6d00-541c-4bf1-82bf-0b693debab4b"}, "type": "Ray", "id": "daac6d00-541c-4bf1-82bf-0b693debab4b"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "d47b206b-cf3e-4722-a328-61313cc7f2cd"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "50fabd8c-4835-4e96-9ded-1bc48f433f50"}, "type": "PanTool", "id": "50fabd8c-4835-4e96-9ded-1bc48f433f50"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "2fd218da-74a9-48dd-9dd6-2d03dff294ac", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "2fd218da-74a9-48dd-9dd6-2d03dff294ac"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [1, 2, 3], "x": [1, 2, 3]}, "id": "4c2174f8-1b90-40f6-9e80-6dedcf8c806e"}, "type": "ColumnDataSource", "id": "4c2174f8-1b90-40f6-9e80-6dedcf8c806e"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "d47b206b-cf3e-4722-a328-61313cc7f2cd"}, "tags": [], "doc": null, "id": "f27decf5-3e4e-4757-b410-d4e86e0927bc"}, "type": "ResizeTool", "id": "f27decf5-3e4e-4757-b410-d4e86e0927bc"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "34bed6aa-2a0e-4848-8461-4a76adbc5466", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "34bed6aa-2a0e-4848-8461-4a76adbc5466"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "d47b206b-cf3e-4722-a328-61313cc7f2cd"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "c9345053-d13b-4317-8a72-4faaafc86a01"}, "type": "BoxZoomTool", "id": "c9345053-d13b-4317-8a72-4faaafc86a01"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "d47b206b-cf3e-4722-a328-61313cc7f2cd"}, "tags": [], "doc": null, "id": "470788b1-fecf-4073-b004-31a24f49688e"}, "type": "ResetTool", "id": "470788b1-fecf-4073-b004-31a24f49688e"}, {"attributes": {"doc": null, "id": "0da48f09-b6a8-4caa-8179-f4daa33b7ec5", "tags": []}, "type": "BasicTickFormatter", "id": "0da48f09-b6a8-4caa-8179-f4daa33b7ec5"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "d47b206b-cf3e-4722-a328-61313cc7f2cd"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "2c059c09-9fb3-4b85-9617-f868ba4508a8"}, "ticker": {"type": "BasicTicker", "id": "2fd218da-74a9-48dd-9dd6-2d03dff294ac"}, "id": "e4e7f7c5-8ddc-4720-8c98-6120aa9961f2"}, "type": "LinearAxis", "id": "e4e7f7c5-8ddc-4720-8c98-6120aa9961f2"}, {"subtype": "Figure", "type": "Plot", "id": "d47b206b-cf3e-4722-a328-61313cc7f2cd", "attributes": {"x_range": {"type": "DataRange1d", "id": "b174a17d-d78e-498a-bfd5-90f936eef27e"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "50fabd8c-4835-4e96-9ded-1bc48f433f50"}, {"type": "WheelZoomTool", "id": "5e82fcfe-ef88-43fb-bede-e1f6059036bc"}, {"type": "BoxZoomTool", "id": "c9345053-d13b-4317-8a72-4faaafc86a01"}, {"type": "PreviewSaveTool", "id": "e13f2db1-9148-4078-bea8-631420b6424f"}, {"type": "ResizeTool", "id": "f27decf5-3e4e-4757-b410-d4e86e0927bc"}, {"type": "ResetTool", "id": "470788b1-fecf-4073-b004-31a24f49688e"}, {"type": "HelpTool", "id": "b834dc7c-9c67-467a-b75a-86f9725545a1"}], "extra_y_ranges": {}, "plot_width": 300, "renderers": [{"type": "LinearAxis", "id": "e4e7f7c5-8ddc-4720-8c98-6120aa9961f2"}, {"type": "Grid", "id": "0a6f9d1b-5e54-4b99-b354-226edc69f61d"}, {"type": "LinearAxis", "id": "c508e790-a6b9-47d4-9fce-594f7ad2be68"}, {"type": "Grid", "id": "627a0591-e188-4300-a890-96ae811b6011"}, {"type": "GlyphRenderer", "id": "222eb0cc-fba7-47b3-a6fb-7a6a53973289"}], "extra_x_ranges": {}, "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "5cfbfa17-e2e6-4701-9359-d82b7779155b"}, "above": [], "doc": null, "id": "d47b206b-cf3e-4722-a328-61313cc7f2cd", "y_range": {"type": "DataRange1d", "id": "40dc3d59-be05-4f51-82d6-804e0c583b47"}, "below": [{"type": "LinearAxis", "id": "e4e7f7c5-8ddc-4720-8c98-6120aa9961f2"}], "left": [{"type": "LinearAxis", "id": "c508e790-a6b9-47d4-9fce-594f7ad2be68"}]}}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "d47b206b-cf3e-4722-a328-61313cc7f2cd"}, "tags": [], "doc": null, "id": "e13f2db1-9148-4078-bea8-631420b6424f"}, "type": "PreviewSaveTool", "id": "e13f2db1-9148-4078-bea8-631420b6424f"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "angle": {"units": "rad", "value": -0.7}, "line_alpha": {"value": 0.1}, "doc": null, "tags": [], "length": {"units": "data", "value": 45}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "40b0deba-b086-4561-9ef8-ff85e329733d"}, "type": "Ray", "id": "40b0deba-b086-4561-9ef8-ff85e329733d"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("44fc169a-bd9a-484c-888f-093e7a400424", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("44fc169a-bd9a-484c-888f-093e7a400424", all_models);
    });
  }

}(this));