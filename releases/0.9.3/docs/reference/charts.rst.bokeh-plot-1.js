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

  var elt = document.getElementById("2932723c-b361-4c3b-b2d0-26835d4d143a");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2932723c-b361-4c3b-b2d0-26835d4d143a' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "ToolEvents", "attributes": {"doc": null, "id": "fe371102-4ffe-4153-b0cc-2ab525d6204b", "tags": [], "geometries": []}, "id": "fe371102-4ffe-4153-b0cc-2ab525d6204b"}, {"type": "FactorRange", "attributes": {"callback": null, "tags": [], "doc": null, "factors": ["1st", "2nd"], "id": "e2c137c3-d1ff-4505-ae6f-d9d14077b43a"}, "id": "e2c137c3-d1ff-4505-ae6f-d9d14077b43a"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "7001f0d0-e394-4238-92aa-f7fb599f8660", "subtype": "Chart"}, "id": "0f3ee221-b61f-473e-823a-b734e183c630", "tags": [], "doc": null}, "id": "0f3ee221-b61f-473e-823a-b734e183c630"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "1f19cbe8-d67b-4f45-90d2-e3ad8fa113e7"}, "tags": [], "glyph": {"type": "Rect", "id": "b9c0e591-b432-4172-b4c2-27c6ce0eeac9"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "0b8360cd-f87d-4c4e-84b5-29f7edc6c990"}, "id": "0b8360cd-f87d-4c4e-84b5-29f7edc6c990"}, {"type": "CategoricalTickFormatter", "attributes": {"doc": null, "id": "e9f0bf33-04b0-4efa-91c8-aac620f8f43e", "tags": []}, "id": "e9f0bf33-04b0-4efa-91c8-aac620f8f43e"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "b2c5a391-67cb-4813-a077-869a9f59b39b", "tags": []}, "id": "b2c5a391-67cb-4813-a077-869a9f59b39b"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "b2c5a391-67cb-4813-a077-869a9f59b39b"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "7001f0d0-e394-4238-92aa-f7fb599f8660", "subtype": "Chart"}, "dimension": 1, "id": "3180da8c-d760-4c36-a56d-d5ec7497d363"}, "id": "3180da8c-d760-4c36-a56d-d5ec7497d363"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "Range1d", "id": "3c8abf8d-6064-4ad3-84a2-6407e9e6f476"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "fe371102-4ffe-4153-b0cc-2ab525d6204b"}, "right": [], "renderers": [{"type": "CategoricalAxis", "id": "efe32bf3-9597-4b55-ace5-404a803f823e"}, {"type": "LinearAxis", "id": "c63bea7a-8dfb-4c99-8ce7-a2c67c36a601"}, {"type": "Grid", "id": "3180da8c-d760-4c36-a56d-d5ec7497d363"}, {"type": "GlyphRenderer", "id": "d0df1299-2f4f-4d12-9bf3-499985e7909f"}, {"type": "GlyphRenderer", "id": "0b8360cd-f87d-4c4e-84b5-29f7edc6c990"}, {"type": "GlyphRenderer", "id": "e19332bc-ead0-4dff-8fa2-32a53513fdfc"}], "below": [{"type": "CategoricalAxis", "id": "efe32bf3-9597-4b55-ace5-404a803f823e"}], "left": [{"type": "LinearAxis", "id": "c63bea7a-8dfb-4c99-8ce7-a2c67c36a601"}], "above": [], "tags": [], "plot_width": 600, "extra_y_ranges": {}, "title": "Stacked bars", "tools": [{"type": "PanTool", "id": "bc144fb5-b5b1-4ec1-9c4a-d18728b6e1c1"}, {"type": "WheelZoomTool", "id": "af7cbc40-e176-48da-9eed-add6c316c113"}, {"type": "BoxZoomTool", "id": "5284d014-af29-4886-8dc2-2e9e34a2aad0"}, {"type": "PreviewSaveTool", "id": "4680028a-2ec9-4e44-b7fe-bc2320098852"}, {"type": "ResizeTool", "id": "9d3f70bb-54c3-40c6-a24d-2fe71bde1d37"}, {"type": "ResetTool", "id": "0f3ee221-b61f-473e-823a-b734e183c630"}, {"type": "HelpTool", "id": "a78fc834-4bf3-446b-87fe-3113099c1db7"}], "x_range": {"type": "FactorRange", "id": "e2c137c3-d1ff-4505-ae6f-d9d14077b43a"}, "id": "7001f0d0-e394-4238-92aa-f7fb599f8660"}, "id": "7001f0d0-e394-4238-92aa-f7fb599f8660", "subtype": "Chart"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "7001f0d0-e394-4238-92aa-f7fb599f8660", "subtype": "Chart"}, "id": "bc144fb5-b5b1-4ec1-9c4a-d18728b6e1c1"}, "id": "bc144fb5-b5b1-4ec1-9c4a-d18728b6e1c1"}, {"type": "Rect", "attributes": {"fill_alpha": {"value": 0.7}, "line_color": {"value": "white"}, "x": {"field": "catpython"}, "height": {"units": "data", "field": "python"}, "y": {"field": "midpython"}, "width": {"units": "data", "field": "width_cat"}, "fill_color": {"value": "#f22c40"}, "tags": [], "doc": null, "id": "47b40e91-02e0-4978-852c-9d5d8ced00e8"}, "id": "47b40e91-02e0-4978-852c-9d5d8ced00e8"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "7001f0d0-e394-4238-92aa-f7fb599f8660", "subtype": "Chart"}, "id": "a78fc834-4bf3-446b-87fe-3113099c1db7", "tags": [], "doc": null}, "id": "a78fc834-4bf3-446b-87fe-3113099c1db7"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "1f19cbe8-d67b-4f45-90d2-e3ad8fa113e7"}, "tags": [], "glyph": {"type": "Rect", "id": "47b40e91-02e0-4978-852c-9d5d8ced00e8"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "d0df1299-2f4f-4d12-9bf3-499985e7909f"}, "id": "d0df1299-2f4f-4d12-9bf3-499985e7909f"}, {"type": "CategoricalAxis", "attributes": {"doc": null, "ticker": {"type": "CategoricalTicker", "id": "b1a6f344-eb86-425a-a7f8-d0973a4cf57a"}, "tags": [], "formatter": {"type": "CategoricalTickFormatter", "id": "e9f0bf33-04b0-4efa-91c8-aac620f8f43e"}, "plot": {"type": "Plot", "id": "7001f0d0-e394-4238-92aa-f7fb599f8660", "subtype": "Chart"}, "axis_label": "category", "id": "efe32bf3-9597-4b55-ace5-404a803f823e", "major_label_orientation": 0.7853981633974483}, "id": "efe32bf3-9597-4b55-ace5-404a803f823e"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "b2c5a391-67cb-4813-a077-869a9f59b39b"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "aa531e3b-ce9d-4ec2-aa50-bb6b9dd6a9b0"}, "plot": {"type": "Plot", "id": "7001f0d0-e394-4238-92aa-f7fb599f8660", "subtype": "Chart"}, "axis_label": "language", "id": "c63bea7a-8dfb-4c99-8ce7-a2c67c36a601"}, "id": "c63bea7a-8dfb-4c99-8ce7-a2c67c36a601"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "aa531e3b-ce9d-4ec2-aa50-bb6b9dd6a9b0", "tags": []}, "id": "aa531e3b-ce9d-4ec2-aa50-bb6b9dd6a9b0"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "1f19cbe8-d67b-4f45-90d2-e3ad8fa113e7"}, "tags": [], "glyph": {"type": "Rect", "id": "96fd3ed7-4c0a-49cf-a5f4-42c240f803a8"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "e19332bc-ead0-4dff-8fa2-32a53513fdfc"}, "id": "e19332bc-ead0-4dff-8fa2-32a53513fdfc"}, {"type": "Rect", "attributes": {"fill_alpha": {"value": 0.7}, "line_color": {"value": "white"}, "x": {"field": "catjython"}, "height": {"units": "data", "field": "jython"}, "y": {"field": "midjython"}, "width": {"units": "data", "field": "width_cat"}, "fill_color": {"value": "#407ee7"}, "tags": [], "doc": null, "id": "96fd3ed7-4c0a-49cf-a5f4-42c240f803a8"}, "id": "96fd3ed7-4c0a-49cf-a5f4-42c240f803a8"}, {"type": "Rect", "attributes": {"fill_alpha": {"value": 0.7}, "line_color": {"value": "white"}, "x": {"field": "catpypy"}, "height": {"units": "data", "field": "pypy"}, "y": {"field": "midpypy"}, "width": {"units": "data", "field": "width_cat"}, "fill_color": {"value": "#5ab738"}, "tags": [], "doc": null, "id": "b9c0e591-b432-4172-b4c2-27c6ce0eeac9"}, "id": "b9c0e591-b432-4172-b4c2-27c6ce0eeac9"}, {"type": "Range1d", "attributes": {"callback": null, "id": "3c8abf8d-6064-4ad3-84a2-6407e9e6f476", "tags": [], "doc": null, "end": 44.0, "start": -2.2}, "id": "3c8abf8d-6064-4ad3-84a2-6407e9e6f476"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "7001f0d0-e394-4238-92aa-f7fb599f8660", "subtype": "Chart"}, "id": "af7cbc40-e176-48da-9eed-add6c316c113"}, "id": "af7cbc40-e176-48da-9eed-add6c316c113"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"python": [-2, 5], "stackedjython": [21.0, 60.0], "width_cat": [0.2, 0.2], "stackedpython": [-1.0, 2.5], "pypy": [12, 40], "midjython": [11.0, 15.0], "catpython": ["1st:0.25", "2nd:0.25"], "catjython": ["1st:0.75", "2nd:0.75"], "stackedpypy": [4.0, 25.0], "zero": [32.0, 75.0], "width": [0.8, 0.8], "cat": ["1st", "2nd"], "jython": [22, 30], "midpython": [-1.0, 2.5], "catpypy": ["1st:0.5", "2nd:0.5"], "midpypy": [6.0, 20.0]}, "doc": null, "id": "1f19cbe8-d67b-4f45-90d2-e3ad8fa113e7", "column_names": ["python", "catpython", "width_cat", "cat", "stackedpython", "pypy", "midjython", "stackedpypy", "catjython", "midpython", "zero", "width", "midpypy", "stackedjython", "jython", "catpypy"]}, "id": "1f19cbe8-d67b-4f45-90d2-e3ad8fa113e7"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "7001f0d0-e394-4238-92aa-f7fb599f8660", "subtype": "Chart"}, "id": "5284d014-af29-4886-8dc2-2e9e34a2aad0"}, "id": "5284d014-af29-4886-8dc2-2e9e34a2aad0"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "7001f0d0-e394-4238-92aa-f7fb599f8660", "subtype": "Chart"}, "id": "9d3f70bb-54c3-40c6-a24d-2fe71bde1d37", "tags": [], "doc": null}, "id": "9d3f70bb-54c3-40c6-a24d-2fe71bde1d37"}, {"type": "CategoricalTicker", "attributes": {"doc": null, "id": "b1a6f344-eb86-425a-a7f8-d0973a4cf57a", "tags": []}, "id": "b1a6f344-eb86-425a-a7f8-d0973a4cf57a"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "7001f0d0-e394-4238-92aa-f7fb599f8660", "subtype": "Chart"}, "id": "4680028a-2ec9-4e44-b7fe-bc2320098852", "tags": [], "doc": null}, "id": "4680028a-2ec9-4e44-b7fe-bc2320098852"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("2932723c-b361-4c3b-b2d0-26835d4d143a", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("2932723c-b361-4c3b-b2d0-26835d4d143a", all_models);
    });
  }

}(this));