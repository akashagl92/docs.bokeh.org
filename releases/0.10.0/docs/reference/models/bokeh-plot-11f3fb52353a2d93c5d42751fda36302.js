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

  var elt = document.getElementById("1280ac5f-d4c6-4c09-a63c-9cb63e949778");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1280ac5f-d4c6-4c09-a63c-9cb63e949778' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"line_color": {"value": "#fdae6b"}, "line_width": {"value": 2}, "fill_color": null, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "0ffae50c-9a43-4259-be74-6e98ac6db57e", "size": {"units": "screen", "field": "sizes"}}, "type": "X", "id": "0ffae50c-9a43-4259-be74-6e98ac6db57e"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "228b1535-f225-409b-8808-8417456dce3f"}, "type": "BasicTicker", "id": "228b1535-f225-409b-8808-8417456dce3f"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "4444026f-6d79-486a-bdc5-08f2019aff78"}, "tags": [], "doc": null, "selection_glyph": null, "id": "5e2192e4-1baf-4dc7-8bba-ba50bdfb290d", "glyph": {"type": "X", "id": "0ffae50c-9a43-4259-be74-6e98ac6db57e"}}, "type": "GlyphRenderer", "id": "5e2192e4-1baf-4dc7-8bba-ba50bdfb290d"}, {"attributes": {"plot": {"type": "Plot", "id": "15c41f0f-371c-49db-b6fe-e9dca0e2cdbe"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "3233420b-5116-41d5-9631-397f3fd0cc6b"}, "ticker": {"type": "BasicTicker", "id": "228b1535-f225-409b-8808-8417456dce3f"}, "id": "228cdf24-67cf-4bd8-b52c-2727549ee4d1"}, "type": "LinearAxis", "id": "228cdf24-67cf-4bd8-b52c-2727549ee4d1"}, {"attributes": {"doc": null, "id": "3233420b-5116-41d5-9631-397f3fd0cc6b", "tags": []}, "type": "BasicTickFormatter", "id": "3233420b-5116-41d5-9631-397f3fd0cc6b"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "2d346c3b-5ba8-44be-aad7-fd17b62b25b1"}, "type": "BasicTicker", "id": "2d346c3b-5ba8-44be-aad7-fd17b62b25b1"}, {"attributes": {"plot": {"type": "Plot", "id": "15c41f0f-371c-49db-b6fe-e9dca0e2cdbe"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "2d346c3b-5ba8-44be-aad7-fd17b62b25b1"}, "id": "ee084722-2b28-4779-82e0-6ca8953a522c"}, "type": "Grid", "id": "ee084722-2b28-4779-82e0-6ca8953a522c"}, {"attributes": {"doc": null, "id": "7f46dcc8-ad28-47db-b7fc-63c9e81a900c", "tags": []}, "type": "BasicTickFormatter", "id": "7f46dcc8-ad28-47db-b7fc-63c9e81a900c"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "f48e681b-ad0a-40d3-af65-f2e82de8decd"}, "type": "DataRange1d", "id": "f48e681b-ad0a-40d3-af65-f2e82de8decd"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "9b4451ca-94c5-43f6-bf35-05c04635e3ab"}, "type": "ToolEvents", "id": "9b4451ca-94c5-43f6-bf35-05c04635e3ab"}, {"attributes": {"plot": {"type": "Plot", "id": "15c41f0f-371c-49db-b6fe-e9dca0e2cdbe"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "7f46dcc8-ad28-47db-b7fc-63c9e81a900c"}, "ticker": {"type": "BasicTicker", "id": "2d346c3b-5ba8-44be-aad7-fd17b62b25b1"}, "id": "f73f8261-6af4-4df7-9209-06d15598aad1"}, "type": "LinearAxis", "id": "f73f8261-6af4-4df7-9209-06d15598aad1"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "8b69e6de-13c4-4d81-b676-d9b123c4fa53"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "5e2192e4-1baf-4dc7-8bba-ba50bdfb290d"}, {"type": "LinearAxis", "id": "228cdf24-67cf-4bd8-b52c-2727549ee4d1"}, {"type": "LinearAxis", "id": "f73f8261-6af4-4df7-9209-06d15598aad1"}, {"type": "Grid", "id": "e93b8e41-dfc5-4846-93d3-28dcefdf1a7d"}, {"type": "Grid", "id": "ee084722-2b28-4779-82e0-6ca8953a522c"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "9b4451ca-94c5-43f6-bf35-05c04635e3ab"}, "h_symmetry": false, "tools": [], "id": "15c41f0f-371c-49db-b6fe-e9dca0e2cdbe", "title": null, "y_range": {"type": "DataRange1d", "id": "f48e681b-ad0a-40d3-af65-f2e82de8decd"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "228cdf24-67cf-4bd8-b52c-2727549ee4d1"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "f73f8261-6af4-4df7-9209-06d15598aad1"}]}, "type": "Plot", "id": "15c41f0f-371c-49db-b6fe-e9dca0e2cdbe"}, {"attributes": {"column_names": ["y", "x", "sizes"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "id": "4444026f-6d79-486a-bdc5-08f2019aff78"}, "type": "ColumnDataSource", "id": "4444026f-6d79-486a-bdc5-08f2019aff78"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "8b69e6de-13c4-4d81-b676-d9b123c4fa53"}, "type": "DataRange1d", "id": "8b69e6de-13c4-4d81-b676-d9b123c4fa53"}, {"attributes": {"plot": {"type": "Plot", "id": "15c41f0f-371c-49db-b6fe-e9dca0e2cdbe"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "228b1535-f225-409b-8808-8417456dce3f"}, "id": "e93b8e41-dfc5-4846-93d3-28dcefdf1a7d"}, "type": "Grid", "id": "e93b8e41-dfc5-4846-93d3-28dcefdf1a7d"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("1280ac5f-d4c6-4c09-a63c-9cb63e949778", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("1280ac5f-d4c6-4c09-a63c-9cb63e949778", all_models);
    });
  }

}(this));