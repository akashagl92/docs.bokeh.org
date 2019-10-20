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

  var elt = document.getElementById("d487db0e-6b3d-43c9-a66f-d8d488049ab3");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'd487db0e-6b3d-43c9-a66f-d8d488049ab3' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "4b24b1ab-ce05-4df3-9c5c-6f41ba8ab4ed"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "af845a67-de4a-4ff2-81e0-2391be454bfc"}, "id": "7ead13ea-497d-4fdb-b29a-d8247b9ed28f"}, "type": "Grid", "id": "7ead13ea-497d-4fdb-b29a-d8247b9ed28f"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "bc9247a2-f24d-41ab-8ce4-50ea77cf8c07"}, "type": "DataRange1d", "id": "bc9247a2-f24d-41ab-8ce4-50ea77cf8c07"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "4290363e-21d5-4d40-a3b3-5f44c40eafef"}, "tags": [], "doc": null, "selection_glyph": null, "id": "5a1c4c97-9d2f-49e6-a5bd-d756e27d6080", "glyph": {"type": "Line", "id": "dd41f93f-49e4-467d-881f-4355950f1a13"}}, "type": "GlyphRenderer", "id": "5a1c4c97-9d2f-49e6-a5bd-d756e27d6080"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "a64066de-f57e-408e-914a-d38185fdf468"}, "type": "ToolEvents", "id": "a64066de-f57e-408e-914a-d38185fdf468"}, {"attributes": {"plot": {"type": "Plot", "id": "4b24b1ab-ce05-4df3-9c5c-6f41ba8ab4ed"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "ea4c68d5-4e28-48a5-ac50-268438566921"}, "id": "37adc9ca-bc78-4c88-b021-d9b958fb7850"}, "type": "Grid", "id": "37adc9ca-bc78-4c88-b021-d9b958fb7850"}, {"attributes": {"line_color": {"value": "#F46D43"}, "line_alpha": {"value": 0.6}, "line_width": {"value": 6}, "doc": null, "tags": [], "y": {"field": "y"}, "x": {"field": "x"}, "id": "dd41f93f-49e4-467d-881f-4355950f1a13"}, "type": "Line", "id": "dd41f93f-49e4-467d-881f-4355950f1a13"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "157cc4c5-943d-4d72-b574-eec5351a2845"}, "type": "DataRange1d", "id": "157cc4c5-943d-4d72-b574-eec5351a2845"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "af845a67-de4a-4ff2-81e0-2391be454bfc"}, "type": "BasicTicker", "id": "af845a67-de4a-4ff2-81e0-2391be454bfc"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 3.4673008323424495, 2.9726516052318663, 2.5160523186682524, 2.0975029726516055, 1.7170035671819261, 1.3745541022592156, 1.0701545778834722, 0.8038049940546969, 0.5755053507728893, 0.38525564803804985, 0.23305588585017845, 0.11890606420927469, 0.04280618311533887, 0.004756242568371006, 0.004756242568371006, 0.04280618311533887, 0.11890606420927453, 0.23305588585017845, 0.38525564803804985, 0.5755053507728897, 0.8038049940546969, 1.0701545778834718, 1.3745541022592156, 1.7170035671819261, 2.0975029726516046, 2.5160523186682524, 2.9726516052318663, 3.4673008323424486, 4.0], "x": [-2.0, -1.8620689655172413, -1.7241379310344827, -1.5862068965517242, -1.4482758620689655, -1.3103448275862069, -1.1724137931034484, -1.0344827586206897, -0.896551724137931, -0.7586206896551724, -0.6206896551724137, -0.48275862068965525, -0.3448275862068966, -0.2068965517241379, -0.06896551724137945, 0.06896551724137945, 0.2068965517241379, 0.34482758620689635, 0.48275862068965525, 0.6206896551724137, 0.7586206896551726, 0.896551724137931, 1.0344827586206895, 1.1724137931034484, 1.3103448275862069, 1.4482758620689653, 1.5862068965517242, 1.7241379310344827, 1.862068965517241, 2.0]}, "id": "4290363e-21d5-4d40-a3b3-5f44c40eafef"}, "type": "ColumnDataSource", "id": "4290363e-21d5-4d40-a3b3-5f44c40eafef"}, {"attributes": {"plot": {"type": "Plot", "id": "4b24b1ab-ce05-4df3-9c5c-6f41ba8ab4ed"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "bc99650c-30b8-4651-8ab5-cf03b1166dee"}, "ticker": {"type": "BasicTicker", "id": "af845a67-de4a-4ff2-81e0-2391be454bfc"}, "id": "d6937d94-1137-4afa-be0c-dff0b4699277"}, "type": "LinearAxis", "id": "d6937d94-1137-4afa-be0c-dff0b4699277"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "ea4c68d5-4e28-48a5-ac50-268438566921"}, "type": "BasicTicker", "id": "ea4c68d5-4e28-48a5-ac50-268438566921"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "bc9247a2-f24d-41ab-8ce4-50ea77cf8c07"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "5a1c4c97-9d2f-49e6-a5bd-d756e27d6080"}, {"type": "LinearAxis", "id": "04d624cf-7fd8-4b82-9b94-2df2d7a58b76"}, {"type": "LinearAxis", "id": "d6937d94-1137-4afa-be0c-dff0b4699277"}, {"type": "Grid", "id": "37adc9ca-bc78-4c88-b021-d9b958fb7850"}, {"type": "Grid", "id": "7ead13ea-497d-4fdb-b29a-d8247b9ed28f"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "a64066de-f57e-408e-914a-d38185fdf468"}, "h_symmetry": false, "tools": [], "id": "4b24b1ab-ce05-4df3-9c5c-6f41ba8ab4ed", "title": null, "y_range": {"type": "DataRange1d", "id": "157cc4c5-943d-4d72-b574-eec5351a2845"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "04d624cf-7fd8-4b82-9b94-2df2d7a58b76"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "d6937d94-1137-4afa-be0c-dff0b4699277"}]}, "type": "Plot", "id": "4b24b1ab-ce05-4df3-9c5c-6f41ba8ab4ed"}, {"attributes": {"doc": null, "id": "135fbc96-2643-4626-af9a-69d12397bdc7", "tags": []}, "type": "BasicTickFormatter", "id": "135fbc96-2643-4626-af9a-69d12397bdc7"}, {"attributes": {"doc": null, "id": "bc99650c-30b8-4651-8ab5-cf03b1166dee", "tags": []}, "type": "BasicTickFormatter", "id": "bc99650c-30b8-4651-8ab5-cf03b1166dee"}, {"attributes": {"plot": {"type": "Plot", "id": "4b24b1ab-ce05-4df3-9c5c-6f41ba8ab4ed"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "135fbc96-2643-4626-af9a-69d12397bdc7"}, "ticker": {"type": "BasicTicker", "id": "ea4c68d5-4e28-48a5-ac50-268438566921"}, "id": "04d624cf-7fd8-4b82-9b94-2df2d7a58b76"}, "type": "LinearAxis", "id": "04d624cf-7fd8-4b82-9b94-2df2d7a58b76"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("d487db0e-6b3d-43c9-a66f-d8d488049ab3", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("d487db0e-6b3d-43c9-a66f-d8d488049ab3", all_models);
    });
  }

}(this));