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

  var elt = document.getElementById("0d8b94d6-1301-463e-b50d-63bcadffecdd");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0d8b94d6-1301-463e-b50d-63bcadffecdd' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "44a9bb2d-7266-48ef-b885-b54f1be517a6", "type": "BasicTickFormatter", "attributes": {"id": "44a9bb2d-7266-48ef-b885-b54f1be517a6", "doc": null, "tags": []}}, {"id": "b51f8dde-23d2-494f-8e22-f6019b2b2598", "type": "BasicTickFormatter", "attributes": {"id": "b51f8dde-23d2-494f-8e22-f6019b2b2598", "doc": null, "tags": []}}, {"id": "7773d927-fc51-4141-ba15-ab8d3e08878e", "type": "ToolEvents", "attributes": {"geometries": [], "id": "7773d927-fc51-4141-ba15-ab8d3e08878e", "doc": null, "tags": []}}, {"id": "aa34ad25-e74c-45fa-946d-c5de50e85fff", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "e2ca5875-4cc1-44d7-85f8-75c44a222eb4", "type": "ColumnDataSource"}, "id": "aa34ad25-e74c-45fa-946d-c5de50e85fff", "glyph": {"id": "4eb46123-1f98-4ba9-9abc-f5b61103e0e4", "type": "Quadratic"}, "tags": [], "doc": null}}, {"id": "092f810f-0e0d-4de2-b954-e380e56a175b", "type": "LinearAxis", "attributes": {"id": "092f810f-0e0d-4de2-b954-e380e56a175b", "formatter": {"id": "44a9bb2d-7266-48ef-b885-b54f1be517a6", "type": "BasicTickFormatter"}, "plot": {"id": "59e60351-357e-4c92-8b26-6f0424b02fbf", "type": "Plot"}, "ticker": {"id": "e46c5d72-bf92-4019-b70b-3dc9e0dd3459", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "e2ca5875-4cc1-44d7-85f8-75c44a222eb4", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"xp02": [-1.6, -1.1, -0.6, -0.09999999999999998, 0.4, 0.9, 1.4, 1.9, 2.4], "yp01": [4.2, 2.45, 1.2, 0.45, 0.2, 0.45, 1.2, 2.45, 4.2], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "xp01": [-1.9, -1.4, -0.9, -0.4, 0.1, 0.6, 1.1, 1.6, 2.1]}, "column_names": ["xp01", "yp01", "y", "x", "xp02"], "id": "e2ca5875-4cc1-44d7-85f8-75c44a222eb4", "doc": null, "tags": []}}, {"id": "4eb46123-1f98-4ba9-9abc-f5b61103e0e4", "type": "Quadratic", "attributes": {"cy": {"field": "yp01", "units": "data"}, "y0": {"field": "y", "units": "data"}, "doc": null, "cx": {"field": "xp01", "units": "data"}, "y1": {"field": "y", "units": "data"}, "line_width": {"value": 3, "units": "data"}, "x1": {"field": "xp02", "units": "data"}, "x0": {"field": "x", "units": "data"}, "id": "4eb46123-1f98-4ba9-9abc-f5b61103e0e4", "line_color": {"value": "#4DAF4A"}, "tags": []}}, {"id": "0d55d7c6-0ba9-4ab2-90f7-12997c9b51a2", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "e2ca5875-4cc1-44d7-85f8-75c44a222eb4", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "0d55d7c6-0ba9-4ab2-90f7-12997c9b51a2", "doc": null, "tags": []}}, {"id": "e46c5d72-bf92-4019-b70b-3dc9e0dd3459", "type": "BasicTicker", "attributes": {"id": "e46c5d72-bf92-4019-b70b-3dc9e0dd3459", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "3e72f75d-11c6-4c01-bec9-34af55e5fa81", "type": "Grid", "attributes": {"id": "3e72f75d-11c6-4c01-bec9-34af55e5fa81", "plot": {"id": "59e60351-357e-4c92-8b26-6f0424b02fbf", "type": "Plot"}, "dimension": 0, "ticker": {"id": "5b7c5c83-2bdd-4785-bc98-e4aacceb0d6d", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "bc0b37bd-2d93-4d9a-b045-f09446547688", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "e2ca5875-4cc1-44d7-85f8-75c44a222eb4", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "bc0b37bd-2d93-4d9a-b045-f09446547688", "doc": null, "tags": []}}, {"id": "2acef0a1-2b41-4522-aa5c-d57761f03df6", "type": "Grid", "attributes": {"id": "2acef0a1-2b41-4522-aa5c-d57761f03df6", "plot": {"id": "59e60351-357e-4c92-8b26-6f0424b02fbf", "type": "Plot"}, "dimension": 1, "ticker": {"id": "e46c5d72-bf92-4019-b70b-3dc9e0dd3459", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "5b7c5c83-2bdd-4785-bc98-e4aacceb0d6d", "type": "BasicTicker", "attributes": {"id": "5b7c5c83-2bdd-4785-bc98-e4aacceb0d6d", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "5ca978f5-d00f-493d-96a6-92acfddfeae6", "type": "LinearAxis", "attributes": {"id": "5ca978f5-d00f-493d-96a6-92acfddfeae6", "formatter": {"id": "b51f8dde-23d2-494f-8e22-f6019b2b2598", "type": "BasicTickFormatter"}, "plot": {"id": "59e60351-357e-4c92-8b26-6f0424b02fbf", "type": "Plot"}, "ticker": {"id": "5b7c5c83-2bdd-4785-bc98-e4aacceb0d6d", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "59e60351-357e-4c92-8b26-6f0424b02fbf", "type": "Plot", "attributes": {"tool_events": {"id": "7773d927-fc51-4141-ba15-ab8d3e08878e", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "aa34ad25-e74c-45fa-946d-c5de50e85fff", "type": "GlyphRenderer"}, {"id": "5ca978f5-d00f-493d-96a6-92acfddfeae6", "type": "LinearAxis"}, {"id": "092f810f-0e0d-4de2-b954-e380e56a175b", "type": "LinearAxis"}, {"id": "3e72f75d-11c6-4c01-bec9-34af55e5fa81", "type": "Grid"}, {"id": "2acef0a1-2b41-4522-aa5c-d57761f03df6", "type": "Grid"}], "left": [{"id": "092f810f-0e0d-4de2-b954-e380e56a175b", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "bc0b37bd-2d93-4d9a-b045-f09446547688", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "59e60351-357e-4c92-8b26-6f0424b02fbf", "y_range": {"id": "0d55d7c6-0ba9-4ab2-90f7-12997c9b51a2", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "5ca978f5-d00f-493d-96a6-92acfddfeae6", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("0d8b94d6-1301-463e-b50d-63bcadffecdd", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("0d8b94d6-1301-463e-b50d-63bcadffecdd", all_models);
    });
  }

}(this));