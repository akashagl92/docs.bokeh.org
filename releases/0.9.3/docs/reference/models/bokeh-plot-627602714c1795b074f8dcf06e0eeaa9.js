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

  var elt = document.getElementById("3951d1dd-87c3-47c8-bcb8-cd83328455c2");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '3951d1dd-87c3-47c8-bcb8-cd83328455c2' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "DataRange1d", "attributes": {"callback": null, "id": "e0d0f238-b7d5-4b8d-b637-8846aed73605", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "e0d0f238-b7d5-4b8d-b637-8846aed73605"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 3.4673008323424495, 2.9726516052318663, 2.5160523186682524, 2.0975029726516055, 1.7170035671819261, 1.3745541022592156, 1.0701545778834722, 0.8038049940546969, 0.5755053507728893, 0.38525564803804985, 0.23305588585017845, 0.11890606420927469, 0.04280618311533887, 0.004756242568371006, 0.004756242568371006, 0.04280618311533887, 0.11890606420927453, 0.23305588585017845, 0.38525564803804985, 0.5755053507728897, 0.8038049940546969, 1.0701545778834718, 1.3745541022592156, 1.7170035671819261, 2.0975029726516046, 2.5160523186682524, 2.9726516052318663, 3.4673008323424486, 4.0, 8.2, 7.52936979785969, 6.896789536266349, 6.302259215219976, 5.74577883472057, 5.227348394768133, 4.746967895362664, 4.304637336504161, 3.900356718192628, 3.5341260404280623, 3.2059453032104637, 2.9158145065398338, 2.6637336504161713, 2.449702734839477, 2.2737217598097508, 2.135790725326992, 2.0359096313912013, 1.9740784780023783, 1.9502972651605233, 1.9645659928656363, 2.016884661117717, 2.107253269916766, 2.235671819262783, 2.4021403091557674, 2.6066587395957193, 2.84922711058264, 3.1298454221165284, 3.448513674197384, 3.805231866825208, 4.2], "x": [-2.0, -1.8620689655172413, -1.7241379310344827, -1.5862068965517242, -1.4482758620689655, -1.3103448275862069, -1.1724137931034484, -1.0344827586206897, -0.896551724137931, -0.7586206896551724, -0.6206896551724137, -0.48275862068965525, -0.3448275862068966, -0.2068965517241379, -0.06896551724137945, 0.06896551724137945, 0.2068965517241379, 0.34482758620689635, 0.48275862068965525, 0.6206896551724137, 0.7586206896551726, 0.896551724137931, 1.0344827586206895, 1.1724137931034484, 1.3103448275862069, 1.4482758620689653, 1.5862068965517242, 1.7241379310344827, 1.862068965517241, 2.0, 2.0, 1.862068965517241, 1.7241379310344827, 1.5862068965517242, 1.4482758620689653, 1.3103448275862069, 1.1724137931034484, 1.0344827586206895, 0.896551724137931, 0.7586206896551726, 0.6206896551724137, 0.48275862068965525, 0.34482758620689635, 0.2068965517241379, 0.06896551724137945, -0.06896551724137945, -0.2068965517241379, -0.3448275862068966, -0.48275862068965525, -0.6206896551724137, -0.7586206896551724, -0.896551724137931, -1.0344827586206897, -1.1724137931034484, -1.3103448275862069, -1.4482758620689655, -1.5862068965517242, -1.7241379310344827, -1.8620689655172413, -2.0]}, "doc": null, "id": "7097c27f-18a4-44da-9747-f5d7bd6958ae", "column_names": ["y", "x"]}, "id": "7097c27f-18a4-44da-9747-f5d7bd6958ae"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "e8cb0b32-b673-4f16-ba2f-fca02a632e95"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "615df908-2a2c-4645-80cb-348fc4170bab"}, "plot": {"type": "Plot", "id": "51539b0c-918d-478c-861b-53164bd0c971"}, "id": "f08177f1-3776-4089-acc3-016e64102a1a"}, "id": "f08177f1-3776-4089-acc3-016e64102a1a"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "3cb81c54-f34a-4c87-b79b-8bf3f1080f5b"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "7e251509-bf9b-4a06-8b09-0f38967132d7"}, "plot": {"type": "Plot", "id": "51539b0c-918d-478c-861b-53164bd0c971"}, "id": "f89dc58b-b321-4c66-a7ee-f15cc289e519"}, "id": "f89dc58b-b321-4c66-a7ee-f15cc289e519"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "3cb81c54-f34a-4c87-b79b-8bf3f1080f5b"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "51539b0c-918d-478c-861b-53164bd0c971"}, "dimension": 1, "id": "bfb5187e-c5b2-4ff2-b328-b66dd232ac8e"}, "id": "bfb5187e-c5b2-4ff2-b328-b66dd232ac8e"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "7097c27f-18a4-44da-9747-f5d7bd6958ae"}, "tags": [], "glyph": {"type": "Patch", "id": "f45bccee-33a6-47e6-bc19-daf0f99a8afd"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "8540550d-6b86-4b46-ab4d-91ea1d08a18f"}, "id": "8540550d-6b86-4b46-ab4d-91ea1d08a18f"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "e8cb0b32-b673-4f16-ba2f-fca02a632e95", "tags": []}, "id": "e8cb0b32-b673-4f16-ba2f-fca02a632e95"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "f89dc58b-b321-4c66-a7ee-f15cc289e519"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "7caa2e30-f3e5-4a79-a577-be254e97c918"}, "id": "51539b0c-918d-478c-861b-53164bd0c971", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "e0d0f238-b7d5-4b8d-b637-8846aed73605"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "043751d2-3810-4993-aec3-bf5be8db4c28"}, "renderers": [{"type": "GlyphRenderer", "id": "8540550d-6b86-4b46-ab4d-91ea1d08a18f"}, {"type": "LinearAxis", "id": "f08177f1-3776-4089-acc3-016e64102a1a"}, {"type": "LinearAxis", "id": "f89dc58b-b321-4c66-a7ee-f15cc289e519"}, {"type": "Grid", "id": "f88e7c52-40c5-47cf-8081-61e43b29495e"}, {"type": "Grid", "id": "bfb5187e-c5b2-4ff2-b328-b66dd232ac8e"}], "below": [{"type": "LinearAxis", "id": "f08177f1-3776-4089-acc3-016e64102a1a"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "51539b0c-918d-478c-861b-53164bd0c971"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "7caa2e30-f3e5-4a79-a577-be254e97c918", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "7caa2e30-f3e5-4a79-a577-be254e97c918"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "7e251509-bf9b-4a06-8b09-0f38967132d7", "tags": []}, "id": "7e251509-bf9b-4a06-8b09-0f38967132d7"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "615df908-2a2c-4645-80cb-348fc4170bab", "tags": []}, "id": "615df908-2a2c-4645-80cb-348fc4170bab"}, {"type": "Patch", "attributes": {"y": {"field": "y"}, "fill_color": {"value": "#a6cee3"}, "tags": [], "doc": null, "x": {"field": "x"}, "id": "f45bccee-33a6-47e6-bc19-daf0f99a8afd"}, "id": "f45bccee-33a6-47e6-bc19-daf0f99a8afd"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "3cb81c54-f34a-4c87-b79b-8bf3f1080f5b", "tags": []}, "id": "3cb81c54-f34a-4c87-b79b-8bf3f1080f5b"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "043751d2-3810-4993-aec3-bf5be8db4c28", "tags": [], "geometries": []}, "id": "043751d2-3810-4993-aec3-bf5be8db4c28"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "e8cb0b32-b673-4f16-ba2f-fca02a632e95"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "51539b0c-918d-478c-861b-53164bd0c971"}, "dimension": 0, "id": "f88e7c52-40c5-47cf-8081-61e43b29495e"}, "id": "f88e7c52-40c5-47cf-8081-61e43b29495e"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("3951d1dd-87c3-47c8-bcb8-cd83328455c2", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("3951d1dd-87c3-47c8-bcb8-cd83328455c2", all_models);
    });
  }

}(this));