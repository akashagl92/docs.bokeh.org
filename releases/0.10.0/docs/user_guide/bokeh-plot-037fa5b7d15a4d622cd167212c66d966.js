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

  var elt = document.getElementById("bdf7bcc8-6d4f-4eca-9183-96eff7a1d695");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'bdf7bcc8-6d4f-4eca-9183-96eff7a1d695' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tooltips": [["index", "$index"], ["(x,y)", "($x, $y)"], ["desc", "@desc"]], "plot": {"subtype": "Figure", "type": "Plot", "id": "cac9e708-e843-44a7-a35f-917e2be959cb"}, "tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "e3fe0c97-358a-4adb-9b55-68408287710d"}, "type": "HoverTool", "id": "e3fe0c97-358a-4adb-9b55-68408287710d"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "2d235d60-941c-43ff-bb88-d2f4d7e3efa0"}, "data_source": {"type": "ColumnDataSource", "id": "cff82cd1-90bf-4194-bb5c-9a5430f7a545"}, "tags": [], "doc": null, "selection_glyph": null, "id": "bef593b4-2302-42da-bb24-3176d250695a", "glyph": {"type": "Circle", "id": "7df53438-7eaa-4b3a-8fcd-2c243fba91c1"}}, "type": "GlyphRenderer", "id": "bef593b4-2302-42da-bb24-3176d250695a"}, {"subtype": "Figure", "type": "Plot", "id": "cac9e708-e843-44a7-a35f-917e2be959cb", "attributes": {"x_range": {"type": "DataRange1d", "id": "696e8079-4a0f-4d74-b754-569cbe66e8e6"}, "right": [], "tags": [], "tools": [{"type": "HoverTool", "id": "e3fe0c97-358a-4adb-9b55-68408287710d"}], "title": "Mouse over the dots", "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "904ba0b3-9893-490a-a598-9b51f7a4bf4d"}, {"type": "Grid", "id": "f7bcd657-7e60-47cd-ac09-b5c67b9fe972"}, {"type": "LinearAxis", "id": "d51cb075-6916-4441-ac7f-eea52c6bfcdf"}, {"type": "Grid", "id": "8cd3a802-1bd0-440e-9326-ced822bf7085"}, {"type": "GlyphRenderer", "id": "bef593b4-2302-42da-bb24-3176d250695a"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "358fcd49-b165-4f61-a08c-361de6949f5c"}, "above": [], "doc": null, "id": "cac9e708-e843-44a7-a35f-917e2be959cb", "y_range": {"type": "DataRange1d", "id": "c56e3eca-52db-4323-812c-4186d1110589"}, "below": [{"type": "LinearAxis", "id": "904ba0b3-9893-490a-a598-9b51f7a4bf4d"}], "left": [{"type": "LinearAxis", "id": "d51cb075-6916-4441-ac7f-eea52c6bfcdf"}]}}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cac9e708-e843-44a7-a35f-917e2be959cb"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "2ccf2154-77ed-4d15-b661-ab0a528ac892"}, "id": "f7bcd657-7e60-47cd-ac09-b5c67b9fe972"}, "type": "Grid", "id": "f7bcd657-7e60-47cd-ac09-b5c67b9fe972"}, {"attributes": {"doc": null, "id": "3a762f07-6f3c-4972-8196-59bdfab7dfd1", "tags": []}, "type": "BasicTickFormatter", "id": "3a762f07-6f3c-4972-8196-59bdfab7dfd1"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cac9e708-e843-44a7-a35f-917e2be959cb"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "b3f7d17a-be36-456c-8395-73227ba5a7f7"}, "id": "8cd3a802-1bd0-440e-9326-ced822bf7085"}, "type": "Grid", "id": "8cd3a802-1bd0-440e-9326-ced822bf7085"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "7df53438-7eaa-4b3a-8fcd-2c243fba91c1", "size": {"units": "screen", "value": 20}}, "type": "Circle", "id": "7df53438-7eaa-4b3a-8fcd-2c243fba91c1"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cac9e708-e843-44a7-a35f-917e2be959cb"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "3a762f07-6f3c-4972-8196-59bdfab7dfd1"}, "ticker": {"type": "BasicTicker", "id": "b3f7d17a-be36-456c-8395-73227ba5a7f7"}, "id": "d51cb075-6916-4441-ac7f-eea52c6bfcdf"}, "type": "LinearAxis", "id": "d51cb075-6916-4441-ac7f-eea52c6bfcdf"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "2d235d60-941c-43ff-bb88-d2f4d7e3efa0", "size": {"units": "screen", "value": 20}}, "type": "Circle", "id": "2d235d60-941c-43ff-bb88-d2f4d7e3efa0"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "2ccf2154-77ed-4d15-b661-ab0a528ac892", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "2ccf2154-77ed-4d15-b661-ab0a528ac892"}, {"attributes": {"column_names": ["y", "x", "desc"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5], "desc": ["A", "b", "C", "d", "E"]}, "id": "cff82cd1-90bf-4194-bb5c-9a5430f7a545"}, "type": "ColumnDataSource", "id": "cff82cd1-90bf-4194-bb5c-9a5430f7a545"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "b3f7d17a-be36-456c-8395-73227ba5a7f7", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "b3f7d17a-be36-456c-8395-73227ba5a7f7"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "358fcd49-b165-4f61-a08c-361de6949f5c"}, "type": "ToolEvents", "id": "358fcd49-b165-4f61-a08c-361de6949f5c"}, {"attributes": {"doc": null, "id": "4f894135-dff4-40b6-9ca5-67a41c7b0959", "tags": []}, "type": "BasicTickFormatter", "id": "4f894135-dff4-40b6-9ca5-67a41c7b0959"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "c56e3eca-52db-4323-812c-4186d1110589"}, "type": "DataRange1d", "id": "c56e3eca-52db-4323-812c-4186d1110589"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cac9e708-e843-44a7-a35f-917e2be959cb"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "4f894135-dff4-40b6-9ca5-67a41c7b0959"}, "ticker": {"type": "BasicTicker", "id": "2ccf2154-77ed-4d15-b661-ab0a528ac892"}, "id": "904ba0b3-9893-490a-a598-9b51f7a4bf4d"}, "type": "LinearAxis", "id": "904ba0b3-9893-490a-a598-9b51f7a4bf4d"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "696e8079-4a0f-4d74-b754-569cbe66e8e6"}, "type": "DataRange1d", "id": "696e8079-4a0f-4d74-b754-569cbe66e8e6"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("bdf7bcc8-6d4f-4eca-9183-96eff7a1d695", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("bdf7bcc8-6d4f-4eca-9183-96eff7a1d695", all_models);
    });
  }

}(this));