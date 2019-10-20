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

  var elt = document.getElementById("65005a17-5613-4e20-8953-5c18a13af515");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '65005a17-5613-4e20-8953-5c18a13af515' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "38fec23c-4aee-4942-9110-b436970b4c52", "type": "LinearAxis", "attributes": {"id": "38fec23c-4aee-4942-9110-b436970b4c52", "formatter": {"id": "65cbe4bd-da3f-4c99-8854-b0522e658527", "type": "BasicTickFormatter"}, "plot": {"id": "c9a67d3d-10f3-41a2-a967-3956a5421365", "type": "Plot"}, "ticker": {"id": "8586c9b7-03d6-4b1a-a679-51775ba9c496", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "cb574dc3-2d0a-4778-bab0-d1a080cee617", "type": "Circle", "attributes": {"line_width": {"value": 3, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "cb574dc3-2d0a-4778-bab0-d1a080cee617", "fill_color": {"value": "white"}, "line_color": {"value": "#3288Bd"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "size": {"field": "sizes", "units": "screen"}}}, {"id": "044604d9-7083-4937-9f29-616140fe97e9", "type": "Grid", "attributes": {"id": "044604d9-7083-4937-9f29-616140fe97e9", "plot": {"id": "c9a67d3d-10f3-41a2-a967-3956a5421365", "type": "Plot"}, "dimension": 1, "ticker": {"id": "9aef8094-2307-4153-a5d2-1a1e78814446", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "98eccb81-ac86-43a7-87a0-d60ae37bfde4", "type": "Grid", "attributes": {"id": "98eccb81-ac86-43a7-87a0-d60ae37bfde4", "plot": {"id": "c9a67d3d-10f3-41a2-a967-3956a5421365", "type": "Plot"}, "dimension": 0, "ticker": {"id": "8586c9b7-03d6-4b1a-a679-51775ba9c496", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "63fc28f3-b511-4f56-a1c1-62cc1a0d72a1", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "866823ee-9967-46ac-95bc-84bc9cc7e2e6", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "63fc28f3-b511-4f56-a1c1-62cc1a0d72a1", "doc": null, "tags": []}}, {"id": "866823ee-9967-46ac-95bc-84bc9cc7e2e6", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["sizes", "y", "x"], "id": "866823ee-9967-46ac-95bc-84bc9cc7e2e6", "doc": null, "tags": []}}, {"id": "3a34758d-ad5e-451f-a237-88a1c05a3c14", "type": "ToolEvents", "attributes": {"geometries": [], "id": "3a34758d-ad5e-451f-a237-88a1c05a3c14", "doc": null, "tags": []}}, {"id": "f974879a-ab1f-4aac-8044-cf32a5c7be3a", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "866823ee-9967-46ac-95bc-84bc9cc7e2e6", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "f974879a-ab1f-4aac-8044-cf32a5c7be3a", "doc": null, "tags": []}}, {"id": "3abbdfc4-cf3b-4477-aa75-cf759561dd0e", "type": "LinearAxis", "attributes": {"id": "3abbdfc4-cf3b-4477-aa75-cf759561dd0e", "formatter": {"id": "f4ba84b9-d822-4f0f-8f72-738ed54dfb54", "type": "BasicTickFormatter"}, "plot": {"id": "c9a67d3d-10f3-41a2-a967-3956a5421365", "type": "Plot"}, "ticker": {"id": "9aef8094-2307-4153-a5d2-1a1e78814446", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "65cbe4bd-da3f-4c99-8854-b0522e658527", "type": "BasicTickFormatter", "attributes": {"id": "65cbe4bd-da3f-4c99-8854-b0522e658527", "doc": null, "tags": []}}, {"id": "c9a67d3d-10f3-41a2-a967-3956a5421365", "type": "Plot", "attributes": {"tool_events": {"id": "3a34758d-ad5e-451f-a237-88a1c05a3c14", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "f67c7c12-0834-4217-b9dc-b586a8393939", "type": "GlyphRenderer"}, {"id": "38fec23c-4aee-4942-9110-b436970b4c52", "type": "LinearAxis"}, {"id": "3abbdfc4-cf3b-4477-aa75-cf759561dd0e", "type": "LinearAxis"}, {"id": "98eccb81-ac86-43a7-87a0-d60ae37bfde4", "type": "Grid"}, {"id": "044604d9-7083-4937-9f29-616140fe97e9", "type": "Grid"}], "left": [{"id": "3abbdfc4-cf3b-4477-aa75-cf759561dd0e", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "f974879a-ab1f-4aac-8044-cf32a5c7be3a", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "c9a67d3d-10f3-41a2-a967-3956a5421365", "y_range": {"id": "63fc28f3-b511-4f56-a1c1-62cc1a0d72a1", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "38fec23c-4aee-4942-9110-b436970b4c52", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "9aef8094-2307-4153-a5d2-1a1e78814446", "type": "BasicTicker", "attributes": {"id": "9aef8094-2307-4153-a5d2-1a1e78814446", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "f67c7c12-0834-4217-b9dc-b586a8393939", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "866823ee-9967-46ac-95bc-84bc9cc7e2e6", "type": "ColumnDataSource"}, "id": "f67c7c12-0834-4217-b9dc-b586a8393939", "glyph": {"id": "cb574dc3-2d0a-4778-bab0-d1a080cee617", "type": "Circle"}, "tags": [], "doc": null}}, {"id": "8586c9b7-03d6-4b1a-a679-51775ba9c496", "type": "BasicTicker", "attributes": {"id": "8586c9b7-03d6-4b1a-a679-51775ba9c496", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "f4ba84b9-d822-4f0f-8f72-738ed54dfb54", "type": "BasicTickFormatter", "attributes": {"id": "f4ba84b9-d822-4f0f-8f72-738ed54dfb54", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("65005a17-5613-4e20-8953-5c18a13af515", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("65005a17-5613-4e20-8953-5c18a13af515", all_models);
    });
  }

}(this));