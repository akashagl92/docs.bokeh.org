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

  var elt = document.getElementById("f7e7f052-93be-4184-a8ad-a4317829cd28");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f7e7f052-93be-4184-a8ad-a4317829cd28' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "06ddf824-3a29-402d-adef-abb945074bee"}, "type": "BasicTicker", "id": "06ddf824-3a29-402d-adef-abb945074bee"}, {"attributes": {"column_names": ["y", "x", "yp01", "xp01", "xp02"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "yp01": [4.2, 2.45, 1.2, 0.45, 0.2, 0.45, 1.2, 2.45, 4.2], "xp01": [-1.9, -1.4, -0.9, -0.4, 0.1, 0.6, 1.1, 1.6, 2.1], "xp02": [-1.6, -1.1, -0.6, -0.09999999999999998, 0.4, 0.9, 1.4, 1.9, 2.4]}, "id": "28e6e8ee-41a1-4420-bcf2-109ba442d9bd"}, "type": "ColumnDataSource", "id": "28e6e8ee-41a1-4420-bcf2-109ba442d9bd"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "f21c2f82-218f-4fad-8828-e167ae429ced"}, "type": "ToolEvents", "id": "f21c2f82-218f-4fad-8828-e167ae429ced"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "28e6e8ee-41a1-4420-bcf2-109ba442d9bd"}, "tags": [], "doc": null, "selection_glyph": null, "id": "d95e6cf4-b0f2-49ee-afd5-c595d56b7ebe", "glyph": {"type": "Quadratic", "id": "853b42c2-37dc-42f9-91e2-69af01b73b12"}}, "type": "GlyphRenderer", "id": "d95e6cf4-b0f2-49ee-afd5-c595d56b7ebe"}, {"attributes": {"plot": {"type": "Plot", "id": "4c01e7e8-01a7-4897-9a9e-cf695b8d61ae"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "77d479ab-3ae0-4887-9057-83734677d335"}, "id": "4b645213-5d98-4ab8-82d9-0fa4bda21dcb"}, "type": "Grid", "id": "4b645213-5d98-4ab8-82d9-0fa4bda21dcb"}, {"attributes": {"plot": {"type": "Plot", "id": "4c01e7e8-01a7-4897-9a9e-cf695b8d61ae"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "06ddf824-3a29-402d-adef-abb945074bee"}, "id": "3900324a-c055-4fdd-814f-5ff07246a52a"}, "type": "Grid", "id": "3900324a-c055-4fdd-814f-5ff07246a52a"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "2671d37c-55a0-43ca-8add-abeb71764b74"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "d95e6cf4-b0f2-49ee-afd5-c595d56b7ebe"}, {"type": "LinearAxis", "id": "2c2b7d55-fa6f-4e7d-916e-a6cd48aa33da"}, {"type": "LinearAxis", "id": "6cda9bcf-3a8e-4885-b664-9f0ffa989033"}, {"type": "Grid", "id": "3900324a-c055-4fdd-814f-5ff07246a52a"}, {"type": "Grid", "id": "4b645213-5d98-4ab8-82d9-0fa4bda21dcb"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "f21c2f82-218f-4fad-8828-e167ae429ced"}, "h_symmetry": false, "tools": [], "id": "4c01e7e8-01a7-4897-9a9e-cf695b8d61ae", "title": null, "y_range": {"type": "DataRange1d", "id": "c3d74d97-0752-4c15-919e-0073cb7b894b"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "2c2b7d55-fa6f-4e7d-916e-a6cd48aa33da"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "6cda9bcf-3a8e-4885-b664-9f0ffa989033"}]}, "type": "Plot", "id": "4c01e7e8-01a7-4897-9a9e-cf695b8d61ae"}, {"attributes": {"line_color": {"value": "#4DAF4A"}, "line_width": {"value": 3}, "tags": [], "cx": {"field": "xp01"}, "doc": null, "cy": {"field": "yp01"}, "y1": {"field": "y"}, "y0": {"field": "y"}, "x0": {"field": "x"}, "x1": {"field": "xp02"}, "id": "853b42c2-37dc-42f9-91e2-69af01b73b12"}, "type": "Quadratic", "id": "853b42c2-37dc-42f9-91e2-69af01b73b12"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "2671d37c-55a0-43ca-8add-abeb71764b74"}, "type": "DataRange1d", "id": "2671d37c-55a0-43ca-8add-abeb71764b74"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "c3d74d97-0752-4c15-919e-0073cb7b894b"}, "type": "DataRange1d", "id": "c3d74d97-0752-4c15-919e-0073cb7b894b"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "77d479ab-3ae0-4887-9057-83734677d335"}, "type": "BasicTicker", "id": "77d479ab-3ae0-4887-9057-83734677d335"}, {"attributes": {"doc": null, "id": "3009fc93-4ff5-42fd-a71f-c5afd4ddccde", "tags": []}, "type": "BasicTickFormatter", "id": "3009fc93-4ff5-42fd-a71f-c5afd4ddccde"}, {"attributes": {"doc": null, "id": "7fecfe7f-2f3e-44a9-84dc-c8a0e3f01d11", "tags": []}, "type": "BasicTickFormatter", "id": "7fecfe7f-2f3e-44a9-84dc-c8a0e3f01d11"}, {"attributes": {"plot": {"type": "Plot", "id": "4c01e7e8-01a7-4897-9a9e-cf695b8d61ae"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "3009fc93-4ff5-42fd-a71f-c5afd4ddccde"}, "ticker": {"type": "BasicTicker", "id": "77d479ab-3ae0-4887-9057-83734677d335"}, "id": "6cda9bcf-3a8e-4885-b664-9f0ffa989033"}, "type": "LinearAxis", "id": "6cda9bcf-3a8e-4885-b664-9f0ffa989033"}, {"attributes": {"plot": {"type": "Plot", "id": "4c01e7e8-01a7-4897-9a9e-cf695b8d61ae"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "7fecfe7f-2f3e-44a9-84dc-c8a0e3f01d11"}, "ticker": {"type": "BasicTicker", "id": "06ddf824-3a29-402d-adef-abb945074bee"}, "id": "2c2b7d55-fa6f-4e7d-916e-a6cd48aa33da"}, "type": "LinearAxis", "id": "2c2b7d55-fa6f-4e7d-916e-a6cd48aa33da"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("f7e7f052-93be-4184-a8ad-a4317829cd28", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("f7e7f052-93be-4184-a8ad-a4317829cd28", all_models);
    });
  }

}(this));