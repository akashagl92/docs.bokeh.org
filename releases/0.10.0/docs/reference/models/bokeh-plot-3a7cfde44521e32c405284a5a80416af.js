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

  var elt = document.getElementById("6536f83e-5024-4b6b-98f9-773ff3125da2");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6536f83e-5024-4b6b-98f9-773ff3125da2' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "b7fb175d-bc26-4c47-b08a-4bb5dfe79e0b"}, "type": "BasicTicker", "id": "b7fb175d-bc26-4c47-b08a-4bb5dfe79e0b"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "bc9681d4-0b3e-490f-8098-0ac1e9899cd5"}, "type": "ToolEvents", "id": "bc9681d4-0b3e-490f-8098-0ac1e9899cd5"}, {"attributes": {"plot": {"type": "Plot", "id": "2da1116b-2375-4f11-adac-6ce4c9618106"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "ce0ba080-9462-4ed4-b906-635a6dec8e9c"}, "ticker": {"type": "BasicTicker", "id": "e5b6782c-61f9-493d-aeb2-61a73141f99d"}, "id": "74c6e901-b0f5-4db4-aa5e-dbbc74de02b9"}, "type": "LinearAxis", "id": "74c6e901-b0f5-4db4-aa5e-dbbc74de02b9"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "c2b2219e-8fa4-4a2e-8b1d-ba07d5a4d334"}, "tags": [], "doc": null, "selection_glyph": null, "id": "007b5250-4070-48bc-89e0-cb5e9eac92e4", "glyph": {"type": "Asterisk", "id": "cc6e91bc-77ec-4b2d-9ef9-175efc51dfc0"}}, "type": "GlyphRenderer", "id": "007b5250-4070-48bc-89e0-cb5e9eac92e4"}, {"attributes": {"plot": {"type": "Plot", "id": "2da1116b-2375-4f11-adac-6ce4c9618106"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "b7fb175d-bc26-4c47-b08a-4bb5dfe79e0b"}, "id": "32fd7375-9d95-4bee-96c5-f02e0668a2c3"}, "type": "Grid", "id": "32fd7375-9d95-4bee-96c5-f02e0668a2c3"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "2fc21c97-e2e6-48d2-b8bf-e7fc80f4b33c"}, "type": "DataRange1d", "id": "2fc21c97-e2e6-48d2-b8bf-e7fc80f4b33c"}, {"attributes": {"column_names": ["y", "x", "sizes"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "id": "c2b2219e-8fa4-4a2e-8b1d-ba07d5a4d334"}, "type": "ColumnDataSource", "id": "c2b2219e-8fa4-4a2e-8b1d-ba07d5a4d334"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "8bb6086a-db79-4b5e-8fce-af56a8b381b4"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "007b5250-4070-48bc-89e0-cb5e9eac92e4"}, {"type": "LinearAxis", "id": "74c6e901-b0f5-4db4-aa5e-dbbc74de02b9"}, {"type": "LinearAxis", "id": "5bba080b-d59c-4e46-a2db-0dfb3f5de200"}, {"type": "Grid", "id": "47fd2193-e9b8-48e9-b074-69d87b07c237"}, {"type": "Grid", "id": "32fd7375-9d95-4bee-96c5-f02e0668a2c3"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "bc9681d4-0b3e-490f-8098-0ac1e9899cd5"}, "h_symmetry": false, "tools": [], "id": "2da1116b-2375-4f11-adac-6ce4c9618106", "title": null, "y_range": {"type": "DataRange1d", "id": "2fc21c97-e2e6-48d2-b8bf-e7fc80f4b33c"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "74c6e901-b0f5-4db4-aa5e-dbbc74de02b9"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "5bba080b-d59c-4e46-a2db-0dfb3f5de200"}]}, "type": "Plot", "id": "2da1116b-2375-4f11-adac-6ce4c9618106"}, {"attributes": {"line_color": {"value": "#f0027f"}, "line_width": {"value": 2}, "fill_color": null, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "cc6e91bc-77ec-4b2d-9ef9-175efc51dfc0", "size": {"units": "screen", "field": "sizes"}}, "type": "Asterisk", "id": "cc6e91bc-77ec-4b2d-9ef9-175efc51dfc0"}, {"attributes": {"plot": {"type": "Plot", "id": "2da1116b-2375-4f11-adac-6ce4c9618106"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "c129c0a7-d4ba-464b-a16e-39b772875bf6"}, "ticker": {"type": "BasicTicker", "id": "b7fb175d-bc26-4c47-b08a-4bb5dfe79e0b"}, "id": "5bba080b-d59c-4e46-a2db-0dfb3f5de200"}, "type": "LinearAxis", "id": "5bba080b-d59c-4e46-a2db-0dfb3f5de200"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "e5b6782c-61f9-493d-aeb2-61a73141f99d"}, "type": "BasicTicker", "id": "e5b6782c-61f9-493d-aeb2-61a73141f99d"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "8bb6086a-db79-4b5e-8fce-af56a8b381b4"}, "type": "DataRange1d", "id": "8bb6086a-db79-4b5e-8fce-af56a8b381b4"}, {"attributes": {"plot": {"type": "Plot", "id": "2da1116b-2375-4f11-adac-6ce4c9618106"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "e5b6782c-61f9-493d-aeb2-61a73141f99d"}, "id": "47fd2193-e9b8-48e9-b074-69d87b07c237"}, "type": "Grid", "id": "47fd2193-e9b8-48e9-b074-69d87b07c237"}, {"attributes": {"doc": null, "id": "ce0ba080-9462-4ed4-b906-635a6dec8e9c", "tags": []}, "type": "BasicTickFormatter", "id": "ce0ba080-9462-4ed4-b906-635a6dec8e9c"}, {"attributes": {"doc": null, "id": "c129c0a7-d4ba-464b-a16e-39b772875bf6", "tags": []}, "type": "BasicTickFormatter", "id": "c129c0a7-d4ba-464b-a16e-39b772875bf6"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("6536f83e-5024-4b6b-98f9-773ff3125da2", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("6536f83e-5024-4b6b-98f9-773ff3125da2", all_models);
    });
  }

}(this));