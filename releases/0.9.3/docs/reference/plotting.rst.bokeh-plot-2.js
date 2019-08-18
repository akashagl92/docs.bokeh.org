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

  var elt = document.getElementById("0ff97d98-e143-4689-be48-3a4b97528a0e");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0ff97d98-e143-4689-be48-3a4b97528a0e' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "Circle", "attributes": {"fill_alpha": {"value": 0.1}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 20}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "radius": {"units": "data", "value": 0.1}, "id": "8f8a73c6-391f-4452-865b-663c805ce0ba"}, "id": "8f8a73c6-391f-4452-865b-663c805ce0ba"}, {"type": "Plot", "attributes": {"plot_height": 300, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "7bc23d17-1b08-4f7a-9a11-6c8a8e633963"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "c70ca03d-6125-49a1-8dff-968337ca5df0"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "0d1fd145-b1e2-4fef-aa16-b7bb94053cdb"}, {"type": "Grid", "id": "f1b5221c-62f7-4b0d-a7e2-3e1e4eb441da"}, {"type": "LinearAxis", "id": "71e64140-b9bf-4abd-81ca-a4e92ff8af31"}, {"type": "Grid", "id": "bb4b1feb-2bfc-4d3a-8a99-80f8c6234057"}, {"type": "GlyphRenderer", "id": "a9b922eb-8e8e-4b7f-ad35-09b5bc0ed737"}], "below": [{"type": "LinearAxis", "id": "0d1fd145-b1e2-4fef-aa16-b7bb94053cdb"}], "left": [{"type": "LinearAxis", "id": "71e64140-b9bf-4abd-81ca-a4e92ff8af31"}], "above": [], "tags": [], "plot_width": 300, "extra_y_ranges": {}, "tools": [{"type": "PanTool", "id": "f5e1b453-28d4-4c3d-aaf0-c839f8e1584b"}, {"type": "WheelZoomTool", "id": "4d772240-b93b-4a4d-bcaf-b93d0477fd3c"}, {"type": "BoxZoomTool", "id": "2840baa8-a0d1-45ea-a454-81f75cf2393f"}, {"type": "PreviewSaveTool", "id": "66fd5494-1c5b-40cd-8308-29a831254aa9"}, {"type": "ResizeTool", "id": "a12c15ff-6a54-44d1-9961-2a4c05cf859c"}, {"type": "ResetTool", "id": "4357cd3c-ab00-4010-b87b-0e7267d8c000"}, {"type": "HelpTool", "id": "0a9a21cc-8543-4bad-ae2b-fd281ed45b26"}], "x_range": {"type": "DataRange1d", "id": "c73c915e-8228-42d4-934a-033c8e92f357"}, "id": "cc8c6ef9-8cdf-44bb-b620-5e94f59627c2"}, "id": "cc8c6ef9-8cdf-44bb-b620-5e94f59627c2", "subtype": "Figure"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "ee29e249-c815-4695-9795-201ac519102e"}, "id": "ee29e249-c815-4695-9795-201ac519102e"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "41974b3e-e6ab-4669-84ec-f23b5673f167"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "567b48f2-c942-471a-9c57-d9670df7fe94"}, "plot": {"type": "Plot", "id": "cc8c6ef9-8cdf-44bb-b620-5e94f59627c2", "subtype": "Figure"}, "id": "71e64140-b9bf-4abd-81ca-a4e92ff8af31"}, "id": "71e64140-b9bf-4abd-81ca-a4e92ff8af31"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "cc8c6ef9-8cdf-44bb-b620-5e94f59627c2", "subtype": "Figure"}, "id": "4d772240-b93b-4a4d-bcaf-b93d0477fd3c"}, "id": "4d772240-b93b-4a4d-bcaf-b93d0477fd3c"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "cc8c6ef9-8cdf-44bb-b620-5e94f59627c2", "subtype": "Figure"}, "id": "4357cd3c-ab00-4010-b87b-0e7267d8c000", "tags": [], "doc": null}, "id": "4357cd3c-ab00-4010-b87b-0e7267d8c000"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "41974b3e-e6ab-4669-84ec-f23b5673f167"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "cc8c6ef9-8cdf-44bb-b620-5e94f59627c2", "subtype": "Figure"}, "dimension": 1, "id": "bb4b1feb-2bfc-4d3a-8a99-80f8c6234057"}, "id": "bb4b1feb-2bfc-4d3a-8a99-80f8c6234057"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "93b39643-a400-401b-b573-ce07d2134af4"}, "tags": [], "glyph": {"type": "Circle", "id": "2c66190d-10fa-4f1c-b751-92dce72e6e41"}, "doc": null, "nonselection_glyph": {"type": "Circle", "id": "8f8a73c6-391f-4452-865b-663c805ce0ba"}, "selection_glyph": null, "id": "a9b922eb-8e8e-4b7f-ad35-09b5bc0ed737"}, "id": "a9b922eb-8e8e-4b7f-ad35-09b5bc0ed737"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "cc8c6ef9-8cdf-44bb-b620-5e94f59627c2", "subtype": "Figure"}, "id": "a12c15ff-6a54-44d1-9961-2a4c05cf859c", "tags": [], "doc": null}, "id": "a12c15ff-6a54-44d1-9961-2a4c05cf859c"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 1.0}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 20}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#1f77b4"}, "doc": null, "radius": {"units": "data", "value": 0.1}, "id": "2c66190d-10fa-4f1c-b751-92dce72e6e41"}, "id": "2c66190d-10fa-4f1c-b751-92dce72e6e41"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "c73c915e-8228-42d4-934a-033c8e92f357", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "c73c915e-8228-42d4-934a-033c8e92f357"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "c70ca03d-6125-49a1-8dff-968337ca5df0", "tags": [], "geometries": []}, "id": "c70ca03d-6125-49a1-8dff-968337ca5df0"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "567b48f2-c942-471a-9c57-d9670df7fe94", "tags": []}, "id": "567b48f2-c942-471a-9c57-d9670df7fe94"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "cc8c6ef9-8cdf-44bb-b620-5e94f59627c2", "subtype": "Figure"}, "id": "f5e1b453-28d4-4c3d-aaf0-c839f8e1584b"}, "id": "f5e1b453-28d4-4c3d-aaf0-c839f8e1584b"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "cc8c6ef9-8cdf-44bb-b620-5e94f59627c2", "subtype": "Figure"}, "id": "0a9a21cc-8543-4bad-ae2b-fd281ed45b26", "tags": [], "doc": null}, "id": "0a9a21cc-8543-4bad-ae2b-fd281ed45b26"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "771f4f01-78b3-43ac-8fe3-196586465ab4", "tags": []}, "id": "771f4f01-78b3-43ac-8fe3-196586465ab4"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "cc8c6ef9-8cdf-44bb-b620-5e94f59627c2", "subtype": "Figure"}, "id": "66fd5494-1c5b-40cd-8308-29a831254aa9", "tags": [], "doc": null}, "id": "66fd5494-1c5b-40cd-8308-29a831254aa9"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "cc8c6ef9-8cdf-44bb-b620-5e94f59627c2", "subtype": "Figure"}, "id": "2840baa8-a0d1-45ea-a454-81f75cf2393f"}, "id": "2840baa8-a0d1-45ea-a454-81f75cf2393f"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "ee29e249-c815-4695-9795-201ac519102e"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "cc8c6ef9-8cdf-44bb-b620-5e94f59627c2", "subtype": "Figure"}, "dimension": 0, "id": "f1b5221c-62f7-4b0d-a7e2-3e1e4eb441da"}, "id": "f1b5221c-62f7-4b0d-a7e2-3e1e4eb441da"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "7bc23d17-1b08-4f7a-9a11-6c8a8e633963", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "7bc23d17-1b08-4f7a-9a11-6c8a8e633963"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [1, 2, 3], "x": [1, 2, 3]}, "doc": null, "id": "93b39643-a400-401b-b573-ce07d2134af4", "column_names": ["y", "x"]}, "id": "93b39643-a400-401b-b573-ce07d2134af4"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "41974b3e-e6ab-4669-84ec-f23b5673f167"}, "id": "41974b3e-e6ab-4669-84ec-f23b5673f167"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "ee29e249-c815-4695-9795-201ac519102e"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "771f4f01-78b3-43ac-8fe3-196586465ab4"}, "plot": {"type": "Plot", "id": "cc8c6ef9-8cdf-44bb-b620-5e94f59627c2", "subtype": "Figure"}, "id": "0d1fd145-b1e2-4fef-aa16-b7bb94053cdb"}, "id": "0d1fd145-b1e2-4fef-aa16-b7bb94053cdb"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("0ff97d98-e143-4689-be48-3a4b97528a0e", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("0ff97d98-e143-4689-be48-3a4b97528a0e", all_models);
    });
  }

}(this));