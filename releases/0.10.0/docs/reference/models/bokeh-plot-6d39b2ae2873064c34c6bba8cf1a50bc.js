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

  var elt = document.getElementById("8ef1af31-99f6-4833-9c4a-af27a558e7e2");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8ef1af31-99f6-4833-9c4a-af27a558e7e2' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "be0a9e7a-1ad8-428b-8561-0b73e097d960"}, "tags": [], "doc": null, "selection_glyph": null, "id": "3e20350d-44b8-4700-a828-3e56cab914c6", "glyph": {"type": "AnnularWedge", "id": "5d4f0b85-38fc-4cca-b9e1-f6d91ee58374"}}, "type": "GlyphRenderer", "id": "3e20350d-44b8-4700-a828-3e56cab914c6"}, {"attributes": {"plot": {"type": "Plot", "id": "42c486d6-2ec9-4c08-81c2-b4308f6855b3"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "beb2aff5-cfe8-4708-8815-61eb88dcac59"}, "ticker": {"type": "BasicTicker", "id": "01345621-7e80-4fa9-8774-fafc5cbf510c"}, "id": "153e69c1-fe48-493b-b1d5-13145264f3ee"}, "type": "LinearAxis", "id": "153e69c1-fe48-493b-b1d5-13145264f3ee"}, {"attributes": {"doc": null, "id": "1618184e-41b2-4850-bb17-f015c6555611", "tags": []}, "type": "BasicTickFormatter", "id": "1618184e-41b2-4850-bb17-f015c6555611"}, {"attributes": {"inner_radius": {"units": "data", "value": 0.2}, "start_angle": {"units": "rad", "value": 0.6}, "doc": null, "tags": [], "end_angle": {"units": "rad", "value": 4.1}, "outer_radius": {"units": "data", "field": "r"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "5d4f0b85-38fc-4cca-b9e1-f6d91ee58374", "fill_color": {"value": "#8888ee"}}, "type": "AnnularWedge", "id": "5d4f0b85-38fc-4cca-b9e1-f6d91ee58374"}, {"attributes": {"plot": {"type": "Plot", "id": "42c486d6-2ec9-4c08-81c2-b4308f6855b3"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "bd772dc6-9460-4400-ad36-aa87b70cc1ae"}, "id": "b982a2b9-7c54-4b40-ba1f-149db80fda68"}, "type": "Grid", "id": "b982a2b9-7c54-4b40-ba1f-149db80fda68"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "bd772dc6-9460-4400-ad36-aa87b70cc1ae"}, "type": "BasicTicker", "id": "bd772dc6-9460-4400-ad36-aa87b70cc1ae"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "df3b9289-01cc-48ec-8afe-7849422d6d7d"}, "type": "DataRange1d", "id": "df3b9289-01cc-48ec-8afe-7849422d6d7d"}, {"attributes": {"plot": {"type": "Plot", "id": "42c486d6-2ec9-4c08-81c2-b4308f6855b3"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "1618184e-41b2-4850-bb17-f015c6555611"}, "ticker": {"type": "BasicTicker", "id": "bd772dc6-9460-4400-ad36-aa87b70cc1ae"}, "id": "6e600892-ef71-4cac-86d5-061f45b91605"}, "type": "LinearAxis", "id": "6e600892-ef71-4cac-86d5-061f45b91605"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "9fa1c359-dd64-4778-9706-e11f28815676"}, "type": "ToolEvents", "id": "9fa1c359-dd64-4778-9706-e11f28815676"}, {"attributes": {"column_names": ["y", "x", "r"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "r": [0.23333333333333336, 0.275, 0.3166666666666667, 0.35833333333333334, 0.4, 0.4416666666666667, 0.48333333333333334, 0.525, 0.5666666666666667]}, "id": "be0a9e7a-1ad8-428b-8561-0b73e097d960"}, "type": "ColumnDataSource", "id": "be0a9e7a-1ad8-428b-8561-0b73e097d960"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "01345621-7e80-4fa9-8774-fafc5cbf510c"}, "type": "BasicTicker", "id": "01345621-7e80-4fa9-8774-fafc5cbf510c"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "d2a8209f-187e-4d8c-8553-44d1efc66e6b"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "3e20350d-44b8-4700-a828-3e56cab914c6"}, {"type": "LinearAxis", "id": "153e69c1-fe48-493b-b1d5-13145264f3ee"}, {"type": "LinearAxis", "id": "6e600892-ef71-4cac-86d5-061f45b91605"}, {"type": "Grid", "id": "b5097d49-2f7b-4596-965a-908345b4d49d"}, {"type": "Grid", "id": "b982a2b9-7c54-4b40-ba1f-149db80fda68"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "9fa1c359-dd64-4778-9706-e11f28815676"}, "h_symmetry": false, "tools": [], "id": "42c486d6-2ec9-4c08-81c2-b4308f6855b3", "title": null, "y_range": {"type": "DataRange1d", "id": "df3b9289-01cc-48ec-8afe-7849422d6d7d"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "153e69c1-fe48-493b-b1d5-13145264f3ee"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "6e600892-ef71-4cac-86d5-061f45b91605"}]}, "type": "Plot", "id": "42c486d6-2ec9-4c08-81c2-b4308f6855b3"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "d2a8209f-187e-4d8c-8553-44d1efc66e6b"}, "type": "DataRange1d", "id": "d2a8209f-187e-4d8c-8553-44d1efc66e6b"}, {"attributes": {"plot": {"type": "Plot", "id": "42c486d6-2ec9-4c08-81c2-b4308f6855b3"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "01345621-7e80-4fa9-8774-fafc5cbf510c"}, "id": "b5097d49-2f7b-4596-965a-908345b4d49d"}, "type": "Grid", "id": "b5097d49-2f7b-4596-965a-908345b4d49d"}, {"attributes": {"doc": null, "id": "beb2aff5-cfe8-4708-8815-61eb88dcac59", "tags": []}, "type": "BasicTickFormatter", "id": "beb2aff5-cfe8-4708-8815-61eb88dcac59"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("8ef1af31-99f6-4833-9c4a-af27a558e7e2", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("8ef1af31-99f6-4833-9c4a-af27a558e7e2", all_models);
    });
  }

}(this));