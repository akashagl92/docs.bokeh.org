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

  var elt = document.getElementById("1725a9f9-3e6b-483a-8d47-efda62fe66df");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1725a9f9-3e6b-483a-8d47-efda62fe66df' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "f77a63c6-f2ee-4cc9-9cdc-4281c397df6e"}, "tags": [], "doc": null, "selection_glyph": null, "id": "50bbe510-3d2c-4efa-bf59-05dfb0de7ce2", "glyph": {"type": "Patches", "id": "eaaa3566-7565-4cd6-b03b-d84f1ca9093a"}}, "type": "GlyphRenderer", "id": "50bbe510-3d2c-4efa-bf59-05dfb0de7ce2"}, {"attributes": {"plot": {"type": "Plot", "id": "1ed71716-aea0-4aa1-8153-b09d89db9486"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "535fc2b6-0d83-4dfe-8f73-a0dc21be87a2"}, "ticker": {"type": "BasicTicker", "id": "903db756-6933-48bb-9391-4243bfc25fbd"}, "id": "2fbce92f-900d-4da8-bf35-1114a6db7d60"}, "type": "LinearAxis", "id": "2fbce92f-900d-4da8-bf35-1114a6db7d60"}, {"attributes": {"doc": null, "id": "efd90dcc-4b2f-47be-8200-dd5b7c7f5a7b", "tags": []}, "type": "BasicTickFormatter", "id": "efd90dcc-4b2f-47be-8200-dd5b7c7f5a7b"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "c0958e96-8530-4501-a0fb-30ea27774d20"}, "type": "DataRange1d", "id": "c0958e96-8530-4501-a0fb-30ea27774d20"}, {"attributes": {"plot": {"type": "Plot", "id": "1ed71716-aea0-4aa1-8153-b09d89db9486"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "2b889831-8c3d-489f-a28d-19df5a28e6db"}, "id": "87d75288-2252-4279-873e-f805dba55eaf"}, "type": "Grid", "id": "87d75288-2252-4279-873e-f805dba55eaf"}, {"attributes": {"plot": {"type": "Plot", "id": "1ed71716-aea0-4aa1-8153-b09d89db9486"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "efd90dcc-4b2f-47be-8200-dd5b7c7f5a7b"}, "ticker": {"type": "BasicTicker", "id": "2b889831-8c3d-489f-a28d-19df5a28e6db"}, "id": "026775a2-4b4b-468b-8f9e-0b26796483d0"}, "type": "LinearAxis", "id": "026775a2-4b4b-468b-8f9e-0b26796483d0"}, {"attributes": {"fill_color": {"value": "#fb9a99"}, "tags": [], "doc": null, "xs": {"field": "xs"}, "ys": {"field": "ys"}, "id": "eaaa3566-7565-4cd6-b03b-d84f1ca9093a"}, "type": "Patches", "id": "eaaa3566-7565-4cd6-b03b-d84f1ca9093a"}, {"attributes": {"column_names": ["xs", "ys"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"xs": [[-2.09, -2.12, -2.0, -1.88, -1.91], [-1.599, -1.6320000000000001, -1.5, -1.3679999999999999, -1.401], [-1.108, -1.144, -1.0, -0.856, -0.892], [-0.617, -0.656, -0.5, -0.344, -0.383], [-0.126, -0.16799999999999998, 0.0, 0.16799999999999998, 0.126], [0.365, 0.32, 0.5, 0.6799999999999999, 0.635], [0.856, 0.808, 1.0, 1.192, 1.144], [1.347, 1.296, 1.5, 1.704, 1.653], [1.838, 1.784, 2.0, 2.216, 2.162]], "ys": [[3.9, 4.02, 4.1, 4.02, 3.9], [2.14, 2.272, 2.36, 2.272, 2.14], [0.88, 1.024, 1.12, 1.024, 0.88], [0.12, 0.276, 0.38, 0.276, 0.12], [-0.13999999999999999, 0.027999999999999997, 0.13999999999999999, 0.027999999999999997, -0.13999999999999999], [0.09999999999999998, 0.28, 0.4, 0.28, 0.09999999999999998], [0.84, 1.032, 1.1600000000000001, 1.032, 0.84], [2.08, 2.284, 2.42, 2.284, 2.08], [3.82, 4.036, 4.18, 4.036, 3.82]]}, "id": "f77a63c6-f2ee-4cc9-9cdc-4281c397df6e"}, "type": "ColumnDataSource", "id": "f77a63c6-f2ee-4cc9-9cdc-4281c397df6e"}, {"attributes": {"plot": {"type": "Plot", "id": "1ed71716-aea0-4aa1-8153-b09d89db9486"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "903db756-6933-48bb-9391-4243bfc25fbd"}, "id": "2dc8e8c5-4ed9-4631-b055-7b4037c3516f"}, "type": "Grid", "id": "2dc8e8c5-4ed9-4631-b055-7b4037c3516f"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "a07f3789-316f-4b14-bdd9-8198b9c0cfc2"}, "type": "DataRange1d", "id": "a07f3789-316f-4b14-bdd9-8198b9c0cfc2"}, {"attributes": {"doc": null, "id": "535fc2b6-0d83-4dfe-8f73-a0dc21be87a2", "tags": []}, "type": "BasicTickFormatter", "id": "535fc2b6-0d83-4dfe-8f73-a0dc21be87a2"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "ae1bff80-58e1-4fda-93a1-8a48b9d1e195"}, "type": "ToolEvents", "id": "ae1bff80-58e1-4fda-93a1-8a48b9d1e195"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "903db756-6933-48bb-9391-4243bfc25fbd"}, "type": "BasicTicker", "id": "903db756-6933-48bb-9391-4243bfc25fbd"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "a07f3789-316f-4b14-bdd9-8198b9c0cfc2"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "50bbe510-3d2c-4efa-bf59-05dfb0de7ce2"}, {"type": "LinearAxis", "id": "026775a2-4b4b-468b-8f9e-0b26796483d0"}, {"type": "LinearAxis", "id": "2fbce92f-900d-4da8-bf35-1114a6db7d60"}, {"type": "Grid", "id": "87d75288-2252-4279-873e-f805dba55eaf"}, {"type": "Grid", "id": "2dc8e8c5-4ed9-4631-b055-7b4037c3516f"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "ae1bff80-58e1-4fda-93a1-8a48b9d1e195"}, "h_symmetry": false, "tools": [], "id": "1ed71716-aea0-4aa1-8153-b09d89db9486", "title": null, "y_range": {"type": "DataRange1d", "id": "c0958e96-8530-4501-a0fb-30ea27774d20"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "026775a2-4b4b-468b-8f9e-0b26796483d0"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "2fbce92f-900d-4da8-bf35-1114a6db7d60"}]}, "type": "Plot", "id": "1ed71716-aea0-4aa1-8153-b09d89db9486"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "2b889831-8c3d-489f-a28d-19df5a28e6db"}, "type": "BasicTicker", "id": "2b889831-8c3d-489f-a28d-19df5a28e6db"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("1725a9f9-3e6b-483a-8d47-efda62fe66df", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("1725a9f9-3e6b-483a-8d47-efda62fe66df", all_models);
    });
  }

}(this));