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

  var elt = document.getElementById("3a33fb80-0274-440d-9e94-d80cbc85fb55");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '3a33fb80-0274-440d-9e94-d80cbc85fb55' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "87268810-b7d8-4d44-80cf-67481d98603b", "type": "Grid", "attributes": {"id": "87268810-b7d8-4d44-80cf-67481d98603b", "plot": {"id": "f50dc75c-3d15-4f68-b3a8-2f35c47e72f6", "type": "Plot"}, "dimension": 1, "ticker": {"id": "aabba565-c0af-423e-9c0f-40cb9e0034af", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "ece1df65-f868-4913-8340-7a7a652c6074", "type": "BasicTickFormatter", "attributes": {"id": "ece1df65-f868-4913-8340-7a7a652c6074", "doc": null, "tags": []}}, {"id": "e83d569d-11b6-49a4-9e77-098f2aa0008c", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"r": [0.16666666666666666, 0.19999999999999998, 0.23333333333333334, 0.26666666666666666, 0.3, 0.3333333333333333, 0.36666666666666664, 0.4, 0.43333333333333335], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["r", "y", "x"], "id": "e83d569d-11b6-49a4-9e77-098f2aa0008c", "doc": null, "tags": []}}, {"id": "c0ae4f90-4039-42ef-84b0-72cbf607541e", "type": "BasicTicker", "attributes": {"id": "c0ae4f90-4039-42ef-84b0-72cbf607541e", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "f50dc75c-3d15-4f68-b3a8-2f35c47e72f6", "type": "Plot", "attributes": {"tool_events": {"id": "2823e454-4051-4d94-963e-f0b234bc911b", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "60913f0d-b80f-4ca8-a404-22fbde8dce06", "type": "GlyphRenderer"}, {"id": "cdeb4fa2-8aa0-4359-a10a-3dc313086294", "type": "LinearAxis"}, {"id": "8739a199-0077-4de1-a830-f86144a0d7f4", "type": "LinearAxis"}, {"id": "c97e9047-4b08-49d4-8090-de3f75c10ad7", "type": "Grid"}, {"id": "87268810-b7d8-4d44-80cf-67481d98603b", "type": "Grid"}], "left": [{"id": "8739a199-0077-4de1-a830-f86144a0d7f4", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "662aa65f-946b-4d47-8966-2f92e1531a32", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "f50dc75c-3d15-4f68-b3a8-2f35c47e72f6", "y_range": {"id": "409b3cbe-9b40-446b-9b4b-9fe5c2073891", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "cdeb4fa2-8aa0-4359-a10a-3dc313086294", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "662aa65f-946b-4d47-8966-2f92e1531a32", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "e83d569d-11b6-49a4-9e77-098f2aa0008c", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "662aa65f-946b-4d47-8966-2f92e1531a32", "doc": null, "tags": []}}, {"id": "8739a199-0077-4de1-a830-f86144a0d7f4", "type": "LinearAxis", "attributes": {"id": "8739a199-0077-4de1-a830-f86144a0d7f4", "formatter": {"id": "ece1df65-f868-4913-8340-7a7a652c6074", "type": "BasicTickFormatter"}, "plot": {"id": "f50dc75c-3d15-4f68-b3a8-2f35c47e72f6", "type": "Plot"}, "ticker": {"id": "aabba565-c0af-423e-9c0f-40cb9e0034af", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "a69dee45-0641-4196-8c97-2e498c2cfd23", "type": "Arc", "attributes": {"start_angle": {"value": 0.6, "units": "data"}, "tags": [], "line_width": {"value": 3, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "a69dee45-0641-4196-8c97-2e498c2cfd23", "radius": {"field": "r", "units": "data"}, "end_angle": {"value": 4.1, "units": "data"}, "line_color": {"value": "#beaed4"}, "doc": null, "x": {"field": "x", "units": "data"}}}, {"id": "2823e454-4051-4d94-963e-f0b234bc911b", "type": "ToolEvents", "attributes": {"geometries": [], "id": "2823e454-4051-4d94-963e-f0b234bc911b", "doc": null, "tags": []}}, {"id": "409b3cbe-9b40-446b-9b4b-9fe5c2073891", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "e83d569d-11b6-49a4-9e77-098f2aa0008c", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "409b3cbe-9b40-446b-9b4b-9fe5c2073891", "doc": null, "tags": []}}, {"id": "17e4ef3d-cf13-492c-ab7a-94fdf983e7bb", "type": "BasicTickFormatter", "attributes": {"id": "17e4ef3d-cf13-492c-ab7a-94fdf983e7bb", "doc": null, "tags": []}}, {"id": "c97e9047-4b08-49d4-8090-de3f75c10ad7", "type": "Grid", "attributes": {"id": "c97e9047-4b08-49d4-8090-de3f75c10ad7", "plot": {"id": "f50dc75c-3d15-4f68-b3a8-2f35c47e72f6", "type": "Plot"}, "dimension": 0, "ticker": {"id": "c0ae4f90-4039-42ef-84b0-72cbf607541e", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "aabba565-c0af-423e-9c0f-40cb9e0034af", "type": "BasicTicker", "attributes": {"id": "aabba565-c0af-423e-9c0f-40cb9e0034af", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "60913f0d-b80f-4ca8-a404-22fbde8dce06", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "e83d569d-11b6-49a4-9e77-098f2aa0008c", "type": "ColumnDataSource"}, "id": "60913f0d-b80f-4ca8-a404-22fbde8dce06", "glyph": {"id": "a69dee45-0641-4196-8c97-2e498c2cfd23", "type": "Arc"}, "tags": [], "doc": null}}, {"id": "cdeb4fa2-8aa0-4359-a10a-3dc313086294", "type": "LinearAxis", "attributes": {"id": "cdeb4fa2-8aa0-4359-a10a-3dc313086294", "formatter": {"id": "17e4ef3d-cf13-492c-ab7a-94fdf983e7bb", "type": "BasicTickFormatter"}, "plot": {"id": "f50dc75c-3d15-4f68-b3a8-2f35c47e72f6", "type": "Plot"}, "ticker": {"id": "c0ae4f90-4039-42ef-84b0-72cbf607541e", "type": "BasicTicker"}, "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("3a33fb80-0274-440d-9e94-d80cbc85fb55", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("3a33fb80-0274-440d-9e94-d80cbc85fb55", all_models);
    });
  }

}(this));