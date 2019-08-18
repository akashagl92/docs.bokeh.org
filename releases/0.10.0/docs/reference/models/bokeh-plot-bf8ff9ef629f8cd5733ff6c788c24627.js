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

  var elt = document.getElementById("76b2301d-9b57-4569-8d1f-8322ff272450");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '76b2301d-9b57-4569-8d1f-8322ff272450' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"end": 200, "callback": null, "doc": null, "tags": [], "start": -100, "id": "870fd536-238f-4d8a-9794-e29cca9db535"}, "type": "Range1d", "id": "870fd536-238f-4d8a-9794-e29cca9db535"}, {"attributes": {"plot": {"type": "Plot", "id": "46013109-845c-4c4c-88f9-3dc73c15888e"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "6ff87a4d-b739-486f-b893-1403ac813750"}, "ticker": {"type": "BasicTicker", "id": "adecacbc-a352-43c7-8fb4-dd484d736fb0"}, "id": "bee1ec60-330c-4db4-930d-887b467bfc32"}, "type": "LinearAxis", "id": "bee1ec60-330c-4db4-930d-887b467bfc32"}, {"attributes": {"tags": [], "url": {"value": "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png"}, "doc": null, "id": "4ff92c1f-04e1-4d38-a002-9dbf2813cc1f", "y": {"value": -100}, "x": {"value": 200}, "anchor": "bottom_right"}, "type": "ImageURL", "id": "4ff92c1f-04e1-4d38-a002-9dbf2813cc1f"}, {"attributes": {"column_names": ["x2", "y1", "h1", "w1", "url", "x1", "y2"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"x1": [0.0, 37.5, 75.0, 112.5, 150.0], "url": ["http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png"], "h1": [10.0, 20.0, 30.0, 40.0, 50.0], "x2": [-50.0, 0.0, 50.0, 100.0, 150.0], "w1": [10.0, 20.0, 30.0, 40.0, 50.0], "y1": [0.0, 37.5, 75.0, 112.5, 150.0], "y2": [0.0, 50.0, 100.0, 150.0, 200.0]}, "id": "83ba1c10-fcff-462b-8cb4-23bf869a410c"}, "type": "ColumnDataSource", "id": "83ba1c10-fcff-462b-8cb4-23bf869a410c"}, {"attributes": {"doc": null, "id": "6ff87a4d-b739-486f-b893-1403ac813750", "tags": []}, "type": "BasicTickFormatter", "id": "6ff87a4d-b739-486f-b893-1403ac813750"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "83ba1c10-fcff-462b-8cb4-23bf869a410c"}, "tags": [], "doc": null, "selection_glyph": null, "id": "1485f8ac-da18-420a-8566-115ed1b145ae", "glyph": {"type": "ImageURL", "id": "2f261901-c057-405c-a851-c27fd3429253"}}, "type": "GlyphRenderer", "id": "1485f8ac-da18-420a-8566-115ed1b145ae"}, {"attributes": {"x_range": {"type": "Range1d", "id": "870fd536-238f-4d8a-9794-e29cca9db535"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "1485f8ac-da18-420a-8566-115ed1b145ae"}, {"type": "GlyphRenderer", "id": "feba025d-712d-461e-9475-f7bc08afae9e"}, {"type": "GlyphRenderer", "id": "ecd05b9d-f8f5-40df-92fc-6fc7a45fd418"}, {"type": "LinearAxis", "id": "93d427a8-bcbb-4381-a157-cc6f4e954083"}, {"type": "LinearAxis", "id": "bee1ec60-330c-4db4-930d-887b467bfc32"}, {"type": "Grid", "id": "d8960d6c-91b7-40d0-9a49-66b258b93ef4"}, {"type": "Grid", "id": "d3dd66c0-bfba-40a1-b330-1d4fefc1528f"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "7dc051df-0114-419c-bb3e-81c18fb45234"}, "h_symmetry": false, "tools": [], "id": "46013109-845c-4c4c-88f9-3dc73c15888e", "title": null, "y_range": {"type": "Range1d", "id": "e4a5039e-4aa2-45a6-9e5f-5654881392df"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "93d427a8-bcbb-4381-a157-cc6f4e954083"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "bee1ec60-330c-4db4-930d-887b467bfc32"}]}, "type": "Plot", "id": "46013109-845c-4c4c-88f9-3dc73c15888e"}, {"attributes": {"end": 200, "callback": null, "doc": null, "tags": [], "start": -100, "id": "e4a5039e-4aa2-45a6-9e5f-5654881392df"}, "type": "Range1d", "id": "e4a5039e-4aa2-45a6-9e5f-5654881392df"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "adecacbc-a352-43c7-8fb4-dd484d736fb0"}, "type": "BasicTicker", "id": "adecacbc-a352-43c7-8fb4-dd484d736fb0"}, {"attributes": {"doc": null, "id": "3b2157d0-e340-4ca8-a295-9e7e033b968a", "tags": []}, "type": "BasicTickFormatter", "id": "3b2157d0-e340-4ca8-a295-9e7e033b968a"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "83ba1c10-fcff-462b-8cb4-23bf869a410c"}, "tags": [], "doc": null, "selection_glyph": null, "id": "feba025d-712d-461e-9475-f7bc08afae9e", "glyph": {"type": "ImageURL", "id": "eb748ad4-9fa6-4869-9670-e001c3da7a0b"}}, "type": "GlyphRenderer", "id": "feba025d-712d-461e-9475-f7bc08afae9e"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "83ba1c10-fcff-462b-8cb4-23bf869a410c"}, "tags": [], "doc": null, "selection_glyph": null, "id": "ecd05b9d-f8f5-40df-92fc-6fc7a45fd418", "glyph": {"type": "ImageURL", "id": "4ff92c1f-04e1-4d38-a002-9dbf2813cc1f"}}, "type": "GlyphRenderer", "id": "ecd05b9d-f8f5-40df-92fc-6fc7a45fd418"}, {"attributes": {"tags": [], "url": {"field": "url"}, "h": {"units": "data", "field": "h1"}, "id": "2f261901-c057-405c-a851-c27fd3429253", "w": {"units": "data", "field": "w1"}, "doc": null, "y": {"field": "y1"}, "x": {"field": "x1"}, "anchor": "center"}, "type": "ImageURL", "id": "2f261901-c057-405c-a851-c27fd3429253"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "7dc051df-0114-419c-bb3e-81c18fb45234"}, "type": "ToolEvents", "id": "7dc051df-0114-419c-bb3e-81c18fb45234"}, {"attributes": {"plot": {"type": "Plot", "id": "46013109-845c-4c4c-88f9-3dc73c15888e"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "e00775dc-718e-44eb-8628-975b7e6aa991"}, "id": "d8960d6c-91b7-40d0-9a49-66b258b93ef4"}, "type": "Grid", "id": "d8960d6c-91b7-40d0-9a49-66b258b93ef4"}, {"attributes": {"plot": {"type": "Plot", "id": "46013109-845c-4c4c-88f9-3dc73c15888e"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "3b2157d0-e340-4ca8-a295-9e7e033b968a"}, "ticker": {"type": "BasicTicker", "id": "e00775dc-718e-44eb-8628-975b7e6aa991"}, "id": "93d427a8-bcbb-4381-a157-cc6f4e954083"}, "type": "LinearAxis", "id": "93d427a8-bcbb-4381-a157-cc6f4e954083"}, {"attributes": {"plot": {"type": "Plot", "id": "46013109-845c-4c4c-88f9-3dc73c15888e"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "adecacbc-a352-43c7-8fb4-dd484d736fb0"}, "id": "d3dd66c0-bfba-40a1-b330-1d4fefc1528f"}, "type": "Grid", "id": "d3dd66c0-bfba-40a1-b330-1d4fefc1528f"}, {"attributes": {"tags": [], "url": {"field": "url"}, "h": {"units": "data", "value": 20}, "id": "eb748ad4-9fa6-4869-9670-e001c3da7a0b", "w": {"units": "data", "value": 20}, "doc": null, "y": {"field": "y2"}, "x": {"field": "x2"}, "anchor": "top_left"}, "type": "ImageURL", "id": "eb748ad4-9fa6-4869-9670-e001c3da7a0b"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "e00775dc-718e-44eb-8628-975b7e6aa991"}, "type": "BasicTicker", "id": "e00775dc-718e-44eb-8628-975b7e6aa991"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("76b2301d-9b57-4569-8d1f-8322ff272450", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("76b2301d-9b57-4569-8d1f-8322ff272450", all_models);
    });
  }

}(this));