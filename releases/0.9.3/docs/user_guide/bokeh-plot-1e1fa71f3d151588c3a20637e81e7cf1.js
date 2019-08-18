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

  var elt = document.getElementById("65c67a07-117f-43f0-9a16-417937bf05c8");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '65c67a07-117f-43f0-9a16-417937bf05c8' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "5f75a5ad-7ee8-4981-80ad-59291d5c189c", "tags": []}, "id": "5f75a5ad-7ee8-4981-80ad-59291d5c189c"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "69c40bf2-38f3-47f7-a0fc-c64f055ba4e1"}, "id": "69c40bf2-38f3-47f7-a0fc-c64f055ba4e1"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "823a7fc4-bdcf-4323-9aa6-cc914f0fb78a", "tags": [], "geometries": []}, "id": "823a7fc4-bdcf-4323-9aa6-cc914f0fb78a"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "bab091d2-965c-4410-939e-15d1ece151be", "subtype": "Figure"}, "id": "5f0e9ee9-f583-4422-9ac2-9fb9c3bdca9a"}, "id": "5f0e9ee9-f583-4422-9ac2-9fb9c3bdca9a"}, {"type": "Grid", "attributes": {"grid_line_color": null, "ticker": {"type": "BasicTicker", "id": "69c40bf2-38f3-47f7-a0fc-c64f055ba4e1"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "bab091d2-965c-4410-939e-15d1ece151be", "subtype": "Figure"}, "dimension": 0, "id": "ee8c9c96-ad86-4a21-82f6-f97ed6215689"}, "id": "ee8c9c96-ad86-4a21-82f6-f97ed6215689"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "0d7add05-ba6d-48cb-bf55-fe546fe6d3e6"}, "id": "0d7add05-ba6d-48cb-bf55-fe546fe6d3e6"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "bab091d2-965c-4410-939e-15d1ece151be", "subtype": "Figure"}, "id": "a5370f0e-35ab-4e87-9e44-1e2f7f88996c"}, "id": "a5370f0e-35ab-4e87-9e44-1e2f7f88996c"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "bab091d2-965c-4410-939e-15d1ece151be", "subtype": "Figure"}, "id": "16bec041-7499-46b5-9eaf-817c017626ce", "tags": [], "doc": null}, "id": "16bec041-7499-46b5-9eaf-817c017626ce"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "bab091d2-965c-4410-939e-15d1ece151be", "subtype": "Figure"}, "id": "63075d3c-5983-4ca9-8f36-eacaea8f3556"}, "id": "63075d3c-5983-4ca9-8f36-eacaea8f3556"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 0.1}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 10}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "4855ed6d-0c6c-4db9-99fe-6fcc0b7599ed"}, "id": "4855ed6d-0c6c-4db9-99fe-6fcc0b7599ed"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "e299c12e-f35a-43c7-9728-08bb0f02cc63", "tags": []}, "id": "e299c12e-f35a-43c7-9728-08bb0f02cc63"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "9160835f-0d98-4f8c-84e2-e8075b8b1974"}, "tags": [], "glyph": {"type": "Circle", "id": "bf32403f-4772-4725-b2b3-667b53a06f03"}, "doc": null, "nonselection_glyph": {"type": "Circle", "id": "4855ed6d-0c6c-4db9-99fe-6fcc0b7599ed"}, "selection_glyph": null, "id": "8c3cc180-3232-4202-9c6f-b62b45c98e3f"}, "id": "8c3cc180-3232-4202-9c6f-b62b45c98e3f"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5]}, "doc": null, "id": "9160835f-0d98-4f8c-84e2-e8075b8b1974", "column_names": ["y", "x"]}, "id": "9160835f-0d98-4f8c-84e2-e8075b8b1974"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "eb6bfe6c-7ebe-471a-a3c3-4055ba4d2188", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "eb6bfe6c-7ebe-471a-a3c3-4055ba4d2188"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "bab091d2-965c-4410-939e-15d1ece151be", "subtype": "Figure"}, "id": "60aadf7c-ffe6-4480-a384-1ff4864dd9cd", "tags": [], "doc": null}, "id": "60aadf7c-ffe6-4480-a384-1ff4864dd9cd"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "0d7add05-ba6d-48cb-bf55-fe546fe6d3e6"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "e299c12e-f35a-43c7-9728-08bb0f02cc63"}, "plot": {"type": "Plot", "id": "bab091d2-965c-4410-939e-15d1ece151be", "subtype": "Figure"}, "id": "4a1da2e4-32fc-4fb9-9d0f-fe801a3b73dd"}, "id": "4a1da2e4-32fc-4fb9-9d0f-fe801a3b73dd"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "11c3fd36-afa9-40ba-a551-802a9a69d2bc", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "11c3fd36-afa9-40ba-a551-802a9a69d2bc"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "bab091d2-965c-4410-939e-15d1ece151be", "subtype": "Figure"}, "id": "38c1c1be-5f78-410b-8a1e-5e45ccdd4fdd", "tags": [], "doc": null}, "id": "38c1c1be-5f78-410b-8a1e-5e45ccdd4fdd"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "bab091d2-965c-4410-939e-15d1ece151be", "subtype": "Figure"}, "id": "cf5f8b8d-ba6b-42f3-aca6-7f705fab73f5", "tags": [], "doc": null}, "id": "cf5f8b8d-ba6b-42f3-aca6-7f705fab73f5"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "69c40bf2-38f3-47f7-a0fc-c64f055ba4e1"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "5f75a5ad-7ee8-4981-80ad-59291d5c189c"}, "plot": {"type": "Plot", "id": "bab091d2-965c-4410-939e-15d1ece151be", "subtype": "Figure"}, "id": "1750e4b9-fea7-4eef-8717-ad8a066f9bea"}, "id": "1750e4b9-fea7-4eef-8717-ad8a066f9bea"}, {"type": "Grid", "attributes": {"band_fill_color": {"value": "navy"}, "ticker": {"type": "BasicTicker", "id": "0d7add05-ba6d-48cb-bf55-fe546fe6d3e6"}, "tags": [], "doc": null, "band_fill_alpha": {"value": 0.1}, "plot": {"type": "Plot", "id": "bab091d2-965c-4410-939e-15d1ece151be", "subtype": "Figure"}, "dimension": 1, "id": "057ed28d-24b6-4271-a1c9-d2635c4287cc"}, "id": "057ed28d-24b6-4271-a1c9-d2635c4287cc"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 1.0}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 10}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "bf32403f-4772-4725-b2b3-667b53a06f03"}, "id": "bf32403f-4772-4725-b2b3-667b53a06f03"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "eb6bfe6c-7ebe-471a-a3c3-4055ba4d2188"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "823a7fc4-bdcf-4323-9aa6-cc914f0fb78a"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "1750e4b9-fea7-4eef-8717-ad8a066f9bea"}, {"type": "Grid", "id": "ee8c9c96-ad86-4a21-82f6-f97ed6215689"}, {"type": "LinearAxis", "id": "4a1da2e4-32fc-4fb9-9d0f-fe801a3b73dd"}, {"type": "Grid", "id": "057ed28d-24b6-4271-a1c9-d2635c4287cc"}, {"type": "GlyphRenderer", "id": "8c3cc180-3232-4202-9c6f-b62b45c98e3f"}], "below": [{"type": "LinearAxis", "id": "1750e4b9-fea7-4eef-8717-ad8a066f9bea"}], "left": [{"type": "LinearAxis", "id": "4a1da2e4-32fc-4fb9-9d0f-fe801a3b73dd"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "tools": [{"type": "PanTool", "id": "a5370f0e-35ab-4e87-9e44-1e2f7f88996c"}, {"type": "WheelZoomTool", "id": "5f0e9ee9-f583-4422-9ac2-9fb9c3bdca9a"}, {"type": "BoxZoomTool", "id": "63075d3c-5983-4ca9-8f36-eacaea8f3556"}, {"type": "PreviewSaveTool", "id": "60aadf7c-ffe6-4480-a384-1ff4864dd9cd"}, {"type": "ResizeTool", "id": "cf5f8b8d-ba6b-42f3-aca6-7f705fab73f5"}, {"type": "ResetTool", "id": "16bec041-7499-46b5-9eaf-817c017626ce"}, {"type": "HelpTool", "id": "38c1c1be-5f78-410b-8a1e-5e45ccdd4fdd"}], "x_range": {"type": "DataRange1d", "id": "11c3fd36-afa9-40ba-a551-802a9a69d2bc"}, "id": "bab091d2-965c-4410-939e-15d1ece151be"}, "id": "bab091d2-965c-4410-939e-15d1ece151be", "subtype": "Figure"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("65c67a07-117f-43f0-9a16-417937bf05c8", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("65c67a07-117f-43f0-9a16-417937bf05c8", all_models);
    });
  }

}(this));