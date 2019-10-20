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

  var elt = document.getElementById("5df33ba4-2ade-42a5-9c76-12d6a5328f6d");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5df33ba4-2ade-42a5-9c76-12d6a5328f6d' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "Circle", "attributes": {"fill_alpha": {"value": 0.1}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 20}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "438f1d8a-d5ad-4bf1-8b1a-901bcfdedf7a"}, "id": "438f1d8a-d5ad-4bf1-8b1a-901bcfdedf7a"}, {"type": "OpenURL", "attributes": {"doc": null, "id": "61f2c380-d48d-4dc7-bb97-7132eea01c0d", "tags": [], "url": "http://www.colors.commutercreative.com/@color/"}, "id": "61f2c380-d48d-4dc7-bb97-7132eea01c0d"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "6b893d42-dd83-47fa-a721-c9ad0fe1895e", "tags": []}, "id": "6b893d42-dd83-47fa-a721-c9ad0fe1895e"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "a0c257f9-5ec2-4e42-ab5d-a5a0f5ae163b"}, "id": "a0c257f9-5ec2-4e42-ab5d-a5a0f5ae163b"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5], "color": ["navy", "orange", "olive", "firebrick", "gold"]}, "doc": null, "id": "c6e87185-96e8-483e-a00b-cc67ec60fefa", "column_names": ["y", "x", "color"]}, "id": "c6e87185-96e8-483e-a00b-cc67ec60fefa"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "c6e87185-96e8-483e-a00b-cc67ec60fefa"}, "tags": [], "glyph": {"type": "Circle", "id": "be2a2eaf-9e11-4d96-9a33-6e0fbdeeaed0"}, "doc": null, "nonselection_glyph": {"type": "Circle", "id": "438f1d8a-d5ad-4bf1-8b1a-901bcfdedf7a"}, "selection_glyph": null, "id": "ef256193-2b11-4c62-8fc1-5164fcc64f0c"}, "id": "ef256193-2b11-4c62-8fc1-5164fcc64f0c"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "14155726-e050-4b3b-8925-db75674e12cb"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "49e3fa20-5348-4123-8446-98821b0be3d3"}, "plot": {"type": "Plot", "id": "b6241536-b733-478d-9a86-ddb95998b93e", "subtype": "Figure"}, "id": "f3fccdfc-8e0c-4f46-96d5-de2efeca1df3"}, "id": "f3fccdfc-8e0c-4f46-96d5-de2efeca1df3"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "36f6fe8c-031a-4ed9-8233-fe4859907e66", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "36f6fe8c-031a-4ed9-8233-fe4859907e66"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "49e3fa20-5348-4123-8446-98821b0be3d3", "tags": []}, "id": "49e3fa20-5348-4123-8446-98821b0be3d3"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 1.0}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"field": "color"}, "size": {"units": "screen", "value": 20}, "line_alpha": {"value": 1.0}, "line_color": {"field": "color"}, "doc": null, "id": "be2a2eaf-9e11-4d96-9a33-6e0fbdeeaed0"}, "id": "be2a2eaf-9e11-4d96-9a33-6e0fbdeeaed0"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "14155726-e050-4b3b-8925-db75674e12cb"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "b6241536-b733-478d-9a86-ddb95998b93e", "subtype": "Figure"}, "dimension": 1, "id": "285ae7a7-0975-4403-8e75-aef9fadbc731"}, "id": "285ae7a7-0975-4403-8e75-aef9fadbc731"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "14155726-e050-4b3b-8925-db75674e12cb"}, "id": "14155726-e050-4b3b-8925-db75674e12cb"}, {"type": "TapTool", "attributes": {"always_active": true, "id": "b783902f-d6b2-4292-bed3-900fdaf42ca3", "tags": [], "doc": null, "plot": {"type": "Plot", "id": "b6241536-b733-478d-9a86-ddb95998b93e", "subtype": "Figure"}, "renderers": [], "callback": {"type": "OpenURL", "id": "61f2c380-d48d-4dc7-bb97-7132eea01c0d"}, "names": []}, "id": "b783902f-d6b2-4292-bed3-900fdaf42ca3"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "a0c257f9-5ec2-4e42-ab5d-a5a0f5ae163b"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "6b893d42-dd83-47fa-a721-c9ad0fe1895e"}, "plot": {"type": "Plot", "id": "b6241536-b733-478d-9a86-ddb95998b93e", "subtype": "Figure"}, "id": "ca9aec33-7a6f-41e6-858f-82842a5c17c2"}, "id": "ca9aec33-7a6f-41e6-858f-82842a5c17c2"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "36f6fe8c-031a-4ed9-8233-fe4859907e66"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "5d41efb0-702f-4c5d-a19c-fd9164b54bd0"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "ca9aec33-7a6f-41e6-858f-82842a5c17c2"}, {"type": "Grid", "id": "fcc088c5-8570-470d-9f38-9c00d977fcae"}, {"type": "LinearAxis", "id": "f3fccdfc-8e0c-4f46-96d5-de2efeca1df3"}, {"type": "Grid", "id": "285ae7a7-0975-4403-8e75-aef9fadbc731"}, {"type": "GlyphRenderer", "id": "ef256193-2b11-4c62-8fc1-5164fcc64f0c"}], "below": [{"type": "LinearAxis", "id": "ca9aec33-7a6f-41e6-858f-82842a5c17c2"}], "left": [{"type": "LinearAxis", "id": "f3fccdfc-8e0c-4f46-96d5-de2efeca1df3"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "title": "Click the Dots", "tools": [{"type": "TapTool", "id": "b783902f-d6b2-4292-bed3-900fdaf42ca3"}], "x_range": {"type": "DataRange1d", "id": "91b8fd9c-215e-4a4b-a422-bb975ff80a7e"}, "id": "b6241536-b733-478d-9a86-ddb95998b93e"}, "id": "b6241536-b733-478d-9a86-ddb95998b93e", "subtype": "Figure"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "91b8fd9c-215e-4a4b-a422-bb975ff80a7e", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "91b8fd9c-215e-4a4b-a422-bb975ff80a7e"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "a0c257f9-5ec2-4e42-ab5d-a5a0f5ae163b"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "b6241536-b733-478d-9a86-ddb95998b93e", "subtype": "Figure"}, "dimension": 0, "id": "fcc088c5-8570-470d-9f38-9c00d977fcae"}, "id": "fcc088c5-8570-470d-9f38-9c00d977fcae"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "5d41efb0-702f-4c5d-a19c-fd9164b54bd0", "tags": [], "geometries": []}, "id": "5d41efb0-702f-4c5d-a19c-fd9164b54bd0"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("5df33ba4-2ade-42a5-9c76-12d6a5328f6d", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("5df33ba4-2ade-42a5-9c76-12d6a5328f6d", all_models);
    });
  }

}(this));