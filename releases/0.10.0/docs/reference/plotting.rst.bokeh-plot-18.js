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

  var elt = document.getElementById("45c076ce-ca51-4207-ac6b-f725ef76abaa");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '45c076ce-ca51-4207-ac6b-f725ef76abaa' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8ebee0d7-faa1-4dc4-b16a-b99ddd8a2f5c"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "e356ae29-2b34-462d-a354-179c64388185"}, "type": "WheelZoomTool", "id": "e356ae29-2b34-462d-a354-179c64388185"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "f9215c0d-ffb3-4b87-b5ad-fd4298ce287e", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "f9215c0d-ffb3-4b87-b5ad-fd4298ce287e"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "ed9d0766-389b-4f6d-8896-448048082209"}, "type": "DataRange1d", "id": "ed9d0766-389b-4f6d-8896-448048082209"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8ebee0d7-faa1-4dc4-b16a-b99ddd8a2f5c"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "9b7cb571-b70b-4ab6-8552-5b5f2df88d8c"}, "type": "PanTool", "id": "9b7cb571-b70b-4ab6-8552-5b5f2df88d8c"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8ebee0d7-faa1-4dc4-b16a-b99ddd8a2f5c"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "f6c780b3-a833-470a-9b19-45504e490f02"}, "type": "BoxZoomTool", "id": "f6c780b3-a833-470a-9b19-45504e490f02"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8ebee0d7-faa1-4dc4-b16a-b99ddd8a2f5c"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "f9215c0d-ffb3-4b87-b5ad-fd4298ce287e"}, "id": "8b78af19-7c2d-4ca9-bc42-0b5b60764546"}, "type": "Grid", "id": "8b78af19-7c2d-4ca9-bc42-0b5b60764546"}, {"attributes": {"line_color": {"value": "#74ADD1"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#74ADD1"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "3471cd88-99e8-4e99-96d5-d5509e4cc92a", "size": {"units": "screen", "field": "size"}}, "type": "Square", "id": "3471cd88-99e8-4e99-96d5-d5509e4cc92a"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "cfbc9cca-95b3-4016-8b8c-f0fd7ac9947c", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "cfbc9cca-95b3-4016-8b8c-f0fd7ac9947c"}, {"attributes": {"nonselection_glyph": {"type": "Square", "id": "f14865a6-2fc0-4d88-8a66-8acec077567d"}, "data_source": {"type": "ColumnDataSource", "id": "55223cab-e8e2-4f38-869e-9a49b67a447d"}, "tags": [], "doc": null, "selection_glyph": null, "id": "3ee9485f-0428-4aa3-a592-e8bfa0af9b80", "glyph": {"type": "Square", "id": "3471cd88-99e8-4e99-96d5-d5509e4cc92a"}}, "type": "GlyphRenderer", "id": "3ee9485f-0428-4aa3-a592-e8bfa0af9b80"}, {"attributes": {"doc": null, "id": "0503e481-ab01-4259-b3d1-5830b6621267", "tags": []}, "type": "BasicTickFormatter", "id": "0503e481-ab01-4259-b3d1-5830b6621267"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8ebee0d7-faa1-4dc4-b16a-b99ddd8a2f5c"}, "tags": [], "doc": null, "id": "f30e1f15-3c2b-4ab8-b7d8-86d70520ebc7"}, "type": "ResetTool", "id": "f30e1f15-3c2b-4ab8-b7d8-86d70520ebc7"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8ebee0d7-faa1-4dc4-b16a-b99ddd8a2f5c"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "0503e481-ab01-4259-b3d1-5830b6621267"}, "ticker": {"type": "BasicTicker", "id": "f9215c0d-ffb3-4b87-b5ad-fd4298ce287e"}, "id": "882fa9ae-d982-4762-87d3-d49277da1521"}, "type": "LinearAxis", "id": "882fa9ae-d982-4762-87d3-d49277da1521"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8ebee0d7-faa1-4dc4-b16a-b99ddd8a2f5c"}, "tags": [], "doc": null, "id": "b0f81923-393f-4b08-86c5-d1c3eff347e5"}, "type": "ResizeTool", "id": "b0f81923-393f-4b08-86c5-d1c3eff347e5"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8ebee0d7-faa1-4dc4-b16a-b99ddd8a2f5c"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "cfbc9cca-95b3-4016-8b8c-f0fd7ac9947c"}, "id": "1aa2bd64-6456-4806-b78e-9e38bf9dbb3c"}, "type": "Grid", "id": "1aa2bd64-6456-4806-b78e-9e38bf9dbb3c"}, {"subtype": "Figure", "type": "Plot", "id": "8ebee0d7-faa1-4dc4-b16a-b99ddd8a2f5c", "attributes": {"x_range": {"type": "DataRange1d", "id": "ed9d0766-389b-4f6d-8896-448048082209"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "9b7cb571-b70b-4ab6-8552-5b5f2df88d8c"}, {"type": "WheelZoomTool", "id": "e356ae29-2b34-462d-a354-179c64388185"}, {"type": "BoxZoomTool", "id": "f6c780b3-a833-470a-9b19-45504e490f02"}, {"type": "PreviewSaveTool", "id": "d0513be8-125d-4f40-9a13-058b2163101d"}, {"type": "ResizeTool", "id": "b0f81923-393f-4b08-86c5-d1c3eff347e5"}, {"type": "ResetTool", "id": "f30e1f15-3c2b-4ab8-b7d8-86d70520ebc7"}, {"type": "HelpTool", "id": "118b327f-b823-45d0-85e7-0f0e63ec57f3"}], "extra_y_ranges": {}, "plot_width": 300, "renderers": [{"type": "LinearAxis", "id": "882fa9ae-d982-4762-87d3-d49277da1521"}, {"type": "Grid", "id": "8b78af19-7c2d-4ca9-bc42-0b5b60764546"}, {"type": "LinearAxis", "id": "3f74861c-6804-478b-8adc-f5636ce7d6e1"}, {"type": "Grid", "id": "1aa2bd64-6456-4806-b78e-9e38bf9dbb3c"}, {"type": "GlyphRenderer", "id": "3ee9485f-0428-4aa3-a592-e8bfa0af9b80"}], "extra_x_ranges": {}, "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "554c8eac-8824-44cf-a060-1f9a8d89bd91"}, "above": [], "doc": null, "id": "8ebee0d7-faa1-4dc4-b16a-b99ddd8a2f5c", "y_range": {"type": "DataRange1d", "id": "72d7fd35-a7b9-4f39-88a2-9e29d83feda3"}, "below": [{"type": "LinearAxis", "id": "882fa9ae-d982-4762-87d3-d49277da1521"}], "left": [{"type": "LinearAxis", "id": "3f74861c-6804-478b-8adc-f5636ce7d6e1"}]}}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "72d7fd35-a7b9-4f39-88a2-9e29d83feda3"}, "type": "DataRange1d", "id": "72d7fd35-a7b9-4f39-88a2-9e29d83feda3"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8ebee0d7-faa1-4dc4-b16a-b99ddd8a2f5c"}, "tags": [], "doc": null, "id": "118b327f-b823-45d0-85e7-0f0e63ec57f3"}, "type": "HelpTool", "id": "118b327f-b823-45d0-85e7-0f0e63ec57f3"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "f14865a6-2fc0-4d88-8a66-8acec077567d", "size": {"units": "screen", "field": "size"}}, "type": "Square", "id": "f14865a6-2fc0-4d88-8a66-8acec077567d"}, {"attributes": {"doc": null, "id": "c6676b59-bf4d-49bf-8c33-e024af8ce6d5", "tags": []}, "type": "BasicTickFormatter", "id": "c6676b59-bf4d-49bf-8c33-e024af8ce6d5"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8ebee0d7-faa1-4dc4-b16a-b99ddd8a2f5c"}, "tags": [], "doc": null, "id": "d0513be8-125d-4f40-9a13-058b2163101d"}, "type": "PreviewSaveTool", "id": "d0513be8-125d-4f40-9a13-058b2163101d"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "554c8eac-8824-44cf-a060-1f9a8d89bd91"}, "type": "ToolEvents", "id": "554c8eac-8824-44cf-a060-1f9a8d89bd91"}, {"attributes": {"column_names": ["y", "x", "size"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [1, 2, 3], "x": [1, 2, 3], "size": [10, 20, 30]}, "id": "55223cab-e8e2-4f38-869e-9a49b67a447d"}, "type": "ColumnDataSource", "id": "55223cab-e8e2-4f38-869e-9a49b67a447d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "8ebee0d7-faa1-4dc4-b16a-b99ddd8a2f5c"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "c6676b59-bf4d-49bf-8c33-e024af8ce6d5"}, "ticker": {"type": "BasicTicker", "id": "cfbc9cca-95b3-4016-8b8c-f0fd7ac9947c"}, "id": "3f74861c-6804-478b-8adc-f5636ce7d6e1"}, "type": "LinearAxis", "id": "3f74861c-6804-478b-8adc-f5636ce7d6e1"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("45c076ce-ca51-4207-ac6b-f725ef76abaa", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("45c076ce-ca51-4207-ac6b-f725ef76abaa", all_models);
    });
  }

}(this));