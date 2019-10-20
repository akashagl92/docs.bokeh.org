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

  var elt = document.getElementById("961b713f-a5d2-4618-b503-8c11d8108757");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '961b713f-a5d2-4618-b503-8c11d8108757' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "9a1a0af1-5864-46f4-8011-641496cb66d8", "tags": []}, "id": "9a1a0af1-5864-46f4-8011-641496cb66d8"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "9a1a0af1-5864-46f4-8011-641496cb66d8"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "fb8364d9-ce2d-420e-9922-421643e6a9e3"}, "dimension": 0, "id": "7ebe0919-460d-4c68-bcaa-8faccebd1472"}, "id": "7ebe0919-460d-4c68-bcaa-8faccebd1472"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "8c6936a1-48a0-4355-bb8b-97b73d02e49f"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "fb8364d9-ce2d-420e-9922-421643e6a9e3"}, "dimension": 1, "id": "633c59ed-66c3-4502-9f46-e60f5970ffda"}, "id": "633c59ed-66c3-4502-9f46-e60f5970ffda"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "704675e7-2b75-417f-9c9d-183e9588b8b0"}, "tags": [], "glyph": {"type": "Ray", "id": "a9f9b08d-9461-43c4-95ef-421c86c17d1d"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "b6a6f27a-61ff-4754-ba61-24c728fc209d"}, "id": "b6a6f27a-61ff-4754-ba61-24c728fc209d"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "8c6936a1-48a0-4355-bb8b-97b73d02e49f", "tags": []}, "id": "8c6936a1-48a0-4355-bb8b-97b73d02e49f"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "52344fe3-8b43-49ba-b009-939b22ed08f4", "tags": []}, "id": "52344fe3-8b43-49ba-b009-939b22ed08f4"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "a4d056d2-ad13-4da8-a67a-44305095c4f3", "tags": []}, "id": "a4d056d2-ad13-4da8-a67a-44305095c4f3"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "8c6936a1-48a0-4355-bb8b-97b73d02e49f"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "52344fe3-8b43-49ba-b009-939b22ed08f4"}, "plot": {"type": "Plot", "id": "fb8364d9-ce2d-420e-9922-421643e6a9e3"}, "id": "f4f4991f-42e9-4bc3-8ad3-3122e163b9d3"}, "id": "f4f4991f-42e9-4bc3-8ad3-3122e163b9d3"}, {"type": "Ray", "attributes": {"y": {"field": "y"}, "angle": {"units": "rad", "value": -2.0}, "line_width": {"value": 3}, "line_color": {"value": "#fb8072"}, "doc": null, "x": {"field": "x"}, "length": {"units": "data", "field": "l"}, "tags": [], "id": "a9f9b08d-9461-43c4-95ef-421c86c17d1d"}, "id": "a9f9b08d-9461-43c4-95ef-421c86c17d1d"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "42ad9819-ce6d-4c61-8227-d8658bbe7363", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "42ad9819-ce6d-4c61-8227-d8658bbe7363"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "f4f4991f-42e9-4bc3-8ad3-3122e163b9d3"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "74e4ae13-fc2e-4c14-b3d4-86e07d02b628"}, "id": "fb8364d9-ce2d-420e-9922-421643e6a9e3", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "42ad9819-ce6d-4c61-8227-d8658bbe7363"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "3628740a-23b0-4e24-9d07-2634ba8607d6"}, "renderers": [{"type": "GlyphRenderer", "id": "b6a6f27a-61ff-4754-ba61-24c728fc209d"}, {"type": "LinearAxis", "id": "b1266e9c-78f8-4a5d-ba5f-e17856996107"}, {"type": "LinearAxis", "id": "f4f4991f-42e9-4bc3-8ad3-3122e163b9d3"}, {"type": "Grid", "id": "7ebe0919-460d-4c68-bcaa-8faccebd1472"}, {"type": "Grid", "id": "633c59ed-66c3-4502-9f46-e60f5970ffda"}], "below": [{"type": "LinearAxis", "id": "b1266e9c-78f8-4a5d-ba5f-e17856996107"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "fb8364d9-ce2d-420e-9922-421643e6a9e3"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "l": [15.0, 17.5, 20.0, 22.5, 25.0, 27.5, 30.0, 32.5, 35.0]}, "doc": null, "id": "704675e7-2b75-417f-9c9d-183e9588b8b0", "column_names": ["y", "x", "l"]}, "id": "704675e7-2b75-417f-9c9d-183e9588b8b0"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "3628740a-23b0-4e24-9d07-2634ba8607d6", "tags": [], "geometries": []}, "id": "3628740a-23b0-4e24-9d07-2634ba8607d6"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "74e4ae13-fc2e-4c14-b3d4-86e07d02b628", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "74e4ae13-fc2e-4c14-b3d4-86e07d02b628"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "9a1a0af1-5864-46f4-8011-641496cb66d8"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "a4d056d2-ad13-4da8-a67a-44305095c4f3"}, "plot": {"type": "Plot", "id": "fb8364d9-ce2d-420e-9922-421643e6a9e3"}, "id": "b1266e9c-78f8-4a5d-ba5f-e17856996107"}, "id": "b1266e9c-78f8-4a5d-ba5f-e17856996107"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("961b713f-a5d2-4618-b503-8c11d8108757", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("961b713f-a5d2-4618-b503-8c11d8108757", all_models);
    });
  }

}(this));