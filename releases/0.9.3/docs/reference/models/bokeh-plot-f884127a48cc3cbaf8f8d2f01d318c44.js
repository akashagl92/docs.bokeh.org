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

  var elt = document.getElementById("1f419ab7-69ba-4aaa-a706-e5091a90597c");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1f419ab7-69ba-4aaa-a706-e5091a90597c' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "57272604-12a6-4780-9b66-4b2374f1130d", "tags": []}, "id": "57272604-12a6-4780-9b66-4b2374f1130d"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "cc1699a0-dfd8-4ab7-85bb-b54caa91ae0d"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "6e06155e-322e-49b6-ad95-136b5f1df2d2"}, "plot": {"type": "Plot", "id": "a74af7bc-10bb-429e-81ad-c3e4295691a5"}, "id": "2807c655-edd4-4d88-980a-b17d42919ef4"}, "id": "2807c655-edd4-4d88-980a-b17d42919ef4"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "cc1699a0-dfd8-4ab7-85bb-b54caa91ae0d", "tags": []}, "id": "cc1699a0-dfd8-4ab7-85bb-b54caa91ae0d"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "28b23d95-04b2-4d42-9711-6970b41b9a10", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "28b23d95-04b2-4d42-9711-6970b41b9a10"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "ea74c5de-d5ac-4216-806e-c8639292b55f", "tags": []}, "id": "ea74c5de-d5ac-4216-806e-c8639292b55f"}, {"type": "CircleCross", "attributes": {"y": {"field": "y"}, "fill_color": null, "size": {"units": "screen", "field": "sizes"}, "line_width": {"value": 2}, "line_color": {"value": "#fb8072"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "be85fc8f-6504-4734-890b-7d390276fa8f"}, "id": "be85fc8f-6504-4734-890b-7d390276fa8f"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "6e06155e-322e-49b6-ad95-136b5f1df2d2", "tags": []}, "id": "6e06155e-322e-49b6-ad95-136b5f1df2d2"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "2b5e1d08-0d22-4ef5-b34f-715228a9dc5d", "tags": [], "geometries": []}, "id": "2b5e1d08-0d22-4ef5-b34f-715228a9dc5d"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "2807c655-edd4-4d88-980a-b17d42919ef4"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "28b23d95-04b2-4d42-9711-6970b41b9a10"}, "id": "a74af7bc-10bb-429e-81ad-c3e4295691a5", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "2b11b050-3d38-4c33-938b-e9d65617532e"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "2b5e1d08-0d22-4ef5-b34f-715228a9dc5d"}, "renderers": [{"type": "GlyphRenderer", "id": "a58c3f9a-99d3-4ac0-bc18-17e4e23a1997"}, {"type": "LinearAxis", "id": "39b44c43-a192-4be3-ae8e-8a7d3bdc45aa"}, {"type": "LinearAxis", "id": "2807c655-edd4-4d88-980a-b17d42919ef4"}, {"type": "Grid", "id": "29a665e9-3538-46a2-94e4-c22cd4d4ccb4"}, {"type": "Grid", "id": "c453de29-647e-4183-91f1-b09a13f89e26"}], "below": [{"type": "LinearAxis", "id": "39b44c43-a192-4be3-ae8e-8a7d3bdc45aa"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "a74af7bc-10bb-429e-81ad-c3e4295691a5"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "57272604-12a6-4780-9b66-4b2374f1130d"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "ea74c5de-d5ac-4216-806e-c8639292b55f"}, "plot": {"type": "Plot", "id": "a74af7bc-10bb-429e-81ad-c3e4295691a5"}, "id": "39b44c43-a192-4be3-ae8e-8a7d3bdc45aa"}, "id": "39b44c43-a192-4be3-ae8e-8a7d3bdc45aa"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "2b11b050-3d38-4c33-938b-e9d65617532e", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "2b11b050-3d38-4c33-938b-e9d65617532e"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "cc1699a0-dfd8-4ab7-85bb-b54caa91ae0d"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "a74af7bc-10bb-429e-81ad-c3e4295691a5"}, "dimension": 1, "id": "c453de29-647e-4183-91f1-b09a13f89e26"}, "id": "c453de29-647e-4183-91f1-b09a13f89e26"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "c3138543-11ce-40db-8cb4-2b97c3c27f7a"}, "tags": [], "glyph": {"type": "CircleCross", "id": "be85fc8f-6504-4734-890b-7d390276fa8f"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "a58c3f9a-99d3-4ac0-bc18-17e4e23a1997"}, "id": "a58c3f9a-99d3-4ac0-bc18-17e4e23a1997"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "doc": null, "id": "c3138543-11ce-40db-8cb4-2b97c3c27f7a", "column_names": ["y", "x", "sizes"]}, "id": "c3138543-11ce-40db-8cb4-2b97c3c27f7a"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "57272604-12a6-4780-9b66-4b2374f1130d"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "a74af7bc-10bb-429e-81ad-c3e4295691a5"}, "dimension": 0, "id": "29a665e9-3538-46a2-94e4-c22cd4d4ccb4"}, "id": "29a665e9-3538-46a2-94e4-c22cd4d4ccb4"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("1f419ab7-69ba-4aaa-a706-e5091a90597c", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("1f419ab7-69ba-4aaa-a706-e5091a90597c", all_models);
    });
  }

}(this));