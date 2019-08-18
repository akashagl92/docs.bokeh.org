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

  var elt = document.getElementById("7cd3b57b-e82a-440e-b8b9-5b7f9f5ad18b");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7cd3b57b-e82a-440e-b8b9-5b7f9f5ad18b' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "774b21a1-8bd6-456f-a32d-4c452e062ab9", "subtype": "Chart"}, "id": "7ba31011-e91c-4c39-bf60-fec15b73033d"}, "id": "7ba31011-e91c-4c39-bf60-fec15b73033d"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "774b21a1-8bd6-456f-a32d-4c452e062ab9", "subtype": "Chart"}, "id": "c3549ef9-a5b1-4ee8-afeb-6c9f0c86b660", "tags": [], "doc": null}, "id": "c3549ef9-a5b1-4ee8-afeb-6c9f0c86b660"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "3157323b-5fc9-42e0-aa39-0ffbea243ea8", "tags": [], "geometries": []}, "id": "3157323b-5fc9-42e0-aa39-0ffbea243ea8"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "774b21a1-8bd6-456f-a32d-4c452e062ab9", "subtype": "Chart"}, "id": "640c2bc0-a313-4880-ad7c-d787d5c3386c"}, "id": "640c2bc0-a313-4880-ad7c-d787d5c3386c"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "bcc3615b-93c6-446f-9149-7e139c7674a6", "tags": []}, "id": "bcc3615b-93c6-446f-9149-7e139c7674a6"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "b428e514-6438-4503-830f-c31c64c633fa"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "bcc3615b-93c6-446f-9149-7e139c7674a6"}, "plot": {"type": "Plot", "id": "774b21a1-8bd6-456f-a32d-4c452e062ab9", "subtype": "Chart"}, "axis_label": "values", "id": "cb627f1f-71a8-4abe-aa4a-c1fed747fccd"}, "id": "cb627f1f-71a8-4abe-aa4a-c1fed747fccd"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "Range1d", "id": "00669d98-7aa4-4622-b170-7f8158f64c63"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "3157323b-5fc9-42e0-aa39-0ffbea243ea8"}, "right": [], "renderers": [{"type": "CategoricalAxis", "id": "0529722c-4ab6-4ce1-9e25-fa8adc29a714"}, {"type": "LinearAxis", "id": "cb627f1f-71a8-4abe-aa4a-c1fed747fccd"}, {"type": "Grid", "id": "b43050f3-44a4-4bbe-9230-7d348ba4feb8"}, {"type": "GlyphRenderer", "id": "c0b6eff4-1513-4d31-b827-94bc57ed009e"}, {"type": "GlyphRenderer", "id": "29e03a4a-ff6c-4a22-ad35-4a2f1b948863"}], "below": [{"type": "CategoricalAxis", "id": "0529722c-4ab6-4ce1-9e25-fa8adc29a714"}], "left": [{"type": "LinearAxis", "id": "cb627f1f-71a8-4abe-aa4a-c1fed747fccd"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "title": "Bar example", "tools": [{"type": "PanTool", "id": "7ba31011-e91c-4c39-bf60-fec15b73033d"}, {"type": "WheelZoomTool", "id": "640c2bc0-a313-4880-ad7c-d787d5c3386c"}, {"type": "BoxZoomTool", "id": "48c0f02b-c296-4d37-b6d6-d2f126d02404"}, {"type": "PreviewSaveTool", "id": "caf9f69c-8b53-4853-8b71-f1714e937bc3"}, {"type": "ResizeTool", "id": "870aec28-6643-4778-a10c-ed6eea8d37da"}, {"type": "ResetTool", "id": "c3549ef9-a5b1-4ee8-afeb-6c9f0c86b660"}, {"type": "HelpTool", "id": "33db0997-6ae9-4d25-b9b5-20f68dfd66d6"}], "x_range": {"type": "FactorRange", "id": "73972dea-80fa-46b8-91a5-4dcd2d5d1cbc"}, "id": "774b21a1-8bd6-456f-a32d-4c452e062ab9"}, "id": "774b21a1-8bd6-456f-a32d-4c452e062ab9", "subtype": "Chart"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "b428e514-6438-4503-830f-c31c64c633fa"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "774b21a1-8bd6-456f-a32d-4c452e062ab9", "subtype": "Chart"}, "dimension": 1, "id": "b43050f3-44a4-4bbe-9230-7d348ba4feb8"}, "id": "b43050f3-44a4-4bbe-9230-7d348ba4feb8"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "774b21a1-8bd6-456f-a32d-4c452e062ab9", "subtype": "Chart"}, "id": "33db0997-6ae9-4d25-b9b5-20f68dfd66d6", "tags": [], "doc": null}, "id": "33db0997-6ae9-4d25-b9b5-20f68dfd66d6"}, {"type": "Rect", "attributes": {"fill_alpha": {"value": 0.7}, "line_color": {"value": "white"}, "x": {"field": "caty"}, "height": {"units": "data", "field": "y"}, "y": {"field": "midy"}, "width": {"units": "data", "field": "width_cat"}, "fill_color": {"value": "#f22c40"}, "tags": [], "doc": null, "id": "af239da0-7682-4cf3-b9c7-1a3430eba97a"}, "id": "af239da0-7682-4cf3-b9c7-1a3430eba97a"}, {"type": "CategoricalTicker", "attributes": {"doc": null, "id": "5e2c8c51-d3e1-40f5-a602-c357a835f4c3", "tags": []}, "id": "5e2c8c51-d3e1-40f5-a602-c357a835f4c3"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "774b21a1-8bd6-456f-a32d-4c452e062ab9", "subtype": "Chart"}, "id": "48c0f02b-c296-4d37-b6d6-d2f126d02404"}, "id": "48c0f02b-c296-4d37-b6d6-d2f126d02404"}, {"type": "FactorRange", "attributes": {"callback": null, "tags": [], "doc": null, "factors": ["C1", "C2", "C3", "D1", "D2"], "id": "73972dea-80fa-46b8-91a5-4dcd2d5d1cbc"}, "id": "73972dea-80fa-46b8-91a5-4dcd2d5d1cbc"}, {"type": "CategoricalAxis", "attributes": {"doc": null, "ticker": {"type": "CategoricalTicker", "id": "5e2c8c51-d3e1-40f5-a602-c357a835f4c3"}, "tags": [], "formatter": {"type": "CategoricalTickFormatter", "id": "c33f2235-1719-4abf-8138-26f5bea36e62"}, "plot": {"type": "Plot", "id": "774b21a1-8bd6-456f-a32d-4c452e062ab9", "subtype": "Chart"}, "axis_label": "categories", "id": "0529722c-4ab6-4ce1-9e25-fa8adc29a714", "major_label_orientation": 0.7853981633974483}, "id": "0529722c-4ab6-4ce1-9e25-fa8adc29a714"}, {"type": "Rect", "attributes": {"fill_alpha": {"value": 0.7}, "line_color": {"value": "white"}, "x": {"field": "catz"}, "height": {"units": "data", "field": "z"}, "y": {"field": "midz"}, "width": {"units": "data", "field": "width_cat"}, "fill_color": {"value": "#5ab738"}, "tags": [], "doc": null, "id": "d2cc2d53-0994-44aa-8681-f303828e9bd7"}, "id": "d2cc2d53-0994-44aa-8681-f303828e9bd7"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "6291f5d6-14f5-4850-9698-a28ab7657849"}, "tags": [], "glyph": {"type": "Rect", "id": "d2cc2d53-0994-44aa-8681-f303828e9bd7"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "29e03a4a-ff6c-4a22-ad35-4a2f1b948863"}, "id": "29e03a4a-ff6c-4a22-ad35-4a2f1b948863"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "774b21a1-8bd6-456f-a32d-4c452e062ab9", "subtype": "Chart"}, "id": "870aec28-6643-4778-a10c-ed6eea8d37da", "tags": [], "doc": null}, "id": "870aec28-6643-4778-a10c-ed6eea8d37da"}, {"type": "CategoricalTickFormatter", "attributes": {"doc": null, "id": "c33f2235-1719-4abf-8138-26f5bea36e62", "tags": []}, "id": "c33f2235-1719-4abf-8138-26f5bea36e62"}, {"type": "Range1d", "attributes": {"callback": null, "id": "00669d98-7aa4-4622-b170-7f8158f64c63", "tags": [], "doc": null, "end": 13.200000000000001, "start": 0}, "id": "00669d98-7aa4-4622-b170-7f8158f64c63"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "6291f5d6-14f5-4850-9698-a28ab7657849"}, "tags": [], "glyph": {"type": "Rect", "id": "af239da0-7682-4cf3-b9c7-1a3430eba97a"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "c0b6eff4-1513-4d31-b827-94bc57ed009e"}, "id": "c0b6eff4-1513-4d31-b827-94bc57ed009e"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "b428e514-6438-4503-830f-c31c64c633fa", "tags": []}, "id": "b428e514-6438-4503-830f-c31c64c633fa"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [6, 7, 2, 4, 5], "width_cat": [0.2, 0.2, 0.2, 0.2, 0.2], "caty": ["C1:0.333333333333", "C2:0.333333333333", "C3:0.333333333333", "D1:0.333333333333", "D2:0.333333333333"], "catz": ["C1:0.666666666667", "C2:0.666666666667", "C3:0.666666666667", "D1:0.666666666667", "D2:0.666666666667"], "z": [1, 5, 12, 4, 2], "stackedy": [3.0, 3.5, 1.0, 2.0, 2.5], "zero": [7.0, 12.0, 14.0, 8.0, 7.0], "stackedz": [6.5, 9.5, 8.0, 6.0, 6.0], "width": [0.8, 0.8, 0.8, 0.8, 0.8], "cat": ["C1", "C2", "C3", "D1", "D2"], "midy": [3.0, 3.5, 1.0, 2.0, 2.5], "midz": [0.5, 2.5, 6.0, 2.0, 1.0]}, "doc": null, "id": "6291f5d6-14f5-4850-9698-a28ab7657849", "column_names": ["y", "width_cat", "caty", "catz", "z", "stackedy", "zero", "stackedz", "width", "cat", "midy", "midz"]}, "id": "6291f5d6-14f5-4850-9698-a28ab7657849"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "774b21a1-8bd6-456f-a32d-4c452e062ab9", "subtype": "Chart"}, "id": "caf9f69c-8b53-4853-8b71-f1714e937bc3", "tags": [], "doc": null}, "id": "caf9f69c-8b53-4853-8b71-f1714e937bc3"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("7cd3b57b-e82a-440e-b8b9-5b7f9f5ad18b", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("7cd3b57b-e82a-440e-b8b9-5b7f9f5ad18b", all_models);
    });
  }

}(this));