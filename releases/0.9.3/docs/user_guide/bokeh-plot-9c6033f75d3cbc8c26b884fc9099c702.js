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

  var elt = document.getElementById("9dee6cb2-ff53-4ae7-8738-6f21f3aebfe9");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '9dee6cb2-ff53-4ae7-8738-6f21f3aebfe9' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "04d57624-d06d-4719-aaf9-6b2d08edaaf6"}, "tags": [], "glyph": {"type": "Patch", "id": "ba6f93f0-5ddc-45fe-a7cf-607eba738310"}, "doc": null, "nonselection_glyph": {"type": "Patch", "id": "dbf65079-882d-4319-a324-2e923aeabca3"}, "selection_glyph": null, "id": "f67a0e9e-1250-4c32-a624-d3bfe1e8b40c"}, "id": "f67a0e9e-1250-4c32-a624-d3bfe1e8b40c"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "4459a3f0-bd6b-44ea-8399-1d451b88fa3a"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "30191199-85e7-4af5-95e3-3b0d2c3fe2e8"}, "plot": {"type": "Plot", "id": "54c834b6-14bf-4c1b-83ca-073989d130e9", "subtype": "Figure"}, "id": "4254cfb4-6e27-47ae-bb7c-f99976843c62"}, "id": "4254cfb4-6e27-47ae-bb7c-f99976843c62"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "54c834b6-14bf-4c1b-83ca-073989d130e9", "subtype": "Figure"}, "id": "5be24041-f58a-4cbb-9141-336c58f93383"}, "id": "5be24041-f58a-4cbb-9141-336c58f93383"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "6fafe034-7554-4e4b-ac8d-11a93b066939"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "d4ed776c-cf98-4b4d-967e-29c89a8ba42a"}, "plot": {"type": "Plot", "id": "54c834b6-14bf-4c1b-83ca-073989d130e9", "subtype": "Figure"}, "id": "fc9a4a58-7854-4e13-9c71-31d581949be6"}, "id": "fc9a4a58-7854-4e13-9c71-31d581949be6"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "2b12cf56-1103-4f8f-b91b-56966dac4742"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "4da82811-2b2a-4bf2-b0cf-3371984bae13"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "4254cfb4-6e27-47ae-bb7c-f99976843c62"}, {"type": "Grid", "id": "f08a28f3-3b98-463d-8547-56bae31c05ac"}, {"type": "LinearAxis", "id": "fc9a4a58-7854-4e13-9c71-31d581949be6"}, {"type": "Grid", "id": "61127aa6-a99d-4ca4-9817-4c632a6d65b3"}, {"type": "GlyphRenderer", "id": "f67a0e9e-1250-4c32-a624-d3bfe1e8b40c"}], "below": [{"type": "LinearAxis", "id": "4254cfb4-6e27-47ae-bb7c-f99976843c62"}], "left": [{"type": "LinearAxis", "id": "fc9a4a58-7854-4e13-9c71-31d581949be6"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "tools": [{"type": "PanTool", "id": "69bd28c0-b57a-4a3f-95a8-5adf99cc6c40"}, {"type": "WheelZoomTool", "id": "5be24041-f58a-4cbb-9141-336c58f93383"}, {"type": "BoxZoomTool", "id": "bc7a4b4b-9030-432d-8973-3b2a59eeb5c2"}, {"type": "PreviewSaveTool", "id": "3c85578e-89ae-4903-a322-a60e94ab12bb"}, {"type": "ResizeTool", "id": "c3ec85ea-5f07-49fb-a16c-65e95d4b62f3"}, {"type": "ResetTool", "id": "ec7ae6b6-b62b-417a-af7b-5ef22f9cc86e"}, {"type": "HelpTool", "id": "205adc18-878c-4604-97b5-c091ce06e705"}], "x_range": {"type": "DataRange1d", "id": "81bd48ed-d740-420d-9c24-5e9b9f45801b"}, "id": "54c834b6-14bf-4c1b-83ca-073989d130e9"}, "id": "54c834b6-14bf-4c1b-83ca-073989d130e9", "subtype": "Figure"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "2b12cf56-1103-4f8f-b91b-56966dac4742", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "2b12cf56-1103-4f8f-b91b-56966dac4742"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "54c834b6-14bf-4c1b-83ca-073989d130e9", "subtype": "Figure"}, "id": "205adc18-878c-4604-97b5-c091ce06e705", "tags": [], "doc": null}, "id": "205adc18-878c-4604-97b5-c091ce06e705"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "6fafe034-7554-4e4b-ac8d-11a93b066939"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "54c834b6-14bf-4c1b-83ca-073989d130e9", "subtype": "Figure"}, "dimension": 1, "id": "61127aa6-a99d-4ca4-9817-4c632a6d65b3"}, "id": "61127aa6-a99d-4ca4-9817-4c632a6d65b3"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "54c834b6-14bf-4c1b-83ca-073989d130e9", "subtype": "Figure"}, "id": "c3ec85ea-5f07-49fb-a16c-65e95d4b62f3", "tags": [], "doc": null}, "id": "c3ec85ea-5f07-49fb-a16c-65e95d4b62f3"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "54c834b6-14bf-4c1b-83ca-073989d130e9", "subtype": "Figure"}, "id": "69bd28c0-b57a-4a3f-95a8-5adf99cc6c40"}, "id": "69bd28c0-b57a-4a3f-95a8-5adf99cc6c40"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "4da82811-2b2a-4bf2-b0cf-3371984bae13", "tags": [], "geometries": []}, "id": "4da82811-2b2a-4bf2-b0cf-3371984bae13"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "4459a3f0-bd6b-44ea-8399-1d451b88fa3a"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "54c834b6-14bf-4c1b-83ca-073989d130e9", "subtype": "Figure"}, "dimension": 0, "id": "f08a28f3-3b98-463d-8547-56bae31c05ac"}, "id": "f08a28f3-3b98-463d-8547-56bae31c05ac"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "54c834b6-14bf-4c1b-83ca-073989d130e9", "subtype": "Figure"}, "id": "bc7a4b4b-9030-432d-8973-3b2a59eeb5c2"}, "id": "bc7a4b4b-9030-432d-8973-3b2a59eeb5c2"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "81bd48ed-d740-420d-9c24-5e9b9f45801b", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "81bd48ed-d740-420d-9c24-5e9b9f45801b"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [6.0, 7.0, 5.0, "NaN", 7.0, 3.0, 6.0], "x": [1.0, 2.0, 3.0, "NaN", 4.0, 5.0, 6.0]}, "doc": null, "id": "04d57624-d06d-4719-aaf9-6b2d08edaaf6", "column_names": ["y", "x"]}, "id": "04d57624-d06d-4719-aaf9-6b2d08edaaf6"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "4459a3f0-bd6b-44ea-8399-1d451b88fa3a"}, "id": "4459a3f0-bd6b-44ea-8399-1d451b88fa3a"}, {"type": "Patch", "attributes": {"fill_alpha": {"value": 0.1}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "dbf65079-882d-4319-a324-2e923aeabca3", "line_alpha": {"value": 0.1}}, "id": "dbf65079-882d-4319-a324-2e923aeabca3"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "30191199-85e7-4af5-95e3-3b0d2c3fe2e8", "tags": []}, "id": "30191199-85e7-4af5-95e3-3b0d2c3fe2e8"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "54c834b6-14bf-4c1b-83ca-073989d130e9", "subtype": "Figure"}, "id": "ec7ae6b6-b62b-417a-af7b-5ef22f9cc86e", "tags": [], "doc": null}, "id": "ec7ae6b6-b62b-417a-af7b-5ef22f9cc86e"}, {"type": "Patch", "attributes": {"fill_alpha": {"value": 0.5}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "ba6f93f0-5ddc-45fe-a7cf-607eba738310", "line_alpha": {"value": 0.5}}, "id": "ba6f93f0-5ddc-45fe-a7cf-607eba738310"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "6fafe034-7554-4e4b-ac8d-11a93b066939"}, "id": "6fafe034-7554-4e4b-ac8d-11a93b066939"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "d4ed776c-cf98-4b4d-967e-29c89a8ba42a", "tags": []}, "id": "d4ed776c-cf98-4b4d-967e-29c89a8ba42a"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "54c834b6-14bf-4c1b-83ca-073989d130e9", "subtype": "Figure"}, "id": "3c85578e-89ae-4903-a322-a60e94ab12bb", "tags": [], "doc": null}, "id": "3c85578e-89ae-4903-a322-a60e94ab12bb"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("9dee6cb2-ff53-4ae7-8738-6f21f3aebfe9", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("9dee6cb2-ff53-4ae7-8738-6f21f3aebfe9", all_models);
    });
  }

}(this));