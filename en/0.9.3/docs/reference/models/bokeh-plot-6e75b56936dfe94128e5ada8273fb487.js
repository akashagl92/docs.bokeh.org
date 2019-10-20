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

  var elt = document.getElementById("29cd3614-a89e-4cbd-a4e9-f154b2b9e9e1");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '29cd3614-a89e-4cbd-a4e9-f154b2b9e9e1' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "ToolEvents", "attributes": {"doc": null, "id": "618d2d82-72c2-4729-9417-006eb2a842ca", "tags": [], "geometries": []}, "id": "618d2d82-72c2-4729-9417-006eb2a842ca"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "98e0bc98-13bb-4c75-8398-1c6768d6eae8", "tags": []}, "id": "98e0bc98-13bb-4c75-8398-1c6768d6eae8"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "e343be86-28ce-47bf-93a1-f57df5217681"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "d556eb0a-9662-4ddf-84e6-40e8eaa3e27b"}, "dimension": 1, "id": "d2f133ff-3956-4c4c-83b8-9b80bd630a90"}, "id": "d2f133ff-3956-4c4c-83b8-9b80bd630a90"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "eb5827d8-e822-44a9-be60-c29a5c7e6b75"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "5b3f2ed2-0fc8-4f00-b7dc-86f234441bd8"}, "id": "d556eb0a-9662-4ddf-84e6-40e8eaa3e27b", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "fdb354f1-115d-459d-9098-56bc4a6db85a"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "618d2d82-72c2-4729-9417-006eb2a842ca"}, "renderers": [{"type": "GlyphRenderer", "id": "2e0d69cd-2583-4bae-8bb1-ea536220929b"}, {"type": "LinearAxis", "id": "c82eb9e1-2c55-4e0f-b75f-959b327982eb"}, {"type": "LinearAxis", "id": "eb5827d8-e822-44a9-be60-c29a5c7e6b75"}, {"type": "Grid", "id": "3a9fab2c-c9d2-41a1-b20e-152f2f19f736"}, {"type": "Grid", "id": "d2f133ff-3956-4c4c-83b8-9b80bd630a90"}], "below": [{"type": "LinearAxis", "id": "c82eb9e1-2c55-4e0f-b75f-959b327982eb"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "d556eb0a-9662-4ddf-84e6-40e8eaa3e27b"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 3.4673008323424495, 2.9726516052318663, 2.5160523186682524, 2.0975029726516055, 1.7170035671819261, 1.3745541022592156, 1.0701545778834722, 0.8038049940546969, 0.5755053507728893, 0.38525564803804985, 0.23305588585017845, 0.11890606420927469, 0.04280618311533887, 0.004756242568371006, 0.004756242568371006, 0.04280618311533887, 0.11890606420927453, 0.23305588585017845, 0.38525564803804985, 0.5755053507728897, 0.8038049940546969, 1.0701545778834718, 1.3745541022592156, 1.7170035671819261, 2.0975029726516046, 2.5160523186682524, 2.9726516052318663, 3.4673008323424486, 4.0], "x": [-2.0, -1.8620689655172413, -1.7241379310344827, -1.5862068965517242, -1.4482758620689655, -1.3103448275862069, -1.1724137931034484, -1.0344827586206897, -0.896551724137931, -0.7586206896551724, -0.6206896551724137, -0.48275862068965525, -0.3448275862068966, -0.2068965517241379, -0.06896551724137945, 0.06896551724137945, 0.2068965517241379, 0.34482758620689635, 0.48275862068965525, 0.6206896551724137, 0.7586206896551726, 0.896551724137931, 1.0344827586206895, 1.1724137931034484, 1.3103448275862069, 1.4482758620689653, 1.5862068965517242, 1.7241379310344827, 1.862068965517241, 2.0]}, "doc": null, "id": "a5db5fe1-3e1e-4b51-a59f-09f36633f7ca", "column_names": ["y", "x"]}, "id": "a5db5fe1-3e1e-4b51-a59f-09f36633f7ca"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "1fff80df-1ec0-4bcb-ae81-b6ea536506f2", "tags": []}, "id": "1fff80df-1ec0-4bcb-ae81-b6ea536506f2"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "e343be86-28ce-47bf-93a1-f57df5217681", "tags": []}, "id": "e343be86-28ce-47bf-93a1-f57df5217681"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "fdb354f1-115d-459d-9098-56bc4a6db85a", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "fdb354f1-115d-459d-9098-56bc4a6db85a"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "e343be86-28ce-47bf-93a1-f57df5217681"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "011c6185-2d98-48d3-8639-e686787d2ad9"}, "plot": {"type": "Plot", "id": "d556eb0a-9662-4ddf-84e6-40e8eaa3e27b"}, "id": "eb5827d8-e822-44a9-be60-c29a5c7e6b75"}, "id": "eb5827d8-e822-44a9-be60-c29a5c7e6b75"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "98e0bc98-13bb-4c75-8398-1c6768d6eae8"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "d556eb0a-9662-4ddf-84e6-40e8eaa3e27b"}, "dimension": 0, "id": "3a9fab2c-c9d2-41a1-b20e-152f2f19f736"}, "id": "3a9fab2c-c9d2-41a1-b20e-152f2f19f736"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "5b3f2ed2-0fc8-4f00-b7dc-86f234441bd8", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "5b3f2ed2-0fc8-4f00-b7dc-86f234441bd8"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "a5db5fe1-3e1e-4b51-a59f-09f36633f7ca"}, "tags": [], "glyph": {"type": "Line", "id": "6177e5fa-31c4-4cb3-b0cd-253c3f03272e"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "2e0d69cd-2583-4bae-8bb1-ea536220929b"}, "id": "2e0d69cd-2583-4bae-8bb1-ea536220929b"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "98e0bc98-13bb-4c75-8398-1c6768d6eae8"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "1fff80df-1ec0-4bcb-ae81-b6ea536506f2"}, "plot": {"type": "Plot", "id": "d556eb0a-9662-4ddf-84e6-40e8eaa3e27b"}, "id": "c82eb9e1-2c55-4e0f-b75f-959b327982eb"}, "id": "c82eb9e1-2c55-4e0f-b75f-959b327982eb"}, {"type": "Line", "attributes": {"y": {"field": "y"}, "doc": null, "line_alpha": {"value": 0.6}, "tags": [], "x": {"field": "x"}, "line_color": {"value": "#F46D43"}, "id": "6177e5fa-31c4-4cb3-b0cd-253c3f03272e", "line_width": {"value": 6}}, "id": "6177e5fa-31c4-4cb3-b0cd-253c3f03272e"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "011c6185-2d98-48d3-8639-e686787d2ad9", "tags": []}, "id": "011c6185-2d98-48d3-8639-e686787d2ad9"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("29cd3614-a89e-4cbd-a4e9-f154b2b9e9e1", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("29cd3614-a89e-4cbd-a4e9-f154b2b9e9e1", all_models);
    });
  }

}(this));