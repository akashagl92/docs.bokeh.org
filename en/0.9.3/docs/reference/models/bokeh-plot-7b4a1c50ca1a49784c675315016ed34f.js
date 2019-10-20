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

  var elt = document.getElementById("bb5a1050-c39b-43b5-b9e7-4908d952b627");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'bb5a1050-c39b-43b5-b9e7-4908d952b627' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "d1916742-436b-4d5f-be1d-ef1c36bf733a"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "91073abe-b2fb-473b-94f3-bea0a0c8066d"}, "plot": {"type": "Plot", "id": "e71d5b1f-91da-43d8-aafc-e048c2d18096"}, "id": "2f3cf429-1edc-4745-8fa1-adf9abdef566"}, "id": "2f3cf429-1edc-4745-8fa1-adf9abdef566"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0]}, "doc": null, "id": "3ff2de3f-efbd-4a67-921f-b0b62c031b3e", "column_names": ["y", "x"]}, "id": "3ff2de3f-efbd-4a67-921f-b0b62c031b3e"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "82c47f44-19ee-4e8d-8f4e-80c9de7d03eb", "tags": []}, "id": "82c47f44-19ee-4e8d-8f4e-80c9de7d03eb"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "82c47f44-19ee-4e8d-8f4e-80c9de7d03eb"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "6e8cda29-708f-44ce-b2bc-a3094c0dfd4b"}, "plot": {"type": "Plot", "id": "e71d5b1f-91da-43d8-aafc-e048c2d18096"}, "id": "38639314-8547-47cc-9514-5bc701f670ef"}, "id": "38639314-8547-47cc-9514-5bc701f670ef"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "91073abe-b2fb-473b-94f3-bea0a0c8066d", "tags": []}, "id": "91073abe-b2fb-473b-94f3-bea0a0c8066d"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "82c47f44-19ee-4e8d-8f4e-80c9de7d03eb"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "e71d5b1f-91da-43d8-aafc-e048c2d18096"}, "dimension": 1, "id": "3867f57f-1553-4228-aec3-65ed26bdd58a"}, "id": "3867f57f-1553-4228-aec3-65ed26bdd58a"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "6e8cda29-708f-44ce-b2bc-a3094c0dfd4b", "tags": []}, "id": "6e8cda29-708f-44ce-b2bc-a3094c0dfd4b"}, {"type": "Oval", "attributes": {"y": {"field": "y"}, "angle": {"units": "rad", "value": -0.7}, "height": {"units": "data", "value": 0.6}, "fill_color": {"value": "#1d91d0"}, "width": {"units": "data", "value": 0.4}, "tags": [], "doc": null, "x": {"field": "x"}, "id": "f4557c12-a0cc-4b96-8f20-6ab55bb433c5"}, "id": "f4557c12-a0cc-4b96-8f20-6ab55bb433c5"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "3ff2de3f-efbd-4a67-921f-b0b62c031b3e"}, "tags": [], "glyph": {"type": "Oval", "id": "f4557c12-a0cc-4b96-8f20-6ab55bb433c5"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "764f0f59-56b1-4474-8890-3d1aa5a1be08"}, "id": "764f0f59-56b1-4474-8890-3d1aa5a1be08"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "ce3d44db-c608-407c-ab40-e91f18f9f63b", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "ce3d44db-c608-407c-ab40-e91f18f9f63b"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "86dbdcec-b6ef-49f3-be08-5ab0f223a3a5", "tags": [], "geometries": []}, "id": "86dbdcec-b6ef-49f3-be08-5ab0f223a3a5"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "d1916742-436b-4d5f-be1d-ef1c36bf733a"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "e71d5b1f-91da-43d8-aafc-e048c2d18096"}, "dimension": 0, "id": "832b6853-b4f1-493d-8665-042b918b8a15"}, "id": "832b6853-b4f1-493d-8665-042b918b8a15"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "38639314-8547-47cc-9514-5bc701f670ef"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "68f1b900-6452-4a04-a99c-884da89c6589"}, "id": "e71d5b1f-91da-43d8-aafc-e048c2d18096", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "ce3d44db-c608-407c-ab40-e91f18f9f63b"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "86dbdcec-b6ef-49f3-be08-5ab0f223a3a5"}, "renderers": [{"type": "GlyphRenderer", "id": "764f0f59-56b1-4474-8890-3d1aa5a1be08"}, {"type": "LinearAxis", "id": "2f3cf429-1edc-4745-8fa1-adf9abdef566"}, {"type": "LinearAxis", "id": "38639314-8547-47cc-9514-5bc701f670ef"}, {"type": "Grid", "id": "832b6853-b4f1-493d-8665-042b918b8a15"}, {"type": "Grid", "id": "3867f57f-1553-4228-aec3-65ed26bdd58a"}], "below": [{"type": "LinearAxis", "id": "2f3cf429-1edc-4745-8fa1-adf9abdef566"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "e71d5b1f-91da-43d8-aafc-e048c2d18096"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "68f1b900-6452-4a04-a99c-884da89c6589", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "68f1b900-6452-4a04-a99c-884da89c6589"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "d1916742-436b-4d5f-be1d-ef1c36bf733a", "tags": []}, "id": "d1916742-436b-4d5f-be1d-ef1c36bf733a"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("bb5a1050-c39b-43b5-b9e7-4908d952b627", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("bb5a1050-c39b-43b5-b9e7-4908d952b627", all_models);
    });
  }

}(this));