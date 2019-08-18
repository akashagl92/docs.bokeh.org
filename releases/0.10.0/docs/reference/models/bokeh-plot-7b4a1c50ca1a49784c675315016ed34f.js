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

  var elt = document.getElementById("edf2c859-2cb1-4382-809e-ccf6b45d7ac6");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'edf2c859-2cb1-4382-809e-ccf6b45d7ac6' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"doc": null, "id": "261eed33-ae66-4206-a2aa-4d53e7fed669", "tags": []}, "type": "BasicTickFormatter", "id": "261eed33-ae66-4206-a2aa-4d53e7fed669"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "8165abc0-49b5-4559-91b8-1267e41b9293"}, "type": "DataRange1d", "id": "8165abc0-49b5-4559-91b8-1267e41b9293"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "326c42b3-195b-42b2-a6ee-10087ea0ceb2"}, "type": "BasicTicker", "id": "326c42b3-195b-42b2-a6ee-10087ea0ceb2"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "cc057b29-dbfa-4086-bf6a-578d283fbefb"}, "type": "BasicTicker", "id": "cc057b29-dbfa-4086-bf6a-578d283fbefb"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "b69633ab-95aa-4c15-adf7-eb676fa5595f"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "cda3bb7a-5710-4731-b754-225c88f62b13"}, {"type": "LinearAxis", "id": "a90c1c51-df84-4b03-a28f-79176032beb3"}, {"type": "LinearAxis", "id": "a8a5b8ba-3966-4f44-b547-7e9b4c88e6a5"}, {"type": "Grid", "id": "3a395da2-2d3f-448b-a7ac-4f3d6a138705"}, {"type": "Grid", "id": "d18dca51-e9a8-495d-ad52-57b1f92772ed"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "fefb3d05-c335-4215-9c92-3be9354d8f51"}, "h_symmetry": false, "tools": [], "id": "4dabf23f-173e-4de7-b05b-299b30fbc39e", "title": null, "y_range": {"type": "DataRange1d", "id": "8165abc0-49b5-4559-91b8-1267e41b9293"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "a90c1c51-df84-4b03-a28f-79176032beb3"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "a8a5b8ba-3966-4f44-b547-7e9b4c88e6a5"}]}, "type": "Plot", "id": "4dabf23f-173e-4de7-b05b-299b30fbc39e"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "b69633ab-95aa-4c15-adf7-eb676fa5595f"}, "type": "DataRange1d", "id": "b69633ab-95aa-4c15-adf7-eb676fa5595f"}, {"attributes": {"plot": {"type": "Plot", "id": "4dabf23f-173e-4de7-b05b-299b30fbc39e"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "261eed33-ae66-4206-a2aa-4d53e7fed669"}, "ticker": {"type": "BasicTicker", "id": "cc057b29-dbfa-4086-bf6a-578d283fbefb"}, "id": "a90c1c51-df84-4b03-a28f-79176032beb3"}, "type": "LinearAxis", "id": "a90c1c51-df84-4b03-a28f-79176032beb3"}, {"attributes": {"doc": null, "id": "8a997c35-a27f-4886-9dc4-6dd2e0583801", "tags": []}, "type": "BasicTickFormatter", "id": "8a997c35-a27f-4886-9dc4-6dd2e0583801"}, {"attributes": {"plot": {"type": "Plot", "id": "4dabf23f-173e-4de7-b05b-299b30fbc39e"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "8a997c35-a27f-4886-9dc4-6dd2e0583801"}, "ticker": {"type": "BasicTicker", "id": "326c42b3-195b-42b2-a6ee-10087ea0ceb2"}, "id": "a8a5b8ba-3966-4f44-b547-7e9b4c88e6a5"}, "type": "LinearAxis", "id": "a8a5b8ba-3966-4f44-b547-7e9b4c88e6a5"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "fefb3d05-c335-4215-9c92-3be9354d8f51"}, "type": "ToolEvents", "id": "fefb3d05-c335-4215-9c92-3be9354d8f51"}, {"attributes": {"plot": {"type": "Plot", "id": "4dabf23f-173e-4de7-b05b-299b30fbc39e"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "cc057b29-dbfa-4086-bf6a-578d283fbefb"}, "id": "3a395da2-2d3f-448b-a7ac-4f3d6a138705"}, "type": "Grid", "id": "3a395da2-2d3f-448b-a7ac-4f3d6a138705"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "328b96f0-866b-4726-bb98-4d44c233d8b8"}, "tags": [], "doc": null, "selection_glyph": null, "id": "cda3bb7a-5710-4731-b754-225c88f62b13", "glyph": {"type": "Oval", "id": "f6150734-5c0a-47cc-951a-340ea5440bf7"}}, "type": "GlyphRenderer", "id": "cda3bb7a-5710-4731-b754-225c88f62b13"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0]}, "id": "328b96f0-866b-4726-bb98-4d44c233d8b8"}, "type": "ColumnDataSource", "id": "328b96f0-866b-4726-bb98-4d44c233d8b8"}, {"attributes": {"angle": {"units": "rad", "value": -0.7}, "fill_color": {"value": "#1d91d0"}, "tags": [], "doc": null, "height": {"units": "data", "value": 0.6}, "width": {"units": "data", "value": 0.4}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "f6150734-5c0a-47cc-951a-340ea5440bf7"}, "type": "Oval", "id": "f6150734-5c0a-47cc-951a-340ea5440bf7"}, {"attributes": {"plot": {"type": "Plot", "id": "4dabf23f-173e-4de7-b05b-299b30fbc39e"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "326c42b3-195b-42b2-a6ee-10087ea0ceb2"}, "id": "d18dca51-e9a8-495d-ad52-57b1f92772ed"}, "type": "Grid", "id": "d18dca51-e9a8-495d-ad52-57b1f92772ed"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("edf2c859-2cb1-4382-809e-ccf6b45d7ac6", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("edf2c859-2cb1-4382-809e-ccf6b45d7ac6", all_models);
    });
  }

}(this));