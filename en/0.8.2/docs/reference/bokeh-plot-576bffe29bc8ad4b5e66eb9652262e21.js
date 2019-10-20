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

  var elt = document.getElementById("bbc6fcbd-2186-4cbd-a73c-44971314f241");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'bbc6fcbd-2186-4cbd-a73c-44971314f241' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "41ad2880-9abe-45cb-a30b-97a980b17543", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "2d86cada-130c-40ed-9380-ccb0363e3967", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "41ad2880-9abe-45cb-a30b-97a980b17543", "doc": null, "tags": []}}, {"id": "4148b973-edb8-4742-93b0-b24f8ffcaa61", "type": "Grid", "attributes": {"id": "4148b973-edb8-4742-93b0-b24f8ffcaa61", "plot": {"id": "ad5dd626-f82f-4808-ab1b-dd29a3724a63", "type": "Plot"}, "dimension": 0, "ticker": {"id": "671a6538-4f97-48e3-9269-2d78b0bf475e", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "19859faa-8859-4d9c-8995-ca741103566c", "type": "InvertedTriangle", "attributes": {"line_width": {"value": 2, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "19859faa-8859-4d9c-8995-ca741103566c", "fill_color": null, "line_color": {"value": "#de2d26"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "size": {"field": "sizes", "units": "screen"}}}, {"id": "d5349183-da43-4ce7-83d4-12ff0861e557", "type": "ToolEvents", "attributes": {"geometries": [], "id": "d5349183-da43-4ce7-83d4-12ff0861e557", "doc": null, "tags": []}}, {"id": "2d86cada-130c-40ed-9380-ccb0363e3967", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["sizes", "y", "x"], "id": "2d86cada-130c-40ed-9380-ccb0363e3967", "doc": null, "tags": []}}, {"id": "d897a12b-d302-41b1-bb85-6fedfaa90281", "type": "BasicTickFormatter", "attributes": {"id": "d897a12b-d302-41b1-bb85-6fedfaa90281", "doc": null, "tags": []}}, {"id": "35a614cd-5a75-4a1e-87c1-b485aa6d6e27", "type": "BasicTicker", "attributes": {"id": "35a614cd-5a75-4a1e-87c1-b485aa6d6e27", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "ad5dd626-f82f-4808-ab1b-dd29a3724a63", "type": "Plot", "attributes": {"tool_events": {"id": "d5349183-da43-4ce7-83d4-12ff0861e557", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "45fa7e70-5531-4bd8-81b2-050d5b137886", "type": "GlyphRenderer"}, {"id": "16c143f6-a97a-48c2-94c2-110ce4469841", "type": "LinearAxis"}, {"id": "cc61a2a0-a672-4730-bf30-a4a62bb7926c", "type": "LinearAxis"}, {"id": "4148b973-edb8-4742-93b0-b24f8ffcaa61", "type": "Grid"}, {"id": "49d9d42d-dac0-471c-b2a7-06f707540e0f", "type": "Grid"}], "left": [{"id": "cc61a2a0-a672-4730-bf30-a4a62bb7926c", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "94e0a272-16ba-40a5-b185-9d2301762bc6", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "ad5dd626-f82f-4808-ab1b-dd29a3724a63", "y_range": {"id": "41ad2880-9abe-45cb-a30b-97a980b17543", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "16c143f6-a97a-48c2-94c2-110ce4469841", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "16c143f6-a97a-48c2-94c2-110ce4469841", "type": "LinearAxis", "attributes": {"id": "16c143f6-a97a-48c2-94c2-110ce4469841", "formatter": {"id": "d0c6f6be-1f47-4ca9-ac62-6da236ed7c13", "type": "BasicTickFormatter"}, "plot": {"id": "ad5dd626-f82f-4808-ab1b-dd29a3724a63", "type": "Plot"}, "ticker": {"id": "671a6538-4f97-48e3-9269-2d78b0bf475e", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "cc61a2a0-a672-4730-bf30-a4a62bb7926c", "type": "LinearAxis", "attributes": {"id": "cc61a2a0-a672-4730-bf30-a4a62bb7926c", "formatter": {"id": "d897a12b-d302-41b1-bb85-6fedfaa90281", "type": "BasicTickFormatter"}, "plot": {"id": "ad5dd626-f82f-4808-ab1b-dd29a3724a63", "type": "Plot"}, "ticker": {"id": "35a614cd-5a75-4a1e-87c1-b485aa6d6e27", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "49d9d42d-dac0-471c-b2a7-06f707540e0f", "type": "Grid", "attributes": {"id": "49d9d42d-dac0-471c-b2a7-06f707540e0f", "plot": {"id": "ad5dd626-f82f-4808-ab1b-dd29a3724a63", "type": "Plot"}, "dimension": 1, "ticker": {"id": "35a614cd-5a75-4a1e-87c1-b485aa6d6e27", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "94e0a272-16ba-40a5-b185-9d2301762bc6", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "2d86cada-130c-40ed-9380-ccb0363e3967", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "94e0a272-16ba-40a5-b185-9d2301762bc6", "doc": null, "tags": []}}, {"id": "671a6538-4f97-48e3-9269-2d78b0bf475e", "type": "BasicTicker", "attributes": {"id": "671a6538-4f97-48e3-9269-2d78b0bf475e", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "d0c6f6be-1f47-4ca9-ac62-6da236ed7c13", "type": "BasicTickFormatter", "attributes": {"id": "d0c6f6be-1f47-4ca9-ac62-6da236ed7c13", "doc": null, "tags": []}}, {"id": "45fa7e70-5531-4bd8-81b2-050d5b137886", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "2d86cada-130c-40ed-9380-ccb0363e3967", "type": "ColumnDataSource"}, "id": "45fa7e70-5531-4bd8-81b2-050d5b137886", "glyph": {"id": "19859faa-8859-4d9c-8995-ca741103566c", "type": "InvertedTriangle"}, "tags": [], "doc": null}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("bbc6fcbd-2186-4cbd-a73c-44971314f241", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("bbc6fcbd-2186-4cbd-a73c-44971314f241", all_models);
    });
  }

}(this));