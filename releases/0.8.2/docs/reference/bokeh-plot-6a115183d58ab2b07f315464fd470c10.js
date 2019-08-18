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

  var elt = document.getElementById("b9440815-1442-41fe-a472-dc7a0fcbb412");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9440815-1442-41fe-a472-dc7a0fcbb412' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "bcd61eba-a7a1-4d68-ad95-9884663324db", "type": "BasicTickFormatter", "attributes": {"id": "bcd61eba-a7a1-4d68-ad95-9884663324db", "doc": null, "tags": []}}, {"id": "5626b953-bcae-488c-8111-14ea9deac52e", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "bbf7748c-bfe0-4560-be40-d4b0ea33fc77", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "5626b953-bcae-488c-8111-14ea9deac52e", "doc": null, "tags": []}}, {"id": "7eb7b4ae-6de2-44b0-af57-aa5e598d6314", "type": "BasicTicker", "attributes": {"id": "7eb7b4ae-6de2-44b0-af57-aa5e598d6314", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "66db6d75-f2c3-4353-b768-7f78f27176ee", "type": "ToolEvents", "attributes": {"geometries": [], "id": "66db6d75-f2c3-4353-b768-7f78f27176ee", "doc": null, "tags": []}}, {"id": "8301630d-d9cf-4089-b83e-5a4972938f29", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "bbf7748c-bfe0-4560-be40-d4b0ea33fc77", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "8301630d-d9cf-4089-b83e-5a4972938f29", "doc": null, "tags": []}}, {"id": "ff22fe1c-da11-4136-8595-1b3ca8e396da", "type": "BasicTicker", "attributes": {"id": "ff22fe1c-da11-4136-8595-1b3ca8e396da", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "bbf7748c-bfe0-4560-be40-d4b0ea33fc77", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "ym01": [4.1, 2.525, 1.4, 0.725, 0.5, 0.725, 1.4, 2.525, 4.1], "xm01": [-0.8999999999999999, -0.8625, -0.6000000000000001, -0.1875, 0.3, 0.7875, 1.2, 1.4625000000000001, 1.5], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["y", "ym01", "xm01", "x"], "id": "bbf7748c-bfe0-4560-be40-d4b0ea33fc77", "doc": null, "tags": []}}, {"id": "0888e949-e61e-4dc6-9c0d-4876f9949ecc", "type": "LinearAxis", "attributes": {"id": "0888e949-e61e-4dc6-9c0d-4876f9949ecc", "formatter": {"id": "bcd61eba-a7a1-4d68-ad95-9884663324db", "type": "BasicTickFormatter"}, "plot": {"id": "a0397676-75a9-4b54-a327-e8b3368f5c12", "type": "Plot"}, "ticker": {"id": "7eb7b4ae-6de2-44b0-af57-aa5e598d6314", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "f4613f48-0595-4a6e-9fca-ac259ae80747", "type": "Grid", "attributes": {"id": "f4613f48-0595-4a6e-9fca-ac259ae80747", "plot": {"id": "a0397676-75a9-4b54-a327-e8b3368f5c12", "type": "Plot"}, "dimension": 1, "ticker": {"id": "ff22fe1c-da11-4136-8595-1b3ca8e396da", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "0617e651-e39b-4afb-81ec-aebe27dcd44c", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "bbf7748c-bfe0-4560-be40-d4b0ea33fc77", "type": "ColumnDataSource"}, "id": "0617e651-e39b-4afb-81ec-aebe27dcd44c", "glyph": {"id": "ac0d1eab-9789-4abc-86fc-66da2f309fdf", "type": "Segment"}, "tags": [], "doc": null}}, {"id": "501eab56-b11b-48b3-92e5-482d122e4041", "type": "LinearAxis", "attributes": {"id": "501eab56-b11b-48b3-92e5-482d122e4041", "formatter": {"id": "20d0a01f-8196-42af-8d63-ecc3668ada75", "type": "BasicTickFormatter"}, "plot": {"id": "a0397676-75a9-4b54-a327-e8b3368f5c12", "type": "Plot"}, "ticker": {"id": "ff22fe1c-da11-4136-8595-1b3ca8e396da", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "20d0a01f-8196-42af-8d63-ecc3668ada75", "type": "BasicTickFormatter", "attributes": {"id": "20d0a01f-8196-42af-8d63-ecc3668ada75", "doc": null, "tags": []}}, {"id": "ac0d1eab-9789-4abc-86fc-66da2f309fdf", "type": "Segment", "attributes": {"y1": {"field": "ym01", "units": "data"}, "line_width": {"value": 3, "units": "data"}, "x1": {"field": "xm01", "units": "data"}, "id": "ac0d1eab-9789-4abc-86fc-66da2f309fdf", "x0": {"field": "x", "units": "data"}, "line_color": {"value": "#f4a582"}, "y0": {"field": "y", "units": "data"}, "tags": [], "doc": null}}, {"id": "56f45e44-e28f-4948-8335-664d07e4444b", "type": "Grid", "attributes": {"id": "56f45e44-e28f-4948-8335-664d07e4444b", "plot": {"id": "a0397676-75a9-4b54-a327-e8b3368f5c12", "type": "Plot"}, "dimension": 0, "ticker": {"id": "7eb7b4ae-6de2-44b0-af57-aa5e598d6314", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "a0397676-75a9-4b54-a327-e8b3368f5c12", "type": "Plot", "attributes": {"tool_events": {"id": "66db6d75-f2c3-4353-b768-7f78f27176ee", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "0617e651-e39b-4afb-81ec-aebe27dcd44c", "type": "GlyphRenderer"}, {"id": "0888e949-e61e-4dc6-9c0d-4876f9949ecc", "type": "LinearAxis"}, {"id": "501eab56-b11b-48b3-92e5-482d122e4041", "type": "LinearAxis"}, {"id": "56f45e44-e28f-4948-8335-664d07e4444b", "type": "Grid"}, {"id": "f4613f48-0595-4a6e-9fca-ac259ae80747", "type": "Grid"}], "left": [{"id": "501eab56-b11b-48b3-92e5-482d122e4041", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "5626b953-bcae-488c-8111-14ea9deac52e", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "a0397676-75a9-4b54-a327-e8b3368f5c12", "y_range": {"id": "8301630d-d9cf-4089-b83e-5a4972938f29", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "0888e949-e61e-4dc6-9c0d-4876f9949ecc", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("b9440815-1442-41fe-a472-dc7a0fcbb412", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("b9440815-1442-41fe-a472-dc7a0fcbb412", all_models);
    });
  }

}(this));