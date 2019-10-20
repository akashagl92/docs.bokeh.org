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

  var elt = document.getElementById("f7070006-0116-4500-85d0-9a77b70e34bf");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f7070006-0116-4500-85d0-9a77b70e34bf' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "85dae2bc-5418-4a4a-8b12-742a01ac5fa1", "tags": []}, "id": "85dae2bc-5418-4a4a-8b12-742a01ac5fa1"}, {"type": "Rect", "attributes": {"y": {"field": "y"}, "angle": {"units": "rad", "value": -0.7}, "height": {"units": "data", "field": "h"}, "fill_color": {"value": "#CAB2D6"}, "width": {"units": "data", "field": "w"}, "tags": [], "doc": null, "x": {"field": "x"}, "id": "593c235d-26a4-4219-9547-5411e894ec2f"}, "id": "593c235d-26a4-4219-9547-5411e894ec2f"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "fcce0775-444a-4f13-8643-c9a8d52542fb", "tags": [], "geometries": []}, "id": "fcce0775-444a-4f13-8643-c9a8d52542fb"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "b8330bde-e776-4a69-b9ea-116d0de5986f"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "6f94be6e-216a-42d1-a3c5-d7a7a10aedcc"}, "plot": {"type": "Plot", "id": "e20234e7-575e-41e1-ba86-e75fba05b5cc"}, "id": "551614d0-60d9-401d-8d99-aeb035294c89"}, "id": "551614d0-60d9-401d-8d99-aeb035294c89"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "5286fd51-c4e2-4f14-ab17-6bd7ba1f86dd", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "5286fd51-c4e2-4f14-ab17-6bd7ba1f86dd"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "0621d215-9814-460f-83f5-0fb4cbcebbb3"}, "tags": [], "glyph": {"type": "Rect", "id": "593c235d-26a4-4219-9547-5411e894ec2f"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "4a3dc7ec-ad81-44c6-ad40-264681c0673b"}, "id": "4a3dc7ec-ad81-44c6-ad40-264681c0673b"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "85dae2bc-5418-4a4a-8b12-742a01ac5fa1"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "e20234e7-575e-41e1-ba86-e75fba05b5cc"}, "dimension": 0, "id": "481574bd-8821-4b2e-90c5-0d50c85030c1"}, "id": "481574bd-8821-4b2e-90c5-0d50c85030c1"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "6f94be6e-216a-42d1-a3c5-d7a7a10aedcc", "tags": []}, "id": "6f94be6e-216a-42d1-a3c5-d7a7a10aedcc"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "85dae2bc-5418-4a4a-8b12-742a01ac5fa1"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "7b5431f1-7ef6-4de1-9fcb-231dec6bc680"}, "plot": {"type": "Plot", "id": "e20234e7-575e-41e1-ba86-e75fba05b5cc"}, "id": "4e69738c-9d5c-4ed3-a2e9-216ee890bec2"}, "id": "4e69738c-9d5c-4ed3-a2e9-216ee890bec2"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "b8330bde-e776-4a69-b9ea-116d0de5986f"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "e20234e7-575e-41e1-ba86-e75fba05b5cc"}, "dimension": 1, "id": "f7265f8b-9c09-4af9-a02f-8646c757984e"}, "id": "f7265f8b-9c09-4af9-a02f-8646c757984e"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "cad462cf-086a-440d-8d46-893c8b365ed8", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "cad462cf-086a-440d-8d46-893c8b365ed8"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "w": [0.16666666666666666, 0.19999999999999998, 0.23333333333333334, 0.26666666666666666, 0.3, 0.3333333333333333, 0.36666666666666664, 0.4, 0.43333333333333335], "h": [0.5, 0.4125, 0.35, 0.3125, 0.3, 0.3125, 0.35, 0.4125, 0.5], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0]}, "doc": null, "id": "0621d215-9814-460f-83f5-0fb4cbcebbb3", "column_names": ["y", "w", "h", "x"]}, "id": "0621d215-9814-460f-83f5-0fb4cbcebbb3"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "b8330bde-e776-4a69-b9ea-116d0de5986f", "tags": []}, "id": "b8330bde-e776-4a69-b9ea-116d0de5986f"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "7b5431f1-7ef6-4de1-9fcb-231dec6bc680", "tags": []}, "id": "7b5431f1-7ef6-4de1-9fcb-231dec6bc680"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "551614d0-60d9-401d-8d99-aeb035294c89"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "5286fd51-c4e2-4f14-ab17-6bd7ba1f86dd"}, "id": "e20234e7-575e-41e1-ba86-e75fba05b5cc", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "cad462cf-086a-440d-8d46-893c8b365ed8"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "fcce0775-444a-4f13-8643-c9a8d52542fb"}, "renderers": [{"type": "GlyphRenderer", "id": "4a3dc7ec-ad81-44c6-ad40-264681c0673b"}, {"type": "LinearAxis", "id": "4e69738c-9d5c-4ed3-a2e9-216ee890bec2"}, {"type": "LinearAxis", "id": "551614d0-60d9-401d-8d99-aeb035294c89"}, {"type": "Grid", "id": "481574bd-8821-4b2e-90c5-0d50c85030c1"}, {"type": "Grid", "id": "f7265f8b-9c09-4af9-a02f-8646c757984e"}], "below": [{"type": "LinearAxis", "id": "4e69738c-9d5c-4ed3-a2e9-216ee890bec2"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "e20234e7-575e-41e1-ba86-e75fba05b5cc"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("f7070006-0116-4500-85d0-9a77b70e34bf", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("f7070006-0116-4500-85d0-9a77b70e34bf", all_models);
    });
  }

}(this));