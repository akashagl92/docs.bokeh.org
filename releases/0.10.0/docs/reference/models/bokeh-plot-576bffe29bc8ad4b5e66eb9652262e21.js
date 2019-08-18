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

  var elt = document.getElementById("5bd8d0a2-17b1-4949-8839-d74ab3121bfe");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5bd8d0a2-17b1-4949-8839-d74ab3121bfe' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"column_names": ["y", "x", "sizes"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "id": "48599ec7-a461-4117-95ff-3d40fd994b04"}, "type": "ColumnDataSource", "id": "48599ec7-a461-4117-95ff-3d40fd994b04"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "d007aed2-2db2-43a1-b36a-68acae07455a"}, "type": "DataRange1d", "id": "d007aed2-2db2-43a1-b36a-68acae07455a"}, {"attributes": {"plot": {"type": "Plot", "id": "c5367f22-dea6-4145-a072-323c77c4936b"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "2ca593a4-f15e-48ff-8368-617e72039893"}, "ticker": {"type": "BasicTicker", "id": "3ce97780-2412-4e17-adf6-13196130fff3"}, "id": "9023e44e-87d2-49a5-98e9-8fe3f2d94747"}, "type": "LinearAxis", "id": "9023e44e-87d2-49a5-98e9-8fe3f2d94747"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "d007aed2-2db2-43a1-b36a-68acae07455a"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "ccab9833-536b-4618-b467-a611c60116cf"}, {"type": "LinearAxis", "id": "2de418b5-9567-492e-b2cd-b5ada36054b6"}, {"type": "LinearAxis", "id": "9023e44e-87d2-49a5-98e9-8fe3f2d94747"}, {"type": "Grid", "id": "0c2e119a-1113-40c0-84e0-3abd4a60099e"}, {"type": "Grid", "id": "f6324420-de38-4419-a906-10d55207ea0a"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "b586c5bd-e29d-43bd-8449-7ccd9285a318"}, "h_symmetry": false, "tools": [], "id": "c5367f22-dea6-4145-a072-323c77c4936b", "title": null, "y_range": {"type": "DataRange1d", "id": "71260c8f-e751-4e9e-8bdc-1e53b2e12a93"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "2de418b5-9567-492e-b2cd-b5ada36054b6"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "9023e44e-87d2-49a5-98e9-8fe3f2d94747"}]}, "type": "Plot", "id": "c5367f22-dea6-4145-a072-323c77c4936b"}, {"attributes": {"plot": {"type": "Plot", "id": "c5367f22-dea6-4145-a072-323c77c4936b"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "ffc3217e-c852-4b42-906b-2471dd195f90"}, "ticker": {"type": "BasicTicker", "id": "647a8fe7-df2e-4553-b057-b14d8a18bcf7"}, "id": "2de418b5-9567-492e-b2cd-b5ada36054b6"}, "type": "LinearAxis", "id": "2de418b5-9567-492e-b2cd-b5ada36054b6"}, {"attributes": {"doc": null, "id": "2ca593a4-f15e-48ff-8368-617e72039893", "tags": []}, "type": "BasicTickFormatter", "id": "2ca593a4-f15e-48ff-8368-617e72039893"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "3ce97780-2412-4e17-adf6-13196130fff3"}, "type": "BasicTicker", "id": "3ce97780-2412-4e17-adf6-13196130fff3"}, {"attributes": {"plot": {"type": "Plot", "id": "c5367f22-dea6-4145-a072-323c77c4936b"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "3ce97780-2412-4e17-adf6-13196130fff3"}, "id": "f6324420-de38-4419-a906-10d55207ea0a"}, "type": "Grid", "id": "f6324420-de38-4419-a906-10d55207ea0a"}, {"attributes": {"plot": {"type": "Plot", "id": "c5367f22-dea6-4145-a072-323c77c4936b"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "647a8fe7-df2e-4553-b057-b14d8a18bcf7"}, "id": "0c2e119a-1113-40c0-84e0-3abd4a60099e"}, "type": "Grid", "id": "0c2e119a-1113-40c0-84e0-3abd4a60099e"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "647a8fe7-df2e-4553-b057-b14d8a18bcf7"}, "type": "BasicTicker", "id": "647a8fe7-df2e-4553-b057-b14d8a18bcf7"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "b586c5bd-e29d-43bd-8449-7ccd9285a318"}, "type": "ToolEvents", "id": "b586c5bd-e29d-43bd-8449-7ccd9285a318"}, {"attributes": {"line_color": {"value": "#de2d26"}, "line_width": {"value": 2}, "fill_color": null, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "e891755c-f99b-4f9a-b5e6-8ed4d3fe9deb", "size": {"units": "screen", "field": "sizes"}}, "type": "InvertedTriangle", "id": "e891755c-f99b-4f9a-b5e6-8ed4d3fe9deb"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "71260c8f-e751-4e9e-8bdc-1e53b2e12a93"}, "type": "DataRange1d", "id": "71260c8f-e751-4e9e-8bdc-1e53b2e12a93"}, {"attributes": {"doc": null, "id": "ffc3217e-c852-4b42-906b-2471dd195f90", "tags": []}, "type": "BasicTickFormatter", "id": "ffc3217e-c852-4b42-906b-2471dd195f90"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "48599ec7-a461-4117-95ff-3d40fd994b04"}, "tags": [], "doc": null, "selection_glyph": null, "id": "ccab9833-536b-4618-b467-a611c60116cf", "glyph": {"type": "InvertedTriangle", "id": "e891755c-f99b-4f9a-b5e6-8ed4d3fe9deb"}}, "type": "GlyphRenderer", "id": "ccab9833-536b-4618-b467-a611c60116cf"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("5bd8d0a2-17b1-4949-8839-d74ab3121bfe", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("5bd8d0a2-17b1-4949-8839-d74ab3121bfe", all_models);
    });
  }

}(this));