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

  var elt = document.getElementById("5c5e7264-9013-4cd6-b824-49e38117f3fc");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5c5e7264-9013-4cd6-b824-49e38117f3fc' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cff0b454-6029-47f1-a0ca-1582c7b4e557"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "fbf06f5c-0385-40b8-b3f9-f90901a0ffe8"}, "type": "BoxZoomTool", "id": "fbf06f5c-0385-40b8-b3f9-f90901a0ffe8"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "41bcf0b0-0bc2-4daf-a347-2ab65c00c412", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "41bcf0b0-0bc2-4daf-a347-2ab65c00c412"}, {"attributes": {"doc": null, "id": "ec83bcc0-4c6e-418e-a773-b975d4520bd0", "tags": []}, "type": "BasicTickFormatter", "id": "ec83bcc0-4c6e-418e-a773-b975d4520bd0"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "14f4eb24-727f-44f7-b13d-5d56c0e10bdb"}, "type": "DataRange1d", "id": "14f4eb24-727f-44f7-b13d-5d56c0e10bdb"}, {"attributes": {"doc": null, "id": "7bfeeeb9-ae48-431c-9aca-39d697744db8", "tags": []}, "type": "BasicTickFormatter", "id": "7bfeeeb9-ae48-431c-9aca-39d697744db8"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5]}, "id": "33b3ecdf-cd4f-4153-84c7-73dd2cbdfaee"}, "type": "ColumnDataSource", "id": "33b3ecdf-cd4f-4153-84c7-73dd2cbdfaee"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "6c4563ec-38a3-45aa-a545-88c40910f015", "size": {"units": "screen", "value": 10}}, "type": "Circle", "id": "6c4563ec-38a3-45aa-a545-88c40910f015"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cff0b454-6029-47f1-a0ca-1582c7b4e557"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "17c63a25-0daf-4f64-99ee-249f30592df3"}, "type": "PanTool", "id": "17c63a25-0daf-4f64-99ee-249f30592df3"}, {"subtype": "Figure", "type": "Plot", "id": "cff0b454-6029-47f1-a0ca-1582c7b4e557", "attributes": {"x_range": {"type": "DataRange1d", "id": "14f4eb24-727f-44f7-b13d-5d56c0e10bdb"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "17c63a25-0daf-4f64-99ee-249f30592df3"}, {"type": "WheelZoomTool", "id": "569eda22-f070-4c71-b850-280db78af1bf"}, {"type": "BoxZoomTool", "id": "fbf06f5c-0385-40b8-b3f9-f90901a0ffe8"}, {"type": "PreviewSaveTool", "id": "a457e058-fb06-4813-8f56-01609eb2a0ff"}, {"type": "ResizeTool", "id": "a0b0646d-a9bb-40be-bc33-870036224f84"}, {"type": "ResetTool", "id": "b3c4c1bf-e345-4c03-bea3-3ba8fa5b917f"}, {"type": "HelpTool", "id": "831517fa-3be9-4db4-a926-0f868e9b9fbe"}], "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "a6d636db-3991-4daa-a23f-e9c1cf9451f8"}, {"type": "Grid", "id": "f9e6051b-a9dd-41dd-9f22-13f00a1d16aa"}, {"type": "LinearAxis", "id": "8f09a3f0-aff8-4c05-915b-5f7bc3fc6873"}, {"type": "Grid", "id": "0401166e-b729-4af0-98ea-46dca84e22e0"}, {"type": "GlyphRenderer", "id": "96b03bcb-def6-4435-a13f-a6c04e3f4f9b"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "a7689620-7f0b-4472-8552-8c83c27ee665"}, "above": [], "doc": null, "id": "cff0b454-6029-47f1-a0ca-1582c7b4e557", "y_range": {"type": "DataRange1d", "id": "af9fe311-2f93-4ada-a237-95531a16985b"}, "below": [{"type": "LinearAxis", "id": "a6d636db-3991-4daa-a23f-e9c1cf9451f8"}], "left": [{"type": "LinearAxis", "id": "8f09a3f0-aff8-4c05-915b-5f7bc3fc6873"}]}}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "a7689620-7f0b-4472-8552-8c83c27ee665"}, "type": "ToolEvents", "id": "a7689620-7f0b-4472-8552-8c83c27ee665"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "6c4563ec-38a3-45aa-a545-88c40910f015"}, "data_source": {"type": "ColumnDataSource", "id": "33b3ecdf-cd4f-4153-84c7-73dd2cbdfaee"}, "tags": [], "doc": null, "selection_glyph": null, "id": "96b03bcb-def6-4435-a13f-a6c04e3f4f9b", "glyph": {"type": "Circle", "id": "b5a6f545-b3b3-42ca-8db7-18657ef841b7"}}, "type": "GlyphRenderer", "id": "96b03bcb-def6-4435-a13f-a6c04e3f4f9b"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "b5a6f545-b3b3-42ca-8db7-18657ef841b7", "size": {"units": "screen", "value": 10}}, "type": "Circle", "id": "b5a6f545-b3b3-42ca-8db7-18657ef841b7"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cff0b454-6029-47f1-a0ca-1582c7b4e557"}, "minor_tick_out": 8, "tags": [], "minor_tick_in": -3, "doc": null, "minor_tick_line_color": null, "formatter": {"type": "BasicTickFormatter", "id": "7bfeeeb9-ae48-431c-9aca-39d697744db8"}, "ticker": {"type": "BasicTicker", "id": "41bcf0b0-0bc2-4daf-a347-2ab65c00c412"}, "id": "8f09a3f0-aff8-4c05-915b-5f7bc3fc6873", "major_tick_out": 10}, "type": "LinearAxis", "id": "8f09a3f0-aff8-4c05-915b-5f7bc3fc6873"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "af9fe311-2f93-4ada-a237-95531a16985b"}, "type": "DataRange1d", "id": "af9fe311-2f93-4ada-a237-95531a16985b"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cff0b454-6029-47f1-a0ca-1582c7b4e557"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "569eda22-f070-4c71-b850-280db78af1bf"}, "type": "WheelZoomTool", "id": "569eda22-f070-4c71-b850-280db78af1bf"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cff0b454-6029-47f1-a0ca-1582c7b4e557"}, "minor_tick_out": 8, "major_tick_line_color": {"value": "firebrick"}, "tags": [], "minor_tick_in": -3, "doc": null, "minor_tick_line_color": {"value": "orange"}, "major_tick_line_width": {"value": 3}, "formatter": {"type": "BasicTickFormatter", "id": "ec83bcc0-4c6e-418e-a773-b975d4520bd0"}, "ticker": {"type": "BasicTicker", "id": "a263a747-0487-42de-a072-0f1434e0ec37"}, "id": "a6d636db-3991-4daa-a23f-e9c1cf9451f8", "major_tick_out": 10}, "type": "LinearAxis", "id": "a6d636db-3991-4daa-a23f-e9c1cf9451f8"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cff0b454-6029-47f1-a0ca-1582c7b4e557"}, "tags": [], "doc": null, "id": "a457e058-fb06-4813-8f56-01609eb2a0ff"}, "type": "PreviewSaveTool", "id": "a457e058-fb06-4813-8f56-01609eb2a0ff"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cff0b454-6029-47f1-a0ca-1582c7b4e557"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "41bcf0b0-0bc2-4daf-a347-2ab65c00c412"}, "id": "0401166e-b729-4af0-98ea-46dca84e22e0"}, "type": "Grid", "id": "0401166e-b729-4af0-98ea-46dca84e22e0"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "a263a747-0487-42de-a072-0f1434e0ec37", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "a263a747-0487-42de-a072-0f1434e0ec37"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cff0b454-6029-47f1-a0ca-1582c7b4e557"}, "tags": [], "doc": null, "id": "a0b0646d-a9bb-40be-bc33-870036224f84"}, "type": "ResizeTool", "id": "a0b0646d-a9bb-40be-bc33-870036224f84"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cff0b454-6029-47f1-a0ca-1582c7b4e557"}, "tags": [], "doc": null, "id": "b3c4c1bf-e345-4c03-bea3-3ba8fa5b917f"}, "type": "ResetTool", "id": "b3c4c1bf-e345-4c03-bea3-3ba8fa5b917f"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cff0b454-6029-47f1-a0ca-1582c7b4e557"}, "tags": [], "doc": null, "id": "831517fa-3be9-4db4-a926-0f868e9b9fbe"}, "type": "HelpTool", "id": "831517fa-3be9-4db4-a926-0f868e9b9fbe"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "cff0b454-6029-47f1-a0ca-1582c7b4e557"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "a263a747-0487-42de-a072-0f1434e0ec37"}, "id": "f9e6051b-a9dd-41dd-9f22-13f00a1d16aa"}, "type": "Grid", "id": "f9e6051b-a9dd-41dd-9f22-13f00a1d16aa"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("5c5e7264-9013-4cd6-b824-49e38117f3fc", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("5c5e7264-9013-4cd6-b824-49e38117f3fc", all_models);
    });
  }

}(this));