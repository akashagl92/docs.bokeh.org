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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.js"

  var elt = document.getElementById("c3859803-85db-41d3-b347-573154a28f17");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c3859803-85db-41d3-b347-573154a28f17' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "31b2a7ca-175a-4bb8-a7c9-ead6f774492f", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["y", "x"], "id": "31b2a7ca-175a-4bb8-a7c9-ead6f774492f", "doc": null, "tags": []}}, {"id": "19f289f3-a1a7-4db5-af23-74d078e4dd4e", "type": "BasicTicker", "attributes": {"id": "19f289f3-a1a7-4db5-af23-74d078e4dd4e", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "3b2c6090-50b1-47c8-a046-02f36915254d", "type": "Oval", "attributes": {"fill_color": {"value": "#1d91d0"}, "y": {"field": "y", "units": "data"}, "id": "3b2c6090-50b1-47c8-a046-02f36915254d", "angle": {"value": -0.7, "units": "data"}, "height": {"value": 0.6, "units": "data"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "width": {"value": 0.4, "units": "data"}}}, {"id": "763ec02d-114b-4d7f-a11b-dc2906b76647", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "31b2a7ca-175a-4bb8-a7c9-ead6f774492f", "type": "ColumnDataSource"}, "id": "763ec02d-114b-4d7f-a11b-dc2906b76647", "glyph": {"id": "3b2c6090-50b1-47c8-a046-02f36915254d", "type": "Oval"}, "tags": [], "doc": null}}, {"id": "00f6e0f9-2a2c-427e-b305-1e6d91013c7d", "type": "BasicTickFormatter", "attributes": {"id": "00f6e0f9-2a2c-427e-b305-1e6d91013c7d", "doc": null, "tags": []}}, {"id": "b6e4b3fa-b0ea-4999-abc9-7cfd3e24980c", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "31b2a7ca-175a-4bb8-a7c9-ead6f774492f", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "b6e4b3fa-b0ea-4999-abc9-7cfd3e24980c", "doc": null, "tags": []}}, {"id": "dc04c43f-3aba-4843-a3f7-11d5a860ffb3", "type": "LinearAxis", "attributes": {"id": "dc04c43f-3aba-4843-a3f7-11d5a860ffb3", "formatter": {"id": "05dcbe75-ab13-47fb-888c-9e9e028db63f", "type": "BasicTickFormatter"}, "plot": {"id": "9a315bba-9a92-4750-acdb-e8640537b6a7", "type": "Plot"}, "ticker": {"id": "19f289f3-a1a7-4db5-af23-74d078e4dd4e", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "848f5241-97cf-41f6-9abd-76bf7413ab60", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "31b2a7ca-175a-4bb8-a7c9-ead6f774492f", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "848f5241-97cf-41f6-9abd-76bf7413ab60", "doc": null, "tags": []}}, {"id": "9a315bba-9a92-4750-acdb-e8640537b6a7", "type": "Plot", "attributes": {"tool_events": {"id": "e2ae84ed-bc63-4b7a-b069-31e83c23c869", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "763ec02d-114b-4d7f-a11b-dc2906b76647", "type": "GlyphRenderer"}, {"id": "4d6d8fb4-8ea6-4a6d-bb6f-52a1463d5c14", "type": "LinearAxis"}, {"id": "dc04c43f-3aba-4843-a3f7-11d5a860ffb3", "type": "LinearAxis"}, {"id": "c9409275-13ca-4ece-bcf6-b906bc182d4a", "type": "Grid"}, {"id": "dc35eea9-99df-42a5-8484-22a2dbe33637", "type": "Grid"}], "left": [{"id": "dc04c43f-3aba-4843-a3f7-11d5a860ffb3", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "848f5241-97cf-41f6-9abd-76bf7413ab60", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "9a315bba-9a92-4750-acdb-e8640537b6a7", "y_range": {"id": "b6e4b3fa-b0ea-4999-abc9-7cfd3e24980c", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "4d6d8fb4-8ea6-4a6d-bb6f-52a1463d5c14", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "05dcbe75-ab13-47fb-888c-9e9e028db63f", "type": "BasicTickFormatter", "attributes": {"id": "05dcbe75-ab13-47fb-888c-9e9e028db63f", "doc": null, "tags": []}}, {"id": "64bc50e1-c69a-4185-8ff1-2957c420bd7f", "type": "BasicTicker", "attributes": {"id": "64bc50e1-c69a-4185-8ff1-2957c420bd7f", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "c9409275-13ca-4ece-bcf6-b906bc182d4a", "type": "Grid", "attributes": {"id": "c9409275-13ca-4ece-bcf6-b906bc182d4a", "plot": {"id": "9a315bba-9a92-4750-acdb-e8640537b6a7", "type": "Plot"}, "dimension": 0, "ticker": {"id": "64bc50e1-c69a-4185-8ff1-2957c420bd7f", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "e2ae84ed-bc63-4b7a-b069-31e83c23c869", "type": "ToolEvents", "attributes": {"geometries": [], "id": "e2ae84ed-bc63-4b7a-b069-31e83c23c869", "doc": null, "tags": []}}, {"id": "4d6d8fb4-8ea6-4a6d-bb6f-52a1463d5c14", "type": "LinearAxis", "attributes": {"id": "4d6d8fb4-8ea6-4a6d-bb6f-52a1463d5c14", "formatter": {"id": "00f6e0f9-2a2c-427e-b305-1e6d91013c7d", "type": "BasicTickFormatter"}, "plot": {"id": "9a315bba-9a92-4750-acdb-e8640537b6a7", "type": "Plot"}, "ticker": {"id": "64bc50e1-c69a-4185-8ff1-2957c420bd7f", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "dc35eea9-99df-42a5-8484-22a2dbe33637", "type": "Grid", "attributes": {"id": "dc35eea9-99df-42a5-8484-22a2dbe33637", "plot": {"id": "9a315bba-9a92-4750-acdb-e8640537b6a7", "type": "Plot"}, "dimension": 1, "ticker": {"id": "19f289f3-a1a7-4db5-af23-74d078e4dd4e", "type": "BasicTicker"}, "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("c3859803-85db-41d3-b347-573154a28f17", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("c3859803-85db-41d3-b347-573154a28f17", all_models);
    });
  }

}(this));