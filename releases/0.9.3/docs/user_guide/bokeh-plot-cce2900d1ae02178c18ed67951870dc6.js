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

  var elt = document.getElementById("a0016f2f-97e8-4d8d-afc7-a557e4f261d6");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a0016f2f-97e8-4d8d-afc7-a557e4f261d6' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "bd0a7b42-81e7-406e-b11e-569db48c1302", "tags": []}, "id": "bd0a7b42-81e7-406e-b11e-569db48c1302"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 1.0}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 10}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "c35496b9-c139-4ba4-b64e-450896b1c389"}, "id": "c35496b9-c139-4ba4-b64e-450896b1c389"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "ab81e892-9d80-4339-bfbd-a3b17027f148", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "ab81e892-9d80-4339-bfbd-a3b17027f148"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "d07ffcee-74c3-4a89-bebe-3cf877f56dfa"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "31f3cbfb-8768-4e82-88a2-ef99100fbbed"}, "plot": {"type": "Plot", "id": "2a30d4ba-68d2-4a12-a8ad-c8c3c9622685", "subtype": "Figure"}, "axis_label_text_font_style": "italic", "axis_label": "Bin Count", "id": "201d8706-e926-4fe3-9cbd-b445e05112c3"}, "id": "201d8706-e926-4fe3-9cbd-b445e05112c3"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "2a4c06ab-f109-411e-9002-636b7abe3fd6"}, "id": "2a4c06ab-f109-411e-9002-636b7abe3fd6"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "2a30d4ba-68d2-4a12-a8ad-c8c3c9622685", "subtype": "Figure"}, "id": "e09009c7-d65c-4e0e-96e0-93bb96c23586", "tags": [], "doc": null}, "id": "e09009c7-d65c-4e0e-96e0-93bb96c23586"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "68d42cbd-3737-4a5c-a517-9222fa906374", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "68d42cbd-3737-4a5c-a517-9222fa906374"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "d07ffcee-74c3-4a89-bebe-3cf877f56dfa"}, "id": "d07ffcee-74c3-4a89-bebe-3cf877f56dfa"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2a30d4ba-68d2-4a12-a8ad-c8c3c9622685", "subtype": "Figure"}, "id": "edce76e4-9fca-4bf2-bffe-8a0af715bf19"}, "id": "edce76e4-9fca-4bf2-bffe-8a0af715bf19"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "2a4c06ab-f109-411e-9002-636b7abe3fd6"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "bd0a7b42-81e7-406e-b11e-569db48c1302"}, "axis_label_standoff": 30, "plot": {"type": "Plot", "id": "2a30d4ba-68d2-4a12-a8ad-c8c3c9622685", "subtype": "Figure"}, "axis_label_text_color": {"value": "#aa6666"}, "axis_label": "Lot Number", "id": "3f18a534-4a80-4c25-91ad-ee556d2872b9"}, "id": "3f18a534-4a80-4c25-91ad-ee556d2872b9"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "bf0b0e84-017d-4ae2-861d-d50c46b61bb0", "tags": [], "geometries": []}, "id": "bf0b0e84-017d-4ae2-861d-d50c46b61bb0"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5]}, "doc": null, "id": "22cf4769-fc58-4b91-9029-df3c7e2f1f30", "column_names": ["y", "x"]}, "id": "22cf4769-fc58-4b91-9029-df3c7e2f1f30"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "d07ffcee-74c3-4a89-bebe-3cf877f56dfa"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2a30d4ba-68d2-4a12-a8ad-c8c3c9622685", "subtype": "Figure"}, "dimension": 1, "id": "021c57b0-2f30-4d8e-ba42-bcc5cc284cb3"}, "id": "021c57b0-2f30-4d8e-ba42-bcc5cc284cb3"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "68d42cbd-3737-4a5c-a517-9222fa906374"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "bf0b0e84-017d-4ae2-861d-d50c46b61bb0"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "3f18a534-4a80-4c25-91ad-ee556d2872b9"}, {"type": "Grid", "id": "dc66492a-481d-4c1d-b41e-2b7dc0e4745d"}, {"type": "LinearAxis", "id": "201d8706-e926-4fe3-9cbd-b445e05112c3"}, {"type": "Grid", "id": "021c57b0-2f30-4d8e-ba42-bcc5cc284cb3"}, {"type": "GlyphRenderer", "id": "c2bab448-8808-490d-8642-0d5a790ac00b"}], "below": [{"type": "LinearAxis", "id": "3f18a534-4a80-4c25-91ad-ee556d2872b9"}], "left": [{"type": "LinearAxis", "id": "201d8706-e926-4fe3-9cbd-b445e05112c3"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "tools": [{"type": "PanTool", "id": "1914b517-b7d7-485a-969d-a45f9069073d"}, {"type": "WheelZoomTool", "id": "4469b212-8331-459f-becb-7a0b91729e4a"}, {"type": "BoxZoomTool", "id": "edce76e4-9fca-4bf2-bffe-8a0af715bf19"}, {"type": "PreviewSaveTool", "id": "9aca789a-cc79-488f-a776-4c337be77f5a"}, {"type": "ResizeTool", "id": "e05b5ff9-22e3-4b5b-a1eb-9a29df615599"}, {"type": "ResetTool", "id": "e09009c7-d65c-4e0e-96e0-93bb96c23586"}, {"type": "HelpTool", "id": "a1921798-e159-432d-b4cc-9ecaf33170b2"}], "x_range": {"type": "DataRange1d", "id": "ab81e892-9d80-4339-bfbd-a3b17027f148"}, "id": "2a30d4ba-68d2-4a12-a8ad-c8c3c9622685"}, "id": "2a30d4ba-68d2-4a12-a8ad-c8c3c9622685", "subtype": "Figure"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "2a4c06ab-f109-411e-9002-636b7abe3fd6"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2a30d4ba-68d2-4a12-a8ad-c8c3c9622685", "subtype": "Figure"}, "dimension": 0, "id": "dc66492a-481d-4c1d-b41e-2b7dc0e4745d"}, "id": "dc66492a-481d-4c1d-b41e-2b7dc0e4745d"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "31f3cbfb-8768-4e82-88a2-ef99100fbbed", "tags": []}, "id": "31f3cbfb-8768-4e82-88a2-ef99100fbbed"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2a30d4ba-68d2-4a12-a8ad-c8c3c9622685", "subtype": "Figure"}, "id": "1914b517-b7d7-485a-969d-a45f9069073d"}, "id": "1914b517-b7d7-485a-969d-a45f9069073d"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "2a30d4ba-68d2-4a12-a8ad-c8c3c9622685", "subtype": "Figure"}, "id": "e05b5ff9-22e3-4b5b-a1eb-9a29df615599", "tags": [], "doc": null}, "id": "e05b5ff9-22e3-4b5b-a1eb-9a29df615599"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2a30d4ba-68d2-4a12-a8ad-c8c3c9622685", "subtype": "Figure"}, "id": "4469b212-8331-459f-becb-7a0b91729e4a"}, "id": "4469b212-8331-459f-becb-7a0b91729e4a"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 0.1}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 10}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "2fed1974-911d-4705-b998-500668748159"}, "id": "2fed1974-911d-4705-b998-500668748159"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "22cf4769-fc58-4b91-9029-df3c7e2f1f30"}, "tags": [], "glyph": {"type": "Circle", "id": "c35496b9-c139-4ba4-b64e-450896b1c389"}, "doc": null, "nonselection_glyph": {"type": "Circle", "id": "2fed1974-911d-4705-b998-500668748159"}, "selection_glyph": null, "id": "c2bab448-8808-490d-8642-0d5a790ac00b"}, "id": "c2bab448-8808-490d-8642-0d5a790ac00b"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "2a30d4ba-68d2-4a12-a8ad-c8c3c9622685", "subtype": "Figure"}, "id": "9aca789a-cc79-488f-a776-4c337be77f5a", "tags": [], "doc": null}, "id": "9aca789a-cc79-488f-a776-4c337be77f5a"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "2a30d4ba-68d2-4a12-a8ad-c8c3c9622685", "subtype": "Figure"}, "id": "a1921798-e159-432d-b4cc-9ecaf33170b2", "tags": [], "doc": null}, "id": "a1921798-e159-432d-b4cc-9ecaf33170b2"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("a0016f2f-97e8-4d8d-afc7-a557e4f261d6", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("a0016f2f-97e8-4d8d-afc7-a557e4f261d6", all_models);
    });
  }

}(this));