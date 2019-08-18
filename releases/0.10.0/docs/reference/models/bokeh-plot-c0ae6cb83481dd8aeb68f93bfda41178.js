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

  var elt = document.getElementById("40291b3a-1c6c-4614-814c-2b11056ca723");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '40291b3a-1c6c-4614-814c-2b11056ca723' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "82da26e2-8331-4e19-b529-3c0e5c5bd51a"}, "type": "DataRange1d", "id": "82da26e2-8331-4e19-b529-3c0e5c5bd51a"}, {"attributes": {"doc": null, "id": "a55f17b2-76dd-4bbb-8d1f-098330254b9d", "tags": []}, "type": "BasicTickFormatter", "id": "a55f17b2-76dd-4bbb-8d1f-098330254b9d"}, {"attributes": {"doc": null, "id": "59592fcc-1853-448b-a26b-bb2c0d892db2", "tags": []}, "type": "BasicTickFormatter", "id": "59592fcc-1853-448b-a26b-bb2c0d892db2"}, {"attributes": {"line_color": {"value": "#386cb0"}, "line_width": {"value": 2}, "fill_color": null, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "b2721143-1e94-49d0-a310-9d2d9bfdc8a9", "size": {"units": "screen", "field": "sizes"}}, "type": "DiamondCross", "id": "b2721143-1e94-49d0-a310-9d2d9bfdc8a9"}, {"attributes": {"plot": {"type": "Plot", "id": "6d7da8bb-48b9-4e05-b631-df2c96984583"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "392df427-7485-407c-afae-84ecd08ed430"}, "id": "19187c3d-dcab-4230-8fc4-e2afd6907944"}, "type": "Grid", "id": "19187c3d-dcab-4230-8fc4-e2afd6907944"}, {"attributes": {"plot": {"type": "Plot", "id": "6d7da8bb-48b9-4e05-b631-df2c96984583"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "59592fcc-1853-448b-a26b-bb2c0d892db2"}, "ticker": {"type": "BasicTicker", "id": "80dc70c5-1090-4fde-b768-53ff2a199652"}, "id": "321e1f6a-08e2-4a4a-9441-33ae0f646d26"}, "type": "LinearAxis", "id": "321e1f6a-08e2-4a4a-9441-33ae0f646d26"}, {"attributes": {"plot": {"type": "Plot", "id": "6d7da8bb-48b9-4e05-b631-df2c96984583"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "80dc70c5-1090-4fde-b768-53ff2a199652"}, "id": "ac95f060-1316-4ac7-a9e0-aa64d2a9efe7"}, "type": "Grid", "id": "ac95f060-1316-4ac7-a9e0-aa64d2a9efe7"}, {"attributes": {"plot": {"type": "Plot", "id": "6d7da8bb-48b9-4e05-b631-df2c96984583"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "a55f17b2-76dd-4bbb-8d1f-098330254b9d"}, "ticker": {"type": "BasicTicker", "id": "392df427-7485-407c-afae-84ecd08ed430"}, "id": "7362a9e9-7fb1-4cd1-89ae-d828f9d122fc"}, "type": "LinearAxis", "id": "7362a9e9-7fb1-4cd1-89ae-d828f9d122fc"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "82da26e2-8331-4e19-b529-3c0e5c5bd51a"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "b93dacd3-d265-4a95-8026-c5aa3c9c7e1f"}, {"type": "LinearAxis", "id": "7362a9e9-7fb1-4cd1-89ae-d828f9d122fc"}, {"type": "LinearAxis", "id": "321e1f6a-08e2-4a4a-9441-33ae0f646d26"}, {"type": "Grid", "id": "19187c3d-dcab-4230-8fc4-e2afd6907944"}, {"type": "Grid", "id": "ac95f060-1316-4ac7-a9e0-aa64d2a9efe7"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "2e6a7124-4936-492e-9fc8-e674cad31d02"}, "h_symmetry": false, "tools": [], "id": "6d7da8bb-48b9-4e05-b631-df2c96984583", "title": null, "y_range": {"type": "DataRange1d", "id": "754ef32f-5f99-4a76-9ada-745d149f1889"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "7362a9e9-7fb1-4cd1-89ae-d828f9d122fc"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "321e1f6a-08e2-4a4a-9441-33ae0f646d26"}]}, "type": "Plot", "id": "6d7da8bb-48b9-4e05-b631-df2c96984583"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "80dc70c5-1090-4fde-b768-53ff2a199652"}, "type": "BasicTicker", "id": "80dc70c5-1090-4fde-b768-53ff2a199652"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "392df427-7485-407c-afae-84ecd08ed430"}, "type": "BasicTicker", "id": "392df427-7485-407c-afae-84ecd08ed430"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "2e6a7124-4936-492e-9fc8-e674cad31d02"}, "type": "ToolEvents", "id": "2e6a7124-4936-492e-9fc8-e674cad31d02"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "39824619-b00d-4806-a508-f81321d192c9"}, "tags": [], "doc": null, "selection_glyph": null, "id": "b93dacd3-d265-4a95-8026-c5aa3c9c7e1f", "glyph": {"type": "DiamondCross", "id": "b2721143-1e94-49d0-a310-9d2d9bfdc8a9"}}, "type": "GlyphRenderer", "id": "b93dacd3-d265-4a95-8026-c5aa3c9c7e1f"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "754ef32f-5f99-4a76-9ada-745d149f1889"}, "type": "DataRange1d", "id": "754ef32f-5f99-4a76-9ada-745d149f1889"}, {"attributes": {"column_names": ["y", "x", "sizes"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "id": "39824619-b00d-4806-a508-f81321d192c9"}, "type": "ColumnDataSource", "id": "39824619-b00d-4806-a508-f81321d192c9"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("40291b3a-1c6c-4614-814c-2b11056ca723", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("40291b3a-1c6c-4614-814c-2b11056ca723", all_models);
    });
  }

}(this));