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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.js"

  var elt = document.getElementById("ac215e3f-91ed-4ffa-968f-c46d04625971");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ac215e3f-91ed-4ffa-968f-c46d04625971' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "0c6dd8bb-60a1-4039-af65-0a2f86b62db2", "type": "LinearAxis", "attributes": {"id": "0c6dd8bb-60a1-4039-af65-0a2f86b62db2", "formatter": {"id": "651d17bb-9d76-444d-80ed-5e03f568de3a", "type": "BasicTickFormatter"}, "plot": {"id": "6d3fe4a0-9cc3-4c3e-8db8-710a4507dd14", "type": "Plot"}, "ticker": {"id": "fa1c0589-aee9-402d-9af8-221d1947f694", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "6798a504-198a-4e51-8c2c-f482c40b980c", "type": "ToolEvents", "attributes": {"geometries": [], "id": "6798a504-198a-4e51-8c2c-f482c40b980c", "doc": null, "tags": []}}, {"id": "562b0b88-97a3-40af-b7fb-4855a6bdd652", "type": "BasicTickFormatter", "attributes": {"id": "562b0b88-97a3-40af-b7fb-4855a6bdd652", "doc": null, "tags": []}}, {"id": "383dd82e-e051-47a4-a612-db199b5893d8", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "9a18f50a-e3af-492b-933b-7bd903fc7849", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "383dd82e-e051-47a4-a612-db199b5893d8", "doc": null, "tags": []}}, {"id": "9a18f50a-e3af-492b-933b-7bd903fc7849", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["y", "x"], "id": "9a18f50a-e3af-492b-933b-7bd903fc7849", "doc": null, "tags": []}}, {"id": "7ac1185f-0323-4448-af75-dbe050be1971", "type": "Grid", "attributes": {"id": "7ac1185f-0323-4448-af75-dbe050be1971", "plot": {"id": "6d3fe4a0-9cc3-4c3e-8db8-710a4507dd14", "type": "Plot"}, "dimension": 1, "ticker": {"id": "fa1c0589-aee9-402d-9af8-221d1947f694", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "1cbaa642-8cb6-4a3d-a622-83dfe535135e", "type": "LinearAxis", "attributes": {"id": "1cbaa642-8cb6-4a3d-a622-83dfe535135e", "formatter": {"id": "562b0b88-97a3-40af-b7fb-4855a6bdd652", "type": "BasicTickFormatter"}, "plot": {"id": "6d3fe4a0-9cc3-4c3e-8db8-710a4507dd14", "type": "Plot"}, "ticker": {"id": "1b86065a-b077-4d1d-ad59-29ad7100586c", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "ba463829-5e74-48e6-b85c-b1f5a541da9d", "type": "Annulus", "attributes": {"fill_color": {"value": "#7fc97f"}, "y": {"field": "y", "units": "data"}, "id": "ba463829-5e74-48e6-b85c-b1f5a541da9d", "outer_radius": {"value": 0.4, "units": "data"}, "inner_radius": {"value": 0.2, "units": "data"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": []}}, {"id": "1b86065a-b077-4d1d-ad59-29ad7100586c", "type": "BasicTicker", "attributes": {"id": "1b86065a-b077-4d1d-ad59-29ad7100586c", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "fa1c0589-aee9-402d-9af8-221d1947f694", "type": "BasicTicker", "attributes": {"id": "fa1c0589-aee9-402d-9af8-221d1947f694", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "651d17bb-9d76-444d-80ed-5e03f568de3a", "type": "BasicTickFormatter", "attributes": {"id": "651d17bb-9d76-444d-80ed-5e03f568de3a", "doc": null, "tags": []}}, {"id": "f1e7743e-44f2-4992-acb3-097bf2f5fd97", "type": "Grid", "attributes": {"id": "f1e7743e-44f2-4992-acb3-097bf2f5fd97", "plot": {"id": "6d3fe4a0-9cc3-4c3e-8db8-710a4507dd14", "type": "Plot"}, "dimension": 0, "ticker": {"id": "1b86065a-b077-4d1d-ad59-29ad7100586c", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "9e938150-1ed6-416c-85bb-dc9575fb5eb5", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "9a18f50a-e3af-492b-933b-7bd903fc7849", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "9e938150-1ed6-416c-85bb-dc9575fb5eb5", "doc": null, "tags": []}}, {"id": "6d3fe4a0-9cc3-4c3e-8db8-710a4507dd14", "type": "Plot", "attributes": {"tool_events": {"id": "6798a504-198a-4e51-8c2c-f482c40b980c", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "77ef79dd-55c9-4c38-8e73-e7003b7e5807", "type": "GlyphRenderer"}, {"id": "1cbaa642-8cb6-4a3d-a622-83dfe535135e", "type": "LinearAxis"}, {"id": "0c6dd8bb-60a1-4039-af65-0a2f86b62db2", "type": "LinearAxis"}, {"id": "f1e7743e-44f2-4992-acb3-097bf2f5fd97", "type": "Grid"}, {"id": "7ac1185f-0323-4448-af75-dbe050be1971", "type": "Grid"}], "left": [{"id": "0c6dd8bb-60a1-4039-af65-0a2f86b62db2", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "9e938150-1ed6-416c-85bb-dc9575fb5eb5", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "6d3fe4a0-9cc3-4c3e-8db8-710a4507dd14", "y_range": {"id": "383dd82e-e051-47a4-a612-db199b5893d8", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "1cbaa642-8cb6-4a3d-a622-83dfe535135e", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "77ef79dd-55c9-4c38-8e73-e7003b7e5807", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "9a18f50a-e3af-492b-933b-7bd903fc7849", "type": "ColumnDataSource"}, "id": "77ef79dd-55c9-4c38-8e73-e7003b7e5807", "glyph": {"id": "ba463829-5e74-48e6-b85c-b1f5a541da9d", "type": "Annulus"}, "tags": [], "doc": null}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("ac215e3f-91ed-4ffa-968f-c46d04625971", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("ac215e3f-91ed-4ffa-968f-c46d04625971", all_models);
    });
  }

}(this));