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

  var elt = document.getElementById("ab6aec2a-35ef-4ac7-b023-fffac8c50075");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ab6aec2a-35ef-4ac7-b023-fffac8c50075' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"geometries": [], "tags": [], "doc": null, "id": "1779bc6d-c402-4d42-b260-c07578b64592"}, "type": "ToolEvents", "id": "1779bc6d-c402-4d42-b260-c07578b64592"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9348cf84-2dc3-451a-9a0d-dbaf31ef0b33"}, "tags": [], "doc": null, "id": "ba112b75-7787-4bb6-beec-3e483fe331c8"}, "type": "ResetTool", "id": "ba112b75-7787-4bb6-beec-3e483fe331c8"}, {"attributes": {"doc": null, "id": "35b03656-ddb9-4d7b-bca7-d20d4f927e3c", "tags": []}, "type": "BasicTickFormatter", "id": "35b03656-ddb9-4d7b-bca7-d20d4f927e3c"}, {"attributes": {"column_names": ["xs", "ys", "line_color", "line_alpha"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"line_color": ["firebrick", "navy"], "xs": [[1, 3, 2], [3, 4, 6, 6]], "ys": [[2, 1, 4], [4, 7, 8, 5]], "line_alpha": [0.8, 0.3]}, "id": "c53403ea-4219-42d4-9140-bb5e0e053a32"}, "type": "ColumnDataSource", "id": "c53403ea-4219-42d4-9140-bb5e0e053a32"}, {"attributes": {"nonselection_glyph": {"type": "MultiLine", "id": "8803fd65-97a4-42f6-a411-3793269b2e37"}, "data_source": {"type": "ColumnDataSource", "id": "c53403ea-4219-42d4-9140-bb5e0e053a32"}, "tags": [], "doc": null, "selection_glyph": null, "id": "e515b8ff-fba8-40fe-9e98-a5a383d50104", "glyph": {"type": "MultiLine", "id": "999f3994-4cb9-4c12-b3d2-1f5232f29529"}}, "type": "GlyphRenderer", "id": "e515b8ff-fba8-40fe-9e98-a5a383d50104"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9348cf84-2dc3-451a-9a0d-dbaf31ef0b33"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "d94515b3-9436-4846-b3d5-0599f826031a"}, "id": "6f292300-3542-479d-90a9-775567700e81"}, "type": "Grid", "id": "6f292300-3542-479d-90a9-775567700e81"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9348cf84-2dc3-451a-9a0d-dbaf31ef0b33"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "722733a3-129a-41dd-9666-7ea7b24cd70f"}, "type": "BoxZoomTool", "id": "722733a3-129a-41dd-9666-7ea7b24cd70f"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "c94b3142-4cb3-4a0f-86f8-460ea7223c1a"}, "type": "DataRange1d", "id": "c94b3142-4cb3-4a0f-86f8-460ea7223c1a"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9348cf84-2dc3-451a-9a0d-dbaf31ef0b33"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "35b03656-ddb9-4d7b-bca7-d20d4f927e3c"}, "ticker": {"type": "BasicTicker", "id": "f9a481bc-65f9-4c85-99ff-fc004a3885a0"}, "id": "eb1eab78-5ed1-487b-ba15-706eb4ed1586"}, "type": "LinearAxis", "id": "eb1eab78-5ed1-487b-ba15-706eb4ed1586"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9348cf84-2dc3-451a-9a0d-dbaf31ef0b33"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "b1998ea9-7c34-4afb-8037-15f727d95ca6"}, "type": "PanTool", "id": "b1998ea9-7c34-4afb-8037-15f727d95ca6"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9348cf84-2dc3-451a-9a0d-dbaf31ef0b33"}, "tags": [], "doc": null, "id": "669c076d-ce9b-4a4a-9de6-8d766cccaac5"}, "type": "PreviewSaveTool", "id": "669c076d-ce9b-4a4a-9de6-8d766cccaac5"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9348cf84-2dc3-451a-9a0d-dbaf31ef0b33"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "7b8e7958-aea3-4f27-a255-223923d86af5"}, "ticker": {"type": "BasicTicker", "id": "d94515b3-9436-4846-b3d5-0599f826031a"}, "id": "73ef15ac-1077-4e08-a7bb-c19008f2266f"}, "type": "LinearAxis", "id": "73ef15ac-1077-4e08-a7bb-c19008f2266f"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9348cf84-2dc3-451a-9a0d-dbaf31ef0b33"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "f9a481bc-65f9-4c85-99ff-fc004a3885a0"}, "id": "cf2807a9-c93b-4289-bc7e-d703a2deab98"}, "type": "Grid", "id": "cf2807a9-c93b-4289-bc7e-d703a2deab98"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "d94515b3-9436-4846-b3d5-0599f826031a", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "d94515b3-9436-4846-b3d5-0599f826031a"}, {"subtype": "Figure", "type": "Plot", "id": "9348cf84-2dc3-451a-9a0d-dbaf31ef0b33", "attributes": {"x_range": {"type": "DataRange1d", "id": "c94b3142-4cb3-4a0f-86f8-460ea7223c1a"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "b1998ea9-7c34-4afb-8037-15f727d95ca6"}, {"type": "WheelZoomTool", "id": "e6e15fe4-0774-44ce-a607-85dc6315b773"}, {"type": "BoxZoomTool", "id": "722733a3-129a-41dd-9666-7ea7b24cd70f"}, {"type": "PreviewSaveTool", "id": "669c076d-ce9b-4a4a-9de6-8d766cccaac5"}, {"type": "ResizeTool", "id": "091f67fd-cc39-4a95-a805-9dec7f35c2e3"}, {"type": "ResetTool", "id": "ba112b75-7787-4bb6-beec-3e483fe331c8"}, {"type": "HelpTool", "id": "6651267f-7dcc-496b-a1cd-da2c63d9cfdb"}], "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "eb1eab78-5ed1-487b-ba15-706eb4ed1586"}, {"type": "Grid", "id": "cf2807a9-c93b-4289-bc7e-d703a2deab98"}, {"type": "LinearAxis", "id": "73ef15ac-1077-4e08-a7bb-c19008f2266f"}, {"type": "Grid", "id": "6f292300-3542-479d-90a9-775567700e81"}, {"type": "GlyphRenderer", "id": "e515b8ff-fba8-40fe-9e98-a5a383d50104"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "1779bc6d-c402-4d42-b260-c07578b64592"}, "above": [], "doc": null, "id": "9348cf84-2dc3-451a-9a0d-dbaf31ef0b33", "y_range": {"type": "DataRange1d", "id": "a41f19d7-aebf-4119-a5d4-492da62db9ae"}, "below": [{"type": "LinearAxis", "id": "eb1eab78-5ed1-487b-ba15-706eb4ed1586"}], "left": [{"type": "LinearAxis", "id": "73ef15ac-1077-4e08-a7bb-c19008f2266f"}]}}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "line_width": {"value": 4}, "doc": null, "tags": [], "xs": {"field": "xs"}, "ys": {"field": "ys"}, "id": "8803fd65-97a4-42f6-a411-3793269b2e37"}, "type": "MultiLine", "id": "8803fd65-97a4-42f6-a411-3793269b2e37"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9348cf84-2dc3-451a-9a0d-dbaf31ef0b33"}, "tags": [], "doc": null, "id": "091f67fd-cc39-4a95-a805-9dec7f35c2e3"}, "type": "ResizeTool", "id": "091f67fd-cc39-4a95-a805-9dec7f35c2e3"}, {"attributes": {"doc": null, "id": "7b8e7958-aea3-4f27-a255-223923d86af5", "tags": []}, "type": "BasicTickFormatter", "id": "7b8e7958-aea3-4f27-a255-223923d86af5"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "a41f19d7-aebf-4119-a5d4-492da62db9ae"}, "type": "DataRange1d", "id": "a41f19d7-aebf-4119-a5d4-492da62db9ae"}, {"attributes": {"line_color": {"field": "line_color"}, "line_alpha": {"field": "line_alpha"}, "line_width": {"value": 4}, "doc": null, "tags": [], "xs": {"field": "xs"}, "ys": {"field": "ys"}, "id": "999f3994-4cb9-4c12-b3d2-1f5232f29529"}, "type": "MultiLine", "id": "999f3994-4cb9-4c12-b3d2-1f5232f29529"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "f9a481bc-65f9-4c85-99ff-fc004a3885a0", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "f9a481bc-65f9-4c85-99ff-fc004a3885a0"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9348cf84-2dc3-451a-9a0d-dbaf31ef0b33"}, "tags": [], "doc": null, "id": "6651267f-7dcc-496b-a1cd-da2c63d9cfdb"}, "type": "HelpTool", "id": "6651267f-7dcc-496b-a1cd-da2c63d9cfdb"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "9348cf84-2dc3-451a-9a0d-dbaf31ef0b33"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "e6e15fe4-0774-44ce-a607-85dc6315b773"}, "type": "WheelZoomTool", "id": "e6e15fe4-0774-44ce-a607-85dc6315b773"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("ab6aec2a-35ef-4ac7-b023-fffac8c50075", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("ab6aec2a-35ef-4ac7-b023-fffac8c50075", all_models);
    });
  }

}(this));