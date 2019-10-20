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

  var elt = document.getElementById("79d0b912-cc6e-4e87-bcfd-085b1974e7dc");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '79d0b912-cc6e-4e87-bcfd-085b1974e7dc' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "DataRange1d", "attributes": {"callback": null, "id": "248c515f-c78d-48bb-810a-abeef809827a", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "248c515f-c78d-48bb-810a-abeef809827a"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "74612f80-b86d-42af-854f-100a2c73fc1f", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "74612f80-b86d-42af-854f-100a2c73fc1f"}, {"type": "SquareCross", "attributes": {"y": {"field": "y"}, "fill_color": null, "size": {"units": "screen", "field": "sizes"}, "line_width": {"value": 2}, "line_color": {"value": "#7fc97f"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "ecf065d7-f36f-4606-bd00-503075905a17"}, "id": "ecf065d7-f36f-4606-bd00-503075905a17"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "3c8326f8-706e-4849-91a5-a1e84915ac57"}, "tags": [], "glyph": {"type": "SquareCross", "id": "ecf065d7-f36f-4606-bd00-503075905a17"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "047305ee-585d-4c37-ba76-4ab3a1fb0f4d"}, "id": "047305ee-585d-4c37-ba76-4ab3a1fb0f4d"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "48dfd53f-91cb-495f-b9fe-16e1578862e7", "tags": []}, "id": "48dfd53f-91cb-495f-b9fe-16e1578862e7"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "3986d63b-fade-4ace-8f88-854bd6c1b0da", "tags": []}, "id": "3986d63b-fade-4ace-8f88-854bd6c1b0da"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "a1658c2c-6718-4cdd-9f30-a195527636d2"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "48dfd53f-91cb-495f-b9fe-16e1578862e7"}, "plot": {"type": "Plot", "id": "fc5af0b8-65f7-4900-a24e-205ac3eb63ea"}, "id": "95d59f08-19cb-43e6-b825-28176d74b881"}, "id": "95d59f08-19cb-43e6-b825-28176d74b881"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "3986d63b-fade-4ace-8f88-854bd6c1b0da"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "fc5af0b8-65f7-4900-a24e-205ac3eb63ea"}, "dimension": 1, "id": "86bac7ba-ec31-41d5-9f46-965a68034525"}, "id": "86bac7ba-ec31-41d5-9f46-965a68034525"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "a1658c2c-6718-4cdd-9f30-a195527636d2", "tags": []}, "id": "a1658c2c-6718-4cdd-9f30-a195527636d2"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "doc": null, "id": "3c8326f8-706e-4849-91a5-a1e84915ac57", "column_names": ["y", "x", "sizes"]}, "id": "3c8326f8-706e-4849-91a5-a1e84915ac57"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "779c8e3a-4ac1-415c-89ff-4c36a389333a", "tags": []}, "id": "779c8e3a-4ac1-415c-89ff-4c36a389333a"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "3986d63b-fade-4ace-8f88-854bd6c1b0da"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "779c8e3a-4ac1-415c-89ff-4c36a389333a"}, "plot": {"type": "Plot", "id": "fc5af0b8-65f7-4900-a24e-205ac3eb63ea"}, "id": "26607749-3cb2-4811-ad36-8725678eb425"}, "id": "26607749-3cb2-4811-ad36-8725678eb425"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "26607749-3cb2-4811-ad36-8725678eb425"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "74612f80-b86d-42af-854f-100a2c73fc1f"}, "id": "fc5af0b8-65f7-4900-a24e-205ac3eb63ea", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "248c515f-c78d-48bb-810a-abeef809827a"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "e4b9fa91-3dfe-4e83-b1c6-94318c6a19b7"}, "renderers": [{"type": "GlyphRenderer", "id": "047305ee-585d-4c37-ba76-4ab3a1fb0f4d"}, {"type": "LinearAxis", "id": "95d59f08-19cb-43e6-b825-28176d74b881"}, {"type": "LinearAxis", "id": "26607749-3cb2-4811-ad36-8725678eb425"}, {"type": "Grid", "id": "fffbc539-c519-4370-9638-637a8b9c8654"}, {"type": "Grid", "id": "86bac7ba-ec31-41d5-9f46-965a68034525"}], "below": [{"type": "LinearAxis", "id": "95d59f08-19cb-43e6-b825-28176d74b881"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "fc5af0b8-65f7-4900-a24e-205ac3eb63ea"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "a1658c2c-6718-4cdd-9f30-a195527636d2"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "fc5af0b8-65f7-4900-a24e-205ac3eb63ea"}, "dimension": 0, "id": "fffbc539-c519-4370-9638-637a8b9c8654"}, "id": "fffbc539-c519-4370-9638-637a8b9c8654"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "e4b9fa91-3dfe-4e83-b1c6-94318c6a19b7", "tags": [], "geometries": []}, "id": "e4b9fa91-3dfe-4e83-b1c6-94318c6a19b7"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("79d0b912-cc6e-4e87-bcfd-085b1974e7dc", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("79d0b912-cc6e-4e87-bcfd-085b1974e7dc", all_models);
    });
  }

}(this));