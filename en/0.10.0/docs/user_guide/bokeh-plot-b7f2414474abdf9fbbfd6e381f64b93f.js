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

  var elt = document.getElementById("fce00829-429f-4161-be53-f68436bab6e0");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'fce00829-429f-4161-be53-f68436bab6e0' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "97ac42c8-d8ba-45da-9834-de74f7a65f22", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "97ac42c8-d8ba-45da-9834-de74f7a65f22"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eadf0de7-89ef-42fe-8b62-2208f9594d9f"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "97ac42c8-d8ba-45da-9834-de74f7a65f22"}, "id": "de4354f9-0d8b-438e-ad63-2c262875666c"}, "type": "Grid", "id": "de4354f9-0d8b-438e-ad63-2c262875666c"}, {"attributes": {"doc": null, "id": "8b70d96e-efeb-4d9f-95db-8354a19f55b5", "tags": []}, "type": "BasicTickFormatter", "id": "8b70d96e-efeb-4d9f-95db-8354a19f55b5"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eadf0de7-89ef-42fe-8b62-2208f9594d9f"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "be12862e-a87f-4777-bdc9-236f9491b2d2"}, "id": "3f8813aa-e553-4a7a-980a-2da1c89b2f55"}, "type": "Grid", "id": "3f8813aa-e553-4a7a-980a-2da1c89b2f55"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eadf0de7-89ef-42fe-8b62-2208f9594d9f"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "renderers": [], "callback": {"type": "CustomJS", "id": "cbb5a94a-e118-478c-a699-935b309605d8"}, "names": [], "id": "219d772f-5d35-40db-b2ff-c3b6de0ee693"}, "type": "BoxSelectTool", "id": "219d772f-5d35-40db-b2ff-c3b6de0ee693"}, {"attributes": {"end": 1.0, "callback": null, "doc": null, "tags": [], "start": 0.0, "id": "f0fc7b39-6c29-4729-9f71-412671e272f5"}, "type": "Range1d", "id": "f0fc7b39-6c29-4729-9f71-412671e272f5"}, {"attributes": {"end": 1.0, "callback": null, "doc": null, "tags": [], "start": 0.0, "id": "7bfadaf0-b5ca-4e91-881e-b5cd0be0d840"}, "type": "Range1d", "id": "7bfadaf0-b5ca-4e91-881e-b5cd0be0d840"}, {"attributes": {"doc": null, "id": "7daaa830-1db0-40bd-9643-614ff37b34f3", "tags": []}, "type": "BasicTickFormatter", "id": "7daaa830-1db0-40bd-9643-614ff37b34f3"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "bb43d37f-79ce-4b3a-946b-fbfef0e1eecd"}, "type": "ToolEvents", "id": "bb43d37f-79ce-4b3a-946b-fbfef0e1eecd"}, {"attributes": {"column_names": ["y", "width", "height", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [], "width": [], "height": [], "x": []}, "id": "b04ac4ae-0244-4868-9460-bb1e357f8e10"}, "type": "ColumnDataSource", "id": "b04ac4ae-0244-4868-9460-bb1e357f8e10"}, {"attributes": {"fill_color": {"value": "#009933"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.3}, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "a1f6004b-4cfd-4505-a87a-680243885f39"}, "type": "Rect", "id": "a1f6004b-4cfd-4505-a87a-680243885f39"}, {"attributes": {"nonselection_glyph": {"type": "Rect", "id": "a1f6004b-4cfd-4505-a87a-680243885f39"}, "data_source": {"type": "ColumnDataSource", "id": "b04ac4ae-0244-4868-9460-bb1e357f8e10"}, "tags": [], "doc": null, "selection_glyph": {"type": "Rect", "id": "a1f6004b-4cfd-4505-a87a-680243885f39"}, "id": "334b2ce0-07cb-4716-89a1-c125641c1278", "glyph": {"type": "Rect", "id": "a1f6004b-4cfd-4505-a87a-680243885f39"}}, "type": "GlyphRenderer", "id": "334b2ce0-07cb-4716-89a1-c125641c1278"}, {"attributes": {"code": "\n        // get data source from Callback args\n        var data = source.get('data');\n\n        /// get BoxSelectTool dimensions from cb_data parameter of Callback\n        var geometry = cb_data['geometry'];\n\n        /// calculate Rect attributes\n        var width = geometry['x1'] - geometry['x0'];\n        var height = geometry['y1'] - geometry['y0'];\n        var x = geometry['x0'] + width/2;\n        var y = geometry['y0'] + height/2;\n\n        /// update data source with new Rect attributes\n        data['x'].push(x);\n        data['y'].push(y);\n        data['width'].push(width);\n        data['height'].push(height);\n\n        // trigger update of data source\n        source.trigger('change');\n    ", "tags": [], "doc": null, "args": {"source": {"type": "ColumnDataSource", "id": "b04ac4ae-0244-4868-9460-bb1e357f8e10"}}, "id": "cbb5a94a-e118-478c-a699-935b309605d8"}, "type": "CustomJS", "id": "cbb5a94a-e118-478c-a699-935b309605d8"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "be12862e-a87f-4777-bdc9-236f9491b2d2", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "be12862e-a87f-4777-bdc9-236f9491b2d2"}, {"subtype": "Figure", "type": "Plot", "id": "eadf0de7-89ef-42fe-8b62-2208f9594d9f", "attributes": {"x_range": {"type": "Range1d", "id": "f0fc7b39-6c29-4729-9f71-412671e272f5"}, "right": [], "tags": [], "tools": [{"type": "BoxSelectTool", "id": "219d772f-5d35-40db-b2ff-c3b6de0ee693"}], "title": "Select Below", "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "da839ccd-49f2-4c20-86b1-34eee53fc9a5"}, {"type": "Grid", "id": "de4354f9-0d8b-438e-ad63-2c262875666c"}, {"type": "LinearAxis", "id": "6f03683d-9728-4dcc-aed7-3c6005e60f6f"}, {"type": "Grid", "id": "3f8813aa-e553-4a7a-980a-2da1c89b2f55"}, {"type": "GlyphRenderer", "id": "334b2ce0-07cb-4716-89a1-c125641c1278"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "bb43d37f-79ce-4b3a-946b-fbfef0e1eecd"}, "above": [], "doc": null, "id": "eadf0de7-89ef-42fe-8b62-2208f9594d9f", "y_range": {"type": "Range1d", "id": "7bfadaf0-b5ca-4e91-881e-b5cd0be0d840"}, "below": [{"type": "LinearAxis", "id": "da839ccd-49f2-4c20-86b1-34eee53fc9a5"}], "left": [{"type": "LinearAxis", "id": "6f03683d-9728-4dcc-aed7-3c6005e60f6f"}]}}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eadf0de7-89ef-42fe-8b62-2208f9594d9f"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "8b70d96e-efeb-4d9f-95db-8354a19f55b5"}, "ticker": {"type": "BasicTicker", "id": "be12862e-a87f-4777-bdc9-236f9491b2d2"}, "id": "6f03683d-9728-4dcc-aed7-3c6005e60f6f"}, "type": "LinearAxis", "id": "6f03683d-9728-4dcc-aed7-3c6005e60f6f"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "eadf0de7-89ef-42fe-8b62-2208f9594d9f"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "7daaa830-1db0-40bd-9643-614ff37b34f3"}, "ticker": {"type": "BasicTicker", "id": "97ac42c8-d8ba-45da-9834-de74f7a65f22"}, "id": "da839ccd-49f2-4c20-86b1-34eee53fc9a5"}, "type": "LinearAxis", "id": "da839ccd-49f2-4c20-86b1-34eee53fc9a5"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("fce00829-429f-4161-be53-f68436bab6e0", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("fce00829-429f-4161-be53-f68436bab6e0", all_models);
    });
  }

}(this));