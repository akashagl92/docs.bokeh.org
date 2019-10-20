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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.js"

  var elt = document.getElementById("f457d6e3-0276-4038-bafc-bfcd64cd7669");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f457d6e3-0276-4038-bafc-bfcd64cd7669' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "a672b2f9-d994-4a47-8750-5566df618eac", "type": "BasicTicker", "attributes": {"id": "a672b2f9-d994-4a47-8750-5566df618eac", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "e4100bb2-bf6c-4965-bba0-ad985428123b", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"yp01": [4.2, 2.45, 1.2, 0.45, 0.2, 0.45, 1.2, 2.45, 4.2], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "xp02": [-1.6, -1.1, -0.6, -0.09999999999999998, 0.4, 0.9, 1.4, 1.9, 2.4], "xp01": [-1.9, -1.4, -0.9, -0.4, 0.1, 0.6, 1.1, 1.6, 2.1], "ym01": [3.8, 2.05, 0.8, 0.04999999999999999, -0.2, 0.04999999999999999, 0.8, 2.05, 3.8], "xm01": [-2.1, -1.6, -1.1, -0.6, -0.1, 0.4, 0.9, 1.4, 1.9], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0]}, "column_names": ["yp01", "y", "xp01", "xp02", "ym01", "xm01", "x"], "id": "e4100bb2-bf6c-4965-bba0-ad985428123b", "doc": null, "tags": []}}, {"id": "fa1ac838-81e5-4b12-b15f-dd885e1ff39c", "type": "BasicTickFormatter", "attributes": {"id": "fa1ac838-81e5-4b12-b15f-dd885e1ff39c", "doc": null, "tags": []}}, {"id": "a66cda47-6f44-412c-9405-a90bcc4bb845", "type": "LinearAxis", "attributes": {"id": "a66cda47-6f44-412c-9405-a90bcc4bb845", "formatter": {"id": "fa1ac838-81e5-4b12-b15f-dd885e1ff39c", "type": "BasicTickFormatter"}, "plot": {"id": "4073c585-68a9-474b-9172-d2075d96dcbc", "type": "Plot"}, "ticker": {"id": "a672b2f9-d994-4a47-8750-5566df618eac", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "62a55769-b3fd-46a6-a191-d390858b2121", "type": "ToolEvents", "attributes": {"geometries": [], "id": "62a55769-b3fd-46a6-a191-d390858b2121", "doc": null, "tags": []}}, {"id": "173d85a7-0cae-42de-924c-bb85935a810d", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "e4100bb2-bf6c-4965-bba0-ad985428123b", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "173d85a7-0cae-42de-924c-bb85935a810d", "doc": null, "tags": []}}, {"id": "6966c099-e612-484b-8e7c-b9aff8c819c0", "type": "BasicTicker", "attributes": {"id": "6966c099-e612-484b-8e7c-b9aff8c819c0", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "e36902ce-eff8-47b7-8b73-2e25c06ef9a0", "type": "LinearAxis", "attributes": {"id": "e36902ce-eff8-47b7-8b73-2e25c06ef9a0", "formatter": {"id": "41b4796f-a9b1-48cb-9274-5845be450aca", "type": "BasicTickFormatter"}, "plot": {"id": "4073c585-68a9-474b-9172-d2075d96dcbc", "type": "Plot"}, "ticker": {"id": "6966c099-e612-484b-8e7c-b9aff8c819c0", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "4073c585-68a9-474b-9172-d2075d96dcbc", "type": "Plot", "attributes": {"tool_events": {"id": "62a55769-b3fd-46a6-a191-d390858b2121", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "520d451f-3578-4ca0-bd7e-60bf87542e25", "type": "GlyphRenderer"}, {"id": "e36902ce-eff8-47b7-8b73-2e25c06ef9a0", "type": "LinearAxis"}, {"id": "a66cda47-6f44-412c-9405-a90bcc4bb845", "type": "LinearAxis"}, {"id": "051d10a2-ceb4-43a4-80dc-5184887efff5", "type": "Grid"}, {"id": "db3e2c82-1aea-4c4b-8d32-21bc1be7ee52", "type": "Grid"}], "left": [{"id": "a66cda47-6f44-412c-9405-a90bcc4bb845", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "173d85a7-0cae-42de-924c-bb85935a810d", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "4073c585-68a9-474b-9172-d2075d96dcbc", "y_range": {"id": "e1993e89-ab96-44c0-9ab1-4db304604402", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "e36902ce-eff8-47b7-8b73-2e25c06ef9a0", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "cd14cd3d-3a44-43a5-b0e0-fa5810c34390", "type": "Bezier", "attributes": {"cy1": {"field": "ym01", "units": "data"}, "y0": {"field": "y", "units": "data"}, "doc": null, "y1": {"field": "y", "units": "data"}, "line_width": {"value": 2, "units": "data"}, "x1": {"field": "xp02", "units": "data"}, "x0": {"field": "x", "units": "data"}, "cx1": {"field": "xm01", "units": "data"}, "id": "cd14cd3d-3a44-43a5-b0e0-fa5810c34390", "line_color": {"value": "#D95F02"}, "cy0": {"field": "yp01", "units": "data"}, "cx0": {"field": "xp01", "units": "data"}, "tags": []}}, {"id": "db3e2c82-1aea-4c4b-8d32-21bc1be7ee52", "type": "Grid", "attributes": {"id": "db3e2c82-1aea-4c4b-8d32-21bc1be7ee52", "plot": {"id": "4073c585-68a9-474b-9172-d2075d96dcbc", "type": "Plot"}, "dimension": 1, "ticker": {"id": "a672b2f9-d994-4a47-8750-5566df618eac", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "e1993e89-ab96-44c0-9ab1-4db304604402", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "e4100bb2-bf6c-4965-bba0-ad985428123b", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "e1993e89-ab96-44c0-9ab1-4db304604402", "doc": null, "tags": []}}, {"id": "41b4796f-a9b1-48cb-9274-5845be450aca", "type": "BasicTickFormatter", "attributes": {"id": "41b4796f-a9b1-48cb-9274-5845be450aca", "doc": null, "tags": []}}, {"id": "520d451f-3578-4ca0-bd7e-60bf87542e25", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "e4100bb2-bf6c-4965-bba0-ad985428123b", "type": "ColumnDataSource"}, "id": "520d451f-3578-4ca0-bd7e-60bf87542e25", "glyph": {"id": "cd14cd3d-3a44-43a5-b0e0-fa5810c34390", "type": "Bezier"}, "tags": [], "doc": null}}, {"id": "051d10a2-ceb4-43a4-80dc-5184887efff5", "type": "Grid", "attributes": {"id": "051d10a2-ceb4-43a4-80dc-5184887efff5", "plot": {"id": "4073c585-68a9-474b-9172-d2075d96dcbc", "type": "Plot"}, "dimension": 0, "ticker": {"id": "6966c099-e612-484b-8e7c-b9aff8c819c0", "type": "BasicTicker"}, "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("f457d6e3-0276-4038-bafc-bfcd64cd7669", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("f457d6e3-0276-4038-bafc-bfcd64cd7669", all_models);
    });
  }

}(this));