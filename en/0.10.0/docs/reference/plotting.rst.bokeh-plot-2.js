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

  var elt = document.getElementById("2766e1b1-373f-49e9-baa9-946a0c5d3dbe");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2766e1b1-373f-49e9-baa9-946a0c5d3dbe' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "18af765a-2a3f-4f18-aec6-230d3f3e8fc1"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "11247fbe-6192-4d3b-b07e-43389c7075c2"}, "ticker": {"type": "BasicTicker", "id": "200e6ba9-75cc-47ef-a176-1816948b7558"}, "id": "9be4cbfe-36b9-4bc9-93cc-c5f6787f2e08"}, "type": "LinearAxis", "id": "9be4cbfe-36b9-4bc9-93cc-c5f6787f2e08"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "18af765a-2a3f-4f18-aec6-230d3f3e8fc1"}, "tags": [], "doc": null, "id": "165999b1-64fe-478c-9f04-97d05cdff727"}, "type": "ResetTool", "id": "165999b1-64fe-478c-9f04-97d05cdff727"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "18af765a-2a3f-4f18-aec6-230d3f3e8fc1"}, "tags": [], "doc": null, "id": "22b615ca-0fc5-4deb-90e2-361504617eff"}, "type": "PreviewSaveTool", "id": "22b615ca-0fc5-4deb-90e2-361504617eff"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "8e097d54-0e7b-406d-a607-a6964cfbc77b"}, "type": "DataRange1d", "id": "8e097d54-0e7b-406d-a607-a6964cfbc77b"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "18af765a-2a3f-4f18-aec6-230d3f3e8fc1"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "200e6ba9-75cc-47ef-a176-1816948b7558"}, "id": "84a128b0-180f-46ba-a6ce-c4610159d746"}, "type": "Grid", "id": "84a128b0-180f-46ba-a6ce-c4610159d746"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "18af765a-2a3f-4f18-aec6-230d3f3e8fc1"}, "tags": [], "doc": null, "id": "9bad7147-9983-4ba9-8392-968ea2568723"}, "type": "ResizeTool", "id": "9bad7147-9983-4ba9-8392-968ea2568723"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "18af765a-2a3f-4f18-aec6-230d3f3e8fc1"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "564a49d0-341c-45da-ad82-d14c7cc857c3"}, "type": "WheelZoomTool", "id": "564a49d0-341c-45da-ad82-d14c7cc857c3"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "150ea4db-e877-43e3-a4cc-fa607d2122e4"}, "data_source": {"type": "ColumnDataSource", "id": "57334800-1b7f-490a-9054-44bc1db84c46"}, "tags": [], "doc": null, "selection_glyph": null, "id": "07a35ad4-b2d1-4be9-ba06-143bfc2f6185", "glyph": {"type": "Circle", "id": "a516b442-a25b-4bc2-a3f6-c1b8e1bb40c7"}}, "type": "GlyphRenderer", "id": "07a35ad4-b2d1-4be9-ba06-143bfc2f6185"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "18af765a-2a3f-4f18-aec6-230d3f3e8fc1"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "c7d45c67-19f2-4771-ba04-36620200a61f"}, "type": "PanTool", "id": "c7d45c67-19f2-4771-ba04-36620200a61f"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "150ea4db-e877-43e3-a4cc-fa607d2122e4", "size": {"units": "screen", "value": 20}}, "type": "Circle", "id": "150ea4db-e877-43e3-a4cc-fa607d2122e4"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "200e6ba9-75cc-47ef-a176-1816948b7558", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "200e6ba9-75cc-47ef-a176-1816948b7558"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [1, 2, 3], "x": [1, 2, 3]}, "id": "57334800-1b7f-490a-9054-44bc1db84c46"}, "type": "ColumnDataSource", "id": "57334800-1b7f-490a-9054-44bc1db84c46"}, {"attributes": {"doc": null, "id": "83aefaae-ee99-476a-a795-3a468686368c", "tags": []}, "type": "BasicTickFormatter", "id": "83aefaae-ee99-476a-a795-3a468686368c"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "18af765a-2a3f-4f18-aec6-230d3f3e8fc1"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "83aefaae-ee99-476a-a795-3a468686368c"}, "ticker": {"type": "BasicTicker", "id": "37a41071-b6a9-4ba7-b416-24cb5b77b801"}, "id": "4a0dbeb7-cea0-41eb-8d78-555775553e23"}, "type": "LinearAxis", "id": "4a0dbeb7-cea0-41eb-8d78-555775553e23"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "18af765a-2a3f-4f18-aec6-230d3f3e8fc1"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "37a41071-b6a9-4ba7-b416-24cb5b77b801"}, "id": "016c3df3-d7ec-4512-83ea-701c35c20674"}, "type": "Grid", "id": "016c3df3-d7ec-4512-83ea-701c35c20674"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "a9030830-a086-4b4c-a6aa-c2d5380b5f7c"}, "type": "ToolEvents", "id": "a9030830-a086-4b4c-a6aa-c2d5380b5f7c"}, {"subtype": "Figure", "type": "Plot", "id": "18af765a-2a3f-4f18-aec6-230d3f3e8fc1", "attributes": {"x_range": {"type": "DataRange1d", "id": "8e097d54-0e7b-406d-a607-a6964cfbc77b"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "c7d45c67-19f2-4771-ba04-36620200a61f"}, {"type": "WheelZoomTool", "id": "564a49d0-341c-45da-ad82-d14c7cc857c3"}, {"type": "BoxZoomTool", "id": "54b001f4-3c8d-4334-866d-47a4a40ecaa1"}, {"type": "PreviewSaveTool", "id": "22b615ca-0fc5-4deb-90e2-361504617eff"}, {"type": "ResizeTool", "id": "9bad7147-9983-4ba9-8392-968ea2568723"}, {"type": "ResetTool", "id": "165999b1-64fe-478c-9f04-97d05cdff727"}, {"type": "HelpTool", "id": "81409a2f-74f3-4c6e-ac69-60648b978df0"}], "extra_y_ranges": {}, "plot_width": 300, "renderers": [{"type": "LinearAxis", "id": "4a0dbeb7-cea0-41eb-8d78-555775553e23"}, {"type": "Grid", "id": "016c3df3-d7ec-4512-83ea-701c35c20674"}, {"type": "LinearAxis", "id": "9be4cbfe-36b9-4bc9-93cc-c5f6787f2e08"}, {"type": "Grid", "id": "84a128b0-180f-46ba-a6ce-c4610159d746"}, {"type": "GlyphRenderer", "id": "07a35ad4-b2d1-4be9-ba06-143bfc2f6185"}], "extra_x_ranges": {}, "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "a9030830-a086-4b4c-a6aa-c2d5380b5f7c"}, "above": [], "doc": null, "id": "18af765a-2a3f-4f18-aec6-230d3f3e8fc1", "y_range": {"type": "DataRange1d", "id": "7717215b-27fa-4954-8229-cb0e013a5c45"}, "below": [{"type": "LinearAxis", "id": "4a0dbeb7-cea0-41eb-8d78-555775553e23"}], "left": [{"type": "LinearAxis", "id": "9be4cbfe-36b9-4bc9-93cc-c5f6787f2e08"}]}}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "18af765a-2a3f-4f18-aec6-230d3f3e8fc1"}, "tags": [], "doc": null, "id": "81409a2f-74f3-4c6e-ac69-60648b978df0"}, "type": "HelpTool", "id": "81409a2f-74f3-4c6e-ac69-60648b978df0"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "a516b442-a25b-4bc2-a3f6-c1b8e1bb40c7", "size": {"units": "screen", "value": 20}}, "type": "Circle", "id": "a516b442-a25b-4bc2-a3f6-c1b8e1bb40c7"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "7717215b-27fa-4954-8229-cb0e013a5c45"}, "type": "DataRange1d", "id": "7717215b-27fa-4954-8229-cb0e013a5c45"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "18af765a-2a3f-4f18-aec6-230d3f3e8fc1"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "54b001f4-3c8d-4334-866d-47a4a40ecaa1"}, "type": "BoxZoomTool", "id": "54b001f4-3c8d-4334-866d-47a4a40ecaa1"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "37a41071-b6a9-4ba7-b416-24cb5b77b801", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "37a41071-b6a9-4ba7-b416-24cb5b77b801"}, {"attributes": {"doc": null, "id": "11247fbe-6192-4d3b-b07e-43389c7075c2", "tags": []}, "type": "BasicTickFormatter", "id": "11247fbe-6192-4d3b-b07e-43389c7075c2"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("2766e1b1-373f-49e9-baa9-946a0c5d3dbe", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("2766e1b1-373f-49e9-baa9-946a0c5d3dbe", all_models);
    });
  }

}(this));