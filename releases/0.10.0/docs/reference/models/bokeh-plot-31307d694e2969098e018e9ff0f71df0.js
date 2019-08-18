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

  var elt = document.getElementById("2dd8930e-9edb-4238-907d-f61e7c58b6ee");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2dd8930e-9edb-4238-907d-f61e7c58b6ee' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "85ea84e5-1a58-4982-b4a8-15811bd2ab26"}, "tags": [], "doc": null, "selection_glyph": null, "id": "ff11d910-d8e6-453f-b280-aef7bb6958f1", "glyph": {"type": "Bezier", "id": "506218f5-e905-467c-8915-33589c728674"}}, "type": "GlyphRenderer", "id": "ff11d910-d8e6-453f-b280-aef7bb6958f1"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "dcf74eca-5730-4af6-9894-d344a2ccdc61"}, "type": "DataRange1d", "id": "dcf74eca-5730-4af6-9894-d344a2ccdc61"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "fc3b8ad9-6c05-4b80-858e-e1705d435c90"}, "type": "ToolEvents", "id": "fc3b8ad9-6c05-4b80-858e-e1705d435c90"}, {"attributes": {"line_color": {"value": "#D95F02"}, "line_width": {"value": 2}, "cy1": {"field": "ym01"}, "cy0": {"field": "yp01"}, "tags": [], "doc": null, "cx1": {"field": "xm01"}, "cx0": {"field": "xp01"}, "y1": {"field": "y"}, "y0": {"field": "y"}, "x0": {"field": "x"}, "x1": {"field": "xp02"}, "id": "506218f5-e905-467c-8915-33589c728674"}, "type": "Bezier", "id": "506218f5-e905-467c-8915-33589c728674"}, {"attributes": {"plot": {"type": "Plot", "id": "7365777e-af8f-427d-b532-4c9d1b7bfa9b"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "8761c7ea-190b-479f-9c3a-757f20dae7c0"}, "ticker": {"type": "BasicTicker", "id": "c14ed6d1-beae-429d-b96f-a0344e1dbdb7"}, "id": "30f5af05-8b56-4c8d-acd5-6c963211653b"}, "type": "LinearAxis", "id": "30f5af05-8b56-4c8d-acd5-6c963211653b"}, {"attributes": {"doc": null, "id": "8761c7ea-190b-479f-9c3a-757f20dae7c0", "tags": []}, "type": "BasicTickFormatter", "id": "8761c7ea-190b-479f-9c3a-757f20dae7c0"}, {"attributes": {"column_names": ["y", "ym01", "yp01", "xm01", "x", "xp01", "xp02"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"xm01": [-2.1, -1.6, -1.1, -0.6, -0.1, 0.4, 0.9, 1.4, 1.9], "ym01": [3.8, 2.05, 0.8, 0.04999999999999999, -0.2, 0.04999999999999999, 0.8, 2.05, 3.8], "yp01": [4.2, 2.45, 1.2, 0.45, 0.2, 0.45, 1.2, 2.45, 4.2], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "xp01": [-1.9, -1.4, -0.9, -0.4, 0.1, 0.6, 1.1, 1.6, 2.1], "xp02": [-1.6, -1.1, -0.6, -0.09999999999999998, 0.4, 0.9, 1.4, 1.9, 2.4]}, "id": "85ea84e5-1a58-4982-b4a8-15811bd2ab26"}, "type": "ColumnDataSource", "id": "85ea84e5-1a58-4982-b4a8-15811bd2ab26"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "c14ed6d1-beae-429d-b96f-a0344e1dbdb7"}, "type": "BasicTicker", "id": "c14ed6d1-beae-429d-b96f-a0344e1dbdb7"}, {"attributes": {"plot": {"type": "Plot", "id": "7365777e-af8f-427d-b532-4c9d1b7bfa9b"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "087795cf-4315-4442-b131-b1f303a05a7c"}, "ticker": {"type": "BasicTicker", "id": "9a935479-74d8-4f8a-8cd7-2daba8a1b5a7"}, "id": "b436c650-f4c4-454e-95e7-f956c103cd81"}, "type": "LinearAxis", "id": "b436c650-f4c4-454e-95e7-f956c103cd81"}, {"attributes": {"plot": {"type": "Plot", "id": "7365777e-af8f-427d-b532-4c9d1b7bfa9b"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "c14ed6d1-beae-429d-b96f-a0344e1dbdb7"}, "id": "9429aeac-5606-4df3-9e5f-25f32199772e"}, "type": "Grid", "id": "9429aeac-5606-4df3-9e5f-25f32199772e"}, {"attributes": {"plot": {"type": "Plot", "id": "7365777e-af8f-427d-b532-4c9d1b7bfa9b"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "9a935479-74d8-4f8a-8cd7-2daba8a1b5a7"}, "id": "f3ff4507-42b8-469d-af44-b5ab5d7ce106"}, "type": "Grid", "id": "f3ff4507-42b8-469d-af44-b5ab5d7ce106"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "9a935479-74d8-4f8a-8cd7-2daba8a1b5a7"}, "type": "BasicTicker", "id": "9a935479-74d8-4f8a-8cd7-2daba8a1b5a7"}, {"attributes": {"doc": null, "id": "087795cf-4315-4442-b131-b1f303a05a7c", "tags": []}, "type": "BasicTickFormatter", "id": "087795cf-4315-4442-b131-b1f303a05a7c"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "1dc84c87-16d3-4074-a3c8-96491cf88c9e"}, "type": "DataRange1d", "id": "1dc84c87-16d3-4074-a3c8-96491cf88c9e"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "1dc84c87-16d3-4074-a3c8-96491cf88c9e"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "ff11d910-d8e6-453f-b280-aef7bb6958f1"}, {"type": "LinearAxis", "id": "b436c650-f4c4-454e-95e7-f956c103cd81"}, {"type": "LinearAxis", "id": "30f5af05-8b56-4c8d-acd5-6c963211653b"}, {"type": "Grid", "id": "f3ff4507-42b8-469d-af44-b5ab5d7ce106"}, {"type": "Grid", "id": "9429aeac-5606-4df3-9e5f-25f32199772e"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "fc3b8ad9-6c05-4b80-858e-e1705d435c90"}, "h_symmetry": false, "tools": [], "id": "7365777e-af8f-427d-b532-4c9d1b7bfa9b", "title": null, "y_range": {"type": "DataRange1d", "id": "dcf74eca-5730-4af6-9894-d344a2ccdc61"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "b436c650-f4c4-454e-95e7-f956c103cd81"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "30f5af05-8b56-4c8d-acd5-6c963211653b"}]}, "type": "Plot", "id": "7365777e-af8f-427d-b532-4c9d1b7bfa9b"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("2dd8930e-9edb-4238-907d-f61e7c58b6ee", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("2dd8930e-9edb-4238-907d-f61e7c58b6ee", all_models);
    });
  }

}(this));