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

  var elt = document.getElementById("92ced41f-1226-432c-8dd1-519665895d19");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '92ced41f-1226-432c-8dd1-519665895d19' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "f002070e-d89c-44fd-a78e-7fd43361d262"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "b4e5e026-1063-453a-8b10-304d6619a429"}, "plot": {"type": "Plot", "id": "fd5f0cfa-76da-40fd-90ae-7c1ff70b4083", "subtype": "Figure"}, "id": "bfc844a6-c5e2-4eb2-b08e-ffaa7757d03b"}, "id": "bfc844a6-c5e2-4eb2-b08e-ffaa7757d03b"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "fa92416e-3f67-4b52-8e73-076d609e23a7"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "d410338a-0bff-45a4-894d-350068a3e10b"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "bfc844a6-c5e2-4eb2-b08e-ffaa7757d03b"}, {"type": "Grid", "id": "0313dd71-757e-4141-9942-35b07f671546"}, {"type": "LinearAxis", "id": "54aa3751-42e2-4a20-a436-8f6a2eba72f1"}, {"type": "Grid", "id": "db235ff4-565c-47a3-83fb-f42e8b98de24"}, {"type": "GlyphRenderer", "id": "da4caf77-757f-49e7-b7ca-736004afc3c9"}], "below": [{"type": "LinearAxis", "id": "bfc844a6-c5e2-4eb2-b08e-ffaa7757d03b"}], "left": [{"type": "LinearAxis", "id": "54aa3751-42e2-4a20-a436-8f6a2eba72f1"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "title": "Mouse over the dots", "tools": [{"type": "HoverTool", "id": "5c0dc286-2627-43c9-9660-b294ba21588b"}], "x_range": {"type": "DataRange1d", "id": "5a7f5aec-7493-4cd6-a8b3-a2aff36d9dc4"}, "id": "fd5f0cfa-76da-40fd-90ae-7c1ff70b4083"}, "id": "fd5f0cfa-76da-40fd-90ae-7c1ff70b4083", "subtype": "Figure"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 0.1}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 20}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "93ac1a8a-add8-461d-993e-a4c1beefdb34"}, "id": "93ac1a8a-add8-461d-993e-a4c1beefdb34"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "fa92416e-3f67-4b52-8e73-076d609e23a7", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "fa92416e-3f67-4b52-8e73-076d609e23a7"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5], "desc": ["A", "b", "C", "d", "E"]}, "doc": null, "id": "6e6b1e16-d598-42cd-8d46-c9b5d7231f07", "column_names": ["y", "x", "desc"]}, "id": "6e6b1e16-d598-42cd-8d46-c9b5d7231f07"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "d410338a-0bff-45a4-894d-350068a3e10b", "tags": [], "geometries": []}, "id": "d410338a-0bff-45a4-894d-350068a3e10b"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "f4e90c9a-f61c-41ad-a049-66130b3c2704"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "28ed73ef-8d2b-40b9-92ee-626820423502"}, "plot": {"type": "Plot", "id": "fd5f0cfa-76da-40fd-90ae-7c1ff70b4083", "subtype": "Figure"}, "id": "54aa3751-42e2-4a20-a436-8f6a2eba72f1"}, "id": "54aa3751-42e2-4a20-a436-8f6a2eba72f1"}, {"type": "HoverTool", "attributes": {"tooltips": [["index", "$index"], ["(x,y)", "($x, $y)"], ["desc", "@desc"]], "id": "5c0dc286-2627-43c9-9660-b294ba21588b", "tags": [], "doc": null, "plot": {"type": "Plot", "id": "fd5f0cfa-76da-40fd-90ae-7c1ff70b4083", "subtype": "Figure"}, "renderers": [], "callback": null, "names": []}, "id": "5c0dc286-2627-43c9-9660-b294ba21588b"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "f002070e-d89c-44fd-a78e-7fd43361d262"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "fd5f0cfa-76da-40fd-90ae-7c1ff70b4083", "subtype": "Figure"}, "dimension": 0, "id": "0313dd71-757e-4141-9942-35b07f671546"}, "id": "0313dd71-757e-4141-9942-35b07f671546"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "f4e90c9a-f61c-41ad-a049-66130b3c2704"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "fd5f0cfa-76da-40fd-90ae-7c1ff70b4083", "subtype": "Figure"}, "dimension": 1, "id": "db235ff4-565c-47a3-83fb-f42e8b98de24"}, "id": "db235ff4-565c-47a3-83fb-f42e8b98de24"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "6e6b1e16-d598-42cd-8d46-c9b5d7231f07"}, "tags": [], "glyph": {"type": "Circle", "id": "44746964-53fd-456d-bad0-0c6d1c6e1217"}, "doc": null, "nonselection_glyph": {"type": "Circle", "id": "93ac1a8a-add8-461d-993e-a4c1beefdb34"}, "selection_glyph": null, "id": "da4caf77-757f-49e7-b7ca-736004afc3c9"}, "id": "da4caf77-757f-49e7-b7ca-736004afc3c9"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 1.0}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 20}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "44746964-53fd-456d-bad0-0c6d1c6e1217"}, "id": "44746964-53fd-456d-bad0-0c6d1c6e1217"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "b4e5e026-1063-453a-8b10-304d6619a429", "tags": []}, "id": "b4e5e026-1063-453a-8b10-304d6619a429"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "f002070e-d89c-44fd-a78e-7fd43361d262"}, "id": "f002070e-d89c-44fd-a78e-7fd43361d262"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "28ed73ef-8d2b-40b9-92ee-626820423502", "tags": []}, "id": "28ed73ef-8d2b-40b9-92ee-626820423502"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "5a7f5aec-7493-4cd6-a8b3-a2aff36d9dc4", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "5a7f5aec-7493-4cd6-a8b3-a2aff36d9dc4"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "f4e90c9a-f61c-41ad-a049-66130b3c2704"}, "id": "f4e90c9a-f61c-41ad-a049-66130b3c2704"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("92ced41f-1226-432c-8dd1-519665895d19", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("92ced41f-1226-432c-8dd1-519665895d19", all_models);
    });
  }

}(this));