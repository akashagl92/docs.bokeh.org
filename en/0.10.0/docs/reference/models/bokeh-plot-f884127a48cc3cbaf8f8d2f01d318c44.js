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

  var elt = document.getElementById("79441636-4abe-4c9b-b621-9aee31114035");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '79441636-4abe-4c9b-b621-9aee31114035' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "36cddd93-8bf8-4d9f-939a-0efc855097b2"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "0d1b75ff-d0bf-4118-8e48-73deb1d362b1"}, "ticker": {"type": "BasicTicker", "id": "ae0fcc78-29fd-4fd2-a7dd-dea4b3005d81"}, "id": "0114f023-5b21-49cc-a040-67d77ae2e608"}, "type": "LinearAxis", "id": "0114f023-5b21-49cc-a040-67d77ae2e608"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "d2eb009d-55cd-4431-ac06-ff9a4bd5e596"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "cff48c53-1c26-4aa1-91c2-3163591d5c9e"}, {"type": "LinearAxis", "id": "8d254632-28ed-4000-9132-d0f1f39f8226"}, {"type": "LinearAxis", "id": "0114f023-5b21-49cc-a040-67d77ae2e608"}, {"type": "Grid", "id": "edcfdb2d-7341-4409-95cf-c023e3adfc29"}, {"type": "Grid", "id": "fbbabc1f-e44e-414c-8dd2-fc63b72f7181"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "3326b329-4ef0-4318-91aa-5705fe2874d4"}, "h_symmetry": false, "tools": [], "id": "36cddd93-8bf8-4d9f-939a-0efc855097b2", "title": null, "y_range": {"type": "DataRange1d", "id": "eabd9eed-7912-488a-bbc1-211aff6203b1"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "8d254632-28ed-4000-9132-d0f1f39f8226"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "0114f023-5b21-49cc-a040-67d77ae2e608"}]}, "type": "Plot", "id": "36cddd93-8bf8-4d9f-939a-0efc855097b2"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "58eaba7f-3817-4ef6-8de4-f4f033964a23"}, "type": "BasicTicker", "id": "58eaba7f-3817-4ef6-8de4-f4f033964a23"}, {"attributes": {"plot": {"type": "Plot", "id": "36cddd93-8bf8-4d9f-939a-0efc855097b2"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "58eaba7f-3817-4ef6-8de4-f4f033964a23"}, "id": "edcfdb2d-7341-4409-95cf-c023e3adfc29"}, "type": "Grid", "id": "edcfdb2d-7341-4409-95cf-c023e3adfc29"}, {"attributes": {"plot": {"type": "Plot", "id": "36cddd93-8bf8-4d9f-939a-0efc855097b2"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "ae0fcc78-29fd-4fd2-a7dd-dea4b3005d81"}, "id": "fbbabc1f-e44e-414c-8dd2-fc63b72f7181"}, "type": "Grid", "id": "fbbabc1f-e44e-414c-8dd2-fc63b72f7181"}, {"attributes": {"doc": null, "id": "02bd7357-d05d-429b-afe4-3d336b8a4807", "tags": []}, "type": "BasicTickFormatter", "id": "02bd7357-d05d-429b-afe4-3d336b8a4807"}, {"attributes": {"line_color": {"value": "#fb8072"}, "line_width": {"value": 2}, "fill_color": null, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "3ec093e2-25a2-4e59-b49d-40055d6f163e", "size": {"units": "screen", "field": "sizes"}}, "type": "CircleCross", "id": "3ec093e2-25a2-4e59-b49d-40055d6f163e"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "d2eb009d-55cd-4431-ac06-ff9a4bd5e596"}, "type": "DataRange1d", "id": "d2eb009d-55cd-4431-ac06-ff9a4bd5e596"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "3326b329-4ef0-4318-91aa-5705fe2874d4"}, "type": "ToolEvents", "id": "3326b329-4ef0-4318-91aa-5705fe2874d4"}, {"attributes": {"plot": {"type": "Plot", "id": "36cddd93-8bf8-4d9f-939a-0efc855097b2"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "02bd7357-d05d-429b-afe4-3d336b8a4807"}, "ticker": {"type": "BasicTicker", "id": "58eaba7f-3817-4ef6-8de4-f4f033964a23"}, "id": "8d254632-28ed-4000-9132-d0f1f39f8226"}, "type": "LinearAxis", "id": "8d254632-28ed-4000-9132-d0f1f39f8226"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "b317bc58-8e3e-4a46-ac31-7e84fc90a4ff"}, "tags": [], "doc": null, "selection_glyph": null, "id": "cff48c53-1c26-4aa1-91c2-3163591d5c9e", "glyph": {"type": "CircleCross", "id": "3ec093e2-25a2-4e59-b49d-40055d6f163e"}}, "type": "GlyphRenderer", "id": "cff48c53-1c26-4aa1-91c2-3163591d5c9e"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "eabd9eed-7912-488a-bbc1-211aff6203b1"}, "type": "DataRange1d", "id": "eabd9eed-7912-488a-bbc1-211aff6203b1"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "ae0fcc78-29fd-4fd2-a7dd-dea4b3005d81"}, "type": "BasicTicker", "id": "ae0fcc78-29fd-4fd2-a7dd-dea4b3005d81"}, {"attributes": {"column_names": ["y", "x", "sizes"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "id": "b317bc58-8e3e-4a46-ac31-7e84fc90a4ff"}, "type": "ColumnDataSource", "id": "b317bc58-8e3e-4a46-ac31-7e84fc90a4ff"}, {"attributes": {"doc": null, "id": "0d1b75ff-d0bf-4118-8e48-73deb1d362b1", "tags": []}, "type": "BasicTickFormatter", "id": "0d1b75ff-d0bf-4118-8e48-73deb1d362b1"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("79441636-4abe-4c9b-b621-9aee31114035", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("79441636-4abe-4c9b-b621-9aee31114035", all_models);
    });
  }

}(this));