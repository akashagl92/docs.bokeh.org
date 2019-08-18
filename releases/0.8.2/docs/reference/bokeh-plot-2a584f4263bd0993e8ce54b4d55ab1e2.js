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

  var elt = document.getElementById("472e23cf-dea6-4816-aed3-e5d7c2aefa73");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '472e23cf-dea6-4816-aed3-e5d7c2aefa73' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "798bcd5e-7f24-470d-9f64-513ca88560ac", "type": "Quad", "attributes": {"bottom": {"field": "bottom", "units": "data"}, "left": {"field": "left", "units": "data"}, "fill_color": {"value": "#b3de69"}, "id": "798bcd5e-7f24-470d-9f64-513ca88560ac", "top": {"field": "top", "units": "data"}, "doc": null, "tags": [], "right": {"field": "right", "units": "data"}}}, {"id": "dfcdc56e-2eb5-48e8-ac25-5b4871dd8537", "type": "BasicTickFormatter", "attributes": {"id": "dfcdc56e-2eb5-48e8-ac25-5b4871dd8537", "doc": null, "tags": []}}, {"id": "13500dc5-7f5e-4725-a211-99ec4e7d1d60", "type": "Grid", "attributes": {"id": "13500dc5-7f5e-4725-a211-99ec4e7d1d60", "plot": {"id": "4862e815-c030-467b-b5ad-e5605c60ee18", "type": "Plot"}, "dimension": 0, "ticker": {"id": "c223b8c7-f582-4fcf-bd4c-b043253def43", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "d0057e21-af54-4eb6-954c-b29046df7b2e", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "e2168fb9-9ad4-4aed-b2ad-20feedcd1108", "type": "ColumnDataSource"}, "id": "d0057e21-af54-4eb6-954c-b29046df7b2e", "glyph": {"id": "798bcd5e-7f24-470d-9f64-513ca88560ac", "type": "Quad"}, "tags": [], "doc": null}}, {"id": "235f0aec-a677-40bd-9b63-87329d8ca8d6", "type": "LinearAxis", "attributes": {"id": "235f0aec-a677-40bd-9b63-87329d8ca8d6", "formatter": {"id": "f6244d3f-4a0e-4094-87d0-9f8abbb412b7", "type": "BasicTickFormatter"}, "plot": {"id": "4862e815-c030-467b-b5ad-e5605c60ee18", "type": "Plot"}, "ticker": {"id": "5ea69afb-62e1-4fbe-832b-2aa7a7727a0a", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "e2168fb9-9ad4-4aed-b2ad-20feedcd1108", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"bottom": [4.1, 2.525, 1.4, 0.725, 0.5, 0.725, 1.4, 2.525, 4.1], "left": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "top": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "right": [-0.8999999999999999, -0.8625, -0.6000000000000001, -0.1875, 0.3, 0.7875, 1.2, 1.4625000000000001, 1.5]}, "column_names": ["bottom", "right", "left", "top"], "id": "e2168fb9-9ad4-4aed-b2ad-20feedcd1108", "doc": null, "tags": []}}, {"id": "f6244d3f-4a0e-4094-87d0-9f8abbb412b7", "type": "BasicTickFormatter", "attributes": {"id": "f6244d3f-4a0e-4094-87d0-9f8abbb412b7", "doc": null, "tags": []}}, {"id": "fdd3f0dc-e19f-4d4f-a264-14013763a669", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "e2168fb9-9ad4-4aed-b2ad-20feedcd1108", "type": "ColumnDataSource"}, "columns": ["left", "right"]}], "id": "fdd3f0dc-e19f-4d4f-a264-14013763a669", "doc": null, "tags": []}}, {"id": "f0a028a1-4666-4b34-8e92-623d7be76ddc", "type": "ToolEvents", "attributes": {"geometries": [], "id": "f0a028a1-4666-4b34-8e92-623d7be76ddc", "doc": null, "tags": []}}, {"id": "4862e815-c030-467b-b5ad-e5605c60ee18", "type": "Plot", "attributes": {"tool_events": {"id": "f0a028a1-4666-4b34-8e92-623d7be76ddc", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "d0057e21-af54-4eb6-954c-b29046df7b2e", "type": "GlyphRenderer"}, {"id": "d8a1e4c6-b177-4f82-ae31-bbfc4522a439", "type": "LinearAxis"}, {"id": "235f0aec-a677-40bd-9b63-87329d8ca8d6", "type": "LinearAxis"}, {"id": "13500dc5-7f5e-4725-a211-99ec4e7d1d60", "type": "Grid"}, {"id": "b6c3353d-6d69-4295-9bf5-1c9cbb045a92", "type": "Grid"}], "left": [{"id": "235f0aec-a677-40bd-9b63-87329d8ca8d6", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "fdd3f0dc-e19f-4d4f-a264-14013763a669", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "4862e815-c030-467b-b5ad-e5605c60ee18", "y_range": {"id": "432234c7-5d0d-4356-89b5-a3b884079b2f", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "d8a1e4c6-b177-4f82-ae31-bbfc4522a439", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "c223b8c7-f582-4fcf-bd4c-b043253def43", "type": "BasicTicker", "attributes": {"id": "c223b8c7-f582-4fcf-bd4c-b043253def43", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "b6c3353d-6d69-4295-9bf5-1c9cbb045a92", "type": "Grid", "attributes": {"id": "b6c3353d-6d69-4295-9bf5-1c9cbb045a92", "plot": {"id": "4862e815-c030-467b-b5ad-e5605c60ee18", "type": "Plot"}, "dimension": 1, "ticker": {"id": "5ea69afb-62e1-4fbe-832b-2aa7a7727a0a", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "5ea69afb-62e1-4fbe-832b-2aa7a7727a0a", "type": "BasicTicker", "attributes": {"id": "5ea69afb-62e1-4fbe-832b-2aa7a7727a0a", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "d8a1e4c6-b177-4f82-ae31-bbfc4522a439", "type": "LinearAxis", "attributes": {"id": "d8a1e4c6-b177-4f82-ae31-bbfc4522a439", "formatter": {"id": "dfcdc56e-2eb5-48e8-ac25-5b4871dd8537", "type": "BasicTickFormatter"}, "plot": {"id": "4862e815-c030-467b-b5ad-e5605c60ee18", "type": "Plot"}, "ticker": {"id": "c223b8c7-f582-4fcf-bd4c-b043253def43", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "432234c7-5d0d-4356-89b5-a3b884079b2f", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "e2168fb9-9ad4-4aed-b2ad-20feedcd1108", "type": "ColumnDataSource"}, "columns": ["top", "bottom"]}], "id": "432234c7-5d0d-4356-89b5-a3b884079b2f", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("472e23cf-dea6-4816-aed3-e5d7c2aefa73", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("472e23cf-dea6-4816-aed3-e5d7c2aefa73", all_models);
    });
  }

}(this));