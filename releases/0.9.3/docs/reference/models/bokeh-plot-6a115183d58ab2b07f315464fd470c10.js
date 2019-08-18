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

  var elt = document.getElementById("52dc1d29-6cd7-4fc0-96c8-6eeed7b2793d");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '52dc1d29-6cd7-4fc0-96c8-6eeed7b2793d' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "Segment", "attributes": {"x1": {"field": "xm01"}, "line_width": {"value": 3}, "tags": [], "doc": null, "x0": {"field": "x"}, "line_color": {"value": "#f4a582"}, "id": "4a6b6367-2c53-43ee-aa18-83cf77b44d21", "y0": {"field": "y"}, "y1": {"field": "ym01"}}, "id": "4a6b6367-2c53-43ee-aa18-83cf77b44d21"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "77a60076-c649-46bd-bc33-eec436d9c774", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "77a60076-c649-46bd-bc33-eec436d9c774"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"xm01": [-0.8999999999999999, -0.8625, -0.6000000000000001, -0.1875, 0.3, 0.7875, 1.2, 1.4625000000000001, 1.5], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "ym01": [4.1, 2.525, 1.4, 0.725, 0.5, 0.725, 1.4, 2.525, 4.1], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0]}, "doc": null, "id": "e5eec7ba-46a7-4f8b-ac84-de035af43aa2", "column_names": ["xm01", "y", "ym01", "x"]}, "id": "e5eec7ba-46a7-4f8b-ac84-de035af43aa2"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "37464560-7115-466b-a050-d50fe12fd48d", "tags": []}, "id": "37464560-7115-466b-a050-d50fe12fd48d"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "926b0165-7a35-4c01-828e-8c4c536338f1", "tags": []}, "id": "926b0165-7a35-4c01-828e-8c4c536338f1"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "b2886cb5-4102-486f-ad84-30593b588b21", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "b2886cb5-4102-486f-ad84-30593b588b21"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "31cf7f6d-0f23-4b61-9447-c7745cdba53f"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "8b2679a3-6670-4980-97ef-f529c19e6cdb"}, "dimension": 1, "id": "4c6659ff-f4ec-41b9-9ce6-beeb7994e218"}, "id": "4c6659ff-f4ec-41b9-9ce6-beeb7994e218"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "0abd2578-5940-4a2f-a98d-b6a18e82cbc4", "tags": []}, "id": "0abd2578-5940-4a2f-a98d-b6a18e82cbc4"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "31cf7f6d-0f23-4b61-9447-c7745cdba53f"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "37464560-7115-466b-a050-d50fe12fd48d"}, "plot": {"type": "Plot", "id": "8b2679a3-6670-4980-97ef-f529c19e6cdb"}, "id": "8bc8842b-8c7c-4df2-862b-ffddf36581da"}, "id": "8bc8842b-8c7c-4df2-862b-ffddf36581da"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "31cf7f6d-0f23-4b61-9447-c7745cdba53f", "tags": []}, "id": "31cf7f6d-0f23-4b61-9447-c7745cdba53f"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "0abd2578-5940-4a2f-a98d-b6a18e82cbc4"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "8b2679a3-6670-4980-97ef-f529c19e6cdb"}, "dimension": 0, "id": "e45ade8b-bfc7-4e3d-973d-71bc09817812"}, "id": "e45ade8b-bfc7-4e3d-973d-71bc09817812"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "71b2558f-0e1b-48b5-9e32-b66735407f5a", "tags": [], "geometries": []}, "id": "71b2558f-0e1b-48b5-9e32-b66735407f5a"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "0abd2578-5940-4a2f-a98d-b6a18e82cbc4"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "926b0165-7a35-4c01-828e-8c4c536338f1"}, "plot": {"type": "Plot", "id": "8b2679a3-6670-4980-97ef-f529c19e6cdb"}, "id": "d39eb659-0351-4f0a-8f02-a9e51b006d7d"}, "id": "d39eb659-0351-4f0a-8f02-a9e51b006d7d"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "e5eec7ba-46a7-4f8b-ac84-de035af43aa2"}, "tags": [], "glyph": {"type": "Segment", "id": "4a6b6367-2c53-43ee-aa18-83cf77b44d21"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "e71a1587-f568-4f20-9016-a9d080b03720"}, "id": "e71a1587-f568-4f20-9016-a9d080b03720"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "8bc8842b-8c7c-4df2-862b-ffddf36581da"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "b2886cb5-4102-486f-ad84-30593b588b21"}, "id": "8b2679a3-6670-4980-97ef-f529c19e6cdb", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "77a60076-c649-46bd-bc33-eec436d9c774"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "71b2558f-0e1b-48b5-9e32-b66735407f5a"}, "renderers": [{"type": "GlyphRenderer", "id": "e71a1587-f568-4f20-9016-a9d080b03720"}, {"type": "LinearAxis", "id": "d39eb659-0351-4f0a-8f02-a9e51b006d7d"}, {"type": "LinearAxis", "id": "8bc8842b-8c7c-4df2-862b-ffddf36581da"}, {"type": "Grid", "id": "e45ade8b-bfc7-4e3d-973d-71bc09817812"}, {"type": "Grid", "id": "4c6659ff-f4ec-41b9-9ce6-beeb7994e218"}], "below": [{"type": "LinearAxis", "id": "d39eb659-0351-4f0a-8f02-a9e51b006d7d"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "8b2679a3-6670-4980-97ef-f529c19e6cdb"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("52dc1d29-6cd7-4fc0-96c8-6eeed7b2793d", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("52dc1d29-6cd7-4fc0-96c8-6eeed7b2793d", all_models);
    });
  }

}(this));