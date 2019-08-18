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

  var elt = document.getElementById("cc018a0e-5b4a-4973-9978-94ba28826b46");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'cc018a0e-5b4a-4973-9978-94ba28826b46' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"doc": null, "id": "1ecf8234-ad36-42ed-bff0-7b642b83978a", "tags": []}, "type": "BasicTickFormatter", "id": "1ecf8234-ad36-42ed-bff0-7b642b83978a"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8e9c5cd1-c0c8-4bdb-a592-1e8ff87713d8"}, "tags": [], "doc": null, "id": "f23c8f8b-3c87-43ab-bddf-84f33cbfd0bd"}, "type": "HelpTool", "id": "f23c8f8b-3c87-43ab-bddf-84f33cbfd0bd"}, {"subtype": "Figure", "type": "Plot", "id": "8e9c5cd1-c0c8-4bdb-a592-1e8ff87713d8", "attributes": {"x_range": {"type": "DataRange1d", "id": "9c4a1e87-1646-476f-b4e5-8aeb5c9e1480"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "7223a096-b1da-4336-94ba-47fa598e4a1c"}, {"type": "WheelZoomTool", "id": "6279048b-252f-4f0b-aa85-23b48c0ba715"}, {"type": "BoxZoomTool", "id": "624f8984-0844-4d17-bcc2-cbaec7470134"}, {"type": "PreviewSaveTool", "id": "3b5b4a03-d3a4-48e4-b559-469535c691cd"}, {"type": "ResizeTool", "id": "9e10223e-d0f7-4688-be30-bbd9cec7c56e"}, {"type": "ResetTool", "id": "d7901410-adbb-450b-8104-7d32f4922f64"}, {"type": "HelpTool", "id": "f23c8f8b-3c87-43ab-bddf-84f33cbfd0bd"}], "id": "8e9c5cd1-c0c8-4bdb-a592-1e8ff87713d8", "renderers": [{"type": "LinearAxis", "id": "8b2e0b48-ff65-4d94-aded-f31c0c9e2bf6"}, {"type": "Grid", "id": "e18d0169-c459-40b7-b2d1-cf8e41db0870"}, {"type": "LinearAxis", "id": "fb988efd-f242-45c8-8f79-31114d35d12f"}, {"type": "Grid", "id": "c83c428a-4768-449e-9183-bcf085e504f9"}, {"type": "GlyphRenderer", "id": "bd035dc1-b24a-469b-8c41-32b7930d08a3"}], "plot_width": 400, "border_fill": "whitesmoke", "extra_x_ranges": {}, "plot_height": 400, "doc": null, "tool_events": {"type": "ToolEvents", "id": "883fe285-1a66-482d-8f3b-3a5c2271ceb9"}, "above": [], "extra_y_ranges": {}, "min_border_left": 80, "y_range": {"type": "DataRange1d", "id": "96e0c1df-16e0-4303-9512-0e82b23dd1d4"}, "below": [{"type": "LinearAxis", "id": "8b2e0b48-ff65-4d94-aded-f31c0c9e2bf6"}], "left": [{"type": "LinearAxis", "id": "fb988efd-f242-45c8-8f79-31114d35d12f"}]}}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8e9c5cd1-c0c8-4bdb-a592-1e8ff87713d8"}, "tags": [], "doc": null, "id": "d7901410-adbb-450b-8104-7d32f4922f64"}, "type": "ResetTool", "id": "d7901410-adbb-450b-8104-7d32f4922f64"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "96e0c1df-16e0-4303-9512-0e82b23dd1d4"}, "type": "DataRange1d", "id": "96e0c1df-16e0-4303-9512-0e82b23dd1d4"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "883fe285-1a66-482d-8f3b-3a5c2271ceb9"}, "type": "ToolEvents", "id": "883fe285-1a66-482d-8f3b-3a5c2271ceb9"}, {"attributes": {"doc": null, "id": "29ed32ba-cb7f-4990-82cc-ed8f166289dc", "tags": []}, "type": "BasicTickFormatter", "id": "29ed32ba-cb7f-4990-82cc-ed8f166289dc"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8e9c5cd1-c0c8-4bdb-a592-1e8ff87713d8"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "e3da08ab-47ef-48e8-af30-c990f659564a"}, "id": "c83c428a-4768-449e-9183-bcf085e504f9"}, "type": "Grid", "id": "c83c428a-4768-449e-9183-bcf085e504f9"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "e3da08ab-47ef-48e8-af30-c990f659564a", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "e3da08ab-47ef-48e8-af30-c990f659564a"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8e9c5cd1-c0c8-4bdb-a592-1e8ff87713d8"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "624f8984-0844-4d17-bcc2-cbaec7470134"}, "type": "BoxZoomTool", "id": "624f8984-0844-4d17-bcc2-cbaec7470134"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "4dc0cbd8-14a2-4c57-8fb1-13ad3610867b", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "4dc0cbd8-14a2-4c57-8fb1-13ad3610867b"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "80474071-0490-4123-b128-d2de05945b9f", "size": {"units": "screen", "value": 10}}, "type": "Circle", "id": "80474071-0490-4123-b128-d2de05945b9f"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8e9c5cd1-c0c8-4bdb-a592-1e8ff87713d8"}, "tags": [], "doc": null, "id": "3b5b4a03-d3a4-48e4-b559-469535c691cd"}, "type": "PreviewSaveTool", "id": "3b5b4a03-d3a4-48e4-b559-469535c691cd"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8e9c5cd1-c0c8-4bdb-a592-1e8ff87713d8"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "29ed32ba-cb7f-4990-82cc-ed8f166289dc"}, "ticker": {"type": "BasicTicker", "id": "e3da08ab-47ef-48e8-af30-c990f659564a"}, "id": "fb988efd-f242-45c8-8f79-31114d35d12f"}, "type": "LinearAxis", "id": "fb988efd-f242-45c8-8f79-31114d35d12f"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "17fa5412-e456-4662-aa22-00faac825bca"}, "data_source": {"type": "ColumnDataSource", "id": "551b58bb-29ea-440d-9078-914a6ddb5aad"}, "tags": [], "doc": null, "selection_glyph": null, "id": "bd035dc1-b24a-469b-8c41-32b7930d08a3", "glyph": {"type": "Circle", "id": "80474071-0490-4123-b128-d2de05945b9f"}}, "type": "GlyphRenderer", "id": "bd035dc1-b24a-469b-8c41-32b7930d08a3"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "17fa5412-e456-4662-aa22-00faac825bca", "size": {"units": "screen", "value": 10}}, "type": "Circle", "id": "17fa5412-e456-4662-aa22-00faac825bca"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "9c4a1e87-1646-476f-b4e5-8aeb5c9e1480"}, "type": "DataRange1d", "id": "9c4a1e87-1646-476f-b4e5-8aeb5c9e1480"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8e9c5cd1-c0c8-4bdb-a592-1e8ff87713d8"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "6279048b-252f-4f0b-aa85-23b48c0ba715"}, "type": "WheelZoomTool", "id": "6279048b-252f-4f0b-aa85-23b48c0ba715"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5]}, "id": "551b58bb-29ea-440d-9078-914a6ddb5aad"}, "type": "ColumnDataSource", "id": "551b58bb-29ea-440d-9078-914a6ddb5aad"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8e9c5cd1-c0c8-4bdb-a592-1e8ff87713d8"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "4dc0cbd8-14a2-4c57-8fb1-13ad3610867b"}, "id": "e18d0169-c459-40b7-b2d1-cf8e41db0870"}, "type": "Grid", "id": "e18d0169-c459-40b7-b2d1-cf8e41db0870"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8e9c5cd1-c0c8-4bdb-a592-1e8ff87713d8"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "7223a096-b1da-4336-94ba-47fa598e4a1c"}, "type": "PanTool", "id": "7223a096-b1da-4336-94ba-47fa598e4a1c"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8e9c5cd1-c0c8-4bdb-a592-1e8ff87713d8"}, "tags": [], "doc": null, "id": "9e10223e-d0f7-4688-be30-bbd9cec7c56e"}, "type": "ResizeTool", "id": "9e10223e-d0f7-4688-be30-bbd9cec7c56e"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8e9c5cd1-c0c8-4bdb-a592-1e8ff87713d8"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "1ecf8234-ad36-42ed-bff0-7b642b83978a"}, "ticker": {"type": "BasicTicker", "id": "4dc0cbd8-14a2-4c57-8fb1-13ad3610867b"}, "id": "8b2e0b48-ff65-4d94-aded-f31c0c9e2bf6"}, "type": "LinearAxis", "id": "8b2e0b48-ff65-4d94-aded-f31c0c9e2bf6"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("cc018a0e-5b4a-4973-9978-94ba28826b46", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("cc018a0e-5b4a-4973-9978-94ba28826b46", all_models);
    });
  }

}(this));