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

  var elt = document.getElementById("c77cc50b-daa2-437d-bb00-ca01a976acca");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c77cc50b-daa2-437d-bb00-ca01a976acca' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "98dbae65-3daf-4c05-a604-5017523616fe"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "9d2b0f96-5c30-4818-9ff7-ffa361de0ec5"}, {"type": "LinearAxis", "id": "fd244642-dfd6-4b81-9144-55e6407f6b38"}, {"type": "LinearAxis", "id": "0b4d816e-47c9-4cef-a770-f262224c0ebb"}, {"type": "Grid", "id": "d5bb3879-c5e1-4db5-b26d-eec32fc32a89"}, {"type": "Grid", "id": "9cc6ca47-7580-4a3e-a8b6-cff82f569414"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "dfed03a6-52d4-42ef-ba72-d1d9392b7b70"}, "h_symmetry": false, "tools": [], "id": "5f69e991-8b4d-4bfb-bbd1-c2b476dcfa5a", "title": null, "y_range": {"type": "DataRange1d", "id": "9c4b543d-e612-4466-a147-1bd630160d81"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "fd244642-dfd6-4b81-9144-55e6407f6b38"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "0b4d816e-47c9-4cef-a770-f262224c0ebb"}]}, "type": "Plot", "id": "5f69e991-8b4d-4bfb-bbd1-c2b476dcfa5a"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "f36e788c-6297-44bf-9440-1dd46428bcae"}, "tags": [], "doc": null, "selection_glyph": null, "id": "9d2b0f96-5c30-4818-9ff7-ffa361de0ec5", "glyph": {"type": "Annulus", "id": "caea0824-36bc-4a95-b024-fd6f476fc163"}}, "type": "GlyphRenderer", "id": "9d2b0f96-5c30-4818-9ff7-ffa361de0ec5"}, {"attributes": {"plot": {"type": "Plot", "id": "5f69e991-8b4d-4bfb-bbd1-c2b476dcfa5a"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "0413a523-5004-4fd4-90d6-32a4e04c2bc7"}, "ticker": {"type": "BasicTicker", "id": "a25ee989-761b-4c5d-b827-fa6ca4b728f2"}, "id": "0b4d816e-47c9-4cef-a770-f262224c0ebb"}, "type": "LinearAxis", "id": "0b4d816e-47c9-4cef-a770-f262224c0ebb"}, {"attributes": {"plot": {"type": "Plot", "id": "5f69e991-8b4d-4bfb-bbd1-c2b476dcfa5a"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "d9c208a5-49bc-4a54-b5d2-e033290c7b24"}, "id": "d5bb3879-c5e1-4db5-b26d-eec32fc32a89"}, "type": "Grid", "id": "d5bb3879-c5e1-4db5-b26d-eec32fc32a89"}, {"attributes": {"plot": {"type": "Plot", "id": "5f69e991-8b4d-4bfb-bbd1-c2b476dcfa5a"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "090f66a1-1e9f-4f97-86c7-fc6c6847b434"}, "ticker": {"type": "BasicTicker", "id": "d9c208a5-49bc-4a54-b5d2-e033290c7b24"}, "id": "fd244642-dfd6-4b81-9144-55e6407f6b38"}, "type": "LinearAxis", "id": "fd244642-dfd6-4b81-9144-55e6407f6b38"}, {"attributes": {"fill_color": {"value": "#7fc97f"}, "tags": [], "doc": null, "outer_radius": {"units": "data", "value": 0.4}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "caea0824-36bc-4a95-b024-fd6f476fc163", "inner_radius": {"units": "data", "value": 0.2}}, "type": "Annulus", "id": "caea0824-36bc-4a95-b024-fd6f476fc163"}, {"attributes": {"doc": null, "id": "090f66a1-1e9f-4f97-86c7-fc6c6847b434", "tags": []}, "type": "BasicTickFormatter", "id": "090f66a1-1e9f-4f97-86c7-fc6c6847b434"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "dfed03a6-52d4-42ef-ba72-d1d9392b7b70"}, "type": "ToolEvents", "id": "dfed03a6-52d4-42ef-ba72-d1d9392b7b70"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "98dbae65-3daf-4c05-a604-5017523616fe"}, "type": "DataRange1d", "id": "98dbae65-3daf-4c05-a604-5017523616fe"}, {"attributes": {"doc": null, "id": "0413a523-5004-4fd4-90d6-32a4e04c2bc7", "tags": []}, "type": "BasicTickFormatter", "id": "0413a523-5004-4fd4-90d6-32a4e04c2bc7"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0]}, "id": "f36e788c-6297-44bf-9440-1dd46428bcae"}, "type": "ColumnDataSource", "id": "f36e788c-6297-44bf-9440-1dd46428bcae"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "a25ee989-761b-4c5d-b827-fa6ca4b728f2"}, "type": "BasicTicker", "id": "a25ee989-761b-4c5d-b827-fa6ca4b728f2"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "9c4b543d-e612-4466-a147-1bd630160d81"}, "type": "DataRange1d", "id": "9c4b543d-e612-4466-a147-1bd630160d81"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "d9c208a5-49bc-4a54-b5d2-e033290c7b24"}, "type": "BasicTicker", "id": "d9c208a5-49bc-4a54-b5d2-e033290c7b24"}, {"attributes": {"plot": {"type": "Plot", "id": "5f69e991-8b4d-4bfb-bbd1-c2b476dcfa5a"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "a25ee989-761b-4c5d-b827-fa6ca4b728f2"}, "id": "9cc6ca47-7580-4a3e-a8b6-cff82f569414"}, "type": "Grid", "id": "9cc6ca47-7580-4a3e-a8b6-cff82f569414"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("c77cc50b-daa2-437d-bb00-ca01a976acca", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("c77cc50b-daa2-437d-bb00-ca01a976acca", all_models);
    });
  }

}(this));