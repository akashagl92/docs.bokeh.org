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

  var elt = document.getElementById("0d5662ed-d0bb-4275-a7ef-e6af50e7c4ff");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0d5662ed-d0bb-4275-a7ef-e6af50e7c4ff' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "DataRange1d", "attributes": {"callback": null, "id": "fb602508-24f1-45c0-b1f7-34f8b1dc3e25", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "fb602508-24f1-45c0-b1f7-34f8b1dc3e25"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "8f138cde-b69a-4373-8ffd-918a28572ff2"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "147d84a5-2d8a-4180-b745-0089613d2732"}, "plot": {"type": "Plot", "id": "18d49905-201f-45cc-afbe-c748631cd2b7"}, "id": "eb8157d2-526b-42af-b135-a25d82eae646"}, "id": "eb8157d2-526b-42af-b135-a25d82eae646"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "4cf4d0f6-d991-452a-b850-c09af75fdf09", "tags": []}, "id": "4cf4d0f6-d991-452a-b850-c09af75fdf09"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "f4714ac9-5c33-42af-8f1a-449c5b8dd74f"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "18d49905-201f-45cc-afbe-c748631cd2b7"}, "dimension": 1, "id": "16eae194-3894-4de8-a19e-9089d2ded630"}, "id": "16eae194-3894-4de8-a19e-9089d2ded630"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "doc": null, "id": "0cbad757-d274-409a-9fc2-477f70201939", "column_names": ["y", "x", "sizes"]}, "id": "0cbad757-d274-409a-9fc2-477f70201939"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "b7eeb1bc-1e9c-4995-b3f7-e481f1cabab6", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "b7eeb1bc-1e9c-4995-b3f7-e481f1cabab6"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "8f138cde-b69a-4373-8ffd-918a28572ff2"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "18d49905-201f-45cc-afbe-c748631cd2b7"}, "dimension": 0, "id": "7ceae7c3-67ae-475f-b2fa-6f55bcee0505"}, "id": "7ceae7c3-67ae-475f-b2fa-6f55bcee0505"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "12b882cb-d00d-48c6-9797-72da973b90a6", "tags": [], "geometries": []}, "id": "12b882cb-d00d-48c6-9797-72da973b90a6"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "147d84a5-2d8a-4180-b745-0089613d2732", "tags": []}, "id": "147d84a5-2d8a-4180-b745-0089613d2732"}, {"type": "Triangle", "attributes": {"y": {"field": "y"}, "fill_color": null, "size": {"units": "screen", "field": "sizes"}, "line_width": {"value": 2}, "line_color": {"value": "#99d594"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "464e7589-b602-4ade-8919-ce6878e290cd"}, "id": "464e7589-b602-4ade-8919-ce6878e290cd"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "0cbad757-d274-409a-9fc2-477f70201939"}, "tags": [], "glyph": {"type": "Triangle", "id": "464e7589-b602-4ade-8919-ce6878e290cd"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "e331ae3e-b18d-4f82-8484-a36ca10a2e29"}, "id": "e331ae3e-b18d-4f82-8484-a36ca10a2e29"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "f4714ac9-5c33-42af-8f1a-449c5b8dd74f"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "4cf4d0f6-d991-452a-b850-c09af75fdf09"}, "plot": {"type": "Plot", "id": "18d49905-201f-45cc-afbe-c748631cd2b7"}, "id": "7224b0c7-5ac8-4e58-a556-8a133c00ab80"}, "id": "7224b0c7-5ac8-4e58-a556-8a133c00ab80"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "f4714ac9-5c33-42af-8f1a-449c5b8dd74f", "tags": []}, "id": "f4714ac9-5c33-42af-8f1a-449c5b8dd74f"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "8f138cde-b69a-4373-8ffd-918a28572ff2", "tags": []}, "id": "8f138cde-b69a-4373-8ffd-918a28572ff2"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "7224b0c7-5ac8-4e58-a556-8a133c00ab80"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "fb602508-24f1-45c0-b1f7-34f8b1dc3e25"}, "id": "18d49905-201f-45cc-afbe-c748631cd2b7", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "b7eeb1bc-1e9c-4995-b3f7-e481f1cabab6"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "12b882cb-d00d-48c6-9797-72da973b90a6"}, "renderers": [{"type": "GlyphRenderer", "id": "e331ae3e-b18d-4f82-8484-a36ca10a2e29"}, {"type": "LinearAxis", "id": "eb8157d2-526b-42af-b135-a25d82eae646"}, {"type": "LinearAxis", "id": "7224b0c7-5ac8-4e58-a556-8a133c00ab80"}, {"type": "Grid", "id": "7ceae7c3-67ae-475f-b2fa-6f55bcee0505"}, {"type": "Grid", "id": "16eae194-3894-4de8-a19e-9089d2ded630"}], "below": [{"type": "LinearAxis", "id": "eb8157d2-526b-42af-b135-a25d82eae646"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "18d49905-201f-45cc-afbe-c748631cd2b7"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("0d5662ed-d0bb-4275-a7ef-e6af50e7c4ff", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("0d5662ed-d0bb-4275-a7ef-e6af50e7c4ff", all_models);
    });
  }

}(this));