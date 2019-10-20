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

  var elt = document.getElementById("c522d7ca-5ff6-4605-af5f-1a3f91601e26");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c522d7ca-5ff6-4605-af5f-1a3f91601e26' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "831bcb02-908e-46fa-8cd8-7fa02c350e88", "type": "LinearAxis", "attributes": {"id": "831bcb02-908e-46fa-8cd8-7fa02c350e88", "formatter": {"id": "ff0a9fad-81c6-446d-9a45-da44f4d6f0b1", "type": "BasicTickFormatter"}, "plot": {"id": "d0391735-3b29-4f4b-ba74-af9a72376924", "type": "Plot"}, "ticker": {"id": "4d88bbdf-d783-47b5-9f66-cc36a9cc60d7", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "c000ea67-4d59-4e07-b8d6-dce26ea8e1a4", "type": "Grid", "attributes": {"id": "c000ea67-4d59-4e07-b8d6-dce26ea8e1a4", "plot": {"id": "d0391735-3b29-4f4b-ba74-af9a72376924", "type": "Plot"}, "dimension": 1, "ticker": {"id": "928832c8-682d-4fe2-b92b-2c47c62e3aa0", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "2f42a374-516d-4e4f-840b-06f8d5511593", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "2aa803af-5b92-478f-9f25-ef32834b8aaa", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "2f42a374-516d-4e4f-840b-06f8d5511593", "doc": null, "tags": []}}, {"id": "26483ade-fad6-461e-97f7-dd2eadfdb8d2", "type": "ToolEvents", "attributes": {"geometries": [], "id": "26483ade-fad6-461e-97f7-dd2eadfdb8d2", "doc": null, "tags": []}}, {"id": "f307e124-2130-484a-b1cc-ec24a6f258f9", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "2aa803af-5b92-478f-9f25-ef32834b8aaa", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "f307e124-2130-484a-b1cc-ec24a6f258f9", "doc": null, "tags": []}}, {"id": "928832c8-682d-4fe2-b92b-2c47c62e3aa0", "type": "BasicTicker", "attributes": {"id": "928832c8-682d-4fe2-b92b-2c47c62e3aa0", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "010fae9d-5db6-43bd-be8a-2ff6b1e196d1", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "2aa803af-5b92-478f-9f25-ef32834b8aaa", "type": "ColumnDataSource"}, "id": "010fae9d-5db6-43bd-be8a-2ff6b1e196d1", "glyph": {"id": "442d796d-3d0c-48cc-88fc-da68bd2969f8", "type": "Rect"}, "tags": [], "doc": null}}, {"id": "d0391735-3b29-4f4b-ba74-af9a72376924", "type": "Plot", "attributes": {"tool_events": {"id": "26483ade-fad6-461e-97f7-dd2eadfdb8d2", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "010fae9d-5db6-43bd-be8a-2ff6b1e196d1", "type": "GlyphRenderer"}, {"id": "831bcb02-908e-46fa-8cd8-7fa02c350e88", "type": "LinearAxis"}, {"id": "bfc3a20c-8f58-4387-b27f-6e06537833fe", "type": "LinearAxis"}, {"id": "dd68b9c0-8622-4221-b685-6ed052b5b8f2", "type": "Grid"}, {"id": "c000ea67-4d59-4e07-b8d6-dce26ea8e1a4", "type": "Grid"}], "left": [{"id": "bfc3a20c-8f58-4387-b27f-6e06537833fe", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "f307e124-2130-484a-b1cc-ec24a6f258f9", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "d0391735-3b29-4f4b-ba74-af9a72376924", "y_range": {"id": "2f42a374-516d-4e4f-840b-06f8d5511593", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "831bcb02-908e-46fa-8cd8-7fa02c350e88", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "4d88bbdf-d783-47b5-9f66-cc36a9cc60d7", "type": "BasicTicker", "attributes": {"id": "4d88bbdf-d783-47b5-9f66-cc36a9cc60d7", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "bfc3a20c-8f58-4387-b27f-6e06537833fe", "type": "LinearAxis", "attributes": {"id": "bfc3a20c-8f58-4387-b27f-6e06537833fe", "formatter": {"id": "6e674384-df57-4d39-93ab-9c18f3468719", "type": "BasicTickFormatter"}, "plot": {"id": "d0391735-3b29-4f4b-ba74-af9a72376924", "type": "Plot"}, "ticker": {"id": "928832c8-682d-4fe2-b92b-2c47c62e3aa0", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "2aa803af-5b92-478f-9f25-ef32834b8aaa", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"h": [0.5, 0.4125, 0.35, 0.3125, 0.3, 0.3125, 0.35, 0.4125, 0.5], "w": [0.16666666666666666, 0.19999999999999998, 0.23333333333333334, 0.26666666666666666, 0.3, 0.3333333333333333, 0.36666666666666664, 0.4, 0.43333333333333335], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["h", "w", "y", "x"], "id": "2aa803af-5b92-478f-9f25-ef32834b8aaa", "doc": null, "tags": []}}, {"id": "442d796d-3d0c-48cc-88fc-da68bd2969f8", "type": "Rect", "attributes": {"fill_color": {"value": "#CAB2D6"}, "y": {"field": "y", "units": "data"}, "id": "442d796d-3d0c-48cc-88fc-da68bd2969f8", "angle": {"value": -0.7, "units": "data"}, "height": {"field": "h", "units": "data"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "width": {"field": "w", "units": "data"}}}, {"id": "ff0a9fad-81c6-446d-9a45-da44f4d6f0b1", "type": "BasicTickFormatter", "attributes": {"id": "ff0a9fad-81c6-446d-9a45-da44f4d6f0b1", "doc": null, "tags": []}}, {"id": "dd68b9c0-8622-4221-b685-6ed052b5b8f2", "type": "Grid", "attributes": {"id": "dd68b9c0-8622-4221-b685-6ed052b5b8f2", "plot": {"id": "d0391735-3b29-4f4b-ba74-af9a72376924", "type": "Plot"}, "dimension": 0, "ticker": {"id": "4d88bbdf-d783-47b5-9f66-cc36a9cc60d7", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "6e674384-df57-4d39-93ab-9c18f3468719", "type": "BasicTickFormatter", "attributes": {"id": "6e674384-df57-4d39-93ab-9c18f3468719", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("c522d7ca-5ff6-4605-af5f-1a3f91601e26", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("c522d7ca-5ff6-4605-af5f-1a3f91601e26", all_models);
    });
  }

}(this));