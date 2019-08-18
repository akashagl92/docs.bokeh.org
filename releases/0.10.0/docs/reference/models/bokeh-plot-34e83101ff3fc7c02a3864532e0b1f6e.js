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

  var elt = document.getElementById("6edb26b4-a580-4d1c-8351-92730c5119ad");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6edb26b4-a580-4d1c-8351-92730c5119ad' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "3dc0532c-f3de-4796-b346-a15238741ae8"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "d7e64e88-90c2-48f3-9a53-573ba7b70e43"}, "id": "79b97521-a1f1-4925-8bd3-62c077ef46af"}, "type": "Grid", "id": "79b97521-a1f1-4925-8bd3-62c077ef46af"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "0727db4d-02ab-447b-a567-bbf5b29788ed"}, "type": "DataRange1d", "id": "0727db4d-02ab-447b-a567-bbf5b29788ed"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "4bb9fd55-7e90-4e21-adba-d6581cbe44cf"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "e9d7496b-e863-427d-a5bd-9ae4bff19634"}, {"type": "LinearAxis", "id": "82a8e1e5-3156-4d8b-8603-8dce28f8a1aa"}, {"type": "LinearAxis", "id": "681a5e55-9026-4fbe-a732-fb68890da531"}, {"type": "Grid", "id": "6edb46fa-111f-48ed-9398-751ca21c0054"}, {"type": "Grid", "id": "79b97521-a1f1-4925-8bd3-62c077ef46af"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "e96d489e-1560-4dd1-888d-68b7dffeff77"}, "h_symmetry": false, "tools": [], "id": "3dc0532c-f3de-4796-b346-a15238741ae8", "title": null, "y_range": {"type": "DataRange1d", "id": "0727db4d-02ab-447b-a567-bbf5b29788ed"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "82a8e1e5-3156-4d8b-8603-8dce28f8a1aa"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "681a5e55-9026-4fbe-a732-fb68890da531"}]}, "type": "Plot", "id": "3dc0532c-f3de-4796-b346-a15238741ae8"}, {"attributes": {"doc": null, "id": "507dbf24-3b66-4793-bb29-64247a259948", "tags": []}, "type": "BasicTickFormatter", "id": "507dbf24-3b66-4793-bb29-64247a259948"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "1b643aec-fc9c-42c3-8d90-5d9841b41c58"}, "type": "BasicTicker", "id": "1b643aec-fc9c-42c3-8d90-5d9841b41c58"}, {"attributes": {"fill_color": {"value": "#74add1"}, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "93cdc6f9-7fea-427b-9730-188aad50df2d", "size": {"units": "screen", "field": "sizes"}}, "type": "Square", "id": "93cdc6f9-7fea-427b-9730-188aad50df2d"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "d7e64e88-90c2-48f3-9a53-573ba7b70e43"}, "type": "BasicTicker", "id": "d7e64e88-90c2-48f3-9a53-573ba7b70e43"}, {"attributes": {"plot": {"type": "Plot", "id": "3dc0532c-f3de-4796-b346-a15238741ae8"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "1b643aec-fc9c-42c3-8d90-5d9841b41c58"}, "id": "6edb46fa-111f-48ed-9398-751ca21c0054"}, "type": "Grid", "id": "6edb46fa-111f-48ed-9398-751ca21c0054"}, {"attributes": {"column_names": ["y", "x", "sizes"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "id": "b085b40e-3978-46b2-9726-965a2a43577d"}, "type": "ColumnDataSource", "id": "b085b40e-3978-46b2-9726-965a2a43577d"}, {"attributes": {"plot": {"type": "Plot", "id": "3dc0532c-f3de-4796-b346-a15238741ae8"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "ef150216-7d47-4bab-9230-e297c61e7590"}, "ticker": {"type": "BasicTicker", "id": "d7e64e88-90c2-48f3-9a53-573ba7b70e43"}, "id": "681a5e55-9026-4fbe-a732-fb68890da531"}, "type": "LinearAxis", "id": "681a5e55-9026-4fbe-a732-fb68890da531"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "4bb9fd55-7e90-4e21-adba-d6581cbe44cf"}, "type": "DataRange1d", "id": "4bb9fd55-7e90-4e21-adba-d6581cbe44cf"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "e96d489e-1560-4dd1-888d-68b7dffeff77"}, "type": "ToolEvents", "id": "e96d489e-1560-4dd1-888d-68b7dffeff77"}, {"attributes": {"plot": {"type": "Plot", "id": "3dc0532c-f3de-4796-b346-a15238741ae8"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "507dbf24-3b66-4793-bb29-64247a259948"}, "ticker": {"type": "BasicTicker", "id": "1b643aec-fc9c-42c3-8d90-5d9841b41c58"}, "id": "82a8e1e5-3156-4d8b-8603-8dce28f8a1aa"}, "type": "LinearAxis", "id": "82a8e1e5-3156-4d8b-8603-8dce28f8a1aa"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "b085b40e-3978-46b2-9726-965a2a43577d"}, "tags": [], "doc": null, "selection_glyph": null, "id": "e9d7496b-e863-427d-a5bd-9ae4bff19634", "glyph": {"type": "Square", "id": "93cdc6f9-7fea-427b-9730-188aad50df2d"}}, "type": "GlyphRenderer", "id": "e9d7496b-e863-427d-a5bd-9ae4bff19634"}, {"attributes": {"doc": null, "id": "ef150216-7d47-4bab-9230-e297c61e7590", "tags": []}, "type": "BasicTickFormatter", "id": "ef150216-7d47-4bab-9230-e297c61e7590"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("6edb26b4-a580-4d1c-8351-92730c5119ad", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("6edb26b4-a580-4d1c-8351-92730c5119ad", all_models);
    });
  }

}(this));