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

  var elt = document.getElementById("25979b06-70d7-4809-a0e7-6f5fac41924f");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '25979b06-70d7-4809-a0e7-6f5fac41924f' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "5edb84e8-469c-4f0f-b1b8-f1541e230073", "tags": []}, "id": "5edb84e8-469c-4f0f-b1b8-f1541e230073"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "a7fb398c-2b62-4849-b110-d48a2801ee39", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "a7fb398c-2b62-4849-b110-d48a2801ee39"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "f9bd09c4-2ff5-4858-a8f7-daf8ddfd4b33", "tags": []}, "id": "f9bd09c4-2ff5-4858-a8f7-daf8ddfd4b33"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "6d47ceec-1d55-457e-8367-c48533b44977", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "6d47ceec-1d55-457e-8367-c48533b44977"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "26fec1b5-8f56-4223-904c-8fad5c7c1679"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "5edb84e8-469c-4f0f-b1b8-f1541e230073"}, "plot": {"type": "Plot", "id": "5eb14ead-804d-49fc-bb65-edf2a88f772d"}, "id": "7ce40985-5b90-41de-b03a-ecc8235c4a1c"}, "id": "7ce40985-5b90-41de-b03a-ecc8235c4a1c"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "26fec1b5-8f56-4223-904c-8fad5c7c1679"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "5eb14ead-804d-49fc-bb65-edf2a88f772d"}, "dimension": 1, "id": "8bc95e71-70d1-4d25-8e24-e90595e43a28"}, "id": "8bc95e71-70d1-4d25-8e24-e90595e43a28"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "7ce40985-5b90-41de-b03a-ecc8235c4a1c"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "6d47ceec-1d55-457e-8367-c48533b44977"}, "id": "5eb14ead-804d-49fc-bb65-edf2a88f772d", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "a7fb398c-2b62-4849-b110-d48a2801ee39"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "2139433a-0094-4553-adf7-e389e3f98780"}, "renderers": [{"type": "GlyphRenderer", "id": "21241403-7b78-4cb6-90e1-488fcf424e9c"}, {"type": "LinearAxis", "id": "19de8805-5da3-47b5-b693-99922e0e588e"}, {"type": "LinearAxis", "id": "7ce40985-5b90-41de-b03a-ecc8235c4a1c"}, {"type": "Grid", "id": "994511d9-74d1-45d4-b44c-249d565211f0"}, {"type": "Grid", "id": "8bc95e71-70d1-4d25-8e24-e90595e43a28"}], "below": [{"type": "LinearAxis", "id": "19de8805-5da3-47b5-b693-99922e0e588e"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "5eb14ead-804d-49fc-bb65-edf2a88f772d"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "e40034fb-3f8d-48b3-bb85-15c32cfdcedb"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "f9bd09c4-2ff5-4858-a8f7-daf8ddfd4b33"}, "plot": {"type": "Plot", "id": "5eb14ead-804d-49fc-bb65-edf2a88f772d"}, "id": "19de8805-5da3-47b5-b693-99922e0e588e"}, "id": "19de8805-5da3-47b5-b693-99922e0e588e"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "e40034fb-3f8d-48b3-bb85-15c32cfdcedb", "tags": []}, "id": "e40034fb-3f8d-48b3-bb85-15c32cfdcedb"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "doc": null, "id": "fa9c435c-aac0-4f11-8122-fe7fde29469e", "column_names": ["y", "x", "sizes"]}, "id": "fa9c435c-aac0-4f11-8122-fe7fde29469e"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "fa9c435c-aac0-4f11-8122-fe7fde29469e"}, "tags": [], "glyph": {"type": "Asterisk", "id": "d87a82ae-d3e9-44b9-a6df-b0558f4e86e2"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "21241403-7b78-4cb6-90e1-488fcf424e9c"}, "id": "21241403-7b78-4cb6-90e1-488fcf424e9c"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "26fec1b5-8f56-4223-904c-8fad5c7c1679", "tags": []}, "id": "26fec1b5-8f56-4223-904c-8fad5c7c1679"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "e40034fb-3f8d-48b3-bb85-15c32cfdcedb"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "5eb14ead-804d-49fc-bb65-edf2a88f772d"}, "dimension": 0, "id": "994511d9-74d1-45d4-b44c-249d565211f0"}, "id": "994511d9-74d1-45d4-b44c-249d565211f0"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "2139433a-0094-4553-adf7-e389e3f98780", "tags": [], "geometries": []}, "id": "2139433a-0094-4553-adf7-e389e3f98780"}, {"type": "Asterisk", "attributes": {"y": {"field": "y"}, "fill_color": null, "size": {"units": "screen", "field": "sizes"}, "line_width": {"value": 2}, "line_color": {"value": "#f0027f"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "d87a82ae-d3e9-44b9-a6df-b0558f4e86e2"}, "id": "d87a82ae-d3e9-44b9-a6df-b0558f4e86e2"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("25979b06-70d7-4809-a0e7-6f5fac41924f", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("25979b06-70d7-4809-a0e7-6f5fac41924f", all_models);
    });
  }

}(this));