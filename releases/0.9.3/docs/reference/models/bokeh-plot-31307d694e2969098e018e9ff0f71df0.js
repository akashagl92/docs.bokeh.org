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

  var elt = document.getElementById("c7f10db5-afa6-4f87-8ff4-cf0d17e6d5f7");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c7f10db5-afa6-4f87-8ff4-cf0d17e6d5f7' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "DataRange1d", "attributes": {"callback": null, "id": "3e93101c-a4b7-4896-9a5c-5436b8b92d58", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "3e93101c-a4b7-4896-9a5c-5436b8b92d58"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "d2c05629-23f2-4fa7-a2a0-d36f16b6fcea"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "3e93101c-a4b7-4896-9a5c-5436b8b92d58"}, "id": "972737d1-5cfc-41cb-8872-307cab897799", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "e99318d4-8c73-4d81-a6e9-743722018264"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "a31d19c0-6176-4bc2-a9e1-1ba44b9b71ba"}, "renderers": [{"type": "GlyphRenderer", "id": "03baeb73-7919-4cc1-bb21-c057217ff010"}, {"type": "LinearAxis", "id": "db0e7418-2567-4d34-aae7-694d92afc1ad"}, {"type": "LinearAxis", "id": "d2c05629-23f2-4fa7-a2a0-d36f16b6fcea"}, {"type": "Grid", "id": "ce4152bc-36da-479f-a4e7-57aa7e9ece4a"}, {"type": "Grid", "id": "5da5a9e9-c89d-40d5-a4f9-f7f479de25cd"}], "below": [{"type": "LinearAxis", "id": "db0e7418-2567-4d34-aae7-694d92afc1ad"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "972737d1-5cfc-41cb-8872-307cab897799"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "019f3179-79cc-4e32-9bef-246456c1ba05", "tags": []}, "id": "019f3179-79cc-4e32-9bef-246456c1ba05"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "1706a17b-349b-4f5b-9b3d-1fab17232138"}, "tags": [], "glyph": {"type": "Bezier", "id": "843f6193-f336-489e-a5ce-431da70f132e"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "03baeb73-7919-4cc1-bb21-c057217ff010"}, "id": "03baeb73-7919-4cc1-bb21-c057217ff010"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "fdcd95a9-b3ad-4db1-9a7f-78447440a321", "tags": []}, "id": "fdcd95a9-b3ad-4db1-9a7f-78447440a321"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "2fec4501-1a56-49fd-b31a-cd393a7353fe"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "fdcd95a9-b3ad-4db1-9a7f-78447440a321"}, "plot": {"type": "Plot", "id": "972737d1-5cfc-41cb-8872-307cab897799"}, "id": "db0e7418-2567-4d34-aae7-694d92afc1ad"}, "id": "db0e7418-2567-4d34-aae7-694d92afc1ad"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "e99318d4-8c73-4d81-a6e9-743722018264", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "e99318d4-8c73-4d81-a6e9-743722018264"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "2fec4501-1a56-49fd-b31a-cd393a7353fe"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "972737d1-5cfc-41cb-8872-307cab897799"}, "dimension": 0, "id": "ce4152bc-36da-479f-a4e7-57aa7e9ece4a"}, "id": "ce4152bc-36da-479f-a4e7-57aa7e9ece4a"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "1e4aec28-f22a-42b0-b543-cc4492fd4431"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "972737d1-5cfc-41cb-8872-307cab897799"}, "dimension": 1, "id": "5da5a9e9-c89d-40d5-a4f9-f7f479de25cd"}, "id": "5da5a9e9-c89d-40d5-a4f9-f7f479de25cd"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "a31d19c0-6176-4bc2-a9e1-1ba44b9b71ba", "tags": [], "geometries": []}, "id": "a31d19c0-6176-4bc2-a9e1-1ba44b9b71ba"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"xm01": [-2.1, -1.6, -1.1, -0.6, -0.1, 0.4, 0.9, 1.4, 1.9], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "yp01": [4.2, 2.45, 1.2, 0.45, 0.2, 0.45, 1.2, 2.45, 4.2], "xp02": [-1.6, -1.1, -0.6, -0.09999999999999998, 0.4, 0.9, 1.4, 1.9, 2.4], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "ym01": [3.8, 2.05, 0.8, 0.04999999999999999, -0.2, 0.04999999999999999, 0.8, 2.05, 3.8], "xp01": [-1.9, -1.4, -0.9, -0.4, 0.1, 0.6, 1.1, 1.6, 2.1]}, "doc": null, "id": "1706a17b-349b-4f5b-9b3d-1fab17232138", "column_names": ["xm01", "y", "yp01", "xp02", "x", "ym01", "xp01"]}, "id": "1706a17b-349b-4f5b-9b3d-1fab17232138"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "1e4aec28-f22a-42b0-b543-cc4492fd4431", "tags": []}, "id": "1e4aec28-f22a-42b0-b543-cc4492fd4431"}, {"type": "Bezier", "attributes": {"line_color": {"value": "#D95F02"}, "id": "843f6193-f336-489e-a5ce-431da70f132e", "cx0": {"field": "xp01"}, "cy0": {"field": "yp01"}, "y1": {"field": "y"}, "cx1": {"field": "xm01"}, "x1": {"field": "xp02"}, "y0": {"field": "y"}, "line_width": {"value": 2}, "tags": [], "doc": null, "x0": {"field": "x"}, "cy1": {"field": "ym01"}}, "id": "843f6193-f336-489e-a5ce-431da70f132e"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "1e4aec28-f22a-42b0-b543-cc4492fd4431"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "019f3179-79cc-4e32-9bef-246456c1ba05"}, "plot": {"type": "Plot", "id": "972737d1-5cfc-41cb-8872-307cab897799"}, "id": "d2c05629-23f2-4fa7-a2a0-d36f16b6fcea"}, "id": "d2c05629-23f2-4fa7-a2a0-d36f16b6fcea"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "2fec4501-1a56-49fd-b31a-cd393a7353fe", "tags": []}, "id": "2fec4501-1a56-49fd-b31a-cd393a7353fe"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("c7f10db5-afa6-4f87-8ff4-cf0d17e6d5f7", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("c7f10db5-afa6-4f87-8ff4-cf0d17e6d5f7", all_models);
    });
  }

}(this));