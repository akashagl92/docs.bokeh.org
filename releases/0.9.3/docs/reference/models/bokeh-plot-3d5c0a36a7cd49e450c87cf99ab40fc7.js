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

  var elt = document.getElementById("256d6ac5-2e78-497d-ad42-312cb0310c9a");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '256d6ac5-2e78-497d-ad42-312cb0310c9a' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "DataRange1d", "attributes": {"callback": null, "id": "816c3e6e-595c-4fd9-8b72-423458ff753f", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "816c3e6e-595c-4fd9-8b72-423458ff753f"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"r": [0.16666666666666666, 0.19999999999999998, 0.23333333333333334, 0.26666666666666666, 0.3, 0.3333333333333333, 0.36666666666666664, 0.4, 0.43333333333333335], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0]}, "doc": null, "id": "a4a3ae6a-9190-4fdb-8fd3-f3cdf8ac2d75", "column_names": ["r", "y", "x"]}, "id": "a4a3ae6a-9190-4fdb-8fd3-f3cdf8ac2d75"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "3164a271-34a3-4725-a585-23aab011c38b", "tags": []}, "id": "3164a271-34a3-4725-a585-23aab011c38b"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "04c41279-1de7-4784-9083-fdf263ca9d19"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "7f886695-b428-40dd-8555-cfbf6bddfc41"}, "plot": {"type": "Plot", "id": "3d0ad9bf-73d3-46e1-86ef-771d36e824b7"}, "id": "53a5db10-46e1-411c-b476-b1c3e09878d2"}, "id": "53a5db10-46e1-411c-b476-b1c3e09878d2"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "9fed72d7-8355-4c0a-b7e4-8e0d3a32c328", "tags": [], "geometries": []}, "id": "9fed72d7-8355-4c0a-b7e4-8e0d3a32c328"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "7f886695-b428-40dd-8555-cfbf6bddfc41", "tags": []}, "id": "7f886695-b428-40dd-8555-cfbf6bddfc41"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "dd6697e3-5478-4117-8b12-ceba7ec9eaba", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "dd6697e3-5478-4117-8b12-ceba7ec9eaba"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "53a5db10-46e1-411c-b476-b1c3e09878d2"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "dd6697e3-5478-4117-8b12-ceba7ec9eaba"}, "id": "3d0ad9bf-73d3-46e1-86ef-771d36e824b7", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "816c3e6e-595c-4fd9-8b72-423458ff753f"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "9fed72d7-8355-4c0a-b7e4-8e0d3a32c328"}, "renderers": [{"type": "GlyphRenderer", "id": "45d2716c-22a2-44fe-89aa-7f5671a1cf40"}, {"type": "LinearAxis", "id": "c72bb23f-6bcd-4081-a298-7f81e140a9b1"}, {"type": "LinearAxis", "id": "53a5db10-46e1-411c-b476-b1c3e09878d2"}, {"type": "Grid", "id": "d0a43eaf-d3b8-4c47-b62c-90e05e610054"}, {"type": "Grid", "id": "46060650-2c20-4240-9453-201f70059b66"}], "below": [{"type": "LinearAxis", "id": "c72bb23f-6bcd-4081-a298-7f81e140a9b1"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "3d0ad9bf-73d3-46e1-86ef-771d36e824b7"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "04c41279-1de7-4784-9083-fdf263ca9d19"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "3d0ad9bf-73d3-46e1-86ef-771d36e824b7"}, "dimension": 1, "id": "46060650-2c20-4240-9453-201f70059b66"}, "id": "46060650-2c20-4240-9453-201f70059b66"}, {"type": "Arc", "attributes": {"y": {"field": "y"}, "end_angle": {"units": "rad", "value": 4.1}, "tags": [], "x": {"field": "x"}, "start_angle": {"units": "rad", "value": 0.6}, "line_width": {"value": 3}, "line_color": {"value": "#beaed4"}, "doc": null, "radius": {"units": "data", "field": "r"}, "id": "87ec5fe5-91c0-40f6-8f20-a985a77b7d22"}, "id": "87ec5fe5-91c0-40f6-8f20-a985a77b7d22"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "a4a3ae6a-9190-4fdb-8fd3-f3cdf8ac2d75"}, "tags": [], "glyph": {"type": "Arc", "id": "87ec5fe5-91c0-40f6-8f20-a985a77b7d22"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "45d2716c-22a2-44fe-89aa-7f5671a1cf40"}, "id": "45d2716c-22a2-44fe-89aa-7f5671a1cf40"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "04c41279-1de7-4784-9083-fdf263ca9d19", "tags": []}, "id": "04c41279-1de7-4784-9083-fdf263ca9d19"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "7733368e-8894-4ab7-acbb-67d64b6b9c51"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "3d0ad9bf-73d3-46e1-86ef-771d36e824b7"}, "dimension": 0, "id": "d0a43eaf-d3b8-4c47-b62c-90e05e610054"}, "id": "d0a43eaf-d3b8-4c47-b62c-90e05e610054"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "7733368e-8894-4ab7-acbb-67d64b6b9c51", "tags": []}, "id": "7733368e-8894-4ab7-acbb-67d64b6b9c51"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "7733368e-8894-4ab7-acbb-67d64b6b9c51"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "3164a271-34a3-4725-a585-23aab011c38b"}, "plot": {"type": "Plot", "id": "3d0ad9bf-73d3-46e1-86ef-771d36e824b7"}, "id": "c72bb23f-6bcd-4081-a298-7f81e140a9b1"}, "id": "c72bb23f-6bcd-4081-a298-7f81e140a9b1"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("256d6ac5-2e78-497d-ad42-312cb0310c9a", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("256d6ac5-2e78-497d-ad42-312cb0310c9a", all_models);
    });
  }

}(this));