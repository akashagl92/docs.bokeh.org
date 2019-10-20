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

  var elt = document.getElementById("6b9d3018-d69b-4819-bd4e-c4a0c0a6d3e6");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6b9d3018-d69b-4819-bd4e-c4a0c0a6d3e6' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "9f43ff53-01e8-4ad4-81fc-d5ce1d1f5489", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "57dcd8d5-2488-488d-a940-d1453388980b", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "9f43ff53-01e8-4ad4-81fc-d5ce1d1f5489", "doc": null, "tags": []}}, {"id": "3f9bf73d-7c41-4268-ab65-1073feef97dd", "type": "Plot", "attributes": {"tool_events": {"id": "d50d1cd0-4635-459f-b0da-9b30247bdc7f", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "d01830e7-40f5-4aa1-a13c-adcae8c66d24", "type": "GlyphRenderer"}, {"id": "be9fa9f5-0223-45d2-9d27-9bd8e850d200", "type": "LinearAxis"}, {"id": "60edab96-eeda-4b60-baa7-d775668b0fde", "type": "LinearAxis"}, {"id": "8f738e00-30ae-44b8-b92c-bab5431abb70", "type": "Grid"}, {"id": "67363c49-741b-4476-9da9-b3fcd5dbaaac", "type": "Grid"}], "left": [{"id": "60edab96-eeda-4b60-baa7-d775668b0fde", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "2109d0c1-dab7-4106-b0db-cc50e64807fe", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "3f9bf73d-7c41-4268-ab65-1073feef97dd", "y_range": {"id": "9f43ff53-01e8-4ad4-81fc-d5ce1d1f5489", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "be9fa9f5-0223-45d2-9d27-9bd8e850d200", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "d01830e7-40f5-4aa1-a13c-adcae8c66d24", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "57dcd8d5-2488-488d-a940-d1453388980b", "type": "ColumnDataSource"}, "id": "d01830e7-40f5-4aa1-a13c-adcae8c66d24", "glyph": {"id": "d00d7d8a-17cc-4bd6-8567-0b55573f9c52", "type": "Wedge"}, "tags": [], "doc": null}}, {"id": "75c0b9f9-2c5d-4eac-9fba-78c0edbf9336", "type": "BasicTicker", "attributes": {"id": "75c0b9f9-2c5d-4eac-9fba-78c0edbf9336", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "324ff59c-1fd5-4bd8-a644-bcf7f7157500", "type": "BasicTicker", "attributes": {"id": "324ff59c-1fd5-4bd8-a644-bcf7f7157500", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "db6f55fe-4257-4465-ab81-25e8ba9ce81f", "type": "BasicTickFormatter", "attributes": {"id": "db6f55fe-4257-4465-ab81-25e8ba9ce81f", "doc": null, "tags": []}}, {"id": "ffa069c3-b473-4b1f-b2bb-cd2eca812704", "type": "BasicTickFormatter", "attributes": {"id": "ffa069c3-b473-4b1f-b2bb-cd2eca812704", "doc": null, "tags": []}}, {"id": "d00d7d8a-17cc-4bd6-8567-0b55573f9c52", "type": "Wedge", "attributes": {"fill_color": {"value": "#B3DE69"}, "start_angle": {"value": 0.6, "units": "data"}, "x": {"field": "x", "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "d00d7d8a-17cc-4bd6-8567-0b55573f9c52", "radius": {"field": "r", "units": "data"}, "end_angle": {"value": 4.1, "units": "data"}, "doc": null, "tags": []}}, {"id": "57dcd8d5-2488-488d-a940-d1453388980b", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"r": [0.16666666666666666, 0.19999999999999998, 0.23333333333333334, 0.26666666666666666, 0.3, 0.3333333333333333, 0.36666666666666664, 0.4, 0.43333333333333335], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["r", "y", "x"], "id": "57dcd8d5-2488-488d-a940-d1453388980b", "doc": null, "tags": []}}, {"id": "be9fa9f5-0223-45d2-9d27-9bd8e850d200", "type": "LinearAxis", "attributes": {"id": "be9fa9f5-0223-45d2-9d27-9bd8e850d200", "formatter": {"id": "ffa069c3-b473-4b1f-b2bb-cd2eca812704", "type": "BasicTickFormatter"}, "plot": {"id": "3f9bf73d-7c41-4268-ab65-1073feef97dd", "type": "Plot"}, "ticker": {"id": "324ff59c-1fd5-4bd8-a644-bcf7f7157500", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "67363c49-741b-4476-9da9-b3fcd5dbaaac", "type": "Grid", "attributes": {"id": "67363c49-741b-4476-9da9-b3fcd5dbaaac", "plot": {"id": "3f9bf73d-7c41-4268-ab65-1073feef97dd", "type": "Plot"}, "dimension": 1, "ticker": {"id": "75c0b9f9-2c5d-4eac-9fba-78c0edbf9336", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "8f738e00-30ae-44b8-b92c-bab5431abb70", "type": "Grid", "attributes": {"id": "8f738e00-30ae-44b8-b92c-bab5431abb70", "plot": {"id": "3f9bf73d-7c41-4268-ab65-1073feef97dd", "type": "Plot"}, "dimension": 0, "ticker": {"id": "324ff59c-1fd5-4bd8-a644-bcf7f7157500", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "60edab96-eeda-4b60-baa7-d775668b0fde", "type": "LinearAxis", "attributes": {"id": "60edab96-eeda-4b60-baa7-d775668b0fde", "formatter": {"id": "db6f55fe-4257-4465-ab81-25e8ba9ce81f", "type": "BasicTickFormatter"}, "plot": {"id": "3f9bf73d-7c41-4268-ab65-1073feef97dd", "type": "Plot"}, "ticker": {"id": "75c0b9f9-2c5d-4eac-9fba-78c0edbf9336", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "2109d0c1-dab7-4106-b0db-cc50e64807fe", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "57dcd8d5-2488-488d-a940-d1453388980b", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "2109d0c1-dab7-4106-b0db-cc50e64807fe", "doc": null, "tags": []}}, {"id": "d50d1cd0-4635-459f-b0da-9b30247bdc7f", "type": "ToolEvents", "attributes": {"geometries": [], "id": "d50d1cd0-4635-459f-b0da-9b30247bdc7f", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("6b9d3018-d69b-4819-bd4e-c4a0c0a6d3e6", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("6b9d3018-d69b-4819-bd4e-c4a0c0a6d3e6", all_models);
    });
  }

}(this));