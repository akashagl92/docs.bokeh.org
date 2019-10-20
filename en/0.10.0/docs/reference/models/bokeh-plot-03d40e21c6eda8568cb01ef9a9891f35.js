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

  var elt = document.getElementById("b869e614-f303-4b2f-9a9f-b0feb907ec00");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b869e614-f303-4b2f-9a9f-b0feb907ec00' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "3c33d417-67f6-45fa-964e-9fd3b4dafe92"}, "type": "BasicTicker", "id": "3c33d417-67f6-45fa-964e-9fd3b4dafe92"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "cfee721f-32bf-4184-a0cb-5f12382fa447"}, "type": "DataRange1d", "id": "cfee721f-32bf-4184-a0cb-5f12382fa447"}, {"attributes": {"plot": {"type": "Plot", "id": "9197c164-b306-4457-b8c8-a153533c7052"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "f355b3fe-27d0-4aa0-9338-4f326b0f22b1"}, "ticker": {"type": "BasicTicker", "id": "3c33d417-67f6-45fa-964e-9fd3b4dafe92"}, "id": "05c32de1-e1ec-45c9-a910-951427357705"}, "type": "LinearAxis", "id": "05c32de1-e1ec-45c9-a910-951427357705"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "330ed5aa-f31c-4b94-859c-b12b0824e437"}, "type": "ToolEvents", "id": "330ed5aa-f31c-4b94-859c-b12b0824e437"}, {"attributes": {"plot": {"type": "Plot", "id": "9197c164-b306-4457-b8c8-a153533c7052"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "bbea0d2c-eadc-4177-b6aa-6eae2e6fd85e"}, "id": "2956666c-7be6-4c76-8de8-951ce41c8fef"}, "type": "Grid", "id": "2956666c-7be6-4c76-8de8-951ce41c8fef"}, {"attributes": {"plot": {"type": "Plot", "id": "9197c164-b306-4457-b8c8-a153533c7052"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "3c33d417-67f6-45fa-964e-9fd3b4dafe92"}, "id": "205bb598-3b00-4c7c-99a9-597b63e83135"}, "type": "Grid", "id": "205bb598-3b00-4c7c-99a9-597b63e83135"}, {"attributes": {"doc": null, "id": "f355b3fe-27d0-4aa0-9338-4f326b0f22b1", "tags": []}, "type": "BasicTickFormatter", "id": "f355b3fe-27d0-4aa0-9338-4f326b0f22b1"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "66bced9c-e328-45f7-b239-5ac69e6599a7"}, "tags": [], "doc": null, "selection_glyph": null, "id": "e491ea11-bc99-40d8-8adc-6052360a19c3", "glyph": {"type": "Rect", "id": "a4e22c33-924f-4883-acc8-3979e75c91a5"}}, "type": "GlyphRenderer", "id": "e491ea11-bc99-40d8-8adc-6052360a19c3"}, {"attributes": {"angle": {"units": "rad", "value": -0.7}, "fill_color": {"value": "#CAB2D6"}, "tags": [], "doc": null, "height": {"units": "data", "field": "h"}, "width": {"units": "data", "field": "w"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "a4e22c33-924f-4883-acc8-3979e75c91a5"}, "type": "Rect", "id": "a4e22c33-924f-4883-acc8-3979e75c91a5"}, {"attributes": {"plot": {"type": "Plot", "id": "9197c164-b306-4457-b8c8-a153533c7052"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "60dc3688-8703-422c-b498-0ee9de43d4a0"}, "ticker": {"type": "BasicTicker", "id": "bbea0d2c-eadc-4177-b6aa-6eae2e6fd85e"}, "id": "b6addcfc-e89c-428d-94a2-0bbc65b400f1"}, "type": "LinearAxis", "id": "b6addcfc-e89c-428d-94a2-0bbc65b400f1"}, {"attributes": {"doc": null, "id": "60dc3688-8703-422c-b498-0ee9de43d4a0", "tags": []}, "type": "BasicTickFormatter", "id": "60dc3688-8703-422c-b498-0ee9de43d4a0"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "5489ad9e-6bc3-4ada-99db-723b4773df28"}, "type": "DataRange1d", "id": "5489ad9e-6bc3-4ada-99db-723b4773df28"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "cfee721f-32bf-4184-a0cb-5f12382fa447"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "e491ea11-bc99-40d8-8adc-6052360a19c3"}, {"type": "LinearAxis", "id": "05c32de1-e1ec-45c9-a910-951427357705"}, {"type": "LinearAxis", "id": "b6addcfc-e89c-428d-94a2-0bbc65b400f1"}, {"type": "Grid", "id": "205bb598-3b00-4c7c-99a9-597b63e83135"}, {"type": "Grid", "id": "2956666c-7be6-4c76-8de8-951ce41c8fef"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "330ed5aa-f31c-4b94-859c-b12b0824e437"}, "h_symmetry": false, "tools": [], "id": "9197c164-b306-4457-b8c8-a153533c7052", "title": null, "y_range": {"type": "DataRange1d", "id": "5489ad9e-6bc3-4ada-99db-723b4773df28"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "05c32de1-e1ec-45c9-a910-951427357705"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "b6addcfc-e89c-428d-94a2-0bbc65b400f1"}]}, "type": "Plot", "id": "9197c164-b306-4457-b8c8-a153533c7052"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "bbea0d2c-eadc-4177-b6aa-6eae2e6fd85e"}, "type": "BasicTicker", "id": "bbea0d2c-eadc-4177-b6aa-6eae2e6fd85e"}, {"attributes": {"column_names": ["y", "h", "w", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "h": [0.5, 0.4125, 0.35, 0.3125, 0.3, 0.3125, 0.35, 0.4125, 0.5], "w": [0.16666666666666666, 0.19999999999999998, 0.23333333333333334, 0.26666666666666666, 0.3, 0.3333333333333333, 0.36666666666666664, 0.4, 0.43333333333333335], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0]}, "id": "66bced9c-e328-45f7-b239-5ac69e6599a7"}, "type": "ColumnDataSource", "id": "66bced9c-e328-45f7-b239-5ac69e6599a7"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("b869e614-f303-4b2f-9a9f-b0feb907ec00", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("b869e614-f303-4b2f-9a9f-b0feb907ec00", all_models);
    });
  }

}(this));