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

  var elt = document.getElementById("a7bcd524-18c5-4296-ae1c-5e1322972249");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a7bcd524-18c5-4296-ae1c-5e1322972249' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "2468d1a3-651e-429e-a23b-c02e17fbb916", "tags": []}, "id": "2468d1a3-651e-429e-a23b-c02e17fbb916"}, {"type": "Square", "attributes": {"y": {"field": "y"}, "fill_color": {"value": "#74add1"}, "size": {"units": "screen", "field": "sizes"}, "tags": [], "doc": null, "x": {"field": "x"}, "id": "fdf9cada-743e-4516-aa7d-f82bfb850c4b"}, "id": "fdf9cada-743e-4516-aa7d-f82bfb850c4b"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "75d21311-18ff-4c01-b200-41d0007ae315", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "75d21311-18ff-4c01-b200-41d0007ae315"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "99c1a44e-9443-4520-9e60-a56b32066eed"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "2468d1a3-651e-429e-a23b-c02e17fbb916"}, "plot": {"type": "Plot", "id": "9178b59c-2691-46c5-ac26-d138e2a45d5e"}, "id": "a66864dd-18aa-4ce4-a964-3284090ef25e"}, "id": "a66864dd-18aa-4ce4-a964-3284090ef25e"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "1f46adc6-dc6d-4802-8059-7b63f84ec7c4"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "bcfc3205-a58c-471f-8b3b-17e1bad68065"}, "plot": {"type": "Plot", "id": "9178b59c-2691-46c5-ac26-d138e2a45d5e"}, "id": "9c555215-3827-4de0-b49d-4aca34dc82a6"}, "id": "9c555215-3827-4de0-b49d-4aca34dc82a6"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "99c1a44e-9443-4520-9e60-a56b32066eed"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "9178b59c-2691-46c5-ac26-d138e2a45d5e"}, "dimension": 0, "id": "537597d9-25ba-4ace-bb08-4fb0700de3ab"}, "id": "537597d9-25ba-4ace-bb08-4fb0700de3ab"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "001525af-2820-4de6-9da3-2a852c653c5a", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "001525af-2820-4de6-9da3-2a852c653c5a"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "99c1a44e-9443-4520-9e60-a56b32066eed", "tags": []}, "id": "99c1a44e-9443-4520-9e60-a56b32066eed"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "bcfc3205-a58c-471f-8b3b-17e1bad68065", "tags": []}, "id": "bcfc3205-a58c-471f-8b3b-17e1bad68065"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "1f46adc6-dc6d-4802-8059-7b63f84ec7c4", "tags": []}, "id": "1f46adc6-dc6d-4802-8059-7b63f84ec7c4"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "1f46adc6-dc6d-4802-8059-7b63f84ec7c4"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "9178b59c-2691-46c5-ac26-d138e2a45d5e"}, "dimension": 1, "id": "763968a0-9258-444e-bb8b-d26ec276acf8"}, "id": "763968a0-9258-444e-bb8b-d26ec276acf8"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "f9ababc5-a4d8-4fba-98a8-12e3da8e79ae", "tags": [], "geometries": []}, "id": "f9ababc5-a4d8-4fba-98a8-12e3da8e79ae"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "doc": null, "id": "f0894658-a1b6-4970-82b4-9d9d59a3b6ad", "column_names": ["y", "x", "sizes"]}, "id": "f0894658-a1b6-4970-82b4-9d9d59a3b6ad"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "9c555215-3827-4de0-b49d-4aca34dc82a6"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "75d21311-18ff-4c01-b200-41d0007ae315"}, "id": "9178b59c-2691-46c5-ac26-d138e2a45d5e", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "001525af-2820-4de6-9da3-2a852c653c5a"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "f9ababc5-a4d8-4fba-98a8-12e3da8e79ae"}, "renderers": [{"type": "GlyphRenderer", "id": "ce90772b-e879-4657-897b-48168ad324b5"}, {"type": "LinearAxis", "id": "a66864dd-18aa-4ce4-a964-3284090ef25e"}, {"type": "LinearAxis", "id": "9c555215-3827-4de0-b49d-4aca34dc82a6"}, {"type": "Grid", "id": "537597d9-25ba-4ace-bb08-4fb0700de3ab"}, {"type": "Grid", "id": "763968a0-9258-444e-bb8b-d26ec276acf8"}], "below": [{"type": "LinearAxis", "id": "a66864dd-18aa-4ce4-a964-3284090ef25e"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "9178b59c-2691-46c5-ac26-d138e2a45d5e"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "f0894658-a1b6-4970-82b4-9d9d59a3b6ad"}, "tags": [], "glyph": {"type": "Square", "id": "fdf9cada-743e-4516-aa7d-f82bfb850c4b"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "ce90772b-e879-4657-897b-48168ad324b5"}, "id": "ce90772b-e879-4657-897b-48168ad324b5"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("a7bcd524-18c5-4296-ae1c-5e1322972249", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("a7bcd524-18c5-4296-ae1c-5e1322972249", all_models);
    });
  }

}(this));