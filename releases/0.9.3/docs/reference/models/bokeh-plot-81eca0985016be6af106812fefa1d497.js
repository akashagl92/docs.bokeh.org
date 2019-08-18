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

  var elt = document.getElementById("9e1295f2-52dd-45bc-96e0-37baf226e89c");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '9e1295f2-52dd-45bc-96e0-37baf226e89c' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "6aaf2cae-e1ef-4014-a2d8-5d3b7bc6ee2f", "tags": []}, "id": "6aaf2cae-e1ef-4014-a2d8-5d3b7bc6ee2f"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "6aaf2cae-e1ef-4014-a2d8-5d3b7bc6ee2f"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "241d3f41-989d-4344-b4fd-b467b2a2af82"}, "plot": {"type": "Plot", "id": "fec53676-05c9-4aa1-8485-952c1bc8e7a2"}, "id": "ae500941-b758-48c5-8929-dc28b59429d4"}, "id": "ae500941-b758-48c5-8929-dc28b59429d4"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "d150542b-0a33-417d-b965-617f2694b001"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "fec53676-05c9-4aa1-8485-952c1bc8e7a2"}, "dimension": 0, "id": "95317183-987d-44c9-8e5d-41ee339cd6ba"}, "id": "95317183-987d-44c9-8e5d-41ee339cd6ba"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"xp02": [-1.6, -1.1, -0.6, -0.09999999999999998, 0.4, 0.9, 1.4, 1.9, 2.4], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "yp01": [4.2, 2.45, 1.2, 0.45, 0.2, 0.45, 1.2, 2.45, 4.2], "xp01": [-1.9, -1.4, -0.9, -0.4, 0.1, 0.6, 1.1, 1.6, 2.1], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0]}, "doc": null, "id": "be6e3e86-13f1-43bb-9a4c-01bf8e5703a7", "column_names": ["xp02", "y", "yp01", "xp01", "x"]}, "id": "be6e3e86-13f1-43bb-9a4c-01bf8e5703a7"}, {"type": "Quadratic", "attributes": {"line_color": {"value": "#4DAF4A"}, "id": "7d99235a-cb4e-45ce-b962-16f97510827c", "doc": null, "y0": {"field": "y"}, "y1": {"field": "y"}, "x1": {"field": "xp02"}, "line_width": {"value": 3}, "tags": [], "x0": {"field": "x"}, "cy": {"field": "yp01"}, "cx": {"field": "xp01"}}, "id": "7d99235a-cb4e-45ce-b962-16f97510827c"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "3782a588-e899-4dad-b8ac-c4471ebcf217", "tags": []}, "id": "3782a588-e899-4dad-b8ac-c4471ebcf217"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "d150542b-0a33-417d-b965-617f2694b001"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "3782a588-e899-4dad-b8ac-c4471ebcf217"}, "plot": {"type": "Plot", "id": "fec53676-05c9-4aa1-8485-952c1bc8e7a2"}, "id": "22542c0b-3575-40d6-bf33-94487ec1cbf3"}, "id": "22542c0b-3575-40d6-bf33-94487ec1cbf3"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "be6e3e86-13f1-43bb-9a4c-01bf8e5703a7"}, "tags": [], "glyph": {"type": "Quadratic", "id": "7d99235a-cb4e-45ce-b962-16f97510827c"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "1a4e830e-f7b2-4570-9964-be671dd75cbb"}, "id": "1a4e830e-f7b2-4570-9964-be671dd75cbb"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "6aaf2cae-e1ef-4014-a2d8-5d3b7bc6ee2f"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "fec53676-05c9-4aa1-8485-952c1bc8e7a2"}, "dimension": 1, "id": "dc02dcec-4690-4080-a026-9f36e2def2dc"}, "id": "dc02dcec-4690-4080-a026-9f36e2def2dc"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "241d3f41-989d-4344-b4fd-b467b2a2af82", "tags": []}, "id": "241d3f41-989d-4344-b4fd-b467b2a2af82"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "ae500941-b758-48c5-8929-dc28b59429d4"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "a83ea763-3275-4ff7-b160-a61823423fc6"}, "id": "fec53676-05c9-4aa1-8485-952c1bc8e7a2", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "b3fc696d-ff2c-4321-b646-e9209dd08485"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "270e6c70-5048-4fb5-baec-3b15df0e7f2e"}, "renderers": [{"type": "GlyphRenderer", "id": "1a4e830e-f7b2-4570-9964-be671dd75cbb"}, {"type": "LinearAxis", "id": "22542c0b-3575-40d6-bf33-94487ec1cbf3"}, {"type": "LinearAxis", "id": "ae500941-b758-48c5-8929-dc28b59429d4"}, {"type": "Grid", "id": "95317183-987d-44c9-8e5d-41ee339cd6ba"}, {"type": "Grid", "id": "dc02dcec-4690-4080-a026-9f36e2def2dc"}], "below": [{"type": "LinearAxis", "id": "22542c0b-3575-40d6-bf33-94487ec1cbf3"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "fec53676-05c9-4aa1-8485-952c1bc8e7a2"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "d150542b-0a33-417d-b965-617f2694b001", "tags": []}, "id": "d150542b-0a33-417d-b965-617f2694b001"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "270e6c70-5048-4fb5-baec-3b15df0e7f2e", "tags": [], "geometries": []}, "id": "270e6c70-5048-4fb5-baec-3b15df0e7f2e"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "a83ea763-3275-4ff7-b160-a61823423fc6", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "a83ea763-3275-4ff7-b160-a61823423fc6"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "b3fc696d-ff2c-4321-b646-e9209dd08485", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "b3fc696d-ff2c-4321-b646-e9209dd08485"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("9e1295f2-52dd-45bc-96e0-37baf226e89c", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("9e1295f2-52dd-45bc-96e0-37baf226e89c", all_models);
    });
  }

}(this));