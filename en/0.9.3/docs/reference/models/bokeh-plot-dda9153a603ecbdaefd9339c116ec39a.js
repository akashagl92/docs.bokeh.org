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

  var elt = document.getElementById("5f8da766-bd5e-4f62-9201-c538752ae149");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5f8da766-bd5e-4f62-9201-c538752ae149' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "35e21a44-43d3-445e-8bcb-599180e1e943"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "9d9773b4-ff79-4d77-b361-fe287a0bbff5"}, "dimension": 0, "id": "5f2c45ca-acca-4235-af79-6e9e5208adc3"}, "id": "5f2c45ca-acca-4235-af79-6e9e5208adc3"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "4bed4922-08d3-400e-bf56-b3ecc96dfc0f", "tags": [], "geometries": []}, "id": "4bed4922-08d3-400e-bf56-b3ecc96dfc0f"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "text": ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"]}, "doc": null, "id": "fb3efd5b-bda4-4925-8d24-ea2e9acbb282", "column_names": ["y", "x", "text"]}, "id": "fb3efd5b-bda4-4925-8d24-ea2e9acbb282"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "35e21a44-43d3-445e-8bcb-599180e1e943"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "29555a4d-fd49-4c23-89c5-68afb0ab172e"}, "plot": {"type": "Plot", "id": "9d9773b4-ff79-4d77-b361-fe287a0bbff5"}, "id": "4590ab6e-2608-4363-9dfc-4125d732b8bb"}, "id": "4590ab6e-2608-4363-9dfc-4125d732b8bb"}, {"type": "Text", "attributes": {"y": {"field": "y"}, "angle": {"units": "rad", "value": 0.3}, "text": {"field": "text"}, "tags": [], "doc": null, "x": {"field": "x"}, "text_color": {"value": "#96deb3"}, "id": "71eaf273-0af4-47e2-b634-4222b5a8b3a8"}, "id": "71eaf273-0af4-47e2-b634-4222b5a8b3a8"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "fb3efd5b-bda4-4925-8d24-ea2e9acbb282"}, "tags": [], "glyph": {"type": "Text", "id": "71eaf273-0af4-47e2-b634-4222b5a8b3a8"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "4d99b8d1-ade5-43ed-b16d-e81bb710bd96"}, "id": "4d99b8d1-ade5-43ed-b16d-e81bb710bd96"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "35e21a44-43d3-445e-8bcb-599180e1e943", "tags": []}, "id": "35e21a44-43d3-445e-8bcb-599180e1e943"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "2b56a314-260d-4a09-aae9-abe3fd9591df", "tags": []}, "id": "2b56a314-260d-4a09-aae9-abe3fd9591df"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "09d7c0fb-a73e-4ee1-a1dd-8715bea92f57"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "77d18a9d-e4ea-4f52-aa12-51439ea7de06"}, "id": "9d9773b4-ff79-4d77-b361-fe287a0bbff5", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "c7bd6e7c-4fdd-473e-bf40-e4eb6afb4b6a"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "4bed4922-08d3-400e-bf56-b3ecc96dfc0f"}, "renderers": [{"type": "GlyphRenderer", "id": "4d99b8d1-ade5-43ed-b16d-e81bb710bd96"}, {"type": "LinearAxis", "id": "4590ab6e-2608-4363-9dfc-4125d732b8bb"}, {"type": "LinearAxis", "id": "09d7c0fb-a73e-4ee1-a1dd-8715bea92f57"}, {"type": "Grid", "id": "5f2c45ca-acca-4235-af79-6e9e5208adc3"}, {"type": "Grid", "id": "139edb02-0681-4809-8e8a-14b3613f4128"}], "below": [{"type": "LinearAxis", "id": "4590ab6e-2608-4363-9dfc-4125d732b8bb"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "9d9773b4-ff79-4d77-b361-fe287a0bbff5"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "2b56a314-260d-4a09-aae9-abe3fd9591df"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "8cf25d2b-f8f0-48d3-a631-9b7b19208924"}, "plot": {"type": "Plot", "id": "9d9773b4-ff79-4d77-b361-fe287a0bbff5"}, "id": "09d7c0fb-a73e-4ee1-a1dd-8715bea92f57"}, "id": "09d7c0fb-a73e-4ee1-a1dd-8715bea92f57"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "c7bd6e7c-4fdd-473e-bf40-e4eb6afb4b6a", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "c7bd6e7c-4fdd-473e-bf40-e4eb6afb4b6a"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "29555a4d-fd49-4c23-89c5-68afb0ab172e", "tags": []}, "id": "29555a4d-fd49-4c23-89c5-68afb0ab172e"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "8cf25d2b-f8f0-48d3-a631-9b7b19208924", "tags": []}, "id": "8cf25d2b-f8f0-48d3-a631-9b7b19208924"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "77d18a9d-e4ea-4f52-aa12-51439ea7de06", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "77d18a9d-e4ea-4f52-aa12-51439ea7de06"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "2b56a314-260d-4a09-aae9-abe3fd9591df"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "9d9773b4-ff79-4d77-b361-fe287a0bbff5"}, "dimension": 1, "id": "139edb02-0681-4809-8e8a-14b3613f4128"}, "id": "139edb02-0681-4809-8e8a-14b3613f4128"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("5f8da766-bd5e-4f62-9201-c538752ae149", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("5f8da766-bd5e-4f62-9201-c538752ae149", all_models);
    });
  }

}(this));