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

  var elt = document.getElementById("09d45886-64cb-4d49-ad8d-00efc7730cb0");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '09d45886-64cb-4d49-ad8d-00efc7730cb0' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "aeb315e2-e11a-41d4-8b45-3a4b32bf8a72"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "69dd0c9d-266c-4c68-83e1-76fbe9223946"}, "id": "f406575d-2288-4672-87fe-35530321c9eb"}, "type": "Grid", "id": "f406575d-2288-4672-87fe-35530321c9eb"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "54cd9a62-8451-4188-be9e-69e19c3f5f9e"}, "type": "DataRange1d", "id": "54cd9a62-8451-4188-be9e-69e19c3f5f9e"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "69dd0c9d-266c-4c68-83e1-76fbe9223946"}, "type": "BasicTicker", "id": "69dd0c9d-266c-4c68-83e1-76fbe9223946"}, {"attributes": {"doc": null, "id": "548fccf9-1cac-4d95-aba1-533989562027", "tags": []}, "type": "BasicTickFormatter", "id": "548fccf9-1cac-4d95-aba1-533989562027"}, {"attributes": {"column_names": ["y", "x", "sizes"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "id": "5f1ed0a1-5c98-4bf4-9f1e-3e0ff8981ab3"}, "type": "ColumnDataSource", "id": "5f1ed0a1-5c98-4bf4-9f1e-3e0ff8981ab3"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "8a50db3b-2f73-4171-8a0f-d09444a18ed3"}, "type": "ToolEvents", "id": "8a50db3b-2f73-4171-8a0f-d09444a18ed3"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "54cd9a62-8451-4188-be9e-69e19c3f5f9e"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "8b51bf93-7538-4b63-b449-628ac1dfc7aa"}, {"type": "LinearAxis", "id": "5e851d5e-3963-4599-85d8-59c645d39f80"}, {"type": "LinearAxis", "id": "c8dcda9b-983d-4fe6-8f94-bd8f4c3be371"}, {"type": "Grid", "id": "f406575d-2288-4672-87fe-35530321c9eb"}, {"type": "Grid", "id": "08035da3-e0fb-4a30-b045-37219f9ffd10"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "8a50db3b-2f73-4171-8a0f-d09444a18ed3"}, "h_symmetry": false, "tools": [], "id": "aeb315e2-e11a-41d4-8b45-3a4b32bf8a72", "title": null, "y_range": {"type": "DataRange1d", "id": "1193a7bb-fae3-410c-9aa4-a8a0f87d3918"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "5e851d5e-3963-4599-85d8-59c645d39f80"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "c8dcda9b-983d-4fe6-8f94-bd8f4c3be371"}]}, "type": "Plot", "id": "aeb315e2-e11a-41d4-8b45-3a4b32bf8a72"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "cfd5dae0-af3c-4396-8131-caa322af94c2"}, "type": "BasicTicker", "id": "cfd5dae0-af3c-4396-8131-caa322af94c2"}, {"attributes": {"line_color": {"value": "#fdae6b"}, "line_width": {"value": 2}, "fill_color": null, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "3b68ba7b-8d09-4da4-acd5-ad63537347ff", "size": {"units": "screen", "field": "sizes"}}, "type": "SquareX", "id": "3b68ba7b-8d09-4da4-acd5-ad63537347ff"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "1193a7bb-fae3-410c-9aa4-a8a0f87d3918"}, "type": "DataRange1d", "id": "1193a7bb-fae3-410c-9aa4-a8a0f87d3918"}, {"attributes": {"plot": {"type": "Plot", "id": "aeb315e2-e11a-41d4-8b45-3a4b32bf8a72"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "cfd5dae0-af3c-4396-8131-caa322af94c2"}, "id": "08035da3-e0fb-4a30-b045-37219f9ffd10"}, "type": "Grid", "id": "08035da3-e0fb-4a30-b045-37219f9ffd10"}, {"attributes": {"plot": {"type": "Plot", "id": "aeb315e2-e11a-41d4-8b45-3a4b32bf8a72"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "548fccf9-1cac-4d95-aba1-533989562027"}, "ticker": {"type": "BasicTicker", "id": "cfd5dae0-af3c-4396-8131-caa322af94c2"}, "id": "c8dcda9b-983d-4fe6-8f94-bd8f4c3be371"}, "type": "LinearAxis", "id": "c8dcda9b-983d-4fe6-8f94-bd8f4c3be371"}, {"attributes": {"doc": null, "id": "bf78f39f-a0da-46b2-b3a7-e7237366f29f", "tags": []}, "type": "BasicTickFormatter", "id": "bf78f39f-a0da-46b2-b3a7-e7237366f29f"}, {"attributes": {"plot": {"type": "Plot", "id": "aeb315e2-e11a-41d4-8b45-3a4b32bf8a72"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "bf78f39f-a0da-46b2-b3a7-e7237366f29f"}, "ticker": {"type": "BasicTicker", "id": "69dd0c9d-266c-4c68-83e1-76fbe9223946"}, "id": "5e851d5e-3963-4599-85d8-59c645d39f80"}, "type": "LinearAxis", "id": "5e851d5e-3963-4599-85d8-59c645d39f80"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "5f1ed0a1-5c98-4bf4-9f1e-3e0ff8981ab3"}, "tags": [], "doc": null, "selection_glyph": null, "id": "8b51bf93-7538-4b63-b449-628ac1dfc7aa", "glyph": {"type": "SquareX", "id": "3b68ba7b-8d09-4da4-acd5-ad63537347ff"}}, "type": "GlyphRenderer", "id": "8b51bf93-7538-4b63-b449-628ac1dfc7aa"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("09d45886-64cb-4d49-ad8d-00efc7730cb0", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("09d45886-64cb-4d49-ad8d-00efc7730cb0", all_models);
    });
  }

}(this));