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

  var elt = document.getElementById("8b36d864-773e-4569-b14c-59d5d1914d8f");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8b36d864-773e-4569-b14c-59d5d1914d8f' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "0c79dc42-2595-4fc3-9a11-50d410737d06"}, "type": "BasicTicker", "id": "0c79dc42-2595-4fc3-9a11-50d410737d06"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "e3789959-a993-4a4d-8653-55c7059efc66"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "45b924fd-ed36-470c-badc-7daab1c5c467"}, {"type": "LinearAxis", "id": "020f97cb-bee3-4aed-afb6-819779b4848d"}, {"type": "LinearAxis", "id": "67bb5886-fa31-4f4d-b19c-c62903c831d7"}, {"type": "Grid", "id": "9d794592-ca7d-4eb0-91f9-8f292e766898"}, {"type": "Grid", "id": "d6970f99-0603-42bc-b911-21d942821fb6"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "0372eda1-234d-4341-9aa5-5a49bf2d6c98"}, "h_symmetry": false, "tools": [], "id": "8bf46a41-76b2-4163-8dfc-9ef95279947f", "title": null, "y_range": {"type": "DataRange1d", "id": "56b60000-6958-4d00-b5d0-1deba5682d07"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "020f97cb-bee3-4aed-afb6-819779b4848d"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "67bb5886-fa31-4f4d-b19c-c62903c831d7"}]}, "type": "Plot", "id": "8bf46a41-76b2-4163-8dfc-9ef95279947f"}, {"attributes": {"plot": {"type": "Plot", "id": "8bf46a41-76b2-4163-8dfc-9ef95279947f"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "b9ea31a9-0753-4f35-b59c-766c2b5ce731"}, "ticker": {"type": "BasicTicker", "id": "0c79dc42-2595-4fc3-9a11-50d410737d06"}, "id": "020f97cb-bee3-4aed-afb6-819779b4848d"}, "type": "LinearAxis", "id": "020f97cb-bee3-4aed-afb6-819779b4848d"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "e3789959-a993-4a4d-8653-55c7059efc66"}, "type": "DataRange1d", "id": "e3789959-a993-4a4d-8653-55c7059efc66"}, {"attributes": {"plot": {"type": "Plot", "id": "8bf46a41-76b2-4163-8dfc-9ef95279947f"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "109cec2d-3c29-49e1-80ea-91dd97bf95fd"}, "id": "d6970f99-0603-42bc-b911-21d942821fb6"}, "type": "Grid", "id": "d6970f99-0603-42bc-b911-21d942821fb6"}, {"attributes": {"plot": {"type": "Plot", "id": "8bf46a41-76b2-4163-8dfc-9ef95279947f"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "8dfe08e7-e055-47a0-9daf-9157d3f312ca"}, "ticker": {"type": "BasicTicker", "id": "109cec2d-3c29-49e1-80ea-91dd97bf95fd"}, "id": "67bb5886-fa31-4f4d-b19c-c62903c831d7"}, "type": "LinearAxis", "id": "67bb5886-fa31-4f4d-b19c-c62903c831d7"}, {"attributes": {"doc": null, "id": "b9ea31a9-0753-4f35-b59c-766c2b5ce731", "tags": []}, "type": "BasicTickFormatter", "id": "b9ea31a9-0753-4f35-b59c-766c2b5ce731"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "cc43529e-008e-44af-a995-5c0a5498d7d9"}, "tags": [], "doc": null, "selection_glyph": null, "id": "45b924fd-ed36-470c-badc-7daab1c5c467", "glyph": {"type": "Arc", "id": "f10a71e2-8ad8-46a3-8921-343f797d3976"}}, "type": "GlyphRenderer", "id": "45b924fd-ed36-470c-badc-7daab1c5c467"}, {"attributes": {"plot": {"type": "Plot", "id": "8bf46a41-76b2-4163-8dfc-9ef95279947f"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "0c79dc42-2595-4fc3-9a11-50d410737d06"}, "id": "9d794592-ca7d-4eb0-91f9-8f292e766898"}, "type": "Grid", "id": "9d794592-ca7d-4eb0-91f9-8f292e766898"}, {"attributes": {"line_color": {"value": "#beaed4"}, "line_width": {"value": 3}, "start_angle": {"units": "rad", "value": 0.6}, "doc": null, "tags": [], "end_angle": {"units": "rad", "value": 4.1}, "radius": {"units": "data", "field": "r"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "f10a71e2-8ad8-46a3-8921-343f797d3976"}, "type": "Arc", "id": "f10a71e2-8ad8-46a3-8921-343f797d3976"}, {"attributes": {"doc": null, "id": "8dfe08e7-e055-47a0-9daf-9157d3f312ca", "tags": []}, "type": "BasicTickFormatter", "id": "8dfe08e7-e055-47a0-9daf-9157d3f312ca"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "0372eda1-234d-4341-9aa5-5a49bf2d6c98"}, "type": "ToolEvents", "id": "0372eda1-234d-4341-9aa5-5a49bf2d6c98"}, {"attributes": {"column_names": ["y", "x", "r"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "r": [0.16666666666666666, 0.19999999999999998, 0.23333333333333334, 0.26666666666666666, 0.3, 0.3333333333333333, 0.36666666666666664, 0.4, 0.43333333333333335]}, "id": "cc43529e-008e-44af-a995-5c0a5498d7d9"}, "type": "ColumnDataSource", "id": "cc43529e-008e-44af-a995-5c0a5498d7d9"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "56b60000-6958-4d00-b5d0-1deba5682d07"}, "type": "DataRange1d", "id": "56b60000-6958-4d00-b5d0-1deba5682d07"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "109cec2d-3c29-49e1-80ea-91dd97bf95fd"}, "type": "BasicTicker", "id": "109cec2d-3c29-49e1-80ea-91dd97bf95fd"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("8b36d864-773e-4569-b14c-59d5d1914d8f", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("8b36d864-773e-4569-b14c-59d5d1914d8f", all_models);
    });
  }

}(this));