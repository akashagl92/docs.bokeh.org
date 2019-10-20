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

  var elt = document.getElementById("9c155d90-c9c6-4bd9-969c-546c32431b80");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '9c155d90-c9c6-4bd9-969c-546c32431b80' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "e98b00de-484d-472c-887c-676599169263"}, "tags": [], "doc": null, "selection_glyph": null, "id": "55ff3c20-c4d7-43cb-bf58-eef6cd18f04c", "glyph": {"type": "Ray", "id": "1d6b3ad7-a14b-4545-a288-8f43b29014f3"}}, "type": "GlyphRenderer", "id": "55ff3c20-c4d7-43cb-bf58-eef6cd18f04c"}, {"attributes": {"doc": null, "id": "2cff7c35-2823-474f-a956-68e9b11c22d8", "tags": []}, "type": "BasicTickFormatter", "id": "2cff7c35-2823-474f-a956-68e9b11c22d8"}, {"attributes": {"plot": {"type": "Plot", "id": "3f394784-2ee7-4239-afbf-5dd399e9e337"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "cb6e65e6-e1c0-4dc6-a2f5-d3c2a2f8435c"}, "ticker": {"type": "BasicTicker", "id": "4cd79b34-b30b-44c7-9fee-b62c67135126"}, "id": "5f47a89a-1320-4e81-acb4-91dec6ae59d4"}, "type": "LinearAxis", "id": "5f47a89a-1320-4e81-acb4-91dec6ae59d4"}, {"attributes": {"doc": null, "id": "cb6e65e6-e1c0-4dc6-a2f5-d3c2a2f8435c", "tags": []}, "type": "BasicTickFormatter", "id": "cb6e65e6-e1c0-4dc6-a2f5-d3c2a2f8435c"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "9bc3b834-8bdb-4f0b-b60b-222a7aa4db70"}, "type": "DataRange1d", "id": "9bc3b834-8bdb-4f0b-b60b-222a7aa4db70"}, {"attributes": {"line_color": {"value": "#fb8072"}, "line_width": {"value": 3}, "angle": {"units": "rad", "value": -2.0}, "tags": [], "doc": null, "length": {"units": "data", "field": "l"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "1d6b3ad7-a14b-4545-a288-8f43b29014f3"}, "type": "Ray", "id": "1d6b3ad7-a14b-4545-a288-8f43b29014f3"}, {"attributes": {"plot": {"type": "Plot", "id": "3f394784-2ee7-4239-afbf-5dd399e9e337"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "eba9e7f9-e341-43b7-a841-f513f3933083"}, "id": "ba95f9d5-89fd-463b-9d49-2bbe8a137d62"}, "type": "Grid", "id": "ba95f9d5-89fd-463b-9d49-2bbe8a137d62"}, {"attributes": {"plot": {"type": "Plot", "id": "3f394784-2ee7-4239-afbf-5dd399e9e337"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "4cd79b34-b30b-44c7-9fee-b62c67135126"}, "id": "4778933f-bc3e-423b-872f-b09169e8c4b3"}, "type": "Grid", "id": "4778933f-bc3e-423b-872f-b09169e8c4b3"}, {"attributes": {"column_names": ["y", "x", "l"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "l": [15.0, 17.5, 20.0, 22.5, 25.0, 27.5, 30.0, 32.5, 35.0]}, "id": "e98b00de-484d-472c-887c-676599169263"}, "type": "ColumnDataSource", "id": "e98b00de-484d-472c-887c-676599169263"}, {"attributes": {"plot": {"type": "Plot", "id": "3f394784-2ee7-4239-afbf-5dd399e9e337"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "2cff7c35-2823-474f-a956-68e9b11c22d8"}, "ticker": {"type": "BasicTicker", "id": "eba9e7f9-e341-43b7-a841-f513f3933083"}, "id": "90ab3adc-9567-40cb-909e-32e6b6aca269"}, "type": "LinearAxis", "id": "90ab3adc-9567-40cb-909e-32e6b6aca269"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "eba9e7f9-e341-43b7-a841-f513f3933083"}, "type": "BasicTicker", "id": "eba9e7f9-e341-43b7-a841-f513f3933083"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "9bc3b834-8bdb-4f0b-b60b-222a7aa4db70"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "55ff3c20-c4d7-43cb-bf58-eef6cd18f04c"}, {"type": "LinearAxis", "id": "5f47a89a-1320-4e81-acb4-91dec6ae59d4"}, {"type": "LinearAxis", "id": "90ab3adc-9567-40cb-909e-32e6b6aca269"}, {"type": "Grid", "id": "4778933f-bc3e-423b-872f-b09169e8c4b3"}, {"type": "Grid", "id": "ba95f9d5-89fd-463b-9d49-2bbe8a137d62"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "1e0d826b-72dc-4d30-adca-0a3e519455b5"}, "h_symmetry": false, "tools": [], "id": "3f394784-2ee7-4239-afbf-5dd399e9e337", "title": null, "y_range": {"type": "DataRange1d", "id": "c5f19617-9975-426c-a522-6ae26a42ef08"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "5f47a89a-1320-4e81-acb4-91dec6ae59d4"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "90ab3adc-9567-40cb-909e-32e6b6aca269"}]}, "type": "Plot", "id": "3f394784-2ee7-4239-afbf-5dd399e9e337"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "c5f19617-9975-426c-a522-6ae26a42ef08"}, "type": "DataRange1d", "id": "c5f19617-9975-426c-a522-6ae26a42ef08"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "1e0d826b-72dc-4d30-adca-0a3e519455b5"}, "type": "ToolEvents", "id": "1e0d826b-72dc-4d30-adca-0a3e519455b5"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "4cd79b34-b30b-44c7-9fee-b62c67135126"}, "type": "BasicTicker", "id": "4cd79b34-b30b-44c7-9fee-b62c67135126"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("9c155d90-c9c6-4bd9-969c-546c32431b80", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("9c155d90-c9c6-4bd9-969c-546c32431b80", all_models);
    });
  }

}(this));