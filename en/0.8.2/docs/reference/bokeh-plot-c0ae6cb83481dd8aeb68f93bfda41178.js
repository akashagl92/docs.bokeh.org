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

  var elt = document.getElementById("7fe73ff8-1c1e-4929-a4e3-11411e7cb885");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7fe73ff8-1c1e-4929-a4e3-11411e7cb885' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "952dfb51-05a3-41d4-889a-607808d5104e", "type": "ToolEvents", "attributes": {"geometries": [], "id": "952dfb51-05a3-41d4-889a-607808d5104e", "doc": null, "tags": []}}, {"id": "a867f3af-80be-4f1d-8570-697a99f72150", "type": "BasicTickFormatter", "attributes": {"id": "a867f3af-80be-4f1d-8570-697a99f72150", "doc": null, "tags": []}}, {"id": "271dd2fd-85a7-40b9-a572-ffe6e3533069", "type": "Grid", "attributes": {"id": "271dd2fd-85a7-40b9-a572-ffe6e3533069", "plot": {"id": "9ea893f0-0775-4228-9034-cf90b1517289", "type": "Plot"}, "dimension": 1, "ticker": {"id": "c1fb2f81-19e1-4351-82ee-a8a83c4e891a", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "9ea893f0-0775-4228-9034-cf90b1517289", "type": "Plot", "attributes": {"tool_events": {"id": "952dfb51-05a3-41d4-889a-607808d5104e", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "e831ce50-daf5-4b17-8a09-7d81c38c3c66", "type": "GlyphRenderer"}, {"id": "de53655f-8c52-41d6-ab6c-3bb545fd733d", "type": "LinearAxis"}, {"id": "565138b6-3810-4d61-81ff-08b05a48e901", "type": "LinearAxis"}, {"id": "2b5589c4-961f-47ad-b4b7-5d1084da5505", "type": "Grid"}, {"id": "271dd2fd-85a7-40b9-a572-ffe6e3533069", "type": "Grid"}], "left": [{"id": "565138b6-3810-4d61-81ff-08b05a48e901", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "7e266a53-fa0f-44b4-ae1b-76191364ca59", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "9ea893f0-0775-4228-9034-cf90b1517289", "y_range": {"id": "603e3cf6-c133-4458-a806-5a02f4b04175", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "de53655f-8c52-41d6-ab6c-3bb545fd733d", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "c1fb2f81-19e1-4351-82ee-a8a83c4e891a", "type": "BasicTicker", "attributes": {"id": "c1fb2f81-19e1-4351-82ee-a8a83c4e891a", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "44ed8a15-7f2c-4546-9391-513ed8dcd291", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["sizes", "y", "x"], "id": "44ed8a15-7f2c-4546-9391-513ed8dcd291", "doc": null, "tags": []}}, {"id": "46f57360-5137-4184-a07a-456a4f91a343", "type": "BasicTicker", "attributes": {"id": "46f57360-5137-4184-a07a-456a4f91a343", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "a7ea952e-0a0f-4d4d-92ba-b4707ddd32bc", "type": "BasicTickFormatter", "attributes": {"id": "a7ea952e-0a0f-4d4d-92ba-b4707ddd32bc", "doc": null, "tags": []}}, {"id": "2b5589c4-961f-47ad-b4b7-5d1084da5505", "type": "Grid", "attributes": {"id": "2b5589c4-961f-47ad-b4b7-5d1084da5505", "plot": {"id": "9ea893f0-0775-4228-9034-cf90b1517289", "type": "Plot"}, "dimension": 0, "ticker": {"id": "46f57360-5137-4184-a07a-456a4f91a343", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "7e266a53-fa0f-44b4-ae1b-76191364ca59", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "44ed8a15-7f2c-4546-9391-513ed8dcd291", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "7e266a53-fa0f-44b4-ae1b-76191364ca59", "doc": null, "tags": []}}, {"id": "603e3cf6-c133-4458-a806-5a02f4b04175", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "44ed8a15-7f2c-4546-9391-513ed8dcd291", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "603e3cf6-c133-4458-a806-5a02f4b04175", "doc": null, "tags": []}}, {"id": "e8ab6357-2fe4-48e7-a3d1-0052e56d6936", "type": "DiamondCross", "attributes": {"line_width": {"value": 2, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "e8ab6357-2fe4-48e7-a3d1-0052e56d6936", "fill_color": null, "line_color": {"value": "#386cb0"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "size": {"field": "sizes", "units": "screen"}}}, {"id": "de53655f-8c52-41d6-ab6c-3bb545fd733d", "type": "LinearAxis", "attributes": {"id": "de53655f-8c52-41d6-ab6c-3bb545fd733d", "formatter": {"id": "a7ea952e-0a0f-4d4d-92ba-b4707ddd32bc", "type": "BasicTickFormatter"}, "plot": {"id": "9ea893f0-0775-4228-9034-cf90b1517289", "type": "Plot"}, "ticker": {"id": "46f57360-5137-4184-a07a-456a4f91a343", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "e831ce50-daf5-4b17-8a09-7d81c38c3c66", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "44ed8a15-7f2c-4546-9391-513ed8dcd291", "type": "ColumnDataSource"}, "id": "e831ce50-daf5-4b17-8a09-7d81c38c3c66", "glyph": {"id": "e8ab6357-2fe4-48e7-a3d1-0052e56d6936", "type": "DiamondCross"}, "tags": [], "doc": null}}, {"id": "565138b6-3810-4d61-81ff-08b05a48e901", "type": "LinearAxis", "attributes": {"id": "565138b6-3810-4d61-81ff-08b05a48e901", "formatter": {"id": "a867f3af-80be-4f1d-8570-697a99f72150", "type": "BasicTickFormatter"}, "plot": {"id": "9ea893f0-0775-4228-9034-cf90b1517289", "type": "Plot"}, "ticker": {"id": "c1fb2f81-19e1-4351-82ee-a8a83c4e891a", "type": "BasicTicker"}, "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("7fe73ff8-1c1e-4929-a4e3-11411e7cb885", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("7fe73ff8-1c1e-4929-a4e3-11411e7cb885", all_models);
    });
  }

}(this));