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

  var elt = document.getElementById("0e637e69-22af-4386-a250-9152841f280c");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0e637e69-22af-4386-a250-9152841f280c' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "77d0272e-60a8-4fe2-ac4e-60c3b24bface", "tags": []}, "id": "77d0272e-60a8-4fe2-ac4e-60c3b24bface"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "96659bf8-bf97-4c61-aea9-59cb6b6d55ab"}, "id": "96659bf8-bf97-4c61-aea9-59cb6b6d55ab"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "f076b1ae-7b3c-42f2-b4e8-50dd1453a792", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "f076b1ae-7b3c-42f2-b4e8-50dd1453a792"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "e715c9ac-5ec2-43a0-8755-07b47c9c1a99"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "43ec6780-2cce-4fa6-9ded-0d39b326fbd7"}, "plot": {"type": "Plot", "id": "450e7aa7-b7ca-46de-b26b-6b63e5cf9dd5", "subtype": "Figure"}, "id": "c303034a-989f-42c3-bb46-0587852cb65c"}, "id": "c303034a-989f-42c3-bb46-0587852cb65c"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5]}, "doc": null, "id": "ccc39ad2-545e-49be-9ffa-c6ae44fc5b14", "column_names": ["y", "x"]}, "id": "ccc39ad2-545e-49be-9ffa-c6ae44fc5b14"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 0.1}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 10}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "3e1960cf-237c-422a-a7f9-4831f4f22d32"}, "id": "3e1960cf-237c-422a-a7f9-4831f4f22d32"}, {"type": "BoxSelectTool", "attributes": {"callback": null, "dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "450e7aa7-b7ca-46de-b26b-6b63e5cf9dd5", "subtype": "Figure"}, "id": "ecb19a0d-08d9-427b-a164-d81c1866fec2", "names": [], "renderers": [{"type": "GlyphRenderer", "id": "56fa2068-4063-419c-86ac-0c62cb379412"}]}, "id": "ecb19a0d-08d9-427b-a164-d81c1866fec2"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "e715c9ac-5ec2-43a0-8755-07b47c9c1a99"}, "id": "e715c9ac-5ec2-43a0-8755-07b47c9c1a99"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "43ec6780-2cce-4fa6-9ded-0d39b326fbd7", "tags": []}, "id": "43ec6780-2cce-4fa6-9ded-0d39b326fbd7"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "96659bf8-bf97-4c61-aea9-59cb6b6d55ab"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "77d0272e-60a8-4fe2-ac4e-60c3b24bface"}, "plot": {"type": "Plot", "id": "450e7aa7-b7ca-46de-b26b-6b63e5cf9dd5", "subtype": "Figure"}, "id": "17cdffcf-9d0a-438c-a3fd-803474b97d8a"}, "id": "17cdffcf-9d0a-438c-a3fd-803474b97d8a"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "96659bf8-bf97-4c61-aea9-59cb6b6d55ab"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "450e7aa7-b7ca-46de-b26b-6b63e5cf9dd5", "subtype": "Figure"}, "dimension": 0, "id": "c4509ab1-7534-47c8-8071-6f7776f97c12"}, "id": "c4509ab1-7534-47c8-8071-6f7776f97c12"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "986dad90-a6b7-4d64-8f60-a21fdccfcc42", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "986dad90-a6b7-4d64-8f60-a21fdccfcc42"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "ccc39ad2-545e-49be-9ffa-c6ae44fc5b14"}, "tags": [], "glyph": {"type": "Circle", "id": "cf89398b-b4a8-4055-b8e5-c97cee6da2f1"}, "doc": null, "nonselection_glyph": {"type": "Circle", "id": "3e1960cf-237c-422a-a7f9-4831f4f22d32"}, "selection_glyph": null, "id": "56fa2068-4063-419c-86ac-0c62cb379412"}, "id": "56fa2068-4063-419c-86ac-0c62cb379412"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "f076b1ae-7b3c-42f2-b4e8-50dd1453a792"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "2f86e325-73e1-4c1a-b68f-b896e3aaf8fb"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "17cdffcf-9d0a-438c-a3fd-803474b97d8a"}, {"type": "Grid", "id": "c4509ab1-7534-47c8-8071-6f7776f97c12"}, {"type": "LinearAxis", "id": "c303034a-989f-42c3-bb46-0587852cb65c"}, {"type": "Grid", "id": "99f8b741-b440-4c2a-ac6f-7c62c814df92"}, {"type": "GlyphRenderer", "id": "56fa2068-4063-419c-86ac-0c62cb379412"}], "below": [{"type": "LinearAxis", "id": "17cdffcf-9d0a-438c-a3fd-803474b97d8a"}], "left": [{"type": "LinearAxis", "id": "c303034a-989f-42c3-bb46-0587852cb65c"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "title": null, "tools": [{"type": "BoxSelectTool", "id": "ecb19a0d-08d9-427b-a164-d81c1866fec2"}, {"type": "HoverTool", "id": "73beedcb-fc2d-4e8e-adf7-a7191ee4a61a"}], "x_range": {"type": "DataRange1d", "id": "986dad90-a6b7-4d64-8f60-a21fdccfcc42"}, "id": "450e7aa7-b7ca-46de-b26b-6b63e5cf9dd5"}, "id": "450e7aa7-b7ca-46de-b26b-6b63e5cf9dd5", "subtype": "Figure"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "2f86e325-73e1-4c1a-b68f-b896e3aaf8fb", "tags": [], "geometries": []}, "id": "2f86e325-73e1-4c1a-b68f-b896e3aaf8fb"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "e715c9ac-5ec2-43a0-8755-07b47c9c1a99"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "450e7aa7-b7ca-46de-b26b-6b63e5cf9dd5", "subtype": "Figure"}, "dimension": 1, "id": "99f8b741-b440-4c2a-ac6f-7c62c814df92"}, "id": "99f8b741-b440-4c2a-ac6f-7c62c814df92"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 1.0}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 10}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "cf89398b-b4a8-4055-b8e5-c97cee6da2f1"}, "id": "cf89398b-b4a8-4055-b8e5-c97cee6da2f1"}, {"type": "HoverTool", "attributes": {"callback": null, "id": "73beedcb-fc2d-4e8e-adf7-a7191ee4a61a", "tags": [], "doc": null, "plot": {"type": "Plot", "id": "450e7aa7-b7ca-46de-b26b-6b63e5cf9dd5", "subtype": "Figure"}, "names": [], "renderers": []}, "id": "73beedcb-fc2d-4e8e-adf7-a7191ee4a61a"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("0e637e69-22af-4386-a250-9152841f280c", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("0e637e69-22af-4386-a250-9152841f280c", all_models);
    });
  }

}(this));