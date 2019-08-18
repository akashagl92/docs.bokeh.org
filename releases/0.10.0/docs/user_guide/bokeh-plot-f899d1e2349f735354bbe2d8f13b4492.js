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

  var elt = document.getElementById("60bb7b73-bbee-463a-b4d3-737cbd21d264");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '60bb7b73-bbee-463a-b4d3-737cbd21d264' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8a8b30b7-99dd-42bc-a760-d5aa138f6ba6"}, "tags": [], "doc": null, "renderers": [], "id": "44b88dbd-a867-433f-8762-69fce9508912", "callback": null, "names": [], "always_active": true}, "type": "TapTool", "id": "44b88dbd-a867-433f-8762-69fce9508912"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8a8b30b7-99dd-42bc-a760-d5aa138f6ba6"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "53f24681-c3a4-4719-8046-8ea1610a9104"}, "id": "8ed71b2a-f817-47d8-a8f8-c7a480cba16b"}, "type": "Grid", "id": "8ed71b2a-f817-47d8-a8f8-c7a480cba16b"}, {"attributes": {"doc": null, "id": "ac43f052-c23b-4a92-8a9e-ef6e444d6c31", "tags": []}, "type": "BasicTickFormatter", "id": "ac43f052-c23b-4a92-8a9e-ef6e444d6c31"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "8162f65c-f825-46e9-b790-9f84c8b1dacc"}, "type": "DataRange1d", "id": "8162f65c-f825-46e9-b790-9f84c8b1dacc"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "aedec951-aca0-49d8-a665-128e986a0050"}, "type": "ToolEvents", "id": "aedec951-aca0-49d8-a665-128e986a0050"}, {"subtype": "Figure", "type": "Plot", "id": "8a8b30b7-99dd-42bc-a760-d5aa138f6ba6", "attributes": {"x_range": {"type": "DataRange1d", "id": "8c247022-d50e-44ba-8d13-f7f047601775"}, "right": [], "tags": [], "tools": [{"type": "TapTool", "id": "44b88dbd-a867-433f-8762-69fce9508912"}], "title": "Select a circle", "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "6bcfb253-5c9b-4ad1-9395-c1ebdcd03ac4"}, {"type": "Grid", "id": "8ed71b2a-f817-47d8-a8f8-c7a480cba16b"}, {"type": "LinearAxis", "id": "e27f9435-a213-47a1-af13-d56a2b4de9e2"}, {"type": "Grid", "id": "94f221fe-2256-476b-9c1c-560a7e3f3e38"}, {"type": "GlyphRenderer", "id": "82974c21-0dad-42d3-aa33-7d0e701032be"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "aedec951-aca0-49d8-a665-128e986a0050"}, "above": [], "doc": null, "id": "8a8b30b7-99dd-42bc-a760-d5aa138f6ba6", "y_range": {"type": "DataRange1d", "id": "8162f65c-f825-46e9-b790-9f84c8b1dacc"}, "below": [{"type": "LinearAxis", "id": "6bcfb253-5c9b-4ad1-9395-c1ebdcd03ac4"}], "left": [{"type": "LinearAxis", "id": "e27f9435-a213-47a1-af13-d56a2b4de9e2"}]}}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "53f24681-c3a4-4719-8046-8ea1610a9104", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "53f24681-c3a4-4719-8046-8ea1610a9104"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "78b8b3f9-f0da-4c1b-987c-b77482efe83f", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "78b8b3f9-f0da-4c1b-987c-b77482efe83f"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "df1c9f6c-23c0-4bef-903e-1cda78e64802"}, "data_source": {"type": "ColumnDataSource", "id": "28a5f7af-46dc-42f7-a18a-63719c0f54e7"}, "name": "mycircle", "tags": [], "doc": null, "selection_glyph": {"type": "Circle", "id": "7825b835-fb69-4438-9df1-aef7925d551b"}, "id": "82974c21-0dad-42d3-aa33-7d0e701032be", "glyph": {"type": "Circle", "id": "7d3b1619-c548-4d1c-ae6b-d1da5a998d18"}}, "type": "GlyphRenderer", "id": "82974c21-0dad-42d3-aa33-7d0e701032be"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8a8b30b7-99dd-42bc-a760-d5aa138f6ba6"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "ac43f052-c23b-4a92-8a9e-ef6e444d6c31"}, "ticker": {"type": "BasicTicker", "id": "53f24681-c3a4-4719-8046-8ea1610a9104"}, "id": "6bcfb253-5c9b-4ad1-9395-c1ebdcd03ac4"}, "type": "LinearAxis", "id": "6bcfb253-5c9b-4ad1-9395-c1ebdcd03ac4"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8a8b30b7-99dd-42bc-a760-d5aa138f6ba6"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "78b8b3f9-f0da-4c1b-987c-b77482efe83f"}, "id": "94f221fe-2256-476b-9c1c-560a7e3f3e38"}, "type": "Grid", "id": "94f221fe-2256-476b-9c1c-560a7e3f3e38"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8a8b30b7-99dd-42bc-a760-d5aa138f6ba6"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "c59b89bd-44de-4990-82de-bbbc2b3dc925"}, "ticker": {"type": "BasicTicker", "id": "78b8b3f9-f0da-4c1b-987c-b77482efe83f"}, "id": "e27f9435-a213-47a1-af13-d56a2b4de9e2"}, "type": "LinearAxis", "id": "e27f9435-a213-47a1-af13-d56a2b4de9e2"}, {"attributes": {"line_color": null, "fill_color": {"value": "firebrick"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "id": "7825b835-fb69-4438-9df1-aef7925d551b"}, "type": "Circle", "id": "7825b835-fb69-4438-9df1-aef7925d551b"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5]}, "id": "28a5f7af-46dc-42f7-a18a-63719c0f54e7"}, "type": "ColumnDataSource", "id": "28a5f7af-46dc-42f7-a18a-63719c0f54e7"}, {"attributes": {"doc": null, "id": "c59b89bd-44de-4990-82de-bbbc2b3dc925", "tags": []}, "type": "BasicTickFormatter", "id": "c59b89bd-44de-4990-82de-bbbc2b3dc925"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "8c247022-d50e-44ba-8d13-f7f047601775"}, "type": "DataRange1d", "id": "8c247022-d50e-44ba-8d13-f7f047601775"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "7d3b1619-c548-4d1c-ae6b-d1da5a998d18", "size": {"units": "screen", "value": 50}}, "type": "Circle", "id": "7d3b1619-c548-4d1c-ae6b-d1da5a998d18"}, {"attributes": {"line_color": {"value": "firebrick"}, "fill_color": {"value": "blue"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.2}, "id": "df1c9f6c-23c0-4bef-903e-1cda78e64802"}, "type": "Circle", "id": "df1c9f6c-23c0-4bef-903e-1cda78e64802"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("60bb7b73-bbee-463a-b4d3-737cbd21d264", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("60bb7b73-bbee-463a-b4d3-737cbd21d264", all_models);
    });
  }

}(this));