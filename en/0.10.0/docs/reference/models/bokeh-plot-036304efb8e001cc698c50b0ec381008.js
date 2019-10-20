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

  var elt = document.getElementById("b2e14f7b-1aac-4e80-84fb-377942307eeb");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b2e14f7b-1aac-4e80-84fb-377942307eeb' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "959c223f-a802-43de-96f1-8108124fd472"}, "type": "BasicTicker", "id": "959c223f-a802-43de-96f1-8108124fd472"}, {"attributes": {"doc": null, "id": "d9222194-a090-46b7-8075-278e920c32f1", "tags": []}, "type": "BasicTickFormatter", "id": "d9222194-a090-46b7-8075-278e920c32f1"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "872e2496-49ba-4217-a62b-797dd88eb45d"}, "type": "BasicTicker", "id": "872e2496-49ba-4217-a62b-797dd88eb45d"}, {"attributes": {"plot": {"type": "Plot", "id": "5af08a17-bc06-4922-bc71-551373a6f04b"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "d9222194-a090-46b7-8075-278e920c32f1"}, "ticker": {"type": "BasicTicker", "id": "959c223f-a802-43de-96f1-8108124fd472"}, "id": "aa103101-930a-41a3-8200-ca43345d19a4"}, "type": "LinearAxis", "id": "aa103101-930a-41a3-8200-ca43345d19a4"}, {"attributes": {"column_names": ["y", "x", "sizes"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "id": "239295b0-4955-4c7c-a4ee-9dc7e20cc502"}, "type": "ColumnDataSource", "id": "239295b0-4955-4c7c-a4ee-9dc7e20cc502"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "d0ce6289-5a7d-4431-9f0a-150ab243bccb"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "2733a50b-6cd1-48a4-95dd-939a450e61c3"}, {"type": "LinearAxis", "id": "aa103101-930a-41a3-8200-ca43345d19a4"}, {"type": "LinearAxis", "id": "fa1b238b-ced3-4e44-9fc0-4120a1227b37"}, {"type": "Grid", "id": "bb9ecead-e8cc-4d19-b742-51fb0da5728b"}, {"type": "Grid", "id": "d599c17f-d298-4e87-85d8-930036c29ceb"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "6ab02773-3848-4e49-9cd7-1b249b198142"}, "h_symmetry": false, "tools": [], "id": "5af08a17-bc06-4922-bc71-551373a6f04b", "title": null, "y_range": {"type": "DataRange1d", "id": "dae552b1-0b88-4b58-ba40-33187406d80b"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "aa103101-930a-41a3-8200-ca43345d19a4"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "fa1b238b-ced3-4e44-9fc0-4120a1227b37"}]}, "type": "Plot", "id": "5af08a17-bc06-4922-bc71-551373a6f04b"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "6ab02773-3848-4e49-9cd7-1b249b198142"}, "type": "ToolEvents", "id": "6ab02773-3848-4e49-9cd7-1b249b198142"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "dae552b1-0b88-4b58-ba40-33187406d80b"}, "type": "DataRange1d", "id": "dae552b1-0b88-4b58-ba40-33187406d80b"}, {"attributes": {"plot": {"type": "Plot", "id": "5af08a17-bc06-4922-bc71-551373a6f04b"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "872e2496-49ba-4217-a62b-797dd88eb45d"}, "id": "d599c17f-d298-4e87-85d8-930036c29ceb"}, "type": "Grid", "id": "d599c17f-d298-4e87-85d8-930036c29ceb"}, {"attributes": {"plot": {"type": "Plot", "id": "5af08a17-bc06-4922-bc71-551373a6f04b"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "8b7b08d3-f506-41c4-9119-fec78b5ed204"}, "ticker": {"type": "BasicTicker", "id": "872e2496-49ba-4217-a62b-797dd88eb45d"}, "id": "fa1b238b-ced3-4e44-9fc0-4120a1227b37"}, "type": "LinearAxis", "id": "fa1b238b-ced3-4e44-9fc0-4120a1227b37"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "d0ce6289-5a7d-4431-9f0a-150ab243bccb"}, "type": "DataRange1d", "id": "d0ce6289-5a7d-4431-9f0a-150ab243bccb"}, {"attributes": {"line_color": {"value": "#3288Bd"}, "line_width": {"value": 3}, "fill_color": {"value": "white"}, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "a595bc2d-b473-46d8-a7e2-8f8f93da35f6", "size": {"units": "screen", "field": "sizes"}}, "type": "Circle", "id": "a595bc2d-b473-46d8-a7e2-8f8f93da35f6"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "239295b0-4955-4c7c-a4ee-9dc7e20cc502"}, "tags": [], "doc": null, "selection_glyph": null, "id": "2733a50b-6cd1-48a4-95dd-939a450e61c3", "glyph": {"type": "Circle", "id": "a595bc2d-b473-46d8-a7e2-8f8f93da35f6"}}, "type": "GlyphRenderer", "id": "2733a50b-6cd1-48a4-95dd-939a450e61c3"}, {"attributes": {"plot": {"type": "Plot", "id": "5af08a17-bc06-4922-bc71-551373a6f04b"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "959c223f-a802-43de-96f1-8108124fd472"}, "id": "bb9ecead-e8cc-4d19-b742-51fb0da5728b"}, "type": "Grid", "id": "bb9ecead-e8cc-4d19-b742-51fb0da5728b"}, {"attributes": {"doc": null, "id": "8b7b08d3-f506-41c4-9119-fec78b5ed204", "tags": []}, "type": "BasicTickFormatter", "id": "8b7b08d3-f506-41c4-9119-fec78b5ed204"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("b2e14f7b-1aac-4e80-84fb-377942307eeb", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("b2e14f7b-1aac-4e80-84fb-377942307eeb", all_models);
    });
  }

}(this));