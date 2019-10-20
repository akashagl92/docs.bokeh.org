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

  var elt = document.getElementById("b34f928a-0f29-4c76-a5be-4f645cac7155");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b34f928a-0f29-4c76-a5be-4f645cac7155' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "12223470-bda9-4bef-8b98-94461090ec00", "tags": []}, "id": "12223470-bda9-4bef-8b98-94461090ec00"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "b61580e5-5ed4-41fd-9d49-2973fa4f8619"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "5e1c8334-7e72-4298-aa33-9f63fa3d834e"}, "plot": {"type": "Plot", "id": "b9b513a5-656b-4470-9f33-f75241d5749a"}, "id": "981432de-3dc3-40bf-9803-69da9425447e"}, "id": "981432de-3dc3-40bf-9803-69da9425447e"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "61798fad-f87a-43b8-b83b-e8d00dbd528a", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "61798fad-f87a-43b8-b83b-e8d00dbd528a"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "doc": null, "id": "752486b5-2933-4f75-a2f5-a1dff14278f8", "column_names": ["y", "x", "sizes"]}, "id": "752486b5-2933-4f75-a2f5-a1dff14278f8"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "bf294306-3e8c-48ab-98c7-d415f6955522", "tags": []}, "id": "bf294306-3e8c-48ab-98c7-d415f6955522"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "12223470-bda9-4bef-8b98-94461090ec00"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "bf294306-3e8c-48ab-98c7-d415f6955522"}, "plot": {"type": "Plot", "id": "b9b513a5-656b-4470-9f33-f75241d5749a"}, "id": "e0325000-f00e-4360-ac34-ffd2299f81fb"}, "id": "e0325000-f00e-4360-ac34-ffd2299f81fb"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "5e1c8334-7e72-4298-aa33-9f63fa3d834e", "tags": []}, "id": "5e1c8334-7e72-4298-aa33-9f63fa3d834e"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "7198ad98-4225-4cf5-8913-91a9c9ed1619", "tags": [], "geometries": []}, "id": "7198ad98-4225-4cf5-8913-91a9c9ed1619"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "752486b5-2933-4f75-a2f5-a1dff14278f8"}, "tags": [], "glyph": {"type": "SquareX", "id": "232bb0a2-dd53-4200-96cb-37694b26af16"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "54a64ce8-e40c-405f-a4c1-7131fb82bcbe"}, "id": "54a64ce8-e40c-405f-a4c1-7131fb82bcbe"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "b61580e5-5ed4-41fd-9d49-2973fa4f8619"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "b9b513a5-656b-4470-9f33-f75241d5749a"}, "dimension": 0, "id": "fd3d1c34-adbe-4a2f-ba56-8ee6ec29a576"}, "id": "fd3d1c34-adbe-4a2f-ba56-8ee6ec29a576"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "12223470-bda9-4bef-8b98-94461090ec00"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "b9b513a5-656b-4470-9f33-f75241d5749a"}, "dimension": 1, "id": "3bc5fd73-225b-4e2a-acf0-d0ebcf887f66"}, "id": "3bc5fd73-225b-4e2a-acf0-d0ebcf887f66"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "6d7ddc92-2df1-4c03-87ec-46452434543c", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "6d7ddc92-2df1-4c03-87ec-46452434543c"}, {"type": "SquareX", "attributes": {"y": {"field": "y"}, "fill_color": null, "size": {"units": "screen", "field": "sizes"}, "line_width": {"value": 2}, "line_color": {"value": "#fdae6b"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "232bb0a2-dd53-4200-96cb-37694b26af16"}, "id": "232bb0a2-dd53-4200-96cb-37694b26af16"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "b61580e5-5ed4-41fd-9d49-2973fa4f8619", "tags": []}, "id": "b61580e5-5ed4-41fd-9d49-2973fa4f8619"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "e0325000-f00e-4360-ac34-ffd2299f81fb"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "61798fad-f87a-43b8-b83b-e8d00dbd528a"}, "id": "b9b513a5-656b-4470-9f33-f75241d5749a", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "6d7ddc92-2df1-4c03-87ec-46452434543c"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "7198ad98-4225-4cf5-8913-91a9c9ed1619"}, "renderers": [{"type": "GlyphRenderer", "id": "54a64ce8-e40c-405f-a4c1-7131fb82bcbe"}, {"type": "LinearAxis", "id": "981432de-3dc3-40bf-9803-69da9425447e"}, {"type": "LinearAxis", "id": "e0325000-f00e-4360-ac34-ffd2299f81fb"}, {"type": "Grid", "id": "fd3d1c34-adbe-4a2f-ba56-8ee6ec29a576"}, {"type": "Grid", "id": "3bc5fd73-225b-4e2a-acf0-d0ebcf887f66"}], "below": [{"type": "LinearAxis", "id": "981432de-3dc3-40bf-9803-69da9425447e"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "b9b513a5-656b-4470-9f33-f75241d5749a"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("b34f928a-0f29-4c76-a5be-4f645cac7155", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("b34f928a-0f29-4c76-a5be-4f645cac7155", all_models);
    });
  }

}(this));